// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#metadata DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadata;
  /**
  * TableSpec defines the desired state of Table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#spec DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpec;
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#annotations DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#labels DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#name DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#namespace DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#read_capacity_units DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#throughput_mode DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#throughput_mode}
  */
  readonly throughputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#write_capacity_units DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#write_capacity_units}
  */
  readonly writeCapacityUnits?: number;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecificationToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_capacity_units: cdktf.numberToTerraform(struct!.readCapacityUnits),
    throughput_mode: cdktf.stringToTerraform(struct!.throughputMode),
    write_capacity_units: cdktf.numberToTerraform(struct!.writeCapacityUnits),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecificationToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput_mode: {
      value: cdktf.stringToHclTerraform(struct!.throughputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.writeCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    if (this._throughputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputMode = this._throughputMode;
    }
    if (this._writeCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCapacityUnits = this._writeCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityUnits = undefined;
      this._throughputMode = undefined;
      this._writeCapacityUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityUnits = value.readCapacityUnits;
      this._throughputMode = value.throughputMode;
      this._writeCapacityUnits = value.writeCapacityUnits;
    }
  }

  // read_capacity_units - computed: false, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
  }

  // throughput_mode - computed: false, optional: true, required: false
  private _throughputMode?: string; 
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }
  public set throughputMode(value: string) {
    this._throughputMode = value;
  }
  public resetThroughputMode() {
    this._throughputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputModeInput() {
    return this._throughputMode;
  }

  // write_capacity_units - computed: false, optional: true, required: false
  private _writeCapacityUnits?: number; 
  public get writeCapacityUnits() {
    return this.getNumberAttribute('write_capacity_units');
  }
  public set writeCapacityUnits(value: number) {
    this._writeCapacityUnits = value;
  }
  public resetWriteCapacityUnits() {
    this._writeCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCapacityUnitsInput() {
    return this._writeCapacityUnits;
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestamps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#status DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestampsToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestamps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestampsToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestamps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestampsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestamps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestamps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecComment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#message DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#message}
  */
  readonly message?: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCommentToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecComment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCommentToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecComment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCommentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecComment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecComment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#kms_key_identifier DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#type_ DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecificationToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_identifier: cdktf.stringToTerraform(struct!.kmsKeyIdentifier),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecificationToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_identifier: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyIdentifier = this._kmsKeyIdentifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyIdentifier = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyIdentifier = value.kmsKeyIdentifier;
      this._type = value.type;
    }
  }

  // kms_key_identifier - computed: false, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
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
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#status DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecoveryToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecoveryToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#name DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#type_ DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumnsToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumnsToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumns | cdktf.IResolvable): any {
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
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
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

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumnsOutputReference {
    return new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#name DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#order_by DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#order_by}
  */
  readonly orderBy?: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeysToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeysToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeys | cdktf.IResolvable): any {
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
    order_by: {
      value: cdktf.stringToHclTerraform(struct!.orderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._orderBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._orderBy = value.orderBy;
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

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeysList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeys[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeysOutputReference {
    return new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#name DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeysToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeysToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeys | cdktf.IResolvable): any {
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

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeys | cdktf.IResolvable | undefined) {
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

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeysList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeys[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeysOutputReference {
    return new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#name DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumnsToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumnsToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumns | cdktf.IResolvable): any {
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

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumns | cdktf.IResolvable | undefined) {
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

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumnsOutputReference {
    return new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#all_columns DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#all_columns}
  */
  readonly allColumns?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#clustering_keys DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#clustering_keys}
  */
  readonly clusteringKeys?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeys[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#partition_keys DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#partition_keys}
  */
  readonly partitionKeys?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeys[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#static_columns DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#static_columns}
  */
  readonly staticColumns?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumns[] | cdktf.IResolvable;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_columns: cdktf.listMapper(dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumnsToTerraform, false)(struct!.allColumns),
    clustering_keys: cdktf.listMapper(dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeysToTerraform, false)(struct!.clusteringKeys),
    partition_keys: cdktf.listMapper(dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeysToTerraform, false)(struct!.partitionKeys),
    static_columns: cdktf.listMapper(dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumnsToTerraform, false)(struct!.staticColumns),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_columns: {
      value: cdktf.listMapperHcl(dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumnsToHclTerraform, false)(struct!.allColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumnsList",
    },
    clustering_keys: {
      value: cdktf.listMapperHcl(dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeysToHclTerraform, false)(struct!.clusteringKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeysList",
    },
    partition_keys: {
      value: cdktf.listMapperHcl(dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeysToHclTerraform, false)(struct!.partitionKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeysList",
    },
    static_columns: {
      value: cdktf.listMapperHcl(dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumnsToHclTerraform, false)(struct!.staticColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allColumns = this._allColumns?.internalValue;
    }
    if (this._clusteringKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusteringKeys = this._clusteringKeys?.internalValue;
    }
    if (this._partitionKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKeys = this._partitionKeys?.internalValue;
    }
    if (this._staticColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticColumns = this._staticColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allColumns.internalValue = undefined;
      this._clusteringKeys.internalValue = undefined;
      this._partitionKeys.internalValue = undefined;
      this._staticColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allColumns.internalValue = value.allColumns;
      this._clusteringKeys.internalValue = value.clusteringKeys;
      this._partitionKeys.internalValue = value.partitionKeys;
      this._staticColumns.internalValue = value.staticColumns;
    }
  }

  // all_columns - computed: false, optional: true, required: false
  private _allColumns = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumnsList(this, "all_columns", false);
  public get allColumns() {
    return this._allColumns;
  }
  public putAllColumns(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionAllColumns[] | cdktf.IResolvable) {
    this._allColumns.internalValue = value;
  }
  public resetAllColumns() {
    this._allColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allColumnsInput() {
    return this._allColumns.internalValue;
  }

  // clustering_keys - computed: false, optional: true, required: false
  private _clusteringKeys = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeysList(this, "clustering_keys", false);
  public get clusteringKeys() {
    return this._clusteringKeys;
  }
  public putClusteringKeys(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionClusteringKeys[] | cdktf.IResolvable) {
    this._clusteringKeys.internalValue = value;
  }
  public resetClusteringKeys() {
    this._clusteringKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringKeysInput() {
    return this._clusteringKeys.internalValue;
  }

  // partition_keys - computed: false, optional: true, required: false
  private _partitionKeys = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeysList(this, "partition_keys", false);
  public get partitionKeys() {
    return this._partitionKeys;
  }
  public putPartitionKeys(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionPartitionKeys[] | cdktf.IResolvable) {
    this._partitionKeys.internalValue = value;
  }
  public resetPartitionKeys() {
    this._partitionKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeysInput() {
    return this._partitionKeys.internalValue;
  }

  // static_columns - computed: false, optional: true, required: false
  private _staticColumns = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumnsList(this, "static_columns", false);
  public get staticColumns() {
    return this._staticColumns;
  }
  public putStaticColumns(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionStaticColumns[] | cdktf.IResolvable) {
    this._staticColumns.internalValue = value;
  }
  public resetStaticColumns() {
    this._staticColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticColumnsInput() {
    return this._staticColumns.internalValue;
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#key DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#value DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#status DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtlToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtlToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpec {
  /**
  * Specifies the read/write throughput capacity mode for the table. The options are: * throughputMode:PAY_PER_REQUEST and * throughputMode:PROVISIONED - Provisioned capacity mode requires readCapacityUnits and writeCapacityUnits as input. The default is throughput_mode:PAY_PER_REQUEST. For more information, see Read/write capacity modes (https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the Amazon Keyspaces Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#capacity_specification DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#capacity_specification}
  */
  readonly capacitySpecification?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecification;
  /**
  * Enables client-side timestamps for the table. By default, the setting is disabled. You can enable client-side timestamps with the following option: * status: 'enabled' Once client-side timestamps are enabled for a table, this setting cannot be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#client_side_timestamps DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#client_side_timestamps}
  */
  readonly clientSideTimestamps?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestamps;
  /**
  * This parameter allows to enter a description of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#comment DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#comment}
  */
  readonly comment?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecComment;
  /**
  * The default Time to Live setting in seconds for the table. For more information, see Setting the default TTL value for a table (https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl) in the Amazon Keyspaces Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#default_time_to_live DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#default_time_to_live}
  */
  readonly defaultTimeToLive?: number;
  /**
  * Specifies how the encryption key for encryption at rest is managed for the table. You can choose one of the following KMS key (KMS key): * type:AWS_OWNED_KMS_KEY - This key is owned by Amazon Keyspaces. * type:CUSTOMER_MANAGED_KMS_KEY - This key is stored in your account and is created, owned, and managed by you. This option requires the kms_key_identifier of the KMS key in Amazon Resource Name (ARN) format as input. The default is type:AWS_OWNED_KMS_KEY. For more information, see Encryption at rest (https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html) in the Amazon Keyspaces Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#encryption_specification DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#encryption_specification}
  */
  readonly encryptionSpecification?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecification;
  /**
  * The name of the keyspace that the table is going to be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#keyspace_name DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#keyspace_name}
  */
  readonly keyspaceName: string;
  /**
  * Specifies if pointInTimeRecovery is enabled or disabled for the table. The options are: * status=ENABLED * status=DISABLED If it's not specified, the default is status=DISABLED. For more information, see Point-in-time recovery (https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html) in the Amazon Keyspaces Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#point_in_time_recovery DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#point_in_time_recovery}
  */
  readonly pointInTimeRecovery?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecovery;
  /**
  * The schemaDefinition consists of the following parameters. For each column to be created: * name - The name of the column. * type - An Amazon Keyspaces data type. For more information, see Data types (https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types) in the Amazon Keyspaces Developer Guide. The primary key of the table consists of the following columns: * partitionKeys - The partition key can be a single column, or it can be a compound value composed of two or more columns. The partition key portion of the primary key is required and determines how Amazon Keyspaces stores your data. * name - The name of each partition key column. * clusteringKeys - The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition. * name - The name of the clustering column. * orderBy - Sets the ascendant (ASC) or descendant (DESC) order modifier. To define a column as static use staticColumns - Static columns store values that are shared by all rows in the same partition: * name - The name of the column. * type - An Amazon Keyspaces data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#schema_definition DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#schema_definition}
  */
  readonly schemaDefinition: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinition;
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#table_name DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#table_name}
  */
  readonly tableName: string;
  /**
  * A list of key-value pair tags to be attached to the resource. For more information, see Adding tags and labels to Amazon Keyspaces resources (https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html) in the Amazon Keyspaces Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#tags DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Enables Time to Live custom settings for the table. The options are: * status:enabled * status:disabled The default is status:disabled. After ttl is enabled, you can't disable it for the table. For more information, see Expiring data by using Amazon Keyspaces Time to Live (TTL) (https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html) in the Amazon Keyspaces Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#ttl DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest#ttl}
  */
  readonly ttl?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtl;
}

export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_specification: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecificationToTerraform(struct!.capacitySpecification),
    client_side_timestamps: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestampsToTerraform(struct!.clientSideTimestamps),
    comment: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCommentToTerraform(struct!.comment),
    default_time_to_live: cdktf.numberToTerraform(struct!.defaultTimeToLive),
    encryption_specification: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecificationToTerraform(struct!.encryptionSpecification),
    keyspace_name: cdktf.stringToTerraform(struct!.keyspaceName),
    point_in_time_recovery: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecoveryToTerraform(struct!.pointInTimeRecovery),
    schema_definition: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionToTerraform(struct!.schemaDefinition),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    tags: cdktf.listMapper(dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    ttl: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtlToTerraform(struct!.ttl),
  }
}


export function dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_specification: {
      value: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecificationToHclTerraform(struct!.capacitySpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecification",
    },
    client_side_timestamps: {
      value: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestampsToHclTerraform(struct!.clientSideTimestamps),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestamps",
    },
    comment: {
      value: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCommentToHclTerraform(struct!.comment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecComment",
    },
    default_time_to_live: {
      value: cdktf.numberToHclTerraform(struct!.defaultTimeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption_specification: {
      value: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecificationToHclTerraform(struct!.encryptionSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecification",
    },
    keyspace_name: {
      value: cdktf.stringToHclTerraform(struct!.keyspaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point_in_time_recovery: {
      value: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecoveryToHclTerraform(struct!.pointInTimeRecovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecovery",
    },
    schema_definition: {
      value: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionToHclTerraform(struct!.schemaDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinition",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTagsList",
    },
    ttl: {
      value: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacitySpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacitySpecification = this._capacitySpecification?.internalValue;
    }
    if (this._clientSideTimestamps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSideTimestamps = this._clientSideTimestamps?.internalValue;
    }
    if (this._comment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment?.internalValue;
    }
    if (this._defaultTimeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTimeToLive = this._defaultTimeToLive;
    }
    if (this._encryptionSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionSpecification = this._encryptionSpecification?.internalValue;
    }
    if (this._keyspaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyspaceName = this._keyspaceName;
    }
    if (this._pointInTimeRecovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeRecovery = this._pointInTimeRecovery?.internalValue;
    }
    if (this._schemaDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition?.internalValue;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._ttl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacitySpecification.internalValue = undefined;
      this._clientSideTimestamps.internalValue = undefined;
      this._comment.internalValue = undefined;
      this._defaultTimeToLive = undefined;
      this._encryptionSpecification.internalValue = undefined;
      this._keyspaceName = undefined;
      this._pointInTimeRecovery.internalValue = undefined;
      this._schemaDefinition.internalValue = undefined;
      this._tableName = undefined;
      this._tags.internalValue = undefined;
      this._ttl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacitySpecification.internalValue = value.capacitySpecification;
      this._clientSideTimestamps.internalValue = value.clientSideTimestamps;
      this._comment.internalValue = value.comment;
      this._defaultTimeToLive = value.defaultTimeToLive;
      this._encryptionSpecification.internalValue = value.encryptionSpecification;
      this._keyspaceName = value.keyspaceName;
      this._pointInTimeRecovery.internalValue = value.pointInTimeRecovery;
      this._schemaDefinition.internalValue = value.schemaDefinition;
      this._tableName = value.tableName;
      this._tags.internalValue = value.tags;
      this._ttl.internalValue = value.ttl;
    }
  }

  // capacity_specification - computed: false, optional: true, required: false
  private _capacitySpecification = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecificationOutputReference(this, "capacity_specification");
  public get capacitySpecification() {
    return this._capacitySpecification;
  }
  public putCapacitySpecification(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCapacitySpecification) {
    this._capacitySpecification.internalValue = value;
  }
  public resetCapacitySpecification() {
    this._capacitySpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacitySpecificationInput() {
    return this._capacitySpecification.internalValue;
  }

  // client_side_timestamps - computed: false, optional: true, required: false
  private _clientSideTimestamps = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestampsOutputReference(this, "client_side_timestamps");
  public get clientSideTimestamps() {
    return this._clientSideTimestamps;
  }
  public putClientSideTimestamps(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecClientSideTimestamps) {
    this._clientSideTimestamps.internalValue = value;
  }
  public resetClientSideTimestamps() {
    this._clientSideTimestamps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSideTimestampsInput() {
    return this._clientSideTimestamps.internalValue;
  }

  // comment - computed: false, optional: true, required: false
  private _comment = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecCommentOutputReference(this, "comment");
  public get comment() {
    return this._comment;
  }
  public putComment(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecComment) {
    this._comment.internalValue = value;
  }
  public resetComment() {
    this._comment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment.internalValue;
  }

  // default_time_to_live - computed: false, optional: true, required: false
  private _defaultTimeToLive?: number; 
  public get defaultTimeToLive() {
    return this.getNumberAttribute('default_time_to_live');
  }
  public set defaultTimeToLive(value: number) {
    this._defaultTimeToLive = value;
  }
  public resetDefaultTimeToLive() {
    this._defaultTimeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeToLiveInput() {
    return this._defaultTimeToLive;
  }

  // encryption_specification - computed: false, optional: true, required: false
  private _encryptionSpecification = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecificationOutputReference(this, "encryption_specification");
  public get encryptionSpecification() {
    return this._encryptionSpecification;
  }
  public putEncryptionSpecification(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecEncryptionSpecification) {
    this._encryptionSpecification.internalValue = value;
  }
  public resetEncryptionSpecification() {
    this._encryptionSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecificationInput() {
    return this._encryptionSpecification.internalValue;
  }

  // keyspace_name - computed: false, optional: false, required: true
  private _keyspaceName?: string; 
  public get keyspaceName() {
    return this.getStringAttribute('keyspace_name');
  }
  public set keyspaceName(value: string) {
    this._keyspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyspaceNameInput() {
    return this._keyspaceName;
  }

  // point_in_time_recovery - computed: false, optional: true, required: false
  private _pointInTimeRecovery = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecoveryOutputReference(this, "point_in_time_recovery");
  public get pointInTimeRecovery() {
    return this._pointInTimeRecovery;
  }
  public putPointInTimeRecovery(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecPointInTimeRecovery) {
    this._pointInTimeRecovery.internalValue = value;
  }
  public resetPointInTimeRecovery() {
    this._pointInTimeRecovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryInput() {
    return this._pointInTimeRecovery.internalValue;
  }

  // schema_definition - computed: false, optional: false, required: true
  private _schemaDefinition = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinitionOutputReference(this, "schema_definition");
  public get schemaDefinition() {
    return this._schemaDefinition;
  }
  public putSchemaDefinition(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecSchemaDefinition) {
    this._schemaDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition.internalValue;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest k8s_keyspaces_services_k8s_aws_table_v1alpha1_manifest}
*/
export class DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_keyspaces_services_k8s_aws_table_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKeyspacesServicesK8SAwsTableV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_keyspaces_services_k8s_aws_table_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/keyspaces_services_k8s_aws_table_v1alpha1_manifest k8s_keyspaces_services_k8s_aws_table_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_keyspaces_services_k8s_aws_table_v1alpha1_manifest',
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
  private _metadata = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeyspacesServicesK8SAwsTableV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
