// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#metadata DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadata;
  /**
  * DBClusterSpec defines the desired state of DBCluster. Contains the details of an Amazon Aurora DB cluster or Multi-AZ DB cluster. For an Amazon Aurora DB cluster, this data type is used as a response element in the operations CreateDBCluster, DeleteDBCluster, DescribeDBClusters, FailoverDBCluster, ModifyDBCluster, PromoteReadReplicaDBCluster, RestoreDBClusterFromS3, RestoreDBClusterFromSnapshot, RestoreDBClusterToPointInTime, StartDBCluster, and StopDBCluster. For a Multi-AZ DB cluster, this data type is used as a response element in the operations CreateDBCluster, DeleteDBCluster, DescribeDBClusters, FailoverDBCluster, ModifyDBCluster, RebootDBCluster, RestoreDBClusterFromSnapshot, and RestoreDBClusterToPointInTime. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ deployments with two readable standby DB instances (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the Amazon RDS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#spec DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpec;
}
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#annotations DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#labels DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFromToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFromToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFrom | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#from DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFrom;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefFrom) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#from DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefFrom) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#from DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefFrom) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#key DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable): any {
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


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#from DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#auto_pause DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#auto_pause}
  */
  readonly autoPause?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#max_capacity DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#min_capacity DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#seconds_before_timeout DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#seconds_before_timeout}
  */
  readonly secondsBeforeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#seconds_until_auto_pause DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#seconds_until_auto_pause}
  */
  readonly secondsUntilAutoPause?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#timeout_action DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#timeout_action}
  */
  readonly timeoutAction?: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfigurationToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_pause: cdktf.booleanToTerraform(struct!.autoPause),
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seconds_before_timeout: cdktf.numberToTerraform(struct!.secondsBeforeTimeout),
    seconds_until_auto_pause: cdktf.numberToTerraform(struct!.secondsUntilAutoPause),
    timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfigurationToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_pause: {
      value: cdktf.booleanToHclTerraform(struct!.autoPause),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktf.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds_before_timeout: {
      value: cdktf.numberToHclTerraform(struct!.secondsBeforeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds_until_auto_pause: {
      value: cdktf.numberToHclTerraform(struct!.secondsUntilAutoPause),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_action: {
      value: cdktf.stringToHclTerraform(struct!.timeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPause !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPause = this._autoPause;
    }
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._secondsBeforeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondsBeforeTimeout = this._secondsBeforeTimeout;
    }
    if (this._secondsUntilAutoPause !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondsUntilAutoPause = this._secondsUntilAutoPause;
    }
    if (this._timeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutAction = this._timeoutAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoPause = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._secondsBeforeTimeout = undefined;
      this._secondsUntilAutoPause = undefined;
      this._timeoutAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoPause = value.autoPause;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._secondsBeforeTimeout = value.secondsBeforeTimeout;
      this._secondsUntilAutoPause = value.secondsUntilAutoPause;
      this._timeoutAction = value.timeoutAction;
    }
  }

  // auto_pause - computed: false, optional: true, required: false
  private _autoPause?: boolean | cdktf.IResolvable; 
  public get autoPause() {
    return this.getBooleanAttribute('auto_pause');
  }
  public set autoPause(value: boolean | cdktf.IResolvable) {
    this._autoPause = value;
  }
  public resetAutoPause() {
    this._autoPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseInput() {
    return this._autoPause;
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // seconds_before_timeout - computed: false, optional: true, required: false
  private _secondsBeforeTimeout?: number; 
  public get secondsBeforeTimeout() {
    return this.getNumberAttribute('seconds_before_timeout');
  }
  public set secondsBeforeTimeout(value: number) {
    this._secondsBeforeTimeout = value;
  }
  public resetSecondsBeforeTimeout() {
    this._secondsBeforeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsBeforeTimeoutInput() {
    return this._secondsBeforeTimeout;
  }

  // seconds_until_auto_pause - computed: false, optional: true, required: false
  private _secondsUntilAutoPause?: number; 
  public get secondsUntilAutoPause() {
    return this.getNumberAttribute('seconds_until_auto_pause');
  }
  public set secondsUntilAutoPause(value: number) {
    this._secondsUntilAutoPause = value;
  }
  public resetSecondsUntilAutoPause() {
    this._secondsUntilAutoPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsUntilAutoPauseInput() {
    return this._secondsUntilAutoPause;
  }

  // timeout_action - computed: false, optional: true, required: false
  private _timeoutAction?: string; 
  public get timeoutAction() {
    return this.getStringAttribute('timeout_action');
  }
  public set timeoutAction(value: string) {
    this._timeoutAction = value;
  }
  public resetTimeoutAction() {
    this._timeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutActionInput() {
    return this._timeoutAction;
  }
}
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#max_capacity DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#min_capacity DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#min_capacity}
  */
  readonly minCapacity?: number;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfigurationToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfigurationToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktf.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
    }
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }
}
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#key DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#value DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#from DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom) {
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

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsOutputReference {
    return new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpec {
  /**
  * The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. This setting is required to create a Multi-AZ DB cluster. Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#allocated_storage DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#allocated_storage}
  */
  readonly allocatedStorage?: number;
  /**
  * A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically. Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#auto_minor_version_upgrade DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * A list of Availability Zones (AZs) where DB instances in the DB cluster can be created. For information on Amazon Web Services Regions and Availability Zones, see Choosing the Regions and Availability Zones (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#availability_zones DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * The target backtrack window, in seconds. To disable backtracking, set this value to 0. Default: 0 Constraints: * If specified, this value must be set to a number from 0 to 259,200 (72 hours). Valid for: Aurora MySQL DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#backtrack_window DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#backtrack_window}
  */
  readonly backtrackWindow?: number;
  /**
  * The number of days for which automated backups are retained. Default: 1 Constraints: * Must be a value from 1 to 35 Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#backup_retention_period DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * A value that indicates that the DB cluster should be associated with the specified CharacterSet. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#character_set_name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#character_set_name}
  */
  readonly characterSetName?: string;
  /**
  * A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#copy_tags_to_snapshot DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#copy_tags_to_snapshot}
  */
  readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
  /**
  * The name for your database of up to 64 alphanumeric characters. If you do not provide a name, Amazon RDS doesn't create a database in the DB cluster you are creating. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#database_name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#database_name}
  */
  readonly databaseName?: string;
  /**
  * The DB cluster identifier. This parameter is stored as a lowercase string. Constraints: * Must contain from 1 to 63 letters, numbers, or hyphens. * First character must be a letter. * Can't end with a hyphen or contain two consecutive hyphens. Example: my-cluster1 Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#db_cluster_identifier DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#db_cluster_identifier}
  */
  readonly dbClusterIdentifier: string;
  /**
  * The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6gd.xlarge. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes and availability for your engine, see DB instance class (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the Amazon RDS User Guide. This setting is required to create a Multi-AZ DB cluster. Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#db_cluster_instance_class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#db_cluster_instance_class}
  */
  readonly dbClusterInstanceClass?: string;
  /**
  * The name of the DB cluster parameter group to associate with this DB cluster. If you do not specify a value, then the default DB cluster parameter group for the specified DB engine and version is used. Constraints: * If supplied, must match the name of an existing DB cluster parameter group. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#db_cluster_parameter_group_name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#db_cluster_parameter_group_name}
  */
  readonly dbClusterParameterGroupName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#db_cluster_parameter_group_ref DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#db_cluster_parameter_group_ref}
  */
  readonly dbClusterParameterGroupRef?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRef;
  /**
  * A DB subnet group to associate with this DB cluster. This setting is required to create a Multi-AZ DB cluster. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mydbsubnetgroup Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#db_subnet_group_name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#db_subnet_group_name}
  */
  readonly dbSubnetGroupName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#db_subnet_group_ref DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#db_subnet_group_ref}
  */
  readonly dbSubnetGroupRef?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef;
  /**
  * Reserved for future use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#db_system_id DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#db_system_id}
  */
  readonly dbSystemId?: string;
  /**
  * A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#deletion_protection DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * DestinationRegion is used for presigning the request to a given region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#destination_region DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#destination_region}
  */
  readonly destinationRegion?: string;
  /**
  * The Active Directory directory ID to create the DB cluster in. For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster. For more information, see Kerberos authentication (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#domain DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#domain}
  */
  readonly domain?: string;
  /**
  * Specify the name of the IAM role to be used when making API calls to the Directory Service. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#domain_iam_role_name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#domain_iam_role_name}
  */
  readonly domainIamRoleName?: string;
  /**
  * The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. RDS for MySQL Possible values are error, general, and slowquery. RDS for PostgreSQL Possible values are postgresql and upgrade. Aurora MySQL Possible values are audit, error, general, and slowquery. Aurora PostgreSQL Possible value is postgresql. For more information about exporting CloudWatch Logs for Amazon RDS, see Publishing Database Logs to Amazon CloudWatch Logs (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the Amazon RDS User Guide. For more information about exporting CloudWatch Logs for Amazon Aurora, see Publishing Database Logs to Amazon CloudWatch Logs (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the Amazon Aurora User Guide. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#enable_cloudwatch_logs_exports DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#enable_cloudwatch_logs_exports}
  */
  readonly enableCloudwatchLogsExports?: string[];
  /**
  * A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an Aurora global database (GlobalCluster). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database. You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by the FailoverGlobalCluster API operation, but it does nothing until then. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#enable_global_write_forwarding DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#enable_global_write_forwarding}
  */
  readonly enableGlobalWriteForwarding?: boolean | cdktf.IResolvable;
  /**
  * A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless v1 DB cluster. By default, the HTTP endpoint is disabled. When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless v1 DB cluster. You can also query your database from inside the RDS console with the query editor. For more information, see Using the Data API for Aurora Serverless v1 (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#enable_http_endpoint DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#enable_http_endpoint}
  */
  readonly enableHttpEndpoint?: boolean | cdktf.IResolvable;
  /**
  * A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see IAM Database Authentication (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#enable_iam_database_authentication DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#enable_iam_database_authentication}
  */
  readonly enableIamDatabaseAuthentication?: boolean | cdktf.IResolvable;
  /**
  * A value that indicates whether to turn on Performance Insights for the DB cluster. For more information, see Using Amazon Performance Insights (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the Amazon RDS User Guide. Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#enable_performance_insights DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#enable_performance_insights}
  */
  readonly enablePerformanceInsights?: boolean | cdktf.IResolvable;
  /**
  * The name of the database engine to be used for this DB cluster. Valid Values: * aurora-mysql * aurora-postgresql * mysql * postgres Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#engine DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#engine}
  */
  readonly engine: string;
  /**
  * The DB engine mode of the DB cluster, either provisioned or serverless. The serverless engine mode only applies for Aurora Serverless v1 DB clusters. Limitations and requirements apply to some DB engine modes. For more information, see the following sections in the Amazon Aurora User Guide: * Limitations of Aurora Serverless v1 (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations) * Requirements for Aurora Serverless v2 (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html) * Limitations of parallel query (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-mysql-parallel-query.html#aurora-mysql-parallel-query-limitations) * Limitations of Aurora global databases (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations) Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#engine_mode DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#engine_mode}
  */
  readonly engineMode?: string;
  /**
  * The version number of the database engine to use. To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (MySQL 8.0-compatible), use the following command: aws rds describe-db-engine-versions --engine aurora-mysql --query 'DBEngineVersions[].EngineVersion' You can supply either 5.7 or 8.0 to use the default engine version for Aurora MySQL version 2 or version 3, respectively. To list all of the available engine versions for Aurora PostgreSQL, use the following command: aws rds describe-db-engine-versions --engine aurora-postgresql --query 'DBEngineVersions[].EngineVersion' To list all of the available engine versions for RDS for MySQL, use the following command: aws rds describe-db-engine-versions --engine mysql --query 'DBEngineVersions[].EngineVersion' To list all of the available engine versions for RDS for PostgreSQL, use the following command: aws rds describe-db-engine-versions --engine postgres --query 'DBEngineVersions[].EngineVersion' Aurora MySQL For information, see Database engine updates for Amazon Aurora MySQL (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) in the Amazon Aurora User Guide. Aurora PostgreSQL For information, see Amazon Aurora PostgreSQL releases and engine versions (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html) in the Amazon Aurora User Guide. MySQL For information, see Amazon RDS for MySQL (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the Amazon RDS User Guide. PostgreSQL For information, see Amazon RDS for PostgreSQL (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts) in the Amazon RDS User Guide. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#engine_version DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * The global cluster ID of an Aurora cluster that becomes the primary cluster in the new global database cluster. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#global_cluster_identifier DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#global_cluster_identifier}
  */
  readonly globalClusterIdentifier?: string;
  /**
  * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid IOPS values, see Provisioned IOPS storage (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the Amazon RDS User Guide. This setting is required to create a Multi-AZ DB cluster. Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB cluster. Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#iops DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#iops}
  */
  readonly iops?: number;
  /**
  * The Amazon Web Services KMS key identifier for an encrypted DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. When a KMS key isn't specified in KmsKeyId: * If ReplicationSourceIdentifier identifies an encrypted source, then Amazon RDS will use the KMS key used to encrypt the source. Otherwise, Amazon RDS will use your default KMS key. * If the StorageEncrypted parameter is enabled and ReplicationSourceIdentifier isn't specified, then Amazon RDS will use your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. If you create a read replica of an encrypted DB cluster in another Amazon Web Services Region, you must set KmsKeyId to a KMS key identifier that is valid in the destination Amazon Web Services Region. This KMS key is used to encrypt the read replica in that Amazon Web Services Region. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#kms_key_id DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#kms_key_ref DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#kms_key_ref}
  */
  readonly kmsKeyRef?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef;
  /**
  * A value that indicates whether to manage the master user password with Amazon Web Services Secrets Manager. For more information, see Password management with Amazon Web Services Secrets Manager (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the Amazon RDS User Guide and Password management with Amazon Web Services Secrets Manager (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the Amazon Aurora User Guide. Constraints: * Can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#manage_master_user_password DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#manage_master_user_password}
  */
  readonly manageMasterUserPassword?: boolean | cdktf.IResolvable;
  /**
  * The password for the master database user. This password can contain any printable ASCII character except '/', ```, or '@'. Constraints: * Must contain from 8 to 41 characters. * Can't be specified if ManageMasterUserPassword is turned on. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#master_user_password DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#master_user_password}
  */
  readonly masterUserPassword?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword;
  /**
  * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB cluster. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#master_user_secret_kms_key_id DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#master_user_secret_kms_key_id}
  */
  readonly masterUserSecretKmsKeyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#master_user_secret_kms_key_ref DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#master_user_secret_kms_key_ref}
  */
  readonly masterUserSecretKmsKeyRef?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef;
  /**
  * The name of the master user for the DB cluster. Constraints: * Must be 1 to 16 letters or numbers. * First character must be a letter. * Can't be a reserved word for the chosen database engine. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#master_username DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#master_username}
  */
  readonly masterUsername?: string;
  /**
  * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, also set MonitoringInterval to a value other than 0. Valid Values: 0, 1, 5, 10, 15, 30, 60 Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#monitoring_interval DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#monitoring_interval}
  */
  readonly monitoringInterval?: number;
  /**
  * The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see Setting up and enabling Enhanced Monitoring (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, supply a MonitoringRoleArn value. Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#monitoring_role_arn DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#monitoring_role_arn}
  */
  readonly monitoringRoleArn?: string;
  /**
  * The network type of the DB cluster. Valid values: * IPV4 * DUAL The network type is determined by the DBSubnetGroup specified for the DB cluster. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the Amazon Aurora User Guide. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#network_type DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#network_type}
  */
  readonly networkType?: string;
  /**
  * A value that indicates that the DB cluster should be associated with the specified option group. DB clusters are associated with a default option group that can't be modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#option_group_name DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#option_group_name}
  */
  readonly optionGroupName?: string;
  /**
  * The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you don't specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#performance_insights_kms_key_id DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#performance_insights_kms_key_id}
  */
  readonly performanceInsightsKmsKeyId?: string;
  /**
  * The number of days to retain Performance Insights data. The default is 7 days. The following values are valid: * 7 * month * 31, where month is a number of months from 1-23 * 731 For example, the following values are valid: * 93 (3 months * 31) * 341 (11 months * 31) * 589 (19 months * 31) * 731 If you specify a retention period such as 94, which isn't a valid value, RDS issues an error. Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#performance_insights_retention_period DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#performance_insights_retention_period}
  */
  readonly performanceInsightsRetentionPeriod?: number;
  /**
  * The port number on which the instances in the DB cluster accept connections. RDS for MySQL and Aurora MySQL Default: 3306 Valid values: 1150-65535 RDS for PostgreSQL and Aurora PostgreSQL Default: 5432 Valid values: 1150-65535 Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#port DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * When you are replicating a DB cluster from one Amazon Web Services GovCloud (US) Region to another, an URL that contains a Signature Version 4 signed request for the CreateDBCluster operation to be called in the source Amazon Web Services Region where the DB cluster is replicated from. Specify PreSignedUrl only when you are performing cross-Region replication from an encrypted DB cluster. The presigned URL must be a valid request for the CreateDBCluster API operation that can run in the source Amazon Web Services Region that contains the encrypted DB cluster to copy. The presigned URL request must contain the following parameter values: * KmsKeyId - The KMS key identifier for the KMS key to use to encrypt the copy of the DB cluster in the destination Amazon Web Services Region. This should refer to the same KMS key for both the CreateDBCluster operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL. * DestinationRegion - The name of the Amazon Web Services Region that Aurora read replica will be created in. * ReplicationSourceIdentifier - The DB cluster identifier for the encrypted DB cluster to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are copying an encrypted DB cluster from the us-west-2 Amazon Web Services Region, then your ReplicationSourceIdentifier would look like Example: arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1. To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) (https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html) and Signature Version 4 Signing Process (https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html). If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#pre_signed_url DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#pre_signed_url}
  */
  readonly preSignedUrl?: string;
  /**
  * The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. To view the time blocks available, see Backup window (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the Amazon Aurora User Guide. Constraints: * Must be in the format hh24:mi-hh24:mi. * Must be in Universal Coordinated Time (UTC). * Must not conflict with the preferred maintenance window. * Must be at least 30 minutes. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#preferred_backup_window DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#preferred_backup_window}
  */
  readonly preferredBackupWindow?: string;
  /**
  * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the Amazon Aurora User Guide. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#preferred_maintenance_window DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * A value that indicates whether the DB cluster is publicly accessible. When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it. When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies: * If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private. * If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public. If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies: * If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private. * If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public. Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#publicly_accessible DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#replication_source_identifier DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#replication_source_identifier}
  */
  readonly replicationSourceIdentifier?: string;
  /**
  * The date and time to restore the DB cluster to. Valid Values: Value must be a time in Universal Coordinated Time (UTC) format Constraints: * Must be before the latest restorable time for the DB instance * Must be specified if UseLatestRestorableTime parameter isn't provided * Can't be specified if the UseLatestRestorableTime parameter is enabled * Can't be specified if the RestoreType parameter is copy-on-write Example: 2015-03-07T23:45:00Z Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#restore_to_time DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#restore_to_time}
  */
  readonly restoreToTime?: string;
  /**
  * The type of restore to be performed. You can specify one of the following values: * full-copy - The new DB cluster is restored as a full copy of the source DB cluster. * copy-on-write - The new DB cluster is restored as a clone of the source DB cluster. Constraints: You can't specify copy-on-write if the engine version of the source DB cluster is earlier than 1.11. If you don't specify a RestoreType value, then the new DB cluster is restored as a full copy of the source DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#restore_type DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#restore_type}
  */
  readonly restoreType?: string;
  /**
  * For DB clusters in serverless DB engine mode, the scaling properties of the DB cluster. Valid for: Aurora DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#scaling_configuration DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#scaling_configuration}
  */
  readonly scalingConfiguration?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfiguration;
  /**
  * Contains the scaling configuration of an Aurora Serverless v2 DB cluster. For more information, see Using Amazon Aurora Serverless v2 (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the Amazon Aurora User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#serverless_v2_scaling_configuration DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#serverless_v2_scaling_configuration}
  */
  readonly serverlessV2ScalingConfiguration?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfiguration;
  /**
  * The identifier for the DB snapshot or DB cluster snapshot to restore from. You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot. Constraints: * Must match the identifier of an existing Snapshot. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#snapshot_identifier DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#snapshot_identifier}
  */
  readonly snapshotIdentifier?: string;
  /**
  * The identifier of the source DB cluster from which to restore. Constraints: * Must match the identifier of an existing DBCluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#source_db_cluster_identifier DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#source_db_cluster_identifier}
  */
  readonly sourceDbClusterIdentifier?: string;
  /**
  * SourceRegion is the source region where the resource exists. This is not sent over the wire and is only used for presigning. This value should always have the same region as the source ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#source_region DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#source_region}
  */
  readonly sourceRegion?: string;
  /**
  * A value that indicates whether the DB cluster is encrypted. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#storage_encrypted DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#storage_encrypted}
  */
  readonly storageEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Specifies the storage type to be associated with the DB cluster. This setting is required to create a Multi-AZ DB cluster. Valid values: io1 When specified, a value for the Iops parameter is required. Default: io1 Valid for: Multi-AZ DB clusters only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#storage_type DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#storage_type}
  */
  readonly storageType?: string;
  /**
  * Tags to assign to the DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#tags DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster isn't restored to the latest restorable backup time. Constraints: Can't be specified if RestoreToTime parameter is provided. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#use_latest_restorable_time DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#use_latest_restorable_time}
  */
  readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
  /**
  * A list of EC2 VPC security groups to associate with this DB cluster. Valid for: Aurora DB clusters and Multi-AZ DB clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#vpc_security_group_i_ds DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#vpc_security_group_i_ds}
  */
  readonly vpcSecurityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#vpc_security_group_refs DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest#vpc_security_group_refs}
  */
  readonly vpcSecurityGroupRefs?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs[] | cdktf.IResolvable;
}

export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_storage: cdktf.numberToTerraform(struct!.allocatedStorage),
    auto_minor_version_upgrade: cdktf.booleanToTerraform(struct!.autoMinorVersionUpgrade),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    backtrack_window: cdktf.numberToTerraform(struct!.backtrackWindow),
    backup_retention_period: cdktf.numberToTerraform(struct!.backupRetentionPeriod),
    character_set_name: cdktf.stringToTerraform(struct!.characterSetName),
    copy_tags_to_snapshot: cdktf.booleanToTerraform(struct!.copyTagsToSnapshot),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    db_cluster_identifier: cdktf.stringToTerraform(struct!.dbClusterIdentifier),
    db_cluster_instance_class: cdktf.stringToTerraform(struct!.dbClusterInstanceClass),
    db_cluster_parameter_group_name: cdktf.stringToTerraform(struct!.dbClusterParameterGroupName),
    db_cluster_parameter_group_ref: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefToTerraform(struct!.dbClusterParameterGroupRef),
    db_subnet_group_name: cdktf.stringToTerraform(struct!.dbSubnetGroupName),
    db_subnet_group_ref: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefToTerraform(struct!.dbSubnetGroupRef),
    db_system_id: cdktf.stringToTerraform(struct!.dbSystemId),
    deletion_protection: cdktf.booleanToTerraform(struct!.deletionProtection),
    destination_region: cdktf.stringToTerraform(struct!.destinationRegion),
    domain: cdktf.stringToTerraform(struct!.domain),
    domain_iam_role_name: cdktf.stringToTerraform(struct!.domainIamRoleName),
    enable_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableCloudwatchLogsExports),
    enable_global_write_forwarding: cdktf.booleanToTerraform(struct!.enableGlobalWriteForwarding),
    enable_http_endpoint: cdktf.booleanToTerraform(struct!.enableHttpEndpoint),
    enable_iam_database_authentication: cdktf.booleanToTerraform(struct!.enableIamDatabaseAuthentication),
    enable_performance_insights: cdktf.booleanToTerraform(struct!.enablePerformanceInsights),
    engine: cdktf.stringToTerraform(struct!.engine),
    engine_mode: cdktf.stringToTerraform(struct!.engineMode),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    global_cluster_identifier: cdktf.stringToTerraform(struct!.globalClusterIdentifier),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_ref: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct!.kmsKeyRef),
    manage_master_user_password: cdktf.booleanToTerraform(struct!.manageMasterUserPassword),
    master_user_password: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordToTerraform(struct!.masterUserPassword),
    master_user_secret_kms_key_id: cdktf.stringToTerraform(struct!.masterUserSecretKmsKeyId),
    master_user_secret_kms_key_ref: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefToTerraform(struct!.masterUserSecretKmsKeyRef),
    master_username: cdktf.stringToTerraform(struct!.masterUsername),
    monitoring_interval: cdktf.numberToTerraform(struct!.monitoringInterval),
    monitoring_role_arn: cdktf.stringToTerraform(struct!.monitoringRoleArn),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    option_group_name: cdktf.stringToTerraform(struct!.optionGroupName),
    performance_insights_kms_key_id: cdktf.stringToTerraform(struct!.performanceInsightsKmsKeyId),
    performance_insights_retention_period: cdktf.numberToTerraform(struct!.performanceInsightsRetentionPeriod),
    port: cdktf.numberToTerraform(struct!.port),
    pre_signed_url: cdktf.stringToTerraform(struct!.preSignedUrl),
    preferred_backup_window: cdktf.stringToTerraform(struct!.preferredBackupWindow),
    preferred_maintenance_window: cdktf.stringToTerraform(struct!.preferredMaintenanceWindow),
    publicly_accessible: cdktf.booleanToTerraform(struct!.publiclyAccessible),
    replication_source_identifier: cdktf.stringToTerraform(struct!.replicationSourceIdentifier),
    restore_to_time: cdktf.stringToTerraform(struct!.restoreToTime),
    restore_type: cdktf.stringToTerraform(struct!.restoreType),
    scaling_configuration: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfigurationToTerraform(struct!.scalingConfiguration),
    serverless_v2_scaling_configuration: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfigurationToTerraform(struct!.serverlessV2ScalingConfiguration),
    snapshot_identifier: cdktf.stringToTerraform(struct!.snapshotIdentifier),
    source_db_cluster_identifier: cdktf.stringToTerraform(struct!.sourceDbClusterIdentifier),
    source_region: cdktf.stringToTerraform(struct!.sourceRegion),
    storage_encrypted: cdktf.booleanToTerraform(struct!.storageEncrypted),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    tags: cdktf.listMapper(dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    use_latest_restorable_time: cdktf.booleanToTerraform(struct!.useLatestRestorableTime),
    vpc_security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcSecurityGroupIDs),
    vpc_security_group_refs: cdktf.listMapper(dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsToTerraform, false)(struct!.vpcSecurityGroupRefs),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_storage: {
      value: cdktf.numberToHclTerraform(struct!.allocatedStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_minor_version_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoMinorVersionUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    backtrack_window: {
      value: cdktf.numberToHclTerraform(struct!.backtrackWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_retention_period: {
      value: cdktf.numberToHclTerraform(struct!.backupRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    character_set_name: {
      value: cdktf.stringToHclTerraform(struct!.characterSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_tags_to_snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.copyTagsToSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_cluster_instance_class: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterInstanceClass),
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
    db_cluster_parameter_group_ref: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefToHclTerraform(struct!.dbClusterParameterGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRef",
    },
    db_subnet_group_name: {
      value: cdktf.stringToHclTerraform(struct!.dbSubnetGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_subnet_group_ref: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefToHclTerraform(struct!.dbSubnetGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef",
    },
    db_system_id: {
      value: cdktf.stringToHclTerraform(struct!.dbSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_iam_role_name: {
      value: cdktf.stringToHclTerraform(struct!.domainIamRoleName),
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
    enable_global_write_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.enableGlobalWriteForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_http_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_iam_database_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.enableIamDatabaseAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_performance_insights: {
      value: cdktf.booleanToHclTerraform(struct!.enablePerformanceInsights),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_mode: {
      value: cdktf.stringToHclTerraform(struct!.engineMode),
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
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_ref: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct!.kmsKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef",
    },
    manage_master_user_password: {
      value: cdktf.booleanToHclTerraform(struct!.manageMasterUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_user_password: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordToHclTerraform(struct!.masterUserPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword",
    },
    master_user_secret_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.masterUserSecretKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_secret_kms_key_ref: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefToHclTerraform(struct!.masterUserSecretKmsKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef",
    },
    master_username: {
      value: cdktf.stringToHclTerraform(struct!.masterUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_interval: {
      value: cdktf.numberToHclTerraform(struct!.monitoringInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitoring_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.monitoringRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_group_name: {
      value: cdktf.stringToHclTerraform(struct!.optionGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_insights_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.performanceInsightsKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_insights_retention_period: {
      value: cdktf.numberToHclTerraform(struct!.performanceInsightsRetentionPeriod),
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
    publicly_accessible: {
      value: cdktf.booleanToHclTerraform(struct!.publiclyAccessible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replication_source_identifier: {
      value: cdktf.stringToHclTerraform(struct!.replicationSourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_to_time: {
      value: cdktf.stringToHclTerraform(struct!.restoreToTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_type: {
      value: cdktf.stringToHclTerraform(struct!.restoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_configuration: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfigurationToHclTerraform(struct!.scalingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfiguration",
    },
    serverless_v2_scaling_configuration: {
      value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfigurationToHclTerraform(struct!.serverlessV2ScalingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfiguration",
    },
    snapshot_identifier: {
      value: cdktf.stringToHclTerraform(struct!.snapshotIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_db_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.sourceDbClusterIdentifier),
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
      value: cdktf.listMapperHcl(dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsList",
    },
    use_latest_restorable_time: {
      value: cdktf.booleanToHclTerraform(struct!.useLatestRestorableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpc_security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcSecurityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vpc_security_group_refs: {
      value: cdktf.listMapperHcl(dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsToHclTerraform, false)(struct!.vpcSecurityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedStorage = this._allocatedStorage;
    }
    if (this._autoMinorVersionUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMinorVersionUpgrade = this._autoMinorVersionUpgrade;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._backtrackWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.backtrackWindow = this._backtrackWindow;
    }
    if (this._backupRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPeriod = this._backupRetentionPeriod;
    }
    if (this._characterSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSetName = this._characterSetName;
    }
    if (this._copyTagsToSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTagsToSnapshot = this._copyTagsToSnapshot;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dbClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterIdentifier = this._dbClusterIdentifier;
    }
    if (this._dbClusterInstanceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterInstanceClass = this._dbClusterInstanceClass;
    }
    if (this._dbClusterParameterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterParameterGroupName = this._dbClusterParameterGroupName;
    }
    if (this._dbClusterParameterGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterParameterGroupRef = this._dbClusterParameterGroupRef?.internalValue;
    }
    if (this._dbSubnetGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSubnetGroupName = this._dbSubnetGroupName;
    }
    if (this._dbSubnetGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSubnetGroupRef = this._dbSubnetGroupRef?.internalValue;
    }
    if (this._dbSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSystemId = this._dbSystemId;
    }
    if (this._deletionProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtection = this._deletionProtection;
    }
    if (this._destinationRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRegion = this._destinationRegion;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._domainIamRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainIamRoleName = this._domainIamRoleName;
    }
    if (this._enableCloudwatchLogsExports !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCloudwatchLogsExports = this._enableCloudwatchLogsExports;
    }
    if (this._enableGlobalWriteForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGlobalWriteForwarding = this._enableGlobalWriteForwarding;
    }
    if (this._enableHttpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttpEndpoint = this._enableHttpEndpoint;
    }
    if (this._enableIamDatabaseAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIamDatabaseAuthentication = this._enableIamDatabaseAuthentication;
    }
    if (this._enablePerformanceInsights !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePerformanceInsights = this._enablePerformanceInsights;
    }
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._engineMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineMode = this._engineMode;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._globalClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalClusterIdentifier = this._globalClusterIdentifier;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyRef = this._kmsKeyRef?.internalValue;
    }
    if (this._manageMasterUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageMasterUserPassword = this._manageMasterUserPassword;
    }
    if (this._masterUserPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserPassword = this._masterUserPassword?.internalValue;
    }
    if (this._masterUserSecretKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserSecretKmsKeyId = this._masterUserSecretKmsKeyId;
    }
    if (this._masterUserSecretKmsKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserSecretKmsKeyRef = this._masterUserSecretKmsKeyRef?.internalValue;
    }
    if (this._masterUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUsername = this._masterUsername;
    }
    if (this._monitoringInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringInterval = this._monitoringInterval;
    }
    if (this._monitoringRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRoleArn = this._monitoringRoleArn;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._optionGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionGroupName = this._optionGroupName;
    }
    if (this._performanceInsightsKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceInsightsKmsKeyId = this._performanceInsightsKmsKeyId;
    }
    if (this._performanceInsightsRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceInsightsRetentionPeriod = this._performanceInsightsRetentionPeriod;
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
    if (this._publiclyAccessible !== undefined) {
      hasAnyValues = true;
      internalValueResult.publiclyAccessible = this._publiclyAccessible;
    }
    if (this._replicationSourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSourceIdentifier = this._replicationSourceIdentifier;
    }
    if (this._restoreToTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreToTime = this._restoreToTime;
    }
    if (this._restoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreType = this._restoreType;
    }
    if (this._scalingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingConfiguration = this._scalingConfiguration?.internalValue;
    }
    if (this._serverlessV2ScalingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessV2ScalingConfiguration = this._serverlessV2ScalingConfiguration?.internalValue;
    }
    if (this._snapshotIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotIdentifier = this._snapshotIdentifier;
    }
    if (this._sourceDbClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDbClusterIdentifier = this._sourceDbClusterIdentifier;
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
    if (this._useLatestRestorableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLatestRestorableTime = this._useLatestRestorableTime;
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedStorage = undefined;
      this._autoMinorVersionUpgrade = undefined;
      this._availabilityZones = undefined;
      this._backtrackWindow = undefined;
      this._backupRetentionPeriod = undefined;
      this._characterSetName = undefined;
      this._copyTagsToSnapshot = undefined;
      this._databaseName = undefined;
      this._dbClusterIdentifier = undefined;
      this._dbClusterInstanceClass = undefined;
      this._dbClusterParameterGroupName = undefined;
      this._dbClusterParameterGroupRef.internalValue = undefined;
      this._dbSubnetGroupName = undefined;
      this._dbSubnetGroupRef.internalValue = undefined;
      this._dbSystemId = undefined;
      this._deletionProtection = undefined;
      this._destinationRegion = undefined;
      this._domain = undefined;
      this._domainIamRoleName = undefined;
      this._enableCloudwatchLogsExports = undefined;
      this._enableGlobalWriteForwarding = undefined;
      this._enableHttpEndpoint = undefined;
      this._enableIamDatabaseAuthentication = undefined;
      this._enablePerformanceInsights = undefined;
      this._engine = undefined;
      this._engineMode = undefined;
      this._engineVersion = undefined;
      this._globalClusterIdentifier = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._kmsKeyRef.internalValue = undefined;
      this._manageMasterUserPassword = undefined;
      this._masterUserPassword.internalValue = undefined;
      this._masterUserSecretKmsKeyId = undefined;
      this._masterUserSecretKmsKeyRef.internalValue = undefined;
      this._masterUsername = undefined;
      this._monitoringInterval = undefined;
      this._monitoringRoleArn = undefined;
      this._networkType = undefined;
      this._optionGroupName = undefined;
      this._performanceInsightsKmsKeyId = undefined;
      this._performanceInsightsRetentionPeriod = undefined;
      this._port = undefined;
      this._preSignedUrl = undefined;
      this._preferredBackupWindow = undefined;
      this._preferredMaintenanceWindow = undefined;
      this._publiclyAccessible = undefined;
      this._replicationSourceIdentifier = undefined;
      this._restoreToTime = undefined;
      this._restoreType = undefined;
      this._scalingConfiguration.internalValue = undefined;
      this._serverlessV2ScalingConfiguration.internalValue = undefined;
      this._snapshotIdentifier = undefined;
      this._sourceDbClusterIdentifier = undefined;
      this._sourceRegion = undefined;
      this._storageEncrypted = undefined;
      this._storageType = undefined;
      this._tags.internalValue = undefined;
      this._useLatestRestorableTime = undefined;
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
      this._allocatedStorage = value.allocatedStorage;
      this._autoMinorVersionUpgrade = value.autoMinorVersionUpgrade;
      this._availabilityZones = value.availabilityZones;
      this._backtrackWindow = value.backtrackWindow;
      this._backupRetentionPeriod = value.backupRetentionPeriod;
      this._characterSetName = value.characterSetName;
      this._copyTagsToSnapshot = value.copyTagsToSnapshot;
      this._databaseName = value.databaseName;
      this._dbClusterIdentifier = value.dbClusterIdentifier;
      this._dbClusterInstanceClass = value.dbClusterInstanceClass;
      this._dbClusterParameterGroupName = value.dbClusterParameterGroupName;
      this._dbClusterParameterGroupRef.internalValue = value.dbClusterParameterGroupRef;
      this._dbSubnetGroupName = value.dbSubnetGroupName;
      this._dbSubnetGroupRef.internalValue = value.dbSubnetGroupRef;
      this._dbSystemId = value.dbSystemId;
      this._deletionProtection = value.deletionProtection;
      this._destinationRegion = value.destinationRegion;
      this._domain = value.domain;
      this._domainIamRoleName = value.domainIamRoleName;
      this._enableCloudwatchLogsExports = value.enableCloudwatchLogsExports;
      this._enableGlobalWriteForwarding = value.enableGlobalWriteForwarding;
      this._enableHttpEndpoint = value.enableHttpEndpoint;
      this._enableIamDatabaseAuthentication = value.enableIamDatabaseAuthentication;
      this._enablePerformanceInsights = value.enablePerformanceInsights;
      this._engine = value.engine;
      this._engineMode = value.engineMode;
      this._engineVersion = value.engineVersion;
      this._globalClusterIdentifier = value.globalClusterIdentifier;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyRef.internalValue = value.kmsKeyRef;
      this._manageMasterUserPassword = value.manageMasterUserPassword;
      this._masterUserPassword.internalValue = value.masterUserPassword;
      this._masterUserSecretKmsKeyId = value.masterUserSecretKmsKeyId;
      this._masterUserSecretKmsKeyRef.internalValue = value.masterUserSecretKmsKeyRef;
      this._masterUsername = value.masterUsername;
      this._monitoringInterval = value.monitoringInterval;
      this._monitoringRoleArn = value.monitoringRoleArn;
      this._networkType = value.networkType;
      this._optionGroupName = value.optionGroupName;
      this._performanceInsightsKmsKeyId = value.performanceInsightsKmsKeyId;
      this._performanceInsightsRetentionPeriod = value.performanceInsightsRetentionPeriod;
      this._port = value.port;
      this._preSignedUrl = value.preSignedUrl;
      this._preferredBackupWindow = value.preferredBackupWindow;
      this._preferredMaintenanceWindow = value.preferredMaintenanceWindow;
      this._publiclyAccessible = value.publiclyAccessible;
      this._replicationSourceIdentifier = value.replicationSourceIdentifier;
      this._restoreToTime = value.restoreToTime;
      this._restoreType = value.restoreType;
      this._scalingConfiguration.internalValue = value.scalingConfiguration;
      this._serverlessV2ScalingConfiguration.internalValue = value.serverlessV2ScalingConfiguration;
      this._snapshotIdentifier = value.snapshotIdentifier;
      this._sourceDbClusterIdentifier = value.sourceDbClusterIdentifier;
      this._sourceRegion = value.sourceRegion;
      this._storageEncrypted = value.storageEncrypted;
      this._storageType = value.storageType;
      this._tags.internalValue = value.tags;
      this._useLatestRestorableTime = value.useLatestRestorableTime;
      this._vpcSecurityGroupIDs = value.vpcSecurityGroupIDs;
      this._vpcSecurityGroupRefs.internalValue = value.vpcSecurityGroupRefs;
    }
  }

  // allocated_storage - computed: false, optional: true, required: false
  private _allocatedStorage?: number; 
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }
  public set allocatedStorage(value: number) {
    this._allocatedStorage = value;
  }
  public resetAllocatedStorage() {
    this._allocatedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedStorageInput() {
    return this._allocatedStorage;
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
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

  // backtrack_window - computed: false, optional: true, required: false
  private _backtrackWindow?: number; 
  public get backtrackWindow() {
    return this.getNumberAttribute('backtrack_window');
  }
  public set backtrackWindow(value: number) {
    this._backtrackWindow = value;
  }
  public resetBacktrackWindow() {
    this._backtrackWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backtrackWindowInput() {
    return this._backtrackWindow;
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

  // character_set_name - computed: false, optional: true, required: false
  private _characterSetName?: string; 
  public get characterSetName() {
    return this.getStringAttribute('character_set_name');
  }
  public set characterSetName(value: string) {
    this._characterSetName = value;
  }
  public resetCharacterSetName() {
    this._characterSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetNameInput() {
    return this._characterSetName;
  }

  // copy_tags_to_snapshot - computed: false, optional: true, required: false
  private _copyTagsToSnapshot?: boolean | cdktf.IResolvable; 
  public get copyTagsToSnapshot() {
    return this.getBooleanAttribute('copy_tags_to_snapshot');
  }
  public set copyTagsToSnapshot(value: boolean | cdktf.IResolvable) {
    this._copyTagsToSnapshot = value;
  }
  public resetCopyTagsToSnapshot() {
    this._copyTagsToSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToSnapshotInput() {
    return this._copyTagsToSnapshot;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // db_cluster_instance_class - computed: false, optional: true, required: false
  private _dbClusterInstanceClass?: string; 
  public get dbClusterInstanceClass() {
    return this.getStringAttribute('db_cluster_instance_class');
  }
  public set dbClusterInstanceClass(value: string) {
    this._dbClusterInstanceClass = value;
  }
  public resetDbClusterInstanceClass() {
    this._dbClusterInstanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterInstanceClassInput() {
    return this._dbClusterInstanceClass;
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

  // db_cluster_parameter_group_ref - computed: false, optional: true, required: false
  private _dbClusterParameterGroupRef = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRefOutputReference(this, "db_cluster_parameter_group_ref");
  public get dbClusterParameterGroupRef() {
    return this._dbClusterParameterGroupRef;
  }
  public putDbClusterParameterGroupRef(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbClusterParameterGroupRef) {
    this._dbClusterParameterGroupRef.internalValue = value;
  }
  public resetDbClusterParameterGroupRef() {
    this._dbClusterParameterGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterParameterGroupRefInput() {
    return this._dbClusterParameterGroupRef.internalValue;
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
  private _dbSubnetGroupRef = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRefOutputReference(this, "db_subnet_group_ref");
  public get dbSubnetGroupRef() {
    return this._dbSubnetGroupRef;
  }
  public putDbSubnetGroupRef(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecDbSubnetGroupRef) {
    this._dbSubnetGroupRef.internalValue = value;
  }
  public resetDbSubnetGroupRef() {
    this._dbSubnetGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSubnetGroupRefInput() {
    return this._dbSubnetGroupRef.internalValue;
  }

  // db_system_id - computed: false, optional: true, required: false
  private _dbSystemId?: string; 
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }
  public resetDbSystemId() {
    this._dbSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSystemIdInput() {
    return this._dbSystemId;
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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_iam_role_name - computed: false, optional: true, required: false
  private _domainIamRoleName?: string; 
  public get domainIamRoleName() {
    return this.getStringAttribute('domain_iam_role_name');
  }
  public set domainIamRoleName(value: string) {
    this._domainIamRoleName = value;
  }
  public resetDomainIamRoleName() {
    this._domainIamRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIamRoleNameInput() {
    return this._domainIamRoleName;
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

  // enable_global_write_forwarding - computed: false, optional: true, required: false
  private _enableGlobalWriteForwarding?: boolean | cdktf.IResolvable; 
  public get enableGlobalWriteForwarding() {
    return this.getBooleanAttribute('enable_global_write_forwarding');
  }
  public set enableGlobalWriteForwarding(value: boolean | cdktf.IResolvable) {
    this._enableGlobalWriteForwarding = value;
  }
  public resetEnableGlobalWriteForwarding() {
    this._enableGlobalWriteForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGlobalWriteForwardingInput() {
    return this._enableGlobalWriteForwarding;
  }

  // enable_http_endpoint - computed: false, optional: true, required: false
  private _enableHttpEndpoint?: boolean | cdktf.IResolvable; 
  public get enableHttpEndpoint() {
    return this.getBooleanAttribute('enable_http_endpoint');
  }
  public set enableHttpEndpoint(value: boolean | cdktf.IResolvable) {
    this._enableHttpEndpoint = value;
  }
  public resetEnableHttpEndpoint() {
    this._enableHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpEndpointInput() {
    return this._enableHttpEndpoint;
  }

  // enable_iam_database_authentication - computed: false, optional: true, required: false
  private _enableIamDatabaseAuthentication?: boolean | cdktf.IResolvable; 
  public get enableIamDatabaseAuthentication() {
    return this.getBooleanAttribute('enable_iam_database_authentication');
  }
  public set enableIamDatabaseAuthentication(value: boolean | cdktf.IResolvable) {
    this._enableIamDatabaseAuthentication = value;
  }
  public resetEnableIamDatabaseAuthentication() {
    this._enableIamDatabaseAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIamDatabaseAuthenticationInput() {
    return this._enableIamDatabaseAuthentication;
  }

  // enable_performance_insights - computed: false, optional: true, required: false
  private _enablePerformanceInsights?: boolean | cdktf.IResolvable; 
  public get enablePerformanceInsights() {
    return this.getBooleanAttribute('enable_performance_insights');
  }
  public set enablePerformanceInsights(value: boolean | cdktf.IResolvable) {
    this._enablePerformanceInsights = value;
  }
  public resetEnablePerformanceInsights() {
    this._enablePerformanceInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerformanceInsightsInput() {
    return this._enablePerformanceInsights;
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

  // engine_mode - computed: false, optional: true, required: false
  private _engineMode?: string; 
  public get engineMode() {
    return this.getStringAttribute('engine_mode');
  }
  public set engineMode(value: string) {
    this._engineMode = value;
  }
  public resetEngineMode() {
    this._engineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineModeInput() {
    return this._engineMode;
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

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
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
  private _kmsKeyRef = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRefOutputReference(this, "kms_key_ref");
  public get kmsKeyRef() {
    return this._kmsKeyRef;
  }
  public putKmsKeyRef(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecKmsKeyRef) {
    this._kmsKeyRef.internalValue = value;
  }
  public resetKmsKeyRef() {
    this._kmsKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyRefInput() {
    return this._kmsKeyRef.internalValue;
  }

  // manage_master_user_password - computed: false, optional: true, required: false
  private _manageMasterUserPassword?: boolean | cdktf.IResolvable; 
  public get manageMasterUserPassword() {
    return this.getBooleanAttribute('manage_master_user_password');
  }
  public set manageMasterUserPassword(value: boolean | cdktf.IResolvable) {
    this._manageMasterUserPassword = value;
  }
  public resetManageMasterUserPassword() {
    this._manageMasterUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageMasterUserPasswordInput() {
    return this._manageMasterUserPassword;
  }

  // master_user_password - computed: false, optional: true, required: false
  private _masterUserPassword = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPasswordOutputReference(this, "master_user_password");
  public get masterUserPassword() {
    return this._masterUserPassword;
  }
  public putMasterUserPassword(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserPassword) {
    this._masterUserPassword.internalValue = value;
  }
  public resetMasterUserPassword() {
    this._masterUserPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserPasswordInput() {
    return this._masterUserPassword.internalValue;
  }

  // master_user_secret_kms_key_id - computed: false, optional: true, required: false
  private _masterUserSecretKmsKeyId?: string; 
  public get masterUserSecretKmsKeyId() {
    return this.getStringAttribute('master_user_secret_kms_key_id');
  }
  public set masterUserSecretKmsKeyId(value: string) {
    this._masterUserSecretKmsKeyId = value;
  }
  public resetMasterUserSecretKmsKeyId() {
    this._masterUserSecretKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserSecretKmsKeyIdInput() {
    return this._masterUserSecretKmsKeyId;
  }

  // master_user_secret_kms_key_ref - computed: false, optional: true, required: false
  private _masterUserSecretKmsKeyRef = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefOutputReference(this, "master_user_secret_kms_key_ref");
  public get masterUserSecretKmsKeyRef() {
    return this._masterUserSecretKmsKeyRef;
  }
  public putMasterUserSecretKmsKeyRef(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef) {
    this._masterUserSecretKmsKeyRef.internalValue = value;
  }
  public resetMasterUserSecretKmsKeyRef() {
    this._masterUserSecretKmsKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserSecretKmsKeyRefInput() {
    return this._masterUserSecretKmsKeyRef.internalValue;
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

  // monitoring_interval - computed: false, optional: true, required: false
  private _monitoringInterval?: number; 
  public get monitoringInterval() {
    return this.getNumberAttribute('monitoring_interval');
  }
  public set monitoringInterval(value: number) {
    this._monitoringInterval = value;
  }
  public resetMonitoringInterval() {
    this._monitoringInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringIntervalInput() {
    return this._monitoringInterval;
  }

  // monitoring_role_arn - computed: false, optional: true, required: false
  private _monitoringRoleArn?: string; 
  public get monitoringRoleArn() {
    return this.getStringAttribute('monitoring_role_arn');
  }
  public set monitoringRoleArn(value: string) {
    this._monitoringRoleArn = value;
  }
  public resetMonitoringRoleArn() {
    this._monitoringRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRoleArnInput() {
    return this._monitoringRoleArn;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // option_group_name - computed: false, optional: true, required: false
  private _optionGroupName?: string; 
  public get optionGroupName() {
    return this.getStringAttribute('option_group_name');
  }
  public set optionGroupName(value: string) {
    this._optionGroupName = value;
  }
  public resetOptionGroupName() {
    this._optionGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionGroupNameInput() {
    return this._optionGroupName;
  }

  // performance_insights_kms_key_id - computed: false, optional: true, required: false
  private _performanceInsightsKmsKeyId?: string; 
  public get performanceInsightsKmsKeyId() {
    return this.getStringAttribute('performance_insights_kms_key_id');
  }
  public set performanceInsightsKmsKeyId(value: string) {
    this._performanceInsightsKmsKeyId = value;
  }
  public resetPerformanceInsightsKmsKeyId() {
    this._performanceInsightsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsKmsKeyIdInput() {
    return this._performanceInsightsKmsKeyId;
  }

  // performance_insights_retention_period - computed: false, optional: true, required: false
  private _performanceInsightsRetentionPeriod?: number; 
  public get performanceInsightsRetentionPeriod() {
    return this.getNumberAttribute('performance_insights_retention_period');
  }
  public set performanceInsightsRetentionPeriod(value: number) {
    this._performanceInsightsRetentionPeriod = value;
  }
  public resetPerformanceInsightsRetentionPeriod() {
    this._performanceInsightsRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsRetentionPeriodInput() {
    return this._performanceInsightsRetentionPeriod;
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

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktf.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
  }

  // replication_source_identifier - computed: false, optional: true, required: false
  private _replicationSourceIdentifier?: string; 
  public get replicationSourceIdentifier() {
    return this.getStringAttribute('replication_source_identifier');
  }
  public set replicationSourceIdentifier(value: string) {
    this._replicationSourceIdentifier = value;
  }
  public resetReplicationSourceIdentifier() {
    this._replicationSourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSourceIdentifierInput() {
    return this._replicationSourceIdentifier;
  }

  // restore_to_time - computed: false, optional: true, required: false
  private _restoreToTime?: string; 
  public get restoreToTime() {
    return this.getStringAttribute('restore_to_time');
  }
  public set restoreToTime(value: string) {
    this._restoreToTime = value;
  }
  public resetRestoreToTime() {
    this._restoreToTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreToTimeInput() {
    return this._restoreToTime;
  }

  // restore_type - computed: false, optional: true, required: false
  private _restoreType?: string; 
  public get restoreType() {
    return this.getStringAttribute('restore_type');
  }
  public set restoreType(value: string) {
    this._restoreType = value;
  }
  public resetRestoreType() {
    this._restoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTypeInput() {
    return this._restoreType;
  }

  // scaling_configuration - computed: false, optional: true, required: false
  private _scalingConfiguration = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfigurationOutputReference(this, "scaling_configuration");
  public get scalingConfiguration() {
    return this._scalingConfiguration;
  }
  public putScalingConfiguration(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecScalingConfiguration) {
    this._scalingConfiguration.internalValue = value;
  }
  public resetScalingConfiguration() {
    this._scalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationInput() {
    return this._scalingConfiguration.internalValue;
  }

  // serverless_v2_scaling_configuration - computed: false, optional: true, required: false
  private _serverlessV2ScalingConfiguration = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfigurationOutputReference(this, "serverless_v2_scaling_configuration");
  public get serverlessV2ScalingConfiguration() {
    return this._serverlessV2ScalingConfiguration;
  }
  public putServerlessV2ScalingConfiguration(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecServerlessV2ScalingConfiguration) {
    this._serverlessV2ScalingConfiguration.internalValue = value;
  }
  public resetServerlessV2ScalingConfiguration() {
    this._serverlessV2ScalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessV2ScalingConfigurationInput() {
    return this._serverlessV2ScalingConfiguration.internalValue;
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

  // source_db_cluster_identifier - computed: false, optional: true, required: false
  private _sourceDbClusterIdentifier?: string; 
  public get sourceDbClusterIdentifier() {
    return this.getStringAttribute('source_db_cluster_identifier');
  }
  public set sourceDbClusterIdentifier(value: string) {
    this._sourceDbClusterIdentifier = value;
  }
  public resetSourceDbClusterIdentifier() {
    this._sourceDbClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbClusterIdentifierInput() {
    return this._sourceDbClusterIdentifier;
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
  private _tags = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // use_latest_restorable_time - computed: false, optional: true, required: false
  private _useLatestRestorableTime?: boolean | cdktf.IResolvable; 
  public get useLatestRestorableTime() {
    return this.getBooleanAttribute('use_latest_restorable_time');
  }
  public set useLatestRestorableTime(value: boolean | cdktf.IResolvable) {
    this._useLatestRestorableTime = value;
  }
  public resetUseLatestRestorableTime() {
    this._useLatestRestorableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLatestRestorableTimeInput() {
    return this._useLatestRestorableTime;
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
  private _vpcSecurityGroupRefs = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefsList(this, "vpc_security_group_refs", false);
  public get vpcSecurityGroupRefs() {
    return this._vpcSecurityGroupRefs;
  }
  public putVpcSecurityGroupRefs(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecVpcSecurityGroupRefs[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest k8s_rds_services_k8s_aws_db_cluster_v1alpha1_manifest}
*/
export class DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_rds_services_k8s_aws_db_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRdsServicesK8SAwsDbClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_rds_services_k8s_aws_db_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/rds_services_k8s_aws_db_cluster_v1alpha1_manifest k8s_rds_services_k8s_aws_db_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_rds_services_k8s_aws_db_cluster_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRdsServicesK8SAwsDbClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
