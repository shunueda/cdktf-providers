// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SStorageosComStorageOsClusterV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#metadata DataK8SStorageosComStorageOsClusterV1Manifest#metadata}
  */
  readonly metadata: DataK8SStorageosComStorageOsClusterV1ManifestMetadata;
  /**
  * StorageOSClusterSpec defines the desired state of StorageOSCluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#spec DataK8SStorageosComStorageOsClusterV1Manifest#spec}
  */
  readonly spec?: DataK8SStorageosComStorageOsClusterV1ManifestSpec;
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#annotations DataK8SStorageosComStorageOsClusterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#labels DataK8SStorageosComStorageOsClusterV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#name DataK8SStorageosComStorageOsClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#namespace DataK8SStorageosComStorageOsClusterV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestMetadataToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SStorageosComStorageOsClusterV1ManifestMetadataToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SStorageosComStorageOsClusterV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainer {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainerToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainerToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResources {
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#api_manager_container DataK8SStorageosComStorageOsClusterV1Manifest#api_manager_container}
  */
  readonly apiManagerContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#cli_container DataK8SStorageosComStorageOsClusterV1Manifest#cli_container}
  */
  readonly cliContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_external_attacher_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_external_attacher_container}
  */
  readonly csiExternalAttacherContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_external_provisioner_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_external_provisioner_container}
  */
  readonly csiExternalProvisionerContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_external_resizer_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_external_resizer_container}
  */
  readonly csiExternalResizerContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_external_snapshotter_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_external_snapshotter_container}
  */
  readonly csiExternalSnapshotterContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_liveness_probe_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_liveness_probe_container}
  */
  readonly csiLivenessProbeContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_node_driver_registrar_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_node_driver_registrar_container}
  */
  readonly csiNodeDriverRegistrarContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#init_container DataK8SStorageosComStorageOsClusterV1Manifest#init_container}
  */
  readonly initContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#kube_scheduler_container DataK8SStorageosComStorageOsClusterV1Manifest#kube_scheduler_container}
  */
  readonly kubeSchedulerContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#metrics_exporter_container DataK8SStorageosComStorageOsClusterV1Manifest#metrics_exporter_container}
  */
  readonly metricsExporterContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#node_container DataK8SStorageosComStorageOsClusterV1Manifest#node_container}
  */
  readonly nodeContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#node_manager_container DataK8SStorageosComStorageOsClusterV1Manifest#node_manager_container}
  */
  readonly nodeManagerContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#portal_manager_container DataK8SStorageosComStorageOsClusterV1Manifest#portal_manager_container}
  */
  readonly portalManagerContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainer;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#snapshot_controller_container DataK8SStorageosComStorageOsClusterV1Manifest#snapshot_controller_container}
  */
  readonly snapshotControllerContainer?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainer;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_manager_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainerToTerraform(struct!.apiManagerContainer),
    cli_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainerToTerraform(struct!.cliContainer),
    csi_external_attacher_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainerToTerraform(struct!.csiExternalAttacherContainer),
    csi_external_provisioner_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainerToTerraform(struct!.csiExternalProvisionerContainer),
    csi_external_resizer_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainerToTerraform(struct!.csiExternalResizerContainer),
    csi_external_snapshotter_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainerToTerraform(struct!.csiExternalSnapshotterContainer),
    csi_liveness_probe_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainerToTerraform(struct!.csiLivenessProbeContainer),
    csi_node_driver_registrar_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainerToTerraform(struct!.csiNodeDriverRegistrarContainer),
    init_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainerToTerraform(struct!.initContainer),
    kube_scheduler_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainerToTerraform(struct!.kubeSchedulerContainer),
    metrics_exporter_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainerToTerraform(struct!.metricsExporterContainer),
    node_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainerToTerraform(struct!.nodeContainer),
    node_manager_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainerToTerraform(struct!.nodeManagerContainer),
    portal_manager_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainerToTerraform(struct!.portalManagerContainer),
    snapshot_controller_container: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainerToTerraform(struct!.snapshotControllerContainer),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_manager_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainerToHclTerraform(struct!.apiManagerContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainer",
    },
    cli_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainerToHclTerraform(struct!.cliContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainer",
    },
    csi_external_attacher_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainerToHclTerraform(struct!.csiExternalAttacherContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainer",
    },
    csi_external_provisioner_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainerToHclTerraform(struct!.csiExternalProvisionerContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainer",
    },
    csi_external_resizer_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainerToHclTerraform(struct!.csiExternalResizerContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainer",
    },
    csi_external_snapshotter_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainerToHclTerraform(struct!.csiExternalSnapshotterContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainer",
    },
    csi_liveness_probe_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainerToHclTerraform(struct!.csiLivenessProbeContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainer",
    },
    csi_node_driver_registrar_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainerToHclTerraform(struct!.csiNodeDriverRegistrarContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainer",
    },
    init_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainerToHclTerraform(struct!.initContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainer",
    },
    kube_scheduler_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainerToHclTerraform(struct!.kubeSchedulerContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainer",
    },
    metrics_exporter_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainerToHclTerraform(struct!.metricsExporterContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainer",
    },
    node_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainerToHclTerraform(struct!.nodeContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainer",
    },
    node_manager_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainerToHclTerraform(struct!.nodeManagerContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainer",
    },
    portal_manager_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainerToHclTerraform(struct!.portalManagerContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainer",
    },
    snapshot_controller_container: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainerToHclTerraform(struct!.snapshotControllerContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiManagerContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiManagerContainer = this._apiManagerContainer?.internalValue;
    }
    if (this._cliContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliContainer = this._cliContainer?.internalValue;
    }
    if (this._csiExternalAttacherContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiExternalAttacherContainer = this._csiExternalAttacherContainer?.internalValue;
    }
    if (this._csiExternalProvisionerContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiExternalProvisionerContainer = this._csiExternalProvisionerContainer?.internalValue;
    }
    if (this._csiExternalResizerContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiExternalResizerContainer = this._csiExternalResizerContainer?.internalValue;
    }
    if (this._csiExternalSnapshotterContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiExternalSnapshotterContainer = this._csiExternalSnapshotterContainer?.internalValue;
    }
    if (this._csiLivenessProbeContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiLivenessProbeContainer = this._csiLivenessProbeContainer?.internalValue;
    }
    if (this._csiNodeDriverRegistrarContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiNodeDriverRegistrarContainer = this._csiNodeDriverRegistrarContainer?.internalValue;
    }
    if (this._initContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainer = this._initContainer?.internalValue;
    }
    if (this._kubeSchedulerContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeSchedulerContainer = this._kubeSchedulerContainer?.internalValue;
    }
    if (this._metricsExporterContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsExporterContainer = this._metricsExporterContainer?.internalValue;
    }
    if (this._nodeContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeContainer = this._nodeContainer?.internalValue;
    }
    if (this._nodeManagerContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeManagerContainer = this._nodeManagerContainer?.internalValue;
    }
    if (this._portalManagerContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalManagerContainer = this._portalManagerContainer?.internalValue;
    }
    if (this._snapshotControllerContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotControllerContainer = this._snapshotControllerContainer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiManagerContainer.internalValue = undefined;
      this._cliContainer.internalValue = undefined;
      this._csiExternalAttacherContainer.internalValue = undefined;
      this._csiExternalProvisionerContainer.internalValue = undefined;
      this._csiExternalResizerContainer.internalValue = undefined;
      this._csiExternalSnapshotterContainer.internalValue = undefined;
      this._csiLivenessProbeContainer.internalValue = undefined;
      this._csiNodeDriverRegistrarContainer.internalValue = undefined;
      this._initContainer.internalValue = undefined;
      this._kubeSchedulerContainer.internalValue = undefined;
      this._metricsExporterContainer.internalValue = undefined;
      this._nodeContainer.internalValue = undefined;
      this._nodeManagerContainer.internalValue = undefined;
      this._portalManagerContainer.internalValue = undefined;
      this._snapshotControllerContainer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiManagerContainer.internalValue = value.apiManagerContainer;
      this._cliContainer.internalValue = value.cliContainer;
      this._csiExternalAttacherContainer.internalValue = value.csiExternalAttacherContainer;
      this._csiExternalProvisionerContainer.internalValue = value.csiExternalProvisionerContainer;
      this._csiExternalResizerContainer.internalValue = value.csiExternalResizerContainer;
      this._csiExternalSnapshotterContainer.internalValue = value.csiExternalSnapshotterContainer;
      this._csiLivenessProbeContainer.internalValue = value.csiLivenessProbeContainer;
      this._csiNodeDriverRegistrarContainer.internalValue = value.csiNodeDriverRegistrarContainer;
      this._initContainer.internalValue = value.initContainer;
      this._kubeSchedulerContainer.internalValue = value.kubeSchedulerContainer;
      this._metricsExporterContainer.internalValue = value.metricsExporterContainer;
      this._nodeContainer.internalValue = value.nodeContainer;
      this._nodeManagerContainer.internalValue = value.nodeManagerContainer;
      this._portalManagerContainer.internalValue = value.portalManagerContainer;
      this._snapshotControllerContainer.internalValue = value.snapshotControllerContainer;
    }
  }

  // api_manager_container - computed: false, optional: true, required: false
  private _apiManagerContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainerOutputReference(this, "api_manager_container");
  public get apiManagerContainer() {
    return this._apiManagerContainer;
  }
  public putApiManagerContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesApiManagerContainer) {
    this._apiManagerContainer.internalValue = value;
  }
  public resetApiManagerContainer() {
    this._apiManagerContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagerContainerInput() {
    return this._apiManagerContainer.internalValue;
  }

  // cli_container - computed: false, optional: true, required: false
  private _cliContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainerOutputReference(this, "cli_container");
  public get cliContainer() {
    return this._cliContainer;
  }
  public putCliContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCliContainer) {
    this._cliContainer.internalValue = value;
  }
  public resetCliContainer() {
    this._cliContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliContainerInput() {
    return this._cliContainer.internalValue;
  }

  // csi_external_attacher_container - computed: false, optional: true, required: false
  private _csiExternalAttacherContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainerOutputReference(this, "csi_external_attacher_container");
  public get csiExternalAttacherContainer() {
    return this._csiExternalAttacherContainer;
  }
  public putCsiExternalAttacherContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalAttacherContainer) {
    this._csiExternalAttacherContainer.internalValue = value;
  }
  public resetCsiExternalAttacherContainer() {
    this._csiExternalAttacherContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiExternalAttacherContainerInput() {
    return this._csiExternalAttacherContainer.internalValue;
  }

  // csi_external_provisioner_container - computed: false, optional: true, required: false
  private _csiExternalProvisionerContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainerOutputReference(this, "csi_external_provisioner_container");
  public get csiExternalProvisionerContainer() {
    return this._csiExternalProvisionerContainer;
  }
  public putCsiExternalProvisionerContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalProvisionerContainer) {
    this._csiExternalProvisionerContainer.internalValue = value;
  }
  public resetCsiExternalProvisionerContainer() {
    this._csiExternalProvisionerContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiExternalProvisionerContainerInput() {
    return this._csiExternalProvisionerContainer.internalValue;
  }

  // csi_external_resizer_container - computed: false, optional: true, required: false
  private _csiExternalResizerContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainerOutputReference(this, "csi_external_resizer_container");
  public get csiExternalResizerContainer() {
    return this._csiExternalResizerContainer;
  }
  public putCsiExternalResizerContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalResizerContainer) {
    this._csiExternalResizerContainer.internalValue = value;
  }
  public resetCsiExternalResizerContainer() {
    this._csiExternalResizerContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiExternalResizerContainerInput() {
    return this._csiExternalResizerContainer.internalValue;
  }

  // csi_external_snapshotter_container - computed: false, optional: true, required: false
  private _csiExternalSnapshotterContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainerOutputReference(this, "csi_external_snapshotter_container");
  public get csiExternalSnapshotterContainer() {
    return this._csiExternalSnapshotterContainer;
  }
  public putCsiExternalSnapshotterContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiExternalSnapshotterContainer) {
    this._csiExternalSnapshotterContainer.internalValue = value;
  }
  public resetCsiExternalSnapshotterContainer() {
    this._csiExternalSnapshotterContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiExternalSnapshotterContainerInput() {
    return this._csiExternalSnapshotterContainer.internalValue;
  }

  // csi_liveness_probe_container - computed: false, optional: true, required: false
  private _csiLivenessProbeContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainerOutputReference(this, "csi_liveness_probe_container");
  public get csiLivenessProbeContainer() {
    return this._csiLivenessProbeContainer;
  }
  public putCsiLivenessProbeContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiLivenessProbeContainer) {
    this._csiLivenessProbeContainer.internalValue = value;
  }
  public resetCsiLivenessProbeContainer() {
    this._csiLivenessProbeContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiLivenessProbeContainerInput() {
    return this._csiLivenessProbeContainer.internalValue;
  }

  // csi_node_driver_registrar_container - computed: false, optional: true, required: false
  private _csiNodeDriverRegistrarContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainerOutputReference(this, "csi_node_driver_registrar_container");
  public get csiNodeDriverRegistrarContainer() {
    return this._csiNodeDriverRegistrarContainer;
  }
  public putCsiNodeDriverRegistrarContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesCsiNodeDriverRegistrarContainer) {
    this._csiNodeDriverRegistrarContainer.internalValue = value;
  }
  public resetCsiNodeDriverRegistrarContainer() {
    this._csiNodeDriverRegistrarContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiNodeDriverRegistrarContainerInput() {
    return this._csiNodeDriverRegistrarContainer.internalValue;
  }

  // init_container - computed: false, optional: true, required: false
  private _initContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainerOutputReference(this, "init_container");
  public get initContainer() {
    return this._initContainer;
  }
  public putInitContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesInitContainer) {
    this._initContainer.internalValue = value;
  }
  public resetInitContainer() {
    this._initContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerInput() {
    return this._initContainer.internalValue;
  }

  // kube_scheduler_container - computed: false, optional: true, required: false
  private _kubeSchedulerContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainerOutputReference(this, "kube_scheduler_container");
  public get kubeSchedulerContainer() {
    return this._kubeSchedulerContainer;
  }
  public putKubeSchedulerContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesKubeSchedulerContainer) {
    this._kubeSchedulerContainer.internalValue = value;
  }
  public resetKubeSchedulerContainer() {
    this._kubeSchedulerContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeSchedulerContainerInput() {
    return this._kubeSchedulerContainer.internalValue;
  }

  // metrics_exporter_container - computed: false, optional: true, required: false
  private _metricsExporterContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainerOutputReference(this, "metrics_exporter_container");
  public get metricsExporterContainer() {
    return this._metricsExporterContainer;
  }
  public putMetricsExporterContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesMetricsExporterContainer) {
    this._metricsExporterContainer.internalValue = value;
  }
  public resetMetricsExporterContainer() {
    this._metricsExporterContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsExporterContainerInput() {
    return this._metricsExporterContainer.internalValue;
  }

  // node_container - computed: false, optional: true, required: false
  private _nodeContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainerOutputReference(this, "node_container");
  public get nodeContainer() {
    return this._nodeContainer;
  }
  public putNodeContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeContainer) {
    this._nodeContainer.internalValue = value;
  }
  public resetNodeContainer() {
    this._nodeContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeContainerInput() {
    return this._nodeContainer.internalValue;
  }

  // node_manager_container - computed: false, optional: true, required: false
  private _nodeManagerContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainerOutputReference(this, "node_manager_container");
  public get nodeManagerContainer() {
    return this._nodeManagerContainer;
  }
  public putNodeManagerContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesNodeManagerContainer) {
    this._nodeManagerContainer.internalValue = value;
  }
  public resetNodeManagerContainer() {
    this._nodeManagerContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeManagerContainerInput() {
    return this._nodeManagerContainer.internalValue;
  }

  // portal_manager_container - computed: false, optional: true, required: false
  private _portalManagerContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainerOutputReference(this, "portal_manager_container");
  public get portalManagerContainer() {
    return this._portalManagerContainer;
  }
  public putPortalManagerContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesPortalManagerContainer) {
    this._portalManagerContainer.internalValue = value;
  }
  public resetPortalManagerContainer() {
    this._portalManagerContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalManagerContainerInput() {
    return this._portalManagerContainer.internalValue;
  }

  // snapshot_controller_container - computed: false, optional: true, required: false
  private _snapshotControllerContainer = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainerOutputReference(this, "snapshot_controller_container");
  public get snapshotControllerContainer() {
    return this._snapshotControllerContainer;
  }
  public putSnapshotControllerContainer(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesSnapshotControllerContainer) {
    this._snapshotControllerContainer.internalValue = value;
  }
  public resetSnapshotControllerContainer() {
    this._snapshotControllerContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotControllerContainerInput() {
    return this._snapshotControllerContainer.internalValue;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecCsi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#attacher_timeout DataK8SStorageosComStorageOsClusterV1Manifest#attacher_timeout}
  */
  readonly attacherTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#deployment_strategy DataK8SStorageosComStorageOsClusterV1Manifest#deployment_strategy}
  */
  readonly deploymentStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#device_dir DataK8SStorageosComStorageOsClusterV1Manifest#device_dir}
  */
  readonly deviceDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#driver_registeration_mode DataK8SStorageosComStorageOsClusterV1Manifest#driver_registeration_mode}
  */
  readonly driverRegisterationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#driver_requires_attachment DataK8SStorageosComStorageOsClusterV1Manifest#driver_requires_attachment}
  */
  readonly driverRequiresAttachment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#enable DataK8SStorageosComStorageOsClusterV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#enable_controller_expand_creds DataK8SStorageosComStorageOsClusterV1Manifest#enable_controller_expand_creds}
  */
  readonly enableControllerExpandCreds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#enable_controller_publish_creds DataK8SStorageosComStorageOsClusterV1Manifest#enable_controller_publish_creds}
  */
  readonly enableControllerPublishCreds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#enable_node_publish_creds DataK8SStorageosComStorageOsClusterV1Manifest#enable_node_publish_creds}
  */
  readonly enableNodePublishCreds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#enable_provision_creds DataK8SStorageosComStorageOsClusterV1Manifest#enable_provision_creds}
  */
  readonly enableProvisionCreds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#endpoint DataK8SStorageosComStorageOsClusterV1Manifest#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#kubelet_dir DataK8SStorageosComStorageOsClusterV1Manifest#kubelet_dir}
  */
  readonly kubeletDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#kubelet_registration_path DataK8SStorageosComStorageOsClusterV1Manifest#kubelet_registration_path}
  */
  readonly kubeletRegistrationPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#plugin_dir DataK8SStorageosComStorageOsClusterV1Manifest#plugin_dir}
  */
  readonly pluginDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#provisioner_timeout DataK8SStorageosComStorageOsClusterV1Manifest#provisioner_timeout}
  */
  readonly provisionerTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#provisioner_worker_count DataK8SStorageosComStorageOsClusterV1Manifest#provisioner_worker_count}
  */
  readonly provisionerWorkerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#registrar_socket_dir DataK8SStorageosComStorageOsClusterV1Manifest#registrar_socket_dir}
  */
  readonly registrarSocketDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#registration_dir DataK8SStorageosComStorageOsClusterV1Manifest#registration_dir}
  */
  readonly registrationDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#resizer_timeout DataK8SStorageosComStorageOsClusterV1Manifest#resizer_timeout}
  */
  readonly resizerTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#snapshotter_timeout DataK8SStorageosComStorageOsClusterV1Manifest#snapshotter_timeout}
  */
  readonly snapshotterTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#version DataK8SStorageosComStorageOsClusterV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecCsiToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attacher_timeout: cdktf.stringToTerraform(struct!.attacherTimeout),
    deployment_strategy: cdktf.stringToTerraform(struct!.deploymentStrategy),
    device_dir: cdktf.stringToTerraform(struct!.deviceDir),
    driver_registeration_mode: cdktf.stringToTerraform(struct!.driverRegisterationMode),
    driver_requires_attachment: cdktf.stringToTerraform(struct!.driverRequiresAttachment),
    enable: cdktf.booleanToTerraform(struct!.enable),
    enable_controller_expand_creds: cdktf.booleanToTerraform(struct!.enableControllerExpandCreds),
    enable_controller_publish_creds: cdktf.booleanToTerraform(struct!.enableControllerPublishCreds),
    enable_node_publish_creds: cdktf.booleanToTerraform(struct!.enableNodePublishCreds),
    enable_provision_creds: cdktf.booleanToTerraform(struct!.enableProvisionCreds),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    kubelet_dir: cdktf.stringToTerraform(struct!.kubeletDir),
    kubelet_registration_path: cdktf.stringToTerraform(struct!.kubeletRegistrationPath),
    plugin_dir: cdktf.stringToTerraform(struct!.pluginDir),
    provisioner_timeout: cdktf.stringToTerraform(struct!.provisionerTimeout),
    provisioner_worker_count: cdktf.numberToTerraform(struct!.provisionerWorkerCount),
    registrar_socket_dir: cdktf.stringToTerraform(struct!.registrarSocketDir),
    registration_dir: cdktf.stringToTerraform(struct!.registrationDir),
    resizer_timeout: cdktf.stringToTerraform(struct!.resizerTimeout),
    snapshotter_timeout: cdktf.stringToTerraform(struct!.snapshotterTimeout),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecCsiToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attacher_timeout: {
      value: cdktf.stringToHclTerraform(struct!.attacherTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_strategy: {
      value: cdktf.stringToHclTerraform(struct!.deploymentStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_dir: {
      value: cdktf.stringToHclTerraform(struct!.deviceDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_registeration_mode: {
      value: cdktf.stringToHclTerraform(struct!.driverRegisterationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_requires_attachment: {
      value: cdktf.stringToHclTerraform(struct!.driverRequiresAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_controller_expand_creds: {
      value: cdktf.booleanToHclTerraform(struct!.enableControllerExpandCreds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_controller_publish_creds: {
      value: cdktf.booleanToHclTerraform(struct!.enableControllerPublishCreds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_node_publish_creds: {
      value: cdktf.booleanToHclTerraform(struct!.enableNodePublishCreds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_provision_creds: {
      value: cdktf.booleanToHclTerraform(struct!.enableProvisionCreds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_dir: {
      value: cdktf.stringToHclTerraform(struct!.kubeletDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_registration_path: {
      value: cdktf.stringToHclTerraform(struct!.kubeletRegistrationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_dir: {
      value: cdktf.stringToHclTerraform(struct!.pluginDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioner_timeout: {
      value: cdktf.stringToHclTerraform(struct!.provisionerTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioner_worker_count: {
      value: cdktf.numberToHclTerraform(struct!.provisionerWorkerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    registrar_socket_dir: {
      value: cdktf.stringToHclTerraform(struct!.registrarSocketDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration_dir: {
      value: cdktf.stringToHclTerraform(struct!.registrationDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resizer_timeout: {
      value: cdktf.stringToHclTerraform(struct!.resizerTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshotter_timeout: {
      value: cdktf.stringToHclTerraform(struct!.snapshotterTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecCsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attacherTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.attacherTimeout = this._attacherTimeout;
    }
    if (this._deploymentStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentStrategy = this._deploymentStrategy;
    }
    if (this._deviceDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDir = this._deviceDir;
    }
    if (this._driverRegisterationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverRegisterationMode = this._driverRegisterationMode;
    }
    if (this._driverRequiresAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverRequiresAttachment = this._driverRequiresAttachment;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enableControllerExpandCreds !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableControllerExpandCreds = this._enableControllerExpandCreds;
    }
    if (this._enableControllerPublishCreds !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableControllerPublishCreds = this._enableControllerPublishCreds;
    }
    if (this._enableNodePublishCreds !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNodePublishCreds = this._enableNodePublishCreds;
    }
    if (this._enableProvisionCreds !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableProvisionCreds = this._enableProvisionCreds;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kubeletDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletDir = this._kubeletDir;
    }
    if (this._kubeletRegistrationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletRegistrationPath = this._kubeletRegistrationPath;
    }
    if (this._pluginDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginDir = this._pluginDir;
    }
    if (this._provisionerTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerTimeout = this._provisionerTimeout;
    }
    if (this._provisionerWorkerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerWorkerCount = this._provisionerWorkerCount;
    }
    if (this._registrarSocketDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrarSocketDir = this._registrarSocketDir;
    }
    if (this._registrationDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationDir = this._registrationDir;
    }
    if (this._resizerTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizerTimeout = this._resizerTimeout;
    }
    if (this._snapshotterTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotterTimeout = this._snapshotterTimeout;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecCsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attacherTimeout = undefined;
      this._deploymentStrategy = undefined;
      this._deviceDir = undefined;
      this._driverRegisterationMode = undefined;
      this._driverRequiresAttachment = undefined;
      this._enable = undefined;
      this._enableControllerExpandCreds = undefined;
      this._enableControllerPublishCreds = undefined;
      this._enableNodePublishCreds = undefined;
      this._enableProvisionCreds = undefined;
      this._endpoint = undefined;
      this._kubeletDir = undefined;
      this._kubeletRegistrationPath = undefined;
      this._pluginDir = undefined;
      this._provisionerTimeout = undefined;
      this._provisionerWorkerCount = undefined;
      this._registrarSocketDir = undefined;
      this._registrationDir = undefined;
      this._resizerTimeout = undefined;
      this._snapshotterTimeout = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attacherTimeout = value.attacherTimeout;
      this._deploymentStrategy = value.deploymentStrategy;
      this._deviceDir = value.deviceDir;
      this._driverRegisterationMode = value.driverRegisterationMode;
      this._driverRequiresAttachment = value.driverRequiresAttachment;
      this._enable = value.enable;
      this._enableControllerExpandCreds = value.enableControllerExpandCreds;
      this._enableControllerPublishCreds = value.enableControllerPublishCreds;
      this._enableNodePublishCreds = value.enableNodePublishCreds;
      this._enableProvisionCreds = value.enableProvisionCreds;
      this._endpoint = value.endpoint;
      this._kubeletDir = value.kubeletDir;
      this._kubeletRegistrationPath = value.kubeletRegistrationPath;
      this._pluginDir = value.pluginDir;
      this._provisionerTimeout = value.provisionerTimeout;
      this._provisionerWorkerCount = value.provisionerWorkerCount;
      this._registrarSocketDir = value.registrarSocketDir;
      this._registrationDir = value.registrationDir;
      this._resizerTimeout = value.resizerTimeout;
      this._snapshotterTimeout = value.snapshotterTimeout;
      this._version = value.version;
    }
  }

  // attacher_timeout - computed: false, optional: true, required: false
  private _attacherTimeout?: string; 
  public get attacherTimeout() {
    return this.getStringAttribute('attacher_timeout');
  }
  public set attacherTimeout(value: string) {
    this._attacherTimeout = value;
  }
  public resetAttacherTimeout() {
    this._attacherTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attacherTimeoutInput() {
    return this._attacherTimeout;
  }

  // deployment_strategy - computed: false, optional: true, required: false
  private _deploymentStrategy?: string; 
  public get deploymentStrategy() {
    return this.getStringAttribute('deployment_strategy');
  }
  public set deploymentStrategy(value: string) {
    this._deploymentStrategy = value;
  }
  public resetDeploymentStrategy() {
    this._deploymentStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStrategyInput() {
    return this._deploymentStrategy;
  }

  // device_dir - computed: false, optional: true, required: false
  private _deviceDir?: string; 
  public get deviceDir() {
    return this.getStringAttribute('device_dir');
  }
  public set deviceDir(value: string) {
    this._deviceDir = value;
  }
  public resetDeviceDir() {
    this._deviceDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDirInput() {
    return this._deviceDir;
  }

  // driver_registeration_mode - computed: false, optional: true, required: false
  private _driverRegisterationMode?: string; 
  public get driverRegisterationMode() {
    return this.getStringAttribute('driver_registeration_mode');
  }
  public set driverRegisterationMode(value: string) {
    this._driverRegisterationMode = value;
  }
  public resetDriverRegisterationMode() {
    this._driverRegisterationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverRegisterationModeInput() {
    return this._driverRegisterationMode;
  }

  // driver_requires_attachment - computed: false, optional: true, required: false
  private _driverRequiresAttachment?: string; 
  public get driverRequiresAttachment() {
    return this.getStringAttribute('driver_requires_attachment');
  }
  public set driverRequiresAttachment(value: string) {
    this._driverRequiresAttachment = value;
  }
  public resetDriverRequiresAttachment() {
    this._driverRequiresAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverRequiresAttachmentInput() {
    return this._driverRequiresAttachment;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_controller_expand_creds - computed: false, optional: true, required: false
  private _enableControllerExpandCreds?: boolean | cdktf.IResolvable; 
  public get enableControllerExpandCreds() {
    return this.getBooleanAttribute('enable_controller_expand_creds');
  }
  public set enableControllerExpandCreds(value: boolean | cdktf.IResolvable) {
    this._enableControllerExpandCreds = value;
  }
  public resetEnableControllerExpandCreds() {
    this._enableControllerExpandCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableControllerExpandCredsInput() {
    return this._enableControllerExpandCreds;
  }

  // enable_controller_publish_creds - computed: false, optional: true, required: false
  private _enableControllerPublishCreds?: boolean | cdktf.IResolvable; 
  public get enableControllerPublishCreds() {
    return this.getBooleanAttribute('enable_controller_publish_creds');
  }
  public set enableControllerPublishCreds(value: boolean | cdktf.IResolvable) {
    this._enableControllerPublishCreds = value;
  }
  public resetEnableControllerPublishCreds() {
    this._enableControllerPublishCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableControllerPublishCredsInput() {
    return this._enableControllerPublishCreds;
  }

  // enable_node_publish_creds - computed: false, optional: true, required: false
  private _enableNodePublishCreds?: boolean | cdktf.IResolvable; 
  public get enableNodePublishCreds() {
    return this.getBooleanAttribute('enable_node_publish_creds');
  }
  public set enableNodePublishCreds(value: boolean | cdktf.IResolvable) {
    this._enableNodePublishCreds = value;
  }
  public resetEnableNodePublishCreds() {
    this._enableNodePublishCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodePublishCredsInput() {
    return this._enableNodePublishCreds;
  }

  // enable_provision_creds - computed: false, optional: true, required: false
  private _enableProvisionCreds?: boolean | cdktf.IResolvable; 
  public get enableProvisionCreds() {
    return this.getBooleanAttribute('enable_provision_creds');
  }
  public set enableProvisionCreds(value: boolean | cdktf.IResolvable) {
    this._enableProvisionCreds = value;
  }
  public resetEnableProvisionCreds() {
    this._enableProvisionCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProvisionCredsInput() {
    return this._enableProvisionCreds;
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

  // kubelet_dir - computed: false, optional: true, required: false
  private _kubeletDir?: string; 
  public get kubeletDir() {
    return this.getStringAttribute('kubelet_dir');
  }
  public set kubeletDir(value: string) {
    this._kubeletDir = value;
  }
  public resetKubeletDir() {
    this._kubeletDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletDirInput() {
    return this._kubeletDir;
  }

  // kubelet_registration_path - computed: false, optional: true, required: false
  private _kubeletRegistrationPath?: string; 
  public get kubeletRegistrationPath() {
    return this.getStringAttribute('kubelet_registration_path');
  }
  public set kubeletRegistrationPath(value: string) {
    this._kubeletRegistrationPath = value;
  }
  public resetKubeletRegistrationPath() {
    this._kubeletRegistrationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletRegistrationPathInput() {
    return this._kubeletRegistrationPath;
  }

  // plugin_dir - computed: false, optional: true, required: false
  private _pluginDir?: string; 
  public get pluginDir() {
    return this.getStringAttribute('plugin_dir');
  }
  public set pluginDir(value: string) {
    this._pluginDir = value;
  }
  public resetPluginDir() {
    this._pluginDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginDirInput() {
    return this._pluginDir;
  }

  // provisioner_timeout - computed: false, optional: true, required: false
  private _provisionerTimeout?: string; 
  public get provisionerTimeout() {
    return this.getStringAttribute('provisioner_timeout');
  }
  public set provisionerTimeout(value: string) {
    this._provisionerTimeout = value;
  }
  public resetProvisionerTimeout() {
    this._provisionerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerTimeoutInput() {
    return this._provisionerTimeout;
  }

  // provisioner_worker_count - computed: false, optional: true, required: false
  private _provisionerWorkerCount?: number; 
  public get provisionerWorkerCount() {
    return this.getNumberAttribute('provisioner_worker_count');
  }
  public set provisionerWorkerCount(value: number) {
    this._provisionerWorkerCount = value;
  }
  public resetProvisionerWorkerCount() {
    this._provisionerWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerWorkerCountInput() {
    return this._provisionerWorkerCount;
  }

  // registrar_socket_dir - computed: false, optional: true, required: false
  private _registrarSocketDir?: string; 
  public get registrarSocketDir() {
    return this.getStringAttribute('registrar_socket_dir');
  }
  public set registrarSocketDir(value: string) {
    this._registrarSocketDir = value;
  }
  public resetRegistrarSocketDir() {
    this._registrarSocketDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrarSocketDirInput() {
    return this._registrarSocketDir;
  }

  // registration_dir - computed: false, optional: true, required: false
  private _registrationDir?: string; 
  public get registrationDir() {
    return this.getStringAttribute('registration_dir');
  }
  public set registrationDir(value: string) {
    this._registrationDir = value;
  }
  public resetRegistrationDir() {
    this._registrationDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationDirInput() {
    return this._registrationDir;
  }

  // resizer_timeout - computed: false, optional: true, required: false
  private _resizerTimeout?: string; 
  public get resizerTimeout() {
    return this.getStringAttribute('resizer_timeout');
  }
  public set resizerTimeout(value: string) {
    this._resizerTimeout = value;
  }
  public resetResizerTimeout() {
    this._resizerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizerTimeoutInput() {
    return this._resizerTimeout;
  }

  // snapshotter_timeout - computed: false, optional: true, required: false
  private _snapshotterTimeout?: string; 
  public get snapshotterTimeout() {
    return this.getStringAttribute('snapshotter_timeout');
  }
  public set snapshotterTimeout(value: string) {
    this._snapshotterTimeout = value;
  }
  public resetSnapshotterTimeout() {
    this._snapshotterTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotterTimeoutInput() {
    return this._snapshotterTimeout;
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
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#api_manager_container DataK8SStorageosComStorageOsClusterV1Manifest#api_manager_container}
  */
  readonly apiManagerContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#cli_container DataK8SStorageosComStorageOsClusterV1Manifest#cli_container}
  */
  readonly cliContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_cluster_driver_registrar_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_cluster_driver_registrar_container}
  */
  readonly csiClusterDriverRegistrarContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_external_attacher_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_external_attacher_container}
  */
  readonly csiExternalAttacherContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_external_provisioner_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_external_provisioner_container}
  */
  readonly csiExternalProvisionerContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_external_resizer_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_external_resizer_container}
  */
  readonly csiExternalResizerContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_external_snapshotter_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_external_snapshotter_container}
  */
  readonly csiExternalSnapshotterContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_liveness_probe_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_liveness_probe_container}
  */
  readonly csiLivenessProbeContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi_node_driver_registrar_container DataK8SStorageosComStorageOsClusterV1Manifest#csi_node_driver_registrar_container}
  */
  readonly csiNodeDriverRegistrarContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#hyperkube_container DataK8SStorageosComStorageOsClusterV1Manifest#hyperkube_container}
  */
  readonly hyperkubeContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#init_container DataK8SStorageosComStorageOsClusterV1Manifest#init_container}
  */
  readonly initContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#kube_scheduler_container DataK8SStorageosComStorageOsClusterV1Manifest#kube_scheduler_container}
  */
  readonly kubeSchedulerContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#metrics_exporter_container DataK8SStorageosComStorageOsClusterV1Manifest#metrics_exporter_container}
  */
  readonly metricsExporterContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#nfs_container DataK8SStorageosComStorageOsClusterV1Manifest#nfs_container}
  */
  readonly nfsContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#node_container DataK8SStorageosComStorageOsClusterV1Manifest#node_container}
  */
  readonly nodeContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#node_guard_container DataK8SStorageosComStorageOsClusterV1Manifest#node_guard_container}
  */
  readonly nodeGuardContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#node_manager_container DataK8SStorageosComStorageOsClusterV1Manifest#node_manager_container}
  */
  readonly nodeManagerContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#portal_manager_container DataK8SStorageosComStorageOsClusterV1Manifest#portal_manager_container}
  */
  readonly portalManagerContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#snapshot_controller_container DataK8SStorageosComStorageOsClusterV1Manifest#snapshot_controller_container}
  */
  readonly snapshotControllerContainer?: string;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecImagesToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_manager_container: cdktf.stringToTerraform(struct!.apiManagerContainer),
    cli_container: cdktf.stringToTerraform(struct!.cliContainer),
    csi_cluster_driver_registrar_container: cdktf.stringToTerraform(struct!.csiClusterDriverRegistrarContainer),
    csi_external_attacher_container: cdktf.stringToTerraform(struct!.csiExternalAttacherContainer),
    csi_external_provisioner_container: cdktf.stringToTerraform(struct!.csiExternalProvisionerContainer),
    csi_external_resizer_container: cdktf.stringToTerraform(struct!.csiExternalResizerContainer),
    csi_external_snapshotter_container: cdktf.stringToTerraform(struct!.csiExternalSnapshotterContainer),
    csi_liveness_probe_container: cdktf.stringToTerraform(struct!.csiLivenessProbeContainer),
    csi_node_driver_registrar_container: cdktf.stringToTerraform(struct!.csiNodeDriverRegistrarContainer),
    hyperkube_container: cdktf.stringToTerraform(struct!.hyperkubeContainer),
    init_container: cdktf.stringToTerraform(struct!.initContainer),
    kube_scheduler_container: cdktf.stringToTerraform(struct!.kubeSchedulerContainer),
    metrics_exporter_container: cdktf.stringToTerraform(struct!.metricsExporterContainer),
    nfs_container: cdktf.stringToTerraform(struct!.nfsContainer),
    node_container: cdktf.stringToTerraform(struct!.nodeContainer),
    node_guard_container: cdktf.stringToTerraform(struct!.nodeGuardContainer),
    node_manager_container: cdktf.stringToTerraform(struct!.nodeManagerContainer),
    portal_manager_container: cdktf.stringToTerraform(struct!.portalManagerContainer),
    snapshot_controller_container: cdktf.stringToTerraform(struct!.snapshotControllerContainer),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecImagesToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_manager_container: {
      value: cdktf.stringToHclTerraform(struct!.apiManagerContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_container: {
      value: cdktf.stringToHclTerraform(struct!.cliContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csi_cluster_driver_registrar_container: {
      value: cdktf.stringToHclTerraform(struct!.csiClusterDriverRegistrarContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csi_external_attacher_container: {
      value: cdktf.stringToHclTerraform(struct!.csiExternalAttacherContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csi_external_provisioner_container: {
      value: cdktf.stringToHclTerraform(struct!.csiExternalProvisionerContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csi_external_resizer_container: {
      value: cdktf.stringToHclTerraform(struct!.csiExternalResizerContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csi_external_snapshotter_container: {
      value: cdktf.stringToHclTerraform(struct!.csiExternalSnapshotterContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csi_liveness_probe_container: {
      value: cdktf.stringToHclTerraform(struct!.csiLivenessProbeContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csi_node_driver_registrar_container: {
      value: cdktf.stringToHclTerraform(struct!.csiNodeDriverRegistrarContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hyperkube_container: {
      value: cdktf.stringToHclTerraform(struct!.hyperkubeContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_container: {
      value: cdktf.stringToHclTerraform(struct!.initContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_scheduler_container: {
      value: cdktf.stringToHclTerraform(struct!.kubeSchedulerContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_exporter_container: {
      value: cdktf.stringToHclTerraform(struct!.metricsExporterContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_container: {
      value: cdktf.stringToHclTerraform(struct!.nfsContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_container: {
      value: cdktf.stringToHclTerraform(struct!.nodeContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_guard_container: {
      value: cdktf.stringToHclTerraform(struct!.nodeGuardContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_manager_container: {
      value: cdktf.stringToHclTerraform(struct!.nodeManagerContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portal_manager_container: {
      value: cdktf.stringToHclTerraform(struct!.portalManagerContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_controller_container: {
      value: cdktf.stringToHclTerraform(struct!.snapshotControllerContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiManagerContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiManagerContainer = this._apiManagerContainer;
    }
    if (this._cliContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliContainer = this._cliContainer;
    }
    if (this._csiClusterDriverRegistrarContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiClusterDriverRegistrarContainer = this._csiClusterDriverRegistrarContainer;
    }
    if (this._csiExternalAttacherContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiExternalAttacherContainer = this._csiExternalAttacherContainer;
    }
    if (this._csiExternalProvisionerContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiExternalProvisionerContainer = this._csiExternalProvisionerContainer;
    }
    if (this._csiExternalResizerContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiExternalResizerContainer = this._csiExternalResizerContainer;
    }
    if (this._csiExternalSnapshotterContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiExternalSnapshotterContainer = this._csiExternalSnapshotterContainer;
    }
    if (this._csiLivenessProbeContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiLivenessProbeContainer = this._csiLivenessProbeContainer;
    }
    if (this._csiNodeDriverRegistrarContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiNodeDriverRegistrarContainer = this._csiNodeDriverRegistrarContainer;
    }
    if (this._hyperkubeContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperkubeContainer = this._hyperkubeContainer;
    }
    if (this._initContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainer = this._initContainer;
    }
    if (this._kubeSchedulerContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeSchedulerContainer = this._kubeSchedulerContainer;
    }
    if (this._metricsExporterContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsExporterContainer = this._metricsExporterContainer;
    }
    if (this._nfsContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsContainer = this._nfsContainer;
    }
    if (this._nodeContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeContainer = this._nodeContainer;
    }
    if (this._nodeGuardContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGuardContainer = this._nodeGuardContainer;
    }
    if (this._nodeManagerContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeManagerContainer = this._nodeManagerContainer;
    }
    if (this._portalManagerContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalManagerContainer = this._portalManagerContainer;
    }
    if (this._snapshotControllerContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotControllerContainer = this._snapshotControllerContainer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiManagerContainer = undefined;
      this._cliContainer = undefined;
      this._csiClusterDriverRegistrarContainer = undefined;
      this._csiExternalAttacherContainer = undefined;
      this._csiExternalProvisionerContainer = undefined;
      this._csiExternalResizerContainer = undefined;
      this._csiExternalSnapshotterContainer = undefined;
      this._csiLivenessProbeContainer = undefined;
      this._csiNodeDriverRegistrarContainer = undefined;
      this._hyperkubeContainer = undefined;
      this._initContainer = undefined;
      this._kubeSchedulerContainer = undefined;
      this._metricsExporterContainer = undefined;
      this._nfsContainer = undefined;
      this._nodeContainer = undefined;
      this._nodeGuardContainer = undefined;
      this._nodeManagerContainer = undefined;
      this._portalManagerContainer = undefined;
      this._snapshotControllerContainer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiManagerContainer = value.apiManagerContainer;
      this._cliContainer = value.cliContainer;
      this._csiClusterDriverRegistrarContainer = value.csiClusterDriverRegistrarContainer;
      this._csiExternalAttacherContainer = value.csiExternalAttacherContainer;
      this._csiExternalProvisionerContainer = value.csiExternalProvisionerContainer;
      this._csiExternalResizerContainer = value.csiExternalResizerContainer;
      this._csiExternalSnapshotterContainer = value.csiExternalSnapshotterContainer;
      this._csiLivenessProbeContainer = value.csiLivenessProbeContainer;
      this._csiNodeDriverRegistrarContainer = value.csiNodeDriverRegistrarContainer;
      this._hyperkubeContainer = value.hyperkubeContainer;
      this._initContainer = value.initContainer;
      this._kubeSchedulerContainer = value.kubeSchedulerContainer;
      this._metricsExporterContainer = value.metricsExporterContainer;
      this._nfsContainer = value.nfsContainer;
      this._nodeContainer = value.nodeContainer;
      this._nodeGuardContainer = value.nodeGuardContainer;
      this._nodeManagerContainer = value.nodeManagerContainer;
      this._portalManagerContainer = value.portalManagerContainer;
      this._snapshotControllerContainer = value.snapshotControllerContainer;
    }
  }

  // api_manager_container - computed: false, optional: true, required: false
  private _apiManagerContainer?: string; 
  public get apiManagerContainer() {
    return this.getStringAttribute('api_manager_container');
  }
  public set apiManagerContainer(value: string) {
    this._apiManagerContainer = value;
  }
  public resetApiManagerContainer() {
    this._apiManagerContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagerContainerInput() {
    return this._apiManagerContainer;
  }

  // cli_container - computed: false, optional: true, required: false
  private _cliContainer?: string; 
  public get cliContainer() {
    return this.getStringAttribute('cli_container');
  }
  public set cliContainer(value: string) {
    this._cliContainer = value;
  }
  public resetCliContainer() {
    this._cliContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliContainerInput() {
    return this._cliContainer;
  }

  // csi_cluster_driver_registrar_container - computed: false, optional: true, required: false
  private _csiClusterDriverRegistrarContainer?: string; 
  public get csiClusterDriverRegistrarContainer() {
    return this.getStringAttribute('csi_cluster_driver_registrar_container');
  }
  public set csiClusterDriverRegistrarContainer(value: string) {
    this._csiClusterDriverRegistrarContainer = value;
  }
  public resetCsiClusterDriverRegistrarContainer() {
    this._csiClusterDriverRegistrarContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiClusterDriverRegistrarContainerInput() {
    return this._csiClusterDriverRegistrarContainer;
  }

  // csi_external_attacher_container - computed: false, optional: true, required: false
  private _csiExternalAttacherContainer?: string; 
  public get csiExternalAttacherContainer() {
    return this.getStringAttribute('csi_external_attacher_container');
  }
  public set csiExternalAttacherContainer(value: string) {
    this._csiExternalAttacherContainer = value;
  }
  public resetCsiExternalAttacherContainer() {
    this._csiExternalAttacherContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiExternalAttacherContainerInput() {
    return this._csiExternalAttacherContainer;
  }

  // csi_external_provisioner_container - computed: false, optional: true, required: false
  private _csiExternalProvisionerContainer?: string; 
  public get csiExternalProvisionerContainer() {
    return this.getStringAttribute('csi_external_provisioner_container');
  }
  public set csiExternalProvisionerContainer(value: string) {
    this._csiExternalProvisionerContainer = value;
  }
  public resetCsiExternalProvisionerContainer() {
    this._csiExternalProvisionerContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiExternalProvisionerContainerInput() {
    return this._csiExternalProvisionerContainer;
  }

  // csi_external_resizer_container - computed: false, optional: true, required: false
  private _csiExternalResizerContainer?: string; 
  public get csiExternalResizerContainer() {
    return this.getStringAttribute('csi_external_resizer_container');
  }
  public set csiExternalResizerContainer(value: string) {
    this._csiExternalResizerContainer = value;
  }
  public resetCsiExternalResizerContainer() {
    this._csiExternalResizerContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiExternalResizerContainerInput() {
    return this._csiExternalResizerContainer;
  }

  // csi_external_snapshotter_container - computed: false, optional: true, required: false
  private _csiExternalSnapshotterContainer?: string; 
  public get csiExternalSnapshotterContainer() {
    return this.getStringAttribute('csi_external_snapshotter_container');
  }
  public set csiExternalSnapshotterContainer(value: string) {
    this._csiExternalSnapshotterContainer = value;
  }
  public resetCsiExternalSnapshotterContainer() {
    this._csiExternalSnapshotterContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiExternalSnapshotterContainerInput() {
    return this._csiExternalSnapshotterContainer;
  }

  // csi_liveness_probe_container - computed: false, optional: true, required: false
  private _csiLivenessProbeContainer?: string; 
  public get csiLivenessProbeContainer() {
    return this.getStringAttribute('csi_liveness_probe_container');
  }
  public set csiLivenessProbeContainer(value: string) {
    this._csiLivenessProbeContainer = value;
  }
  public resetCsiLivenessProbeContainer() {
    this._csiLivenessProbeContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiLivenessProbeContainerInput() {
    return this._csiLivenessProbeContainer;
  }

  // csi_node_driver_registrar_container - computed: false, optional: true, required: false
  private _csiNodeDriverRegistrarContainer?: string; 
  public get csiNodeDriverRegistrarContainer() {
    return this.getStringAttribute('csi_node_driver_registrar_container');
  }
  public set csiNodeDriverRegistrarContainer(value: string) {
    this._csiNodeDriverRegistrarContainer = value;
  }
  public resetCsiNodeDriverRegistrarContainer() {
    this._csiNodeDriverRegistrarContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiNodeDriverRegistrarContainerInput() {
    return this._csiNodeDriverRegistrarContainer;
  }

  // hyperkube_container - computed: false, optional: true, required: false
  private _hyperkubeContainer?: string; 
  public get hyperkubeContainer() {
    return this.getStringAttribute('hyperkube_container');
  }
  public set hyperkubeContainer(value: string) {
    this._hyperkubeContainer = value;
  }
  public resetHyperkubeContainer() {
    this._hyperkubeContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperkubeContainerInput() {
    return this._hyperkubeContainer;
  }

  // init_container - computed: false, optional: true, required: false
  private _initContainer?: string; 
  public get initContainer() {
    return this.getStringAttribute('init_container');
  }
  public set initContainer(value: string) {
    this._initContainer = value;
  }
  public resetInitContainer() {
    this._initContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerInput() {
    return this._initContainer;
  }

  // kube_scheduler_container - computed: false, optional: true, required: false
  private _kubeSchedulerContainer?: string; 
  public get kubeSchedulerContainer() {
    return this.getStringAttribute('kube_scheduler_container');
  }
  public set kubeSchedulerContainer(value: string) {
    this._kubeSchedulerContainer = value;
  }
  public resetKubeSchedulerContainer() {
    this._kubeSchedulerContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeSchedulerContainerInput() {
    return this._kubeSchedulerContainer;
  }

  // metrics_exporter_container - computed: false, optional: true, required: false
  private _metricsExporterContainer?: string; 
  public get metricsExporterContainer() {
    return this.getStringAttribute('metrics_exporter_container');
  }
  public set metricsExporterContainer(value: string) {
    this._metricsExporterContainer = value;
  }
  public resetMetricsExporterContainer() {
    this._metricsExporterContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsExporterContainerInput() {
    return this._metricsExporterContainer;
  }

  // nfs_container - computed: false, optional: true, required: false
  private _nfsContainer?: string; 
  public get nfsContainer() {
    return this.getStringAttribute('nfs_container');
  }
  public set nfsContainer(value: string) {
    this._nfsContainer = value;
  }
  public resetNfsContainer() {
    this._nfsContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsContainerInput() {
    return this._nfsContainer;
  }

  // node_container - computed: false, optional: true, required: false
  private _nodeContainer?: string; 
  public get nodeContainer() {
    return this.getStringAttribute('node_container');
  }
  public set nodeContainer(value: string) {
    this._nodeContainer = value;
  }
  public resetNodeContainer() {
    this._nodeContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeContainerInput() {
    return this._nodeContainer;
  }

  // node_guard_container - computed: false, optional: true, required: false
  private _nodeGuardContainer?: string; 
  public get nodeGuardContainer() {
    return this.getStringAttribute('node_guard_container');
  }
  public set nodeGuardContainer(value: string) {
    this._nodeGuardContainer = value;
  }
  public resetNodeGuardContainer() {
    this._nodeGuardContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGuardContainerInput() {
    return this._nodeGuardContainer;
  }

  // node_manager_container - computed: false, optional: true, required: false
  private _nodeManagerContainer?: string; 
  public get nodeManagerContainer() {
    return this.getStringAttribute('node_manager_container');
  }
  public set nodeManagerContainer(value: string) {
    this._nodeManagerContainer = value;
  }
  public resetNodeManagerContainer() {
    this._nodeManagerContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeManagerContainerInput() {
    return this._nodeManagerContainer;
  }

  // portal_manager_container - computed: false, optional: true, required: false
  private _portalManagerContainer?: string; 
  public get portalManagerContainer() {
    return this.getStringAttribute('portal_manager_container');
  }
  public set portalManagerContainer(value: string) {
    this._portalManagerContainer = value;
  }
  public resetPortalManagerContainer() {
    this._portalManagerContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalManagerContainerInput() {
    return this._portalManagerContainer;
  }

  // snapshot_controller_container - computed: false, optional: true, required: false
  private _snapshotControllerContainer?: string; 
  public get snapshotControllerContainer() {
    return this.getStringAttribute('snapshot_controller_container');
  }
  public set snapshotControllerContainer(value: string) {
    this._snapshotControllerContainer = value;
  }
  public resetSnapshotControllerContainer() {
    this._snapshotControllerContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotControllerContainerInput() {
    return this._snapshotControllerContainer;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#annotations DataK8SStorageosComStorageOsClusterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#enable DataK8SStorageosComStorageOsClusterV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#hostname DataK8SStorageosComStorageOsClusterV1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#tls DataK8SStorageosComStorageOsClusterV1Manifest#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecIngressToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    enable: cdktf.booleanToTerraform(struct!.enable),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    tls: cdktf.booleanToTerraform(struct!.tls),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecIngressToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecIngress | cdktf.IResolvable): any {
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
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._enable = undefined;
      this._hostname = undefined;
      this._tls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._enable = value.enable;
      this._hostname = value.hostname;
      this._tls = value.tls;
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#address DataK8SStorageosComStorageOsClusterV1Manifest#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#backend DataK8SStorageosComStorageOsClusterV1Manifest#backend}
  */
  readonly backend?: string;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackendToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    backend: cdktf.stringToTerraform(struct!.backend),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackendToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackend | cdktf.IResolvable): any {
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
    backend: {
      value: cdktf.stringToHclTerraform(struct!.backend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._backend !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._backend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._backend = value.backend;
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

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecMetrics {
  /**
  * DisabledCollectors is a list of collectors that shall be disabled. By default, all are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#disabled_collectors DataK8SStorageosComStorageOsClusterV1Manifest#disabled_collectors}
  */
  readonly disabledCollectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#enabled DataK8SStorageosComStorageOsClusterV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Verbosity of log messages. Accepts go.uber.org/zap log levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#log_level DataK8SStorageosComStorageOsClusterV1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Timeout in seconds to serve metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#timeout DataK8SStorageosComStorageOsClusterV1Manifest#timeout}
  */
  readonly timeout?: number;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecMetricsToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_collectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledCollectors),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecMetricsToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled_collectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledCollectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledCollectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledCollectors = this._disabledCollectors;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabledCollectors = undefined;
      this._enabled = undefined;
      this._logLevel = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabledCollectors = value.disabledCollectors;
      this._enabled = value.enabled;
      this._logLevel = value.logLevel;
      this._timeout = value.timeout;
    }
  }

  // disabled_collectors - computed: false, optional: true, required: false
  private _disabledCollectors?: string[]; 
  public get disabledCollectors() {
    return this.getListAttribute('disabled_collectors');
  }
  public set disabledCollectors(value: string[]) {
    this._disabledCollectors = value;
  }
  public resetDisabledCollectors() {
    this._disabledCollectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledCollectorsInput() {
    return this._disabledCollectors;
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

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#key DataK8SStorageosComStorageOsClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#operator DataK8SStorageosComStorageOsClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#values DataK8SStorageosComStorageOsClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#key DataK8SStorageosComStorageOsClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#operator DataK8SStorageosComStorageOsClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#values DataK8SStorageosComStorageOsClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#match_expressions DataK8SStorageosComStorageOsClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#match_fields DataK8SStorageosComStorageOsClusterV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsOutputReference {
    return new DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#limits DataK8SStorageosComStorageOsClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#requests DataK8SStorageosComStorageOsClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecResourcesToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecResourcesToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#annotations DataK8SStorageosComStorageOsClusterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#external_port DataK8SStorageosComStorageOsClusterV1Manifest#external_port}
  */
  readonly externalPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#internal_port DataK8SStorageosComStorageOsClusterV1Manifest#internal_port}
  */
  readonly internalPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#name DataK8SStorageosComStorageOsClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#type DataK8SStorageosComStorageOsClusterV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecServiceToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    external_port: cdktf.numberToTerraform(struct!.externalPort),
    internal_port: cdktf.numberToTerraform(struct!.internalPort),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecServiceToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecService | cdktf.IResolvable): any {
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
    external_port: {
      value: cdktf.numberToHclTerraform(struct!.externalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_port: {
      value: cdktf.numberToHclTerraform(struct!.internalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._externalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalPort = this._externalPort;
    }
    if (this._internalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalPort = this._internalPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._externalPort = undefined;
      this._internalPort = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._externalPort = value.externalPort;
      this._internalPort = value.internalPort;
      this._name = value.name;
      this._type = value.type;
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

  // external_port - computed: false, optional: true, required: false
  private _externalPort?: number; 
  public get externalPort() {
    return this.getNumberAttribute('external_port');
  }
  public set externalPort(value: number) {
    this._externalPort = value;
  }
  public resetExternalPort() {
    this._externalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPortInput() {
    return this._externalPort;
  }

  // internal_port - computed: false, optional: true, required: false
  private _internalPort?: number; 
  public get internalPort() {
    return this.getNumberAttribute('internal_port');
  }
  public set internalPort(value: number) {
    this._internalPort = value;
  }
  public resetInternalPort() {
    this._internalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPortInput() {
    return this._internalPort;
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
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshots {
  /**
  * VolumeSnapshotClassName is the name of default VolumeSnapshotClass created for StorageOS volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#volume_snapshot_class_name DataK8SStorageosComStorageOsClusterV1Manifest#volume_snapshot_class_name}
  */
  readonly volumeSnapshotClassName?: string;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshotsToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_snapshot_class_name: cdktf.stringToTerraform(struct!.volumeSnapshotClassName),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshotsToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_snapshot_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeSnapshotClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshotsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeSnapshotClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotClassName = this._volumeSnapshotClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeSnapshotClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeSnapshotClassName = value.volumeSnapshotClassName;
    }
  }

  // volume_snapshot_class_name - computed: false, optional: true, required: false
  private _volumeSnapshotClassName?: string; 
  public get volumeSnapshotClassName() {
    return this.getStringAttribute('volume_snapshot_class_name');
  }
  public set volumeSnapshotClassName(value: string) {
    this._volumeSnapshotClassName = value;
  }
  public resetVolumeSnapshotClassName() {
    this._volumeSnapshotClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotClassNameInput() {
    return this._volumeSnapshotClassName;
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#effect DataK8SStorageosComStorageOsClusterV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#key DataK8SStorageosComStorageOsClusterV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#operator DataK8SStorageosComStorageOsClusterV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#toleration_seconds DataK8SStorageosComStorageOsClusterV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#value DataK8SStorageosComStorageOsClusterV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecTolerationsToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerations | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerations | cdktf.IResolvable | undefined {
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
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
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
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerationsOutputReference {
    return new DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SStorageosComStorageOsClusterV1ManifestSpec {
  /**
  * ContainerResources is to set the resource requirements of each individual container managed by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#container_resources DataK8SStorageosComStorageOsClusterV1Manifest#container_resources}
  */
  readonly containerResources?: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResources;
  /**
  * CSI defines the configurations for CSI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#csi DataK8SStorageosComStorageOsClusterV1Manifest#csi}
  */
  readonly csi?: DataK8SStorageosComStorageOsClusterV1ManifestSpecCsi;
  /**
  * Debug is to set debug mode of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#debug DataK8SStorageosComStorageOsClusterV1Manifest#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Disable StorageOS CLI deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#disable_cli DataK8SStorageosComStorageOsClusterV1Manifest#disable_cli}
  */
  readonly disableCli?: boolean | cdktf.IResolvable;
  /**
  * Disable Pod Fencing. With StatefulSets, Pods are only re-scheduled if the Pod has been marked as killed. In practice this means that failover of a StatefulSet pod is a manual operation. By enabling Pod Fencing and setting the 'storageos.com/fenced=true' label on a Pod, StorageOS will enable automated Pod failover (by killing the application Pod on the failed node) if the following conditions exist: - Pod fencing has not been explicitly disabled. - StorageOS has determined that the node the Pod is running on is offline. StorageOS uses Gossip and TCP checks and will retry for 30 seconds. At this point all volumes on the failed node are marked offline (irrespective of whether fencing is enabled) and volume failover starts. - The Pod has the label 'storageos.com/fenced=true' set. - The Pod has at least one StorageOS volume attached. - Each StorageOS volume has at least 1 healthy replica. When Pod Fencing is disabled, StorageOS will not perform any interaction with Kubernetes when it detects that a node has gone offline. Additionally, the Kubernetes permissions required for Fencing will not be added to the StorageOS role. Deprecated: Not used any more, fencing is enabled/disabled by storageos.com/fenced label on pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#disable_fencing DataK8SStorageosComStorageOsClusterV1Manifest#disable_fencing}
  */
  readonly disableFencing?: boolean | cdktf.IResolvable;
  /**
  * Disable StorageOS scheduler extender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#disable_scheduler DataK8SStorageosComStorageOsClusterV1Manifest#disable_scheduler}
  */
  readonly disableScheduler?: boolean | cdktf.IResolvable;
  /**
  * Disable TCMU can be set to true to disable the TCMU storage driver. This is required when there are multiple storage systems running on the same node and you wish to avoid conflicts. Only one TCMU-based storage system can run on a node at a time. Disabling TCMU will degrade performance. Deprecated: Not used any more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#disable_tcmu DataK8SStorageosComStorageOsClusterV1Manifest#disable_tcmu}
  */
  readonly disableTcmu?: boolean | cdktf.IResolvable;
  /**
  * Disable Telemetry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#disable_telemetry DataK8SStorageosComStorageOsClusterV1Manifest#disable_telemetry}
  */
  readonly disableTelemetry?: boolean | cdktf.IResolvable;
  /**
  * EnablePortalManager enables Portal Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#enable_portal_manager DataK8SStorageosComStorageOsClusterV1Manifest#enable_portal_manager}
  */
  readonly enablePortalManager?: boolean | cdktf.IResolvable;
  /**
  * Environment contains environment variables that are passed to StorageOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#environment DataK8SStorageosComStorageOsClusterV1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Force TCMU can be set to true to ensure that TCMU is enabled or cause StorageOS to abort startup. At startup, StorageOS will automatically fallback to non-TCMU mode if another TCMU-based storage system is running on the node. Since non-TCMU will degrade performance, this may not always be desired. Deprecated: Not used any more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#force_tcmu DataK8SStorageosComStorageOsClusterV1Manifest#force_tcmu}
  */
  readonly forceTcmu?: boolean | cdktf.IResolvable;
  /**
  * Images defines the various container images used in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#images DataK8SStorageosComStorageOsClusterV1Manifest#images}
  */
  readonly images?: DataK8SStorageosComStorageOsClusterV1ManifestSpecImages;
  /**
  * Ingress defines the ingress configurations used in the cluster. Deprecated: Not used any more, please create your ingress for dashboard on your own.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#ingress DataK8SStorageosComStorageOsClusterV1Manifest#ingress}
  */
  readonly ingress?: DataK8SStorageosComStorageOsClusterV1ManifestSpecIngress;
  /**
  * Join is the join token used for service discovery. Deprecated: Not used any more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#join DataK8SStorageosComStorageOsClusterV1Manifest#join}
  */
  readonly join?: string;
  /**
  * K8sDistro is the name of the Kubernetes distribution where the operator is being deployed. It should be in the format: 'name[-1.0]', where the version is optional and should only be appended if known. Suitable names include: 'openshift', 'rancher', 'aks', 'gke', 'eks', or the deployment method if using upstream directly, e.g 'minishift' or 'kubeadm'. Setting k8sDistro is optional, and will be used to simplify cluster configuration by setting appropriate defaults for the distribution. The distribution information will also be included in the product telemetry (if enabled), to help focus development efforts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#k8s_distro DataK8SStorageosComStorageOsClusterV1Manifest#k8s_distro}
  */
  readonly k8SDistro?: string;
  /**
  * KVBackend defines the key-value store backend used in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#kv_backend DataK8SStorageosComStorageOsClusterV1Manifest#kv_backend}
  */
  readonly kvBackend: DataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackend;
  /**
  * Metrics feature configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#metrics DataK8SStorageosComStorageOsClusterV1Manifest#metrics}
  */
  readonly metrics?: DataK8SStorageosComStorageOsClusterV1ManifestSpecMetrics;
  /**
  * Namespace is the kubernetes Namespace where storageos resources are provisioned. Deprecated: StorageOS uses namespace of storageosclusters.storageos.com resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#namespace DataK8SStorageosComStorageOsClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Node manager feature list with optional configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#node_manager_features DataK8SStorageosComStorageOsClusterV1Manifest#node_manager_features}
  */
  readonly nodeManagerFeatures?: { [key: string]: string };
  /**
  * NodeSelectorTerms is to set the placement of storageos pods using node affinity requiredDuringSchedulingIgnoredDuringExecution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#node_selector_terms DataK8SStorageosComStorageOsClusterV1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms?: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTerms[] | cdktf.IResolvable;
  /**
  * Pause is to pause the operator for the cluster. Deprecated: Not used any more, operator is always running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#pause DataK8SStorageosComStorageOsClusterV1Manifest#pause}
  */
  readonly pause?: boolean | cdktf.IResolvable;
  /**
  * Resources is to set the resource requirements of the storageos containers. Deprecated: Set resource requests for individual containers via ContainerResources field in spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#resources DataK8SStorageosComStorageOsClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SStorageosComStorageOsClusterV1ManifestSpecResources;
  /**
  * SecretRefName is the name of the secret object that contains all the sensitive cluster configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#secret_ref_name DataK8SStorageosComStorageOsClusterV1Manifest#secret_ref_name}
  */
  readonly secretRefName: string;
  /**
  * SecretRefNamespace is the namespace of the secret reference. Deprecated: StorageOS uses namespace of storageosclusters.storageos.com resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#secret_ref_namespace DataK8SStorageosComStorageOsClusterV1Manifest#secret_ref_namespace}
  */
  readonly secretRefNamespace?: string;
  /**
  * Service is the Service configuration for the cluster nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#service DataK8SStorageosComStorageOsClusterV1Manifest#service}
  */
  readonly service?: DataK8SStorageosComStorageOsClusterV1ManifestSpecService;
  /**
  * SharedDir is the shared directory to be used when the kubelet is running in a container. Typically: '/var/lib/kubelet/plugins/kubernetes.io~storageos'. If not set, defaults will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#shared_dir DataK8SStorageosComStorageOsClusterV1Manifest#shared_dir}
  */
  readonly sharedDir?: string;
  /**
  * Snapshots feature configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#snapshots DataK8SStorageosComStorageOsClusterV1Manifest#snapshots}
  */
  readonly snapshots?: DataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshots;
  /**
  * StorageClassName is the name of default StorageClass created for StorageOS volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#storage_class_name DataK8SStorageosComStorageOsClusterV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * TLSEtcdSecretRefName is the name of the secret object that contains the etcd TLS certs. This secret is shared with etcd, therefore it's not part of the main storageos secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#tls_etcd_secret_ref_name DataK8SStorageosComStorageOsClusterV1Manifest#tls_etcd_secret_ref_name}
  */
  readonly tlsEtcdSecretRefName?: string;
  /**
  * TLSEtcdSecretRefNamespace is the namespace of the etcd TLS secret object. Deprecated: StorageOS uses namespace of storageosclusters.storageos.com resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#tls_etcd_secret_ref_namespace DataK8SStorageosComStorageOsClusterV1Manifest#tls_etcd_secret_ref_namespace}
  */
  readonly tlsEtcdSecretRefNamespace?: string;
  /**
  * Tolerations is to set the placement of storageos pods using pod toleration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#tolerations DataK8SStorageosComStorageOsClusterV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerations[] | cdktf.IResolvable;
}

export function dataK8SStorageosComStorageOsClusterV1ManifestSpecToTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_resources: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesToTerraform(struct!.containerResources),
    csi: dataK8SStorageosComStorageOsClusterV1ManifestSpecCsiToTerraform(struct!.csi),
    debug: cdktf.booleanToTerraform(struct!.debug),
    disable_cli: cdktf.booleanToTerraform(struct!.disableCli),
    disable_fencing: cdktf.booleanToTerraform(struct!.disableFencing),
    disable_scheduler: cdktf.booleanToTerraform(struct!.disableScheduler),
    disable_tcmu: cdktf.booleanToTerraform(struct!.disableTcmu),
    disable_telemetry: cdktf.booleanToTerraform(struct!.disableTelemetry),
    enable_portal_manager: cdktf.booleanToTerraform(struct!.enablePortalManager),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    force_tcmu: cdktf.booleanToTerraform(struct!.forceTcmu),
    images: dataK8SStorageosComStorageOsClusterV1ManifestSpecImagesToTerraform(struct!.images),
    ingress: dataK8SStorageosComStorageOsClusterV1ManifestSpecIngressToTerraform(struct!.ingress),
    join: cdktf.stringToTerraform(struct!.join),
    k8s_distro: cdktf.stringToTerraform(struct!.k8SDistro),
    kv_backend: dataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackendToTerraform(struct!.kvBackend),
    metrics: dataK8SStorageosComStorageOsClusterV1ManifestSpecMetricsToTerraform(struct!.metrics),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_manager_features: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeManagerFeatures),
    node_selector_terms: cdktf.listMapper(dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
    pause: cdktf.booleanToTerraform(struct!.pause),
    resources: dataK8SStorageosComStorageOsClusterV1ManifestSpecResourcesToTerraform(struct!.resources),
    secret_ref_name: cdktf.stringToTerraform(struct!.secretRefName),
    secret_ref_namespace: cdktf.stringToTerraform(struct!.secretRefNamespace),
    service: dataK8SStorageosComStorageOsClusterV1ManifestSpecServiceToTerraform(struct!.service),
    shared_dir: cdktf.stringToTerraform(struct!.sharedDir),
    snapshots: dataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshotsToTerraform(struct!.snapshots),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    tls_etcd_secret_ref_name: cdktf.stringToTerraform(struct!.tlsEtcdSecretRefName),
    tls_etcd_secret_ref_namespace: cdktf.stringToTerraform(struct!.tlsEtcdSecretRefNamespace),
    tolerations: cdktf.listMapper(dataK8SStorageosComStorageOsClusterV1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SStorageosComStorageOsClusterV1ManifestSpecToHclTerraform(struct?: DataK8SStorageosComStorageOsClusterV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_resources: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesToHclTerraform(struct!.containerResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResources",
    },
    csi: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecCsi",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_cli: {
      value: cdktf.booleanToHclTerraform(struct!.disableCli),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_fencing: {
      value: cdktf.booleanToHclTerraform(struct!.disableFencing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_scheduler: {
      value: cdktf.booleanToHclTerraform(struct!.disableScheduler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_tcmu: {
      value: cdktf.booleanToHclTerraform(struct!.disableTcmu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_telemetry: {
      value: cdktf.booleanToHclTerraform(struct!.disableTelemetry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_portal_manager: {
      value: cdktf.booleanToHclTerraform(struct!.enablePortalManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    force_tcmu: {
      value: cdktf.booleanToHclTerraform(struct!.forceTcmu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    images: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecImagesToHclTerraform(struct!.images),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecImages",
    },
    ingress: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecIngress",
    },
    join: {
      value: cdktf.stringToHclTerraform(struct!.join),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k8s_distro: {
      value: cdktf.stringToHclTerraform(struct!.k8SDistro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kv_backend: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackendToHclTerraform(struct!.kvBackend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackend",
    },
    metrics: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecMetrics",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_manager_features: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeManagerFeatures),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsList",
    },
    pause: {
      value: cdktf.booleanToHclTerraform(struct!.pause),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecResources",
    },
    secret_ref_name: {
      value: cdktf.stringToHclTerraform(struct!.secretRefName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref_namespace: {
      value: cdktf.stringToHclTerraform(struct!.secretRefNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecService",
    },
    shared_dir: {
      value: cdktf.stringToHclTerraform(struct!.sharedDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshots: {
      value: dataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshotsToHclTerraform(struct!.snapshots),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshots",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_etcd_secret_ref_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsEtcdSecretRefName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_etcd_secret_ref_namespace: {
      value: cdktf.stringToHclTerraform(struct!.tlsEtcdSecretRefNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SStorageosComStorageOsClusterV1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SStorageosComStorageOsClusterV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SStorageosComStorageOsClusterV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResources = this._containerResources?.internalValue;
    }
    if (this._csi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi?.internalValue;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._disableCli !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCli = this._disableCli;
    }
    if (this._disableFencing !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFencing = this._disableFencing;
    }
    if (this._disableScheduler !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScheduler = this._disableScheduler;
    }
    if (this._disableTcmu !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTcmu = this._disableTcmu;
    }
    if (this._disableTelemetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTelemetry = this._disableTelemetry;
    }
    if (this._enablePortalManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePortalManager = this._enablePortalManager;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._forceTcmu !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcmu = this._forceTcmu;
    }
    if (this._images?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._join !== undefined) {
      hasAnyValues = true;
      internalValueResult.join = this._join;
    }
    if (this._k8SDistro !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SDistro = this._k8SDistro;
    }
    if (this._kvBackend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvBackend = this._kvBackend?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodeManagerFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeManagerFeatures = this._nodeManagerFeatures;
    }
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    if (this._pause !== undefined) {
      hasAnyValues = true;
      internalValueResult.pause = this._pause;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._secretRefName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRefName = this._secretRefName;
    }
    if (this._secretRefNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRefNamespace = this._secretRefNamespace;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._sharedDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedDir = this._sharedDir;
    }
    if (this._snapshots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshots = this._snapshots?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._tlsEtcdSecretRefName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEtcdSecretRefName = this._tlsEtcdSecretRefName;
    }
    if (this._tlsEtcdSecretRefNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEtcdSecretRefNamespace = this._tlsEtcdSecretRefNamespace;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SStorageosComStorageOsClusterV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerResources.internalValue = undefined;
      this._csi.internalValue = undefined;
      this._debug = undefined;
      this._disableCli = undefined;
      this._disableFencing = undefined;
      this._disableScheduler = undefined;
      this._disableTcmu = undefined;
      this._disableTelemetry = undefined;
      this._enablePortalManager = undefined;
      this._environment = undefined;
      this._forceTcmu = undefined;
      this._images.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._join = undefined;
      this._k8SDistro = undefined;
      this._kvBackend.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._namespace = undefined;
      this._nodeManagerFeatures = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
      this._pause = undefined;
      this._resources.internalValue = undefined;
      this._secretRefName = undefined;
      this._secretRefNamespace = undefined;
      this._service.internalValue = undefined;
      this._sharedDir = undefined;
      this._snapshots.internalValue = undefined;
      this._storageClassName = undefined;
      this._tlsEtcdSecretRefName = undefined;
      this._tlsEtcdSecretRefNamespace = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerResources.internalValue = value.containerResources;
      this._csi.internalValue = value.csi;
      this._debug = value.debug;
      this._disableCli = value.disableCli;
      this._disableFencing = value.disableFencing;
      this._disableScheduler = value.disableScheduler;
      this._disableTcmu = value.disableTcmu;
      this._disableTelemetry = value.disableTelemetry;
      this._enablePortalManager = value.enablePortalManager;
      this._environment = value.environment;
      this._forceTcmu = value.forceTcmu;
      this._images.internalValue = value.images;
      this._ingress.internalValue = value.ingress;
      this._join = value.join;
      this._k8SDistro = value.k8SDistro;
      this._kvBackend.internalValue = value.kvBackend;
      this._metrics.internalValue = value.metrics;
      this._namespace = value.namespace;
      this._nodeManagerFeatures = value.nodeManagerFeatures;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
      this._pause = value.pause;
      this._resources.internalValue = value.resources;
      this._secretRefName = value.secretRefName;
      this._secretRefNamespace = value.secretRefNamespace;
      this._service.internalValue = value.service;
      this._sharedDir = value.sharedDir;
      this._snapshots.internalValue = value.snapshots;
      this._storageClassName = value.storageClassName;
      this._tlsEtcdSecretRefName = value.tlsEtcdSecretRefName;
      this._tlsEtcdSecretRefNamespace = value.tlsEtcdSecretRefNamespace;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // container_resources - computed: false, optional: true, required: false
  private _containerResources = new DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResourcesOutputReference(this, "container_resources");
  public get containerResources() {
    return this._containerResources;
  }
  public putContainerResources(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecContainerResources) {
    this._containerResources.internalValue = value;
  }
  public resetContainerResources() {
    this._containerResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourcesInput() {
    return this._containerResources.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new DataK8SStorageosComStorageOsClusterV1ManifestSpecCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecCsi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // disable_cli - computed: false, optional: true, required: false
  private _disableCli?: boolean | cdktf.IResolvable; 
  public get disableCli() {
    return this.getBooleanAttribute('disable_cli');
  }
  public set disableCli(value: boolean | cdktf.IResolvable) {
    this._disableCli = value;
  }
  public resetDisableCli() {
    this._disableCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCliInput() {
    return this._disableCli;
  }

  // disable_fencing - computed: false, optional: true, required: false
  private _disableFencing?: boolean | cdktf.IResolvable; 
  public get disableFencing() {
    return this.getBooleanAttribute('disable_fencing');
  }
  public set disableFencing(value: boolean | cdktf.IResolvable) {
    this._disableFencing = value;
  }
  public resetDisableFencing() {
    this._disableFencing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFencingInput() {
    return this._disableFencing;
  }

  // disable_scheduler - computed: false, optional: true, required: false
  private _disableScheduler?: boolean | cdktf.IResolvable; 
  public get disableScheduler() {
    return this.getBooleanAttribute('disable_scheduler');
  }
  public set disableScheduler(value: boolean | cdktf.IResolvable) {
    this._disableScheduler = value;
  }
  public resetDisableScheduler() {
    this._disableScheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSchedulerInput() {
    return this._disableScheduler;
  }

  // disable_tcmu - computed: false, optional: true, required: false
  private _disableTcmu?: boolean | cdktf.IResolvable; 
  public get disableTcmu() {
    return this.getBooleanAttribute('disable_tcmu');
  }
  public set disableTcmu(value: boolean | cdktf.IResolvable) {
    this._disableTcmu = value;
  }
  public resetDisableTcmu() {
    this._disableTcmu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTcmuInput() {
    return this._disableTcmu;
  }

  // disable_telemetry - computed: false, optional: true, required: false
  private _disableTelemetry?: boolean | cdktf.IResolvable; 
  public get disableTelemetry() {
    return this.getBooleanAttribute('disable_telemetry');
  }
  public set disableTelemetry(value: boolean | cdktf.IResolvable) {
    this._disableTelemetry = value;
  }
  public resetDisableTelemetry() {
    this._disableTelemetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTelemetryInput() {
    return this._disableTelemetry;
  }

  // enable_portal_manager - computed: false, optional: true, required: false
  private _enablePortalManager?: boolean | cdktf.IResolvable; 
  public get enablePortalManager() {
    return this.getBooleanAttribute('enable_portal_manager');
  }
  public set enablePortalManager(value: boolean | cdktf.IResolvable) {
    this._enablePortalManager = value;
  }
  public resetEnablePortalManager() {
    this._enablePortalManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePortalManagerInput() {
    return this._enablePortalManager;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // force_tcmu - computed: false, optional: true, required: false
  private _forceTcmu?: boolean | cdktf.IResolvable; 
  public get forceTcmu() {
    return this.getBooleanAttribute('force_tcmu');
  }
  public set forceTcmu(value: boolean | cdktf.IResolvable) {
    this._forceTcmu = value;
  }
  public resetForceTcmu() {
    this._forceTcmu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcmuInput() {
    return this._forceTcmu;
  }

  // images - computed: false, optional: true, required: false
  private _images = new DataK8SStorageosComStorageOsClusterV1ManifestSpecImagesOutputReference(this, "images");
  public get images() {
    return this._images;
  }
  public putImages(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecImages) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SStorageosComStorageOsClusterV1ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // join - computed: false, optional: true, required: false
  private _join?: string; 
  public get join() {
    return this.getStringAttribute('join');
  }
  public set join(value: string) {
    this._join = value;
  }
  public resetJoin() {
    this._join = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinInput() {
    return this._join;
  }

  // k8s_distro - computed: false, optional: true, required: false
  private _k8SDistro?: string; 
  public get k8SDistro() {
    return this.getStringAttribute('k8s_distro');
  }
  public set k8SDistro(value: string) {
    this._k8SDistro = value;
  }
  public resetK8SDistro() {
    this._k8SDistro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SDistroInput() {
    return this._k8SDistro;
  }

  // kv_backend - computed: false, optional: false, required: true
  private _kvBackend = new DataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackendOutputReference(this, "kv_backend");
  public get kvBackend() {
    return this._kvBackend;
  }
  public putKvBackend(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecKvBackend) {
    this._kvBackend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kvBackendInput() {
    return this._kvBackend.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SStorageosComStorageOsClusterV1ManifestSpecMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
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

  // node_manager_features - computed: false, optional: true, required: false
  private _nodeManagerFeatures?: { [key: string]: string }; 
  public get nodeManagerFeatures() {
    return this.getStringMapAttribute('node_manager_features');
  }
  public set nodeManagerFeatures(value: { [key: string]: string }) {
    this._nodeManagerFeatures = value;
  }
  public resetNodeManagerFeatures() {
    this._nodeManagerFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeManagerFeaturesInput() {
    return this._nodeManagerFeatures;
  }

  // node_selector_terms - computed: false, optional: true, required: false
  private _nodeSelectorTerms = new DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  public resetNodeSelectorTerms() {
    this._nodeSelectorTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }

  // pause - computed: false, optional: true, required: false
  private _pause?: boolean | cdktf.IResolvable; 
  public get pause() {
    return this.getBooleanAttribute('pause');
  }
  public set pause(value: boolean | cdktf.IResolvable) {
    this._pause = value;
  }
  public resetPause() {
    this._pause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SStorageosComStorageOsClusterV1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // secret_ref_name - computed: false, optional: false, required: true
  private _secretRefName?: string; 
  public get secretRefName() {
    return this.getStringAttribute('secret_ref_name');
  }
  public set secretRefName(value: string) {
    this._secretRefName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefNameInput() {
    return this._secretRefName;
  }

  // secret_ref_namespace - computed: false, optional: true, required: false
  private _secretRefNamespace?: string; 
  public get secretRefNamespace() {
    return this.getStringAttribute('secret_ref_namespace');
  }
  public set secretRefNamespace(value: string) {
    this._secretRefNamespace = value;
  }
  public resetSecretRefNamespace() {
    this._secretRefNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefNamespaceInput() {
    return this._secretRefNamespace;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SStorageosComStorageOsClusterV1ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // shared_dir - computed: false, optional: true, required: false
  private _sharedDir?: string; 
  public get sharedDir() {
    return this.getStringAttribute('shared_dir');
  }
  public set sharedDir(value: string) {
    this._sharedDir = value;
  }
  public resetSharedDir() {
    this._sharedDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedDirInput() {
    return this._sharedDir;
  }

  // snapshots - computed: false, optional: true, required: false
  private _snapshots = new DataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshotsOutputReference(this, "snapshots");
  public get snapshots() {
    return this._snapshots;
  }
  public putSnapshots(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecSnapshots) {
    this._snapshots.internalValue = value;
  }
  public resetSnapshots() {
    this._snapshots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsInput() {
    return this._snapshots.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // tls_etcd_secret_ref_name - computed: false, optional: true, required: false
  private _tlsEtcdSecretRefName?: string; 
  public get tlsEtcdSecretRefName() {
    return this.getStringAttribute('tls_etcd_secret_ref_name');
  }
  public set tlsEtcdSecretRefName(value: string) {
    this._tlsEtcdSecretRefName = value;
  }
  public resetTlsEtcdSecretRefName() {
    this._tlsEtcdSecretRefName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEtcdSecretRefNameInput() {
    return this._tlsEtcdSecretRefName;
  }

  // tls_etcd_secret_ref_namespace - computed: false, optional: true, required: false
  private _tlsEtcdSecretRefNamespace?: string; 
  public get tlsEtcdSecretRefNamespace() {
    return this.getStringAttribute('tls_etcd_secret_ref_namespace');
  }
  public set tlsEtcdSecretRefNamespace(value: string) {
    this._tlsEtcdSecretRefNamespace = value;
  }
  public resetTlsEtcdSecretRefNamespace() {
    this._tlsEtcdSecretRefNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEtcdSecretRefNamespaceInput() {
    return this._tlsEtcdSecretRefNamespace;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SStorageosComStorageOsClusterV1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest k8s_storageos_com_storage_os_cluster_v1_manifest}
*/
export class DataK8SStorageosComStorageOsClusterV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_storageos_com_storage_os_cluster_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SStorageosComStorageOsClusterV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SStorageosComStorageOsClusterV1Manifest to import
  * @param importFromId The id of the existing DataK8SStorageosComStorageOsClusterV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SStorageosComStorageOsClusterV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_storageos_com_storage_os_cluster_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/storageos_com_storage_os_cluster_v1_manifest k8s_storageos_com_storage_os_cluster_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SStorageosComStorageOsClusterV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SStorageosComStorageOsClusterV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_storageos_com_storage_os_cluster_v1_manifest',
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
  private _metadata = new DataK8SStorageosComStorageOsClusterV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SStorageosComStorageOsClusterV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SStorageosComStorageOsClusterV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SStorageosComStorageOsClusterV1ManifestSpec) {
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
      metadata: dataK8SStorageosComStorageOsClusterV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SStorageosComStorageOsClusterV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SStorageosComStorageOsClusterV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestMetadata",
      },
      spec: {
        value: dataK8SStorageosComStorageOsClusterV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SStorageosComStorageOsClusterV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
