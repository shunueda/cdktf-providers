// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#metadata DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadata;
  /**
  * PostgreSQLServerSpec defines the desired state of PostgreSQLServer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#spec DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpec;
}
export interface DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#annotations DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#labels DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#name DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#namespace DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#source_server_id DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#source_server_id}
  */
  readonly sourceServerId?: string;
}

export function dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaPropertiesToTerraform(struct?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_server_id: cdktf.stringToTerraform(struct!.sourceServerId),
  }
}


export function dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaPropertiesToHclTerraform(struct?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_server_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceServerId = this._sourceServerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceServerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceServerId = value.sourceServerId;
    }
  }

  // source_server_id - computed: false, optional: true, required: false
  private _sourceServerId?: string; 
  public get sourceServerId() {
    return this.getStringAttribute('source_server_id');
  }
  public set sourceServerId(value: string) {
    this._sourceServerId = value;
  }
  public resetSourceServerId() {
    this._sourceServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServerIdInput() {
    return this._sourceServerId;
  }
}
export interface DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSku {
  /**
  * Capacity - The scale up/out capacity, representing server's compute units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#capacity DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#capacity}
  */
  readonly capacity?: number;
  /**
  * Family - The family of hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#family DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#family}
  */
  readonly family?: string;
  /**
  * Name - The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#name DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Size - The size code, to be interpreted by resource as appropriate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#size DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#size}
  */
  readonly size?: string;
  /**
  * Tier - The tier of the particular SKU, e.g. Basic. Possible values include: 'Basic', 'GeneralPurpose', 'MemoryOptimized'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#tier DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#tier}
  */
  readonly tier?: string;
}

export function dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSkuToTerraform(struct?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    family: cdktf.stringToTerraform(struct!.family),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.stringToTerraform(struct!.size),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSkuToHclTerraform(struct?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
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
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSku | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSku | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._family = undefined;
      this._name = undefined;
      this._size = undefined;
      this._tier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._family = value.family;
      this._name = value.name;
      this._size = value.size;
      this._tier = value.tier;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}
export interface DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfile {
  /**
  * BackupRetentionDays - Backup retention days for the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#backup_retention_days DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * GeoRedundantBackup - Enable Geo-redundant or not for server backup. Possible values include: 'Enabled', 'Disabled'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#geo_redundant_backup DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#geo_redundant_backup}
  */
  readonly geoRedundantBackup?: string;
  /**
  * StorageAutogrow - Enable Storage Auto Grow. Possible values include: 'Enabled', 'Disabled'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#storage_autogrow DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#storage_autogrow}
  */
  readonly storageAutogrow?: string;
  /**
  * StorageMB - Max storage allowed for a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#storage_mb DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#storage_mb}
  */
  readonly storageMb?: number;
}

export function dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfileToTerraform(struct?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retention_days: cdktf.numberToTerraform(struct!.backupRetentionDays),
    geo_redundant_backup: cdktf.stringToTerraform(struct!.geoRedundantBackup),
    storage_autogrow: cdktf.stringToTerraform(struct!.storageAutogrow),
    storage_mb: cdktf.numberToTerraform(struct!.storageMb),
  }
}


export function dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfileToHclTerraform(struct?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_retention_days: {
      value: cdktf.numberToHclTerraform(struct!.backupRetentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_redundant_backup: {
      value: cdktf.stringToHclTerraform(struct!.geoRedundantBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_autogrow: {
      value: cdktf.stringToHclTerraform(struct!.storageAutogrow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_mb: {
      value: cdktf.numberToHclTerraform(struct!.storageMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionDays = this._backupRetentionDays;
    }
    if (this._geoRedundantBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRedundantBackup = this._geoRedundantBackup;
    }
    if (this._storageAutogrow !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAutogrow = this._storageAutogrow;
    }
    if (this._storageMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMb = this._storageMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupRetentionDays = undefined;
      this._geoRedundantBackup = undefined;
      this._storageAutogrow = undefined;
      this._storageMb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupRetentionDays = value.backupRetentionDays;
      this._geoRedundantBackup = value.geoRedundantBackup;
      this._storageAutogrow = value.storageAutogrow;
      this._storageMb = value.storageMb;
    }
  }

  // backup_retention_days - computed: false, optional: true, required: false
  private _backupRetentionDays?: number; 
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  public resetBackupRetentionDays() {
    this._backupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays;
  }

  // geo_redundant_backup - computed: false, optional: true, required: false
  private _geoRedundantBackup?: string; 
  public get geoRedundantBackup() {
    return this.getStringAttribute('geo_redundant_backup');
  }
  public set geoRedundantBackup(value: string) {
    this._geoRedundantBackup = value;
  }
  public resetGeoRedundantBackup() {
    this._geoRedundantBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRedundantBackupInput() {
    return this._geoRedundantBackup;
  }

  // storage_autogrow - computed: false, optional: true, required: false
  private _storageAutogrow?: string; 
  public get storageAutogrow() {
    return this.getStringAttribute('storage_autogrow');
  }
  public set storageAutogrow(value: string) {
    this._storageAutogrow = value;
  }
  public resetStorageAutogrow() {
    this._storageAutogrow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAutogrowInput() {
    return this._storageAutogrow;
  }

  // storage_mb - computed: false, optional: true, required: false
  private _storageMb?: number; 
  public get storageMb() {
    return this.getNumberAttribute('storage_mb');
  }
  public set storageMb(value: number) {
    this._storageMb = value;
  }
  public resetStorageMb() {
    this._storageMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMbInput() {
    return this._storageMb;
  }
}
export interface DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#create_mode DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#key_vault_to_store_secrets DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#key_vault_to_store_secrets}
  */
  readonly keyVaultToStoreSecrets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#location DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#replica_properties DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#replica_properties}
  */
  readonly replicaProperties?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#resource_group DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * ServerVersion enumerates the values for server version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#server_version DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#server_version}
  */
  readonly serverVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#sku DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#sku}
  */
  readonly sku?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSku;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#ssl_enforcement DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#ssl_enforcement}
  */
  readonly sslEnforcement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#storage_profile DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest#storage_profile}
  */
  readonly storageProfile?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfile;
}

export function dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_mode: cdktf.stringToTerraform(struct!.createMode),
    key_vault_to_store_secrets: cdktf.stringToTerraform(struct!.keyVaultToStoreSecrets),
    location: cdktf.stringToTerraform(struct!.location),
    replica_properties: dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaPropertiesToTerraform(struct!.replicaProperties),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    server_version: cdktf.stringToTerraform(struct!.serverVersion),
    sku: dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSkuToTerraform(struct!.sku),
    ssl_enforcement: cdktf.stringToTerraform(struct!.sslEnforcement),
    storage_profile: dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfileToTerraform(struct!.storageProfile),
  }
}


export function dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_mode: {
      value: cdktf.stringToHclTerraform(struct!.createMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_to_store_secrets: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultToStoreSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_properties: {
      value: dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaPropertiesToHclTerraform(struct!.replicaProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaProperties",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_version: {
      value: cdktf.stringToHclTerraform(struct!.serverVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSkuToHclTerraform(struct!.sku),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSku",
    },
    ssl_enforcement: {
      value: cdktf.stringToHclTerraform(struct!.sslEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_profile: {
      value: dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfileToHclTerraform(struct!.storageProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.createMode = this._createMode;
    }
    if (this._keyVaultToStoreSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultToStoreSecrets = this._keyVaultToStoreSecrets;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._replicaProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaProperties = this._replicaProperties?.internalValue;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._serverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverVersion = this._serverVersion;
    }
    if (this._sku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku?.internalValue;
    }
    if (this._sslEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnforcement = this._sslEnforcement;
    }
    if (this._storageProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageProfile = this._storageProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createMode = undefined;
      this._keyVaultToStoreSecrets = undefined;
      this._location = undefined;
      this._replicaProperties.internalValue = undefined;
      this._resourceGroup = undefined;
      this._serverVersion = undefined;
      this._sku.internalValue = undefined;
      this._sslEnforcement = undefined;
      this._storageProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createMode = value.createMode;
      this._keyVaultToStoreSecrets = value.keyVaultToStoreSecrets;
      this._location = value.location;
      this._replicaProperties.internalValue = value.replicaProperties;
      this._resourceGroup = value.resourceGroup;
      this._serverVersion = value.serverVersion;
      this._sku.internalValue = value.sku;
      this._sslEnforcement = value.sslEnforcement;
      this._storageProfile.internalValue = value.storageProfile;
    }
  }

  // create_mode - computed: false, optional: true, required: false
  private _createMode?: string; 
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string) {
    this._createMode = value;
  }
  public resetCreateMode() {
    this._createMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode;
  }

  // key_vault_to_store_secrets - computed: false, optional: true, required: false
  private _keyVaultToStoreSecrets?: string; 
  public get keyVaultToStoreSecrets() {
    return this.getStringAttribute('key_vault_to_store_secrets');
  }
  public set keyVaultToStoreSecrets(value: string) {
    this._keyVaultToStoreSecrets = value;
  }
  public resetKeyVaultToStoreSecrets() {
    this._keyVaultToStoreSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultToStoreSecretsInput() {
    return this._keyVaultToStoreSecrets;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // replica_properties - computed: false, optional: true, required: false
  private _replicaProperties = new DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaPropertiesOutputReference(this, "replica_properties");
  public get replicaProperties() {
    return this._replicaProperties;
  }
  public putReplicaProperties(value: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecReplicaProperties) {
    this._replicaProperties.internalValue = value;
  }
  public resetReplicaProperties() {
    this._replicaProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaPropertiesInput() {
    return this._replicaProperties.internalValue;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // server_version - computed: false, optional: true, required: false
  private _serverVersion?: string; 
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }
  public set serverVersion(value: string) {
    this._serverVersion = value;
  }
  public resetServerVersion() {
    this._serverVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVersionInput() {
    return this._serverVersion;
  }

  // sku - computed: false, optional: true, required: false
  private _sku = new DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecSku) {
    this._sku.internalValue = value;
  }
  public resetSku() {
    this._sku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // ssl_enforcement - computed: false, optional: true, required: false
  private _sslEnforcement?: string; 
  public get sslEnforcement() {
    return this.getStringAttribute('ssl_enforcement');
  }
  public set sslEnforcement(value: string) {
    this._sslEnforcement = value;
  }
  public resetSslEnforcement() {
    this._sslEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnforcementInput() {
    return this._sslEnforcement;
  }

  // storage_profile - computed: false, optional: true, required: false
  private _storageProfile = new DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfileOutputReference(this, "storage_profile");
  public get storageProfile() {
    return this._storageProfile;
  }
  public putStorageProfile(value: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecStorageProfile) {
    this._storageProfile.internalValue = value;
  }
  public resetStorageProfile() {
    this._storageProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileInput() {
    return this._storageProfile.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest k8s_azure_microsoft_com_postgre_sql_server_v1alpha2_manifest}
*/
export class DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_postgre_sql_server_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_postgre_sql_server_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_postgre_sql_server_v1alpha2_manifest k8s_azure_microsoft_com_postgre_sql_server_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_postgre_sql_server_v1alpha2_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComPostgreSqlServerV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
