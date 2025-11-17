// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#metadata DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadata;
  /**
  * NodegroupSpec defines the desired state of Nodegroup. An object representing an Amazon EKS managed node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#spec DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpec;
}
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#annotations DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#labels DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#name DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#name DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFromToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#from DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFrom;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefFrom) {
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
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#id DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#name DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#version DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplateToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplateToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#name DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFromToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#from DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFrom;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefFrom) {
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
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#name DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFromToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#from DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFrom;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsFrom) {
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsOutputReference {
    return new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#ec2_ssh_key DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#ec2_ssh_key}
  */
  readonly ec2SshKey?: string;
  /**
  * Reference field for SourceSecurityGroups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#source_security_group_refs DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#source_security_group_refs}
  */
  readonly sourceSecurityGroupRefs?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#source_security_groups DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#source_security_groups}
  */
  readonly sourceSecurityGroups?: string[];
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ec2_ssh_key: cdktf.stringToTerraform(struct!.ec2SshKey),
    source_security_group_refs: cdktf.listMapper(dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsToTerraform, false)(struct!.sourceSecurityGroupRefs),
    source_security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceSecurityGroups),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ec2_ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.ec2SshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsToHclTerraform, false)(struct!.sourceSecurityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsList",
    },
    source_security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceSecurityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec2SshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2SshKey = this._ec2SshKey;
    }
    if (this._sourceSecurityGroupRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSecurityGroupRefs = this._sourceSecurityGroupRefs?.internalValue;
    }
    if (this._sourceSecurityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSecurityGroups = this._sourceSecurityGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ec2SshKey = undefined;
      this._sourceSecurityGroupRefs.internalValue = undefined;
      this._sourceSecurityGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ec2SshKey = value.ec2SshKey;
      this._sourceSecurityGroupRefs.internalValue = value.sourceSecurityGroupRefs;
      this._sourceSecurityGroups = value.sourceSecurityGroups;
    }
  }

  // ec2_ssh_key - computed: false, optional: true, required: false
  private _ec2SshKey?: string; 
  public get ec2SshKey() {
    return this.getStringAttribute('ec2_ssh_key');
  }
  public set ec2SshKey(value: string) {
    this._ec2SshKey = value;
  }
  public resetEc2SshKey() {
    this._ec2SshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2SshKeyInput() {
    return this._ec2SshKey;
  }

  // source_security_group_refs - computed: false, optional: true, required: false
  private _sourceSecurityGroupRefs = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefsList(this, "source_security_group_refs", false);
  public get sourceSecurityGroupRefs() {
    return this._sourceSecurityGroupRefs;
  }
  public putSourceSecurityGroupRefs(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessSourceSecurityGroupRefs[] | cdktf.IResolvable) {
    this._sourceSecurityGroupRefs.internalValue = value;
  }
  public resetSourceSecurityGroupRefs() {
    this._sourceSecurityGroupRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupRefsInput() {
    return this._sourceSecurityGroupRefs.internalValue;
  }

  // source_security_groups - computed: false, optional: true, required: false
  private _sourceSecurityGroups?: string[]; 
  public get sourceSecurityGroups() {
    return this.getListAttribute('source_security_groups');
  }
  public set sourceSecurityGroups(value: string[]) {
    this._sourceSecurityGroups = value;
  }
  public resetSourceSecurityGroups() {
    this._sourceSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupsInput() {
    return this._sourceSecurityGroups;
  }
}
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#desired_size DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#desired_size}
  */
  readonly desiredSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#max_size DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#min_size DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#min_size}
  */
  readonly minSize?: number;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfigToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_size: cdktf.numberToTerraform(struct!.desiredSize),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfigToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_size: {
      value: cdktf.numberToHclTerraform(struct!.desiredSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredSize = this._desiredSize;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredSize = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredSize = value.desiredSize;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
    }
  }

  // desired_size - computed: false, optional: true, required: false
  private _desiredSize?: number; 
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }
  public set desiredSize(value: number) {
    this._desiredSize = value;
  }
  public resetDesiredSize() {
    this._desiredSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredSizeInput() {
    return this._desiredSize;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }
}
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#name DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#namespace DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFromToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFromToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#from DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFrom;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsFrom) {
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsOutputReference {
    return new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#effect DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#key DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#value DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaintsToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaintsToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaints | cdktf.IResolvable): any {
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaints | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
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
      this._effect = value.effect;
      this._key = value.key;
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaintsOutputReference {
    return new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#max_unavailable DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#max_unavailable_percentage DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#max_unavailable_percentage}
  */
  readonly maxUnavailablePercentage?: number;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfigToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    max_unavailable_percentage: cdktf.numberToTerraform(struct!.maxUnavailablePercentage),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfigToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailablePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._maxUnavailablePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailablePercentage = this._maxUnavailablePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._maxUnavailablePercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._maxUnavailablePercentage = value.maxUnavailablePercentage;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // max_unavailable_percentage - computed: false, optional: true, required: false
  private _maxUnavailablePercentage?: number; 
  public get maxUnavailablePercentage() {
    return this.getNumberAttribute('max_unavailable_percentage');
  }
  public set maxUnavailablePercentage(value: number) {
    this._maxUnavailablePercentage = value;
  }
  public resetMaxUnavailablePercentage() {
    this._maxUnavailablePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailablePercentageInput() {
    return this._maxUnavailablePercentage;
  }
}
export interface DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpec {
  /**
  * The AMI type for your node group. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify amiType, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add eks:kube-proxy-windows to your Windows nodes rolearn in the aws-auth ConfigMap. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates (https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#ami_type DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#ami_type}
  */
  readonly amiType?: string;
  /**
  * The capacity type for your node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#capacity_type DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#capacity_type}
  */
  readonly capacityType?: string;
  /**
  * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#client_request_token DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#client_request_token}
  */
  readonly clientRequestToken?: string;
  /**
  * The name of your cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#cluster_name DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#cluster_ref DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#cluster_ref}
  */
  readonly clusterRef?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRef;
  /**
  * The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify launchTemplate, then don't specify diskSize, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates (https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#disk_size DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Specify the instance types for a node group. If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the amiType parameter. If you specify launchTemplate, then you can specify zero or one instance type in your launch template or you can specify 0-20 instance types for instanceTypes. If however, you specify an instance type in your launch template and specify any instanceTypes, the node group deployment will fail. If you don't specify an instance type in a launch template or for instanceTypes, then t3.medium is used, by default. If you specify Spot for capacityType, then we recommend specifying multiple values for instanceTypes. For more information, see Managed node group capacity types (https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types) and Customizing managed nodes with launch templates (https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#instance_types DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * The Kubernetes labels to apply to the nodes in the node group when they are created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#labels DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * An object representing a node group's launch template specification. When using this object, don't directly specify instanceTypes, diskSize, or remoteAccess. Make sure that the launch template meets the requirements in launchTemplateSpecification. Also refer to Customizing managed nodes with launch templates (https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#launch_template DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#launch_template}
  */
  readonly launchTemplate?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplate;
  /**
  * The unique name to give your node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#name DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node kubelet daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see Amazon EKS node IAM role (https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in the Amazon EKS User Guide . If you specify launchTemplate, then don't specify IamInstanceProfile (https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html) in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates (https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#node_role DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#node_role}
  */
  readonly nodeRole?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#node_role_ref DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#node_role_ref}
  */
  readonly nodeRoleRef?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRef;
  /**
  * The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For information about Linux versions, see Amazon EKS optimized Amazon Linux AMI versions (https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html) in the Amazon EKS User Guide. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see Amazon EKS optimized Windows AMI versions (https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html) in the Amazon EKS User Guide. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify releaseVersion, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates (https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#release_version DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#release_version}
  */
  readonly releaseVersion?: string;
  /**
  * The remote access configuration to use with your node group. For Linux, the protocol is SSH. For Windows, the protocol is RDP. If you specify launchTemplate, then don't specify remoteAccess, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates (https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#remote_access DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#remote_access}
  */
  readonly remoteAccess?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccess;
  /**
  * The scaling configuration details for the Auto Scaling group that is created for your node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#scaling_config DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#scaling_config}
  */
  readonly scalingConfig?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#subnet_refs DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#subnet_refs}
  */
  readonly subnetRefs?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable;
  /**
  * The subnets to use for the Auto Scaling group that is created for your node group. If you specify launchTemplate, then don't specify SubnetId (https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html) in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates (https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#subnets DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
  /**
  * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#tags DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The Kubernetes taints to be applied to the nodes in the node group. For more information, see Node taints on managed node groups (https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#taints DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#taints}
  */
  readonly taints?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable;
  /**
  * The node group update configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#update_config DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#update_config}
  */
  readonly updateConfig?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfig;
  /**
  * The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify version, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates (https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the Amazon EKS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#version DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_type: cdktf.stringToTerraform(struct!.amiType),
    capacity_type: cdktf.stringToTerraform(struct!.capacityType),
    client_request_token: cdktf.stringToTerraform(struct!.clientRequestToken),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_ref: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefToTerraform(struct!.clusterRef),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypes),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    launch_template: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplateToTerraform(struct!.launchTemplate),
    name: cdktf.stringToTerraform(struct!.name),
    node_role: cdktf.stringToTerraform(struct!.nodeRole),
    node_role_ref: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefToTerraform(struct!.nodeRoleRef),
    release_version: cdktf.stringToTerraform(struct!.releaseVersion),
    remote_access: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessToTerraform(struct!.remoteAccess),
    scaling_config: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfigToTerraform(struct!.scalingConfig),
    subnet_refs: cdktf.listMapper(dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsToTerraform, false)(struct!.subnetRefs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    taints: cdktf.listMapper(dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaintsToTerraform, false)(struct!.taints),
    update_config: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfigToTerraform(struct!.updateConfig),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ami_type: {
      value: cdktf.stringToHclTerraform(struct!.amiType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_type: {
      value: cdktf.stringToHclTerraform(struct!.capacityType),
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
      value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefToHclTerraform(struct!.clusterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRef",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    launch_template: {
      value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplateToHclTerraform(struct!.launchTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplate",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_role: {
      value: cdktf.stringToHclTerraform(struct!.nodeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_role_ref: {
      value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefToHclTerraform(struct!.nodeRoleRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRef",
    },
    release_version: {
      value: cdktf.stringToHclTerraform(struct!.releaseVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_access: {
      value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessToHclTerraform(struct!.remoteAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccess",
    },
    scaling_config: {
      value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfigToHclTerraform(struct!.scalingConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfig",
    },
    subnet_refs: {
      value: cdktf.listMapperHcl(dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsToHclTerraform, false)(struct!.subnetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsList",
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
    taints: {
      value: cdktf.listMapperHcl(dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaintsList",
    },
    update_config: {
      value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfigToHclTerraform(struct!.updateConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfig",
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

export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiType !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiType = this._amiType;
    }
    if (this._capacityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityType = this._capacityType;
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
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._launchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRole = this._nodeRole;
    }
    if (this._nodeRoleRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoleRef = this._nodeRoleRef?.internalValue;
    }
    if (this._releaseVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseVersion = this._releaseVersion;
    }
    if (this._remoteAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAccess = this._remoteAccess?.internalValue;
    }
    if (this._scalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingConfig = this._scalingConfig?.internalValue;
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
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._updateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateConfig = this._updateConfig?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amiType = undefined;
      this._capacityType = undefined;
      this._clientRequestToken = undefined;
      this._clusterName = undefined;
      this._clusterRef.internalValue = undefined;
      this._diskSize = undefined;
      this._instanceTypes = undefined;
      this._labels = undefined;
      this._launchTemplate.internalValue = undefined;
      this._name = undefined;
      this._nodeRole = undefined;
      this._nodeRoleRef.internalValue = undefined;
      this._releaseVersion = undefined;
      this._remoteAccess.internalValue = undefined;
      this._scalingConfig.internalValue = undefined;
      this._subnetRefs.internalValue = undefined;
      this._subnets = undefined;
      this._tags = undefined;
      this._taints.internalValue = undefined;
      this._updateConfig.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amiType = value.amiType;
      this._capacityType = value.capacityType;
      this._clientRequestToken = value.clientRequestToken;
      this._clusterName = value.clusterName;
      this._clusterRef.internalValue = value.clusterRef;
      this._diskSize = value.diskSize;
      this._instanceTypes = value.instanceTypes;
      this._labels = value.labels;
      this._launchTemplate.internalValue = value.launchTemplate;
      this._name = value.name;
      this._nodeRole = value.nodeRole;
      this._nodeRoleRef.internalValue = value.nodeRoleRef;
      this._releaseVersion = value.releaseVersion;
      this._remoteAccess.internalValue = value.remoteAccess;
      this._scalingConfig.internalValue = value.scalingConfig;
      this._subnetRefs.internalValue = value.subnetRefs;
      this._subnets = value.subnets;
      this._tags = value.tags;
      this._taints.internalValue = value.taints;
      this._updateConfig.internalValue = value.updateConfig;
      this._version = value.version;
    }
  }

  // ami_type - computed: false, optional: true, required: false
  private _amiType?: string; 
  public get amiType() {
    return this.getStringAttribute('ami_type');
  }
  public set amiType(value: string) {
    this._amiType = value;
  }
  public resetAmiType() {
    this._amiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiTypeInput() {
    return this._amiType;
  }

  // capacity_type - computed: false, optional: true, required: false
  private _capacityType?: string; 
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }
  public set capacityType(value: string) {
    this._capacityType = value;
  }
  public resetCapacityType() {
    this._capacityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityTypeInput() {
    return this._capacityType;
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
  private _clusterRef = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRefOutputReference(this, "cluster_ref");
  public get clusterRef() {
    return this._clusterRef;
  }
  public putClusterRef(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecClusterRef) {
    this._clusterRef.internalValue = value;
  }
  public resetClusterRef() {
    this._clusterRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRefInput() {
    return this._clusterRef.internalValue;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
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

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecLaunchTemplate) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
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

  // node_role - computed: false, optional: true, required: false
  private _nodeRole?: string; 
  public get nodeRole() {
    return this.getStringAttribute('node_role');
  }
  public set nodeRole(value: string) {
    this._nodeRole = value;
  }
  public resetNodeRole() {
    this._nodeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRoleInput() {
    return this._nodeRole;
  }

  // node_role_ref - computed: false, optional: true, required: false
  private _nodeRoleRef = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRefOutputReference(this, "node_role_ref");
  public get nodeRoleRef() {
    return this._nodeRoleRef;
  }
  public putNodeRoleRef(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecNodeRoleRef) {
    this._nodeRoleRef.internalValue = value;
  }
  public resetNodeRoleRef() {
    this._nodeRoleRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRoleRefInput() {
    return this._nodeRoleRef.internalValue;
  }

  // release_version - computed: false, optional: true, required: false
  private _releaseVersion?: string; 
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }
  public set releaseVersion(value: string) {
    this._releaseVersion = value;
  }
  public resetReleaseVersion() {
    this._releaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseVersionInput() {
    return this._releaseVersion;
  }

  // remote_access - computed: false, optional: true, required: false
  private _remoteAccess = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccessOutputReference(this, "remote_access");
  public get remoteAccess() {
    return this._remoteAccess;
  }
  public putRemoteAccess(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecRemoteAccess) {
    this._remoteAccess.internalValue = value;
  }
  public resetRemoteAccess() {
    this._remoteAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAccessInput() {
    return this._remoteAccess.internalValue;
  }

  // scaling_config - computed: false, optional: true, required: false
  private _scalingConfig = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfigOutputReference(this, "scaling_config");
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecScalingConfig) {
    this._scalingConfig.internalValue = value;
  }
  public resetScalingConfig() {
    this._scalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // subnet_refs - computed: false, optional: true, required: false
  private _subnetRefs = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefsList(this, "subnet_refs", false);
  public get subnetRefs() {
    return this._subnetRefs;
  }
  public putSubnetRefs(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecSubnetRefs[] | cdktf.IResolvable) {
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

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // update_config - computed: false, optional: true, required: false
  private _updateConfig = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfigOutputReference(this, "update_config");
  public get updateConfig() {
    return this._updateConfig;
  }
  public putUpdateConfig(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecUpdateConfig) {
    this._updateConfig.internalValue = value;
  }
  public resetUpdateConfig() {
    this._updateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateConfigInput() {
    return this._updateConfig.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest k8s_eks_services_k8s_aws_nodegroup_v1alpha1_manifest}
*/
export class DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_eks_services_k8s_aws_nodegroup_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEksServicesK8SAwsNodegroupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_eks_services_k8s_aws_nodegroup_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/eks_services_k8s_aws_nodegroup_v1alpha1_manifest k8s_eks_services_k8s_aws_nodegroup_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_eks_services_k8s_aws_nodegroup_v1alpha1_manifest',
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
  private _metadata = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEksServicesK8SAwsNodegroupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
