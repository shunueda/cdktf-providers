// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensitiveAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether clients will be allowed to include sensitive attributes in add requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#allow_in_add SensitiveAttribute#allow_in_add}
  */
  readonly allowInAdd?: string;
  /**
  * Indicates whether clients will be allowed to target sensitive attributes with compare requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#allow_in_compare SensitiveAttribute#allow_in_compare}
  */
  readonly allowInCompare?: string;
  /**
  * Indicates whether clients will be allowed to include sensitive attributes in search filters. This also includes filters that may be used in other forms, including assertion and LDAP join request controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#allow_in_filter SensitiveAttribute#allow_in_filter}
  */
  readonly allowInFilter?: string;
  /**
  * Indicates whether clients will be allowed to target sensitive attributes with modify requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#allow_in_modify SensitiveAttribute#allow_in_modify}
  */
  readonly allowInModify?: string;
  /**
  * Indicates whether sensitive attributes should be included in entries returned to the client. This includes not only search result entries, but also other forms including in the values of controls like the pre-read, post-read, get authorization entry, and LDAP join response controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#allow_in_returned_entries SensitiveAttribute#allow_in_returned_entries}
  */
  readonly allowInReturnedEntries?: string;
  /**
  * The name(s) or OID(s) of the attribute types for attributes whose values may be considered sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#attribute_type SensitiveAttribute#attribute_type}
  */
  readonly attributeType: string[];
  /**
  * A description for this Sensitive Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#description SensitiveAttribute#description}
  */
  readonly description?: string;
  /**
  * Indicates whether to automatically include any server-generated operational attributes that may contain sensitive data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#include_default_sensitive_operational_attributes SensitiveAttribute#include_default_sensitive_operational_attributes}
  */
  readonly includeDefaultSensitiveOperationalAttributes?: boolean | cdktf.IResolvable;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#name SensitiveAttribute#name}
  */
  readonly name: string;
  /**
  * The type of Sensitive Attribute resource. Options are ['sensitive-attribute']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#type SensitiveAttribute#type}
  */
  readonly type?: string;
}
export interface SensitiveAttributeRequiredActions {
}

export function sensitiveAttributeRequiredActionsToTerraform(struct?: SensitiveAttributeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sensitiveAttributeRequiredActionsToHclTerraform(struct?: SensitiveAttributeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SensitiveAttributeRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensitiveAttributeRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensitiveAttributeRequiredActions | undefined) {
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

export class SensitiveAttributeRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): SensitiveAttributeRequiredActionsOutputReference {
    return new SensitiveAttributeRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute pingdirectory_sensitive_attribute}
*/
export class SensitiveAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_sensitive_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensitiveAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensitiveAttribute to import
  * @param importFromId The id of the existing SensitiveAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensitiveAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_sensitive_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/sensitive_attribute pingdirectory_sensitive_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensitiveAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: SensitiveAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_sensitive_attribute',
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
    this._allowInAdd = config.allowInAdd;
    this._allowInCompare = config.allowInCompare;
    this._allowInFilter = config.allowInFilter;
    this._allowInModify = config.allowInModify;
    this._allowInReturnedEntries = config.allowInReturnedEntries;
    this._attributeType = config.attributeType;
    this._description = config.description;
    this._includeDefaultSensitiveOperationalAttributes = config.includeDefaultSensitiveOperationalAttributes;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_in_add - computed: true, optional: true, required: false
  private _allowInAdd?: string; 
  public get allowInAdd() {
    return this.getStringAttribute('allow_in_add');
  }
  public set allowInAdd(value: string) {
    this._allowInAdd = value;
  }
  public resetAllowInAdd() {
    this._allowInAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInAddInput() {
    return this._allowInAdd;
  }

  // allow_in_compare - computed: true, optional: true, required: false
  private _allowInCompare?: string; 
  public get allowInCompare() {
    return this.getStringAttribute('allow_in_compare');
  }
  public set allowInCompare(value: string) {
    this._allowInCompare = value;
  }
  public resetAllowInCompare() {
    this._allowInCompare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInCompareInput() {
    return this._allowInCompare;
  }

  // allow_in_filter - computed: true, optional: true, required: false
  private _allowInFilter?: string; 
  public get allowInFilter() {
    return this.getStringAttribute('allow_in_filter');
  }
  public set allowInFilter(value: string) {
    this._allowInFilter = value;
  }
  public resetAllowInFilter() {
    this._allowInFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInFilterInput() {
    return this._allowInFilter;
  }

  // allow_in_modify - computed: true, optional: true, required: false
  private _allowInModify?: string; 
  public get allowInModify() {
    return this.getStringAttribute('allow_in_modify');
  }
  public set allowInModify(value: string) {
    this._allowInModify = value;
  }
  public resetAllowInModify() {
    this._allowInModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInModifyInput() {
    return this._allowInModify;
  }

  // allow_in_returned_entries - computed: true, optional: true, required: false
  private _allowInReturnedEntries?: string; 
  public get allowInReturnedEntries() {
    return this.getStringAttribute('allow_in_returned_entries');
  }
  public set allowInReturnedEntries(value: string) {
    this._allowInReturnedEntries = value;
  }
  public resetAllowInReturnedEntries() {
    this._allowInReturnedEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInReturnedEntriesInput() {
    return this._allowInReturnedEntries;
  }

  // attribute_type - computed: false, optional: false, required: true
  private _attributeType?: string[]; 
  public get attributeType() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_type'));
  }
  public set attributeType(value: string[]) {
    this._attributeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_default_sensitive_operational_attributes - computed: true, optional: true, required: false
  private _includeDefaultSensitiveOperationalAttributes?: boolean | cdktf.IResolvable; 
  public get includeDefaultSensitiveOperationalAttributes() {
    return this.getBooleanAttribute('include_default_sensitive_operational_attributes');
  }
  public set includeDefaultSensitiveOperationalAttributes(value: boolean | cdktf.IResolvable) {
    this._includeDefaultSensitiveOperationalAttributes = value;
  }
  public resetIncludeDefaultSensitiveOperationalAttributes() {
    this._includeDefaultSensitiveOperationalAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDefaultSensitiveOperationalAttributesInput() {
    return this._includeDefaultSensitiveOperationalAttributes;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new SensitiveAttributeRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_in_add: cdktf.stringToTerraform(this._allowInAdd),
      allow_in_compare: cdktf.stringToTerraform(this._allowInCompare),
      allow_in_filter: cdktf.stringToTerraform(this._allowInFilter),
      allow_in_modify: cdktf.stringToTerraform(this._allowInModify),
      allow_in_returned_entries: cdktf.stringToTerraform(this._allowInReturnedEntries),
      attribute_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeType),
      description: cdktf.stringToTerraform(this._description),
      include_default_sensitive_operational_attributes: cdktf.booleanToTerraform(this._includeDefaultSensitiveOperationalAttributes),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_in_add: {
        value: cdktf.stringToHclTerraform(this._allowInAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_in_compare: {
        value: cdktf.stringToHclTerraform(this._allowInCompare),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_in_filter: {
        value: cdktf.stringToHclTerraform(this._allowInFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_in_modify: {
        value: cdktf.stringToHclTerraform(this._allowInModify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_in_returned_entries: {
        value: cdktf.stringToHclTerraform(this._allowInReturnedEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_default_sensitive_operational_attributes: {
        value: cdktf.booleanToHclTerraform(this._includeDefaultSensitiveOperationalAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
