// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#metadata DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadata;
  /**
  * FileSystemSpec defines the desired state of FileSystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#spec DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpec;
}
export interface DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#annotations DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#labels DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#name DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#namespace DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#status DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicyToTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicyToHclTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicy | cdktf.IResolvable): any {
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

export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicy | cdktf.IResolvable | undefined) {
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
export interface DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#replication_overwrite_protection DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#replication_overwrite_protection}
  */
  readonly replicationOverwriteProtection?: string;
}

export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtectionToTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replication_overwrite_protection: cdktf.stringToTerraform(struct!.replicationOverwriteProtection),
  }
}


export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtectionToHclTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replication_overwrite_protection: {
      value: cdktf.stringToHclTerraform(struct!.replicationOverwriteProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicationOverwriteProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationOverwriteProtection = this._replicationOverwriteProtection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicationOverwriteProtection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicationOverwriteProtection = value.replicationOverwriteProtection;
    }
  }

  // replication_overwrite_protection - computed: false, optional: true, required: false
  private _replicationOverwriteProtection?: string; 
  public get replicationOverwriteProtection() {
    return this.getStringAttribute('replication_overwrite_protection');
  }
  public set replicationOverwriteProtection(value: string) {
    this._replicationOverwriteProtection = value;
  }
  public resetReplicationOverwriteProtection() {
    this._replicationOverwriteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationOverwriteProtectionInput() {
    return this._replicationOverwriteProtection;
  }
}
export interface DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#name DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#namespace DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#from DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFrom;
}

export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefFrom) {
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
export interface DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#transition_to_archive DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#transition_to_archive}
  */
  readonly transitionToArchive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#transition_to_ia DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#transition_to_ia}
  */
  readonly transitionToIa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#transition_to_primary_storage_class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#transition_to_primary_storage_class}
  */
  readonly transitionToPrimaryStorageClass?: string;
}

export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePoliciesToTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transition_to_archive: cdktf.stringToTerraform(struct!.transitionToArchive),
    transition_to_ia: cdktf.stringToTerraform(struct!.transitionToIa),
    transition_to_primary_storage_class: cdktf.stringToTerraform(struct!.transitionToPrimaryStorageClass),
  }
}


export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePoliciesToHclTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transition_to_archive: {
      value: cdktf.stringToHclTerraform(struct!.transitionToArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transition_to_ia: {
      value: cdktf.stringToHclTerraform(struct!.transitionToIa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transition_to_primary_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.transitionToPrimaryStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transitionToArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionToArchive = this._transitionToArchive;
    }
    if (this._transitionToIa !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionToIa = this._transitionToIa;
    }
    if (this._transitionToPrimaryStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionToPrimaryStorageClass = this._transitionToPrimaryStorageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transitionToArchive = undefined;
      this._transitionToIa = undefined;
      this._transitionToPrimaryStorageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transitionToArchive = value.transitionToArchive;
      this._transitionToIa = value.transitionToIa;
      this._transitionToPrimaryStorageClass = value.transitionToPrimaryStorageClass;
    }
  }

  // transition_to_archive - computed: false, optional: true, required: false
  private _transitionToArchive?: string; 
  public get transitionToArchive() {
    return this.getStringAttribute('transition_to_archive');
  }
  public set transitionToArchive(value: string) {
    this._transitionToArchive = value;
  }
  public resetTransitionToArchive() {
    this._transitionToArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionToArchiveInput() {
    return this._transitionToArchive;
  }

  // transition_to_ia - computed: false, optional: true, required: false
  private _transitionToIa?: string; 
  public get transitionToIa() {
    return this.getStringAttribute('transition_to_ia');
  }
  public set transitionToIa(value: string) {
    this._transitionToIa = value;
  }
  public resetTransitionToIa() {
    this._transitionToIa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionToIaInput() {
    return this._transitionToIa;
  }

  // transition_to_primary_storage_class - computed: false, optional: true, required: false
  private _transitionToPrimaryStorageClass?: string; 
  public get transitionToPrimaryStorageClass() {
    return this.getStringAttribute('transition_to_primary_storage_class');
  }
  public set transitionToPrimaryStorageClass(value: string) {
    this._transitionToPrimaryStorageClass = value;
  }
  public resetTransitionToPrimaryStorageClass() {
    this._transitionToPrimaryStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionToPrimaryStorageClassInput() {
    return this._transitionToPrimaryStorageClass;
  }
}

export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePoliciesOutputReference {
    return new DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#key DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#value DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpec {
  /**
  * Used to create a One Zone file system. It specifies the Amazon Web Services Availability Zone in which to create the file system. Use the format us-east-1a to specify the Availability Zone. For more information about One Zone file systems, see Using EFS storage classes (https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the Amazon EFS User Guide. One Zone file systems are not available in all Availability Zones in Amazon Web Services Regions where Amazon EFS is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#availability_zone_name DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Specifies whether automatic backups are enabled on the file system that you are creating. Set the value to true to enable automatic backups. If you are creating a One Zone file system, automatic backups are enabled by default. For more information, see Automatic backups (https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups) in the Amazon EFS User Guide. Default is false. However, if you specify an AvailabilityZoneName, the default is true. Backup is not available in all Amazon Web Services Regions where Amazon EFS is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#backup DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * The backup policy included in the PutBackupPolicy request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#backup_policy DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#backup_policy}
  */
  readonly backupPolicy?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicy;
  /**
  * A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying an existing Key Management Service key (KMS key). If you don't specify a KMS key, then the default KMS key for Amazon EFS, /aws/elasticfilesystem, is used to protect the encrypted file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#encrypted DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#file_system_protection DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#file_system_protection}
  */
  readonly fileSystemProtection?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtection;
  /**
  * The ID of the KMS key that you want to use to protect the encrypted file system. This parameter is required only if you want to use a non-default KMS key. If this parameter is not specified, the default KMS key for Amazon EFS is used. You can specify a KMS key ID using the following formats: * Key ID - A unique identifier of the key, for example 1234abcd-12ab-34cd-56ef-1234567890ab. * ARN - An Amazon Resource Name (ARN) for the key, for example arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab. * Key alias - A previously created display name for a key, for example alias/projectKey1. * Key alias ARN - An ARN for a key alias, for example arn:aws:kms:us-west-2:444455556666:alias/projectKey1. If you use KmsKeyId, you must set the CreateFileSystemRequest$Encrypted parameter to true. EFS accepts only symmetric KMS keys. You cannot use asymmetric KMS keys with Amazon EFS file systems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#kms_key_id DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#kms_key_ref DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#kms_key_ref}
  */
  readonly kmsKeyRef?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRef;
  /**
  * An array of LifecyclePolicy objects that define the file system's LifecycleConfiguration object. A LifecycleConfiguration object informs EFS Lifecycle management of the following: * TransitionToIA – When to move files in the file system from primary storage (Standard storage class) into the Infrequent Access (IA) storage. * TransitionToArchive – When to move files in the file system from their current storage class (either IA or Standard storage) into the Archive storage. File systems cannot transition into Archive storage before transitioning into IA storage. Therefore, TransitionToArchive must either not be set or must be later than TransitionToIA. The Archive storage class is available only for file systems that use the Elastic Throughput mode and the General Purpose Performance mode. * TransitionToPrimaryStorageClass – Whether to move files in the file system back to primary storage (Standard storage class) after they are accessed in IA or Archive storage. When using the put-lifecycle-configuration CLI command or the PutLifecycleConfiguration API action, Amazon EFS requires that each LifecyclePolicy object have only a single transition. This means that in a request body, LifecyclePolicies must be structured as an array of LifecyclePolicy objects, one object for each storage transition. See the example requests in the following section for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#lifecycle_policies DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#lifecycle_policies}
  */
  readonly lifecyclePolicies?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePolicies[] | cdktf.IResolvable;
  /**
  * The Performance mode of the file system. We recommend generalPurpose performance mode for all file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The maxIO mode is not supported on One Zone file systems. Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems. Default is generalPurpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#performance_mode DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#performance_mode}
  */
  readonly performanceMode?: string;
  /**
  * The FileSystemPolicy that you're creating. Accepts a JSON formatted policy definition. EFS file system policies have a 20,000 character limit. To find out more about the elements that make up a file system policy, see EFS Resource-based Policies (https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#policy DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. Required if ThroughputMode is set to provisioned. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact Amazon Web Services Support. For more information, see Amazon EFS quotas that you can increase (https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the Amazon EFS User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#provisioned_throughput_in_mi_bps DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#provisioned_throughput_in_mi_bps}
  */
  readonly provisionedThroughputInMiBps?: number;
  /**
  * Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a 'Key':'Name','Value':'{value}' key-value pair. Each key must be unique. For more information, see Tagging Amazon Web Services resources (https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the Amazon Web Services General Reference Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#tags DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Specifies the throughput mode for the file system. The mode can be bursting, provisioned, or elastic. If you set ThroughputMode to provisioned, you must also set a value for ProvisionedThroughputInMibps. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see Specifying throughput with provisioned mode (https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the Amazon EFS User Guide. Default is bursting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#throughput_mode DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest#throughput_mode}
  */
  readonly throughputMode?: string;
}

export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_name: cdktf.stringToTerraform(struct!.availabilityZoneName),
    backup: cdktf.booleanToTerraform(struct!.backup),
    backup_policy: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicyToTerraform(struct!.backupPolicy),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    file_system_protection: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtectionToTerraform(struct!.fileSystemProtection),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_ref: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefToTerraform(struct!.kmsKeyRef),
    lifecycle_policies: cdktf.listMapper(dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePoliciesToTerraform, false)(struct!.lifecyclePolicies),
    performance_mode: cdktf.stringToTerraform(struct!.performanceMode),
    policy: cdktf.stringToTerraform(struct!.policy),
    provisioned_throughput_in_mi_bps: cdktf.numberToTerraform(struct!.provisionedThroughputInMiBps),
    tags: cdktf.listMapper(dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    throughput_mode: cdktf.stringToTerraform(struct!.throughputMode),
  }
}


export function dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_policy: {
      value: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicyToHclTerraform(struct!.backupPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicy",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_system_protection: {
      value: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtectionToHclTerraform(struct!.fileSystemProtection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtection",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_ref: {
      value: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefToHclTerraform(struct!.kmsKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRef",
    },
    lifecycle_policies: {
      value: cdktf.listMapperHcl(dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePoliciesToHclTerraform, false)(struct!.lifecyclePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePoliciesList",
    },
    performance_mode: {
      value: cdktf.stringToHclTerraform(struct!.performanceMode),
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
    provisioned_throughput_in_mi_bps: {
      value: cdktf.numberToHclTerraform(struct!.provisionedThroughputInMiBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTagsList",
    },
    throughput_mode: {
      value: cdktf.stringToHclTerraform(struct!.throughputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneName = this._availabilityZoneName;
    }
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._backupPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicy = this._backupPolicy?.internalValue;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._fileSystemProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemProtection = this._fileSystemProtection?.internalValue;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyRef = this._kmsKeyRef?.internalValue;
    }
    if (this._lifecyclePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecyclePolicies = this._lifecyclePolicies?.internalValue;
    }
    if (this._performanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceMode = this._performanceMode;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._provisionedThroughputInMiBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughputInMiBps = this._provisionedThroughputInMiBps;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._throughputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputMode = this._throughputMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneName = undefined;
      this._backup = undefined;
      this._backupPolicy.internalValue = undefined;
      this._encrypted = undefined;
      this._fileSystemProtection.internalValue = undefined;
      this._kmsKeyId = undefined;
      this._kmsKeyRef.internalValue = undefined;
      this._lifecyclePolicies.internalValue = undefined;
      this._performanceMode = undefined;
      this._policy = undefined;
      this._provisionedThroughputInMiBps = undefined;
      this._tags.internalValue = undefined;
      this._throughputMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneName = value.availabilityZoneName;
      this._backup = value.backup;
      this._backupPolicy.internalValue = value.backupPolicy;
      this._encrypted = value.encrypted;
      this._fileSystemProtection.internalValue = value.fileSystemProtection;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyRef.internalValue = value.kmsKeyRef;
      this._lifecyclePolicies.internalValue = value.lifecyclePolicies;
      this._performanceMode = value.performanceMode;
      this._policy = value.policy;
      this._provisionedThroughputInMiBps = value.provisionedThroughputInMiBps;
      this._tags.internalValue = value.tags;
      this._throughputMode = value.throughputMode;
    }
  }

  // availability_zone_name - computed: false, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecBackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // file_system_protection - computed: false, optional: true, required: false
  private _fileSystemProtection = new DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtectionOutputReference(this, "file_system_protection");
  public get fileSystemProtection() {
    return this._fileSystemProtection;
  }
  public putFileSystemProtection(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecFileSystemProtection) {
    this._fileSystemProtection.internalValue = value;
  }
  public resetFileSystemProtection() {
    this._fileSystemProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemProtectionInput() {
    return this._fileSystemProtection.internalValue;
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
  private _kmsKeyRef = new DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRefOutputReference(this, "kms_key_ref");
  public get kmsKeyRef() {
    return this._kmsKeyRef;
  }
  public putKmsKeyRef(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecKmsKeyRef) {
    this._kmsKeyRef.internalValue = value;
  }
  public resetKmsKeyRef() {
    this._kmsKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyRefInput() {
    return this._kmsKeyRef.internalValue;
  }

  // lifecycle_policies - computed: false, optional: true, required: false
  private _lifecyclePolicies = new DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePoliciesList(this, "lifecycle_policies", false);
  public get lifecyclePolicies() {
    return this._lifecyclePolicies;
  }
  public putLifecyclePolicies(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecLifecyclePolicies[] | cdktf.IResolvable) {
    this._lifecyclePolicies.internalValue = value;
  }
  public resetLifecyclePolicies() {
    this._lifecyclePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePoliciesInput() {
    return this._lifecyclePolicies.internalValue;
  }

  // performance_mode - computed: false, optional: true, required: false
  private _performanceMode?: string; 
  public get performanceMode() {
    return this.getStringAttribute('performance_mode');
  }
  public set performanceMode(value: string) {
    this._performanceMode = value;
  }
  public resetPerformanceMode() {
    this._performanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceModeInput() {
    return this._performanceMode;
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

  // provisioned_throughput_in_mi_bps - computed: false, optional: true, required: false
  private _provisionedThroughputInMiBps?: number; 
  public get provisionedThroughputInMiBps() {
    return this.getNumberAttribute('provisioned_throughput_in_mi_bps');
  }
  public set provisionedThroughputInMiBps(value: number) {
    this._provisionedThroughputInMiBps = value;
  }
  public resetProvisionedThroughputInMiBps() {
    this._provisionedThroughputInMiBps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInMiBpsInput() {
    return this._provisionedThroughputInMiBps;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest k8s_efs_services_k8s_aws_file_system_v1alpha1_manifest}
*/
export class DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_efs_services_k8s_aws_file_system_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEfsServicesK8SAwsFileSystemV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_efs_services_k8s_aws_file_system_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/efs_services_k8s_aws_file_system_v1alpha1_manifest k8s_efs_services_k8s_aws_file_system_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_efs_services_k8s_aws_file_system_v1alpha1_manifest',
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
  private _metadata = new DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEfsServicesK8SAwsFileSystemV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
