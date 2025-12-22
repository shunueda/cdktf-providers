// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#metadata DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadata;
  /**
  * ReplicationGroupSpec defines the desired state of ReplicationGroup. Contains all of the attributes of a specific Redis replication group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#spec DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpec;
}
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#annotations DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#labels DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#name DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#namespace DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthToken {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#key DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#name DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#namespace DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthTokenToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthTokenToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthToken | cdktf.IResolvable): any {
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

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#name DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFromToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFromToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFrom | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#from DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFrom;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefFrom) {
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
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#name DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFromToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFromToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFrom | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#from DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFrom;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefFrom) {
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
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#log_group DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#log_group}
  */
  readonly logGroup?: string;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetailsToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group: cdktf.stringToTerraform(struct!.logGroup),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetailsToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroup = value.logGroup;
    }
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
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#delivery_stream DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#delivery_stream}
  */
  readonly deliveryStream?: string;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_stream: cdktf.stringToTerraform(struct!.deliveryStream),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStream = this._deliveryStream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryStream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryStream = value.deliveryStream;
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
}
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetails {
  /**
  * The configuration details of the CloudWatch Logs destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#cloud_watch_logs_details DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#cloud_watch_logs_details}
  */
  readonly cloudWatchLogsDetails?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetails;
  /**
  * The configuration details of the Kinesis Data Firehose destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#kinesis_firehose_details DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#kinesis_firehose_details}
  */
  readonly kinesisFirehoseDetails?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_watch_logs_details: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetailsToTerraform(struct!.cloudWatchLogsDetails),
    kinesis_firehose_details: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsToTerraform(struct!.kinesisFirehoseDetails),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_watch_logs_details: {
      value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetailsToHclTerraform(struct!.cloudWatchLogsDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetails",
    },
    kinesis_firehose_details: {
      value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsToHclTerraform(struct!.kinesisFirehoseDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchLogsDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogsDetails = this._cloudWatchLogsDetails?.internalValue;
    }
    if (this._kinesisFirehoseDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehoseDetails = this._kinesisFirehoseDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudWatchLogsDetails.internalValue = undefined;
      this._kinesisFirehoseDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudWatchLogsDetails.internalValue = value.cloudWatchLogsDetails;
      this._kinesisFirehoseDetails.internalValue = value.kinesisFirehoseDetails;
    }
  }

  // cloud_watch_logs_details - computed: false, optional: true, required: false
  private _cloudWatchLogsDetails = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetailsOutputReference(this, "cloud_watch_logs_details");
  public get cloudWatchLogsDetails() {
    return this._cloudWatchLogsDetails;
  }
  public putCloudWatchLogsDetails(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsCloudWatchLogsDetails) {
    this._cloudWatchLogsDetails.internalValue = value;
  }
  public resetCloudWatchLogsDetails() {
    this._cloudWatchLogsDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsDetailsInput() {
    return this._cloudWatchLogsDetails.internalValue;
  }

  // kinesis_firehose_details - computed: false, optional: true, required: false
  private _kinesisFirehoseDetails = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(this, "kinesis_firehose_details");
  public get kinesisFirehoseDetails() {
    return this._kinesisFirehoseDetails;
  }
  public putKinesisFirehoseDetails(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails) {
    this._kinesisFirehoseDetails.internalValue = value;
  }
  public resetKinesisFirehoseDetails() {
    this._kinesisFirehoseDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseDetailsInput() {
    return this._kinesisFirehoseDetails.internalValue;
  }
}
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurations {
  /**
  * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#destination_details DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#destination_details}
  */
  readonly destinationDetails?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetails;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#destination_type DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#enabled DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#log_format DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#log_type DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#log_type}
  */
  readonly logType?: string;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_details: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsToTerraform(struct!.destinationDetails),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_details: {
      value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsToHclTerraform(struct!.destinationDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetails",
    },
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
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
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDetails = this._destinationDetails?.internalValue;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationDetails.internalValue = undefined;
      this._destinationType = undefined;
      this._enabled = undefined;
      this._logFormat = undefined;
      this._logType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationDetails.internalValue = value.destinationDetails;
      this._destinationType = value.destinationType;
      this._enabled = value.enabled;
      this._logFormat = value.logFormat;
      this._logType = value.logType;
    }
  }

  // destination_details - computed: false, optional: true, required: false
  private _destinationDetails = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetailsOutputReference(this, "destination_details");
  public get destinationDetails() {
    return this._destinationDetails;
  }
  public putDestinationDetails(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsDestinationDetails) {
    this._destinationDetails.internalValue = value;
  }
  public resetDestinationDetails() {
    this._destinationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDetailsInput() {
    return this._destinationDetails.internalValue;
  }

  // destination_type - computed: false, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
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

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsOutputReference {
    return new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#node_group_id DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#node_group_id}
  */
  readonly nodeGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#primary_availability_zone DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#primary_availability_zone}
  */
  readonly primaryAvailabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#primary_outpost_arn DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#primary_outpost_arn}
  */
  readonly primaryOutpostArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#replica_availability_zones DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#replica_availability_zones}
  */
  readonly replicaAvailabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#replica_count DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#replica_outpost_ar_ns DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#replica_outpost_ar_ns}
  */
  readonly replicaOutpostArNs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#slots DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#slots}
  */
  readonly slots?: string;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfigurationToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_group_id: cdktf.stringToTerraform(struct!.nodeGroupId),
    primary_availability_zone: cdktf.stringToTerraform(struct!.primaryAvailabilityZone),
    primary_outpost_arn: cdktf.stringToTerraform(struct!.primaryOutpostArn),
    replica_availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replicaAvailabilityZones),
    replica_count: cdktf.numberToTerraform(struct!.replicaCount),
    replica_outpost_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replicaOutpostArNs),
    slots: cdktf.stringToTerraform(struct!.slots),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfigurationToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_group_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.primaryAvailabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_outpost_arn: {
      value: cdktf.stringToHclTerraform(struct!.primaryOutpostArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.replicaAvailabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replica_count: {
      value: cdktf.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_outpost_ar_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.replicaOutpostArNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    slots: {
      value: cdktf.stringToHclTerraform(struct!.slots),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupId = this._nodeGroupId;
    }
    if (this._primaryAvailabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryAvailabilityZone = this._primaryAvailabilityZone;
    }
    if (this._primaryOutpostArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryOutpostArn = this._primaryOutpostArn;
    }
    if (this._replicaAvailabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaAvailabilityZones = this._replicaAvailabilityZones;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._replicaOutpostArNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaOutpostArNs = this._replicaOutpostArNs;
    }
    if (this._slots !== undefined) {
      hasAnyValues = true;
      internalValueResult.slots = this._slots;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeGroupId = undefined;
      this._primaryAvailabilityZone = undefined;
      this._primaryOutpostArn = undefined;
      this._replicaAvailabilityZones = undefined;
      this._replicaCount = undefined;
      this._replicaOutpostArNs = undefined;
      this._slots = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeGroupId = value.nodeGroupId;
      this._primaryAvailabilityZone = value.primaryAvailabilityZone;
      this._primaryOutpostArn = value.primaryOutpostArn;
      this._replicaAvailabilityZones = value.replicaAvailabilityZones;
      this._replicaCount = value.replicaCount;
      this._replicaOutpostArNs = value.replicaOutpostArNs;
      this._slots = value.slots;
    }
  }

  // node_group_id - computed: false, optional: true, required: false
  private _nodeGroupId?: string; 
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }
  public set nodeGroupId(value: string) {
    this._nodeGroupId = value;
  }
  public resetNodeGroupId() {
    this._nodeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdInput() {
    return this._nodeGroupId;
  }

  // primary_availability_zone - computed: false, optional: true, required: false
  private _primaryAvailabilityZone?: string; 
  public get primaryAvailabilityZone() {
    return this.getStringAttribute('primary_availability_zone');
  }
  public set primaryAvailabilityZone(value: string) {
    this._primaryAvailabilityZone = value;
  }
  public resetPrimaryAvailabilityZone() {
    this._primaryAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryAvailabilityZoneInput() {
    return this._primaryAvailabilityZone;
  }

  // primary_outpost_arn - computed: false, optional: true, required: false
  private _primaryOutpostArn?: string; 
  public get primaryOutpostArn() {
    return this.getStringAttribute('primary_outpost_arn');
  }
  public set primaryOutpostArn(value: string) {
    this._primaryOutpostArn = value;
  }
  public resetPrimaryOutpostArn() {
    this._primaryOutpostArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryOutpostArnInput() {
    return this._primaryOutpostArn;
  }

  // replica_availability_zones - computed: false, optional: true, required: false
  private _replicaAvailabilityZones?: string[]; 
  public get replicaAvailabilityZones() {
    return this.getListAttribute('replica_availability_zones');
  }
  public set replicaAvailabilityZones(value: string[]) {
    this._replicaAvailabilityZones = value;
  }
  public resetReplicaAvailabilityZones() {
    this._replicaAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaAvailabilityZonesInput() {
    return this._replicaAvailabilityZones;
  }

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // replica_outpost_ar_ns - computed: false, optional: true, required: false
  private _replicaOutpostArNs?: string[]; 
  public get replicaOutpostArNs() {
    return this.getListAttribute('replica_outpost_ar_ns');
  }
  public set replicaOutpostArNs(value: string[]) {
    this._replicaOutpostArNs = value;
  }
  public resetReplicaOutpostArNs() {
    this._replicaOutpostArNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaOutpostArNsInput() {
    return this._replicaOutpostArNs;
  }

  // slots - computed: false, optional: true, required: false
  private _slots?: string; 
  public get slots() {
    return this.getStringAttribute('slots');
  }
  public set slots(value: string) {
    this._slots = value;
  }
  public resetSlots() {
    this._slots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotsInput() {
    return this._slots;
  }
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfigurationOutputReference {
    return new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#name DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#from DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFrom;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsFrom) {
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

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsOutputReference {
    return new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#key DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#value DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpec {
  /**
  * A flag that enables encryption at rest when set to true. You cannot modify the value of AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. Required: Only available when creating a replication group in an Amazon VPC using redis version 3.2.6, 4.x or later. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#at_rest_encryption_enabled DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#at_rest_encryption_enabled}
  */
  readonly atRestEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Reserved parameter. The password used to access a password protected server. AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For HIPAA compliance, you must specify TransitEncryptionEnabled as true, an AuthToken, and a CacheSubnetGroup. Password constraints: * Must be only printable ASCII characters. * Must be at least 16 characters and no more than 128 characters in length. * The only permitted printable special characters are !, &, #, $, ^, <, >, and -. Other printable special characters cannot be used in the AUTH token. For more information, see AUTH password (http://redis.io/commands/AUTH) at http://redis.io/commands/AUTH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#auth_token DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#auth_token}
  */
  readonly authToken?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthToken;
  /**
  * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#automatic_failover_enabled DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#automatic_failover_enabled}
  */
  readonly automaticFailoverEnabled?: boolean | cdktf.IResolvable;
  /**
  * The compute and memory capacity of the nodes in the node group (shard). The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. * General purpose: Current generation: M6g node types (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.m6g.large, cache.m6g.xlarge, cache.m6g.2xlarge, cache.m6g.4xlarge, cache.m6g.8xlarge, cache.m6g.12xlarge, cache.m6g.16xlarge For region availability, see Supported Node Types (https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion) M5 node types: cache.m5.large, cache.m5.xlarge, cache.m5.2xlarge, cache.m5.4xlarge, cache.m5.12xlarge, cache.m5.24xlarge M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge T4g node types (available only for Redis engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): cache.t4g.micro, cache.t4g.small, cache.t4g.medium T3 node types: cache.t3.micro, cache.t3.small, cache.t3.medium T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) T1 node types: cache.t1.micro M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge * Compute optimized: Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) C1 node types: cache.c1.xlarge * Memory optimized with data tiering: Current generation: R6gd node types (available only for Redis engine version 6.2 onward). cache.r6gd.xlarge, cache.r6gd.2xlarge, cache.r6gd.4xlarge, cache.r6gd.8xlarge, cache.r6gd.12xlarge, cache.r6gd.16xlarge * Memory optimized: Current generation: R6g node types (available only for Redis engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward). cache.r6g.large, cache.r6g.xlarge, cache.r6g.2xlarge, cache.r6g.4xlarge, cache.r6g.8xlarge, cache.r6g.12xlarge, cache.r6g.16xlarge For region availability, see Supported Node Types (https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion) R5 node types: cache.r5.large, cache.r5.xlarge, cache.r5.2xlarge, cache.r5.4xlarge, cache.r5.12xlarge, cache.r5.24xlarge R4 node types: cache.r4.large, cache.r4.xlarge, cache.r4.2xlarge, cache.r4.4xlarge, cache.r4.8xlarge, cache.r4.16xlarge Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge Additional node type info * All current generation instance types are created in Amazon VPC by default. * Redis append-only files (AOF) are not supported for T1 or T2 instances. * Redis Multi-AZ with automatic failover is not supported on T1 instances. * Redis configuration variables appendonly and appendfsync are not supported on Redis version 2.8.22 and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#cache_node_type DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#cache_node_type}
  */
  readonly cacheNodeType?: string;
  /**
  * The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used. If you are running Redis version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name. * To create a Redis (cluster mode disabled) replication group, use CacheParameterGroupName=default.redis3.2. * To create a Redis (cluster mode enabled) replication group, use CacheParameterGroupName=default.redis3.2.cluster.on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#cache_parameter_group_name DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#cache_parameter_group_name}
  */
  readonly cacheParameterGroupName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#cache_parameter_group_ref DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#cache_parameter_group_ref}
  */
  readonly cacheParameterGroupRef?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRef;
  /**
  * A list of cache security group names to associate with this replication group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#cache_security_group_names DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#cache_security_group_names}
  */
  readonly cacheSecurityGroupNames?: string[];
  /**
  * The name of the cache subnet group to be used for the replication group. If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see Subnets and Subnet Groups (https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#cache_subnet_group_name DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#cache_subnet_group_name}
  */
  readonly cacheSubnetGroupName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#cache_subnet_group_ref DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#cache_subnet_group_ref}
  */
  readonly cacheSubnetGroupRef?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRef;
  /**
  * Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see Data tiering (https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#data_tiering_enabled DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#data_tiering_enabled}
  */
  readonly dataTieringEnabled?: boolean | cdktf.IResolvable;
  /**
  * A user-created description for the replication group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#description DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#description}
  */
  readonly description: string;
  /**
  * The name of the cache engine to be used for the clusters in this replication group. Must be Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#engine DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#engine}
  */
  readonly engine?: string;
  /**
  * The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation. Important: You can upgrade to a newer engine version (see Selecting a Cache Engine and Version (https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement)) in the ElastiCache User Guide, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#engine_version DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * The ID of the KMS key used to encrypt the disk in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#kms_key_id DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Specifies the destination, format and type of the logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#log_delivery_configurations DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#log_delivery_configurations}
  */
  readonly logDeliveryConfigurations?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurations[] | cdktf.IResolvable;
  /**
  * A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ (http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#multi_az_enabled DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#multi_az_enabled}
  */
  readonly multiAzEnabled?: boolean | cdktf.IResolvable;
  /**
  * A list of node group (shard) configuration options. Each node group (shard) configuration has the following members: PrimaryAvailabilityZone, ReplicaAvailabilityZones, ReplicaCount, and Slots. If you're creating a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group, you can use this parameter to individually configure each node group (shard), or you can omit this parameter. However, it is required when seeding a Redis (cluster mode enabled) cluster from a S3 rdb file. You must configure each node group (shard) using this parameter because you must specify the slots for each node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#node_group_configuration DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#node_group_configuration}
  */
  readonly nodeGroupConfiguration?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfiguration[] | cdktf.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. The Amazon SNS topic owner must be the same as the cluster owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#notification_topic_arn DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#notification_topic_arn}
  */
  readonly notificationTopicArn?: string;
  /**
  * An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. For Redis (cluster mode disabled) either omit this parameter or set it to 1. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#num_node_groups DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#num_node_groups}
  */
  readonly numNodeGroups?: number;
  /**
  * The port number on which each member of the replication group accepts connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#port DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead. If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of NumCacheClusters. Default: system chosen Availability Zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#preferred_cache_cluster_a_zs DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#preferred_cache_cluster_a_zs}
  */
  readonly preferredCacheClusterAZs?: string[];
  /**
  * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: * sun * mon * tue * wed * thu * fri * sat Example: sun:23:00-mon:01:30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#preferred_maintenance_window DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of available. This parameter is not required if NumCacheClusters, NumNodeGroups, or ReplicasPerNodeGroup is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#primary_cluster_id DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#primary_cluster_id}
  */
  readonly primaryClusterId?: string;
  /**
  * An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#replicas_per_node_group DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#replicas_per_node_group}
  */
  readonly replicasPerNodeGroup?: number;
  /**
  * The replication group identifier. This parameter is stored as a lowercase string. Constraints: * A name must contain from 1 to 40 alphanumeric characters or hyphens. * The first character must be a letter. * A name cannot end with a hyphen or contain two consecutive hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#replication_group_id DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#replication_group_id}
  */
  readonly replicationGroupId: string;
  /**
  * One or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#security_group_i_ds DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#security_group_refs DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#security_group_refs}
  */
  readonly securityGroupRefs?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable;
  /**
  * A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter NumNodeGroups or the number of node groups configured by NodeGroupConfiguration regardless of the number of ARNs specified here. Example of an Amazon S3 ARN: arn:aws:s3:::my_bucket/snapshot1.rdb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#snapshot_ar_ns DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#snapshot_ar_ns}
  */
  readonly snapshotArNs?: string[];
  /**
  * The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to restoring while the new replication group is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#snapshot_name DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#snapshot_name}
  */
  readonly snapshotName?: string;
  /**
  * The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted. Default: 0 (i.e., automatic backups are disabled for this cluster).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#snapshot_retention_limit DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#snapshot_retention_limit}
  */
  readonly snapshotRetentionLimit?: number;
  /**
  * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). Example: 05:00-09:00 If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#snapshot_window DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#snapshot_window}
  */
  readonly snapshotWindow?: string;
  /**
  * A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue. Tags on replication groups will be replicated to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#tags DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * A flag that enables in-transit encryption when set to true. You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster. This parameter is valid only if the Engine parameter is redis, the EngineVersion parameter is 3.2.6, 4.x or later, and the cluster is being created in an Amazon VPC. If you enable in-transit encryption, you must also specify a value for CacheSubnetGroup. Required: Only available when creating a replication group in an Amazon VPC using redis version 3.2.6, 4.x or later. Default: false For HIPAA compliance, you must specify TransitEncryptionEnabled as true, an AuthToken, and a CacheSubnetGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#transit_encryption_enabled DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#transit_encryption_enabled}
  */
  readonly transitEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The user group to associate with the replication group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#user_group_i_ds DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest#user_group_i_ds}
  */
  readonly userGroupIDs?: string[];
}

export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at_rest_encryption_enabled: cdktf.booleanToTerraform(struct!.atRestEncryptionEnabled),
    auth_token: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthTokenToTerraform(struct!.authToken),
    automatic_failover_enabled: cdktf.booleanToTerraform(struct!.automaticFailoverEnabled),
    cache_node_type: cdktf.stringToTerraform(struct!.cacheNodeType),
    cache_parameter_group_name: cdktf.stringToTerraform(struct!.cacheParameterGroupName),
    cache_parameter_group_ref: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefToTerraform(struct!.cacheParameterGroupRef),
    cache_security_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cacheSecurityGroupNames),
    cache_subnet_group_name: cdktf.stringToTerraform(struct!.cacheSubnetGroupName),
    cache_subnet_group_ref: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefToTerraform(struct!.cacheSubnetGroupRef),
    data_tiering_enabled: cdktf.booleanToTerraform(struct!.dataTieringEnabled),
    description: cdktf.stringToTerraform(struct!.description),
    engine: cdktf.stringToTerraform(struct!.engine),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    log_delivery_configurations: cdktf.listMapper(dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsToTerraform, false)(struct!.logDeliveryConfigurations),
    multi_az_enabled: cdktf.booleanToTerraform(struct!.multiAzEnabled),
    node_group_configuration: cdktf.listMapper(dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfigurationToTerraform, false)(struct!.nodeGroupConfiguration),
    notification_topic_arn: cdktf.stringToTerraform(struct!.notificationTopicArn),
    num_node_groups: cdktf.numberToTerraform(struct!.numNodeGroups),
    port: cdktf.numberToTerraform(struct!.port),
    preferred_cache_cluster_a_zs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredCacheClusterAZs),
    preferred_maintenance_window: cdktf.stringToTerraform(struct!.preferredMaintenanceWindow),
    primary_cluster_id: cdktf.stringToTerraform(struct!.primaryClusterId),
    replicas_per_node_group: cdktf.numberToTerraform(struct!.replicasPerNodeGroup),
    replication_group_id: cdktf.stringToTerraform(struct!.replicationGroupId),
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    security_group_refs: cdktf.listMapper(dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsToTerraform, false)(struct!.securityGroupRefs),
    snapshot_ar_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.snapshotArNs),
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
    snapshot_retention_limit: cdktf.numberToTerraform(struct!.snapshotRetentionLimit),
    snapshot_window: cdktf.stringToTerraform(struct!.snapshotWindow),
    tags: cdktf.listMapper(dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    transit_encryption_enabled: cdktf.booleanToTerraform(struct!.transitEncryptionEnabled),
    user_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userGroupIDs),
  }
}


export function dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at_rest_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.atRestEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_token: {
      value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthTokenToHclTerraform(struct!.authToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthToken",
    },
    automatic_failover_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFailoverEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_node_type: {
      value: cdktf.stringToHclTerraform(struct!.cacheNodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_parameter_group_name: {
      value: cdktf.stringToHclTerraform(struct!.cacheParameterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_parameter_group_ref: {
      value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefToHclTerraform(struct!.cacheParameterGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRef",
    },
    cache_security_group_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cacheSecurityGroupNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_subnet_group_name: {
      value: cdktf.stringToHclTerraform(struct!.cacheSubnetGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_subnet_group_ref: {
      value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefToHclTerraform(struct!.cacheSubnetGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRef",
    },
    data_tiering_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dataTieringEnabled),
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
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
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
    log_delivery_configurations: {
      value: cdktf.listMapperHcl(dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsToHclTerraform, false)(struct!.logDeliveryConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsList",
    },
    multi_az_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.multiAzEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_group_configuration: {
      value: cdktf.listMapperHcl(dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfigurationToHclTerraform, false)(struct!.nodeGroupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfigurationList",
    },
    notification_topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.notificationTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_node_groups: {
      value: cdktf.numberToHclTerraform(struct!.numNodeGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_cache_cluster_a_zs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredCacheClusterAZs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preferred_maintenance_window: {
      value: cdktf.stringToHclTerraform(struct!.preferredMaintenanceWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.primaryClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas_per_node_group: {
      value: cdktf.numberToHclTerraform(struct!.replicasPerNodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_group_id: {
      value: cdktf.stringToHclTerraform(struct!.replicationGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsToHclTerraform, false)(struct!.securityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsList",
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
    tags: {
      value: cdktf.listMapperHcl(dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTagsList",
    },
    transit_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.transitEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atRestEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.atRestEncryptionEnabled = this._atRestEncryptionEnabled;
    }
    if (this._authToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken?.internalValue;
    }
    if (this._automaticFailoverEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFailoverEnabled = this._automaticFailoverEnabled;
    }
    if (this._cacheNodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheNodeType = this._cacheNodeType;
    }
    if (this._cacheParameterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheParameterGroupName = this._cacheParameterGroupName;
    }
    if (this._cacheParameterGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheParameterGroupRef = this._cacheParameterGroupRef?.internalValue;
    }
    if (this._cacheSecurityGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSecurityGroupNames = this._cacheSecurityGroupNames;
    }
    if (this._cacheSubnetGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSubnetGroupName = this._cacheSubnetGroupName;
    }
    if (this._cacheSubnetGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSubnetGroupRef = this._cacheSubnetGroupRef?.internalValue;
    }
    if (this._dataTieringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTieringEnabled = this._dataTieringEnabled;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._logDeliveryConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDeliveryConfigurations = this._logDeliveryConfigurations?.internalValue;
    }
    if (this._multiAzEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAzEnabled = this._multiAzEnabled;
    }
    if (this._nodeGroupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupConfiguration = this._nodeGroupConfiguration?.internalValue;
    }
    if (this._notificationTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTopicArn = this._notificationTopicArn;
    }
    if (this._numNodeGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.numNodeGroups = this._numNodeGroups;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preferredCacheClusterAZs !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredCacheClusterAZs = this._preferredCacheClusterAZs;
    }
    if (this._preferredMaintenanceWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredMaintenanceWindow = this._preferredMaintenanceWindow;
    }
    if (this._primaryClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryClusterId = this._primaryClusterId;
    }
    if (this._replicasPerNodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicasPerNodeGroup = this._replicasPerNodeGroup;
    }
    if (this._replicationGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationGroupId = this._replicationGroupId;
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
    if (this._snapshotRetentionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRetentionLimit = this._snapshotRetentionLimit;
    }
    if (this._snapshotWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotWindow = this._snapshotWindow;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._transitEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitEncryptionEnabled = this._transitEncryptionEnabled;
    }
    if (this._userGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupIDs = this._userGroupIDs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atRestEncryptionEnabled = undefined;
      this._authToken.internalValue = undefined;
      this._automaticFailoverEnabled = undefined;
      this._cacheNodeType = undefined;
      this._cacheParameterGroupName = undefined;
      this._cacheParameterGroupRef.internalValue = undefined;
      this._cacheSecurityGroupNames = undefined;
      this._cacheSubnetGroupName = undefined;
      this._cacheSubnetGroupRef.internalValue = undefined;
      this._dataTieringEnabled = undefined;
      this._description = undefined;
      this._engine = undefined;
      this._engineVersion = undefined;
      this._kmsKeyId = undefined;
      this._logDeliveryConfigurations.internalValue = undefined;
      this._multiAzEnabled = undefined;
      this._nodeGroupConfiguration.internalValue = undefined;
      this._notificationTopicArn = undefined;
      this._numNodeGroups = undefined;
      this._port = undefined;
      this._preferredCacheClusterAZs = undefined;
      this._preferredMaintenanceWindow = undefined;
      this._primaryClusterId = undefined;
      this._replicasPerNodeGroup = undefined;
      this._replicationGroupId = undefined;
      this._securityGroupIDs = undefined;
      this._securityGroupRefs.internalValue = undefined;
      this._snapshotArNs = undefined;
      this._snapshotName = undefined;
      this._snapshotRetentionLimit = undefined;
      this._snapshotWindow = undefined;
      this._tags.internalValue = undefined;
      this._transitEncryptionEnabled = undefined;
      this._userGroupIDs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._atRestEncryptionEnabled = value.atRestEncryptionEnabled;
      this._authToken.internalValue = value.authToken;
      this._automaticFailoverEnabled = value.automaticFailoverEnabled;
      this._cacheNodeType = value.cacheNodeType;
      this._cacheParameterGroupName = value.cacheParameterGroupName;
      this._cacheParameterGroupRef.internalValue = value.cacheParameterGroupRef;
      this._cacheSecurityGroupNames = value.cacheSecurityGroupNames;
      this._cacheSubnetGroupName = value.cacheSubnetGroupName;
      this._cacheSubnetGroupRef.internalValue = value.cacheSubnetGroupRef;
      this._dataTieringEnabled = value.dataTieringEnabled;
      this._description = value.description;
      this._engine = value.engine;
      this._engineVersion = value.engineVersion;
      this._kmsKeyId = value.kmsKeyId;
      this._logDeliveryConfigurations.internalValue = value.logDeliveryConfigurations;
      this._multiAzEnabled = value.multiAzEnabled;
      this._nodeGroupConfiguration.internalValue = value.nodeGroupConfiguration;
      this._notificationTopicArn = value.notificationTopicArn;
      this._numNodeGroups = value.numNodeGroups;
      this._port = value.port;
      this._preferredCacheClusterAZs = value.preferredCacheClusterAZs;
      this._preferredMaintenanceWindow = value.preferredMaintenanceWindow;
      this._primaryClusterId = value.primaryClusterId;
      this._replicasPerNodeGroup = value.replicasPerNodeGroup;
      this._replicationGroupId = value.replicationGroupId;
      this._securityGroupIDs = value.securityGroupIDs;
      this._securityGroupRefs.internalValue = value.securityGroupRefs;
      this._snapshotArNs = value.snapshotArNs;
      this._snapshotName = value.snapshotName;
      this._snapshotRetentionLimit = value.snapshotRetentionLimit;
      this._snapshotWindow = value.snapshotWindow;
      this._tags.internalValue = value.tags;
      this._transitEncryptionEnabled = value.transitEncryptionEnabled;
      this._userGroupIDs = value.userGroupIDs;
    }
  }

  // at_rest_encryption_enabled - computed: false, optional: true, required: false
  private _atRestEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get atRestEncryptionEnabled() {
    return this.getBooleanAttribute('at_rest_encryption_enabled');
  }
  public set atRestEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._atRestEncryptionEnabled = value;
  }
  public resetAtRestEncryptionEnabled() {
    this._atRestEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atRestEncryptionEnabledInput() {
    return this._atRestEncryptionEnabled;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthTokenOutputReference(this, "auth_token");
  public get authToken() {
    return this._authToken;
  }
  public putAuthToken(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecAuthToken) {
    this._authToken.internalValue = value;
  }
  public resetAuthToken() {
    this._authToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken.internalValue;
  }

  // automatic_failover_enabled - computed: false, optional: true, required: false
  private _automaticFailoverEnabled?: boolean | cdktf.IResolvable; 
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }
  public set automaticFailoverEnabled(value: boolean | cdktf.IResolvable) {
    this._automaticFailoverEnabled = value;
  }
  public resetAutomaticFailoverEnabled() {
    this._automaticFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFailoverEnabledInput() {
    return this._automaticFailoverEnabled;
  }

  // cache_node_type - computed: false, optional: true, required: false
  private _cacheNodeType?: string; 
  public get cacheNodeType() {
    return this.getStringAttribute('cache_node_type');
  }
  public set cacheNodeType(value: string) {
    this._cacheNodeType = value;
  }
  public resetCacheNodeType() {
    this._cacheNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNodeTypeInput() {
    return this._cacheNodeType;
  }

  // cache_parameter_group_name - computed: false, optional: true, required: false
  private _cacheParameterGroupName?: string; 
  public get cacheParameterGroupName() {
    return this.getStringAttribute('cache_parameter_group_name');
  }
  public set cacheParameterGroupName(value: string) {
    this._cacheParameterGroupName = value;
  }
  public resetCacheParameterGroupName() {
    this._cacheParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheParameterGroupNameInput() {
    return this._cacheParameterGroupName;
  }

  // cache_parameter_group_ref - computed: false, optional: true, required: false
  private _cacheParameterGroupRef = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRefOutputReference(this, "cache_parameter_group_ref");
  public get cacheParameterGroupRef() {
    return this._cacheParameterGroupRef;
  }
  public putCacheParameterGroupRef(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheParameterGroupRef) {
    this._cacheParameterGroupRef.internalValue = value;
  }
  public resetCacheParameterGroupRef() {
    this._cacheParameterGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheParameterGroupRefInput() {
    return this._cacheParameterGroupRef.internalValue;
  }

  // cache_security_group_names - computed: false, optional: true, required: false
  private _cacheSecurityGroupNames?: string[]; 
  public get cacheSecurityGroupNames() {
    return this.getListAttribute('cache_security_group_names');
  }
  public set cacheSecurityGroupNames(value: string[]) {
    this._cacheSecurityGroupNames = value;
  }
  public resetCacheSecurityGroupNames() {
    this._cacheSecurityGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSecurityGroupNamesInput() {
    return this._cacheSecurityGroupNames;
  }

  // cache_subnet_group_name - computed: false, optional: true, required: false
  private _cacheSubnetGroupName?: string; 
  public get cacheSubnetGroupName() {
    return this.getStringAttribute('cache_subnet_group_name');
  }
  public set cacheSubnetGroupName(value: string) {
    this._cacheSubnetGroupName = value;
  }
  public resetCacheSubnetGroupName() {
    this._cacheSubnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSubnetGroupNameInput() {
    return this._cacheSubnetGroupName;
  }

  // cache_subnet_group_ref - computed: false, optional: true, required: false
  private _cacheSubnetGroupRef = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRefOutputReference(this, "cache_subnet_group_ref");
  public get cacheSubnetGroupRef() {
    return this._cacheSubnetGroupRef;
  }
  public putCacheSubnetGroupRef(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecCacheSubnetGroupRef) {
    this._cacheSubnetGroupRef.internalValue = value;
  }
  public resetCacheSubnetGroupRef() {
    this._cacheSubnetGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSubnetGroupRefInput() {
    return this._cacheSubnetGroupRef.internalValue;
  }

  // data_tiering_enabled - computed: false, optional: true, required: false
  private _dataTieringEnabled?: boolean | cdktf.IResolvable; 
  public get dataTieringEnabled() {
    return this.getBooleanAttribute('data_tiering_enabled');
  }
  public set dataTieringEnabled(value: boolean | cdktf.IResolvable) {
    this._dataTieringEnabled = value;
  }
  public resetDataTieringEnabled() {
    this._dataTieringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTieringEnabledInput() {
    return this._dataTieringEnabled;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
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

  // log_delivery_configurations - computed: false, optional: true, required: false
  private _logDeliveryConfigurations = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurationsList(this, "log_delivery_configurations", false);
  public get logDeliveryConfigurations() {
    return this._logDeliveryConfigurations;
  }
  public putLogDeliveryConfigurations(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecLogDeliveryConfigurations[] | cdktf.IResolvable) {
    this._logDeliveryConfigurations.internalValue = value;
  }
  public resetLogDeliveryConfigurations() {
    this._logDeliveryConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryConfigurationsInput() {
    return this._logDeliveryConfigurations.internalValue;
  }

  // multi_az_enabled - computed: false, optional: true, required: false
  private _multiAzEnabled?: boolean | cdktf.IResolvable; 
  public get multiAzEnabled() {
    return this.getBooleanAttribute('multi_az_enabled');
  }
  public set multiAzEnabled(value: boolean | cdktf.IResolvable) {
    this._multiAzEnabled = value;
  }
  public resetMultiAzEnabled() {
    this._multiAzEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzEnabledInput() {
    return this._multiAzEnabled;
  }

  // node_group_configuration - computed: false, optional: true, required: false
  private _nodeGroupConfiguration = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfigurationList(this, "node_group_configuration", false);
  public get nodeGroupConfiguration() {
    return this._nodeGroupConfiguration;
  }
  public putNodeGroupConfiguration(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecNodeGroupConfiguration[] | cdktf.IResolvable) {
    this._nodeGroupConfiguration.internalValue = value;
  }
  public resetNodeGroupConfiguration() {
    this._nodeGroupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupConfigurationInput() {
    return this._nodeGroupConfiguration.internalValue;
  }

  // notification_topic_arn - computed: false, optional: true, required: false
  private _notificationTopicArn?: string; 
  public get notificationTopicArn() {
    return this.getStringAttribute('notification_topic_arn');
  }
  public set notificationTopicArn(value: string) {
    this._notificationTopicArn = value;
  }
  public resetNotificationTopicArn() {
    this._notificationTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicArnInput() {
    return this._notificationTopicArn;
  }

  // num_node_groups - computed: false, optional: true, required: false
  private _numNodeGroups?: number; 
  public get numNodeGroups() {
    return this.getNumberAttribute('num_node_groups');
  }
  public set numNodeGroups(value: number) {
    this._numNodeGroups = value;
  }
  public resetNumNodeGroups() {
    this._numNodeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numNodeGroupsInput() {
    return this._numNodeGroups;
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

  // preferred_cache_cluster_a_zs - computed: false, optional: true, required: false
  private _preferredCacheClusterAZs?: string[]; 
  public get preferredCacheClusterAZs() {
    return this.getListAttribute('preferred_cache_cluster_a_zs');
  }
  public set preferredCacheClusterAZs(value: string[]) {
    this._preferredCacheClusterAZs = value;
  }
  public resetPreferredCacheClusterAZs() {
    this._preferredCacheClusterAZs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredCacheClusterAZsInput() {
    return this._preferredCacheClusterAZs;
  }

  // preferred_maintenance_window - computed: false, optional: true, required: false
  private _preferredMaintenanceWindow?: string; 
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string) {
    this._preferredMaintenanceWindow = value;
  }
  public resetPreferredMaintenanceWindow() {
    this._preferredMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceWindowInput() {
    return this._preferredMaintenanceWindow;
  }

  // primary_cluster_id - computed: false, optional: true, required: false
  private _primaryClusterId?: string; 
  public get primaryClusterId() {
    return this.getStringAttribute('primary_cluster_id');
  }
  public set primaryClusterId(value: string) {
    this._primaryClusterId = value;
  }
  public resetPrimaryClusterId() {
    this._primaryClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryClusterIdInput() {
    return this._primaryClusterId;
  }

  // replicas_per_node_group - computed: false, optional: true, required: false
  private _replicasPerNodeGroup?: number; 
  public get replicasPerNodeGroup() {
    return this.getNumberAttribute('replicas_per_node_group');
  }
  public set replicasPerNodeGroup(value: number) {
    this._replicasPerNodeGroup = value;
  }
  public resetReplicasPerNodeGroup() {
    this._replicasPerNodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasPerNodeGroupInput() {
    return this._replicasPerNodeGroup;
  }

  // replication_group_id - computed: false, optional: false, required: true
  private _replicationGroupId?: string; 
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }
  public set replicationGroupId(value: string) {
    this._replicationGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupIdInput() {
    return this._replicationGroupId;
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
  private _securityGroupRefs = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefsList(this, "security_group_refs", false);
  public get securityGroupRefs() {
    return this._securityGroupRefs;
  }
  public putSecurityGroupRefs(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecSecurityGroupRefs[] | cdktf.IResolvable) {
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

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // transit_encryption_enabled - computed: false, optional: true, required: false
  private _transitEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get transitEncryptionEnabled() {
    return this.getBooleanAttribute('transit_encryption_enabled');
  }
  public set transitEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._transitEncryptionEnabled = value;
  }
  public resetTransitEncryptionEnabled() {
    this._transitEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionEnabledInput() {
    return this._transitEncryptionEnabled;
  }

  // user_group_i_ds - computed: false, optional: true, required: false
  private _userGroupIDs?: string[]; 
  public get userGroupIDs() {
    return this.getListAttribute('user_group_i_ds');
  }
  public set userGroupIDs(value: string[]) {
    this._userGroupIDs = value;
  }
  public resetUserGroupIDs() {
    this._userGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIDsInput() {
    return this._userGroupIDs;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest k8s_elasticache_services_k8s_aws_replication_group_v1alpha1_manifest}
*/
export class DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_elasticache_services_k8s_aws_replication_group_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_elasticache_services_k8s_aws_replication_group_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/elasticache_services_k8s_aws_replication_group_v1alpha1_manifest k8s_elasticache_services_k8s_aws_replication_group_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_elasticache_services_k8s_aws_replication_group_v1alpha1_manifest',
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
  private _metadata = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SElasticacheServicesK8SAwsReplicationGroupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
