// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#metadata DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadata;
  /**
  * QueueSpec defines the desired state of Queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#spec DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpec;
}
export interface DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#annotations DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#labels DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#name DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#namespace DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#name DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#namespace DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFromToTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFromToHclTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#from DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFrom;
}

export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefToTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefToHclTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefFrom) {
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
export interface DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#name DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#namespace DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFromToTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFromToHclTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#from DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFrom;
}

export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefToTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefToHclTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefFrom) {
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
export interface DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#content_based_deduplication DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#content_based_deduplication}
  */
  readonly contentBasedDeduplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#delay_seconds DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#delay_seconds}
  */
  readonly delaySeconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#fifo_queue DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#fifo_queue}
  */
  readonly fifoQueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#kms_data_key_reuse_period_seconds DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#kms_data_key_reuse_period_seconds}
  */
  readonly kmsDataKeyReusePeriodSeconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#kms_master_key_id DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#kms_master_key_ref DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#kms_master_key_ref}
  */
  readonly kmsMasterKeyRef?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#maximum_message_size DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#maximum_message_size}
  */
  readonly maximumMessageSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#message_retention_period DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#message_retention_period}
  */
  readonly messageRetentionPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#policy DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#policy_ref DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#policy_ref}
  */
  readonly policyRef?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#queue_name DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#receive_message_wait_time_seconds DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#receive_message_wait_time_seconds}
  */
  readonly receiveMessageWaitTimeSeconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#redrive_allow_policy DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#redrive_allow_policy}
  */
  readonly redriveAllowPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#redrive_policy DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#redrive_policy}
  */
  readonly redrivePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#sqs_managed_sse_enabled DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#sqs_managed_sse_enabled}
  */
  readonly sqsManagedSseEnabled?: string;
  /**
  * Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues (https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html) in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: * Adding more than 50 tags to a queue isn't recommended. * Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings. * Tags are case-sensitive. * A new tag with a key identical to that of an existing tag overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues (https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues) in the Amazon SQS Developer Guide. To be able to tag a queue on creation, you must have the sqs:CreateQueue and sqs:TagQueue permissions. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username (https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name) in the Amazon SQS Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#tags DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#visibility_timeout DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest#visibility_timeout}
  */
  readonly visibilityTimeout?: string;
}

export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_based_deduplication: cdktf.stringToTerraform(struct!.contentBasedDeduplication),
    delay_seconds: cdktf.stringToTerraform(struct!.delaySeconds),
    fifo_queue: cdktf.stringToTerraform(struct!.fifoQueue),
    kms_data_key_reuse_period_seconds: cdktf.stringToTerraform(struct!.kmsDataKeyReusePeriodSeconds),
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
    kms_master_key_ref: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefToTerraform(struct!.kmsMasterKeyRef),
    maximum_message_size: cdktf.stringToTerraform(struct!.maximumMessageSize),
    message_retention_period: cdktf.stringToTerraform(struct!.messageRetentionPeriod),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_ref: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefToTerraform(struct!.policyRef),
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    receive_message_wait_time_seconds: cdktf.stringToTerraform(struct!.receiveMessageWaitTimeSeconds),
    redrive_allow_policy: cdktf.stringToTerraform(struct!.redriveAllowPolicy),
    redrive_policy: cdktf.stringToTerraform(struct!.redrivePolicy),
    sqs_managed_sse_enabled: cdktf.stringToTerraform(struct!.sqsManagedSseEnabled),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    visibility_timeout: cdktf.stringToTerraform(struct!.visibilityTimeout),
  }
}


export function dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    delay_seconds: {
      value: cdktf.stringToHclTerraform(struct!.delaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fifo_queue: {
      value: cdktf.stringToHclTerraform(struct!.fifoQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_data_key_reuse_period_seconds: {
      value: cdktf.stringToHclTerraform(struct!.kmsDataKeyReusePeriodSeconds),
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
      value: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefToHclTerraform(struct!.kmsMasterKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRef",
    },
    maximum_message_size: {
      value: cdktf.stringToHclTerraform(struct!.maximumMessageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_retention_period: {
      value: cdktf.stringToHclTerraform(struct!.messageRetentionPeriod),
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
      value: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefToHclTerraform(struct!.policyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRef",
    },
    queue_name: {
      value: cdktf.stringToHclTerraform(struct!.queueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receive_message_wait_time_seconds: {
      value: cdktf.stringToHclTerraform(struct!.receiveMessageWaitTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redrive_allow_policy: {
      value: cdktf.stringToHclTerraform(struct!.redriveAllowPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redrive_policy: {
      value: cdktf.stringToHclTerraform(struct!.redrivePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs_managed_sse_enabled: {
      value: cdktf.stringToHclTerraform(struct!.sqsManagedSseEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    visibility_timeout: {
      value: cdktf.stringToHclTerraform(struct!.visibilityTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentBasedDeduplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentBasedDeduplication = this._contentBasedDeduplication;
    }
    if (this._delaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.delaySeconds = this._delaySeconds;
    }
    if (this._fifoQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fifoQueue = this._fifoQueue;
    }
    if (this._kmsDataKeyReusePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsDataKeyReusePeriodSeconds = this._kmsDataKeyReusePeriodSeconds;
    }
    if (this._kmsMasterKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
    }
    if (this._kmsMasterKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyRef = this._kmsMasterKeyRef?.internalValue;
    }
    if (this._maximumMessageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumMessageSize = this._maximumMessageSize;
    }
    if (this._messageRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageRetentionPeriod = this._messageRetentionPeriod;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._policyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRef = this._policyRef?.internalValue;
    }
    if (this._queueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueName = this._queueName;
    }
    if (this._receiveMessageWaitTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveMessageWaitTimeSeconds = this._receiveMessageWaitTimeSeconds;
    }
    if (this._redriveAllowPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.redriveAllowPolicy = this._redriveAllowPolicy;
    }
    if (this._redrivePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.redrivePolicy = this._redrivePolicy;
    }
    if (this._sqsManagedSseEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsManagedSseEnabled = this._sqsManagedSseEnabled;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._visibilityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityTimeout = this._visibilityTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentBasedDeduplication = undefined;
      this._delaySeconds = undefined;
      this._fifoQueue = undefined;
      this._kmsDataKeyReusePeriodSeconds = undefined;
      this._kmsMasterKeyId = undefined;
      this._kmsMasterKeyRef.internalValue = undefined;
      this._maximumMessageSize = undefined;
      this._messageRetentionPeriod = undefined;
      this._policy = undefined;
      this._policyRef.internalValue = undefined;
      this._queueName = undefined;
      this._receiveMessageWaitTimeSeconds = undefined;
      this._redriveAllowPolicy = undefined;
      this._redrivePolicy = undefined;
      this._sqsManagedSseEnabled = undefined;
      this._tags = undefined;
      this._visibilityTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentBasedDeduplication = value.contentBasedDeduplication;
      this._delaySeconds = value.delaySeconds;
      this._fifoQueue = value.fifoQueue;
      this._kmsDataKeyReusePeriodSeconds = value.kmsDataKeyReusePeriodSeconds;
      this._kmsMasterKeyId = value.kmsMasterKeyId;
      this._kmsMasterKeyRef.internalValue = value.kmsMasterKeyRef;
      this._maximumMessageSize = value.maximumMessageSize;
      this._messageRetentionPeriod = value.messageRetentionPeriod;
      this._policy = value.policy;
      this._policyRef.internalValue = value.policyRef;
      this._queueName = value.queueName;
      this._receiveMessageWaitTimeSeconds = value.receiveMessageWaitTimeSeconds;
      this._redriveAllowPolicy = value.redriveAllowPolicy;
      this._redrivePolicy = value.redrivePolicy;
      this._sqsManagedSseEnabled = value.sqsManagedSseEnabled;
      this._tags = value.tags;
      this._visibilityTimeout = value.visibilityTimeout;
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

  // delay_seconds - computed: false, optional: true, required: false
  private _delaySeconds?: string; 
  public get delaySeconds() {
    return this.getStringAttribute('delay_seconds');
  }
  public set delaySeconds(value: string) {
    this._delaySeconds = value;
  }
  public resetDelaySeconds() {
    this._delaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecondsInput() {
    return this._delaySeconds;
  }

  // fifo_queue - computed: false, optional: true, required: false
  private _fifoQueue?: string; 
  public get fifoQueue() {
    return this.getStringAttribute('fifo_queue');
  }
  public set fifoQueue(value: string) {
    this._fifoQueue = value;
  }
  public resetFifoQueue() {
    this._fifoQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoQueueInput() {
    return this._fifoQueue;
  }

  // kms_data_key_reuse_period_seconds - computed: false, optional: true, required: false
  private _kmsDataKeyReusePeriodSeconds?: string; 
  public get kmsDataKeyReusePeriodSeconds() {
    return this.getStringAttribute('kms_data_key_reuse_period_seconds');
  }
  public set kmsDataKeyReusePeriodSeconds(value: string) {
    this._kmsDataKeyReusePeriodSeconds = value;
  }
  public resetKmsDataKeyReusePeriodSeconds() {
    this._kmsDataKeyReusePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsDataKeyReusePeriodSecondsInput() {
    return this._kmsDataKeyReusePeriodSeconds;
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
  private _kmsMasterKeyRef = new DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRefOutputReference(this, "kms_master_key_ref");
  public get kmsMasterKeyRef() {
    return this._kmsMasterKeyRef;
  }
  public putKmsMasterKeyRef(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecKmsMasterKeyRef) {
    this._kmsMasterKeyRef.internalValue = value;
  }
  public resetKmsMasterKeyRef() {
    this._kmsMasterKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyRefInput() {
    return this._kmsMasterKeyRef.internalValue;
  }

  // maximum_message_size - computed: false, optional: true, required: false
  private _maximumMessageSize?: string; 
  public get maximumMessageSize() {
    return this.getStringAttribute('maximum_message_size');
  }
  public set maximumMessageSize(value: string) {
    this._maximumMessageSize = value;
  }
  public resetMaximumMessageSize() {
    this._maximumMessageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMessageSizeInput() {
    return this._maximumMessageSize;
  }

  // message_retention_period - computed: false, optional: true, required: false
  private _messageRetentionPeriod?: string; 
  public get messageRetentionPeriod() {
    return this.getStringAttribute('message_retention_period');
  }
  public set messageRetentionPeriod(value: string) {
    this._messageRetentionPeriod = value;
  }
  public resetMessageRetentionPeriod() {
    this._messageRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionPeriodInput() {
    return this._messageRetentionPeriod;
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
  private _policyRef = new DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRefOutputReference(this, "policy_ref");
  public get policyRef() {
    return this._policyRef;
  }
  public putPolicyRef(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecPolicyRef) {
    this._policyRef.internalValue = value;
  }
  public resetPolicyRef() {
    this._policyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRefInput() {
    return this._policyRef.internalValue;
  }

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // receive_message_wait_time_seconds - computed: false, optional: true, required: false
  private _receiveMessageWaitTimeSeconds?: string; 
  public get receiveMessageWaitTimeSeconds() {
    return this.getStringAttribute('receive_message_wait_time_seconds');
  }
  public set receiveMessageWaitTimeSeconds(value: string) {
    this._receiveMessageWaitTimeSeconds = value;
  }
  public resetReceiveMessageWaitTimeSeconds() {
    this._receiveMessageWaitTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveMessageWaitTimeSecondsInput() {
    return this._receiveMessageWaitTimeSeconds;
  }

  // redrive_allow_policy - computed: false, optional: true, required: false
  private _redriveAllowPolicy?: string; 
  public get redriveAllowPolicy() {
    return this.getStringAttribute('redrive_allow_policy');
  }
  public set redriveAllowPolicy(value: string) {
    this._redriveAllowPolicy = value;
  }
  public resetRedriveAllowPolicy() {
    this._redriveAllowPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redriveAllowPolicyInput() {
    return this._redriveAllowPolicy;
  }

  // redrive_policy - computed: false, optional: true, required: false
  private _redrivePolicy?: string; 
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }
  public set redrivePolicy(value: string) {
    this._redrivePolicy = value;
  }
  public resetRedrivePolicy() {
    this._redrivePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redrivePolicyInput() {
    return this._redrivePolicy;
  }

  // sqs_managed_sse_enabled - computed: false, optional: true, required: false
  private _sqsManagedSseEnabled?: string; 
  public get sqsManagedSseEnabled() {
    return this.getStringAttribute('sqs_managed_sse_enabled');
  }
  public set sqsManagedSseEnabled(value: string) {
    this._sqsManagedSseEnabled = value;
  }
  public resetSqsManagedSseEnabled() {
    this._sqsManagedSseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsManagedSseEnabledInput() {
    return this._sqsManagedSseEnabled;
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

  // visibility_timeout - computed: false, optional: true, required: false
  private _visibilityTimeout?: string; 
  public get visibilityTimeout() {
    return this.getStringAttribute('visibility_timeout');
  }
  public set visibilityTimeout(value: string) {
    this._visibilityTimeout = value;
  }
  public resetVisibilityTimeout() {
    this._visibilityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutInput() {
    return this._visibilityTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest k8s_sqs_services_k8s_aws_queue_v1alpha1_manifest}
*/
export class DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sqs_services_k8s_aws_queue_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSqsServicesK8SAwsQueueV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sqs_services_k8s_aws_queue_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sqs_services_k8s_aws_queue_v1alpha1_manifest k8s_sqs_services_k8s_aws_queue_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sqs_services_k8s_aws_queue_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSqsServicesK8SAwsQueueV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
