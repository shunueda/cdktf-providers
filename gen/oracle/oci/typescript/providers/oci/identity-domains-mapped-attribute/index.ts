// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsMappedAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#attribute_sets IdentityDomainsMappedAttribute#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#attributes IdentityDomainsMappedAttribute#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#authorization IdentityDomainsMappedAttribute#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#direction IdentityDomainsMappedAttribute#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#idcs_endpoint IdentityDomainsMappedAttribute#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#idcs_resource_type IdentityDomainsMappedAttribute#idcs_resource_type}
  */
  readonly idcsResourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#mapped_attribute_id IdentityDomainsMappedAttribute#mapped_attribute_id}
  */
  readonly mappedAttributeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#ocid IdentityDomainsMappedAttribute#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#ref_resource_id IdentityDomainsMappedAttribute#ref_resource_id}
  */
  readonly refResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#ref_resource_type IdentityDomainsMappedAttribute#ref_resource_type}
  */
  readonly refResourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#resource_type_schema_version IdentityDomainsMappedAttribute#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#schemas IdentityDomainsMappedAttribute#schemas}
  */
  readonly schemas: string[];
  /**
  * attribute_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#attribute_mappings IdentityDomainsMappedAttribute#attribute_mappings}
  */
  readonly attributeMappings?: IdentityDomainsMappedAttributeAttributeMappings[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#tags IdentityDomainsMappedAttribute#tags}
  */
  readonly tags?: IdentityDomainsMappedAttributeTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#timeouts IdentityDomainsMappedAttribute#timeouts}
  */
  readonly timeouts?: IdentityDomainsMappedAttributeTimeouts;
}
export interface IdentityDomainsMappedAttributeIdcsCreatedBy {
}

export function identityDomainsMappedAttributeIdcsCreatedByToTerraform(struct?: IdentityDomainsMappedAttributeIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsMappedAttributeIdcsCreatedByToHclTerraform(struct?: IdentityDomainsMappedAttributeIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsMappedAttributeIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsMappedAttributeIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsMappedAttributeIdcsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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

export class IdentityDomainsMappedAttributeIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsMappedAttributeIdcsCreatedByOutputReference {
    return new IdentityDomainsMappedAttributeIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsMappedAttributeIdcsLastModifiedBy {
}

export function identityDomainsMappedAttributeIdcsLastModifiedByToTerraform(struct?: IdentityDomainsMappedAttributeIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsMappedAttributeIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsMappedAttributeIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsMappedAttributeIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsMappedAttributeIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsMappedAttributeIdcsLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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

export class IdentityDomainsMappedAttributeIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsMappedAttributeIdcsLastModifiedByOutputReference {
    return new IdentityDomainsMappedAttributeIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsMappedAttributeMeta {
}

export function identityDomainsMappedAttributeMetaToTerraform(struct?: IdentityDomainsMappedAttributeMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsMappedAttributeMetaToHclTerraform(struct?: IdentityDomainsMappedAttributeMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsMappedAttributeMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsMappedAttributeMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsMappedAttributeMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class IdentityDomainsMappedAttributeMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsMappedAttributeMetaOutputReference {
    return new IdentityDomainsMappedAttributeMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsMappedAttributeAttributeMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#applies_to_actions IdentityDomainsMappedAttribute#applies_to_actions}
  */
  readonly appliesToActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#idcs_attribute_name IdentityDomainsMappedAttribute#idcs_attribute_name}
  */
  readonly idcsAttributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#managed_object_attribute_name IdentityDomainsMappedAttribute#managed_object_attribute_name}
  */
  readonly managedObjectAttributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#required IdentityDomainsMappedAttribute#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#saml_format IdentityDomainsMappedAttribute#saml_format}
  */
  readonly samlFormat?: string;
}

export function identityDomainsMappedAttributeAttributeMappingsToTerraform(struct?: IdentityDomainsMappedAttributeAttributeMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appliesToActions),
    idcs_attribute_name: cdktf.stringToTerraform(struct!.idcsAttributeName),
    managed_object_attribute_name: cdktf.stringToTerraform(struct!.managedObjectAttributeName),
    required: cdktf.booleanToTerraform(struct!.required),
    saml_format: cdktf.stringToTerraform(struct!.samlFormat),
  }
}


export function identityDomainsMappedAttributeAttributeMappingsToHclTerraform(struct?: IdentityDomainsMappedAttributeAttributeMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appliesToActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    idcs_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.idcsAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_object_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.managedObjectAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saml_format: {
      value: cdktf.stringToHclTerraform(struct!.samlFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsMappedAttributeAttributeMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsMappedAttributeAttributeMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesToActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesToActions = this._appliesToActions;
    }
    if (this._idcsAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcsAttributeName = this._idcsAttributeName;
    }
    if (this._managedObjectAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedObjectAttributeName = this._managedObjectAttributeName;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._samlFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlFormat = this._samlFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsMappedAttributeAttributeMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliesToActions = undefined;
      this._idcsAttributeName = undefined;
      this._managedObjectAttributeName = undefined;
      this._required = undefined;
      this._samlFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliesToActions = value.appliesToActions;
      this._idcsAttributeName = value.idcsAttributeName;
      this._managedObjectAttributeName = value.managedObjectAttributeName;
      this._required = value.required;
      this._samlFormat = value.samlFormat;
    }
  }

  // applies_to_actions - computed: true, optional: true, required: false
  private _appliesToActions?: string[]; 
  public get appliesToActions() {
    return this.getListAttribute('applies_to_actions');
  }
  public set appliesToActions(value: string[]) {
    this._appliesToActions = value;
  }
  public resetAppliesToActions() {
    this._appliesToActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToActionsInput() {
    return this._appliesToActions;
  }

  // idcs_attribute_name - computed: false, optional: false, required: true
  private _idcsAttributeName?: string; 
  public get idcsAttributeName() {
    return this.getStringAttribute('idcs_attribute_name');
  }
  public set idcsAttributeName(value: string) {
    this._idcsAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsAttributeNameInput() {
    return this._idcsAttributeName;
  }

  // managed_object_attribute_name - computed: false, optional: false, required: true
  private _managedObjectAttributeName?: string; 
  public get managedObjectAttributeName() {
    return this.getStringAttribute('managed_object_attribute_name');
  }
  public set managedObjectAttributeName(value: string) {
    this._managedObjectAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedObjectAttributeNameInput() {
    return this._managedObjectAttributeName;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // saml_format - computed: true, optional: true, required: false
  private _samlFormat?: string; 
  public get samlFormat() {
    return this.getStringAttribute('saml_format');
  }
  public set samlFormat(value: string) {
    this._samlFormat = value;
  }
  public resetSamlFormat() {
    this._samlFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlFormatInput() {
    return this._samlFormat;
  }
}

export class IdentityDomainsMappedAttributeAttributeMappingsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsMappedAttributeAttributeMappings[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsMappedAttributeAttributeMappingsOutputReference {
    return new IdentityDomainsMappedAttributeAttributeMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsMappedAttributeTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#key IdentityDomainsMappedAttribute#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#value IdentityDomainsMappedAttribute#value}
  */
  readonly value: string;
}

export function identityDomainsMappedAttributeTagsToTerraform(struct?: IdentityDomainsMappedAttributeTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsMappedAttributeTagsToHclTerraform(struct?: IdentityDomainsMappedAttributeTags | cdktf.IResolvable): any {
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

export class IdentityDomainsMappedAttributeTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsMappedAttributeTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsMappedAttributeTags | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IdentityDomainsMappedAttributeTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsMappedAttributeTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsMappedAttributeTagsOutputReference {
    return new IdentityDomainsMappedAttributeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsMappedAttributeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#create IdentityDomainsMappedAttribute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#delete IdentityDomainsMappedAttribute#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#update IdentityDomainsMappedAttribute#update}
  */
  readonly update?: string;
}

export function identityDomainsMappedAttributeTimeoutsToTerraform(struct?: IdentityDomainsMappedAttributeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function identityDomainsMappedAttributeTimeoutsToHclTerraform(struct?: IdentityDomainsMappedAttributeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsMappedAttributeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsMappedAttributeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsMappedAttributeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute oci_identity_domains_mapped_attribute}
*/
export class IdentityDomainsMappedAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_mapped_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsMappedAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsMappedAttribute to import
  * @param importFromId The id of the existing IdentityDomainsMappedAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsMappedAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_mapped_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/identity_domains_mapped_attribute oci_identity_domains_mapped_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsMappedAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsMappedAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_mapped_attribute',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._direction = config.direction;
    this._idcsEndpoint = config.idcsEndpoint;
    this._idcsResourceType = config.idcsResourceType;
    this._mappedAttributeId = config.mappedAttributeId;
    this._ocid = config.ocid;
    this._refResourceId = config.refResourceId;
    this._refResourceType = config.refResourceType;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._schemas = config.schemas;
    this._attributeMappings.internalValue = config.attributeMappings;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_sets - computed: false, optional: true, required: false
  private _attributeSets?: string[]; 
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }
  public set attributeSets(value: string[]) {
    this._attributeSets = value;
  }
  public resetAttributeSets() {
    this._attributeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetsInput() {
    return this._attributeSets;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsMappedAttributeIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: false, optional: false, required: true
  private _idcsEndpoint?: string; 
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }
  public set idcsEndpoint(value: string) {
    this._idcsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsEndpointInput() {
    return this._idcsEndpoint;
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new IdentityDomainsMappedAttributeIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // idcs_resource_type - computed: false, optional: false, required: true
  private _idcsResourceType?: string; 
  public get idcsResourceType() {
    return this.getStringAttribute('idcs_resource_type');
  }
  public set idcsResourceType(value: string) {
    this._idcsResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsResourceTypeInput() {
    return this._idcsResourceType;
  }

  // mapped_attribute_id - computed: false, optional: false, required: true
  private _mappedAttributeId?: string; 
  public get mappedAttributeId() {
    return this.getStringAttribute('mapped_attribute_id');
  }
  public set mappedAttributeId(value: string) {
    this._mappedAttributeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedAttributeIdInput() {
    return this._mappedAttributeId;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsMappedAttributeMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // ocid - computed: true, optional: true, required: false
  private _ocid?: string; 
  public get ocid() {
    return this.getStringAttribute('ocid');
  }
  public set ocid(value: string) {
    this._ocid = value;
  }
  public resetOcid() {
    this._ocid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocidInput() {
    return this._ocid;
  }

  // ref_resource_id - computed: false, optional: false, required: true
  private _refResourceId?: string; 
  public get refResourceId() {
    return this.getStringAttribute('ref_resource_id');
  }
  public set refResourceId(value: string) {
    this._refResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refResourceIdInput() {
    return this._refResourceId;
  }

  // ref_resource_type - computed: false, optional: false, required: true
  private _refResourceType?: string; 
  public get refResourceType() {
    return this.getStringAttribute('ref_resource_type');
  }
  public set refResourceType(value: string) {
    this._refResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refResourceTypeInput() {
    return this._refResourceType;
  }

  // resource_type_schema_version - computed: false, optional: true, required: false
  private _resourceTypeSchemaVersion?: string; 
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }
  public set resourceTypeSchemaVersion(value: string) {
    this._resourceTypeSchemaVersion = value;
  }
  public resetResourceTypeSchemaVersion() {
    this._resourceTypeSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaVersionInput() {
    return this._resourceTypeSchemaVersion;
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas?: string[]; 
  public get schemas() {
    return this.getListAttribute('schemas');
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // attribute_mappings - computed: false, optional: true, required: false
  private _attributeMappings = new IdentityDomainsMappedAttributeAttributeMappingsList(this, "attribute_mappings", true);
  public get attributeMappings() {
    return this._attributeMappings;
  }
  public putAttributeMappings(value: IdentityDomainsMappedAttributeAttributeMappings[] | cdktf.IResolvable) {
    this._attributeMappings.internalValue = value;
  }
  public resetAttributeMappings() {
    this._attributeMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMappingsInput() {
    return this._attributeMappings.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsMappedAttributeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsMappedAttributeTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityDomainsMappedAttributeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsMappedAttributeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      direction: cdktf.stringToTerraform(this._direction),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      idcs_resource_type: cdktf.stringToTerraform(this._idcsResourceType),
      mapped_attribute_id: cdktf.stringToTerraform(this._mappedAttributeId),
      ocid: cdktf.stringToTerraform(this._ocid),
      ref_resource_id: cdktf.stringToTerraform(this._refResourceId),
      ref_resource_type: cdktf.stringToTerraform(this._refResourceType),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      attribute_mappings: cdktf.listMapper(identityDomainsMappedAttributeAttributeMappingsToTerraform, true)(this._attributeMappings.internalValue),
      tags: cdktf.listMapper(identityDomainsMappedAttributeTagsToTerraform, true)(this._tags.internalValue),
      timeouts: identityDomainsMappedAttributeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_resource_type: {
        value: cdktf.stringToHclTerraform(this._idcsResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapped_attribute_id: {
        value: cdktf.stringToHclTerraform(this._mappedAttributeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocid: {
        value: cdktf.stringToHclTerraform(this._ocid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref_resource_id: {
        value: cdktf.stringToHclTerraform(this._refResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref_resource_type: {
        value: cdktf.stringToHclTerraform(this._refResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schemas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attribute_mappings: {
        value: cdktf.listMapperHcl(identityDomainsMappedAttributeAttributeMappingsToHclTerraform, true)(this._attributeMappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsMappedAttributeAttributeMappingsList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsMappedAttributeTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsMappedAttributeTagsList",
      },
      timeouts: {
        value: identityDomainsMappedAttributeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsMappedAttributeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
