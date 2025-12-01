// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#metadata DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadata;
  /**
  * ClusterSpec defines the desired state of Cluster. Contains all of the attributes of a specific cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#spec DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpec;
}
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#annotations DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#labels DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFromToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFromToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFrom | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFrom;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFromToTerraform(struct!.from),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefFrom) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFromToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFromToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFrom | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFrom;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefFrom) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFrom;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsFrom) {
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

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsOutputReference {
    return new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFromToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFromToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFrom | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFrom;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFromToTerraform(struct!.from),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefFrom) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFromToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFromToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFrom | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFrom;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFromToTerraform(struct!.from),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefFrom) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFromToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFromToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFrom | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFrom;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefFrom) {
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
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#key DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#value DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpec {
  /**
  * The name of the Access Control List to associate with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#acl_name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#acl_name}
  */
  readonly aclName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#acl_ref DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#acl_ref}
  */
  readonly aclRef?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRef;
  /**
  * When set to true, the cluster will automatically receive minor engine version upgrades after launch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#auto_minor_version_upgrade DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * An optional description of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#description DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * The version number of the Redis engine to be used for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#engine_version DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * The ID of the KMS key used to encrypt the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#kms_key_id DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#maintenance_window DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#maintenance_window}
  */
  readonly maintenanceWindow?: string;
  /**
  * The name of the cluster. This value must be unique as it also serves as the cluster identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The compute and memory capacity of the nodes in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#node_type DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#node_type}
  */
  readonly nodeType: string;
  /**
  * The number of replicas to apply to each shard. The default value is 1. The maximum is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#num_replicas_per_shard DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#num_replicas_per_shard}
  */
  readonly numReplicasPerShard?: number;
  /**
  * The number of shards the cluster will contain. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#num_shards DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#num_shards}
  */
  readonly numShards?: number;
  /**
  * The name of the parameter group associated with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#parameter_group_name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#parameter_group_name}
  */
  readonly parameterGroupName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#parameter_group_ref DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#parameter_group_ref}
  */
  readonly parameterGroupRef?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRef;
  /**
  * The port number on which each of the nodes accepts connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#port DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * A list of security group names to associate with this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#security_group_i_ds DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#security_group_refs DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#security_group_refs}
  */
  readonly securityGroupRefs?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable;
  /**
  * A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#snapshot_ar_ns DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#snapshot_ar_ns}
  */
  readonly snapshotArNs?: string[];
  /**
  * The name of a snapshot from which to restore data into the new cluster. The snapshot status changes to restoring while the new cluster is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#snapshot_name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#snapshot_ref DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#snapshot_ref}
  */
  readonly snapshotRef?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRef;
  /**
  * The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#snapshot_retention_limit DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#snapshot_retention_limit}
  */
  readonly snapshotRetentionLimit?: number;
  /**
  * The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard. Example: 05:00-09:00 If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#snapshot_window DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#snapshot_window}
  */
  readonly snapshotWindow?: string;
  /**
  * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#sns_topic_arn DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#sns_topic_ref DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#sns_topic_ref}
  */
  readonly snsTopicRef?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRef;
  /**
  * The name of the subnet group to be used for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#subnet_group_name DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#subnet_group_name}
  */
  readonly subnetGroupName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#subnet_group_ref DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#subnet_group_ref}
  */
  readonly subnetGroupRef?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRef;
  /**
  * A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#tags DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * A flag to enable in-transit encryption on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#tls_enabled DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    acl_ref: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefToTerraform(struct!.aclRef),
    auto_minor_version_upgrade: cdktf.booleanToTerraform(struct!.autoMinorVersionUpgrade),
    description: cdktf.stringToTerraform(struct!.description),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    maintenance_window: cdktf.stringToTerraform(struct!.maintenanceWindow),
    name: cdktf.stringToTerraform(struct!.name),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    num_replicas_per_shard: cdktf.numberToTerraform(struct!.numReplicasPerShard),
    num_shards: cdktf.numberToTerraform(struct!.numShards),
    parameter_group_name: cdktf.stringToTerraform(struct!.parameterGroupName),
    parameter_group_ref: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefToTerraform(struct!.parameterGroupRef),
    port: cdktf.numberToTerraform(struct!.port),
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    security_group_refs: cdktf.listMapper(dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsToTerraform, false)(struct!.securityGroupRefs),
    snapshot_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.snapshotArNs),
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
    snapshot_ref: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefToTerraform(struct!.snapshotRef),
    snapshot_retention_limit: cdktf.numberToTerraform(struct!.snapshotRetentionLimit),
    snapshot_window: cdktf.stringToTerraform(struct!.snapshotWindow),
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
    sns_topic_ref: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefToTerraform(struct!.snsTopicRef),
    subnet_group_name: cdktf.stringToTerraform(struct!.subnetGroupName),
    subnet_group_ref: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefToTerraform(struct!.subnetGroupRef),
    tags: cdktf.listMapper(dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    tls_enabled: cdktf.booleanToTerraform(struct!.tlsEnabled),
  }
}


export function dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_ref: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefToHclTerraform(struct!.aclRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRef",
    },
    auto_minor_version_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoMinorVersionUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_version: {
      value: cdktf.stringToHclTerraform(struct!.engineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_window: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindow),
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
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_replicas_per_shard: {
      value: cdktf.numberToHclTerraform(struct!.numReplicasPerShard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_shards: {
      value: cdktf.numberToHclTerraform(struct!.numShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parameter_group_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_group_ref: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefToHclTerraform(struct!.parameterGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRef",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform, false)(struct!.securityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsList",
    },
    snapshot_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.snapshotArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    snapshot_name: {
      value: cdktf.stringToHclTerraform(struct!.snapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_ref: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefToHclTerraform(struct!.snapshotRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRef",
    },
    snapshot_retention_limit: {
      value: cdktf.numberToHclTerraform(struct!.snapshotRetentionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_window: {
      value: cdktf.stringToHclTerraform(struct!.snapshotWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns_topic_ref: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefToHclTerraform(struct!.snsTopicRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRef",
    },
    subnet_group_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_group_ref: {
      value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefToHclTerraform(struct!.subnetGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRef",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTagsList",
    },
    tls_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._aclRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclRef = this._aclRef?.internalValue;
    }
    if (this._autoMinorVersionUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMinorVersionUpgrade = this._autoMinorVersionUpgrade;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._maintenanceWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._numReplicasPerShard !== undefined) {
      hasAnyValues = true;
      internalValueResult.numReplicasPerShard = this._numReplicasPerShard;
    }
    if (this._numShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.numShards = this._numShards;
    }
    if (this._parameterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterGroupName = this._parameterGroupName;
    }
    if (this._parameterGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterGroupRef = this._parameterGroupRef?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    if (this._securityGroupRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupRefs = this._securityGroupRefs?.internalValue;
    }
    if (this._snapshotArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotArNs = this._snapshotArNs;
    }
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    if (this._snapshotRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRef = this._snapshotRef?.internalValue;
    }
    if (this._snapshotRetentionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRetentionLimit = this._snapshotRetentionLimit;
    }
    if (this._snapshotWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotWindow = this._snapshotWindow;
    }
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    if (this._snsTopicRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicRef = this._snsTopicRef?.internalValue;
    }
    if (this._subnetGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetGroupName = this._subnetGroupName;
    }
    if (this._subnetGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetGroupRef = this._subnetGroupRef?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._tlsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEnabled = this._tlsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclName = undefined;
      this._aclRef.internalValue = undefined;
      this._autoMinorVersionUpgrade = undefined;
      this._description = undefined;
      this._engineVersion = undefined;
      this._kmsKeyId = undefined;
      this._maintenanceWindow = undefined;
      this._name = undefined;
      this._nodeType = undefined;
      this._numReplicasPerShard = undefined;
      this._numShards = undefined;
      this._parameterGroupName = undefined;
      this._parameterGroupRef.internalValue = undefined;
      this._port = undefined;
      this._securityGroupIDs = undefined;
      this._securityGroupRefs.internalValue = undefined;
      this._snapshotArNs = undefined;
      this._snapshotName = undefined;
      this._snapshotRef.internalValue = undefined;
      this._snapshotRetentionLimit = undefined;
      this._snapshotWindow = undefined;
      this._snsTopicArn = undefined;
      this._snsTopicRef.internalValue = undefined;
      this._subnetGroupName = undefined;
      this._subnetGroupRef.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._tlsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclName = value.aclName;
      this._aclRef.internalValue = value.aclRef;
      this._autoMinorVersionUpgrade = value.autoMinorVersionUpgrade;
      this._description = value.description;
      this._engineVersion = value.engineVersion;
      this._kmsKeyId = value.kmsKeyId;
      this._maintenanceWindow = value.maintenanceWindow;
      this._name = value.name;
      this._nodeType = value.nodeType;
      this._numReplicasPerShard = value.numReplicasPerShard;
      this._numShards = value.numShards;
      this._parameterGroupName = value.parameterGroupName;
      this._parameterGroupRef.internalValue = value.parameterGroupRef;
      this._port = value.port;
      this._securityGroupIDs = value.securityGroupIDs;
      this._securityGroupRefs.internalValue = value.securityGroupRefs;
      this._snapshotArNs = value.snapshotArNs;
      this._snapshotName = value.snapshotName;
      this._snapshotRef.internalValue = value.snapshotRef;
      this._snapshotRetentionLimit = value.snapshotRetentionLimit;
      this._snapshotWindow = value.snapshotWindow;
      this._snsTopicArn = value.snsTopicArn;
      this._snsTopicRef.internalValue = value.snsTopicRef;
      this._subnetGroupName = value.subnetGroupName;
      this._subnetGroupRef.internalValue = value.subnetGroupRef;
      this._tags.internalValue = value.tags;
      this._tlsEnabled = value.tlsEnabled;
    }
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // acl_ref - computed: false, optional: true, required: false
  private _aclRef = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRefOutputReference(this, "acl_ref");
  public get aclRef() {
    return this._aclRef;
  }
  public putAclRef(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecAclRef) {
    this._aclRef.internalValue = value;
  }
  public resetAclRef() {
    this._aclRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclRefInput() {
    return this._aclRef.internalValue;
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow?: string; 
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow;
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

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // num_replicas_per_shard - computed: false, optional: true, required: false
  private _numReplicasPerShard?: number; 
  public get numReplicasPerShard() {
    return this.getNumberAttribute('num_replicas_per_shard');
  }
  public set numReplicasPerShard(value: number) {
    this._numReplicasPerShard = value;
  }
  public resetNumReplicasPerShard() {
    this._numReplicasPerShard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numReplicasPerShardInput() {
    return this._numReplicasPerShard;
  }

  // num_shards - computed: false, optional: true, required: false
  private _numShards?: number; 
  public get numShards() {
    return this.getNumberAttribute('num_shards');
  }
  public set numShards(value: number) {
    this._numShards = value;
  }
  public resetNumShards() {
    this._numShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numShardsInput() {
    return this._numShards;
  }

  // parameter_group_name - computed: false, optional: true, required: false
  private _parameterGroupName?: string; 
  public get parameterGroupName() {
    return this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string) {
    this._parameterGroupName = value;
  }
  public resetParameterGroupName() {
    this._parameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupNameInput() {
    return this._parameterGroupName;
  }

  // parameter_group_ref - computed: false, optional: true, required: false
  private _parameterGroupRef = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRefOutputReference(this, "parameter_group_ref");
  public get parameterGroupRef() {
    return this._parameterGroupRef;
  }
  public putParameterGroupRef(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecParameterGroupRef) {
    this._parameterGroupRef.internalValue = value;
  }
  public resetParameterGroupRef() {
    this._parameterGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupRefInput() {
    return this._parameterGroupRef.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_group_i_ds - computed: false, optional: true, required: false
  private _securityGroupIDs?: string[]; 
  public get securityGroupIDs() {
    return this.getListAttribute('security_group_i_ds');
  }
  public set securityGroupIDs(value: string[]) {
    this._securityGroupIDs = value;
  }
  public resetSecurityGroupIDs() {
    this._securityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIDsInput() {
    return this._securityGroupIDs;
  }

  // security_group_refs - computed: false, optional: true, required: false
  private _securityGroupRefs = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefsList(this, "security_group_refs", false);
  public get securityGroupRefs() {
    return this._securityGroupRefs;
  }
  public putSecurityGroupRefs(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable) {
    this._securityGroupRefs.internalValue = value;
  }
  public resetSecurityGroupRefs() {
    this._securityGroupRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRefsInput() {
    return this._securityGroupRefs.internalValue;
  }

  // snapshot_ar_ns - computed: false, optional: true, required: false
  private _snapshotArNs?: string[]; 
  public get snapshotArNs() {
    return this.getListAttribute('snapshot_ar_ns');
  }
  public set snapshotArNs(value: string[]) {
    this._snapshotArNs = value;
  }
  public resetSnapshotArNs() {
    this._snapshotArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArNsInput() {
    return this._snapshotArNs;
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // snapshot_ref - computed: false, optional: true, required: false
  private _snapshotRef = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRefOutputReference(this, "snapshot_ref");
  public get snapshotRef() {
    return this._snapshotRef;
  }
  public putSnapshotRef(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnapshotRef) {
    this._snapshotRef.internalValue = value;
  }
  public resetSnapshotRef() {
    this._snapshotRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRefInput() {
    return this._snapshotRef.internalValue;
  }

  // snapshot_retention_limit - computed: false, optional: true, required: false
  private _snapshotRetentionLimit?: number; 
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }
  public set snapshotRetentionLimit(value: number) {
    this._snapshotRetentionLimit = value;
  }
  public resetSnapshotRetentionLimit() {
    this._snapshotRetentionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionLimitInput() {
    return this._snapshotRetentionLimit;
  }

  // snapshot_window - computed: false, optional: true, required: false
  private _snapshotWindow?: string; 
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }
  public set snapshotWindow(value: string) {
    this._snapshotWindow = value;
  }
  public resetSnapshotWindow() {
    this._snapshotWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotWindowInput() {
    return this._snapshotWindow;
  }

  // sns_topic_arn - computed: false, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }

  // sns_topic_ref - computed: false, optional: true, required: false
  private _snsTopicRef = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRefOutputReference(this, "sns_topic_ref");
  public get snsTopicRef() {
    return this._snsTopicRef;
  }
  public putSnsTopicRef(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSnsTopicRef) {
    this._snsTopicRef.internalValue = value;
  }
  public resetSnsTopicRef() {
    this._snsTopicRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicRefInput() {
    return this._snsTopicRef.internalValue;
  }

  // subnet_group_name - computed: false, optional: true, required: false
  private _subnetGroupName?: string; 
  public get subnetGroupName() {
    return this.getStringAttribute('subnet_group_name');
  }
  public set subnetGroupName(value: string) {
    this._subnetGroupName = value;
  }
  public resetSubnetGroupName() {
    this._subnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGroupNameInput() {
    return this._subnetGroupName;
  }

  // subnet_group_ref - computed: false, optional: true, required: false
  private _subnetGroupRef = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRefOutputReference(this, "subnet_group_ref");
  public get subnetGroupRef() {
    return this._subnetGroupRef;
  }
  public putSubnetGroupRef(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecSubnetGroupRef) {
    this._subnetGroupRef.internalValue = value;
  }
  public resetSubnetGroupRef() {
    this._subnetGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGroupRefInput() {
    return this._subnetGroupRef.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest k8s_memorydb_services_k8s_aws_cluster_v1alpha1_manifest}
*/
export class DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_memorydb_services_k8s_aws_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMemorydbServicesK8SAwsClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_memorydb_services_k8s_aws_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/memorydb_services_k8s_aws_cluster_v1alpha1_manifest k8s_memorydb_services_k8s_aws_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_memorydb_services_k8s_aws_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMemorydbServicesK8SAwsClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
