// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#metadata DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadata;
  /**
  * DBClusterSpec defines the desired state of DBCluster. Detailed information about a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#spec DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpec;
}
export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#annotations DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#labels DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable): any {
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

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#from DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom;
}

export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom) {
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
export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#from DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom;
}

export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom) {
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
export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#key DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable): any {
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


export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable): any {
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

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#key DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#value DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#from DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom;
}

export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom) {
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

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsOutputReference {
    return new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpec {
  /**
  * A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#availability_zones DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * The number of days for which automated backups are retained. You must specify a minimum value of 1. Default: 1 Constraints: * Must be a value from 1 to 35.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#backup_retention_period DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * The cluster identifier. This parameter is stored as a lowercase string. Constraints: * Must contain from 1 to 63 letters, numbers, or hyphens. * The first character must be a letter. * Cannot end with a hyphen or contain two consecutive hyphens. Example: my-cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#db_cluster_identifier DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#db_cluster_identifier}
  */
  readonly dbClusterIdentifier: string;
  /**
  * The name of the cluster parameter group to associate with this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#db_cluster_parameter_group_name DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#db_cluster_parameter_group_name}
  */
  readonly dbClusterParameterGroupName?: string;
  /**
  * A subnet group to associate with this cluster. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#db_subnet_group_name DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#db_subnet_group_name}
  */
  readonly dbSubnetGroupName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#db_subnet_group_ref DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#db_subnet_group_ref}
  */
  readonly dbSubnetGroupRef?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef;
  /**
  * Specifies whether this cluster can be deleted. If DeletionProtection is enabled, the cluster cannot be deleted unless it is modified and DeletionProtection is disabled. DeletionProtection protects clusters from being accidentally deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#deletion_protection DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * DestinationRegion is used for presigning the request to a given region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#destination_region DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#destination_region}
  */
  readonly destinationRegion?: string;
  /**
  * A list of log types that need to be enabled for exporting to Amazon CloudWatch Logs. You can enable audit logs or profiler logs. For more information, see Auditing Amazon DocumentDB Events (https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html) and Profiling Amazon DocumentDB Operations (https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#enable_cloudwatch_logs_exports DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#enable_cloudwatch_logs_exports}
  */
  readonly enableCloudwatchLogsExports?: string[];
  /**
  * The name of the database engine to be used for this cluster. Valid values: docdb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#engine DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#engine}
  */
  readonly engine: string;
  /**
  * The version number of the database engine to use. The --engine-version will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#engine_version DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * The cluster identifier of the new global cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#global_cluster_identifier DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#global_cluster_identifier}
  */
  readonly globalClusterIdentifier?: string;
  /**
  * The KMS key identifier for an encrypted cluster. The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon Web Services account that owns the KMS encryption key that is used to encrypt the new cluster, you can use the KMS key alias instead of the ARN for the KMS encryption key. If an encryption key is not specified in KmsKeyId: * If the StorageEncrypted parameter is true, Amazon DocumentDB uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#kms_key_id DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#kms_key_ref DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#kms_key_ref}
  */
  readonly kmsKeyRef?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef;
  /**
  * The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ('), or the 'at' symbol (@). Constraints: Must contain from 8 to 100 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#master_user_password DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#master_user_password}
  */
  readonly masterUserPassword?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword;
  /**
  * The name of the master user for the cluster. Constraints: * Must be from 1 to 63 letters or numbers. * The first character must be a letter. * Cannot be a reserved word for the chosen database engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#master_username DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#master_username}
  */
  readonly masterUsername?: string;
  /**
  * The port number on which the instances in the cluster accept connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#port DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Not currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#pre_signed_url DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#pre_signed_url}
  */
  readonly preSignedUrl?: string;
  /**
  * The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. Constraints: * Must be in the format hh24:mi-hh24:mi. * Must be in Universal Coordinated Time (UTC). * Must not conflict with the preferred maintenance window. * Must be at least 30 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#preferred_backup_window DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#preferred_backup_window}
  */
  readonly preferredBackupWindow?: string;
  /**
  * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#preferred_maintenance_window DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * The identifier for the snapshot or cluster snapshot to restore from. You can use either the name or the Amazon Resource Name (ARN) to specify a cluster snapshot. However, you can use only the ARN to specify a snapshot. Constraints: * Must match the identifier of an existing snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#snapshot_identifier DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#snapshot_identifier}
  */
  readonly snapshotIdentifier?: string;
  /**
  * SourceRegion is the source region where the resource exists. This is not sent over the wire and is only used for presigning. This value should always have the same region as the source ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#source_region DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#source_region}
  */
  readonly sourceRegion?: string;
  /**
  * Specifies whether the cluster is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#storage_encrypted DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#storage_encrypted}
  */
  readonly storageEncrypted?: boolean | cdktf.IResolvable;
  /**
  * The storage type to associate with the DB cluster. For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the Amazon DocumentDB Developer Guide. Valid values for storage type - standard | iopt1 Default value is standard When you create a DocumentDB DB cluster with the storage type set to iopt1, the storage type is returned in the response. The storage type isn't returned when you set it to standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#storage_type DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#storage_type}
  */
  readonly storageType?: string;
  /**
  * The tags to be assigned to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#tags DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * A list of EC2 VPC security groups to associate with this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#vpc_security_group_i_ds DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#vpc_security_group_i_ds}
  */
  readonly vpcSecurityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#vpc_security_group_refs DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest#vpc_security_group_refs}
  */
  readonly vpcSecurityGroupRefs?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs[] | cdktf.IResolvable;
}

export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    backup_retention_period: cdktf.numberToTerraform(struct!.backupRetentionPeriod),
    db_cluster_identifier: cdktf.stringToTerraform(struct!.dbClusterIdentifier),
    db_cluster_parameter_group_name: cdktf.stringToTerraform(struct!.dbClusterParameterGroupName),
    db_subnet_group_name: cdktf.stringToTerraform(struct!.dbSubnetGroupName),
    db_subnet_group_ref: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefToTerraform(struct!.dbSubnetGroupRef),
    deletion_protection: cdktf.booleanToTerraform(struct!.deletionProtection),
    destination_region: cdktf.stringToTerraform(struct!.destinationRegion),
    enable_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableCloudwatchLogsExports),
    engine: cdktf.stringToTerraform(struct!.engine),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    global_cluster_identifier: cdktf.stringToTerraform(struct!.globalClusterIdentifier),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_ref: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct!.kmsKeyRef),
    master_user_password: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordToTerraform(struct!.masterUserPassword),
    master_username: cdktf.stringToTerraform(struct!.masterUsername),
    port: cdktf.numberToTerraform(struct!.port),
    pre_signed_url: cdktf.stringToTerraform(struct!.preSignedUrl),
    preferred_backup_window: cdktf.stringToTerraform(struct!.preferredBackupWindow),
    preferred_maintenance_window: cdktf.stringToTerraform(struct!.preferredMaintenanceWindow),
    snapshot_identifier: cdktf.stringToTerraform(struct!.snapshotIdentifier),
    source_region: cdktf.stringToTerraform(struct!.sourceRegion),
    storage_encrypted: cdktf.booleanToTerraform(struct!.storageEncrypted),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    tags: cdktf.listMapper(dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcSecurityGroupIDs),
    vpc_security_group_refs: cdktf.listMapper(dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsToTerraform, false)(struct!.vpcSecurityGroupRefs),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    backup_retention_period: {
      value: cdktf.numberToHclTerraform(struct!.backupRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_cluster_parameter_group_name: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterParameterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_subnet_group_name: {
      value: cdktf.stringToHclTerraform(struct!.dbSubnetGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_subnet_group_ref: {
      value: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefToHclTerraform(struct!.dbSubnetGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef",
    },
    deletion_protection: {
      value: cdktf.booleanToHclTerraform(struct!.deletionProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_region: {
      value: cdktf.stringToHclTerraform(struct!.destinationRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_cloudwatch_logs_exports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableCloudwatchLogsExports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    global_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.globalClusterIdentifier),
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
    kms_key_ref: {
      value: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct!.kmsKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef",
    },
    master_user_password: {
      value: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordToHclTerraform(struct!.masterUserPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword",
    },
    master_username: {
      value: cdktf.stringToHclTerraform(struct!.masterUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pre_signed_url: {
      value: cdktf.stringToHclTerraform(struct!.preSignedUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_backup_window: {
      value: cdktf.stringToHclTerraform(struct!.preferredBackupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_maintenance_window: {
      value: cdktf.stringToHclTerraform(struct!.preferredMaintenanceWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_identifier: {
      value: cdktf.stringToHclTerraform(struct!.snapshotIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_region: {
      value: cdktf.stringToHclTerraform(struct!.sourceRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.storageEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsList",
    },
    vpc_security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcSecurityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsToHclTerraform, false)(struct!.vpcSecurityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._backupRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPeriod = this._backupRetentionPeriod;
    }
    if (this._dbClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterIdentifier = this._dbClusterIdentifier;
    }
    if (this._dbClusterParameterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterParameterGroupName = this._dbClusterParameterGroupName;
    }
    if (this._dbSubnetGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSubnetGroupName = this._dbSubnetGroupName;
    }
    if (this._dbSubnetGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSubnetGroupRef = this._dbSubnetGroupRef?.internalValue;
    }
    if (this._deletionProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtection = this._deletionProtection;
    }
    if (this._destinationRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRegion = this._destinationRegion;
    }
    if (this._enableCloudwatchLogsExports !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCloudwatchLogsExports = this._enableCloudwatchLogsExports;
    }
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyRef = this._kmsKeyRef?.internalValue;
    }
    if (this._masterUserPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserPassword = this._masterUserPassword?.internalValue;
    }
    if (this._masterUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUsername = this._masterUsername;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preSignedUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSignedUrl = this._preSignedUrl;
    }
    if (this._preferredBackupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredBackupWindow = this._preferredBackupWindow;
    }
    if (this._preferredMaintenanceWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredMaintenanceWindow = this._preferredMaintenanceWindow;
    }
    if (this._snapshotIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotIdentifier = this._snapshotIdentifier;
    }
    if (this._sourceRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRegion = this._sourceRegion;
    }
    if (this._storageEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageEncrypted = this._storageEncrypted;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpcSecurityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSecurityGroupIDs = this._vpcSecurityGroupIDs;
    }
    if (this._vpcSecurityGroupRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSecurityGroupRefs = this._vpcSecurityGroupRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZones = undefined;
      this._backupRetentionPeriod = undefined;
      this._dbClusterIdentifier = undefined;
      this._dbClusterParameterGroupName = undefined;
      this._dbSubnetGroupName = undefined;
      this._dbSubnetGroupRef.internalValue = undefined;
      this._deletionProtection = undefined;
      this._destinationRegion = undefined;
      this._enableCloudwatchLogsExports = undefined;
      this._engine = undefined;
      this._engineVersion = undefined;
      this._globalClusterIdentifier = undefined;
      this._kmsKeyId = undefined;
      this._kmsKeyRef.internalValue = undefined;
      this._masterUserPassword.internalValue = undefined;
      this._masterUsername = undefined;
      this._port = undefined;
      this._preSignedUrl = undefined;
      this._preferredBackupWindow = undefined;
      this._preferredMaintenanceWindow = undefined;
      this._snapshotIdentifier = undefined;
      this._sourceRegion = undefined;
      this._storageEncrypted = undefined;
      this._storageType = undefined;
      this._tags.internalValue = undefined;
      this._vpcSecurityGroupIDs = undefined;
      this._vpcSecurityGroupRefs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZones = value.availabilityZones;
      this._backupRetentionPeriod = value.backupRetentionPeriod;
      this._dbClusterIdentifier = value.dbClusterIdentifier;
      this._dbClusterParameterGroupName = value.dbClusterParameterGroupName;
      this._dbSubnetGroupName = value.dbSubnetGroupName;
      this._dbSubnetGroupRef.internalValue = value.dbSubnetGroupRef;
      this._deletionProtection = value.deletionProtection;
      this._destinationRegion = value.destinationRegion;
      this._enableCloudwatchLogsExports = value.enableCloudwatchLogsExports;
      this._engine = value.engine;
      this._engineVersion = value.engineVersion;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyRef.internalValue = value.kmsKeyRef;
      this._masterUserPassword.internalValue = value.masterUserPassword;
      this._masterUsername = value.masterUsername;
      this._port = value.port;
      this._preSignedUrl = value.preSignedUrl;
      this._preferredBackupWindow = value.preferredBackupWindow;
      this._preferredMaintenanceWindow = value.preferredMaintenanceWindow;
      this._snapshotIdentifier = value.snapshotIdentifier;
      this._sourceRegion = value.sourceRegion;
      this._storageEncrypted = value.storageEncrypted;
      this._storageType = value.storageType;
      this._tags.internalValue = value.tags;
      this._vpcSecurityGroupIDs = value.vpcSecurityGroupIDs;
      this._vpcSecurityGroupRefs.internalValue = value.vpcSecurityGroupRefs;
    }
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // backup_retention_period - computed: false, optional: true, required: false
  private _backupRetentionPeriod?: number; 
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // db_cluster_identifier - computed: false, optional: false, required: true
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
  }

  // db_cluster_parameter_group_name - computed: false, optional: true, required: false
  private _dbClusterParameterGroupName?: string; 
  public get dbClusterParameterGroupName() {
    return this.getStringAttribute('db_cluster_parameter_group_name');
  }
  public set dbClusterParameterGroupName(value: string) {
    this._dbClusterParameterGroupName = value;
  }
  public resetDbClusterParameterGroupName() {
    this._dbClusterParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterParameterGroupNameInput() {
    return this._dbClusterParameterGroupName;
  }

  // db_subnet_group_name - computed: false, optional: true, required: false
  private _dbSubnetGroupName?: string; 
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
  }
  public set dbSubnetGroupName(value: string) {
    this._dbSubnetGroupName = value;
  }
  public resetDbSubnetGroupName() {
    this._dbSubnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSubnetGroupNameInput() {
    return this._dbSubnetGroupName;
  }

  // db_subnet_group_ref - computed: false, optional: true, required: false
  private _dbSubnetGroupRef = new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefOutputReference(this, "db_subnet_group_ref");
  public get dbSubnetGroupRef() {
    return this._dbSubnetGroupRef;
  }
  public putDbSubnetGroupRef(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef) {
    this._dbSubnetGroupRef.internalValue = value;
  }
  public resetDbSubnetGroupRef() {
    this._dbSubnetGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSubnetGroupRefInput() {
    return this._dbSubnetGroupRef.internalValue;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // destination_region - computed: false, optional: true, required: false
  private _destinationRegion?: string; 
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }
  public set destinationRegion(value: string) {
    this._destinationRegion = value;
  }
  public resetDestinationRegion() {
    this._destinationRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionInput() {
    return this._destinationRegion;
  }

  // enable_cloudwatch_logs_exports - computed: false, optional: true, required: false
  private _enableCloudwatchLogsExports?: string[]; 
  public get enableCloudwatchLogsExports() {
    return this.getListAttribute('enable_cloudwatch_logs_exports');
  }
  public set enableCloudwatchLogsExports(value: string[]) {
    this._enableCloudwatchLogsExports = value;
  }
  public resetEnableCloudwatchLogsExports() {
    this._enableCloudwatchLogsExports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCloudwatchLogsExportsInput() {
    return this._enableCloudwatchLogsExports;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
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

  // global_cluster_identifier - computed: false, optional: true, required: false
  private _globalClusterIdentifier?: string; 
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  public resetGlobalClusterIdentifier() {
    this._globalClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier;
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

  // kms_key_ref - computed: false, optional: true, required: false
  private _kmsKeyRef = new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefOutputReference(this, "kms_key_ref");
  public get kmsKeyRef() {
    return this._kmsKeyRef;
  }
  public putKmsKeyRef(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef) {
    this._kmsKeyRef.internalValue = value;
  }
  public resetKmsKeyRef() {
    this._kmsKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyRefInput() {
    return this._kmsKeyRef.internalValue;
  }

  // master_user_password - computed: false, optional: true, required: false
  private _masterUserPassword = new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordOutputReference(this, "master_user_password");
  public get masterUserPassword() {
    return this._masterUserPassword;
  }
  public putMasterUserPassword(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword) {
    this._masterUserPassword.internalValue = value;
  }
  public resetMasterUserPassword() {
    this._masterUserPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserPasswordInput() {
    return this._masterUserPassword.internalValue;
  }

  // master_username - computed: false, optional: true, required: false
  private _masterUsername?: string; 
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }
  public set masterUsername(value: string) {
    this._masterUsername = value;
  }
  public resetMasterUsername() {
    this._masterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUsernameInput() {
    return this._masterUsername;
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

  // pre_signed_url - computed: false, optional: true, required: false
  private _preSignedUrl?: string; 
  public get preSignedUrl() {
    return this.getStringAttribute('pre_signed_url');
  }
  public set preSignedUrl(value: string) {
    this._preSignedUrl = value;
  }
  public resetPreSignedUrl() {
    this._preSignedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSignedUrlInput() {
    return this._preSignedUrl;
  }

  // preferred_backup_window - computed: false, optional: true, required: false
  private _preferredBackupWindow?: string; 
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }
  public set preferredBackupWindow(value: string) {
    this._preferredBackupWindow = value;
  }
  public resetPreferredBackupWindow() {
    this._preferredBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupWindowInput() {
    return this._preferredBackupWindow;
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

  // snapshot_identifier - computed: false, optional: true, required: false
  private _snapshotIdentifier?: string; 
  public get snapshotIdentifier() {
    return this.getStringAttribute('snapshot_identifier');
  }
  public set snapshotIdentifier(value: string) {
    this._snapshotIdentifier = value;
  }
  public resetSnapshotIdentifier() {
    this._snapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdentifierInput() {
    return this._snapshotIdentifier;
  }

  // source_region - computed: false, optional: true, required: false
  private _sourceRegion?: string; 
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }
  public set sourceRegion(value: string) {
    this._sourceRegion = value;
  }
  public resetSourceRegion() {
    this._sourceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionInput() {
    return this._sourceRegion;
  }

  // storage_encrypted - computed: false, optional: true, required: false
  private _storageEncrypted?: boolean | cdktf.IResolvable; 
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }
  public set storageEncrypted(value: boolean | cdktf.IResolvable) {
    this._storageEncrypted = value;
  }
  public resetStorageEncrypted() {
    this._storageEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptedInput() {
    return this._storageEncrypted;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_security_group_i_ds - computed: false, optional: true, required: false
  private _vpcSecurityGroupIDs?: string[]; 
  public get vpcSecurityGroupIDs() {
    return this.getListAttribute('vpc_security_group_i_ds');
  }
  public set vpcSecurityGroupIDs(value: string[]) {
    this._vpcSecurityGroupIDs = value;
  }
  public resetVpcSecurityGroupIDs() {
    this._vpcSecurityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIDsInput() {
    return this._vpcSecurityGroupIDs;
  }

  // vpc_security_group_refs - computed: false, optional: true, required: false
  private _vpcSecurityGroupRefs = new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsList(this, "vpc_security_group_refs", false);
  public get vpcSecurityGroupRefs() {
    return this._vpcSecurityGroupRefs;
  }
  public putVpcSecurityGroupRefs(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs[] | cdktf.IResolvable) {
    this._vpcSecurityGroupRefs.internalValue = value;
  }
  public resetVpcSecurityGroupRefs() {
    this._vpcSecurityGroupRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupRefsInput() {
    return this._vpcSecurityGroupRefs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest k8s_documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest}
*/
export class DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest k8s_documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_documentdb_services_k8s_aws_db_cluster_v1alpha1_manifest',
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
  private _metadata = new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDocumentdbServicesK8SAwsDbClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
