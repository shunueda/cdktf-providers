// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestResourceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies an auxiliary LDAP object class that should be exposed by this REST Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#auxiliary_ldap_objectclass RestResourceType#auxiliary_ldap_objectclass}
  */
  readonly auxiliaryLdapObjectclass?: string[];
  /**
  * Specifies the name or OID of the LDAP attribute type to be used as the RDN of new resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#create_rdn_attribute_type RestResourceType#create_rdn_attribute_type}
  */
  readonly createRdnAttributeType?: string;
  /**
  * The maximum number of resources that may be included in a report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#delegated_admin_report_size_limit RestResourceType#delegated_admin_report_size_limit}
  */
  readonly delegatedAdminReportSizeLimit?: number;
  /**
  * The maximum number of resources that may be returned from a search request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#delegated_admin_search_size_limit RestResourceType#delegated_admin_search_size_limit}
  */
  readonly delegatedAdminSearchSizeLimit?: number;
  /**
  * A description for this REST Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#description RestResourceType#description}
  */
  readonly description?: string;
  /**
  * A human readable display name for this REST Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#display_name RestResourceType#display_name}
  */
  readonly displayName?: string;
  /**
  * Indicates whether the REST Resource Type is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#enabled RestResourceType#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The set of LDAP filters that define the LDAP entries that should be included in this REST Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#include_filter RestResourceType#include_filter}
  */
  readonly includeFilter?: string[];
  /**
  * Specifies the name of the group member column that will be displayed in the Delegated Admin UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#members_column_name RestResourceType#members_column_name}
  */
  readonly membersColumnName?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#name RestResourceType#name}
  */
  readonly name: string;
  /**
  * Specifies the name of the group nonmember column that will be displayed in the Delegated Admin UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#nonmembers_column_name RestResourceType#nonmembers_column_name}
  */
  readonly nonmembersColumnName?: string;
  /**
  * Specifies the DN of the parent entry for new resources of this type, when a parent resource is not provided by the app. The parent DN must be at or below the search base of this resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#parent_dn RestResourceType#parent_dn}
  */
  readonly parentDn?: string;
  /**
  * Specifies the name of another resource type which may be a parent of new resources of this type. The search base DN of the parent resource type must be at or above the search base DN of this resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#parent_resource_type RestResourceType#parent_resource_type}
  */
  readonly parentResourceType?: string;
  /**
  * Specifies which attribute category the password belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#password_attribute_category RestResourceType#password_attribute_category}
  */
  readonly passwordAttributeCategory?: string;
  /**
  * This property determines the display order for the password within its attribute category. Attributes are ordered within their category based on this index from least to greatest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#password_display_order_index RestResourceType#password_display_order_index}
  */
  readonly passwordDisplayOrderIndex?: number;
  /**
  * Specifies an attribute whose values are to be constructed when a new resource is created. The values are only set at creation time. Subsequent modifications to attributes in the constructed attribute value-pattern are not propagated here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#post_create_constructed_attribute RestResourceType#post_create_constructed_attribute}
  */
  readonly postCreateConstructedAttribute?: string[];
  /**
  * Specifies the name or OID of the LDAP attribute type which is the primary display attribute. This attribute type must be in the search filter pattern and must have a Delegated Admin Attribute definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#primary_display_attribute_type RestResourceType#primary_display_attribute_type}
  */
  readonly primaryDisplayAttributeType?: string;
  /**
  * Specifies a template for a relative DN from the parent resource which identifies the parent entry for a new resource of this type. If this property is not specified then new resources are created immediately below the parent resource or parent DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#relative_dn_from_parent_resource RestResourceType#relative_dn_from_parent_resource}
  */
  readonly relativeDnFromParentResource?: string;
  /**
  * The HTTP addressable endpoint of this REST Resource Type relative to a REST API base URL. Do not include a leading '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#resource_endpoint RestResourceType#resource_endpoint}
  */
  readonly resourceEndpoint: string;
  /**
  * Specifies the base DN of the branch of the LDAP directory where resources of this type are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#search_base_dn RestResourceType#search_base_dn}
  */
  readonly searchBaseDn: string;
  /**
  * Specifies the LDAP filter that should be used when searching for resources matching provided search text. All attribute types in the filter pattern referencing the search text must have a Delegated Admin Attribute definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#search_filter_pattern RestResourceType#search_filter_pattern}
  */
  readonly searchFilterPattern?: string;
  /**
  * Specifies the LDAP structural object class that should be exposed by this REST Resource Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#structural_ldap_objectclass RestResourceType#structural_ldap_objectclass}
  */
  readonly structuralLdapObjectclass: string;
  /**
  * The type of REST Resource Type resource. Options are ['user', 'generic', 'group']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#type RestResourceType#type}
  */
  readonly type: string;
  /**
  * Specifies an attribute whose values are to be constructed when a resource is updated. The constructed values replace any existing values of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#update_constructed_attribute RestResourceType#update_constructed_attribute}
  */
  readonly updateConstructedAttribute?: string[];
}
export interface RestResourceTypeRequiredActions {
}

export function restResourceTypeRequiredActionsToTerraform(struct?: RestResourceTypeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function restResourceTypeRequiredActionsToHclTerraform(struct?: RestResourceTypeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RestResourceTypeRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RestResourceTypeRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestResourceTypeRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class RestResourceTypeRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): RestResourceTypeRequiredActionsOutputReference {
    return new RestResourceTypeRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type pingdirectory_rest_resource_type}
*/
export class RestResourceType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_rest_resource_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RestResourceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RestResourceType to import
  * @param importFromId The id of the existing RestResourceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RestResourceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_rest_resource_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/rest_resource_type pingdirectory_rest_resource_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestResourceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: RestResourceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_rest_resource_type',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auxiliaryLdapObjectclass = config.auxiliaryLdapObjectclass;
    this._createRdnAttributeType = config.createRdnAttributeType;
    this._delegatedAdminReportSizeLimit = config.delegatedAdminReportSizeLimit;
    this._delegatedAdminSearchSizeLimit = config.delegatedAdminSearchSizeLimit;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._includeFilter = config.includeFilter;
    this._membersColumnName = config.membersColumnName;
    this._name = config.name;
    this._nonmembersColumnName = config.nonmembersColumnName;
    this._parentDn = config.parentDn;
    this._parentResourceType = config.parentResourceType;
    this._passwordAttributeCategory = config.passwordAttributeCategory;
    this._passwordDisplayOrderIndex = config.passwordDisplayOrderIndex;
    this._postCreateConstructedAttribute = config.postCreateConstructedAttribute;
    this._primaryDisplayAttributeType = config.primaryDisplayAttributeType;
    this._relativeDnFromParentResource = config.relativeDnFromParentResource;
    this._resourceEndpoint = config.resourceEndpoint;
    this._searchBaseDn = config.searchBaseDn;
    this._searchFilterPattern = config.searchFilterPattern;
    this._structuralLdapObjectclass = config.structuralLdapObjectclass;
    this._type = config.type;
    this._updateConstructedAttribute = config.updateConstructedAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auxiliary_ldap_objectclass - computed: true, optional: true, required: false
  private _auxiliaryLdapObjectclass?: string[]; 
  public get auxiliaryLdapObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('auxiliary_ldap_objectclass'));
  }
  public set auxiliaryLdapObjectclass(value: string[]) {
    this._auxiliaryLdapObjectclass = value;
  }
  public resetAuxiliaryLdapObjectclass() {
    this._auxiliaryLdapObjectclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryLdapObjectclassInput() {
    return this._auxiliaryLdapObjectclass;
  }

  // create_rdn_attribute_type - computed: false, optional: true, required: false
  private _createRdnAttributeType?: string; 
  public get createRdnAttributeType() {
    return this.getStringAttribute('create_rdn_attribute_type');
  }
  public set createRdnAttributeType(value: string) {
    this._createRdnAttributeType = value;
  }
  public resetCreateRdnAttributeType() {
    this._createRdnAttributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createRdnAttributeTypeInput() {
    return this._createRdnAttributeType;
  }

  // delegated_admin_report_size_limit - computed: true, optional: true, required: false
  private _delegatedAdminReportSizeLimit?: number; 
  public get delegatedAdminReportSizeLimit() {
    return this.getNumberAttribute('delegated_admin_report_size_limit');
  }
  public set delegatedAdminReportSizeLimit(value: number) {
    this._delegatedAdminReportSizeLimit = value;
  }
  public resetDelegatedAdminReportSizeLimit() {
    this._delegatedAdminReportSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedAdminReportSizeLimitInput() {
    return this._delegatedAdminReportSizeLimit;
  }

  // delegated_admin_search_size_limit - computed: true, optional: true, required: false
  private _delegatedAdminSearchSizeLimit?: number; 
  public get delegatedAdminSearchSizeLimit() {
    return this.getNumberAttribute('delegated_admin_search_size_limit');
  }
  public set delegatedAdminSearchSizeLimit(value: number) {
    this._delegatedAdminSearchSizeLimit = value;
  }
  public resetDelegatedAdminSearchSizeLimit() {
    this._delegatedAdminSearchSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedAdminSearchSizeLimitInput() {
    return this._delegatedAdminSearchSizeLimit;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_filter - computed: true, optional: true, required: false
  private _includeFilter?: string[]; 
  public get includeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('include_filter'));
  }
  public set includeFilter(value: string[]) {
    this._includeFilter = value;
  }
  public resetIncludeFilter() {
    this._includeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterInput() {
    return this._includeFilter;
  }

  // members_column_name - computed: true, optional: true, required: false
  private _membersColumnName?: string; 
  public get membersColumnName() {
    return this.getStringAttribute('members_column_name');
  }
  public set membersColumnName(value: string) {
    this._membersColumnName = value;
  }
  public resetMembersColumnName() {
    this._membersColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersColumnNameInput() {
    return this._membersColumnName;
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

  // nonmembers_column_name - computed: true, optional: true, required: false
  private _nonmembersColumnName?: string; 
  public get nonmembersColumnName() {
    return this.getStringAttribute('nonmembers_column_name');
  }
  public set nonmembersColumnName(value: string) {
    this._nonmembersColumnName = value;
  }
  public resetNonmembersColumnName() {
    this._nonmembersColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonmembersColumnNameInput() {
    return this._nonmembersColumnName;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // parent_dn - computed: false, optional: true, required: false
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  public resetParentDn() {
    this._parentDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // parent_resource_type - computed: false, optional: true, required: false
  private _parentResourceType?: string; 
  public get parentResourceType() {
    return this.getStringAttribute('parent_resource_type');
  }
  public set parentResourceType(value: string) {
    this._parentResourceType = value;
  }
  public resetParentResourceType() {
    this._parentResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentResourceTypeInput() {
    return this._parentResourceType;
  }

  // password_attribute_category - computed: false, optional: true, required: false
  private _passwordAttributeCategory?: string; 
  public get passwordAttributeCategory() {
    return this.getStringAttribute('password_attribute_category');
  }
  public set passwordAttributeCategory(value: string) {
    this._passwordAttributeCategory = value;
  }
  public resetPasswordAttributeCategory() {
    this._passwordAttributeCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAttributeCategoryInput() {
    return this._passwordAttributeCategory;
  }

  // password_display_order_index - computed: false, optional: true, required: false
  private _passwordDisplayOrderIndex?: number; 
  public get passwordDisplayOrderIndex() {
    return this.getNumberAttribute('password_display_order_index');
  }
  public set passwordDisplayOrderIndex(value: number) {
    this._passwordDisplayOrderIndex = value;
  }
  public resetPasswordDisplayOrderIndex() {
    this._passwordDisplayOrderIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordDisplayOrderIndexInput() {
    return this._passwordDisplayOrderIndex;
  }

  // post_create_constructed_attribute - computed: true, optional: true, required: false
  private _postCreateConstructedAttribute?: string[]; 
  public get postCreateConstructedAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('post_create_constructed_attribute'));
  }
  public set postCreateConstructedAttribute(value: string[]) {
    this._postCreateConstructedAttribute = value;
  }
  public resetPostCreateConstructedAttribute() {
    this._postCreateConstructedAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postCreateConstructedAttributeInput() {
    return this._postCreateConstructedAttribute;
  }

  // primary_display_attribute_type - computed: false, optional: true, required: false
  private _primaryDisplayAttributeType?: string; 
  public get primaryDisplayAttributeType() {
    return this.getStringAttribute('primary_display_attribute_type');
  }
  public set primaryDisplayAttributeType(value: string) {
    this._primaryDisplayAttributeType = value;
  }
  public resetPrimaryDisplayAttributeType() {
    this._primaryDisplayAttributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDisplayAttributeTypeInput() {
    return this._primaryDisplayAttributeType;
  }

  // relative_dn_from_parent_resource - computed: false, optional: true, required: false
  private _relativeDnFromParentResource?: string; 
  public get relativeDnFromParentResource() {
    return this.getStringAttribute('relative_dn_from_parent_resource');
  }
  public set relativeDnFromParentResource(value: string) {
    this._relativeDnFromParentResource = value;
  }
  public resetRelativeDnFromParentResource() {
    this._relativeDnFromParentResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeDnFromParentResourceInput() {
    return this._relativeDnFromParentResource;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new RestResourceTypeRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // resource_endpoint - computed: false, optional: false, required: true
  private _resourceEndpoint?: string; 
  public get resourceEndpoint() {
    return this.getStringAttribute('resource_endpoint');
  }
  public set resourceEndpoint(value: string) {
    this._resourceEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceEndpointInput() {
    return this._resourceEndpoint;
  }

  // search_base_dn - computed: false, optional: false, required: true
  private _searchBaseDn?: string; 
  public get searchBaseDn() {
    return this.getStringAttribute('search_base_dn');
  }
  public set searchBaseDn(value: string) {
    this._searchBaseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseDnInput() {
    return this._searchBaseDn;
  }

  // search_filter_pattern - computed: false, optional: true, required: false
  private _searchFilterPattern?: string; 
  public get searchFilterPattern() {
    return this.getStringAttribute('search_filter_pattern');
  }
  public set searchFilterPattern(value: string) {
    this._searchFilterPattern = value;
  }
  public resetSearchFilterPattern() {
    this._searchFilterPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterPatternInput() {
    return this._searchFilterPattern;
  }

  // structural_ldap_objectclass - computed: false, optional: false, required: true
  private _structuralLdapObjectclass?: string; 
  public get structuralLdapObjectclass() {
    return this.getStringAttribute('structural_ldap_objectclass');
  }
  public set structuralLdapObjectclass(value: string) {
    this._structuralLdapObjectclass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get structuralLdapObjectclassInput() {
    return this._structuralLdapObjectclass;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_constructed_attribute - computed: true, optional: true, required: false
  private _updateConstructedAttribute?: string[]; 
  public get updateConstructedAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('update_constructed_attribute'));
  }
  public set updateConstructedAttribute(value: string[]) {
    this._updateConstructedAttribute = value;
  }
  public resetUpdateConstructedAttribute() {
    this._updateConstructedAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateConstructedAttributeInput() {
    return this._updateConstructedAttribute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auxiliary_ldap_objectclass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auxiliaryLdapObjectclass),
      create_rdn_attribute_type: cdktf.stringToTerraform(this._createRdnAttributeType),
      delegated_admin_report_size_limit: cdktf.numberToTerraform(this._delegatedAdminReportSizeLimit),
      delegated_admin_search_size_limit: cdktf.numberToTerraform(this._delegatedAdminSearchSizeLimit),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      include_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeFilter),
      members_column_name: cdktf.stringToTerraform(this._membersColumnName),
      name: cdktf.stringToTerraform(this._name),
      nonmembers_column_name: cdktf.stringToTerraform(this._nonmembersColumnName),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      parent_resource_type: cdktf.stringToTerraform(this._parentResourceType),
      password_attribute_category: cdktf.stringToTerraform(this._passwordAttributeCategory),
      password_display_order_index: cdktf.numberToTerraform(this._passwordDisplayOrderIndex),
      post_create_constructed_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postCreateConstructedAttribute),
      primary_display_attribute_type: cdktf.stringToTerraform(this._primaryDisplayAttributeType),
      relative_dn_from_parent_resource: cdktf.stringToTerraform(this._relativeDnFromParentResource),
      resource_endpoint: cdktf.stringToTerraform(this._resourceEndpoint),
      search_base_dn: cdktf.stringToTerraform(this._searchBaseDn),
      search_filter_pattern: cdktf.stringToTerraform(this._searchFilterPattern),
      structural_ldap_objectclass: cdktf.stringToTerraform(this._structuralLdapObjectclass),
      type: cdktf.stringToTerraform(this._type),
      update_constructed_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._updateConstructedAttribute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auxiliary_ldap_objectclass: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auxiliaryLdapObjectclass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      create_rdn_attribute_type: {
        value: cdktf.stringToHclTerraform(this._createRdnAttributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegated_admin_report_size_limit: {
        value: cdktf.numberToHclTerraform(this._delegatedAdminReportSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delegated_admin_search_size_limit: {
        value: cdktf.numberToHclTerraform(this._delegatedAdminSearchSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      members_column_name: {
        value: cdktf.stringToHclTerraform(this._membersColumnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nonmembers_column_name: {
        value: cdktf.stringToHclTerraform(this._nonmembersColumnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_resource_type: {
        value: cdktf.stringToHclTerraform(this._parentResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_attribute_category: {
        value: cdktf.stringToHclTerraform(this._passwordAttributeCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_display_order_index: {
        value: cdktf.numberToHclTerraform(this._passwordDisplayOrderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      post_create_constructed_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postCreateConstructedAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      primary_display_attribute_type: {
        value: cdktf.stringToHclTerraform(this._primaryDisplayAttributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relative_dn_from_parent_resource: {
        value: cdktf.stringToHclTerraform(this._relativeDnFromParentResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_endpoint: {
        value: cdktf.stringToHclTerraform(this._resourceEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_base_dn: {
        value: cdktf.stringToHclTerraform(this._searchBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_filter_pattern: {
        value: cdktf.stringToHclTerraform(this._searchFilterPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      structural_ldap_objectclass: {
        value: cdktf.stringToHclTerraform(this._structuralLdapObjectclass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_constructed_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._updateConstructedAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
