// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#metadata DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#metadata}
  */
  readonly metadata: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadata;
  /**
  * IntentsSpec defines the desired state of ClientIntents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#spec DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#spec}
  */
  readonly spec?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpec;
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#annotations DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#labels DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#name DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#namespace DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadataToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadataToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#certificate_permissions DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#certificate_permissions}
  */
  readonly certificatePermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#key_permissions DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#key_permissions}
  */
  readonly keyPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#secret_permissions DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#secret_permissions}
  */
  readonly secretPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#storage_permissions DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#storage_permissions}
  */
  readonly storagePermissions?: string[];
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicyToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificatePermissions),
    key_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyPermissions),
    secret_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretPermissions),
    storage_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storagePermissions),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicyToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificatePermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyPermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretPermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    storage_permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storagePermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatePermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePermissions = this._certificatePermissions;
    }
    if (this._keyPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPermissions = this._keyPermissions;
    }
    if (this._secretPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretPermissions = this._secretPermissions;
    }
    if (this._storagePermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePermissions = this._storagePermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatePermissions = undefined;
      this._keyPermissions = undefined;
      this._secretPermissions = undefined;
      this._storagePermissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificatePermissions = value.certificatePermissions;
      this._keyPermissions = value.keyPermissions;
      this._secretPermissions = value.secretPermissions;
      this._storagePermissions = value.storagePermissions;
    }
  }

  // certificate_permissions - computed: false, optional: true, required: false
  private _certificatePermissions?: string[]; 
  public get certificatePermissions() {
    return this.getListAttribute('certificate_permissions');
  }
  public set certificatePermissions(value: string[]) {
    this._certificatePermissions = value;
  }
  public resetCertificatePermissions() {
    this._certificatePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePermissionsInput() {
    return this._certificatePermissions;
  }

  // key_permissions - computed: false, optional: true, required: false
  private _keyPermissions?: string[]; 
  public get keyPermissions() {
    return this.getListAttribute('key_permissions');
  }
  public set keyPermissions(value: string[]) {
    this._keyPermissions = value;
  }
  public resetKeyPermissions() {
    this._keyPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPermissionsInput() {
    return this._keyPermissions;
  }

  // secret_permissions - computed: false, optional: true, required: false
  private _secretPermissions?: string[]; 
  public get secretPermissions() {
    return this.getListAttribute('secret_permissions');
  }
  public set secretPermissions(value: string[]) {
    this._secretPermissions = value;
  }
  public resetSecretPermissions() {
    this._secretPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPermissionsInput() {
    return this._secretPermissions;
  }

  // storage_permissions - computed: false, optional: true, required: false
  private _storagePermissions?: string[]; 
  public get storagePermissions() {
    return this.getListAttribute('storage_permissions');
  }
  public set storagePermissions(value: string[]) {
    this._storagePermissions = value;
  }
  public resetStoragePermissions() {
    this._storagePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePermissionsInput() {
    return this._storagePermissions;
  }
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#database_name DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#operations DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#table DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#table}
  */
  readonly table?: string;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResourcesToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResourcesToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._operations = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._operations = value.operations;
      this._table = value.table;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResourcesOutputReference {
    return new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#methods DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#methods}
  */
  readonly methods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#path DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#path}
  */
  readonly path: string;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResourcesToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResourcesToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._path = value.path;
    }
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResourcesOutputReference {
    return new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#domains DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#ips DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#ips}
  */
  readonly ips?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#ports DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#ports}
  */
  readonly ports?: string[];
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternetToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternetToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domains = undefined;
      this._ips = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domains = value.domains;
      this._ips = value.ips;
      this._ports = value.ports;
    }
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#name DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#operations DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#operations}
  */
  readonly operations: string[];
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopicsToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopicsToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopics | cdktf.IResolvable): any {
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
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operations = value.operations;
    }
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

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopicsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopicsOutputReference {
    return new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCalls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#aws_actions DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#aws_actions}
  */
  readonly awsActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#azure_key_vault_policy DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#azure_key_vault_policy}
  */
  readonly azureKeyVaultPolicy?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#azure_roles DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#azure_roles}
  */
  readonly azureRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#database_resources DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#database_resources}
  */
  readonly databaseResources?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#gcp_permissions DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#gcp_permissions}
  */
  readonly gcpPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#http_resources DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#http_resources}
  */
  readonly httpResources?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#internet DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#internet}
  */
  readonly internet?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#kafka_topics DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#kafka_topics}
  */
  readonly kafkaTopics?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopics[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#name DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#type DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsActions),
    azure_key_vault_policy: dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicyToTerraform(struct!.azureKeyVaultPolicy),
    azure_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.azureRoles),
    database_resources: cdktf.listMapper(dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResourcesToTerraform, false)(struct!.databaseResources),
    gcp_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gcpPermissions),
    http_resources: cdktf.listMapper(dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResourcesToTerraform, false)(struct!.httpResources),
    internet: dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternetToTerraform(struct!.internet),
    kafka_topics: cdktf.listMapper(dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopicsToTerraform, false)(struct!.kafkaTopics),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    azure_key_vault_policy: {
      value: dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicyToHclTerraform(struct!.azureKeyVaultPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicy",
    },
    azure_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.azureRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    database_resources: {
      value: cdktf.listMapperHcl(dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResourcesToHclTerraform, false)(struct!.databaseResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResourcesList",
    },
    gcp_permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gcpPermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_resources: {
      value: cdktf.listMapperHcl(dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResourcesToHclTerraform, false)(struct!.httpResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResourcesList",
    },
    internet: {
      value: dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternetToHclTerraform(struct!.internet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternet",
    },
    kafka_topics: {
      value: cdktf.listMapperHcl(dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopicsToHclTerraform, false)(struct!.kafkaTopics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopicsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCalls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsActions = this._awsActions;
    }
    if (this._azureKeyVaultPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyVaultPolicy = this._azureKeyVaultPolicy?.internalValue;
    }
    if (this._azureRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureRoles = this._azureRoles;
    }
    if (this._databaseResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseResources = this._databaseResources?.internalValue;
    }
    if (this._gcpPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpPermissions = this._gcpPermissions;
    }
    if (this._httpResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResources = this._httpResources?.internalValue;
    }
    if (this._internet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internet = this._internet?.internalValue;
    }
    if (this._kafkaTopics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaTopics = this._kafkaTopics?.internalValue;
    }
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

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCalls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsActions = undefined;
      this._azureKeyVaultPolicy.internalValue = undefined;
      this._azureRoles = undefined;
      this._databaseResources.internalValue = undefined;
      this._gcpPermissions = undefined;
      this._httpResources.internalValue = undefined;
      this._internet.internalValue = undefined;
      this._kafkaTopics.internalValue = undefined;
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
      this._awsActions = value.awsActions;
      this._azureKeyVaultPolicy.internalValue = value.azureKeyVaultPolicy;
      this._azureRoles = value.azureRoles;
      this._databaseResources.internalValue = value.databaseResources;
      this._gcpPermissions = value.gcpPermissions;
      this._httpResources.internalValue = value.httpResources;
      this._internet.internalValue = value.internet;
      this._kafkaTopics.internalValue = value.kafkaTopics;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // aws_actions - computed: false, optional: true, required: false
  private _awsActions?: string[]; 
  public get awsActions() {
    return this.getListAttribute('aws_actions');
  }
  public set awsActions(value: string[]) {
    this._awsActions = value;
  }
  public resetAwsActions() {
    this._awsActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsActionsInput() {
    return this._awsActions;
  }

  // azure_key_vault_policy - computed: false, optional: true, required: false
  private _azureKeyVaultPolicy = new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicyOutputReference(this, "azure_key_vault_policy");
  public get azureKeyVaultPolicy() {
    return this._azureKeyVaultPolicy;
  }
  public putAzureKeyVaultPolicy(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsAzureKeyVaultPolicy) {
    this._azureKeyVaultPolicy.internalValue = value;
  }
  public resetAzureKeyVaultPolicy() {
    this._azureKeyVaultPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultPolicyInput() {
    return this._azureKeyVaultPolicy.internalValue;
  }

  // azure_roles - computed: false, optional: true, required: false
  private _azureRoles?: string[]; 
  public get azureRoles() {
    return this.getListAttribute('azure_roles');
  }
  public set azureRoles(value: string[]) {
    this._azureRoles = value;
  }
  public resetAzureRoles() {
    this._azureRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRolesInput() {
    return this._azureRoles;
  }

  // database_resources - computed: false, optional: true, required: false
  private _databaseResources = new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResourcesList(this, "database_resources", false);
  public get databaseResources() {
    return this._databaseResources;
  }
  public putDatabaseResources(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsDatabaseResources[] | cdktf.IResolvable) {
    this._databaseResources.internalValue = value;
  }
  public resetDatabaseResources() {
    this._databaseResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourcesInput() {
    return this._databaseResources.internalValue;
  }

  // gcp_permissions - computed: false, optional: true, required: false
  private _gcpPermissions?: string[]; 
  public get gcpPermissions() {
    return this.getListAttribute('gcp_permissions');
  }
  public set gcpPermissions(value: string[]) {
    this._gcpPermissions = value;
  }
  public resetGcpPermissions() {
    this._gcpPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPermissionsInput() {
    return this._gcpPermissions;
  }

  // http_resources - computed: false, optional: true, required: false
  private _httpResources = new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResourcesList(this, "http_resources", false);
  public get httpResources() {
    return this._httpResources;
  }
  public putHttpResources(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsHttpResources[] | cdktf.IResolvable) {
    this._httpResources.internalValue = value;
  }
  public resetHttpResources() {
    this._httpResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResourcesInput() {
    return this._httpResources.internalValue;
  }

  // internet - computed: false, optional: true, required: false
  private _internet = new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternetOutputReference(this, "internet");
  public get internet() {
    return this._internet;
  }
  public putInternet(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsInternet) {
    this._internet.internalValue = value;
  }
  public resetInternet() {
    this._internet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetInput() {
    return this._internet.internalValue;
  }

  // kafka_topics - computed: false, optional: true, required: false
  private _kafkaTopics = new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopicsList(this, "kafka_topics", false);
  public get kafkaTopics() {
    return this._kafkaTopics;
  }
  public putKafkaTopics(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsKafkaTopics[] | cdktf.IResolvable) {
    this._kafkaTopics.internalValue = value;
  }
  public resetKafkaTopics() {
    this._kafkaTopics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTopicsInput() {
    return this._kafkaTopics.internalValue;
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

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCalls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsOutputReference {
    return new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#name DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecServiceToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecServiceToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecService | cdktf.IResolvable): any {
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

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecService | cdktf.IResolvable | undefined) {
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
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#calls DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#calls}
  */
  readonly calls: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCalls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#service DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest#service}
  */
  readonly service: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecService;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calls: cdktf.listMapper(dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsToTerraform, false)(struct!.calls),
    service: dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecServiceToTerraform(struct!.service),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calls: {
      value: cdktf.listMapperHcl(dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsToHclTerraform, false)(struct!.calls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsList",
    },
    service: {
      value: dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calls = this._calls?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calls.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calls.internalValue = value.calls;
      this._service.internalValue = value.service;
    }
  }

  // calls - computed: false, optional: false, required: true
  private _calls = new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCallsList(this, "calls", false);
  public get calls() {
    return this._calls;
  }
  public putCalls(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecCalls[] | cdktf.IResolvable) {
    this._calls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callsInput() {
    return this._calls.internalValue;
  }

  // service - computed: false, optional: false, required: true
  private _service = new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecService) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest k8s_k8s_otterize_com_client_intents_v1alpha3_manifest}
*/
export class DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_otterize_com_client_intents_v1alpha3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest to import
  * @param importFromId The id of the existing DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SOtterizeComClientIntentsV1Alpha3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_otterize_com_client_intents_v1alpha3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_otterize_com_client_intents_v1alpha3_manifest k8s_k8s_otterize_com_client_intents_v1alpha3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_otterize_com_client_intents_v1alpha3_manifest',
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
  private _metadata = new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpec) {
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
      metadata: dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
