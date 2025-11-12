// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudDiscoveryProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account preference. For ex.: single, multiple, auto_discover_multiple.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#account_preference CloudDiscoveryProvider#account_preference}
  */
  readonly accountPreference: string;
  /**
  * Additional configuration for the Discovery Job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#additional_config CloudDiscoveryProvider#additional_config}
  */
  readonly additionalConfig?: CloudDiscoveryProviderAdditionalConfig;
  /**
  * Credential preference for the discovery job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#credential_preference CloudDiscoveryProvider#credential_preference}
  */
  readonly credentialPreference?: CloudDiscoveryProviderCredentialPreference;
  /**
  * Timestamp when the object has been deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#deleted_at CloudDiscoveryProvider#deleted_at}
  */
  readonly deletedAt?: string;
  /**
  * Description of the discovery config. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#description CloudDiscoveryProvider#description}
  */
  readonly description?: string;
  /**
  * Desired state. Default is "enabled".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#desired_state CloudDiscoveryProvider#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Destinations types enabled: Ex.: DNS, IPAM and ACCOUNTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#destination_types_enabled CloudDiscoveryProvider#destination_types_enabled}
  */
  readonly destinationTypesEnabled?: string[];
  /**
  * Destinations For the discovery config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#destinations CloudDiscoveryProvider#destinations}
  */
  readonly destinations?: CloudDiscoveryProviderDestinations[] | cdktf.IResolvable;
  /**
  * Name of the discovery config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#name CloudDiscoveryProvider#name}
  */
  readonly name: string;
  /**
  * Provider type. Ex.: Amazon Web Services, Google Cloud Platform, Microsoft Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#provider_type CloudDiscoveryProvider#provider_type}
  */
  readonly providerType: string;
  /**
  * Source configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#source_configs CloudDiscoveryProvider#source_configs}
  */
  readonly sourceConfigs?: CloudDiscoveryProviderSourceConfigs[] | cdktf.IResolvable;
  /**
  * Sync interval. Default is "Auto".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#sync_interval CloudDiscoveryProvider#sync_interval}
  */
  readonly syncInterval?: string;
  /**
  * Tagging specifics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#tags CloudDiscoveryProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategory {
  /**
  * If set true , the category is excluded from discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#excluded CloudDiscoveryProvider#excluded}
  */
  readonly excluded?: boolean | cdktf.IResolvable;
  /**
  * Category ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#id CloudDiscoveryProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategoryToTerraform(struct?: CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.booleanToTerraform(struct!.excluded),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategoryToHclTerraform(struct?: CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded: {
      value: cdktf.booleanToHclTerraform(struct!.excluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excluded = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excluded = value.excluded;
      this._id = value.id;
    }
  }

  // excluded - computed: true, optional: true, required: false
  private _excluded?: boolean | cdktf.IResolvable; 
  public get excluded() {
    return this.getBooleanAttribute('excluded');
  }
  public set excluded(value: boolean | cdktf.IResolvable) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSet {
  /**
  * If set true , the resource set of a particular category is excluded from discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#excluded CloudDiscoveryProvider#excluded}
  */
  readonly excluded?: boolean | cdktf.IResolvable;
  /**
  * The resource set ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#id CloudDiscoveryProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSetToTerraform(struct?: CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded: cdktf.booleanToTerraform(struct!.excluded),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSetToHclTerraform(struct?: CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded: {
      value: cdktf.booleanToHclTerraform(struct!.excluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excluded = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excluded = value.excluded;
      this._id = value.id;
    }
  }

  // excluded - computed: true, optional: true, required: false
  private _excluded?: boolean | cdktf.IResolvable; 
  public get excluded() {
    return this.getBooleanAttribute('excluded');
  }
  public set excluded(value: boolean | cdktf.IResolvable) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSetList extends cdktf.ComplexList {
  public internalValue? : CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSet[] | cdktf.IResolvable

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
  public get(index: number): CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSetOutputReference {
    return new CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDiscoveryProviderAdditionalConfigObjectTypeObjects {
  /**
  * Category of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#category CloudDiscoveryProvider#category}
  */
  readonly category?: CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategory;
  /**
  * Resource set of the object .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#resource_set CloudDiscoveryProvider#resource_set}
  */
  readonly resourceSet?: CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSet[] | cdktf.IResolvable;
}

export function cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsToTerraform(struct?: CloudDiscoveryProviderAdditionalConfigObjectTypeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategoryToTerraform(struct!.category),
    resource_set: cdktf.listMapper(cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSetToTerraform, false)(struct!.resourceSet),
  }
}


export function cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsToHclTerraform(struct?: CloudDiscoveryProviderAdditionalConfigObjectTypeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategory",
    },
    resource_set: {
      value: cdktf.listMapperHcl(cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSetToHclTerraform, false)(struct!.resourceSet),
      isBlock: true,
      type: "list",
      storageClassType: "CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDiscoveryProviderAdditionalConfigObjectTypeObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    if (this._resourceSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSet = this._resourceSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderAdditionalConfigObjectTypeObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category.internalValue = undefined;
      this._resourceSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category.internalValue = value.category;
      this._resourceSet.internalValue = value.resourceSet;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category = new CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // resource_set - computed: true, optional: true, required: false
  private _resourceSet = new CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSetList(this, "resource_set", false);
  public get resourceSet() {
    return this._resourceSet;
  }
  public putResourceSet(value: CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsResourceSet[] | cdktf.IResolvable) {
    this._resourceSet.internalValue = value;
  }
  public resetResourceSet() {
    this._resourceSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetInput() {
    return this._resourceSet.internalValue;
  }
}

export class CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsList extends cdktf.ComplexList {
  public internalValue? : CloudDiscoveryProviderAdditionalConfigObjectTypeObjects[] | cdktf.IResolvable

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
  public get(index: number): CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsOutputReference {
    return new CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDiscoveryProviderAdditionalConfigObjectType {
  /**
  * Discover new objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#discover_new CloudDiscoveryProvider#discover_new}
  */
  readonly discoverNew?: boolean | cdktf.IResolvable;
  /**
  * List of objects to discover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#objects CloudDiscoveryProvider#objects}
  */
  readonly objects?: CloudDiscoveryProviderAdditionalConfigObjectTypeObjects[] | cdktf.IResolvable;
  /**
  * Version of the object type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#version CloudDiscoveryProvider#version}
  */
  readonly version?: number;
}

export function cloudDiscoveryProviderAdditionalConfigObjectTypeToTerraform(struct?: CloudDiscoveryProviderAdditionalConfigObjectType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discover_new: cdktf.booleanToTerraform(struct!.discoverNew),
    objects: cdktf.listMapper(cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsToTerraform, false)(struct!.objects),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function cloudDiscoveryProviderAdditionalConfigObjectTypeToHclTerraform(struct?: CloudDiscoveryProviderAdditionalConfigObjectType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discover_new: {
      value: cdktf.booleanToHclTerraform(struct!.discoverNew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    objects: {
      value: cdktf.listMapperHcl(cloudDiscoveryProviderAdditionalConfigObjectTypeObjectsToHclTerraform, false)(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsList",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderAdditionalConfigObjectTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDiscoveryProviderAdditionalConfigObjectType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoverNew !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverNew = this._discoverNew;
    }
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderAdditionalConfigObjectType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoverNew = undefined;
      this._objects.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoverNew = value.discoverNew;
      this._objects.internalValue = value.objects;
      this._version = value.version;
    }
  }

  // discover_new - computed: true, optional: true, required: false
  private _discoverNew?: boolean | cdktf.IResolvable; 
  public get discoverNew() {
    return this.getBooleanAttribute('discover_new');
  }
  public set discoverNew(value: boolean | cdktf.IResolvable) {
    this._discoverNew = value;
  }
  public resetDiscoverNew() {
    this._discoverNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverNewInput() {
    return this._discoverNew;
  }

  // objects - computed: true, optional: true, required: false
  private _objects = new CloudDiscoveryProviderAdditionalConfigObjectTypeObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: CloudDiscoveryProviderAdditionalConfigObjectTypeObjects[] | cdktf.IResolvable) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
export interface CloudDiscoveryProviderAdditionalConfig {
  /**
  * List of account IDs to exclude from discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#excluded_accounts CloudDiscoveryProvider#excluded_accounts}
  */
  readonly excludedAccounts?: string[];
  /**
  * Enable/Disable forward zone discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#forward_zone_enabled CloudDiscoveryProvider#forward_zone_enabled}
  */
  readonly forwardZoneEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable internal ranges discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#internal_ranges_enabled CloudDiscoveryProvider#internal_ranges_enabled}
  */
  readonly internalRangesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Object type to discover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#object_type CloudDiscoveryProvider#object_type}
  */
  readonly objectType?: CloudDiscoveryProviderAdditionalConfigObjectType;
}

export function cloudDiscoveryProviderAdditionalConfigToTerraform(struct?: CloudDiscoveryProviderAdditionalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedAccounts),
    forward_zone_enabled: cdktf.booleanToTerraform(struct!.forwardZoneEnabled),
    internal_ranges_enabled: cdktf.booleanToTerraform(struct!.internalRangesEnabled),
    object_type: cloudDiscoveryProviderAdditionalConfigObjectTypeToTerraform(struct!.objectType),
  }
}


export function cloudDiscoveryProviderAdditionalConfigToHclTerraform(struct?: CloudDiscoveryProviderAdditionalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    forward_zone_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.forwardZoneEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_ranges_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.internalRangesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_type: {
      value: cloudDiscoveryProviderAdditionalConfigObjectTypeToHclTerraform(struct!.objectType),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDiscoveryProviderAdditionalConfigObjectType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderAdditionalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDiscoveryProviderAdditionalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedAccounts = this._excludedAccounts;
    }
    if (this._forwardZoneEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardZoneEnabled = this._forwardZoneEnabled;
    }
    if (this._internalRangesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalRangesEnabled = this._internalRangesEnabled;
    }
    if (this._objectType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderAdditionalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedAccounts = undefined;
      this._forwardZoneEnabled = undefined;
      this._internalRangesEnabled = undefined;
      this._objectType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedAccounts = value.excludedAccounts;
      this._forwardZoneEnabled = value.forwardZoneEnabled;
      this._internalRangesEnabled = value.internalRangesEnabled;
      this._objectType.internalValue = value.objectType;
    }
  }

  // excluded_accounts - computed: true, optional: true, required: false
  private _excludedAccounts?: string[]; 
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
  }
  public set excludedAccounts(value: string[]) {
    this._excludedAccounts = value;
  }
  public resetExcludedAccounts() {
    this._excludedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAccountsInput() {
    return this._excludedAccounts;
  }

  // forward_zone_enabled - computed: true, optional: true, required: false
  private _forwardZoneEnabled?: boolean | cdktf.IResolvable; 
  public get forwardZoneEnabled() {
    return this.getBooleanAttribute('forward_zone_enabled');
  }
  public set forwardZoneEnabled(value: boolean | cdktf.IResolvable) {
    this._forwardZoneEnabled = value;
  }
  public resetForwardZoneEnabled() {
    this._forwardZoneEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardZoneEnabledInput() {
    return this._forwardZoneEnabled;
  }

  // internal_ranges_enabled - computed: true, optional: true, required: false
  private _internalRangesEnabled?: boolean | cdktf.IResolvable; 
  public get internalRangesEnabled() {
    return this.getBooleanAttribute('internal_ranges_enabled');
  }
  public set internalRangesEnabled(value: boolean | cdktf.IResolvable) {
    this._internalRangesEnabled = value;
  }
  public resetInternalRangesEnabled() {
    this._internalRangesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalRangesEnabledInput() {
    return this._internalRangesEnabled;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType = new CloudDiscoveryProviderAdditionalConfigObjectTypeOutputReference(this, "object_type");
  public get objectType() {
    return this._objectType;
  }
  public putObjectType(value: CloudDiscoveryProviderAdditionalConfigObjectType) {
    this._objectType.internalValue = value;
  }
  public resetObjectType() {
    this._objectType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType.internalValue;
  }
}
export interface CloudDiscoveryProviderCredentialPreference {
  /**
  * Access identifier type. Possible values: role_arn, tenant_id, project_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#access_identifier_type CloudDiscoveryProvider#access_identifier_type}
  */
  readonly accessIdentifierType?: string;
  /**
  * Credential type. Possible values: dynamic, static .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#credential_type CloudDiscoveryProvider#credential_type}
  */
  readonly credentialType?: string;
}

export function cloudDiscoveryProviderCredentialPreferenceToTerraform(struct?: CloudDiscoveryProviderCredentialPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_identifier_type: cdktf.stringToTerraform(struct!.accessIdentifierType),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
  }
}


export function cloudDiscoveryProviderCredentialPreferenceToHclTerraform(struct?: CloudDiscoveryProviderCredentialPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_identifier_type: {
      value: cdktf.stringToHclTerraform(struct!.accessIdentifierType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderCredentialPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDiscoveryProviderCredentialPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessIdentifierType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessIdentifierType = this._accessIdentifierType;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderCredentialPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessIdentifierType = undefined;
      this._credentialType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessIdentifierType = value.accessIdentifierType;
      this._credentialType = value.credentialType;
    }
  }

  // access_identifier_type - computed: true, optional: true, required: false
  private _accessIdentifierType?: string; 
  public get accessIdentifierType() {
    return this.getStringAttribute('access_identifier_type');
  }
  public set accessIdentifierType(value: string) {
    this._accessIdentifierType = value;
  }
  public resetAccessIdentifierType() {
    this._accessIdentifierType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdentifierTypeInput() {
    return this._accessIdentifierType;
  }

  // credential_type - computed: true, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }
}
export interface CloudDiscoveryProviderDestinationsConfigDns {
  /**
  * consolidated_zone_data_enabled consolidates private zones into a single view, which is separate from the public zone view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#consolidated_zone_data_enabled CloudDiscoveryProvider#consolidated_zone_data_enabled}
  */
  readonly consolidatedZoneDataEnabled?: boolean | cdktf.IResolvable;
  /**
  * split_view_enabled consolidates private zones into a single view, which is separate from the public zone view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#split_view_enabled CloudDiscoveryProvider#split_view_enabled}
  */
  readonly splitViewEnabled?: boolean | cdktf.IResolvable;
  /**
  * Type of sync.Sync_type values: "read_only", "read_write"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#sync_type CloudDiscoveryProvider#sync_type}
  */
  readonly syncType?: string;
  /**
  * Unique identifier of the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#view_id CloudDiscoveryProvider#view_id}
  */
  readonly viewId?: string;
  /**
  * Name of the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#view_name CloudDiscoveryProvider#view_name}
  */
  readonly viewName?: string;
}

export function cloudDiscoveryProviderDestinationsConfigDnsToTerraform(struct?: CloudDiscoveryProviderDestinationsConfigDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consolidated_zone_data_enabled: cdktf.booleanToTerraform(struct!.consolidatedZoneDataEnabled),
    split_view_enabled: cdktf.booleanToTerraform(struct!.splitViewEnabled),
    sync_type: cdktf.stringToTerraform(struct!.syncType),
    view_id: cdktf.stringToTerraform(struct!.viewId),
    view_name: cdktf.stringToTerraform(struct!.viewName),
  }
}


export function cloudDiscoveryProviderDestinationsConfigDnsToHclTerraform(struct?: CloudDiscoveryProviderDestinationsConfigDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consolidated_zone_data_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.consolidatedZoneDataEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    split_view_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.splitViewEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_type: {
      value: cdktf.stringToHclTerraform(struct!.syncType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_id: {
      value: cdktf.stringToHclTerraform(struct!.viewId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_name: {
      value: cdktf.stringToHclTerraform(struct!.viewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderDestinationsConfigDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDiscoveryProviderDestinationsConfigDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consolidatedZoneDataEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidatedZoneDataEnabled = this._consolidatedZoneDataEnabled;
    }
    if (this._splitViewEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitViewEnabled = this._splitViewEnabled;
    }
    if (this._syncType !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncType = this._syncType;
    }
    if (this._viewId !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewId = this._viewId;
    }
    if (this._viewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewName = this._viewName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderDestinationsConfigDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consolidatedZoneDataEnabled = undefined;
      this._splitViewEnabled = undefined;
      this._syncType = undefined;
      this._viewId = undefined;
      this._viewName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consolidatedZoneDataEnabled = value.consolidatedZoneDataEnabled;
      this._splitViewEnabled = value.splitViewEnabled;
      this._syncType = value.syncType;
      this._viewId = value.viewId;
      this._viewName = value.viewName;
    }
  }

  // consolidated_zone_data_enabled - computed: true, optional: true, required: false
  private _consolidatedZoneDataEnabled?: boolean | cdktf.IResolvable; 
  public get consolidatedZoneDataEnabled() {
    return this.getBooleanAttribute('consolidated_zone_data_enabled');
  }
  public set consolidatedZoneDataEnabled(value: boolean | cdktf.IResolvable) {
    this._consolidatedZoneDataEnabled = value;
  }
  public resetConsolidatedZoneDataEnabled() {
    this._consolidatedZoneDataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidatedZoneDataEnabledInput() {
    return this._consolidatedZoneDataEnabled;
  }

  // split_view_enabled - computed: true, optional: true, required: false
  private _splitViewEnabled?: boolean | cdktf.IResolvable; 
  public get splitViewEnabled() {
    return this.getBooleanAttribute('split_view_enabled');
  }
  public set splitViewEnabled(value: boolean | cdktf.IResolvable) {
    this._splitViewEnabled = value;
  }
  public resetSplitViewEnabled() {
    this._splitViewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitViewEnabledInput() {
    return this._splitViewEnabled;
  }

  // sync_type - computed: true, optional: true, required: false
  private _syncType?: string; 
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }
  public set syncType(value: string) {
    this._syncType = value;
  }
  public resetSyncType() {
    this._syncType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTypeInput() {
    return this._syncType;
  }

  // view_id - computed: true, optional: true, required: false
  private _viewId?: string; 
  public get viewId() {
    return this.getStringAttribute('view_id');
  }
  public set viewId(value: string) {
    this._viewId = value;
  }
  public resetViewId() {
    this._viewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewIdInput() {
    return this._viewId;
  }

  // view_name - computed: true, optional: true, required: false
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  public resetViewName() {
    this._viewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }
}
export interface CloudDiscoveryProviderDestinationsConfigIpam {
  /**
  * Address of the DHCP Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#dhcp_server CloudDiscoveryProvider#dhcp_server}
  */
  readonly dhcpServer?: string;
  /**
  * This flag controls the IPAM Sync/Reconciliation for the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#disable_ipam_projection CloudDiscoveryProvider#disable_ipam_projection}
  */
  readonly disableIpamProjection?: boolean | cdktf.IResolvable;
  /**
  * IP Space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#ip_space CloudDiscoveryProvider#ip_space}
  */
  readonly ipSpace?: string;
}

export function cloudDiscoveryProviderDestinationsConfigIpamToTerraform(struct?: CloudDiscoveryProviderDestinationsConfigIpam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_server: cdktf.stringToTerraform(struct!.dhcpServer),
    disable_ipam_projection: cdktf.booleanToTerraform(struct!.disableIpamProjection),
    ip_space: cdktf.stringToTerraform(struct!.ipSpace),
  }
}


export function cloudDiscoveryProviderDestinationsConfigIpamToHclTerraform(struct?: CloudDiscoveryProviderDestinationsConfigIpam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_server: {
      value: cdktf.stringToHclTerraform(struct!.dhcpServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_ipam_projection: {
      value: cdktf.booleanToHclTerraform(struct!.disableIpamProjection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_space: {
      value: cdktf.stringToHclTerraform(struct!.ipSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderDestinationsConfigIpamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDiscoveryProviderDestinationsConfigIpam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer;
    }
    if (this._disableIpamProjection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIpamProjection = this._disableIpamProjection;
    }
    if (this._ipSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSpace = this._ipSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderDestinationsConfigIpam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpServer = undefined;
      this._disableIpamProjection = undefined;
      this._ipSpace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpServer = value.dhcpServer;
      this._disableIpamProjection = value.disableIpamProjection;
      this._ipSpace = value.ipSpace;
    }
  }

  // dhcp_server - computed: true, optional: true, required: false
  private _dhcpServer?: string; 
  public get dhcpServer() {
    return this.getStringAttribute('dhcp_server');
  }
  public set dhcpServer(value: string) {
    this._dhcpServer = value;
  }
  public resetDhcpServer() {
    this._dhcpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer;
  }

  // disable_ipam_projection - computed: true, optional: true, required: false
  private _disableIpamProjection?: boolean | cdktf.IResolvable; 
  public get disableIpamProjection() {
    return this.getBooleanAttribute('disable_ipam_projection');
  }
  public set disableIpamProjection(value: boolean | cdktf.IResolvable) {
    this._disableIpamProjection = value;
  }
  public resetDisableIpamProjection() {
    this._disableIpamProjection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpamProjectionInput() {
    return this._disableIpamProjection;
  }

  // ip_space - computed: true, optional: true, required: false
  private _ipSpace?: string; 
  public get ipSpace() {
    return this.getStringAttribute('ip_space');
  }
  public set ipSpace(value: string) {
    this._ipSpace = value;
  }
  public resetIpSpace() {
    this._ipSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceInput() {
    return this._ipSpace;
  }
}
export interface CloudDiscoveryProviderDestinationsConfig {
  /**
  * Destination Config for DNS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#dns CloudDiscoveryProvider#dns}
  */
  readonly dns?: CloudDiscoveryProviderDestinationsConfigDns;
  /**
  * Destination Config for IPAM/DHCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#ipam CloudDiscoveryProvider#ipam}
  */
  readonly ipam?: CloudDiscoveryProviderDestinationsConfigIpam;
}

export function cloudDiscoveryProviderDestinationsConfigToTerraform(struct?: CloudDiscoveryProviderDestinationsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cloudDiscoveryProviderDestinationsConfigDnsToTerraform(struct!.dns),
    ipam: cloudDiscoveryProviderDestinationsConfigIpamToTerraform(struct!.ipam),
  }
}


export function cloudDiscoveryProviderDestinationsConfigToHclTerraform(struct?: CloudDiscoveryProviderDestinationsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cloudDiscoveryProviderDestinationsConfigDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDiscoveryProviderDestinationsConfigDns",
    },
    ipam: {
      value: cloudDiscoveryProviderDestinationsConfigIpamToHclTerraform(struct!.ipam),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDiscoveryProviderDestinationsConfigIpam",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderDestinationsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDiscoveryProviderDestinationsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._ipam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipam = this._ipam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderDestinationsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
      this._ipam.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
      this._ipam.internalValue = value.ipam;
    }
  }

  // dns - computed: true, optional: true, required: false
  private _dns = new CloudDiscoveryProviderDestinationsConfigDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: CloudDiscoveryProviderDestinationsConfigDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // ipam - computed: true, optional: true, required: false
  private _ipam = new CloudDiscoveryProviderDestinationsConfigIpamOutputReference(this, "ipam");
  public get ipam() {
    return this._ipam;
  }
  public putIpam(value: CloudDiscoveryProviderDestinationsConfigIpam) {
    this._ipam.internalValue = value;
  }
  public resetIpam() {
    this._ipam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamInput() {
    return this._ipam.internalValue;
  }
}
export interface CloudDiscoveryProviderDestinations {
  /**
  * Destination configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#config CloudDiscoveryProvider#config}
  */
  readonly config?: CloudDiscoveryProviderDestinationsConfig;
  /**
  * Destination type: DNS or IPAM/DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#destination_type CloudDiscoveryProvider#destination_type}
  */
  readonly destinationType?: string;
}

export function cloudDiscoveryProviderDestinationsToTerraform(struct?: CloudDiscoveryProviderDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cloudDiscoveryProviderDestinationsConfigToTerraform(struct!.config),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
  }
}


export function cloudDiscoveryProviderDestinationsToHclTerraform(struct?: CloudDiscoveryProviderDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cloudDiscoveryProviderDestinationsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDiscoveryProviderDestinationsConfig",
    },
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDiscoveryProviderDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._destinationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._destinationType = value.destinationType;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new CloudDiscoveryProviderDestinationsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: CloudDiscoveryProviderDestinationsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // destination_type - computed: true, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class CloudDiscoveryProviderDestinationsList extends cdktf.ComplexList {
  public internalValue? : CloudDiscoveryProviderDestinations[] | cdktf.IResolvable

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
  public get(index: number): CloudDiscoveryProviderDestinationsOutputReference {
    return new CloudDiscoveryProviderDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDiscoveryProviderSourceConfigsAccounts {
  /**
  * Combined status of the account and the all the destinations statuses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#composite_status CloudDiscoveryProvider#composite_status}
  */
  readonly compositeStatus?: string;
  /**
  * Status message of the sync operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#composite_status_message CloudDiscoveryProvider#composite_status_message}
  */
  readonly compositeStatusMessage?: string;
  /**
  * Name of the source account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#name CloudDiscoveryProvider#name}
  */
  readonly name?: string;
  /**
  * Parent ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#parent_id CloudDiscoveryProvider#parent_id}
  */
  readonly parentId?: string;
  /**
  * Provider Account ID value, such as aws account_id, azure subscription_id, gcp project_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#provider_account_id CloudDiscoveryProvider#provider_account_id}
  */
  readonly providerAccountId?: string;
}

export function cloudDiscoveryProviderSourceConfigsAccountsToTerraform(struct?: CloudDiscoveryProviderSourceConfigsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    composite_status: cdktf.stringToTerraform(struct!.compositeStatus),
    composite_status_message: cdktf.stringToTerraform(struct!.compositeStatusMessage),
    name: cdktf.stringToTerraform(struct!.name),
    parent_id: cdktf.stringToTerraform(struct!.parentId),
    provider_account_id: cdktf.stringToTerraform(struct!.providerAccountId),
  }
}


export function cloudDiscoveryProviderSourceConfigsAccountsToHclTerraform(struct?: CloudDiscoveryProviderSourceConfigsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    composite_status: {
      value: cdktf.stringToHclTerraform(struct!.compositeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    composite_status_message: {
      value: cdktf.stringToHclTerraform(struct!.compositeStatusMessage),
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
    parent_id: {
      value: cdktf.stringToHclTerraform(struct!.parentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_account_id: {
      value: cdktf.stringToHclTerraform(struct!.providerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderSourceConfigsAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudDiscoveryProviderSourceConfigsAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeStatus = this._compositeStatus;
    }
    if (this._compositeStatusMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeStatusMessage = this._compositeStatusMessage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentId = this._parentId;
    }
    if (this._providerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountId = this._providerAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderSourceConfigsAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compositeStatus = undefined;
      this._compositeStatusMessage = undefined;
      this._name = undefined;
      this._parentId = undefined;
      this._providerAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compositeStatus = value.compositeStatus;
      this._compositeStatusMessage = value.compositeStatusMessage;
      this._name = value.name;
      this._parentId = value.parentId;
      this._providerAccountId = value.providerAccountId;
    }
  }

  // composite_status - computed: true, optional: true, required: false
  private _compositeStatus?: string; 
  public get compositeStatus() {
    return this.getStringAttribute('composite_status');
  }
  public set compositeStatus(value: string) {
    this._compositeStatus = value;
  }
  public resetCompositeStatus() {
    this._compositeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeStatusInput() {
    return this._compositeStatus;
  }

  // composite_status_message - computed: true, optional: true, required: false
  private _compositeStatusMessage?: string; 
  public get compositeStatusMessage() {
    return this.getStringAttribute('composite_status_message');
  }
  public set compositeStatusMessage(value: string) {
    this._compositeStatusMessage = value;
  }
  public resetCompositeStatusMessage() {
    this._compositeStatusMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeStatusMessageInput() {
    return this._compositeStatusMessage;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // dhcp_server_id - computed: true, optional: false, required: false
  public get dhcpServerId() {
    return this.getStringAttribute('dhcp_server_id');
  }

  // dns_server_id - computed: true, optional: false, required: false
  public get dnsServerId() {
    return this.getStringAttribute('dns_server_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_successful_sync - computed: true, optional: false, required: false
  public get lastSuccessfulSync() {
    return this.getStringAttribute('last_successful_sync');
  }

  // last_sync - computed: true, optional: false, required: false
  public get lastSync() {
    return this.getStringAttribute('last_sync');
  }

  // name - computed: true, optional: true, required: false
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

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // percent_complete - computed: true, optional: false, required: false
  public get percentComplete() {
    return this.getNumberAttribute('percent_complete');
  }

  // provider_account_id - computed: true, optional: true, required: false
  private _providerAccountId?: string; 
  public get providerAccountId() {
    return this.getStringAttribute('provider_account_id');
  }
  public set providerAccountId(value: string) {
    this._providerAccountId = value;
  }
  public resetProviderAccountId() {
    this._providerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountIdInput() {
    return this._providerAccountId;
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class CloudDiscoveryProviderSourceConfigsAccountsList extends cdktf.ComplexList {
  public internalValue? : CloudDiscoveryProviderSourceConfigsAccounts[] | cdktf.IResolvable

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
  public get(index: number): CloudDiscoveryProviderSourceConfigsAccountsOutputReference {
    return new CloudDiscoveryProviderSourceConfigsAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDiscoveryProviderSourceConfigsCredentialConfig {
  /**
  * access_identifier values: role_arn_1, tenant_id_123,project_id_123
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#access_identifier CloudDiscoveryProvider#access_identifier}
  */
  readonly accessIdentifier?: string;
  /**
  * Enclave of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#enclave CloudDiscoveryProvider#enclave}
  */
  readonly enclave?: string;
  /**
  * Region of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#region CloudDiscoveryProvider#region}
  */
  readonly region?: string;
}

export function cloudDiscoveryProviderSourceConfigsCredentialConfigToTerraform(struct?: CloudDiscoveryProviderSourceConfigsCredentialConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_identifier: cdktf.stringToTerraform(struct!.accessIdentifier),
    enclave: cdktf.stringToTerraform(struct!.enclave),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function cloudDiscoveryProviderSourceConfigsCredentialConfigToHclTerraform(struct?: CloudDiscoveryProviderSourceConfigsCredentialConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_identifier: {
      value: cdktf.stringToHclTerraform(struct!.accessIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enclave: {
      value: cdktf.stringToHclTerraform(struct!.enclave),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderSourceConfigsCredentialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDiscoveryProviderSourceConfigsCredentialConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessIdentifier = this._accessIdentifier;
    }
    if (this._enclave !== undefined) {
      hasAnyValues = true;
      internalValueResult.enclave = this._enclave;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderSourceConfigsCredentialConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessIdentifier = undefined;
      this._enclave = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessIdentifier = value.accessIdentifier;
      this._enclave = value.enclave;
      this._region = value.region;
    }
  }

  // access_identifier - computed: true, optional: true, required: false
  private _accessIdentifier?: string; 
  public get accessIdentifier() {
    return this.getStringAttribute('access_identifier');
  }
  public set accessIdentifier(value: string) {
    this._accessIdentifier = value;
  }
  public resetAccessIdentifier() {
    this._accessIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdentifierInput() {
    return this._accessIdentifier;
  }

  // enclave - computed: true, optional: true, required: false
  private _enclave?: string; 
  public get enclave() {
    return this.getStringAttribute('enclave');
  }
  public set enclave(value: string) {
    this._enclave = value;
  }
  public resetEnclave() {
    this._enclave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enclaveInput() {
    return this._enclave;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface CloudDiscoveryProviderSourceConfigs {
  /**
  * Cloud Credential ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#cloud_credential_id CloudDiscoveryProvider#cloud_credential_id}
  */
  readonly cloudCredentialId?: string;
  /**
  * Credential configuration For the discovery job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#credential_config CloudDiscoveryProvider#credential_config}
  */
  readonly credentialConfig?: CloudDiscoveryProviderSourceConfigsCredentialConfig;
  /**
  * Provider account IDs such as accountID/ SubscriptionID to be restricted for a given source_config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#restricted_to_accounts CloudDiscoveryProvider#restricted_to_accounts}
  */
  readonly restrictedToAccounts?: string[];
}

export function cloudDiscoveryProviderSourceConfigsToTerraform(struct?: CloudDiscoveryProviderSourceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_credential_id: cdktf.stringToTerraform(struct!.cloudCredentialId),
    credential_config: cloudDiscoveryProviderSourceConfigsCredentialConfigToTerraform(struct!.credentialConfig),
    restricted_to_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedToAccounts),
  }
}


export function cloudDiscoveryProviderSourceConfigsToHclTerraform(struct?: CloudDiscoveryProviderSourceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_config: {
      value: cloudDiscoveryProviderSourceConfigsCredentialConfigToHclTerraform(struct!.credentialConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDiscoveryProviderSourceConfigsCredentialConfig",
    },
    restricted_to_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedToAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDiscoveryProviderSourceConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDiscoveryProviderSourceConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredentialId = this._cloudCredentialId;
    }
    if (this._credentialConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialConfig = this._credentialConfig?.internalValue;
    }
    if (this._restrictedToAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedToAccounts = this._restrictedToAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDiscoveryProviderSourceConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudCredentialId = undefined;
      this._credentialConfig.internalValue = undefined;
      this._restrictedToAccounts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudCredentialId = value.cloudCredentialId;
      this._credentialConfig.internalValue = value.credentialConfig;
      this._restrictedToAccounts = value.restrictedToAccounts;
    }
  }

  // account_schedule_id - computed: true, optional: false, required: false
  public get accountScheduleId() {
    return this.getStringAttribute('account_schedule_id');
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new CloudDiscoveryProviderSourceConfigsAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // cloud_credential_id - computed: true, optional: true, required: false
  private _cloudCredentialId?: string; 
  public get cloudCredentialId() {
    return this.getStringAttribute('cloud_credential_id');
  }
  public set cloudCredentialId(value: string) {
    this._cloudCredentialId = value;
  }
  public resetCloudCredentialId() {
    this._cloudCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialIdInput() {
    return this._cloudCredentialId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credential_config - computed: true, optional: true, required: false
  private _credentialConfig = new CloudDiscoveryProviderSourceConfigsCredentialConfigOutputReference(this, "credential_config");
  public get credentialConfig() {
    return this._credentialConfig;
  }
  public putCredentialConfig(value: CloudDiscoveryProviderSourceConfigsCredentialConfig) {
    this._credentialConfig.internalValue = value;
  }
  public resetCredentialConfig() {
    this._credentialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialConfigInput() {
    return this._credentialConfig.internalValue;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // restricted_to_accounts - computed: true, optional: true, required: false
  private _restrictedToAccounts?: string[]; 
  public get restrictedToAccounts() {
    return this.getListAttribute('restricted_to_accounts');
  }
  public set restrictedToAccounts(value: string[]) {
    this._restrictedToAccounts = value;
  }
  public resetRestrictedToAccounts() {
    this._restrictedToAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedToAccountsInput() {
    return this._restrictedToAccounts;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class CloudDiscoveryProviderSourceConfigsList extends cdktf.ComplexList {
  public internalValue? : CloudDiscoveryProviderSourceConfigs[] | cdktf.IResolvable

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
  public get(index: number): CloudDiscoveryProviderSourceConfigsOutputReference {
    return new CloudDiscoveryProviderSourceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider bloxone_cloud_discovery_provider}
*/
export class CloudDiscoveryProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_cloud_discovery_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudDiscoveryProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudDiscoveryProvider to import
  * @param importFromId The id of the existing CloudDiscoveryProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudDiscoveryProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_cloud_discovery_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/cloud_discovery_provider bloxone_cloud_discovery_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudDiscoveryProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CloudDiscoveryProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_cloud_discovery_provider',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountPreference = config.accountPreference;
    this._additionalConfig.internalValue = config.additionalConfig;
    this._credentialPreference.internalValue = config.credentialPreference;
    this._deletedAt = config.deletedAt;
    this._description = config.description;
    this._desiredState = config.desiredState;
    this._destinationTypesEnabled = config.destinationTypesEnabled;
    this._destinations.internalValue = config.destinations;
    this._name = config.name;
    this._providerType = config.providerType;
    this._sourceConfigs.internalValue = config.sourceConfigs;
    this._syncInterval = config.syncInterval;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_preference - computed: false, optional: false, required: true
  private _accountPreference?: string; 
  public get accountPreference() {
    return this.getStringAttribute('account_preference');
  }
  public set accountPreference(value: string) {
    this._accountPreference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPreferenceInput() {
    return this._accountPreference;
  }

  // additional_config - computed: true, optional: true, required: false
  private _additionalConfig = new CloudDiscoveryProviderAdditionalConfigOutputReference(this, "additional_config");
  public get additionalConfig() {
    return this._additionalConfig;
  }
  public putAdditionalConfig(value: CloudDiscoveryProviderAdditionalConfig) {
    this._additionalConfig.internalValue = value;
  }
  public resetAdditionalConfig() {
    this._additionalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigInput() {
    return this._additionalConfig.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credential_preference - computed: true, optional: true, required: false
  private _credentialPreference = new CloudDiscoveryProviderCredentialPreferenceOutputReference(this, "credential_preference");
  public get credentialPreference() {
    return this._credentialPreference;
  }
  public putCredentialPreference(value: CloudDiscoveryProviderCredentialPreference) {
    this._credentialPreference.internalValue = value;
  }
  public resetCredentialPreference() {
    this._credentialPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialPreferenceInput() {
    return this._credentialPreference.internalValue;
  }

  // deleted_at - computed: false, optional: true, required: false
  private _deletedAt?: string; 
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }
  public set deletedAt(value: string) {
    this._deletedAt = value;
  }
  public resetDeletedAt() {
    this._deletedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedAtInput() {
    return this._deletedAt;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // desired_state - computed: true, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // destination_types_enabled - computed: true, optional: true, required: false
  private _destinationTypesEnabled?: string[]; 
  public get destinationTypesEnabled() {
    return this.getListAttribute('destination_types_enabled');
  }
  public set destinationTypesEnabled(value: string[]) {
    this._destinationTypesEnabled = value;
  }
  public resetDestinationTypesEnabled() {
    this._destinationTypesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypesEnabledInput() {
    return this._destinationTypesEnabled;
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations = new CloudDiscoveryProviderDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: CloudDiscoveryProviderDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_sync - computed: true, optional: false, required: false
  public get lastSync() {
    return this.getStringAttribute('last_sync');
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

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // source_configs - computed: true, optional: true, required: false
  private _sourceConfigs = new CloudDiscoveryProviderSourceConfigsList(this, "source_configs", false);
  public get sourceConfigs() {
    return this._sourceConfigs;
  }
  public putSourceConfigs(value: CloudDiscoveryProviderSourceConfigs[] | cdktf.IResolvable) {
    this._sourceConfigs.internalValue = value;
  }
  public resetSourceConfigs() {
    this._sourceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigsInput() {
    return this._sourceConfigs.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // sync_interval - computed: true, optional: true, required: false
  private _syncInterval?: string; 
  public get syncInterval() {
    return this.getStringAttribute('sync_interval');
  }
  public set syncInterval(value: string) {
    this._syncInterval = value;
  }
  public resetSyncInterval() {
    this._syncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalInput() {
    return this._syncInterval;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_preference: cdktf.stringToTerraform(this._accountPreference),
      additional_config: cloudDiscoveryProviderAdditionalConfigToTerraform(this._additionalConfig.internalValue),
      credential_preference: cloudDiscoveryProviderCredentialPreferenceToTerraform(this._credentialPreference.internalValue),
      deleted_at: cdktf.stringToTerraform(this._deletedAt),
      description: cdktf.stringToTerraform(this._description),
      desired_state: cdktf.stringToTerraform(this._desiredState),
      destination_types_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationTypesEnabled),
      destinations: cdktf.listMapper(cloudDiscoveryProviderDestinationsToTerraform, false)(this._destinations.internalValue),
      name: cdktf.stringToTerraform(this._name),
      provider_type: cdktf.stringToTerraform(this._providerType),
      source_configs: cdktf.listMapper(cloudDiscoveryProviderSourceConfigsToTerraform, false)(this._sourceConfigs.internalValue),
      sync_interval: cdktf.stringToTerraform(this._syncInterval),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_preference: {
        value: cdktf.stringToHclTerraform(this._accountPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_config: {
        value: cloudDiscoveryProviderAdditionalConfigToHclTerraform(this._additionalConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudDiscoveryProviderAdditionalConfig",
      },
      credential_preference: {
        value: cloudDiscoveryProviderCredentialPreferenceToHclTerraform(this._credentialPreference.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudDiscoveryProviderCredentialPreference",
      },
      deleted_at: {
        value: cdktf.stringToHclTerraform(this._deletedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_state: {
        value: cdktf.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_types_enabled: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationTypesEnabled),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destinations: {
        value: cdktf.listMapperHcl(cloudDiscoveryProviderDestinationsToHclTerraform, false)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudDiscoveryProviderDestinationsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_configs: {
        value: cdktf.listMapperHcl(cloudDiscoveryProviderSourceConfigsToHclTerraform, false)(this._sourceConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudDiscoveryProviderSourceConfigsList",
      },
      sync_interval: {
        value: cdktf.stringToHclTerraform(this._syncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
