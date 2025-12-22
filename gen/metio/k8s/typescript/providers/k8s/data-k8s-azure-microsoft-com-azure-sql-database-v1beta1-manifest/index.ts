// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#metadata DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadata;
  /**
  * AzureSqlDatabaseSpec defines the desired state of AzureSqlDatabase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#spec DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#annotations DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#labels DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#name DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#namespace DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicy {
  /**
  * RetentionDays is the backup retention period in days. This is how many days Point-in-Time Restore will be supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#retention_days DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#retention_days}
  */
  readonly retentionDays: number;
}

export function dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicyToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicyToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retentionDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retentionDays = value.retentionDays;
    }
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSku {
  /**
  * Capacity - Capacity of the particular SKU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#capacity DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#capacity}
  */
  readonly capacity?: number;
  /**
  * Family - If the service has different generations of hardware, for the same SKU, then that can be captured here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#family DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#family}
  */
  readonly family?: string;
  /**
  * Name - The name of the SKU, typically, a letter + Number code, e.g. P3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#name DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Size - Size of the particular SKU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#size DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#size}
  */
  readonly size?: string;
  /**
  * optional Tier - The tier or edition of the particular SKU, e.g. Basic, Premium.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#tier DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#tier}
  */
  readonly tier?: string;
}

export function dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSkuToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSku | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSkuToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSku | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSku | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSku | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#db_name DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#edition DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#edition}
  */
  readonly edition: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#elastic_pool_id DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#elastic_pool_id}
  */
  readonly elasticPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#location DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#max_size DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#max_size}
  */
  readonly maxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#monthly_retention DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#monthly_retention}
  */
  readonly monthlyRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#resource_group DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#server DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#short_term_retention_policy DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#short_term_retention_policy}
  */
  readonly shortTermRetentionPolicy?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#sku DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#sku}
  */
  readonly sku?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSku;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#subscription_id DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#week_of_year DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#week_of_year}
  */
  readonly weekOfYear?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#weekly_retention DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#weekly_retention}
  */
  readonly weeklyRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#yearly_retention DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest#yearly_retention}
  */
  readonly yearlyRetention?: string;
}

export function dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_name: cdktf.stringToTerraform(struct!.dbName),
    edition: cdktf.numberToTerraform(struct!.edition),
    elastic_pool_id: cdktf.stringToTerraform(struct!.elasticPoolId),
    location: cdktf.stringToTerraform(struct!.location),
    max_size: cdktf.stringToTerraform(struct!.maxSize),
    monthly_retention: cdktf.stringToTerraform(struct!.monthlyRetention),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    server: cdktf.stringToTerraform(struct!.server),
    short_term_retention_policy: dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicyToTerraform(struct!.shortTermRetentionPolicy),
    sku: dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSkuToTerraform(struct!.sku),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    week_of_year: cdktf.numberToTerraform(struct!.weekOfYear),
    weekly_retention: cdktf.stringToTerraform(struct!.weeklyRetention),
    yearly_retention: cdktf.stringToTerraform(struct!.yearlyRetention),
  }
}


export function dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edition: {
      value: cdktf.numberToHclTerraform(struct!.edition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elastic_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.elasticPoolId),
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
    max_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthly_retention: {
      value: cdktf.stringToHclTerraform(struct!.monthlyRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_term_retention_policy: {
      value: dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicyToHclTerraform(struct!.shortTermRetentionPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicy",
    },
    sku: {
      value: dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSkuToHclTerraform(struct!.sku),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSku",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_of_year: {
      value: cdktf.numberToHclTerraform(struct!.weekOfYear),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weekly_retention: {
      value: cdktf.stringToHclTerraform(struct!.weeklyRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yearly_retention: {
      value: cdktf.stringToHclTerraform(struct!.yearlyRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._edition !== undefined) {
      hasAnyValues = true;
      internalValueResult.edition = this._edition;
    }
    if (this._elasticPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticPoolId = this._elasticPoolId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._monthlyRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyRetention = this._monthlyRetention;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._shortTermRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortTermRetentionPolicy = this._shortTermRetentionPolicy?.internalValue;
    }
    if (this._sku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku?.internalValue;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._weekOfYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfYear = this._weekOfYear;
    }
    if (this._weeklyRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyRetention = this._weeklyRetention;
    }
    if (this._yearlyRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearlyRetention = this._yearlyRetention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbName = undefined;
      this._edition = undefined;
      this._elasticPoolId = undefined;
      this._location = undefined;
      this._maxSize = undefined;
      this._monthlyRetention = undefined;
      this._resourceGroup = undefined;
      this._server = undefined;
      this._shortTermRetentionPolicy.internalValue = undefined;
      this._sku.internalValue = undefined;
      this._subscriptionId = undefined;
      this._weekOfYear = undefined;
      this._weeklyRetention = undefined;
      this._yearlyRetention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbName = value.dbName;
      this._edition = value.edition;
      this._elasticPoolId = value.elasticPoolId;
      this._location = value.location;
      this._maxSize = value.maxSize;
      this._monthlyRetention = value.monthlyRetention;
      this._resourceGroup = value.resourceGroup;
      this._server = value.server;
      this._shortTermRetentionPolicy.internalValue = value.shortTermRetentionPolicy;
      this._sku.internalValue = value.sku;
      this._subscriptionId = value.subscriptionId;
      this._weekOfYear = value.weekOfYear;
      this._weeklyRetention = value.weeklyRetention;
      this._yearlyRetention = value.yearlyRetention;
    }
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

  // edition - computed: false, optional: false, required: true
  private _edition?: number; 
  public get edition() {
    return this.getNumberAttribute('edition');
  }
  public set edition(value: number) {
    this._edition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // elastic_pool_id - computed: false, optional: true, required: false
  private _elasticPoolId?: string; 
  public get elasticPoolId() {
    return this.getStringAttribute('elastic_pool_id');
  }
  public set elasticPoolId(value: string) {
    this._elasticPoolId = value;
  }
  public resetElasticPoolId() {
    this._elasticPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticPoolIdInput() {
    return this._elasticPoolId;
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

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // monthly_retention - computed: false, optional: true, required: false
  private _monthlyRetention?: string; 
  public get monthlyRetention() {
    return this.getStringAttribute('monthly_retention');
  }
  public set monthlyRetention(value: string) {
    this._monthlyRetention = value;
  }
  public resetMonthlyRetention() {
    this._monthlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyRetentionInput() {
    return this._monthlyRetention;
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // short_term_retention_policy - computed: false, optional: true, required: false
  private _shortTermRetentionPolicy = new DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicyOutputReference(this, "short_term_retention_policy");
  public get shortTermRetentionPolicy() {
    return this._shortTermRetentionPolicy;
  }
  public putShortTermRetentionPolicy(value: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecShortTermRetentionPolicy) {
    this._shortTermRetentionPolicy.internalValue = value;
  }
  public resetShortTermRetentionPolicy() {
    this._shortTermRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortTermRetentionPolicyInput() {
    return this._shortTermRetentionPolicy.internalValue;
  }

  // sku - computed: false, optional: true, required: false
  private _sku = new DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecSku) {
    this._sku.internalValue = value;
  }
  public resetSku() {
    this._sku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // week_of_year - computed: false, optional: true, required: false
  private _weekOfYear?: number; 
  public get weekOfYear() {
    return this.getNumberAttribute('week_of_year');
  }
  public set weekOfYear(value: number) {
    this._weekOfYear = value;
  }
  public resetWeekOfYear() {
    this._weekOfYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfYearInput() {
    return this._weekOfYear;
  }

  // weekly_retention - computed: false, optional: true, required: false
  private _weeklyRetention?: string; 
  public get weeklyRetention() {
    return this.getStringAttribute('weekly_retention');
  }
  public set weeklyRetention(value: string) {
    this._weeklyRetention = value;
  }
  public resetWeeklyRetention() {
    this._weeklyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRetentionInput() {
    return this._weeklyRetention;
  }

  // yearly_retention - computed: false, optional: true, required: false
  private _yearlyRetention?: string; 
  public get yearlyRetention() {
    return this.getStringAttribute('yearly_retention');
  }
  public set yearlyRetention(value: string) {
    this._yearlyRetention = value;
  }
  public resetYearlyRetention() {
    this._yearlyRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyRetentionInput() {
    return this._yearlyRetention;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest k8s_azure_microsoft_com_azure_sql_database_v1beta1_manifest}
*/
export class DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_azure_sql_database_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_azure_sql_database_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/azure_microsoft_com_azure_sql_database_v1beta1_manifest k8s_azure_microsoft_com_azure_sql_database_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_azure_sql_database_v1beta1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzureSqlDatabaseV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
