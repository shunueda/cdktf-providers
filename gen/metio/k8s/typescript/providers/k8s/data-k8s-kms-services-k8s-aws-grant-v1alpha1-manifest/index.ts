// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#metadata DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadata;
  /**
  * GrantSpec defines the desired state of Grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#spec DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpec;
}
export interface DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#annotations DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#labels DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#name DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#namespace DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#encryption_context_equals DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#encryption_context_equals}
  */
  readonly encryptionContextEquals?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#encryption_context_subset DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#encryption_context_subset}
  */
  readonly encryptionContextSubset?: { [key: string]: string };
}

export function dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraintsToTerraform(struct?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_context_equals: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.encryptionContextEquals),
    encryption_context_subset: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.encryptionContextSubset),
  }
}


export function dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraintsToHclTerraform(struct?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_context_equals: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.encryptionContextEquals),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    encryption_context_subset: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.encryptionContextSubset),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionContextEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContextEquals = this._encryptionContextEquals;
    }
    if (this._encryptionContextSubset !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContextSubset = this._encryptionContextSubset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionContextEquals = undefined;
      this._encryptionContextSubset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionContextEquals = value.encryptionContextEquals;
      this._encryptionContextSubset = value.encryptionContextSubset;
    }
  }

  // encryption_context_equals - computed: false, optional: true, required: false
  private _encryptionContextEquals?: { [key: string]: string }; 
  public get encryptionContextEquals() {
    return this.getStringMapAttribute('encryption_context_equals');
  }
  public set encryptionContextEquals(value: { [key: string]: string }) {
    this._encryptionContextEquals = value;
  }
  public resetEncryptionContextEquals() {
    this._encryptionContextEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContextEqualsInput() {
    return this._encryptionContextEquals;
  }

  // encryption_context_subset - computed: false, optional: true, required: false
  private _encryptionContextSubset?: { [key: string]: string }; 
  public get encryptionContextSubset() {
    return this.getStringMapAttribute('encryption_context_subset');
  }
  public set encryptionContextSubset(value: { [key: string]: string }) {
    this._encryptionContextSubset = value;
  }
  public resetEncryptionContextSubset() {
    this._encryptionContextSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContextSubsetInput() {
    return this._encryptionContextSubset;
  }
}
export interface DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#name DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#namespace DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFromToTerraform(struct?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFromToHclTerraform(struct?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#from DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFrom;
}

export function dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefToTerraform(struct?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefToHclTerraform(struct?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefFrom) {
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
export interface DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpec {
  /**
  * Specifies a grant constraint. KMS supports the EncryptionContextEquals and EncryptionContextSubset grant constraints. Each constraint value can include up to 8 encryption context pairs. The encryption context value in each constraint cannot exceed 384 characters. For information about grant constraints, see Using grant constraints (https://docs.aws.amazon.com/kms/latest/developerguide/create-grant-overview.html#grant-constraints) in the Key Management Service Developer Guide. For more information about encryption context, see Encryption context (https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the Key Management Service Developer Guide . The encryption context grant constraints allow the permissions in the grant only when the encryption context in the request matches (EncryptionContextEquals) or includes (EncryptionContextSubset) the encryption context specified in this structure. The encryption context grant constraints are supported only on grant operations (https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-grant-operations) that include an EncryptionContext parameter, such as cryptographic operations on symmetric encryption KMS keys. Grants with grant constraints can include the DescribeKey and RetireGrant operations, but the constraint doesn't apply to these operations. If a grant with a grant constraint includes the CreateGrant operation, the constraint requires that any grants created with the CreateGrant permission have an equally strict or stricter encryption context constraint. You cannot use an encryption context grant constraint for cryptographic operations with asymmetric KMS keys or HMAC KMS keys. These keys don't support an encryption context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#constraints DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#constraints}
  */
  readonly constraints?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraints;
  /**
  * A list of grant tokens. Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved eventual consistency. For more information, see Grant token (https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and Using a grant token (https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token) in the Key Management Service Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#grant_tokens DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#grant_tokens}
  */
  readonly grantTokens?: string[];
  /**
  * The identity that gets the permissions specified in the grant. To specify the principal, use the Amazon Resource Name (ARN) (https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an Amazon Web Services principal. Valid Amazon Web Services principals include Amazon Web Services accounts (root), IAM users, IAM roles, federated users, and assumed role users. For examples of the ARN syntax to use for specifying a principal, see Amazon Web Services Identity and Access Management (IAM) (https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam) in the Example ARNs section of the Amazon Web Services General Reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#grantee_principal DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#grantee_principal}
  */
  readonly granteePrincipal: string;
  /**
  * Identifies the KMS key for the grant. The grant gives principals permission to use this KMS key. Specify the key ID or key ARN of the KMS key. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN. For example: * Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab * Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#key_id DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#key_id}
  */
  readonly keyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#key_ref DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#key_ref}
  */
  readonly keyRef?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRef;
  /**
  * A friendly name for the grant. Use this value to prevent the unintended creation of duplicate grants when retrying this request. When this value is absent, all CreateGrant requests result in a new grant with a unique GrantId even if all the supplied parameters are identical. This can result in unintended duplicates when you retry the CreateGrant request. When this value is present, you can retry a CreateGrant request with identical parameters; if the grant already exists, the original GrantId is returned without creating a new grant. Note that the returned grant token is unique with every CreateGrant request, even when a duplicate GrantId is returned. All grant tokens for the same grant ID can be used interchangeably.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#name DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * A list of operations that the grant permits. This list must include only operations that are permitted in a grant. Also, the operation must be supported on the KMS key. For example, you cannot create a grant for a symmetric encryption KMS key that allows the Sign operation, or a grant for an asymmetric KMS key that allows the GenerateDataKey operation. If you try, KMS returns a ValidationError exception. For details, see Grant operations (https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-grant-operations) in the Key Management Service Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#operations DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#operations}
  */
  readonly operations: string[];
  /**
  * The principal that has permission to use the RetireGrant operation to retire the grant. To specify the principal, use the Amazon Resource Name (ARN) (https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an Amazon Web Services principal. Valid Amazon Web Services principals include Amazon Web Services accounts (root), IAM users, federated users, and assumed role users. For examples of the ARN syntax to use for specifying a principal, see Amazon Web Services Identity and Access Management (IAM) (https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam) in the Example ARNs section of the Amazon Web Services General Reference. The grant determines the retiring principal. Other principals might have permission to retire the grant or revoke the grant. For details, see RevokeGrant and Retiring and revoking grants (https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete) in the Key Management Service Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#retiring_principal DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest#retiring_principal}
  */
  readonly retiringPrincipal?: string;
}

export function dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraintsToTerraform(struct!.constraints),
    grant_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grantTokens),
    grantee_principal: cdktf.stringToTerraform(struct!.granteePrincipal),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_ref: dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefToTerraform(struct!.keyRef),
    name: cdktf.stringToTerraform(struct!.name),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    retiring_principal: cdktf.stringToTerraform(struct!.retiringPrincipal),
  }
}


export function dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraints",
    },
    grant_tokens: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.grantTokens),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    grantee_principal: {
      value: cdktf.stringToHclTerraform(struct!.granteePrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ref: {
      value: dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefToHclTerraform(struct!.keyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRef",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retiring_principal: {
      value: cdktf.stringToHclTerraform(struct!.retiringPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._grantTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantTokens = this._grantTokens;
    }
    if (this._granteePrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.granteePrincipal = this._granteePrincipal;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRef = this._keyRef?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._retiringPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.retiringPrincipal = this._retiringPrincipal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraints.internalValue = undefined;
      this._grantTokens = undefined;
      this._granteePrincipal = undefined;
      this._keyId = undefined;
      this._keyRef.internalValue = undefined;
      this._name = undefined;
      this._operations = undefined;
      this._retiringPrincipal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraints.internalValue = value.constraints;
      this._grantTokens = value.grantTokens;
      this._granteePrincipal = value.granteePrincipal;
      this._keyId = value.keyId;
      this._keyRef.internalValue = value.keyRef;
      this._name = value.name;
      this._operations = value.operations;
      this._retiringPrincipal = value.retiringPrincipal;
    }
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // grant_tokens - computed: false, optional: true, required: false
  private _grantTokens?: string[]; 
  public get grantTokens() {
    return this.getListAttribute('grant_tokens');
  }
  public set grantTokens(value: string[]) {
    this._grantTokens = value;
  }
  public resetGrantTokens() {
    this._grantTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTokensInput() {
    return this._grantTokens;
  }

  // grantee_principal - computed: false, optional: false, required: true
  private _granteePrincipal?: string; 
  public get granteePrincipal() {
    return this.getStringAttribute('grantee_principal');
  }
  public set granteePrincipal(value: string) {
    this._granteePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteePrincipalInput() {
    return this._granteePrincipal;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_ref - computed: false, optional: true, required: false
  private _keyRef = new DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRefOutputReference(this, "key_ref");
  public get keyRef() {
    return this._keyRef;
  }
  public putKeyRef(value: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecKeyRef) {
    this._keyRef.internalValue = value;
  }
  public resetKeyRef() {
    this._keyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefInput() {
    return this._keyRef.internalValue;
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

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // retiring_principal - computed: false, optional: true, required: false
  private _retiringPrincipal?: string; 
  public get retiringPrincipal() {
    return this.getStringAttribute('retiring_principal');
  }
  public set retiringPrincipal(value: string) {
    this._retiringPrincipal = value;
  }
  public resetRetiringPrincipal() {
    this._retiringPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retiringPrincipalInput() {
    return this._retiringPrincipal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest k8s_kms_services_k8s_aws_grant_v1alpha1_manifest}
*/
export class DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kms_services_k8s_aws_grant_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKmsServicesK8SAwsGrantV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kms_services_k8s_aws_grant_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kms_services_k8s_aws_grant_v1alpha1_manifest k8s_kms_services_k8s_aws_grant_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kms_services_k8s_aws_grant_v1alpha1_manifest',
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
  private _metadata = new DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKmsServicesK8SAwsGrantV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
