// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#metadata DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadata;
  /**
  * ClusterSpec defines the desired state of Cluster. Returns information about a cluster of either the provisioned or the serverless type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#spec DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpec;
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#annotations DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#labels DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#namespace DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFromToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFromToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#from DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFrom;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsFrom) {
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

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsOutputReference {
    return new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#type DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccessToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccessToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfo {
  /**
  * Broker public access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#public_access DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#public_access}
  */
  readonly publicAccess?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccess;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_access: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_access: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enabled DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#volume_throughput DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#volume_throughput}
  */
  readonly volumeThroughput?: number;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    volume_throughput: cdktf.numberToTerraform(struct!.volumeThroughput),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_throughput: {
      value: cdktf.numberToHclTerraform(struct!.volumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._volumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeThroughput = this._volumeThroughput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._volumeThroughput = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._volumeThroughput = value.volumeThroughput;
    }
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

  // volume_throughput - computed: false, optional: true, required: false
  private _volumeThroughput?: number; 
  public get volumeThroughput() {
    return this.getNumberAttribute('volume_throughput');
  }
  public set volumeThroughput(value: number) {
    this._volumeThroughput = value;
  }
  public resetVolumeThroughput() {
    this._volumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeThroughputInput() {
    return this._volumeThroughput;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
  /**
  * Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#provisioned_throughput DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#provisioned_throughput}
  */
  readonly provisionedThroughput?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#volume_size DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#volume_size}
  */
  readonly volumeSize?: number;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provisioned_throughput: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToTerraform(struct!.provisionedThroughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provisioned_throughput: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputToHclTerraform(struct!.provisionedThroughput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provisionedThroughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput?.internalValue;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provisionedThroughput.internalValue = undefined;
      this._volumeSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provisionedThroughput.internalValue = value.provisionedThroughput;
      this._volumeSize = value.volumeSize;
    }
  }

  // provisioned_throughput - computed: false, optional: true, required: false
  private _provisionedThroughput = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference(this, "provisioned_throughput");
  public get provisionedThroughput() {
    return this._provisionedThroughput;
  }
  public putProvisionedThroughput(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput) {
    this._provisionedThroughput.internalValue = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput.internalValue;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfo {
  /**
  * Contains information about the EBS storage volumes attached to Apache Kafka broker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#ebs_storage_info DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#ebs_storage_info}
  */
  readonly ebsStorageInfo?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfo;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebs_storage_info: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoToTerraform(struct!.ebsStorageInfo),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebs_storage_info: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoToHclTerraform(struct!.ebsStorageInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsStorageInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsStorageInfo = this._ebsStorageInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebsStorageInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebsStorageInfo.internalValue = value.ebsStorageInfo;
    }
  }

  // ebs_storage_info - computed: false, optional: true, required: false
  private _ebsStorageInfo = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference(this, "ebs_storage_info");
  public get ebsStorageInfo() {
    return this._ebsStorageInfo;
  }
  public putEbsStorageInfo(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoEbsStorageInfo) {
    this._ebsStorageInfo.internalValue = value;
  }
  public resetEbsStorageInfo() {
    this._ebsStorageInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsStorageInfoInput() {
    return this._ebsStorageInfo.internalValue;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfo {
  /**
  * The distribution of broker nodes across Availability Zones. By default, broker nodes are distributed among the Availability Zones of your Region. Currently, the only supported value is DEFAULT. You can either specify this value explicitly or leave it out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#broker_az_distribution DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#broker_az_distribution}
  */
  readonly brokerAzDistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#client_subnets DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#client_subnets}
  */
  readonly clientSubnets?: string[];
  /**
  * Information about the broker access configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#connectivity_info DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#connectivity_info}
  */
  readonly connectivityInfo?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#instance_type DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#security_groups DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Contains information about storage volumes attached to MSK broker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#storage_info DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#storage_info}
  */
  readonly storageInfo?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfo;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_az_distribution: cdktf.stringToTerraform(struct!.brokerAzDistribution),
    client_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientSubnets),
    connectivity_info: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoToTerraform(struct!.connectivityInfo),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    storage_info: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoToTerraform(struct!.storageInfo),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_az_distribution: {
      value: cdktf.stringToHclTerraform(struct!.brokerAzDistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connectivity_info: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoToHclTerraform(struct!.connectivityInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfo",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    storage_info: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoToHclTerraform(struct!.storageInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerAzDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerAzDistribution = this._brokerAzDistribution;
    }
    if (this._clientSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnets = this._clientSubnets;
    }
    if (this._connectivityInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityInfo = this._connectivityInfo?.internalValue;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._storageInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageInfo = this._storageInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokerAzDistribution = undefined;
      this._clientSubnets = undefined;
      this._connectivityInfo.internalValue = undefined;
      this._instanceType = undefined;
      this._securityGroups = undefined;
      this._storageInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokerAzDistribution = value.brokerAzDistribution;
      this._clientSubnets = value.clientSubnets;
      this._connectivityInfo.internalValue = value.connectivityInfo;
      this._instanceType = value.instanceType;
      this._securityGroups = value.securityGroups;
      this._storageInfo.internalValue = value.storageInfo;
    }
  }

  // broker_az_distribution - computed: false, optional: true, required: false
  private _brokerAzDistribution?: string; 
  public get brokerAzDistribution() {
    return this.getStringAttribute('broker_az_distribution');
  }
  public set brokerAzDistribution(value: string) {
    this._brokerAzDistribution = value;
  }
  public resetBrokerAzDistribution() {
    this._brokerAzDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerAzDistributionInput() {
    return this._brokerAzDistribution;
  }

  // client_subnets - computed: false, optional: true, required: false
  private _clientSubnets?: string[]; 
  public get clientSubnets() {
    return this.getListAttribute('client_subnets');
  }
  public set clientSubnets(value: string[]) {
    this._clientSubnets = value;
  }
  public resetClientSubnets() {
    this._clientSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetsInput() {
    return this._clientSubnets;
  }

  // connectivity_info - computed: false, optional: true, required: false
  private _connectivityInfo = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfoOutputReference(this, "connectivity_info");
  public get connectivityInfo() {
    return this._connectivityInfo;
  }
  public putConnectivityInfo(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoConnectivityInfo) {
    this._connectivityInfo.internalValue = value;
  }
  public resetConnectivityInfo() {
    this._connectivityInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInfoInput() {
    return this._connectivityInfo.internalValue;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // storage_info - computed: false, optional: true, required: false
  private _storageInfo = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfoOutputReference(this, "storage_info");
  public get storageInfo() {
    return this._storageInfo;
  }
  public putStorageInfo(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoStorageInfo) {
    this._storageInfo.internalValue = value;
  }
  public resetStorageInfo() {
    this._storageInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInfoInput() {
    return this._storageInfo.internalValue;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enabled DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIamToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIamToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScram {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enabled DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScramToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScramToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScram | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScramOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScram | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScram | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSasl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#iam DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#iam}
  */
  readonly iam?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIam;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#scram DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#scram}
  */
  readonly scram?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScram;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIamToTerraform(struct!.iam),
    scram: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScramToTerraform(struct!.scram),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIamToHclTerraform(struct!.iam),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIam",
    },
    scram: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScramToHclTerraform(struct!.scram),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScram",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSasl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam?.internalValue;
    }
    if (this._scram?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scram = this._scram?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSasl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iam.internalValue = undefined;
      this._scram.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iam.internalValue = value.iam;
      this._scram.internalValue = value.scram;
    }
  }

  // iam - computed: false, optional: true, required: false
  private _iam = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }
  public putIam(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslIam) {
    this._iam.internalValue = value;
  }
  public resetIam() {
    this._iam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam.internalValue;
  }

  // scram - computed: false, optional: true, required: false
  private _scram = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScramOutputReference(this, "scram");
  public get scram() {
    return this._scram;
  }
  public putScram(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslScram) {
    this._scram.internalValue = value;
  }
  public resetScram() {
    this._scram.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scramInput() {
    return this._scram.internalValue;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#certificate_authority_arn_list DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#certificate_authority_arn_list}
  */
  readonly certificateAuthorityArnList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enabled DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTlsToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_arn_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateAuthorityArnList),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTlsToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority_arn_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateAuthorityArnList),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArnList !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArnList = this._certificateAuthorityArnList;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateAuthorityArnList = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateAuthorityArnList = value.certificateAuthorityArnList;
      this._enabled = value.enabled;
    }
  }

  // certificate_authority_arn_list - computed: false, optional: true, required: false
  private _certificateAuthorityArnList?: string[]; 
  public get certificateAuthorityArnList() {
    return this.getListAttribute('certificate_authority_arn_list');
  }
  public set certificateAuthorityArnList(value: string[]) {
    this._certificateAuthorityArnList = value;
  }
  public resetCertificateAuthorityArnList() {
    this._certificateAuthorityArnList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnListInput() {
    return this._certificateAuthorityArnList;
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
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enabled DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticatedToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticatedToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#sasl DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#sasl}
  */
  readonly sasl?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSasl;
  /**
  * Details for client authentication using TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#tls DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTls;
  /**
  * Contains information about unauthenticated traffic to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#unauthenticated DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#unauthenticated}
  */
  readonly unauthenticated?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticated;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sasl: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslToTerraform(struct!.sasl),
    tls: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTlsToTerraform(struct!.tls),
    unauthenticated: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticatedToTerraform(struct!.unauthenticated),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sasl: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSasl",
    },
    tls: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTls",
    },
    unauthenticated: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticatedToHclTerraform(struct!.unauthenticated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticated",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._unauthenticated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthenticated = this._unauthenticated?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._unauthenticated.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
      this._unauthenticated.internalValue = value.unauthenticated;
    }
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // unauthenticated - computed: false, optional: true, required: false
  private _unauthenticated = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticatedOutputReference(this, "unauthenticated");
  public get unauthenticated() {
    return this._unauthenticated;
  }
  public putUnauthenticated(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationUnauthenticated) {
    this._unauthenticated.internalValue = value;
  }
  public resetUnauthenticated() {
    this._unauthenticated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedInput() {
    return this._unauthenticated.internalValue;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#arn DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#revision DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#revision}
  */
  readonly revision?: number;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfoToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfoToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._revision = value.revision;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#data_volume_kms_key_id DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#data_volume_kms_key_id}
  */
  readonly dataVolumeKmsKeyId?: string;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRestToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_volume_kms_key_id: cdktf.stringToTerraform(struct!.dataVolumeKmsKeyId),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRestToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_volume_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.dataVolumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataVolumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeKmsKeyId = this._dataVolumeKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataVolumeKmsKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataVolumeKmsKeyId = value.dataVolumeKmsKeyId;
    }
  }

  // data_volume_kms_key_id - computed: false, optional: true, required: false
  private _dataVolumeKmsKeyId?: string; 
  public get dataVolumeKmsKeyId() {
    return this.getStringAttribute('data_volume_kms_key_id');
  }
  public set dataVolumeKmsKeyId(value: string) {
    this._dataVolumeKmsKeyId = value;
  }
  public resetDataVolumeKmsKeyId() {
    this._dataVolumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeKmsKeyIdInput() {
    return this._dataVolumeKmsKeyId;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransit {
  /**
  * Client-broker encryption in transit setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#client_broker DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#client_broker}
  */
  readonly clientBroker?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#in_cluster DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#in_cluster}
  */
  readonly inCluster?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransitToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_broker: cdktf.stringToTerraform(struct!.clientBroker),
    in_cluster: cdktf.booleanToTerraform(struct!.inCluster),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransitToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_broker: {
      value: cdktf.stringToHclTerraform(struct!.clientBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.inCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientBroker = this._clientBroker;
    }
    if (this._inCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.inCluster = this._inCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientBroker = undefined;
      this._inCluster = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientBroker = value.clientBroker;
      this._inCluster = value.inCluster;
    }
  }

  // client_broker - computed: false, optional: true, required: false
  private _clientBroker?: string; 
  public get clientBroker() {
    return this.getStringAttribute('client_broker');
  }
  public set clientBroker(value: string) {
    this._clientBroker = value;
  }
  public resetClientBroker() {
    this._clientBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBrokerInput() {
    return this._clientBroker;
  }

  // in_cluster - computed: false, optional: true, required: false
  private _inCluster?: boolean | cdktf.IResolvable; 
  public get inCluster() {
    return this.getBooleanAttribute('in_cluster');
  }
  public set inCluster(value: boolean | cdktf.IResolvable) {
    this._inCluster = value;
  }
  public resetInCluster() {
    this._inCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inClusterInput() {
    return this._inCluster;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfo {
  /**
  * The data-volume encryption details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#encryption_at_rest DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#encryption_at_rest}
  */
  readonly encryptionAtRest?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRest;
  /**
  * The settings for encrypting data in transit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#encryption_in_transit DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#encryption_in_transit}
  */
  readonly encryptionInTransit?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransit;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_at_rest: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRestToTerraform(struct!.encryptionAtRest),
    encryption_in_transit: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransitToTerraform(struct!.encryptionInTransit),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_at_rest: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRestToHclTerraform(struct!.encryptionAtRest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRest",
    },
    encryption_in_transit: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransitToHclTerraform(struct!.encryptionInTransit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionAtRest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtRest = this._encryptionAtRest?.internalValue;
    }
    if (this._encryptionInTransit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionInTransit = this._encryptionInTransit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionAtRest.internalValue = undefined;
      this._encryptionInTransit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionAtRest.internalValue = value.encryptionAtRest;
      this._encryptionInTransit.internalValue = value.encryptionInTransit;
    }
  }

  // encryption_at_rest - computed: false, optional: true, required: false
  private _encryptionAtRest = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRestOutputReference(this, "encryption_at_rest");
  public get encryptionAtRest() {
    return this._encryptionAtRest;
  }
  public putEncryptionAtRest(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionAtRest) {
    this._encryptionAtRest.internalValue = value;
  }
  public resetEncryptionAtRest() {
    this._encryptionAtRest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestInput() {
    return this._encryptionAtRest.internalValue;
  }

  // encryption_in_transit - computed: false, optional: true, required: false
  private _encryptionInTransit = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransitOutputReference(this, "encryption_in_transit");
  public get encryptionInTransit() {
    return this._encryptionInTransit;
  }
  public putEncryptionInTransit(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoEncryptionInTransit) {
    this._encryptionInTransit.internalValue = value;
  }
  public resetEncryptionInTransit() {
    this._encryptionInTransit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitInput() {
    return this._encryptionInTransit.internalValue;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enabled DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#log_group DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#log_group}
  */
  readonly logGroup?: string;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogsToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group: cdktf.stringToTerraform(struct!.logGroup),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogsToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group: {
      value: cdktf.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._logGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._logGroup = value.logGroup;
    }
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

  // log_group - computed: false, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehose {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#delivery_stream DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#delivery_stream}
  */
  readonly deliveryStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enabled DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehoseToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_stream: cdktf.stringToTerraform(struct!.deliveryStream),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehoseToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delivery_stream: {
      value: cdktf.stringToHclTerraform(struct!.deliveryStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehoseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehose | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehose | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStream = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStream = value.deliveryStream;
      this._enabled = value.enabled;
    }
  }

  // delivery_stream - computed: false, optional: true, required: false
  private _deliveryStream?: string; 
  public get deliveryStream() {
    return this.getStringAttribute('delivery_stream');
  }
  public set deliveryStream(value: string) {
    this._deliveryStream = value;
  }
  public resetDeliveryStream() {
    this._deliveryStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamInput() {
    return this._deliveryStream;
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
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#bucket DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enabled DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#prefix DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3ToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3ToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._enabled = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._enabled = value.enabled;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogs {
  /**
  * Details of the CloudWatch Logs destination for broker logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#cloud_watch_logs DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#cloud_watch_logs}
  */
  readonly cloudWatchLogs?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogs;
  /**
  * Firehose details for BrokerLogs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#firehose DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#firehose}
  */
  readonly firehose?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehose;
  /**
  * The details of the Amazon S3 destination for broker logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#s3 DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#s3}
  */
  readonly s3?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_watch_logs: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogsToTerraform(struct!.cloudWatchLogs),
    firehose: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehoseToTerraform(struct!.firehose),
    s3: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3ToTerraform(struct!.s3),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_watch_logs: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogsToHclTerraform(struct!.cloudWatchLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogs",
    },
    firehose: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehoseToHclTerraform(struct!.firehose),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehose",
    },
    s3: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogs = this._cloudWatchLogs?.internalValue;
    }
    if (this._firehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehose = this._firehose?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudWatchLogs.internalValue = undefined;
      this._firehose.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudWatchLogs.internalValue = value.cloudWatchLogs;
      this._firehose.internalValue = value.firehose;
      this._s3.internalValue = value.s3;
    }
  }

  // cloud_watch_logs - computed: false, optional: true, required: false
  private _cloudWatchLogs = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogsOutputReference(this, "cloud_watch_logs");
  public get cloudWatchLogs() {
    return this._cloudWatchLogs;
  }
  public putCloudWatchLogs(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsCloudWatchLogs) {
    this._cloudWatchLogs.internalValue = value;
  }
  public resetCloudWatchLogs() {
    this._cloudWatchLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsInput() {
    return this._cloudWatchLogs.internalValue;
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehoseOutputReference(this, "firehose");
  public get firehose() {
    return this._firehose;
  }
  public putFirehose(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsFirehose) {
    this._firehose.internalValue = value;
  }
  public resetFirehose() {
    this._firehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfo {
  /**
  * The broker logs configuration for this MSK cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#broker_logs DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#broker_logs}
  */
  readonly brokerLogs?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogs;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_logs: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsToTerraform(struct!.brokerLogs),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_logs: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsToHclTerraform(struct!.brokerLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerLogs = this._brokerLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokerLogs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokerLogs.internalValue = value.brokerLogs;
    }
  }

  // broker_logs - computed: false, optional: true, required: false
  private _brokerLogs = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogsOutputReference(this, "broker_logs");
  public get brokerLogs() {
    return this._brokerLogs;
  }
  public putBrokerLogs(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoBrokerLogs) {
    this._brokerLogs.internalValue = value;
  }
  public resetBrokerLogs() {
    this._brokerLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerLogsInput() {
    return this._brokerLogs.internalValue;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enabled_in_broker DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enabled_in_broker}
  */
  readonly enabledInBroker?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporterToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_in_broker: cdktf.booleanToTerraform(struct!.enabledInBroker),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporterToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_in_broker: {
      value: cdktf.booleanToHclTerraform(struct!.enabledInBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledInBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledInBroker = this._enabledInBroker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledInBroker = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledInBroker = value.enabledInBroker;
    }
  }

  // enabled_in_broker - computed: false, optional: true, required: false
  private _enabledInBroker?: boolean | cdktf.IResolvable; 
  public get enabledInBroker() {
    return this.getBooleanAttribute('enabled_in_broker');
  }
  public set enabledInBroker(value: boolean | cdktf.IResolvable) {
    this._enabledInBroker = value;
  }
  public resetEnabledInBroker() {
    this._enabledInBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInBrokerInput() {
    return this._enabledInBroker;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enabled_in_broker DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enabled_in_broker}
  */
  readonly enabledInBroker?: boolean | cdktf.IResolvable;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporterToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_in_broker: cdktf.booleanToTerraform(struct!.enabledInBroker),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporterToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_in_broker: {
      value: cdktf.booleanToHclTerraform(struct!.enabledInBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledInBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledInBroker = this._enabledInBroker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledInBroker = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledInBroker = value.enabledInBroker;
    }
  }

  // enabled_in_broker - computed: false, optional: true, required: false
  private _enabledInBroker?: boolean | cdktf.IResolvable; 
  public get enabledInBroker() {
    return this.getBooleanAttribute('enabled_in_broker');
  }
  public set enabledInBroker(value: boolean | cdktf.IResolvable) {
    this._enabledInBroker = value;
  }
  public resetEnabledInBroker() {
    this._enabledInBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInBrokerInput() {
    return this._enabledInBroker;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheus {
  /**
  * Indicates whether you want to enable or disable the JMX Exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#jmx_exporter DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#jmx_exporter}
  */
  readonly jmxExporter?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporter;
  /**
  * Indicates whether you want to enable or disable the Node Exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#node_exporter DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#node_exporter}
  */
  readonly nodeExporter?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporter;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jmx_exporter: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporterToTerraform(struct!.jmxExporter),
    node_exporter: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporterToTerraform(struct!.nodeExporter),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jmx_exporter: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporterToHclTerraform(struct!.jmxExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporter",
    },
    node_exporter: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporterToHclTerraform(struct!.nodeExporter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jmxExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jmxExporter = this._jmxExporter?.internalValue;
    }
    if (this._nodeExporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeExporter = this._nodeExporter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jmxExporter.internalValue = undefined;
      this._nodeExporter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jmxExporter.internalValue = value.jmxExporter;
      this._nodeExporter.internalValue = value.nodeExporter;
    }
  }

  // jmx_exporter - computed: false, optional: true, required: false
  private _jmxExporter = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporterOutputReference(this, "jmx_exporter");
  public get jmxExporter() {
    return this._jmxExporter;
  }
  public putJmxExporter(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusJmxExporter) {
    this._jmxExporter.internalValue = value;
  }
  public resetJmxExporter() {
    this._jmxExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxExporterInput() {
    return this._jmxExporter.internalValue;
  }

  // node_exporter - computed: false, optional: true, required: false
  private _nodeExporter = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporterOutputReference(this, "node_exporter");
  public get nodeExporter() {
    return this._nodeExporter;
  }
  public putNodeExporter(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusNodeExporter) {
    this._nodeExporter.internalValue = value;
  }
  public resetNodeExporter() {
    this._nodeExporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeExporterInput() {
    return this._nodeExporter.internalValue;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoring {
  /**
  * Prometheus settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#prometheus DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#prometheus}
  */
  readonly prometheus?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheus;
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prometheus: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusToTerraform(struct!.prometheus),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prometheus: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prometheus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}
export interface DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#associated_scram_secret_refs DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#associated_scram_secret_refs}
  */
  readonly associatedScramSecretRefs?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#associated_scram_secrets DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#associated_scram_secrets}
  */
  readonly associatedScramSecrets?: string[];
  /**
  * Information about the brokers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#broker_node_group_info DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#broker_node_group_info}
  */
  readonly brokerNodeGroupInfo: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfo;
  /**
  * Includes all client authentication related information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#client_authentication DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#client_authentication}
  */
  readonly clientAuthentication?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthentication;
  /**
  * Represents the configuration that you want MSK to use for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#configuration_info DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#configuration_info}
  */
  readonly configurationInfo?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfo;
  /**
  * Includes all encryption-related information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#encryption_info DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#encryption_info}
  */
  readonly encryptionInfo?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfo;
  /**
  * Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#enhanced_monitoring DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#enhanced_monitoring}
  */
  readonly enhancedMonitoring?: string;
  /**
  * The version of Apache Kafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#kafka_version DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#kafka_version}
  */
  readonly kafkaVersion: string;
  /**
  * LoggingInfo details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#logging_info DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#logging_info}
  */
  readonly loggingInfo?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfo;
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#name DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The number of Apache Kafka broker nodes in the Amazon MSK cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#number_of_broker_nodes DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#number_of_broker_nodes}
  */
  readonly numberOfBrokerNodes: number;
  /**
  * The settings for open monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#open_monitoring DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#open_monitoring}
  */
  readonly openMonitoring?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoring;
  /**
  * This controls storage mode for supported storage tiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#storage_mode DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Create tags when creating the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#tags DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_scram_secret_refs: cdktf.listMapper(dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsToTerraform, false)(struct!.associatedScramSecretRefs),
    associated_scram_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.associatedScramSecrets),
    broker_node_group_info: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoToTerraform(struct!.brokerNodeGroupInfo),
    client_authentication: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationToTerraform(struct!.clientAuthentication),
    configuration_info: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfoToTerraform(struct!.configurationInfo),
    encryption_info: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoToTerraform(struct!.encryptionInfo),
    enhanced_monitoring: cdktf.stringToTerraform(struct!.enhancedMonitoring),
    kafka_version: cdktf.stringToTerraform(struct!.kafkaVersion),
    logging_info: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoToTerraform(struct!.loggingInfo),
    name: cdktf.stringToTerraform(struct!.name),
    number_of_broker_nodes: cdktf.numberToTerraform(struct!.numberOfBrokerNodes),
    open_monitoring: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringToTerraform(struct!.openMonitoring),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associated_scram_secret_refs: {
      value: cdktf.listMapperHcl(dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsToHclTerraform, false)(struct!.associatedScramSecretRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsList",
    },
    associated_scram_secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.associatedScramSecrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    broker_node_group_info: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoToHclTerraform(struct!.brokerNodeGroupInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfo",
    },
    client_authentication: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationToHclTerraform(struct!.clientAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthentication",
    },
    configuration_info: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfoToHclTerraform(struct!.configurationInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfo",
    },
    encryption_info: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoToHclTerraform(struct!.encryptionInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfo",
    },
    enhanced_monitoring: {
      value: cdktf.stringToHclTerraform(struct!.enhancedMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kafka_version: {
      value: cdktf.stringToHclTerraform(struct!.kafkaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_info: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoToHclTerraform(struct!.loggingInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfo",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_broker_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfBrokerNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_monitoring: {
      value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringToHclTerraform(struct!.openMonitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoring",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedScramSecretRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedScramSecretRefs = this._associatedScramSecretRefs?.internalValue;
    }
    if (this._associatedScramSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedScramSecrets = this._associatedScramSecrets;
    }
    if (this._brokerNodeGroupInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerNodeGroupInfo = this._brokerNodeGroupInfo?.internalValue;
    }
    if (this._clientAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthentication = this._clientAuthentication?.internalValue;
    }
    if (this._configurationInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationInfo = this._configurationInfo?.internalValue;
    }
    if (this._encryptionInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionInfo = this._encryptionInfo?.internalValue;
    }
    if (this._enhancedMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedMonitoring = this._enhancedMonitoring;
    }
    if (this._kafkaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaVersion = this._kafkaVersion;
    }
    if (this._loggingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingInfo = this._loggingInfo?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numberOfBrokerNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfBrokerNodes = this._numberOfBrokerNodes;
    }
    if (this._openMonitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openMonitoring = this._openMonitoring?.internalValue;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associatedScramSecretRefs.internalValue = undefined;
      this._associatedScramSecrets = undefined;
      this._brokerNodeGroupInfo.internalValue = undefined;
      this._clientAuthentication.internalValue = undefined;
      this._configurationInfo.internalValue = undefined;
      this._encryptionInfo.internalValue = undefined;
      this._enhancedMonitoring = undefined;
      this._kafkaVersion = undefined;
      this._loggingInfo.internalValue = undefined;
      this._name = undefined;
      this._numberOfBrokerNodes = undefined;
      this._openMonitoring.internalValue = undefined;
      this._storageMode = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associatedScramSecretRefs.internalValue = value.associatedScramSecretRefs;
      this._associatedScramSecrets = value.associatedScramSecrets;
      this._brokerNodeGroupInfo.internalValue = value.brokerNodeGroupInfo;
      this._clientAuthentication.internalValue = value.clientAuthentication;
      this._configurationInfo.internalValue = value.configurationInfo;
      this._encryptionInfo.internalValue = value.encryptionInfo;
      this._enhancedMonitoring = value.enhancedMonitoring;
      this._kafkaVersion = value.kafkaVersion;
      this._loggingInfo.internalValue = value.loggingInfo;
      this._name = value.name;
      this._numberOfBrokerNodes = value.numberOfBrokerNodes;
      this._openMonitoring.internalValue = value.openMonitoring;
      this._storageMode = value.storageMode;
      this._tags = value.tags;
    }
  }

  // associated_scram_secret_refs - computed: false, optional: true, required: false
  private _associatedScramSecretRefs = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefsList(this, "associated_scram_secret_refs", false);
  public get associatedScramSecretRefs() {
    return this._associatedScramSecretRefs;
  }
  public putAssociatedScramSecretRefs(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecAssociatedScramSecretRefs[] | cdktf.IResolvable) {
    this._associatedScramSecretRefs.internalValue = value;
  }
  public resetAssociatedScramSecretRefs() {
    this._associatedScramSecretRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedScramSecretRefsInput() {
    return this._associatedScramSecretRefs.internalValue;
  }

  // associated_scram_secrets - computed: false, optional: true, required: false
  private _associatedScramSecrets?: string[]; 
  public get associatedScramSecrets() {
    return this.getListAttribute('associated_scram_secrets');
  }
  public set associatedScramSecrets(value: string[]) {
    this._associatedScramSecrets = value;
  }
  public resetAssociatedScramSecrets() {
    this._associatedScramSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedScramSecretsInput() {
    return this._associatedScramSecrets;
  }

  // broker_node_group_info - computed: false, optional: false, required: true
  private _brokerNodeGroupInfo = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfoOutputReference(this, "broker_node_group_info");
  public get brokerNodeGroupInfo() {
    return this._brokerNodeGroupInfo;
  }
  public putBrokerNodeGroupInfo(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecBrokerNodeGroupInfo) {
    this._brokerNodeGroupInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNodeGroupInfoInput() {
    return this._brokerNodeGroupInfo.internalValue;
  }

  // client_authentication - computed: false, optional: true, required: false
  private _clientAuthentication = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthenticationOutputReference(this, "client_authentication");
  public get clientAuthentication() {
    return this._clientAuthentication;
  }
  public putClientAuthentication(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecClientAuthentication) {
    this._clientAuthentication.internalValue = value;
  }
  public resetClientAuthentication() {
    this._clientAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationInput() {
    return this._clientAuthentication.internalValue;
  }

  // configuration_info - computed: false, optional: true, required: false
  private _configurationInfo = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfoOutputReference(this, "configuration_info");
  public get configurationInfo() {
    return this._configurationInfo;
  }
  public putConfigurationInfo(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecConfigurationInfo) {
    this._configurationInfo.internalValue = value;
  }
  public resetConfigurationInfo() {
    this._configurationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInfoInput() {
    return this._configurationInfo.internalValue;
  }

  // encryption_info - computed: false, optional: true, required: false
  private _encryptionInfo = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfoOutputReference(this, "encryption_info");
  public get encryptionInfo() {
    return this._encryptionInfo;
  }
  public putEncryptionInfo(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecEncryptionInfo) {
    this._encryptionInfo.internalValue = value;
  }
  public resetEncryptionInfo() {
    this._encryptionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInfoInput() {
    return this._encryptionInfo.internalValue;
  }

  // enhanced_monitoring - computed: false, optional: true, required: false
  private _enhancedMonitoring?: string; 
  public get enhancedMonitoring() {
    return this.getStringAttribute('enhanced_monitoring');
  }
  public set enhancedMonitoring(value: string) {
    this._enhancedMonitoring = value;
  }
  public resetEnhancedMonitoring() {
    this._enhancedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitoringInput() {
    return this._enhancedMonitoring;
  }

  // kafka_version - computed: false, optional: false, required: true
  private _kafkaVersion?: string; 
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion;
  }

  // logging_info - computed: false, optional: true, required: false
  private _loggingInfo = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfoOutputReference(this, "logging_info");
  public get loggingInfo() {
    return this._loggingInfo;
  }
  public putLoggingInfo(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecLoggingInfo) {
    this._loggingInfo.internalValue = value;
  }
  public resetLoggingInfo() {
    this._loggingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInfoInput() {
    return this._loggingInfo.internalValue;
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

  // number_of_broker_nodes - computed: false, optional: false, required: true
  private _numberOfBrokerNodes?: number; 
  public get numberOfBrokerNodes() {
    return this.getNumberAttribute('number_of_broker_nodes');
  }
  public set numberOfBrokerNodes(value: number) {
    this._numberOfBrokerNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfBrokerNodesInput() {
    return this._numberOfBrokerNodes;
  }

  // open_monitoring - computed: false, optional: true, required: false
  private _openMonitoring = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoringOutputReference(this, "open_monitoring");
  public get openMonitoring() {
    return this._openMonitoring;
  }
  public putOpenMonitoring(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOpenMonitoring) {
    this._openMonitoring.internalValue = value;
  }
  public resetOpenMonitoring() {
    this._openMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openMonitoringInput() {
    return this._openMonitoring.internalValue;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest k8s_kafka_services_k8s_aws_cluster_v1alpha1_manifest}
*/
export class DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kafka_services_k8s_aws_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKafkaServicesK8SAwsClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kafka_services_k8s_aws_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/kafka_services_k8s_aws_cluster_v1alpha1_manifest k8s_kafka_services_k8s_aws_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kafka_services_k8s_aws_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKafkaServicesK8SAwsClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
