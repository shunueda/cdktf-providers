// https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * For catalog fields, the ID of the associated catalog type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field#catalog_type_id CustomField#catalog_type_id}
  */
  readonly catalogTypeId?: string;
  /**
  * Description of the custom field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field#description CustomField#description}
  */
  readonly description: string;
  /**
  * Type of custom field. Possible values are: `single_select`, `multi_select`, `text`, `link`, `numeric`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field#field_type CustomField#field_type}
  */
  readonly fieldType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field#filter_by CustomField#filter_by}
  */
  readonly filterBy?: CustomFieldFilterBy;
  /**
  * For catalog fields, the ID of the attribute used to group catalog entries (if applicable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field#group_by_catalog_attribute_id CustomField#group_by_catalog_attribute_id}
  */
  readonly groupByCatalogAttributeId?: string;
  /**
  * Which catalog attribute provides helptext for the options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field#helptext_catalog_attribute_id CustomField#helptext_catalog_attribute_id}
  */
  readonly helptextCatalogAttributeId?: string;
  /**
  * Human readable name for the custom field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field#name CustomField#name}
  */
  readonly name: string;
}
export interface CustomFieldFilterBy {
  /**
  * This must be an attribute of the catalog type of this custom field. It must be an attribute that points to another catalog type (so not a plain string, number, or boolean attribute).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field#catalog_attribute_id CustomField#catalog_attribute_id}
  */
  readonly catalogAttributeId: string;
  /**
  * This must be the ID of a custom field, which must have values of the same type as the attribute you are filtering by.
  * 
  * When this filtering field is set on an incident, the options for this custom field will be filtered to only those with the attribute value that matches the value of the filtering field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field#custom_field_id CustomField#custom_field_id}
  */
  readonly customFieldId: string;
}

export function customFieldFilterByToTerraform(struct?: CustomFieldFilterBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_attribute_id: cdktf.stringToTerraform(struct!.catalogAttributeId),
    custom_field_id: cdktf.stringToTerraform(struct!.customFieldId),
  }
}


export function customFieldFilterByToHclTerraform(struct?: CustomFieldFilterBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_attribute_id: {
      value: cdktf.stringToHclTerraform(struct!.catalogAttributeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_field_id: {
      value: cdktf.stringToHclTerraform(struct!.customFieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomFieldFilterByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomFieldFilterBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogAttributeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogAttributeId = this._catalogAttributeId;
    }
    if (this._customFieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldId = this._customFieldId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomFieldFilterBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogAttributeId = undefined;
      this._customFieldId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogAttributeId = value.catalogAttributeId;
      this._customFieldId = value.customFieldId;
    }
  }

  // catalog_attribute_id - computed: false, optional: false, required: true
  private _catalogAttributeId?: string; 
  public get catalogAttributeId() {
    return this.getStringAttribute('catalog_attribute_id');
  }
  public set catalogAttributeId(value: string) {
    this._catalogAttributeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogAttributeIdInput() {
    return this._catalogAttributeId;
  }

  // custom_field_id - computed: false, optional: false, required: true
  private _customFieldId?: string; 
  public get customFieldId() {
    return this.getStringAttribute('custom_field_id');
  }
  public set customFieldId(value: string) {
    this._customFieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldIdInput() {
    return this._customFieldId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field incident_custom_field}
*/
export class CustomField extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_custom_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomField to import
  * @param importFromId The id of the existing CustomField that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_custom_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.21.1/docs/resources/custom_field incident_custom_field} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomFieldConfig
  */
  public constructor(scope: Construct, id: string, config: CustomFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_custom_field',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.21.1',
        providerVersionConstraint: '5.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogTypeId = config.catalogTypeId;
    this._description = config.description;
    this._fieldType = config.fieldType;
    this._filterBy.internalValue = config.filterBy;
    this._groupByCatalogAttributeId = config.groupByCatalogAttributeId;
    this._helptextCatalogAttributeId = config.helptextCatalogAttributeId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_type_id - computed: false, optional: true, required: false
  private _catalogTypeId?: string; 
  public get catalogTypeId() {
    return this.getStringAttribute('catalog_type_id');
  }
  public set catalogTypeId(value: string) {
    this._catalogTypeId = value;
  }
  public resetCatalogTypeId() {
    this._catalogTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeIdInput() {
    return this._catalogTypeId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // filter_by - computed: false, optional: true, required: false
  private _filterBy = new CustomFieldFilterByOutputReference(this, "filter_by");
  public get filterBy() {
    return this._filterBy;
  }
  public putFilterBy(value: CustomFieldFilterBy) {
    this._filterBy.internalValue = value;
  }
  public resetFilterBy() {
    this._filterBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy.internalValue;
  }

  // group_by_catalog_attribute_id - computed: false, optional: true, required: false
  private _groupByCatalogAttributeId?: string; 
  public get groupByCatalogAttributeId() {
    return this.getStringAttribute('group_by_catalog_attribute_id');
  }
  public set groupByCatalogAttributeId(value: string) {
    this._groupByCatalogAttributeId = value;
  }
  public resetGroupByCatalogAttributeId() {
    this._groupByCatalogAttributeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByCatalogAttributeIdInput() {
    return this._groupByCatalogAttributeId;
  }

  // helptext_catalog_attribute_id - computed: false, optional: true, required: false
  private _helptextCatalogAttributeId?: string; 
  public get helptextCatalogAttributeId() {
    return this.getStringAttribute('helptext_catalog_attribute_id');
  }
  public set helptextCatalogAttributeId(value: string) {
    this._helptextCatalogAttributeId = value;
  }
  public resetHelptextCatalogAttributeId() {
    this._helptextCatalogAttributeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helptextCatalogAttributeIdInput() {
    return this._helptextCatalogAttributeId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_type_id: cdktf.stringToTerraform(this._catalogTypeId),
      description: cdktf.stringToTerraform(this._description),
      field_type: cdktf.stringToTerraform(this._fieldType),
      filter_by: customFieldFilterByToTerraform(this._filterBy.internalValue),
      group_by_catalog_attribute_id: cdktf.stringToTerraform(this._groupByCatalogAttributeId),
      helptext_catalog_attribute_id: cdktf.stringToTerraform(this._helptextCatalogAttributeId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_type_id: {
        value: cdktf.stringToHclTerraform(this._catalogTypeId),
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
      field_type: {
        value: cdktf.stringToHclTerraform(this._fieldType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_by: {
        value: customFieldFilterByToHclTerraform(this._filterBy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomFieldFilterBy",
      },
      group_by_catalog_attribute_id: {
        value: cdktf.stringToHclTerraform(this._groupByCatalogAttributeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      helptext_catalog_attribute_id: {
        value: cdktf.stringToHclTerraform(this._helptextCatalogAttributeId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
