// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#metadata DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadata;
  /**
  * AddonSpec defines the desired state of Addon. An Amazon EKS add-on. For more information, see Amazon EKS add-ons (https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#spec DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpec;
}
export interface DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#annotations DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#labels DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#name DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#name DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFromToTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#from DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFrom;
}

export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefToTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefToHclTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefFrom) {
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
export interface DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#role_arn DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#service_account DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: string;
}

export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociationsToTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociationsToHclTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}

export class DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociationsOutputReference {
    return new DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#name DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFromToTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#from DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFrom;
}

export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefToTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefToHclTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefFrom) {
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
export interface DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpec {
  /**
  * The version of the add-on. The version must match one of the versions returned by DescribeAddonVersions (https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#addon_version DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#addon_version}
  */
  readonly addonVersion?: string;
  /**
  * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#client_request_token DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#client_request_token}
  */
  readonly clientRequestToken?: string;
  /**
  * The name of your cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#cluster_name DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#cluster_ref DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#cluster_ref}
  */
  readonly clusterRef?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRef;
  /**
  * The set of configuration values for the add-on that's created. The values that you provide are validated against the schema returned by DescribeAddonConfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#configuration_values DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#configuration_values}
  */
  readonly configurationValues?: string;
  /**
  * The name of the add-on. The name must match one of the names returned by DescribeAddonVersions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#name DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * An array of Pod Identity Assocations to be created. Each EKS Pod Identity association maps a Kubernetes service account to an IAM Role. For more information, see Attach an IAM Role to an Amazon EKS add-on using Pod Identity (https://docs.aws.amazon.com/eks/latest/userguide/add-ons-iam.html) in the EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#pod_identity_associations DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#pod_identity_associations}
  */
  readonly podIdentityAssociations?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociations[] | cdktf.IResolvable;
  /**
  * How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose: * None – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn't change the value. Creation of the add-on might fail. * Overwrite – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value. * Preserve – This is similar to the NONE option. If the self-managed version of the add-on is installed on your cluster Amazon EKS doesn't change the add-on resource properties. Creation of the add-on might fail if conflicts are detected. This option works differently during the update operation. For more information, see UpdateAddon (https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html). If you don't currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#resolve_conflicts DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#resolve_conflicts}
  */
  readonly resolveConflicts?: string;
  /**
  * The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see Amazon EKS node IAM role (https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in the Amazon EKS User Guide. To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see Enabling IAM roles for service accounts on your cluster (https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#service_account_role_arn DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#service_account_role_arn}
  */
  readonly serviceAccountRoleArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#service_account_role_ref DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#service_account_role_ref}
  */
  readonly serviceAccountRoleRef?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRef;
  /**
  * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#tags DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addon_version: cdktf.stringToTerraform(struct!.addonVersion),
    client_request_token: cdktf.stringToTerraform(struct!.clientRequestToken),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_ref: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefToTerraform(struct!.clusterRef),
    configuration_values: cdktf.stringToTerraform(struct!.configurationValues),
    name: cdktf.stringToTerraform(struct!.name),
    pod_identity_associations: cdktf.listMapper(dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociationsToTerraform, false)(struct!.podIdentityAssociations),
    resolve_conflicts: cdktf.stringToTerraform(struct!.resolveConflicts),
    service_account_role_arn: cdktf.stringToTerraform(struct!.serviceAccountRoleArn),
    service_account_role_ref: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefToTerraform(struct!.serviceAccountRoleRef),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addon_version: {
      value: cdktf.stringToHclTerraform(struct!.addonVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
      value: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefToHclTerraform(struct!.clusterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRef",
    },
    configuration_values: {
      value: cdktf.stringToHclTerraform(struct!.configurationValues),
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
    pod_identity_associations: {
      value: cdktf.listMapperHcl(dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociationsToHclTerraform, false)(struct!.podIdentityAssociations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociationsList",
    },
    resolve_conflicts: {
      value: cdktf.stringToHclTerraform(struct!.resolveConflicts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_role_ref: {
      value: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefToHclTerraform(struct!.serviceAccountRoleRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRef",
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

export class DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonVersion = this._addonVersion;
    }
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
    if (this._configurationValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationValues = this._configurationValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._podIdentityAssociations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIdentityAssociations = this._podIdentityAssociations?.internalValue;
    }
    if (this._resolveConflicts !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveConflicts = this._resolveConflicts;
    }
    if (this._serviceAccountRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRoleArn = this._serviceAccountRoleArn;
    }
    if (this._serviceAccountRoleRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRoleRef = this._serviceAccountRoleRef?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addonVersion = undefined;
      this._clientRequestToken = undefined;
      this._clusterName = undefined;
      this._clusterRef.internalValue = undefined;
      this._configurationValues = undefined;
      this._name = undefined;
      this._podIdentityAssociations.internalValue = undefined;
      this._resolveConflicts = undefined;
      this._serviceAccountRoleArn = undefined;
      this._serviceAccountRoleRef.internalValue = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addonVersion = value.addonVersion;
      this._clientRequestToken = value.clientRequestToken;
      this._clusterName = value.clusterName;
      this._clusterRef.internalValue = value.clusterRef;
      this._configurationValues = value.configurationValues;
      this._name = value.name;
      this._podIdentityAssociations.internalValue = value.podIdentityAssociations;
      this._resolveConflicts = value.resolveConflicts;
      this._serviceAccountRoleArn = value.serviceAccountRoleArn;
      this._serviceAccountRoleRef.internalValue = value.serviceAccountRoleRef;
      this._tags = value.tags;
    }
  }

  // addon_version - computed: false, optional: true, required: false
  private _addonVersion?: string; 
  public get addonVersion() {
    return this.getStringAttribute('addon_version');
  }
  public set addonVersion(value: string) {
    this._addonVersion = value;
  }
  public resetAddonVersion() {
    this._addonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonVersionInput() {
    return this._addonVersion;
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
  private _clusterRef = new DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRefOutputReference(this, "cluster_ref");
  public get clusterRef() {
    return this._clusterRef;
  }
  public putClusterRef(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecClusterRef) {
    this._clusterRef.internalValue = value;
  }
  public resetClusterRef() {
    this._clusterRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefInput() {
    return this._clusterRef.internalValue;
  }

  // configuration_values - computed: false, optional: true, required: false
  private _configurationValues?: string; 
  public get configurationValues() {
    return this.getStringAttribute('configuration_values');
  }
  public set configurationValues(value: string) {
    this._configurationValues = value;
  }
  public resetConfigurationValues() {
    this._configurationValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationValuesInput() {
    return this._configurationValues;
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

  // pod_identity_associations - computed: false, optional: true, required: false
  private _podIdentityAssociations = new DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociationsList(this, "pod_identity_associations", false);
  public get podIdentityAssociations() {
    return this._podIdentityAssociations;
  }
  public putPodIdentityAssociations(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecPodIdentityAssociations[] | cdktf.IResolvable) {
    this._podIdentityAssociations.internalValue = value;
  }
  public resetPodIdentityAssociations() {
    this._podIdentityAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityAssociationsInput() {
    return this._podIdentityAssociations.internalValue;
  }

  // resolve_conflicts - computed: false, optional: true, required: false
  private _resolveConflicts?: string; 
  public get resolveConflicts() {
    return this.getStringAttribute('resolve_conflicts');
  }
  public set resolveConflicts(value: string) {
    this._resolveConflicts = value;
  }
  public resetResolveConflicts() {
    this._resolveConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveConflictsInput() {
    return this._resolveConflicts;
  }

  // service_account_role_arn - computed: false, optional: true, required: false
  private _serviceAccountRoleArn?: string; 
  public get serviceAccountRoleArn() {
    return this.getStringAttribute('service_account_role_arn');
  }
  public set serviceAccountRoleArn(value: string) {
    this._serviceAccountRoleArn = value;
  }
  public resetServiceAccountRoleArn() {
    this._serviceAccountRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRoleArnInput() {
    return this._serviceAccountRoleArn;
  }

  // service_account_role_ref - computed: false, optional: true, required: false
  private _serviceAccountRoleRef = new DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRefOutputReference(this, "service_account_role_ref");
  public get serviceAccountRoleRef() {
    return this._serviceAccountRoleRef;
  }
  public putServiceAccountRoleRef(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecServiceAccountRoleRef) {
    this._serviceAccountRoleRef.internalValue = value;
  }
  public resetServiceAccountRoleRef() {
    this._serviceAccountRoleRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRoleRefInput() {
    return this._serviceAccountRoleRef.internalValue;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest k8s_eks_services_k8s_aws_addon_v1alpha1_manifest}
*/
export class DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_eks_services_k8s_aws_addon_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEksServicesK8SAwsAddonV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_eks_services_k8s_aws_addon_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/eks_services_k8s_aws_addon_v1alpha1_manifest k8s_eks_services_k8s_aws_addon_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_eks_services_k8s_aws_addon_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEksServicesK8SAwsAddonV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
