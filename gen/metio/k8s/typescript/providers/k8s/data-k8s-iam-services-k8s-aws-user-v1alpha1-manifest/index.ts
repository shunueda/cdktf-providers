// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SIamServicesK8SAwsUserV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#metadata DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadata;
  /**
  * UserSpec defines the desired state of User. Contains information about an IAM user entity. This data type is used as a response element in the following operations: * CreateUser * GetUser * ListUsers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#spec DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpec;
}
export interface DataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#annotations DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#labels DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#name DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#namespace DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#name DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#namespace DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFromToTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFromToHclTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFrom | cdktf.IResolvable): any {
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

export class DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#from DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFrom;
}

export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefToTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFromToTerraform(struct!.from),
  }
}


export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefToHclTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefFrom) {
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
export interface DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#name DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#namespace DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFromToTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFromToHclTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#from DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFrom;
}

export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsToTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsToHclTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsFrom) {
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

export class DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsOutputReference {
    return new DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#key DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#value DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#inline_policies DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#inline_policies}
  */
  readonly inlinePolicies?: { [key: string]: string };
  /**
  * The name of the user to create. IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both 'MyResource' and 'myresource'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#name DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The path for the user name. For more information about paths, see IAM identifiers (https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern (http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (u0021) through the DEL character (u007F), including most punctuation characters, digits, and upper and lowercased letters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#path DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * The ARN of the managed policy that is used to set the permissions boundary for the user. A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see Permissions boundaries for IAM entities (https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the IAM User Guide. For more information about policy types, see Policy types (https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types) in the IAM User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#permissions_boundary DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#permissions_boundary}
  */
  readonly permissionsBoundary?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#permissions_boundary_ref DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#permissions_boundary_ref}
  */
  readonly permissionsBoundaryRef?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#policies DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#policies}
  */
  readonly policies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#policy_refs DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#policy_refs}
  */
  readonly policyRefs?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefs[] | cdktf.IResolvable;
  /**
  * A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources (https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#tags DataK8SIamServicesK8SAwsUserV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecToTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline_policies: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.inlinePolicies),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    permissions_boundary: cdktf.stringToTerraform(struct!.permissionsBoundary),
    permissions_boundary_ref: dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefToTerraform(struct!.permissionsBoundaryRef),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
    policy_refs: cdktf.listMapper(dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsToTerraform, false)(struct!.policyRefs),
    tags: cdktf.listMapper(dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline_policies: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.inlinePolicies),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions_boundary: {
      value: cdktf.stringToHclTerraform(struct!.permissionsBoundary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions_boundary_ref: {
      value: dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefToHclTerraform(struct!.permissionsBoundaryRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRef",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    policy_refs: {
      value: cdktf.listMapperHcl(dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsToHclTerraform, false)(struct!.policyRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlinePolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlinePolicies = this._inlinePolicies;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._permissionsBoundary !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionsBoundary = this._permissionsBoundary;
    }
    if (this._permissionsBoundaryRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionsBoundaryRef = this._permissionsBoundaryRef?.internalValue;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    if (this._policyRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRefs = this._policyRefs?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlinePolicies = undefined;
      this._name = undefined;
      this._path = undefined;
      this._permissionsBoundary = undefined;
      this._permissionsBoundaryRef.internalValue = undefined;
      this._policies = undefined;
      this._policyRefs.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlinePolicies = value.inlinePolicies;
      this._name = value.name;
      this._path = value.path;
      this._permissionsBoundary = value.permissionsBoundary;
      this._permissionsBoundaryRef.internalValue = value.permissionsBoundaryRef;
      this._policies = value.policies;
      this._policyRefs.internalValue = value.policyRefs;
      this._tags.internalValue = value.tags;
    }
  }

  // inline_policies - computed: false, optional: true, required: false
  private _inlinePolicies?: { [key: string]: string }; 
  public get inlinePolicies() {
    return this.getStringMapAttribute('inline_policies');
  }
  public set inlinePolicies(value: { [key: string]: string }) {
    this._inlinePolicies = value;
  }
  public resetInlinePolicies() {
    this._inlinePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePoliciesInput() {
    return this._inlinePolicies;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions_boundary - computed: false, optional: true, required: false
  private _permissionsBoundary?: string; 
  public get permissionsBoundary() {
    return this.getStringAttribute('permissions_boundary');
  }
  public set permissionsBoundary(value: string) {
    this._permissionsBoundary = value;
  }
  public resetPermissionsBoundary() {
    this._permissionsBoundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryInput() {
    return this._permissionsBoundary;
  }

  // permissions_boundary_ref - computed: false, optional: true, required: false
  private _permissionsBoundaryRef = new DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRefOutputReference(this, "permissions_boundary_ref");
  public get permissionsBoundaryRef() {
    return this._permissionsBoundaryRef;
  }
  public putPermissionsBoundaryRef(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPermissionsBoundaryRef) {
    this._permissionsBoundaryRef.internalValue = value;
  }
  public resetPermissionsBoundaryRef() {
    this._permissionsBoundaryRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryRefInput() {
    return this._permissionsBoundaryRef.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // policy_refs - computed: false, optional: true, required: false
  private _policyRefs = new DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefsList(this, "policy_refs", false);
  public get policyRefs() {
    return this._policyRefs;
  }
  public putPolicyRefs(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecPolicyRefs[] | cdktf.IResolvable) {
    this._policyRefs.internalValue = value;
  }
  public resetPolicyRefs() {
    this._policyRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRefsInput() {
    return this._policyRefs.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest k8s_iam_services_k8s_aws_user_v1alpha1_manifest}
*/
export class DataK8SIamServicesK8SAwsUserV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_iam_services_k8s_aws_user_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SIamServicesK8SAwsUserV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SIamServicesK8SAwsUserV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SIamServicesK8SAwsUserV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SIamServicesK8SAwsUserV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_iam_services_k8s_aws_user_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iam_services_k8s_aws_user_v1alpha1_manifest k8s_iam_services_k8s_aws_user_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SIamServicesK8SAwsUserV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_iam_services_k8s_aws_user_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpec) {
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
      metadata: dataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIamServicesK8SAwsUserV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIamServicesK8SAwsUserV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
