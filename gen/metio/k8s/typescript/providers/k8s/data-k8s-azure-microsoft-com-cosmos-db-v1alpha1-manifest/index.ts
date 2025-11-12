// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadata;
  /**
  * CosmosDBSpec defines the desired state of CosmosDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#spec DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#labels DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#name DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#failover_priority DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#failover_priority}
  */
  readonly failoverPriority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#is_zone_redundant DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#is_zone_redundant}
  */
  readonly isZoneRedundant?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#location_name DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#location_name}
  */
  readonly locationName: string;
}

export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocationsToTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_priority: cdktf.numberToTerraform(struct!.failoverPriority),
    is_zone_redundant: cdktf.booleanToTerraform(struct!.isZoneRedundant),
    location_name: cdktf.stringToTerraform(struct!.locationName),
  }
}


export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocationsToHclTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_priority: {
      value: cdktf.numberToHclTerraform(struct!.failoverPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_zone_redundant: {
      value: cdktf.booleanToHclTerraform(struct!.isZoneRedundant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location_name: {
      value: cdktf.stringToHclTerraform(struct!.locationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverPriority = this._failoverPriority;
    }
    if (this._isZoneRedundant !== undefined) {
      hasAnyValues = true;
      internalValueResult.isZoneRedundant = this._isZoneRedundant;
    }
    if (this._locationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationName = this._locationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverPriority = undefined;
      this._isZoneRedundant = undefined;
      this._locationName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverPriority = value.failoverPriority;
      this._isZoneRedundant = value.isZoneRedundant;
      this._locationName = value.locationName;
    }
  }

  // failover_priority - computed: false, optional: false, required: true
  private _failoverPriority?: number; 
  public get failoverPriority() {
    return this.getNumberAttribute('failover_priority');
  }
  public set failoverPriority(value: number) {
    this._failoverPriority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPriorityInput() {
    return this._failoverPriority;
  }

  // is_zone_redundant - computed: false, optional: true, required: false
  private _isZoneRedundant?: boolean | cdktf.IResolvable; 
  public get isZoneRedundant() {
    return this.getBooleanAttribute('is_zone_redundant');
  }
  public set isZoneRedundant(value: boolean | cdktf.IResolvable) {
    this._isZoneRedundant = value;
  }
  public resetIsZoneRedundant() {
    this._isZoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isZoneRedundantInput() {
    return this._isZoneRedundant;
  }

  // location_name - computed: false, optional: false, required: true
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }
}

export class DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocationsOutputReference {
    return new DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilities {
  /**
  * Name *CosmosCapability 'json:'name,omitempty''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#name DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilitiesToTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilitiesToHclTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilities | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilities | cdktf.IResolvable | undefined) {
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

export class DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilities[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilitiesOutputReference {
    return new DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#capabilities DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilities[] | cdktf.IResolvable;
  /**
  * DatabaseAccountOfferType - The offer type for the Cosmos DB database account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#database_account_offer_type DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#database_account_offer_type}
  */
  readonly databaseAccountOfferType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#enable_multiple_write_locations DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#enable_multiple_write_locations}
  */
  readonly enableMultipleWriteLocations?: boolean | cdktf.IResolvable;
  /**
  * IsVirtualNetworkFilterEnabled - Flag to indicate whether to enable/disable Virtual Network ACL rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#is_virtual_network_filter_enabled DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#is_virtual_network_filter_enabled}
  */
  readonly isVirtualNetworkFilterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#mongo_db_version DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#mongo_db_version}
  */
  readonly mongoDbVersion?: string;
}

export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesToTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilitiesToTerraform, false)(struct!.capabilities),
    database_account_offer_type: cdktf.stringToTerraform(struct!.databaseAccountOfferType),
    enable_multiple_write_locations: cdktf.booleanToTerraform(struct!.enableMultipleWriteLocations),
    is_virtual_network_filter_enabled: cdktf.booleanToTerraform(struct!.isVirtualNetworkFilterEnabled),
    mongo_db_version: cdktf.stringToTerraform(struct!.mongoDbVersion),
  }
}


export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesToHclTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilitiesToHclTerraform, false)(struct!.capabilities),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilitiesList",
    },
    database_account_offer_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseAccountOfferType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_multiple_write_locations: {
      value: cdktf.booleanToHclTerraform(struct!.enableMultipleWriteLocations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_virtual_network_filter_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isVirtualNetworkFilterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mongo_db_version: {
      value: cdktf.stringToHclTerraform(struct!.mongoDbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._databaseAccountOfferType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseAccountOfferType = this._databaseAccountOfferType;
    }
    if (this._enableMultipleWriteLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultipleWriteLocations = this._enableMultipleWriteLocations;
    }
    if (this._isVirtualNetworkFilterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVirtualNetworkFilterEnabled = this._isVirtualNetworkFilterEnabled;
    }
    if (this._mongoDbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoDbVersion = this._mongoDbVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities.internalValue = undefined;
      this._databaseAccountOfferType = undefined;
      this._enableMultipleWriteLocations = undefined;
      this._isVirtualNetworkFilterEnabled = undefined;
      this._mongoDbVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities.internalValue = value.capabilities;
      this._databaseAccountOfferType = value.databaseAccountOfferType;
      this._enableMultipleWriteLocations = value.enableMultipleWriteLocations;
      this._isVirtualNetworkFilterEnabled = value.isVirtualNetworkFilterEnabled;
      this._mongoDbVersion = value.mongoDbVersion;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesCapabilities[] | cdktf.IResolvable) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // database_account_offer_type - computed: false, optional: true, required: false
  private _databaseAccountOfferType?: string; 
  public get databaseAccountOfferType() {
    return this.getStringAttribute('database_account_offer_type');
  }
  public set databaseAccountOfferType(value: string) {
    this._databaseAccountOfferType = value;
  }
  public resetDatabaseAccountOfferType() {
    this._databaseAccountOfferType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseAccountOfferTypeInput() {
    return this._databaseAccountOfferType;
  }

  // enable_multiple_write_locations - computed: false, optional: true, required: false
  private _enableMultipleWriteLocations?: boolean | cdktf.IResolvable; 
  public get enableMultipleWriteLocations() {
    return this.getBooleanAttribute('enable_multiple_write_locations');
  }
  public set enableMultipleWriteLocations(value: boolean | cdktf.IResolvable) {
    this._enableMultipleWriteLocations = value;
  }
  public resetEnableMultipleWriteLocations() {
    this._enableMultipleWriteLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleWriteLocationsInput() {
    return this._enableMultipleWriteLocations;
  }

  // is_virtual_network_filter_enabled - computed: false, optional: true, required: false
  private _isVirtualNetworkFilterEnabled?: boolean | cdktf.IResolvable; 
  public get isVirtualNetworkFilterEnabled() {
    return this.getBooleanAttribute('is_virtual_network_filter_enabled');
  }
  public set isVirtualNetworkFilterEnabled(value: boolean | cdktf.IResolvable) {
    this._isVirtualNetworkFilterEnabled = value;
  }
  public resetIsVirtualNetworkFilterEnabled() {
    this._isVirtualNetworkFilterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVirtualNetworkFilterEnabledInput() {
    return this._isVirtualNetworkFilterEnabled;
  }

  // mongo_db_version - computed: false, optional: true, required: false
  private _mongoDbVersion?: string; 
  public get mongoDbVersion() {
    return this.getStringAttribute('mongo_db_version');
  }
  public set mongoDbVersion(value: string) {
    this._mongoDbVersion = value;
  }
  public resetMongoDbVersion() {
    this._mongoDbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoDbVersionInput() {
    return this._mongoDbVersion;
  }
}
export interface DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRules {
  /**
  * IgnoreMissingVNetServiceEndpoint - Create firewall rule before the virtual network has vnet service endpoint enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#ignore_missing_v_net_service_endpoint DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#ignore_missing_v_net_service_endpoint}
  */
  readonly ignoreMissingVNetServiceEndpoint?: boolean | cdktf.IResolvable;
  /**
  * ID - Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#subnet_id DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#subnet_id}
  */
  readonly subnetId?: string;
}

export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRulesToTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_v_net_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVNetServiceEndpoint),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRulesToHclTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_v_net_service_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingVNetServiceEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingVNetServiceEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingVNetServiceEndpoint = this._ignoreMissingVNetServiceEndpoint;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreMissingVNetServiceEndpoint = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreMissingVNetServiceEndpoint = value.ignoreMissingVNetServiceEndpoint;
      this._subnetId = value.subnetId;
    }
  }

  // ignore_missing_v_net_service_endpoint - computed: false, optional: true, required: false
  private _ignoreMissingVNetServiceEndpoint?: boolean | cdktf.IResolvable; 
  public get ignoreMissingVNetServiceEndpoint() {
    return this.getBooleanAttribute('ignore_missing_v_net_service_endpoint');
  }
  public set ignoreMissingVNetServiceEndpoint(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingVNetServiceEndpoint = value;
  }
  public resetIgnoreMissingVNetServiceEndpoint() {
    this._ignoreMissingVNetServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingVNetServiceEndpointInput() {
    return this._ignoreMissingVNetServiceEndpoint;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRulesOutputReference {
    return new DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#ip_rules DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#key_vault_to_store_secrets DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#key_vault_to_store_secrets}
  */
  readonly keyVaultToStoreSecrets?: string;
  /**
  * CosmosDBKind enumerates the values for kind. Only one of the following kinds may be specified. If none of the following kinds is specified, the default one is GlobalDocumentDBKind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#kind DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Location is the Azure location where the CosmosDB exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#location DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#locations DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#locations}
  */
  readonly locations?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocations[] | cdktf.IResolvable;
  /**
  * CosmosDBProperties the CosmosDBProperties of CosmosDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#properties DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#properties}
  */
  readonly properties?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#virtual_network_rules DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest#virtual_network_rules}
  */
  readonly virtualNetworkRules?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRules[] | cdktf.IResolvable;
}

export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRules),
    key_vault_to_store_secrets: cdktf.stringToTerraform(struct!.keyVaultToStoreSecrets),
    kind: cdktf.stringToTerraform(struct!.kind),
    location: cdktf.stringToTerraform(struct!.location),
    locations: cdktf.listMapper(dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocationsToTerraform, false)(struct!.locations),
    properties: dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesToTerraform(struct!.properties),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    virtual_network_rules: cdktf.listMapper(dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRulesToTerraform, false)(struct!.virtualNetworkRules),
  }
}


export function dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_vault_to_store_secrets: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultToStoreSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    locations: {
      value: cdktf.listMapperHcl(dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocationsToHclTerraform, false)(struct!.locations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocationsList",
    },
    properties: {
      value: dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecProperties",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_rules: {
      value: cdktf.listMapperHcl(dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRulesToHclTerraform, false)(struct!.virtualNetworkRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRules = this._ipRules;
    }
    if (this._keyVaultToStoreSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultToStoreSecrets = this._keyVaultToStoreSecrets;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._locations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._virtualNetworkRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkRules = this._virtualNetworkRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRules = undefined;
      this._keyVaultToStoreSecrets = undefined;
      this._kind = undefined;
      this._location = undefined;
      this._locations.internalValue = undefined;
      this._properties.internalValue = undefined;
      this._resourceGroup = undefined;
      this._virtualNetworkRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipRules = value.ipRules;
      this._keyVaultToStoreSecrets = value.keyVaultToStoreSecrets;
      this._kind = value.kind;
      this._location = value.location;
      this._locations.internalValue = value.locations;
      this._properties.internalValue = value.properties;
      this._resourceGroup = value.resourceGroup;
      this._virtualNetworkRules.internalValue = value.virtualNetworkRules;
    }
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules?: string[]; 
  public get ipRules() {
    return this.getListAttribute('ip_rules');
  }
  public set ipRules(value: string[]) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocationsList(this, "locations", false);
  public get locations() {
    return this._locations;
  }
  public putLocations(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecLocations[] | cdktf.IResolvable) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
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

  // virtual_network_rules - computed: false, optional: true, required: false
  private _virtualNetworkRules = new DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRulesList(this, "virtual_network_rules", false);
  public get virtualNetworkRules() {
    return this._virtualNetworkRules;
  }
  public putVirtualNetworkRules(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecVirtualNetworkRules[] | cdktf.IResolvable) {
    this._virtualNetworkRules.internalValue = value;
  }
  public resetVirtualNetworkRules() {
    this._virtualNetworkRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkRulesInput() {
    return this._virtualNetworkRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest k8s_azure_microsoft_com_cosmos_db_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_cosmos_db_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComCosmosDbV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_cosmos_db_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_cosmos_db_v1alpha1_manifest k8s_azure_microsoft_com_cosmos_db_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_cosmos_db_v1alpha1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComCosmosDbV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
