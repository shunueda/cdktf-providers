// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#metadata DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata;
  /**
  * DBInstanceSpec defines the desired state of DBInstance. Contains the details of an Amazon RDS DB instance. This data type is used as a response element in the operations CreateDBInstance, CreateDBInstanceReadReplica, DeleteDBInstance, DescribeDBInstances, ModifyDBInstance, PromoteReadReplica, RebootDBInstance, RestoreDBInstanceFromDBSnapshot, RestoreDBInstanceFromS3, RestoreDBInstanceToPointInTime, StartDBInstance, and StopDBInstance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#spec DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpec;
}
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#annotations DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#labels DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFromToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFromToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFrom | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#from DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFrom;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefFrom) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFromToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFromToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#from DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFrom;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFromToTerraform(struct!.from),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefFrom) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#from DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFrom;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefFrom) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPassword {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#key DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPasswordToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable): any {
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


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPasswordToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#from DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefFrom) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#value DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeaturesToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeaturesToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeatures | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeaturesList extends cdktf.ComplexList {
  public internalValue? : DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeatures[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeaturesOutputReference {
    return new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#key DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#value DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefs {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#from DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToTerraform(struct!.from),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefs | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsFrom) {
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

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsOutputReference {
    return new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpec {
  /**
  * The amount of storage in gibibytes (GiB) to allocate for the DB instance. Type: Integer Amazon Aurora Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume. Amazon RDS Custom Constraints to the amount of storage for each storage type are the following: * General Purpose (SSD) storage (gp2, gp3): Must be an integer from 40 to 65536 for RDS Custom for Oracle, 16384 for RDS Custom for SQL Server. * Provisioned IOPS storage (io1): Must be an integer from 40 to 65536 for RDS Custom for Oracle, 16384 for RDS Custom for SQL Server. MySQL Constraints to the amount of storage for each storage type are the following: * General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. * Provisioned IOPS storage (io1): Must be an integer from 100 to 65536. * Magnetic storage (standard): Must be an integer from 5 to 3072. MariaDB Constraints to the amount of storage for each storage type are the following: * General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. * Provisioned IOPS storage (io1): Must be an integer from 100 to 65536. * Magnetic storage (standard): Must be an integer from 5 to 3072. PostgreSQL Constraints to the amount of storage for each storage type are the following: * General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. * Provisioned IOPS storage (io1): Must be an integer from 100 to 65536. * Magnetic storage (standard): Must be an integer from 5 to 3072. Oracle Constraints to the amount of storage for each storage type are the following: * General Purpose (SSD) storage (gp2, gp3): Must be an integer from 20 to 65536. * Provisioned IOPS storage (io1): Must be an integer from 100 to 65536. * Magnetic storage (standard): Must be an integer from 10 to 3072. SQL Server Constraints to the amount of storage for each storage type are the following: * General Purpose (SSD) storage (gp2, gp3): Enterprise and Standard editions: Must be an integer from 20 to 16384. Web and Express editions: Must be an integer from 20 to 16384. * Provisioned IOPS storage (io1): Enterprise and Standard editions: Must be an integer from 100 to 16384. Web and Express editions: Must be an integer from 100 to 16384. * Magnetic storage (standard): Enterprise and Standard editions: Must be an integer from 20 to 1024. Web and Express editions: Must be an integer from 20 to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#allocated_storage DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#allocated_storage}
  */
  readonly allocatedStorage?: number;
  /**
  * A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically. If you create an RDS Custom DB instance, you must set AutoMinorVersionUpgrade to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#auto_minor_version_upgrade DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * The Availability Zone (AZ) where the database will be created. For information on Amazon Web Services Regions and Availability Zones, see Regions and Availability Zones (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html). Amazon Aurora Each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one. Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region. Example: us-east-1d Constraint: The AvailabilityZone parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#availability_zone DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups. Amazon Aurora Not applicable. The retention period for automated backups is managed by the DB cluster. Default: 1 Constraints: * Must be a value from 0 to 35 * Can't be set to 0 if the DB instance is a source to read replicas * Can't be set to 0 for an RDS Custom for Oracle DB instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#backup_retention_period DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Specifies where automated backups and manual snapshots are stored. Possible values are outposts (Amazon Web Services Outposts) and region (Amazon Web Services Region). The default is region. For more information, see Working with Amazon RDS on Amazon Web Services Outposts (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the Amazon RDS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#backup_target DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#backup_target}
  */
  readonly backupTarget?: string;
  /**
  * Specifies the CA certificate identifier to use for the DB instance’s server certificate. This setting doesn't apply to RDS Custom. For more information, see Using SSL/TLS to encrypt a connection to a DB instance (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the Amazon RDS User Guide and Using SSL/TLS to encrypt a connection to a DB cluster (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the Amazon Aurora User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#ca_certificate_identifier DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#ca_certificate_identifier}
  */
  readonly caCertificateIdentifier?: string;
  /**
  * For supported engines, this value indicates that the DB instance should be associated with the specified CharacterSet. This setting doesn't apply to RDS Custom. However, if you need to change the character set, you can change it on the database itself. Amazon Aurora Not applicable. The character set is managed by the DB cluster. For more information, see CreateDBCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#character_set_name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#character_set_name}
  */
  readonly characterSetName?: string;
  /**
  * A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied. Amazon Aurora Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#copy_tags_to_snapshot DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#copy_tags_to_snapshot}
  */
  readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
  /**
  * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements: * The profile must exist in your account. * The profile must have an IAM role that Amazon EC2 has permissions to assume. * The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom. For the list of permissions required for the IAM role, see Configure IAM and your VPC (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the Amazon RDS User Guide. This setting is required for RDS Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#custom_iam_instance_profile DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#custom_iam_instance_profile}
  */
  readonly customIamInstanceProfile?: string;
  /**
  * The identifier of the DB cluster that the instance will belong to. This setting doesn't apply to RDS Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#db_cluster_identifier DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#db_cluster_identifier}
  */
  readonly dbClusterIdentifier?: string;
  /**
  * The identifier for the RDS for MySQL Multi-AZ DB cluster snapshot to restore from. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the Amazon RDS User Guide. Constraints: * Must match the identifier of an existing Multi-AZ DB cluster snapshot. * Can't be specified when DBSnapshotIdentifier is specified. * Must be specified when DBSnapshotIdentifier isn't specified. * If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the DBClusterSnapshotIdentifier must be the ARN of the shared snapshot. * Can't be the identifier of an Aurora DB cluster snapshot. * Can't be the identifier of an RDS for PostgreSQL Multi-AZ DB cluster snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#db_cluster_snapshot_identifier DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#db_cluster_snapshot_identifier}
  */
  readonly dbClusterSnapshotIdentifier?: string;
  /**
  * The compute and memory capacity of the DB instance, for example db.m5.large. Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see DB instance classes (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the Amazon RDS User Guide or Aurora DB instance classes (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the Amazon Aurora User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#db_instance_class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#db_instance_class}
  */
  readonly dbInstanceClass: string;
  /**
  * The DB instance identifier. This parameter is stored as a lowercase string. Constraints: * Must contain from 1 to 63 letters, numbers, or hyphens. * First character must be a letter. * Can't end with a hyphen or contain two consecutive hyphens. Example: mydbinstance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#db_instance_identifier DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#db_instance_identifier}
  */
  readonly dbInstanceIdentifier: string;
  /**
  * The meaning of this parameter differs according to the database engine you use. MySQL The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. Constraints: * Must contain 1 to 64 letters or numbers. * Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). * Can't be a word reserved by the specified database engine MariaDB The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance. Constraints: * Must contain 1 to 64 letters or numbers. * Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). * Can't be a word reserved by the specified database engine PostgreSQL The name of the database to create when the DB instance is created. If this parameter isn't specified, a database named postgres is created in the DB instance. Constraints: * Must contain 1 to 63 letters, numbers, or underscores. * Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9). * Can't be a word reserved by the specified database engine Oracle The Oracle System ID (SID) of the created DB instance. If you specify null, the default value ORCL is used. You can't specify the string NULL, or any other reserved word, for DBName. Default: ORCL Constraints: * Can't be longer than 8 characters Amazon RDS Custom for Oracle The Oracle System ID (SID) of the created RDS Custom DB instance. If you don't specify a value, the default value is ORCL. Default: ORCL Constraints: * It must contain 1 to 8 alphanumeric characters. * It must contain a letter. * It can't be a word reserved by the database engine. Amazon RDS Custom for SQL Server Not applicable. Must be null. SQL Server Not applicable. Must be null. Amazon Aurora MySQL The name of the database to create when the primary DB instance of the Aurora MySQL DB cluster is created. If this parameter isn't specified for an Aurora MySQL DB cluster, no database is created in the DB cluster. Constraints: * It must contain 1 to 64 alphanumeric characters. * It can't be a word reserved by the database engine. Amazon Aurora PostgreSQL The name of the database to create when the primary DB instance of the Aurora PostgreSQL DB cluster is created. If this parameter isn't specified for an Aurora PostgreSQL DB cluster, a database named postgres is created in the DB cluster. Constraints: * It must contain 1 to 63 alphanumeric characters. * It must begin with a letter. Subsequent characters can be letters, underscores, or digits (0 to 9). * It can't be a word reserved by the database engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#db_name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#db_name}
  */
  readonly dbName?: string;
  /**
  * The name of the DB parameter group to associate with this DB instance. If you do not specify a value, then the default DB parameter group for the specified DB engine and version is used. This setting doesn't apply to RDS Custom. Constraints: * It must be 1 to 255 letters, numbers, or hyphens. * The first character must be a letter. * It can't end with a hyphen or contain two consecutive hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#db_parameter_group_name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#db_parameter_group_name}
  */
  readonly dbParameterGroupName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#db_parameter_group_ref DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#db_parameter_group_ref}
  */
  readonly dbParameterGroupRef?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRef;
  /**
  * The identifier for the DB snapshot to restore from. Constraints: * Must match the identifier of an existing DBSnapshot. * Can't be specified when DBClusterSnapshotIdentifier is specified. * Must be specified when DBClusterSnapshotIdentifier isn't specified. * If you are restoring from a shared manual DB snapshot, the DBSnapshotIdentifier must be the ARN of the shared DB snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#db_snapshot_identifier DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#db_snapshot_identifier}
  */
  readonly dbSnapshotIdentifier?: string;
  /**
  * A DB subnet group to associate with this DB instance. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mydbsubnetgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#db_subnet_group_name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#db_subnet_group_name}
  */
  readonly dbSubnetGroupName?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#db_subnet_group_ref DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#db_subnet_group_ref}
  */
  readonly dbSubnetGroupRef?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRef;
  /**
  * A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see Deleting a DB Instance (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html). Amazon Aurora Not applicable. You can enable or disable deletion protection for the DB cluster. For more information, see CreateDBCluster. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#deletion_protection DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * DestinationRegion is used for presigning the request to a given region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#destination_region DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#destination_region}
  */
  readonly destinationRegion?: string;
  /**
  * The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain. For more information, see Kerberos Authentication (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom. Amazon Aurora Not applicable. The domain is managed by the DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#domain DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#domain}
  */
  readonly domain?: string;
  /**
  * Specify the name of the IAM role to be used when making API calls to the Directory Service. This setting doesn't apply to RDS Custom. Amazon Aurora Not applicable. The domain is managed by the DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#domain_iam_role_name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#domain_iam_role_name}
  */
  readonly domainIamRoleName?: string;
  /**
  * The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine. For more information, see Publishing Database Logs to Amazon CloudWatch Logs (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the Amazon RDS User Guide. Amazon Aurora Not applicable. CloudWatch Logs exports are managed by the DB cluster. RDS Custom Not applicable. MariaDB Possible values are audit, error, general, and slowquery. Microsoft SQL Server Possible values are agent and error. MySQL Possible values are audit, error, general, and slowquery. Oracle Possible values are alert, audit, listener, trace, and oemagent. PostgreSQL Possible values are postgresql and upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#enable_cloudwatch_logs_exports DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#enable_cloudwatch_logs_exports}
  */
  readonly enableCloudwatchLogsExports?: string[];
  /**
  * A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. A CoIP provides local or external connectivity to resources in your Outpost subnets through your on-premises network. For some use cases, a CoIP can provide lower latency for connections to the DB instance from outside of its virtual private cloud (VPC) on your local network. For more information about RDS on Outposts, see Working with Amazon RDS on Amazon Web Services Outposts (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the Amazon RDS User Guide. For more information about CoIPs, see Customer-owned IP addresses (https://docs.aws.amazon.com/outposts/latest/userguide/routing.html#ip-addressing) in the Amazon Web Services Outposts User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#enable_customer_owned_ip DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#enable_customer_owned_ip}
  */
  readonly enableCustomerOwnedIp?: boolean | cdktf.IResolvable;
  /**
  * A value that indicates whether to enable mapping of Amazon Web Services Identity and Access Management (IAM) accounts to database accounts. By default, mapping isn't enabled. For more information, see IAM Database Authentication for MySQL and PostgreSQL (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom. Amazon Aurora Not applicable. Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#enable_iam_database_authentication DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#enable_iam_database_authentication}
  */
  readonly enableIamDatabaseAuthentication?: boolean | cdktf.IResolvable;
  /**
  * The name of the database engine to be used for this instance. Not every database engine is available for every Amazon Web Services Region. Valid Values: * aurora (for MySQL 5.6-compatible Aurora) * aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora) * aurora-postgresql * custom-oracle-ee (for RDS Custom for Oracle instances) * custom-sqlserver-ee (for RDS Custom for SQL Server instances) * custom-sqlserver-se (for RDS Custom for SQL Server instances) * custom-sqlserver-web (for RDS Custom for SQL Server instances) * mariadb * mysql * oracle-ee * oracle-ee-cdb * oracle-se2 * oracle-se2-cdb * postgres * sqlserver-ee * sqlserver-se * sqlserver-ex * sqlserver-web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#engine DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#engine}
  */
  readonly engine: string;
  /**
  * The version number of the database engine to use. For a list of valid engine versions, use the DescribeDBEngineVersions operation. The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every Amazon Web Services Region. Amazon Aurora Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster. Amazon RDS Custom for Oracle A custom engine version (CEV) that you have previously created. This setting is required for RDS Custom for Oracle. The CEV name has the following format: 19.customized_string. A valid CEV name is 19.my_cev1. For more information, see Creating an RDS Custom for Oracle DB instance (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-creating.html#custom-creating.create) in the Amazon RDS User Guide. Amazon RDS Custom for SQL Server See RDS Custom for SQL Server general requirements (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-reqs-limits-MS.html) in the Amazon RDS User Guide. MariaDB For information, see MariaDB on Amazon RDS Versions (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt) in the Amazon RDS User Guide. Microsoft SQL Server For information, see Microsoft SQL Server Versions on Amazon RDS (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport) in the Amazon RDS User Guide. MySQL For information, see MySQL on Amazon RDS Versions (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the Amazon RDS User Guide. Oracle For information, see Oracle Database Engine Release Notes (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html) in the Amazon RDS User Guide. PostgreSQL For information, see Amazon RDS for PostgreSQL versions and extensions (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts) in the Amazon RDS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#engine_version DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance. For information about valid IOPS values, see Amazon RDS DB instance storage (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html) in the Amazon RDS User Guide. Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL DB instances, must be a multiple between .5 and 50 of the storage amount for the DB instance. For SQL Server DB instances, must be a multiple between 1 and 50 of the storage amount for the DB instance. Amazon Aurora Not applicable. Storage is managed by the DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#iops DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#iops}
  */
  readonly iops?: number;
  /**
  * The Amazon Web Services KMS key identifier for an encrypted DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. Amazon Aurora Not applicable. The Amazon Web Services KMS key identifier is managed by the DB cluster. For more information, see CreateDBCluster. If StorageEncrypted is enabled, and you do not specify a value for the KmsKeyId parameter, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. Amazon RDS Custom A KMS key is required for RDS Custom instances. For most RDS engines, if you leave this parameter empty while enabling StorageEncrypted, the engine uses the default KMS key. However, RDS Custom doesn't use the default key when this parameter is empty. You must explicitly specify a key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#kms_key_id DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#kms_key_ref DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#kms_key_ref}
  */
  readonly kmsKeyRef?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRef;
  /**
  * License model information for this DB instance. Valid values: license-included | bring-your-own-license | general-public-license This setting doesn't apply to RDS Custom. Amazon Aurora Not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#license_model DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#license_model}
  */
  readonly licenseModel?: string;
  /**
  * A value that indicates whether to manage the master user password with Amazon Web Services Secrets Manager. For more information, see Password management with Amazon Web Services Secrets Manager (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the Amazon RDS User Guide. Constraints: * Can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#manage_master_user_password DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#manage_master_user_password}
  */
  readonly manageMasterUserPassword?: boolean | cdktf.IResolvable;
  /**
  * The password for the master user. The password can include any printable ASCII character except '/', ```, or '@'. Amazon Aurora Not applicable. The password for the master user is managed by the DB cluster. Constraints: Can't be specified if ManageMasterUserPassword is turned on. MariaDB Constraints: Must contain from 8 to 41 characters. Microsoft SQL Server Constraints: Must contain from 8 to 128 characters. MySQL Constraints: Must contain from 8 to 41 characters. Oracle Constraints: Must contain from 8 to 30 characters. PostgreSQL Constraints: Must contain from 8 to 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#master_user_password DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#master_user_password}
  */
  readonly masterUserPassword?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPassword;
  /**
  * The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#master_user_secret_kms_key_id DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#master_user_secret_kms_key_id}
  */
  readonly masterUserSecretKmsKeyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#master_user_secret_kms_key_ref DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#master_user_secret_kms_key_ref}
  */
  readonly masterUserSecretKmsKeyRef?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef;
  /**
  * The name for the master user. Amazon Aurora Not applicable. The name for the master user is managed by the DB cluster. Amazon RDS Constraints: * Required. * Must be 1 to 16 letters, numbers, or underscores. * First character must be a letter. * Can't be a reserved word for the chosen database engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#master_username DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#master_username}
  */
  readonly masterUsername?: string;
  /**
  * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. For more information about this setting, including limitations that apply to it, see Managing capacity automatically with Amazon RDS storage autoscaling (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom. Amazon Aurora Not applicable. Storage is managed by the DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#max_allocated_storage DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#max_allocated_storage}
  */
  readonly maxAllocatedStorage?: number;
  /**
  * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify 0. The default is 0. If MonitoringRoleArn is specified, then you must set MonitoringInterval to a value other than 0. This setting doesn't apply to RDS Custom. Valid Values: 0, 1, 5, 10, 15, 30, 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#monitoring_interval DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#monitoring_interval}
  */
  readonly monitoringInterval?: number;
  /**
  * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, arn:aws:iam:123456789012:role/emaccess. For information on creating a monitoring role, see Setting Up and Enabling Enhanced Monitoring (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the Amazon RDS User Guide. If MonitoringInterval is set to a value other than 0, then you must supply a MonitoringRoleArn value. This setting doesn't apply to RDS Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#monitoring_role_arn DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#monitoring_role_arn}
  */
  readonly monitoringRoleArn?: string;
  /**
  * A value that indicates whether the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the DB instance is a Multi-AZ deployment. This setting doesn't apply to RDS Custom. Amazon Aurora Not applicable. DB instance Availability Zones (AZs) are managed by the DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#multi_az DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * The name of the NCHAR character set for the Oracle DB instance. This parameter doesn't apply to RDS Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#nchar_character_set_name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#nchar_character_set_name}
  */
  readonly ncharCharacterSetName?: string;
  /**
  * The network type of the DB instance. Valid values: * IPV4 * DUAL The network type is determined by the DBSubnetGroup specified for the DB instance. A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL). For more information, see Working with a DB instance in a VPC (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the Amazon RDS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#network_type DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#network_type}
  */
  readonly networkType?: string;
  /**
  * A value that indicates that the DB instance should be associated with the specified option group. Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance after it is associated with a DB instance. This setting doesn't apply to RDS Custom. Amazon Aurora Not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#option_group_name DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#option_group_name}
  */
  readonly optionGroupName?: string;
  /**
  * A value that indicates whether to enable Performance Insights for the DB instance. For more information, see Using Amazon Performance Insights (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the Amazon RDS User Guide. This setting doesn't apply to RDS Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#performance_insights_enabled DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#performance_insights_enabled}
  */
  readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Web Services KMS key identifier for encryption of Performance Insights data. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon RDS uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region. This setting doesn't apply to RDS Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#performance_insights_kms_key_id DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#performance_insights_kms_key_id}
  */
  readonly performanceInsightsKmsKeyId?: string;
  /**
  * The number of days to retain Performance Insights data. The default is 7 days. The following values are valid: * 7 * month * 31, where month is a number of months from 1-23 * 731 For example, the following values are valid: * 93 (3 months * 31) * 341 (11 months * 31) * 589 (19 months * 31) * 731 If you specify a retention period such as 94, which isn't a valid value, RDS issues an error. This setting doesn't apply to RDS Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#performance_insights_retention_period DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#performance_insights_retention_period}
  */
  readonly performanceInsightsRetentionPeriod?: number;
  /**
  * The port number on which the database accepts connections. MySQL Default: 3306 Valid values: 1150-65535 Type: Integer MariaDB Default: 3306 Valid values: 1150-65535 Type: Integer PostgreSQL Default: 5432 Valid values: 1150-65535 Type: Integer Oracle Default: 1521 Valid values: 1150-65535 SQL Server Default: 1433 Valid values: 1150-65535 except 1234, 1434, 3260, 3343, 3389, 47001, and 49152-49156. Amazon Aurora Default: 3306 Valid values: 1150-65535 Type: Integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#port DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * When you are creating a read replica from one Amazon Web Services GovCloud (US) Region to another or from one China Amazon Web Services Region to another, the URL that contains a Signature Version 4 signed request for the CreateDBInstanceReadReplica API operation in the source Amazon Web Services Region that contains the source DB instance. This setting applies only to Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions. It's ignored in other Amazon Web Services Regions. This setting applies only when replicating from a source DB instance. Source DB clusters aren't supported in Amazon Web Services GovCloud (US) Regions and China Amazon Web Services Regions. You must specify this parameter when you create an encrypted read replica from another Amazon Web Services Region by using the Amazon RDS API. Don't specify PreSignedUrl when you are creating an encrypted read replica in the same Amazon Web Services Region. The presigned URL must be a valid request for the CreateDBInstanceReadReplica API operation that can run in the source Amazon Web Services Region that contains the encrypted source DB instance. The presigned URL request must contain the following parameter values: * DestinationRegion - The Amazon Web Services Region that the encrypted read replica is created in. This Amazon Web Services Region is the same one where the CreateDBInstanceReadReplica operation is called that contains this presigned URL. For example, if you create an encrypted DB instance in the us-west-1 Amazon Web Services Region, from a source DB instance in the us-east-2 Amazon Web Services Region, then you call the CreateDBInstanceReadReplica operation in the us-east-1 Amazon Web Services Region and provide a presigned URL that contains a call to the CreateDBInstanceReadReplica operation in the us-west-2 Amazon Web Services Region. For this example, the DestinationRegion in the presigned URL must be set to the us-east-1 Amazon Web Services Region. * KmsKeyId - The KMS key identifier for the key to use to encrypt the read replica in the destination Amazon Web Services Region. This is the same identifier for both the CreateDBInstanceReadReplica operation that is called in the destination Amazon Web Services Region, and the operation contained in the presigned URL. * SourceDBInstanceIdentifier - The DB instance identifier for the encrypted DB instance to be replicated. This identifier must be in the Amazon Resource Name (ARN) format for the source Amazon Web Services Region. For example, if you are creating an encrypted read replica from a DB instance in the us-west-2 Amazon Web Services Region, then your SourceDBInstanceIdentifier looks like the following example: arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115. To learn how to generate a Signature Version 4 signed request, see Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4) (https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html) and Signature Version 4 Signing Process (https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html). If you are using an Amazon Web Services SDK tool or the CLI, you can specify SourceRegion (or --source-region for the CLI) instead of specifying PreSignedUrl manually. Specifying SourceRegion autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region. SourceRegion isn't supported for SQL Server, because Amazon RDS for SQL Server doesn't support cross-Region read replicas. This setting doesn't apply to RDS Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#pre_signed_url DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#pre_signed_url}
  */
  readonly preSignedUrl?: string;
  /**
  * The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region. For more information, see Backup window (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the Amazon RDS User Guide. Amazon Aurora Not applicable. The daily time range for creating automated backups is managed by the DB cluster. Constraints: * Must be in the format hh24:mi-hh24:mi. * Must be in Universal Coordinated Time (UTC). * Must not conflict with the preferred maintenance window. * Must be at least 30 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#preferred_backup_window DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#preferred_backup_window}
  */
  readonly preferredBackupWindow?: string;
  /**
  * The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see Amazon RDS Maintenance Window (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun. Constraints: Minimum 30-minute window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#preferred_maintenance_window DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. This setting doesn't apply to RDS Custom. Amazon Aurora Not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#processor_features DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#processor_features}
  */
  readonly processorFeatures?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeatures[] | cdktf.IResolvable;
  /**
  * A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see Fault Tolerance for an Aurora DB Cluster (https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance) in the Amazon Aurora User Guide. This setting doesn't apply to RDS Custom. Default: 1 Valid Values: 0 - 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#promotion_tier DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#promotion_tier}
  */
  readonly promotionTier?: number;
  /**
  * A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB instance's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB instance doesn't permit it. When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies: * If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB instance is private. * If the default VPC in the target Region has an internet gateway attached to it, the DB instance is public. If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies: * If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB instance is private. * If the subnets are part of a VPC that has an internet gateway attached to it, the DB instance is public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#publicly_accessible DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * The open mode of the replica database: mounted or read-only. This parameter is only supported for Oracle DB instances. Mounted DB replicas are included in Oracle Database Enterprise Edition. The main use case for mounted replicas is cross-Region disaster recovery. The primary database doesn't use Active Data Guard to transmit information to the mounted replica. Because it doesn't accept user connections, a mounted replica can't serve a read-only workload. You can create a combination of mounted and read-only DB replicas for the same primary DB instance. For more information, see Working with Oracle Read Replicas for Amazon RDS (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the Amazon RDS User Guide. For RDS Custom, you must specify this parameter and set it to mounted. The value won't be set by default. After replica creation, you can manage the open mode manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#replica_mode DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#replica_mode}
  */
  readonly replicaMode?: string;
  /**
  * The identifier of the DB instance that will act as the source for the read replica. Each DB instance can have up to 15 read replicas, with the exception of Oracle and SQL Server, which can have up to five. Constraints: * Must be the identifier of an existing MySQL, MariaDB, Oracle, PostgreSQL, or SQL Server DB instance. * Can't be specified if the SourceDBClusterIdentifier parameter is also specified. * For the limitations of Oracle read replicas, see Version and licensing considerations for RDS for Oracle replicas (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.limitations.html#oracle-read-replicas.limitations.versions-and-licenses) in the Amazon RDS User Guide. * For the limitations of SQL Server read replicas, see Read replica limitations with SQL Server (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.ReadReplicas.html#SQLServer.ReadReplicas.Limitations) in the Amazon RDS User Guide. * The specified DB instance must have automatic backups enabled, that is, its backup retention period must be greater than 0. * If the source DB instance is in the same Amazon Web Services Region as the read replica, specify a valid DB instance identifier. * If the source DB instance is in a different Amazon Web Services Region from the read replica, specify a valid DB instance ARN. For more information, see Constructing an ARN for Amazon RDS (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing) in the Amazon RDS User Guide. This doesn't apply to SQL Server or RDS Custom, which don't support cross-Region replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#source_db_instance_identifier DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#source_db_instance_identifier}
  */
  readonly sourceDbInstanceIdentifier?: string;
  /**
  * SourceRegion is the source region where the resource exists. This is not sent over the wire and is only used for presigning. This value should always have the same region as the source ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#source_region DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#source_region}
  */
  readonly sourceRegion?: string;
  /**
  * A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted. For RDS Custom instances, either set this parameter to true or leave it unset. If you set this parameter to false, RDS reports an error. Amazon Aurora Not applicable. The encryption for DB instances is managed by the DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#storage_encrypted DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#storage_encrypted}
  */
  readonly storageEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Specifies the storage throughput value for the DB instance. This setting applies only to the gp3 storage type. This setting doesn't apply to RDS Custom or Amazon Aurora.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#storage_throughput DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#storage_throughput}
  */
  readonly storageThroughput?: number;
  /**
  * Specifies the storage type to be associated with the DB instance. Valid values: gp2 | gp3 | io1 | standard If you specify io1 or gp3, you must also include a value for the Iops parameter. Default: io1 if the Iops parameter is specified, otherwise gp2 Amazon Aurora Not applicable. Storage is managed by the DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#storage_type DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#storage_type}
  */
  readonly storageType?: string;
  /**
  * Tags to assign to the DB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#tags DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The ARN from the key store with which to associate the instance for TDE encryption. This setting doesn't apply to RDS Custom. Amazon Aurora Not applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#tde_credential_arn DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#tde_credential_arn}
  */
  readonly tdeCredentialArn?: string;
  /**
  * The password for the given ARN from the key store in order to access the device. This setting doesn't apply to RDS Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#tde_credential_password DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#tde_credential_password}
  */
  readonly tdeCredentialPassword?: string;
  /**
  * The time zone of the DB instance. The time zone parameter is currently supported only by Microsoft SQL Server (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#timezone DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * A value that indicates whether the DB instance class of the DB instance uses its default processor features. This setting doesn't apply to RDS Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#use_default_processor_features DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#use_default_processor_features}
  */
  readonly useDefaultProcessorFeatures?: boolean | cdktf.IResolvable;
  /**
  * A list of Amazon EC2 VPC security groups to associate with this DB instance. Amazon Aurora Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. Default: The default EC2 VPC security group for the DB subnet group's VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#vpc_security_group_i_ds DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#vpc_security_group_i_ds}
  */
  readonly vpcSecurityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#vpc_security_group_refs DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest#vpc_security_group_refs}
  */
  readonly vpcSecurityGroupRefs?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefs[] | cdktf.IResolvable;
}

export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_storage: cdktf.numberToTerraform(struct!.allocatedStorage),
    auto_minor_version_upgrade: cdktf.booleanToTerraform(struct!.autoMinorVersionUpgrade),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    backup_retention_period: cdktf.numberToTerraform(struct!.backupRetentionPeriod),
    backup_target: cdktf.stringToTerraform(struct!.backupTarget),
    ca_certificate_identifier: cdktf.stringToTerraform(struct!.caCertificateIdentifier),
    character_set_name: cdktf.stringToTerraform(struct!.characterSetName),
    copy_tags_to_snapshot: cdktf.booleanToTerraform(struct!.copyTagsToSnapshot),
    custom_iam_instance_profile: cdktf.stringToTerraform(struct!.customIamInstanceProfile),
    db_cluster_identifier: cdktf.stringToTerraform(struct!.dbClusterIdentifier),
    db_cluster_snapshot_identifier: cdktf.stringToTerraform(struct!.dbClusterSnapshotIdentifier),
    db_instance_class: cdktf.stringToTerraform(struct!.dbInstanceClass),
    db_instance_identifier: cdktf.stringToTerraform(struct!.dbInstanceIdentifier),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    db_parameter_group_name: cdktf.stringToTerraform(struct!.dbParameterGroupName),
    db_parameter_group_ref: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefToTerraform(struct!.dbParameterGroupRef),
    db_snapshot_identifier: cdktf.stringToTerraform(struct!.dbSnapshotIdentifier),
    db_subnet_group_name: cdktf.stringToTerraform(struct!.dbSubnetGroupName),
    db_subnet_group_ref: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefToTerraform(struct!.dbSubnetGroupRef),
    deletion_protection: cdktf.booleanToTerraform(struct!.deletionProtection),
    destination_region: cdktf.stringToTerraform(struct!.destinationRegion),
    domain: cdktf.stringToTerraform(struct!.domain),
    domain_iam_role_name: cdktf.stringToTerraform(struct!.domainIamRoleName),
    enable_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableCloudwatchLogsExports),
    enable_customer_owned_ip: cdktf.booleanToTerraform(struct!.enableCustomerOwnedIp),
    enable_iam_database_authentication: cdktf.booleanToTerraform(struct!.enableIamDatabaseAuthentication),
    engine: cdktf.stringToTerraform(struct!.engine),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_ref: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct!.kmsKeyRef),
    license_model: cdktf.stringToTerraform(struct!.licenseModel),
    manage_master_user_password: cdktf.booleanToTerraform(struct!.manageMasterUserPassword),
    master_user_password: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPasswordToTerraform(struct!.masterUserPassword),
    master_user_secret_kms_key_id: cdktf.stringToTerraform(struct!.masterUserSecretKmsKeyId),
    master_user_secret_kms_key_ref: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefToTerraform(struct!.masterUserSecretKmsKeyRef),
    master_username: cdktf.stringToTerraform(struct!.masterUsername),
    max_allocated_storage: cdktf.numberToTerraform(struct!.maxAllocatedStorage),
    monitoring_interval: cdktf.numberToTerraform(struct!.monitoringInterval),
    monitoring_role_arn: cdktf.stringToTerraform(struct!.monitoringRoleArn),
    multi_az: cdktf.booleanToTerraform(struct!.multiAz),
    nchar_character_set_name: cdktf.stringToTerraform(struct!.ncharCharacterSetName),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    option_group_name: cdktf.stringToTerraform(struct!.optionGroupName),
    performance_insights_enabled: cdktf.booleanToTerraform(struct!.performanceInsightsEnabled),
    performance_insights_kms_key_id: cdktf.stringToTerraform(struct!.performanceInsightsKmsKeyId),
    performance_insights_retention_period: cdktf.numberToTerraform(struct!.performanceInsightsRetentionPeriod),
    port: cdktf.numberToTerraform(struct!.port),
    pre_signed_url: cdktf.stringToTerraform(struct!.preSignedUrl),
    preferred_backup_window: cdktf.stringToTerraform(struct!.preferredBackupWindow),
    preferred_maintenance_window: cdktf.stringToTerraform(struct!.preferredMaintenanceWindow),
    processor_features: cdktf.listMapper(dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeaturesToTerraform, false)(struct!.processorFeatures),
    promotion_tier: cdktf.numberToTerraform(struct!.promotionTier),
    publicly_accessible: cdktf.booleanToTerraform(struct!.publiclyAccessible),
    replica_mode: cdktf.stringToTerraform(struct!.replicaMode),
    source_db_instance_identifier: cdktf.stringToTerraform(struct!.sourceDbInstanceIdentifier),
    source_region: cdktf.stringToTerraform(struct!.sourceRegion),
    storage_encrypted: cdktf.booleanToTerraform(struct!.storageEncrypted),
    storage_throughput: cdktf.numberToTerraform(struct!.storageThroughput),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    tags: cdktf.listMapper(dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    tde_credential_arn: cdktf.stringToTerraform(struct!.tdeCredentialArn),
    tde_credential_password: cdktf.stringToTerraform(struct!.tdeCredentialPassword),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    use_default_processor_features: cdktf.booleanToTerraform(struct!.useDefaultProcessorFeatures),
    vpc_security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcSecurityGroupIDs),
    vpc_security_group_refs: cdktf.listMapper(dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsToTerraform, false)(struct!.vpcSecurityGroupRefs),
  }
}


export function dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_retention_period: {
      value: cdktf.numberToHclTerraform(struct!.backupRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_target: {
      value: cdktf.stringToHclTerraform(struct!.backupTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_certificate_identifier: {
      value: cdktf.stringToHclTerraform(struct!.caCertificateIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    custom_iam_instance_profile: {
      value: cdktf.stringToHclTerraform(struct!.customIamInstanceProfile),
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
    db_cluster_snapshot_identifier: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterSnapshotIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_class: {
      value: cdktf.stringToHclTerraform(struct!.dbInstanceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_identifier: {
      value: cdktf.stringToHclTerraform(struct!.dbInstanceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_parameter_group_name: {
      value: cdktf.stringToHclTerraform(struct!.dbParameterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_parameter_group_ref: {
      value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefToHclTerraform(struct!.dbParameterGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRef",
    },
    db_snapshot_identifier: {
      value: cdktf.stringToHclTerraform(struct!.dbSnapshotIdentifier),
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
      value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefToHclTerraform(struct!.dbSubnetGroupRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRef",
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
    enable_customer_owned_ip: {
      value: cdktf.booleanToHclTerraform(struct!.enableCustomerOwnedIp),
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
      value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct!.kmsKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRef",
    },
    license_model: {
      value: cdktf.stringToHclTerraform(struct!.licenseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage_master_user_password: {
      value: cdktf.booleanToHclTerraform(struct!.manageMasterUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_user_password: {
      value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPasswordToHclTerraform(struct!.masterUserPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPassword",
    },
    master_user_secret_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.masterUserSecretKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_secret_kms_key_ref: {
      value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefToHclTerraform(struct!.masterUserSecretKmsKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef",
    },
    master_username: {
      value: cdktf.stringToHclTerraform(struct!.masterUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_allocated_storage: {
      value: cdktf.numberToHclTerraform(struct!.maxAllocatedStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    multi_az: {
      value: cdktf.booleanToHclTerraform(struct!.multiAz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nchar_character_set_name: {
      value: cdktf.stringToHclTerraform(struct!.ncharCharacterSetName),
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
    performance_insights_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.performanceInsightsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    processor_features: {
      value: cdktf.listMapperHcl(dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeaturesToHclTerraform, false)(struct!.processorFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeaturesList",
    },
    promotion_tier: {
      value: cdktf.numberToHclTerraform(struct!.promotionTier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    publicly_accessible: {
      value: cdktf.booleanToHclTerraform(struct!.publiclyAccessible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replica_mode: {
      value: cdktf.stringToHclTerraform(struct!.replicaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_db_instance_identifier: {
      value: cdktf.stringToHclTerraform(struct!.sourceDbInstanceIdentifier),
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
    storage_throughput: {
      value: cdktf.numberToHclTerraform(struct!.storageThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsList",
    },
    tde_credential_arn: {
      value: cdktf.stringToHclTerraform(struct!.tdeCredentialArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tde_credential_password: {
      value: cdktf.stringToHclTerraform(struct!.tdeCredentialPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_processor_features: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultProcessorFeatures),
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
      value: cdktf.listMapperHcl(dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsToHclTerraform, false)(struct!.vpcSecurityGroupRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._backupRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPeriod = this._backupRetentionPeriod;
    }
    if (this._backupTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTarget = this._backupTarget;
    }
    if (this._caCertificateIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateIdentifier = this._caCertificateIdentifier;
    }
    if (this._characterSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSetName = this._characterSetName;
    }
    if (this._copyTagsToSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTagsToSnapshot = this._copyTagsToSnapshot;
    }
    if (this._customIamInstanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIamInstanceProfile = this._customIamInstanceProfile;
    }
    if (this._dbClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterIdentifier = this._dbClusterIdentifier;
    }
    if (this._dbClusterSnapshotIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterSnapshotIdentifier = this._dbClusterSnapshotIdentifier;
    }
    if (this._dbInstanceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceClass = this._dbInstanceClass;
    }
    if (this._dbInstanceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceIdentifier = this._dbInstanceIdentifier;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._dbParameterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbParameterGroupName = this._dbParameterGroupName;
    }
    if (this._dbParameterGroupRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbParameterGroupRef = this._dbParameterGroupRef?.internalValue;
    }
    if (this._dbSnapshotIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSnapshotIdentifier = this._dbSnapshotIdentifier;
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
    if (this._enableCustomerOwnedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCustomerOwnedIp = this._enableCustomerOwnedIp;
    }
    if (this._enableIamDatabaseAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIamDatabaseAuthentication = this._enableIamDatabaseAuthentication;
    }
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
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
    if (this._licenseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseModel = this._licenseModel;
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
    if (this._maxAllocatedStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllocatedStorage = this._maxAllocatedStorage;
    }
    if (this._monitoringInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringInterval = this._monitoringInterval;
    }
    if (this._monitoringRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRoleArn = this._monitoringRoleArn;
    }
    if (this._multiAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAz = this._multiAz;
    }
    if (this._ncharCharacterSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ncharCharacterSetName = this._ncharCharacterSetName;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._optionGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionGroupName = this._optionGroupName;
    }
    if (this._performanceInsightsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceInsightsEnabled = this._performanceInsightsEnabled;
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
    if (this._processorFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processorFeatures = this._processorFeatures?.internalValue;
    }
    if (this._promotionTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.promotionTier = this._promotionTier;
    }
    if (this._publiclyAccessible !== undefined) {
      hasAnyValues = true;
      internalValueResult.publiclyAccessible = this._publiclyAccessible;
    }
    if (this._replicaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaMode = this._replicaMode;
    }
    if (this._sourceDbInstanceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDbInstanceIdentifier = this._sourceDbInstanceIdentifier;
    }
    if (this._sourceRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRegion = this._sourceRegion;
    }
    if (this._storageEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageEncrypted = this._storageEncrypted;
    }
    if (this._storageThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageThroughput = this._storageThroughput;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._tdeCredentialArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdeCredentialArn = this._tdeCredentialArn;
    }
    if (this._tdeCredentialPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdeCredentialPassword = this._tdeCredentialPassword;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._useDefaultProcessorFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultProcessorFeatures = this._useDefaultProcessorFeatures;
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocatedStorage = undefined;
      this._autoMinorVersionUpgrade = undefined;
      this._availabilityZone = undefined;
      this._backupRetentionPeriod = undefined;
      this._backupTarget = undefined;
      this._caCertificateIdentifier = undefined;
      this._characterSetName = undefined;
      this._copyTagsToSnapshot = undefined;
      this._customIamInstanceProfile = undefined;
      this._dbClusterIdentifier = undefined;
      this._dbClusterSnapshotIdentifier = undefined;
      this._dbInstanceClass = undefined;
      this._dbInstanceIdentifier = undefined;
      this._dbName = undefined;
      this._dbParameterGroupName = undefined;
      this._dbParameterGroupRef.internalValue = undefined;
      this._dbSnapshotIdentifier = undefined;
      this._dbSubnetGroupName = undefined;
      this._dbSubnetGroupRef.internalValue = undefined;
      this._deletionProtection = undefined;
      this._destinationRegion = undefined;
      this._domain = undefined;
      this._domainIamRoleName = undefined;
      this._enableCloudwatchLogsExports = undefined;
      this._enableCustomerOwnedIp = undefined;
      this._enableIamDatabaseAuthentication = undefined;
      this._engine = undefined;
      this._engineVersion = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._kmsKeyRef.internalValue = undefined;
      this._licenseModel = undefined;
      this._manageMasterUserPassword = undefined;
      this._masterUserPassword.internalValue = undefined;
      this._masterUserSecretKmsKeyId = undefined;
      this._masterUserSecretKmsKeyRef.internalValue = undefined;
      this._masterUsername = undefined;
      this._maxAllocatedStorage = undefined;
      this._monitoringInterval = undefined;
      this._monitoringRoleArn = undefined;
      this._multiAz = undefined;
      this._ncharCharacterSetName = undefined;
      this._networkType = undefined;
      this._optionGroupName = undefined;
      this._performanceInsightsEnabled = undefined;
      this._performanceInsightsKmsKeyId = undefined;
      this._performanceInsightsRetentionPeriod = undefined;
      this._port = undefined;
      this._preSignedUrl = undefined;
      this._preferredBackupWindow = undefined;
      this._preferredMaintenanceWindow = undefined;
      this._processorFeatures.internalValue = undefined;
      this._promotionTier = undefined;
      this._publiclyAccessible = undefined;
      this._replicaMode = undefined;
      this._sourceDbInstanceIdentifier = undefined;
      this._sourceRegion = undefined;
      this._storageEncrypted = undefined;
      this._storageThroughput = undefined;
      this._storageType = undefined;
      this._tags.internalValue = undefined;
      this._tdeCredentialArn = undefined;
      this._tdeCredentialPassword = undefined;
      this._timezone = undefined;
      this._useDefaultProcessorFeatures = undefined;
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
      this._availabilityZone = value.availabilityZone;
      this._backupRetentionPeriod = value.backupRetentionPeriod;
      this._backupTarget = value.backupTarget;
      this._caCertificateIdentifier = value.caCertificateIdentifier;
      this._characterSetName = value.characterSetName;
      this._copyTagsToSnapshot = value.copyTagsToSnapshot;
      this._customIamInstanceProfile = value.customIamInstanceProfile;
      this._dbClusterIdentifier = value.dbClusterIdentifier;
      this._dbClusterSnapshotIdentifier = value.dbClusterSnapshotIdentifier;
      this._dbInstanceClass = value.dbInstanceClass;
      this._dbInstanceIdentifier = value.dbInstanceIdentifier;
      this._dbName = value.dbName;
      this._dbParameterGroupName = value.dbParameterGroupName;
      this._dbParameterGroupRef.internalValue = value.dbParameterGroupRef;
      this._dbSnapshotIdentifier = value.dbSnapshotIdentifier;
      this._dbSubnetGroupName = value.dbSubnetGroupName;
      this._dbSubnetGroupRef.internalValue = value.dbSubnetGroupRef;
      this._deletionProtection = value.deletionProtection;
      this._destinationRegion = value.destinationRegion;
      this._domain = value.domain;
      this._domainIamRoleName = value.domainIamRoleName;
      this._enableCloudwatchLogsExports = value.enableCloudwatchLogsExports;
      this._enableCustomerOwnedIp = value.enableCustomerOwnedIp;
      this._enableIamDatabaseAuthentication = value.enableIamDatabaseAuthentication;
      this._engine = value.engine;
      this._engineVersion = value.engineVersion;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyRef.internalValue = value.kmsKeyRef;
      this._licenseModel = value.licenseModel;
      this._manageMasterUserPassword = value.manageMasterUserPassword;
      this._masterUserPassword.internalValue = value.masterUserPassword;
      this._masterUserSecretKmsKeyId = value.masterUserSecretKmsKeyId;
      this._masterUserSecretKmsKeyRef.internalValue = value.masterUserSecretKmsKeyRef;
      this._masterUsername = value.masterUsername;
      this._maxAllocatedStorage = value.maxAllocatedStorage;
      this._monitoringInterval = value.monitoringInterval;
      this._monitoringRoleArn = value.monitoringRoleArn;
      this._multiAz = value.multiAz;
      this._ncharCharacterSetName = value.ncharCharacterSetName;
      this._networkType = value.networkType;
      this._optionGroupName = value.optionGroupName;
      this._performanceInsightsEnabled = value.performanceInsightsEnabled;
      this._performanceInsightsKmsKeyId = value.performanceInsightsKmsKeyId;
      this._performanceInsightsRetentionPeriod = value.performanceInsightsRetentionPeriod;
      this._port = value.port;
      this._preSignedUrl = value.preSignedUrl;
      this._preferredBackupWindow = value.preferredBackupWindow;
      this._preferredMaintenanceWindow = value.preferredMaintenanceWindow;
      this._processorFeatures.internalValue = value.processorFeatures;
      this._promotionTier = value.promotionTier;
      this._publiclyAccessible = value.publiclyAccessible;
      this._replicaMode = value.replicaMode;
      this._sourceDbInstanceIdentifier = value.sourceDbInstanceIdentifier;
      this._sourceRegion = value.sourceRegion;
      this._storageEncrypted = value.storageEncrypted;
      this._storageThroughput = value.storageThroughput;
      this._storageType = value.storageType;
      this._tags.internalValue = value.tags;
      this._tdeCredentialArn = value.tdeCredentialArn;
      this._tdeCredentialPassword = value.tdeCredentialPassword;
      this._timezone = value.timezone;
      this._useDefaultProcessorFeatures = value.useDefaultProcessorFeatures;
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

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
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

  // backup_target - computed: false, optional: true, required: false
  private _backupTarget?: string; 
  public get backupTarget() {
    return this.getStringAttribute('backup_target');
  }
  public set backupTarget(value: string) {
    this._backupTarget = value;
  }
  public resetBackupTarget() {
    this._backupTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTargetInput() {
    return this._backupTarget;
  }

  // ca_certificate_identifier - computed: false, optional: true, required: false
  private _caCertificateIdentifier?: string; 
  public get caCertificateIdentifier() {
    return this.getStringAttribute('ca_certificate_identifier');
  }
  public set caCertificateIdentifier(value: string) {
    this._caCertificateIdentifier = value;
  }
  public resetCaCertificateIdentifier() {
    this._caCertificateIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdentifierInput() {
    return this._caCertificateIdentifier;
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

  // custom_iam_instance_profile - computed: false, optional: true, required: false
  private _customIamInstanceProfile?: string; 
  public get customIamInstanceProfile() {
    return this.getStringAttribute('custom_iam_instance_profile');
  }
  public set customIamInstanceProfile(value: string) {
    this._customIamInstanceProfile = value;
  }
  public resetCustomIamInstanceProfile() {
    this._customIamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIamInstanceProfileInput() {
    return this._customIamInstanceProfile;
  }

  // db_cluster_identifier - computed: false, optional: true, required: false
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  public resetDbClusterIdentifier() {
    this._dbClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
  }

  // db_cluster_snapshot_identifier - computed: false, optional: true, required: false
  private _dbClusterSnapshotIdentifier?: string; 
  public get dbClusterSnapshotIdentifier() {
    return this.getStringAttribute('db_cluster_snapshot_identifier');
  }
  public set dbClusterSnapshotIdentifier(value: string) {
    this._dbClusterSnapshotIdentifier = value;
  }
  public resetDbClusterSnapshotIdentifier() {
    this._dbClusterSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterSnapshotIdentifierInput() {
    return this._dbClusterSnapshotIdentifier;
  }

  // db_instance_class - computed: false, optional: false, required: true
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // db_instance_identifier - computed: false, optional: false, required: true
  private _dbInstanceIdentifier?: string; 
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }
  public set dbInstanceIdentifier(value: string) {
    this._dbInstanceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdentifierInput() {
    return this._dbInstanceIdentifier;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_parameter_group_name - computed: false, optional: true, required: false
  private _dbParameterGroupName?: string; 
  public get dbParameterGroupName() {
    return this.getStringAttribute('db_parameter_group_name');
  }
  public set dbParameterGroupName(value: string) {
    this._dbParameterGroupName = value;
  }
  public resetDbParameterGroupName() {
    this._dbParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbParameterGroupNameInput() {
    return this._dbParameterGroupName;
  }

  // db_parameter_group_ref - computed: false, optional: true, required: false
  private _dbParameterGroupRef = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRefOutputReference(this, "db_parameter_group_ref");
  public get dbParameterGroupRef() {
    return this._dbParameterGroupRef;
  }
  public putDbParameterGroupRef(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbParameterGroupRef) {
    this._dbParameterGroupRef.internalValue = value;
  }
  public resetDbParameterGroupRef() {
    this._dbParameterGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbParameterGroupRefInput() {
    return this._dbParameterGroupRef.internalValue;
  }

  // db_snapshot_identifier - computed: false, optional: true, required: false
  private _dbSnapshotIdentifier?: string; 
  public get dbSnapshotIdentifier() {
    return this.getStringAttribute('db_snapshot_identifier');
  }
  public set dbSnapshotIdentifier(value: string) {
    this._dbSnapshotIdentifier = value;
  }
  public resetDbSnapshotIdentifier() {
    this._dbSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSnapshotIdentifierInput() {
    return this._dbSnapshotIdentifier;
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
  private _dbSubnetGroupRef = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRefOutputReference(this, "db_subnet_group_ref");
  public get dbSubnetGroupRef() {
    return this._dbSubnetGroupRef;
  }
  public putDbSubnetGroupRef(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecDbSubnetGroupRef) {
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

  // enable_customer_owned_ip - computed: false, optional: true, required: false
  private _enableCustomerOwnedIp?: boolean | cdktf.IResolvable; 
  public get enableCustomerOwnedIp() {
    return this.getBooleanAttribute('enable_customer_owned_ip');
  }
  public set enableCustomerOwnedIp(value: boolean | cdktf.IResolvable) {
    this._enableCustomerOwnedIp = value;
  }
  public resetEnableCustomerOwnedIp() {
    this._enableCustomerOwnedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomerOwnedIpInput() {
    return this._enableCustomerOwnedIp;
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
  private _kmsKeyRef = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRefOutputReference(this, "kms_key_ref");
  public get kmsKeyRef() {
    return this._kmsKeyRef;
  }
  public putKmsKeyRef(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecKmsKeyRef) {
    this._kmsKeyRef.internalValue = value;
  }
  public resetKmsKeyRef() {
    this._kmsKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyRefInput() {
    return this._kmsKeyRef.internalValue;
  }

  // license_model - computed: false, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
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
  private _masterUserPassword = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPasswordOutputReference(this, "master_user_password");
  public get masterUserPassword() {
    return this._masterUserPassword;
  }
  public putMasterUserPassword(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserPassword) {
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
  private _masterUserSecretKmsKeyRef = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRefOutputReference(this, "master_user_secret_kms_key_ref");
  public get masterUserSecretKmsKeyRef() {
    return this._masterUserSecretKmsKeyRef;
  }
  public putMasterUserSecretKmsKeyRef(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecMasterUserSecretKmsKeyRef) {
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

  // max_allocated_storage - computed: false, optional: true, required: false
  private _maxAllocatedStorage?: number; 
  public get maxAllocatedStorage() {
    return this.getNumberAttribute('max_allocated_storage');
  }
  public set maxAllocatedStorage(value: number) {
    this._maxAllocatedStorage = value;
  }
  public resetMaxAllocatedStorage() {
    this._maxAllocatedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllocatedStorageInput() {
    return this._maxAllocatedStorage;
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

  // multi_az - computed: false, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
  }

  // nchar_character_set_name - computed: false, optional: true, required: false
  private _ncharCharacterSetName?: string; 
  public get ncharCharacterSetName() {
    return this.getStringAttribute('nchar_character_set_name');
  }
  public set ncharCharacterSetName(value: string) {
    this._ncharCharacterSetName = value;
  }
  public resetNcharCharacterSetName() {
    this._ncharCharacterSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncharCharacterSetNameInput() {
    return this._ncharCharacterSetName;
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

  // performance_insights_enabled - computed: false, optional: true, required: false
  private _performanceInsightsEnabled?: boolean | cdktf.IResolvable; 
  public get performanceInsightsEnabled() {
    return this.getBooleanAttribute('performance_insights_enabled');
  }
  public set performanceInsightsEnabled(value: boolean | cdktf.IResolvable) {
    this._performanceInsightsEnabled = value;
  }
  public resetPerformanceInsightsEnabled() {
    this._performanceInsightsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsEnabledInput() {
    return this._performanceInsightsEnabled;
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

  // processor_features - computed: false, optional: true, required: false
  private _processorFeatures = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeaturesList(this, "processor_features", false);
  public get processorFeatures() {
    return this._processorFeatures;
  }
  public putProcessorFeatures(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecProcessorFeatures[] | cdktf.IResolvable) {
    this._processorFeatures.internalValue = value;
  }
  public resetProcessorFeatures() {
    this._processorFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorFeaturesInput() {
    return this._processorFeatures.internalValue;
  }

  // promotion_tier - computed: false, optional: true, required: false
  private _promotionTier?: number; 
  public get promotionTier() {
    return this.getNumberAttribute('promotion_tier');
  }
  public set promotionTier(value: number) {
    this._promotionTier = value;
  }
  public resetPromotionTier() {
    this._promotionTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionTierInput() {
    return this._promotionTier;
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

  // replica_mode - computed: false, optional: true, required: false
  private _replicaMode?: string; 
  public get replicaMode() {
    return this.getStringAttribute('replica_mode');
  }
  public set replicaMode(value: string) {
    this._replicaMode = value;
  }
  public resetReplicaMode() {
    this._replicaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaModeInput() {
    return this._replicaMode;
  }

  // source_db_instance_identifier - computed: false, optional: true, required: false
  private _sourceDbInstanceIdentifier?: string; 
  public get sourceDbInstanceIdentifier() {
    return this.getStringAttribute('source_db_instance_identifier');
  }
  public set sourceDbInstanceIdentifier(value: string) {
    this._sourceDbInstanceIdentifier = value;
  }
  public resetSourceDbInstanceIdentifier() {
    this._sourceDbInstanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbInstanceIdentifierInput() {
    return this._sourceDbInstanceIdentifier;
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

  // storage_throughput - computed: false, optional: true, required: false
  private _storageThroughput?: number; 
  public get storageThroughput() {
    return this.getNumberAttribute('storage_throughput');
  }
  public set storageThroughput(value: number) {
    this._storageThroughput = value;
  }
  public resetStorageThroughput() {
    this._storageThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageThroughputInput() {
    return this._storageThroughput;
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
  private _tags = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tde_credential_arn - computed: false, optional: true, required: false
  private _tdeCredentialArn?: string; 
  public get tdeCredentialArn() {
    return this.getStringAttribute('tde_credential_arn');
  }
  public set tdeCredentialArn(value: string) {
    this._tdeCredentialArn = value;
  }
  public resetTdeCredentialArn() {
    this._tdeCredentialArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeCredentialArnInput() {
    return this._tdeCredentialArn;
  }

  // tde_credential_password - computed: false, optional: true, required: false
  private _tdeCredentialPassword?: string; 
  public get tdeCredentialPassword() {
    return this.getStringAttribute('tde_credential_password');
  }
  public set tdeCredentialPassword(value: string) {
    this._tdeCredentialPassword = value;
  }
  public resetTdeCredentialPassword() {
    this._tdeCredentialPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeCredentialPasswordInput() {
    return this._tdeCredentialPassword;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // use_default_processor_features - computed: false, optional: true, required: false
  private _useDefaultProcessorFeatures?: boolean | cdktf.IResolvable; 
  public get useDefaultProcessorFeatures() {
    return this.getBooleanAttribute('use_default_processor_features');
  }
  public set useDefaultProcessorFeatures(value: boolean | cdktf.IResolvable) {
    this._useDefaultProcessorFeatures = value;
  }
  public resetUseDefaultProcessorFeatures() {
    this._useDefaultProcessorFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultProcessorFeaturesInput() {
    return this._useDefaultProcessorFeatures;
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
  private _vpcSecurityGroupRefs = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefsList(this, "vpc_security_group_refs", false);
  public get vpcSecurityGroupRefs() {
    return this._vpcSecurityGroupRefs;
  }
  public putVpcSecurityGroupRefs(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecVpcSecurityGroupRefs[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest k8s_rds_services_k8s_aws_db_instance_v1alpha1_manifest}
*/
export class DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_rds_services_k8s_aws_db_instance_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_rds_services_k8s_aws_db_instance_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/rds_services_k8s_aws_db_instance_v1alpha1_manifest k8s_rds_services_k8s_aws_db_instance_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_rds_services_k8s_aws_db_instance_v1alpha1_manifest',
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
  private _metadata = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRdsServicesK8SAwsDbInstanceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
