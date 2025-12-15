// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#metadata DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadata;
  /**
  * SnapshotSpec defines the desired state of Snapshot. Represents a copy of an entire cluster as of the time when the snapshot was taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#spec DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpec;
}
export interface DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#annotations DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#labels DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#namespace DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#namespace DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFromToTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFromToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#from DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFrom;
}

export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefToTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFromToTerraform(struct!.from),
  }
}


export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#namespace DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#from DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFrom;
}

export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#key DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#value DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpec {
  /**
  * The snapshot is created from this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#cluster_name DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#cluster_ref DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#cluster_ref}
  */
  readonly clusterRef?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRef;
  /**
  * The ID of the KMS key used to encrypt the snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#kms_key_id DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#kms_key_ref DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#kms_key_ref}
  */
  readonly kmsKeyRef?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRef;
  /**
  * A name for the snapshot being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The name of an existing snapshot from which to make a copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#source_snapshot_name DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#source_snapshot_name}
  */
  readonly sourceSnapshotName?: string;
  /**
  * A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#tags DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_ref: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefToTerraform(struct!.clusterRef),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_ref: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct!.kmsKeyRef),
    name: cdktf.stringToTerraform(struct!.name),
    source_snapshot_name: cdktf.stringToTerraform(struct!.sourceSnapshotName),
    tags: cdktf.listMapper(dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ref: {
      value: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefToHclTerraform(struct!.clusterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRef",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_ref: {
      value: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct!.kmsKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRef",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_snapshot_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceSnapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRef = this._clusterRef?.internalValue;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyRef = this._kmsKeyRef?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceSnapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSnapshotName = this._sourceSnapshotName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._clusterRef.internalValue = undefined;
      this._kmsKeyId = undefined;
      this._kmsKeyRef.internalValue = undefined;
      this._name = undefined;
      this._sourceSnapshotName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._clusterRef.internalValue = value.clusterRef;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyRef.internalValue = value.kmsKeyRef;
      this._name = value.name;
      this._sourceSnapshotName = value.sourceSnapshotName;
      this._tags.internalValue = value.tags;
    }
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

  // cluster_ref - computed: false, optional: true, required: false
  private _clusterRef = new DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRefOutputReference(this, "cluster_ref");
  public get clusterRef() {
    return this._clusterRef;
  }
  public putClusterRef(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecClusterRef) {
    this._clusterRef.internalValue = value;
  }
  public resetClusterRef() {
    this._clusterRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefInput() {
    return this._clusterRef.internalValue;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_key_ref - computed: false, optional: true, required: false
  private _kmsKeyRef = new DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRefOutputReference(this, "kms_key_ref");
  public get kmsKeyRef() {
    return this._kmsKeyRef;
  }
  public putKmsKeyRef(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecKmsKeyRef) {
    this._kmsKeyRef.internalValue = value;
  }
  public resetKmsKeyRef() {
    this._kmsKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyRefInput() {
    return this._kmsKeyRef.internalValue;
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

  // source_snapshot_name - computed: false, optional: true, required: false
  private _sourceSnapshotName?: string; 
  public get sourceSnapshotName() {
    return this.getStringAttribute('source_snapshot_name');
  }
  public set sourceSnapshotName(value: string) {
    this._sourceSnapshotName = value;
  }
  public resetSourceSnapshotName() {
    this._sourceSnapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotNameInput() {
    return this._sourceSnapshotName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest k8s_memorydb_services_k8s_aws_snapshot_v1alpha1_manifest}
*/
export class DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_memorydb_services_k8s_aws_snapshot_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_memorydb_services_k8s_aws_snapshot_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/memorydb_services_k8s_aws_snapshot_v1alpha1_manifest k8s_memorydb_services_k8s_aws_snapshot_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_memorydb_services_k8s_aws_snapshot_v1alpha1_manifest',
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
  private _metadata = new DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMemorydbServicesK8SAwsSnapshotV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
