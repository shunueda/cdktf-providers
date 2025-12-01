// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#metadata DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadata;
  /**
  * DatabaseSpec defines the desired state of Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#spec DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpec;
}
export interface DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#annotations DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#labels DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#namespace DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRef {
  /**
  * ProjectId identifies the project where the secret resource is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#project_id DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#project_id}
  */
  readonly projectId?: string;
  /**
  * SecretId identifies the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#secret_id DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#secret_id}
  */
  readonly secretId?: string;
  /**
  * Version is the version of the secret. If 'latest' is specified, underlying the latest SecretId is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#version DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRefToTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRefToHclTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
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

export class DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._secretId = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._secretId = value.secretId;
      this._version = value.version;
    }
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
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
export interface DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRef {
  /**
  * ProjectId identifies the project where the secret resource is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#project_id DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#project_id}
  */
  readonly projectId?: string;
  /**
  * SecretId identifies the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#secret_id DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#secret_id}
  */
  readonly secretId?: string;
  /**
  * Version is the version of the secret. If 'latest' is specified, underlying the latest SecretId is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#version DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRefToTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRefToHclTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
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

export class DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._secretId = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._secretId = value.secretId;
      this._version = value.version;
    }
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
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
export interface DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#namespace DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRefToTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRefToHclTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRef | cdktf.IResolvable): any {
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

export class DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsers {
  /**
  * A reference to a GSM secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#gsm_secret_ref DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#gsm_secret_ref}
  */
  readonly gsmSecretRef?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRef;
  /**
  * Name of the User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Plaintext password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#password DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * Privileges specifies an optional list of privileges to grant to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#privileges DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#privileges}
  */
  readonly privileges?: string[];
  /**
  * A reference to a k8s secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#secret_ref DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRef;
}

export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersToTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gsm_secret_ref: dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRefToTerraform(struct!.gsmSecretRef),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    secret_ref: dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersToHclTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gsm_secret_ref: {
      value: dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRefToHclTerraform(struct!.gsmSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRef",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_ref: {
      value: dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gsmSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsmSecretRef = this._gsmSecretRef?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gsmSecretRef.internalValue = undefined;
      this._name = undefined;
      this._password = undefined;
      this._privileges = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gsmSecretRef.internalValue = value.gsmSecretRef;
      this._name = value.name;
      this._password = value.password;
      this._privileges = value.privileges;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // gsm_secret_ref - computed: false, optional: true, required: false
  private _gsmSecretRef = new DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRefOutputReference(this, "gsm_secret_ref");
  public get gsmSecretRef() {
    return this._gsmSecretRef;
  }
  public putGsmSecretRef(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersGsmSecretRef) {
    this._gsmSecretRef.internalValue = value;
  }
  public resetGsmSecretRef() {
    this._gsmSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsmSecretRefInput() {
    return this._gsmSecretRef.internalValue;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // privileges - computed: false, optional: true, required: false
  private _privileges?: string[]; 
  public get privileges() {
    return this.getListAttribute('privileges');
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  public resetPrivileges() {
    this._privileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersOutputReference {
    return new DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpec {
  /**
  * AdminPassword is the password for the sys admin of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#admin_password DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * AdminPasswordGsmSecretRef is a reference to the secret object containing sensitive information to pass to config agent. This field is optional, and may be empty if plaintext password is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#admin_password_gsm_secret_ref DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#admin_password_gsm_secret_ref}
  */
  readonly adminPasswordGsmSecretRef?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRef;
  /**
  * Name of the instance that the database belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#instance DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#instance}
  */
  readonly instance?: string;
  /**
  * Name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Users specifies an optional list of users to be created in this database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#users DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest#users}
  */
  readonly users?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable;
}

export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_password_gsm_secret_ref: dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRefToTerraform(struct!.adminPasswordGsmSecretRef),
    instance: cdktf.stringToTerraform(struct!.instance),
    name: cdktf.stringToTerraform(struct!.name),
    users: cdktf.listMapper(dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersToTerraform, false)(struct!.users),
  }
}


export function dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password_gsm_secret_ref: {
      value: dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRefToHclTerraform(struct!.adminPasswordGsmSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRef",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
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
    users: {
      value: cdktf.listMapperHcl(dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminPasswordGsmSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPasswordGsmSecretRef = this._adminPasswordGsmSecretRef?.internalValue;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPassword = undefined;
      this._adminPasswordGsmSecretRef.internalValue = undefined;
      this._instance = undefined;
      this._name = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPassword = value.adminPassword;
      this._adminPasswordGsmSecretRef.internalValue = value.adminPasswordGsmSecretRef;
      this._instance = value.instance;
      this._name = value.name;
      this._users.internalValue = value.users;
    }
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_password_gsm_secret_ref - computed: false, optional: true, required: false
  private _adminPasswordGsmSecretRef = new DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRefOutputReference(this, "admin_password_gsm_secret_ref");
  public get adminPasswordGsmSecretRef() {
    return this._adminPasswordGsmSecretRef;
  }
  public putAdminPasswordGsmSecretRef(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecAdminPasswordGsmSecretRef) {
    this._adminPasswordGsmSecretRef.internalValue = value;
  }
  public resetAdminPasswordGsmSecretRef() {
    this._adminPasswordGsmSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordGsmSecretRefInput() {
    return this._adminPasswordGsmSecretRef.internalValue;
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest k8s_oracle_db_anthosapis_com_database_v1alpha1_manifest}
*/
export class DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_oracle_db_anthosapis_com_database_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOracleDbAnthosapisComDatabaseV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_oracle_db_anthosapis_com_database_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/oracle_db_anthosapis_com_database_v1alpha1_manifest k8s_oracle_db_anthosapis_com_database_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_oracle_db_anthosapis_com_database_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComDatabaseV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
