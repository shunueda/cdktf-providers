// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#metadata DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadata;
  /**
  * FargateProfileSpec defines the desired state of FargateProfile. An object representing an Fargate profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#spec DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpec;
}
export interface DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#annotations DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#labels DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#name DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#name DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFromToTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#from DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFrom;
}

export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefToTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefToHclTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefFrom) {
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
export interface DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#name DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFromToTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#from DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFrom;
}

export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefToTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefToHclTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefFrom) {
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
export interface DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#labels DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectorsToTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectorsToHclTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._namespace = value.namespace;
    }
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

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectorsOutputReference {
    return new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#name DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFromToTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#from DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFrom;
}

export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsToTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsToHclTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsFrom) {
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

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsOutputReference {
    return new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpec {
  /**
  * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#client_request_token DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#client_request_token}
  */
  readonly clientRequestToken?: string;
  /**
  * The name of your cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#cluster_name DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#cluster_ref DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#cluster_ref}
  */
  readonly clusterRef?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRef;
  /**
  * The name of the Fargate profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#name DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The Amazon Resource Name (ARN) of the Pod execution role to use for a Pod that matches the selectors in the Fargate profile. The Pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see Pod execution role (https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#pod_execution_role_arn DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#pod_execution_role_arn}
  */
  readonly podExecutionRoleArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#pod_execution_role_ref DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#pod_execution_role_ref}
  */
  readonly podExecutionRoleRef?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRef;
  /**
  * The selectors to match for a Pod to use this Fargate profile. Each selector must have an associated Kubernetes namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#selectors DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#subnet_refs DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#subnet_refs}
  */
  readonly subnetRefs?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable;
  /**
  * The IDs of subnets to launch a Pod into. A Pod running on Fargate isn't assigned a public IP address, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#subnets DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
  /**
  * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#tags DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_request_token: cdktf.stringToTerraform(struct!.clientRequestToken),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_ref: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefToTerraform(struct!.clusterRef),
    name: cdktf.stringToTerraform(struct!.name),
    pod_execution_role_arn: cdktf.stringToTerraform(struct!.podExecutionRoleArn),
    pod_execution_role_ref: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefToTerraform(struct!.podExecutionRoleRef),
    selectors: cdktf.listMapper(dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectorsToTerraform, false)(struct!.selectors),
    subnet_refs: cdktf.listMapper(dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsToTerraform, false)(struct!.subnetRefs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_request_token: {
      value: cdktf.stringToHclTerraform(struct!.clientRequestToken),
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
    cluster_ref: {
      value: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefToHclTerraform(struct!.clusterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRef",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_execution_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.podExecutionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_execution_role_ref: {
      value: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefToHclTerraform(struct!.podExecutionRoleRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRef",
    },
    selectors: {
      value: cdktf.listMapperHcl(dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectorsToHclTerraform, false)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectorsList",
    },
    subnet_refs: {
      value: cdktf.listMapperHcl(dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsToHclTerraform, false)(struct!.subnetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientRequestToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestToken = this._clientRequestToken;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRef = this._clusterRef?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._podExecutionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.podExecutionRoleArn = this._podExecutionRoleArn;
    }
    if (this._podExecutionRoleRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podExecutionRoleRef = this._podExecutionRoleRef?.internalValue;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._subnetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetRefs = this._subnetRefs?.internalValue;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientRequestToken = undefined;
      this._clusterName = undefined;
      this._clusterRef.internalValue = undefined;
      this._name = undefined;
      this._podExecutionRoleArn = undefined;
      this._podExecutionRoleRef.internalValue = undefined;
      this._selectors.internalValue = undefined;
      this._subnetRefs.internalValue = undefined;
      this._subnets = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientRequestToken = value.clientRequestToken;
      this._clusterName = value.clusterName;
      this._clusterRef.internalValue = value.clusterRef;
      this._name = value.name;
      this._podExecutionRoleArn = value.podExecutionRoleArn;
      this._podExecutionRoleRef.internalValue = value.podExecutionRoleRef;
      this._selectors.internalValue = value.selectors;
      this._subnetRefs.internalValue = value.subnetRefs;
      this._subnets = value.subnets;
      this._tags = value.tags;
    }
  }

  // client_request_token - computed: false, optional: true, required: false
  private _clientRequestToken?: string; 
  public get clientRequestToken() {
    return this.getStringAttribute('client_request_token');
  }
  public set clientRequestToken(value: string) {
    this._clientRequestToken = value;
  }
  public resetClientRequestToken() {
    this._clientRequestToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestTokenInput() {
    return this._clientRequestToken;
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
  private _clusterRef = new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRefOutputReference(this, "cluster_ref");
  public get clusterRef() {
    return this._clusterRef;
  }
  public putClusterRef(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecClusterRef) {
    this._clusterRef.internalValue = value;
  }
  public resetClusterRef() {
    this._clusterRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefInput() {
    return this._clusterRef.internalValue;
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

  // pod_execution_role_arn - computed: false, optional: true, required: false
  private _podExecutionRoleArn?: string; 
  public get podExecutionRoleArn() {
    return this.getStringAttribute('pod_execution_role_arn');
  }
  public set podExecutionRoleArn(value: string) {
    this._podExecutionRoleArn = value;
  }
  public resetPodExecutionRoleArn() {
    this._podExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podExecutionRoleArnInput() {
    return this._podExecutionRoleArn;
  }

  // pod_execution_role_ref - computed: false, optional: true, required: false
  private _podExecutionRoleRef = new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRefOutputReference(this, "pod_execution_role_ref");
  public get podExecutionRoleRef() {
    return this._podExecutionRoleRef;
  }
  public putPodExecutionRoleRef(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecPodExecutionRoleRef) {
    this._podExecutionRoleRef.internalValue = value;
  }
  public resetPodExecutionRoleRef() {
    this._podExecutionRoleRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podExecutionRoleRefInput() {
    return this._podExecutionRoleRef.internalValue;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSelectors[] | cdktf.IResolvable) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // subnet_refs - computed: false, optional: true, required: false
  private _subnetRefs = new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefsList(this, "subnet_refs", false);
  public get subnetRefs() {
    return this._subnetRefs;
  }
  public putSubnetRefs(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable) {
    this._subnetRefs.internalValue = value;
  }
  public resetSubnetRefs() {
    this._subnetRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetRefsInput() {
    return this._subnetRefs.internalValue;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest k8s_eks_services_k8s_aws_fargate_profile_v1alpha1_manifest}
*/
export class DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_eks_services_k8s_aws_fargate_profile_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEksServicesK8SAwsFargateProfileV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_eks_services_k8s_aws_fargate_profile_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_fargate_profile_v1alpha1_manifest k8s_eks_services_k8s_aws_fargate_profile_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_eks_services_k8s_aws_fargate_profile_v1alpha1_manifest',
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
  private _metadata = new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEksServicesK8SAwsFargateProfileV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
