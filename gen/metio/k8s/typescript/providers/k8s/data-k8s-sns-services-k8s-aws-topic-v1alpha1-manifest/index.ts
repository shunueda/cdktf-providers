// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#metadata DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadata;
  /**
  * TopicSpec defines the desired state of Topic. A wrapper type for the topic's Amazon Resource Name (ARN). To retrieve a topic's attributes, use GetTopicAttributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#spec DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpec;
}
export interface DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#annotations DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#labels DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFromToTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFromToHclTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#from DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFrom;
}

export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefToTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefToHclTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefFrom) {
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
export interface DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFromToTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFromToHclTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#from DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFrom;
}

export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefToTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefToHclTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefFrom) {
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
export interface DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#key DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#value DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#content_based_deduplication DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#content_based_deduplication}
  */
  readonly contentBasedDeduplication?: string;
  /**
  * The body of the policy document you want to use for this topic. You can only add one policy per topic. The policy must be in JSON string format. Length Constraints: Maximum length of 30,720.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#data_protection_policy DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#data_protection_policy}
  */
  readonly dataProtectionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#delivery_policy DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#delivery_policy}
  */
  readonly deliveryPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#display_name DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#fifo_topic DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#fifo_topic}
  */
  readonly fifoTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#kms_master_key_id DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#kms_master_key_ref DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#kms_master_key_ref}
  */
  readonly kmsMasterKeyRef?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRef;
  /**
  * The name of the topic you want to create. Constraints: Topic names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. For a FIFO (first-in-first-out) topic, the name must end with the .fifo suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#policy DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#policy_ref DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#policy_ref}
  */
  readonly policyRef?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#signature_version DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#signature_version}
  */
  readonly signatureVersion?: string;
  /**
  * The list of tags to add to a new topic. To be able to tag a topic on creation, you must have the sns:CreateTopic and sns:TagResource permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#tags DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#tracing_config DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest#tracing_config}
  */
  readonly tracingConfig?: string;
}

export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_based_deduplication: cdktf.stringToTerraform(struct!.contentBasedDeduplication),
    data_protection_policy: cdktf.stringToTerraform(struct!.dataProtectionPolicy),
    delivery_policy: cdktf.stringToTerraform(struct!.deliveryPolicy),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    fifo_topic: cdktf.stringToTerraform(struct!.fifoTopic),
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
    kms_master_key_ref: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefToTerraform(struct!.kmsMasterKeyRef),
    name: cdktf.stringToTerraform(struct!.name),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_ref: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefToTerraform(struct!.policyRef),
    signature_version: cdktf.stringToTerraform(struct!.signatureVersion),
    tags: cdktf.listMapper(dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    tracing_config: cdktf.stringToTerraform(struct!.tracingConfig),
  }
}


export function dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_based_deduplication: {
      value: cdktf.stringToHclTerraform(struct!.contentBasedDeduplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_protection_policy: {
      value: cdktf.stringToHclTerraform(struct!.dataProtectionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delivery_policy: {
      value: cdktf.stringToHclTerraform(struct!.deliveryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fifo_topic: {
      value: cdktf.stringToHclTerraform(struct!.fifoTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_master_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsMasterKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_master_key_ref: {
      value: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefToHclTerraform(struct!.kmsMasterKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRef",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_ref: {
      value: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefToHclTerraform(struct!.policyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRef",
    },
    signature_version: {
      value: cdktf.stringToHclTerraform(struct!.signatureVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTagsList",
    },
    tracing_config: {
      value: cdktf.stringToHclTerraform(struct!.tracingConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentBasedDeduplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentBasedDeduplication = this._contentBasedDeduplication;
    }
    if (this._dataProtectionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProtectionPolicy = this._dataProtectionPolicy;
    }
    if (this._deliveryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryPolicy = this._deliveryPolicy;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fifoTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.fifoTopic = this._fifoTopic;
    }
    if (this._kmsMasterKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
    }
    if (this._kmsMasterKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyRef = this._kmsMasterKeyRef?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._policyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRef = this._policyRef?.internalValue;
    }
    if (this._signatureVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureVersion = this._signatureVersion;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._tracingConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingConfig = this._tracingConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentBasedDeduplication = undefined;
      this._dataProtectionPolicy = undefined;
      this._deliveryPolicy = undefined;
      this._displayName = undefined;
      this._fifoTopic = undefined;
      this._kmsMasterKeyId = undefined;
      this._kmsMasterKeyRef.internalValue = undefined;
      this._name = undefined;
      this._policy = undefined;
      this._policyRef.internalValue = undefined;
      this._signatureVersion = undefined;
      this._tags.internalValue = undefined;
      this._tracingConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentBasedDeduplication = value.contentBasedDeduplication;
      this._dataProtectionPolicy = value.dataProtectionPolicy;
      this._deliveryPolicy = value.deliveryPolicy;
      this._displayName = value.displayName;
      this._fifoTopic = value.fifoTopic;
      this._kmsMasterKeyId = value.kmsMasterKeyId;
      this._kmsMasterKeyRef.internalValue = value.kmsMasterKeyRef;
      this._name = value.name;
      this._policy = value.policy;
      this._policyRef.internalValue = value.policyRef;
      this._signatureVersion = value.signatureVersion;
      this._tags.internalValue = value.tags;
      this._tracingConfig = value.tracingConfig;
    }
  }

  // content_based_deduplication - computed: false, optional: true, required: false
  private _contentBasedDeduplication?: string; 
  public get contentBasedDeduplication() {
    return this.getStringAttribute('content_based_deduplication');
  }
  public set contentBasedDeduplication(value: string) {
    this._contentBasedDeduplication = value;
  }
  public resetContentBasedDeduplication() {
    this._contentBasedDeduplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBasedDeduplicationInput() {
    return this._contentBasedDeduplication;
  }

  // data_protection_policy - computed: false, optional: true, required: false
  private _dataProtectionPolicy?: string; 
  public get dataProtectionPolicy() {
    return this.getStringAttribute('data_protection_policy');
  }
  public set dataProtectionPolicy(value: string) {
    this._dataProtectionPolicy = value;
  }
  public resetDataProtectionPolicy() {
    this._dataProtectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionPolicyInput() {
    return this._dataProtectionPolicy;
  }

  // delivery_policy - computed: false, optional: true, required: false
  private _deliveryPolicy?: string; 
  public get deliveryPolicy() {
    return this.getStringAttribute('delivery_policy');
  }
  public set deliveryPolicy(value: string) {
    this._deliveryPolicy = value;
  }
  public resetDeliveryPolicy() {
    this._deliveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPolicyInput() {
    return this._deliveryPolicy;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fifo_topic - computed: false, optional: true, required: false
  private _fifoTopic?: string; 
  public get fifoTopic() {
    return this.getStringAttribute('fifo_topic');
  }
  public set fifoTopic(value: string) {
    this._fifoTopic = value;
  }
  public resetFifoTopic() {
    this._fifoTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoTopicInput() {
    return this._fifoTopic;
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string; 
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId;
  }

  // kms_master_key_ref - computed: false, optional: true, required: false
  private _kmsMasterKeyRef = new DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRefOutputReference(this, "kms_master_key_ref");
  public get kmsMasterKeyRef() {
    return this._kmsMasterKeyRef;
  }
  public putKmsMasterKeyRef(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecKmsMasterKeyRef) {
    this._kmsMasterKeyRef.internalValue = value;
  }
  public resetKmsMasterKeyRef() {
    this._kmsMasterKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyRefInput() {
    return this._kmsMasterKeyRef.internalValue;
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

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // policy_ref - computed: false, optional: true, required: false
  private _policyRef = new DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRefOutputReference(this, "policy_ref");
  public get policyRef() {
    return this._policyRef;
  }
  public putPolicyRef(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecPolicyRef) {
    this._policyRef.internalValue = value;
  }
  public resetPolicyRef() {
    this._policyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRefInput() {
    return this._policyRef.internalValue;
  }

  // signature_version - computed: false, optional: true, required: false
  private _signatureVersion?: string; 
  public get signatureVersion() {
    return this.getStringAttribute('signature_version');
  }
  public set signatureVersion(value: string) {
    this._signatureVersion = value;
  }
  public resetSignatureVersion() {
    this._signatureVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureVersionInput() {
    return this._signatureVersion;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tracing_config - computed: false, optional: true, required: false
  private _tracingConfig?: string; 
  public get tracingConfig() {
    return this.getStringAttribute('tracing_config');
  }
  public set tracingConfig(value: string) {
    this._tracingConfig = value;
  }
  public resetTracingConfig() {
    this._tracingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigInput() {
    return this._tracingConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest k8s_sns_services_k8s_aws_topic_v1alpha1_manifest}
*/
export class DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sns_services_k8s_aws_topic_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSnsServicesK8SAwsTopicV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sns_services_k8s_aws_topic_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sns_services_k8s_aws_topic_v1alpha1_manifest k8s_sns_services_k8s_aws_topic_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sns_services_k8s_aws_topic_v1alpha1_manifest',
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
  private _metadata = new DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnsServicesK8SAwsTopicV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
