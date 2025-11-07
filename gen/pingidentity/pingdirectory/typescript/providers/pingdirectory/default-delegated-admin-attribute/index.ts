// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultDelegatedAdminAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of file types allowed to be uploaded. If no types are specified, then all types will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#allowed_mime_type DefaultDelegatedAdminAttribute#allowed_mime_type}
  */
  readonly allowedMimeType?: string[];
  /**
  * Specifies which attribute category this attribute belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#attribute_category DefaultDelegatedAdminAttribute#attribute_category}
  */
  readonly attributeCategory?: string;
  /**
  * Indicates how the attribute is presented to the user of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#attribute_presentation DefaultDelegatedAdminAttribute#attribute_presentation}
  */
  readonly attributePresentation?: string;
  /**
  * Specifies the name or OID of the LDAP attribute type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#attribute_type DefaultDelegatedAdminAttribute#attribute_type}
  */
  readonly attributeType: string;
  /**
  * Specifies the format string that is used to present a date and/or time value to the user of the app. This property only applies to LDAP attribute types whose LDAP syntax is GeneralizedTime and is ignored if the attribute type has any other syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#date_time_format DefaultDelegatedAdminAttribute#date_time_format}
  */
  readonly dateTimeFormat?: string;
  /**
  * A description for this Delegated Admin Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#description DefaultDelegatedAdminAttribute#description}
  */
  readonly description?: string;
  /**
  * A human readable display name for this Delegated Admin Attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#display_name DefaultDelegatedAdminAttribute#display_name}
  */
  readonly displayName?: string;
  /**
  * This property determines a display order for attributes within a given attribute category. Attributes are ordered within their category based on this index from least to greatest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#display_order_index DefaultDelegatedAdminAttribute#display_order_index}
  */
  readonly displayOrderIndex?: number;
  /**
  * Indicates whether this Delegated Admin Attribute is to be included in the summary display for a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#include_in_summary DefaultDelegatedAdminAttribute#include_in_summary}
  */
  readonly includeInSummary?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this Delegated Admin Attribute may have multiple values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#multi_valued DefaultDelegatedAdminAttribute#multi_valued}
  */
  readonly multiValued?: boolean | cdktf.IResolvable;
  /**
  * Specifies the circumstances under which the values of the attribute can be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#mutability DefaultDelegatedAdminAttribute#mutability}
  */
  readonly mutability?: string;
  /**
  * For LDAP attributes with DN syntax, specifies what kind of resource is referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#reference_resource_type DefaultDelegatedAdminAttribute#reference_resource_type}
  */
  readonly referenceResourceType?: string;
  /**
  * Name of the parent REST Resource Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#rest_resource_type_name DefaultDelegatedAdminAttribute#rest_resource_type_name}
  */
  readonly restResourceTypeName: string;
}
export interface DefaultDelegatedAdminAttributeRequiredActions {
}

export function defaultDelegatedAdminAttributeRequiredActionsToTerraform(struct?: DefaultDelegatedAdminAttributeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultDelegatedAdminAttributeRequiredActionsToHclTerraform(struct?: DefaultDelegatedAdminAttributeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultDelegatedAdminAttributeRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultDelegatedAdminAttributeRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultDelegatedAdminAttributeRequiredActions | undefined) {
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

export class DefaultDelegatedAdminAttributeRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultDelegatedAdminAttributeRequiredActionsOutputReference {
    return new DefaultDelegatedAdminAttributeRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute pingdirectory_default_delegated_admin_attribute}
*/
export class DefaultDelegatedAdminAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_delegated_admin_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultDelegatedAdminAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultDelegatedAdminAttribute to import
  * @param importFromId The id of the existing DefaultDelegatedAdminAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultDelegatedAdminAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_delegated_admin_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_delegated_admin_attribute pingdirectory_default_delegated_admin_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultDelegatedAdminAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultDelegatedAdminAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_delegated_admin_attribute',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedMimeType = config.allowedMimeType;
    this._attributeCategory = config.attributeCategory;
    this._attributePresentation = config.attributePresentation;
    this._attributeType = config.attributeType;
    this._dateTimeFormat = config.dateTimeFormat;
    this._description = config.description;
    this._displayName = config.displayName;
    this._displayOrderIndex = config.displayOrderIndex;
    this._includeInSummary = config.includeInSummary;
    this._multiValued = config.multiValued;
    this._mutability = config.mutability;
    this._referenceResourceType = config.referenceResourceType;
    this._restResourceTypeName = config.restResourceTypeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_mime_type - computed: true, optional: true, required: false
  private _allowedMimeType?: string[]; 
  public get allowedMimeType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_mime_type'));
  }
  public set allowedMimeType(value: string[]) {
    this._allowedMimeType = value;
  }
  public resetAllowedMimeType() {
    this._allowedMimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMimeTypeInput() {
    return this._allowedMimeType;
  }

  // attribute_category - computed: true, optional: true, required: false
  private _attributeCategory?: string; 
  public get attributeCategory() {
    return this.getStringAttribute('attribute_category');
  }
  public set attributeCategory(value: string) {
    this._attributeCategory = value;
  }
  public resetAttributeCategory() {
    this._attributeCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeCategoryInput() {
    return this._attributeCategory;
  }

  // attribute_presentation - computed: true, optional: true, required: false
  private _attributePresentation?: string; 
  public get attributePresentation() {
    return this.getStringAttribute('attribute_presentation');
  }
  public set attributePresentation(value: string) {
    this._attributePresentation = value;
  }
  public resetAttributePresentation() {
    this._attributePresentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributePresentationInput() {
    return this._attributePresentation;
  }

  // attribute_type - computed: false, optional: false, required: true
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // date_time_format - computed: true, optional: true, required: false
  private _dateTimeFormat?: string; 
  public get dateTimeFormat() {
    return this.getStringAttribute('date_time_format');
  }
  public set dateTimeFormat(value: string) {
    this._dateTimeFormat = value;
  }
  public resetDateTimeFormat() {
    this._dateTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeFormatInput() {
    return this._dateTimeFormat;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
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

  // display_order_index - computed: true, optional: true, required: false
  private _displayOrderIndex?: number; 
  public get displayOrderIndex() {
    return this.getNumberAttribute('display_order_index');
  }
  public set displayOrderIndex(value: number) {
    this._displayOrderIndex = value;
  }
  public resetDisplayOrderIndex() {
    this._displayOrderIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOrderIndexInput() {
    return this._displayOrderIndex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_in_summary - computed: true, optional: true, required: false
  private _includeInSummary?: boolean | cdktf.IResolvable; 
  public get includeInSummary() {
    return this.getBooleanAttribute('include_in_summary');
  }
  public set includeInSummary(value: boolean | cdktf.IResolvable) {
    this._includeInSummary = value;
  }
  public resetIncludeInSummary() {
    this._includeInSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInSummaryInput() {
    return this._includeInSummary;
  }

  // multi_valued - computed: true, optional: true, required: false
  private _multiValued?: boolean | cdktf.IResolvable; 
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }
  public set multiValued(value: boolean | cdktf.IResolvable) {
    this._multiValued = value;
  }
  public resetMultiValued() {
    this._multiValued = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValuedInput() {
    return this._multiValued;
  }

  // mutability - computed: true, optional: true, required: false
  private _mutability?: string; 
  public get mutability() {
    return this.getStringAttribute('mutability');
  }
  public set mutability(value: string) {
    this._mutability = value;
  }
  public resetMutability() {
    this._mutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutabilityInput() {
    return this._mutability;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // reference_resource_type - computed: true, optional: true, required: false
  private _referenceResourceType?: string; 
  public get referenceResourceType() {
    return this.getStringAttribute('reference_resource_type');
  }
  public set referenceResourceType(value: string) {
    this._referenceResourceType = value;
  }
  public resetReferenceResourceType() {
    this._referenceResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceResourceTypeInput() {
    return this._referenceResourceType;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultDelegatedAdminAttributeRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // rest_resource_type_name - computed: false, optional: false, required: true
  private _restResourceTypeName?: string; 
  public get restResourceTypeName() {
    return this.getStringAttribute('rest_resource_type_name');
  }
  public set restResourceTypeName(value: string) {
    this._restResourceTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restResourceTypeNameInput() {
    return this._restResourceTypeName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_mime_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedMimeType),
      attribute_category: cdktf.stringToTerraform(this._attributeCategory),
      attribute_presentation: cdktf.stringToTerraform(this._attributePresentation),
      attribute_type: cdktf.stringToTerraform(this._attributeType),
      date_time_format: cdktf.stringToTerraform(this._dateTimeFormat),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      display_order_index: cdktf.numberToTerraform(this._displayOrderIndex),
      include_in_summary: cdktf.booleanToTerraform(this._includeInSummary),
      multi_valued: cdktf.booleanToTerraform(this._multiValued),
      mutability: cdktf.stringToTerraform(this._mutability),
      reference_resource_type: cdktf.stringToTerraform(this._referenceResourceType),
      rest_resource_type_name: cdktf.stringToTerraform(this._restResourceTypeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_mime_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedMimeType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      attribute_category: {
        value: cdktf.stringToHclTerraform(this._attributeCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_presentation: {
        value: cdktf.stringToHclTerraform(this._attributePresentation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_type: {
        value: cdktf.stringToHclTerraform(this._attributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_time_format: {
        value: cdktf.stringToHclTerraform(this._dateTimeFormat),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_order_index: {
        value: cdktf.numberToHclTerraform(this._displayOrderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_in_summary: {
        value: cdktf.booleanToHclTerraform(this._includeInSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_valued: {
        value: cdktf.booleanToHclTerraform(this._multiValued),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mutability: {
        value: cdktf.stringToHclTerraform(this._mutability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reference_resource_type: {
        value: cdktf.stringToHclTerraform(this._referenceResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_resource_type_name: {
        value: cdktf.stringToHclTerraform(this._restResourceTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
