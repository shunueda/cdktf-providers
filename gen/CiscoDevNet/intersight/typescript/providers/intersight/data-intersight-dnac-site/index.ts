// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightDnacSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#account_moid DataIntersightDnacSite#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#class_id DataIntersightDnacSite#class_id}
  */
  readonly classId?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#create_time DataIntersightDnacSite#create_time}
  */
  readonly createTime?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#domain_group_moid DataIntersightDnacSite#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Fabric site name hierarchy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#fabric_site_name_hierarchy DataIntersightDnacSite#fabric_site_name_hierarchy}
  */
  readonly fabricSiteNameHierarchy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#id DataIntersightDnacSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#mod_time DataIntersightDnacSite#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#moid DataIntersightDnacSite#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#object_type DataIntersightDnacSite#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#owners DataIntersightDnacSite#owners}
  */
  readonly owners?: string[];
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#shared_scope DataIntersightDnacSite#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Identification for the Site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#site_id DataIntersightDnacSite#site_id}
  */
  readonly siteId?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#ancestors DataIntersightDnacSite#ancestors}
  */
  readonly ancestors?: DataIntersightDnacSiteAncestors[] | cdktf.IResolvable;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#parent DataIntersightDnacSite#parent}
  */
  readonly parent?: DataIntersightDnacSiteParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#permission_resources DataIntersightDnacSite#permission_resources}
  */
  readonly permissionResources?: DataIntersightDnacSitePermissionResources[] | cdktf.IResolvable;
  /**
  * registered_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#registered_device DataIntersightDnacSite#registered_device}
  */
  readonly registeredDevice?: DataIntersightDnacSiteRegisteredDevice;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#tags DataIntersightDnacSite#tags}
  */
  readonly tags?: DataIntersightDnacSiteTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#version_context DataIntersightDnacSite#version_context}
  */
  readonly versionContext?: DataIntersightDnacSiteVersionContext;
}
export interface DataIntersightDnacSiteResultsAncestors {
}

export function dataIntersightDnacSiteResultsAncestorsToTerraform(struct?: DataIntersightDnacSiteResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsAncestorsToHclTerraform(struct?: DataIntersightDnacSiteResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightDnacSiteResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsAncestorsOutputReference {
    return new DataIntersightDnacSiteResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteResultsParent {
}

export function dataIntersightDnacSiteResultsParentToTerraform(struct?: DataIntersightDnacSiteResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsParentToHclTerraform(struct?: DataIntersightDnacSiteResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightDnacSiteResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsParentOutputReference {
    return new DataIntersightDnacSiteResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteResultsPermissionResources {
}

export function dataIntersightDnacSiteResultsPermissionResourcesToTerraform(struct?: DataIntersightDnacSiteResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsPermissionResourcesToHclTerraform(struct?: DataIntersightDnacSiteResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightDnacSiteResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsPermissionResourcesOutputReference {
    return new DataIntersightDnacSiteResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteResultsRegisteredDevice {
}

export function dataIntersightDnacSiteResultsRegisteredDeviceToTerraform(struct?: DataIntersightDnacSiteResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsRegisteredDeviceToHclTerraform(struct?: DataIntersightDnacSiteResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsRegisteredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResultsRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResultsRegisteredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightDnacSiteResultsRegisteredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsRegisteredDeviceOutputReference {
    return new DataIntersightDnacSiteResultsRegisteredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteResultsTagsAncestorDefinitions {
}

export function dataIntersightDnacSiteResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightDnacSiteResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightDnacSiteResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightDnacSiteResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightDnacSiteResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteResultsTagsDefinition {
}

export function dataIntersightDnacSiteResultsTagsDefinitionToTerraform(struct?: DataIntersightDnacSiteResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsTagsDefinitionToHclTerraform(struct?: DataIntersightDnacSiteResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightDnacSiteResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsTagsDefinitionOutputReference {
    return new DataIntersightDnacSiteResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteResultsTags {
}

export function dataIntersightDnacSiteResultsTagsToTerraform(struct?: DataIntersightDnacSiteResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsTagsToHclTerraform(struct?: DataIntersightDnacSiteResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightDnacSiteResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightDnacSiteResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightDnacSiteResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsTagsOutputReference {
    return new DataIntersightDnacSiteResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteResultsVersionContextInterestedMos {
}

export function dataIntersightDnacSiteResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightDnacSiteResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightDnacSiteResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightDnacSiteResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightDnacSiteResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteResultsVersionContextRefMo {
}

export function dataIntersightDnacSiteResultsVersionContextRefMoToTerraform(struct?: DataIntersightDnacSiteResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightDnacSiteResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightDnacSiteResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsVersionContextRefMoOutputReference {
    return new DataIntersightDnacSiteResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteResultsVersionContext {
}

export function dataIntersightDnacSiteResultsVersionContextToTerraform(struct?: DataIntersightDnacSiteResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsVersionContextToHclTerraform(struct?: DataIntersightDnacSiteResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightDnacSiteResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightDnacSiteResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightDnacSiteResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsVersionContextOutputReference {
    return new DataIntersightDnacSiteResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteResults {
}

export function dataIntersightDnacSiteResultsToTerraform(struct?: DataIntersightDnacSiteResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightDnacSiteResultsToHclTerraform(struct?: DataIntersightDnacSiteResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightDnacSiteResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightDnacSiteResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // fabric_site_name_hierarchy - computed: true, optional: false, required: false
  public get fabricSiteNameHierarchy() {
    return this.getStringAttribute('fabric_site_name_hierarchy');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightDnacSiteResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightDnacSiteResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // registered_device - computed: true, optional: false, required: false
  private _registeredDevice = new DataIntersightDnacSiteResultsRegisteredDeviceList(this, "registered_device", false);
  public get registeredDevice() {
    return this._registeredDevice;
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightDnacSiteResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightDnacSiteResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
}

export class DataIntersightDnacSiteResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightDnacSiteResultsOutputReference {
    return new DataIntersightDnacSiteResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#class_id DataIntersightDnacSite#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#moid DataIntersightDnacSite#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#object_type DataIntersightDnacSite#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#selector DataIntersightDnacSite#selector}
  */
  readonly selector?: string;
}

export function dataIntersightDnacSiteAncestorsToTerraform(struct?: DataIntersightDnacSiteAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightDnacSiteAncestorsToHclTerraform(struct?: DataIntersightDnacSiteAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightDnacSiteAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightDnacSiteAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightDnacSiteAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightDnacSiteAncestorsOutputReference {
    return new DataIntersightDnacSiteAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#class_id DataIntersightDnacSite#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#moid DataIntersightDnacSite#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#object_type DataIntersightDnacSite#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#selector DataIntersightDnacSite#selector}
  */
  readonly selector?: string;
}

export function dataIntersightDnacSiteParentToTerraform(struct?: DataIntersightDnacSiteParentOutputReference | DataIntersightDnacSiteParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightDnacSiteParentToHclTerraform(struct?: DataIntersightDnacSiteParentOutputReference | DataIntersightDnacSiteParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightDnacSiteParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightDnacSiteParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightDnacSitePermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#class_id DataIntersightDnacSite#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#moid DataIntersightDnacSite#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#object_type DataIntersightDnacSite#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#selector DataIntersightDnacSite#selector}
  */
  readonly selector?: string;
}

export function dataIntersightDnacSitePermissionResourcesToTerraform(struct?: DataIntersightDnacSitePermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightDnacSitePermissionResourcesToHclTerraform(struct?: DataIntersightDnacSitePermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightDnacSitePermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSitePermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSitePermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightDnacSitePermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightDnacSitePermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightDnacSitePermissionResourcesOutputReference {
    return new DataIntersightDnacSitePermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteRegisteredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#class_id DataIntersightDnacSite#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#moid DataIntersightDnacSite#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#object_type DataIntersightDnacSite#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#selector DataIntersightDnacSite#selector}
  */
  readonly selector?: string;
}

export function dataIntersightDnacSiteRegisteredDeviceToTerraform(struct?: DataIntersightDnacSiteRegisteredDeviceOutputReference | DataIntersightDnacSiteRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightDnacSiteRegisteredDeviceToHclTerraform(struct?: DataIntersightDnacSiteRegisteredDeviceOutputReference | DataIntersightDnacSiteRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightDnacSiteRegisteredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightDnacSiteRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteRegisteredDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightDnacSiteTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#class_id DataIntersightDnacSite#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#moid DataIntersightDnacSite#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#object_type DataIntersightDnacSite#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#selector DataIntersightDnacSite#selector}
  */
  readonly selector?: string;
}

export function dataIntersightDnacSiteTagsAncestorDefinitionsToTerraform(struct?: DataIntersightDnacSiteTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightDnacSiteTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightDnacSiteTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightDnacSiteTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightDnacSiteTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightDnacSiteTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightDnacSiteTagsAncestorDefinitionsOutputReference {
    return new DataIntersightDnacSiteTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#class_id DataIntersightDnacSite#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#moid DataIntersightDnacSite#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#object_type DataIntersightDnacSite#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#selector DataIntersightDnacSite#selector}
  */
  readonly selector?: string;
}

export function dataIntersightDnacSiteTagsDefinitionToTerraform(struct?: DataIntersightDnacSiteTagsDefinitionOutputReference | DataIntersightDnacSiteTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightDnacSiteTagsDefinitionToHclTerraform(struct?: DataIntersightDnacSiteTagsDefinitionOutputReference | DataIntersightDnacSiteTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightDnacSiteTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightDnacSiteTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightDnacSiteTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#key DataIntersightDnacSite#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#propagated DataIntersightDnacSite#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#type DataIntersightDnacSite#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#value DataIntersightDnacSite#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#ancestor_definitions DataIntersightDnacSite#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightDnacSiteTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#definition DataIntersightDnacSite#definition}
  */
  readonly definition?: DataIntersightDnacSiteTagsDefinition;
}

export function dataIntersightDnacSiteTagsToTerraform(struct?: DataIntersightDnacSiteTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightDnacSiteTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightDnacSiteTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightDnacSiteTagsToHclTerraform(struct?: DataIntersightDnacSiteTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightDnacSiteTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightDnacSiteTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightDnacSiteTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightDnacSiteTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightDnacSiteTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
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

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
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

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightDnacSiteTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightDnacSiteTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightDnacSiteTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightDnacSiteTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightDnacSiteTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightDnacSiteTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightDnacSiteTagsOutputReference {
    return new DataIntersightDnacSiteTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#class_id DataIntersightDnacSite#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#moid DataIntersightDnacSite#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#object_type DataIntersightDnacSite#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#selector DataIntersightDnacSite#selector}
  */
  readonly selector?: string;
}

export function dataIntersightDnacSiteVersionContextInterestedMosToTerraform(struct?: DataIntersightDnacSiteVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightDnacSiteVersionContextInterestedMosToHclTerraform(struct?: DataIntersightDnacSiteVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightDnacSiteVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightDnacSiteVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightDnacSiteVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightDnacSiteVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightDnacSiteVersionContextInterestedMosOutputReference {
    return new DataIntersightDnacSiteVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightDnacSiteVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#class_id DataIntersightDnacSite#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#moid DataIntersightDnacSite#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#object_type DataIntersightDnacSite#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#selector DataIntersightDnacSite#selector}
  */
  readonly selector?: string;
}

export function dataIntersightDnacSiteVersionContextRefMoToTerraform(struct?: DataIntersightDnacSiteVersionContextRefMoOutputReference | DataIntersightDnacSiteVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightDnacSiteVersionContextRefMoToHclTerraform(struct?: DataIntersightDnacSiteVersionContextRefMoOutputReference | DataIntersightDnacSiteVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightDnacSiteVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightDnacSiteVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightDnacSiteVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#additional_properties DataIntersightDnacSite#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#class_id DataIntersightDnacSite#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#marked_for_deletion DataIntersightDnacSite#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#nr_version DataIntersightDnacSite#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#object_type DataIntersightDnacSite#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#timestamp DataIntersightDnacSite#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#version_type DataIntersightDnacSite#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#interested_mos DataIntersightDnacSite#interested_mos}
  */
  readonly interestedMos?: DataIntersightDnacSiteVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#ref_mo DataIntersightDnacSite#ref_mo}
  */
  readonly refMo?: DataIntersightDnacSiteVersionContextRefMo;
}

export function dataIntersightDnacSiteVersionContextToTerraform(struct?: DataIntersightDnacSiteVersionContextOutputReference | DataIntersightDnacSiteVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightDnacSiteVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightDnacSiteVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightDnacSiteVersionContextToHclTerraform(struct?: DataIntersightDnacSiteVersionContextOutputReference | DataIntersightDnacSiteVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightDnacSiteVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightDnacSiteVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightDnacSiteVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightDnacSiteVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightDnacSiteVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightDnacSiteVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightDnacSiteVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightDnacSiteVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightDnacSiteVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightDnacSiteVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightDnacSiteVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site intersight_dnac_site}
*/
export class DataIntersightDnacSite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_dnac_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightDnacSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightDnacSite to import
  * @param importFromId The id of the existing DataIntersightDnacSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightDnacSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_dnac_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/dnac_site intersight_dnac_site} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightDnacSiteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightDnacSiteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_dnac_site',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._classId = config.classId;
    this._createTime = config.createTime;
    this._domainGroupMoid = config.domainGroupMoid;
    this._fabricSiteNameHierarchy = config.fabricSiteNameHierarchy;
    this._id = config.id;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._sharedScope = config.sharedScope;
    this._siteId = config.siteId;
    this._ancestors.internalValue = config.ancestors;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._registeredDevice.internalValue = config.registeredDevice;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
  }

  // fabric_site_name_hierarchy - computed: false, optional: true, required: false
  private _fabricSiteNameHierarchy?: string; 
  public get fabricSiteNameHierarchy() {
    return this.getStringAttribute('fabric_site_name_hierarchy');
  }
  public set fabricSiteNameHierarchy(value: string) {
    this._fabricSiteNameHierarchy = value;
  }
  public resetFabricSiteNameHierarchy() {
    this._fabricSiteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricSiteNameHierarchyInput() {
    return this._fabricSiteNameHierarchy;
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

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightDnacSiteResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightDnacSiteAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightDnacSiteAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightDnacSiteParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightDnacSiteParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightDnacSitePermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightDnacSitePermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // registered_device - computed: false, optional: true, required: false
  private _registeredDevice = new DataIntersightDnacSiteRegisteredDeviceOutputReference(this, "registered_device");
  public get registeredDevice() {
    return this._registeredDevice;
  }
  public putRegisteredDevice(value: DataIntersightDnacSiteRegisteredDevice) {
    this._registeredDevice.internalValue = value;
  }
  public resetRegisteredDevice() {
    this._registeredDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredDeviceInput() {
    return this._registeredDevice.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightDnacSiteTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightDnacSiteTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightDnacSiteVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightDnacSiteVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      class_id: cdktf.stringToTerraform(this._classId),
      create_time: cdktf.stringToTerraform(this._createTime),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      fabric_site_name_hierarchy: cdktf.stringToTerraform(this._fabricSiteNameHierarchy),
      id: cdktf.stringToTerraform(this._id),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      site_id: cdktf.stringToTerraform(this._siteId),
      ancestors: cdktf.listMapper(dataIntersightDnacSiteAncestorsToTerraform, true)(this._ancestors.internalValue),
      parent: dataIntersightDnacSiteParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightDnacSitePermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      registered_device: dataIntersightDnacSiteRegisteredDeviceToTerraform(this._registeredDevice.internalValue),
      tags: cdktf.listMapper(dataIntersightDnacSiteTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightDnacSiteVersionContextToTerraform(this._versionContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_site_name_hierarchy: {
        value: cdktf.stringToHclTerraform(this._fabricSiteNameHierarchy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightDnacSiteAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightDnacSiteAncestorsList",
      },
      parent: {
        value: dataIntersightDnacSiteParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightDnacSiteParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightDnacSitePermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightDnacSitePermissionResourcesList",
      },
      registered_device: {
        value: dataIntersightDnacSiteRegisteredDeviceToHclTerraform(this._registeredDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightDnacSiteRegisteredDeviceList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightDnacSiteTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightDnacSiteTagsList",
      },
      version_context: {
        value: dataIntersightDnacSiteVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightDnacSiteVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
