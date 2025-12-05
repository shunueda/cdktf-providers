// https://registry.terraform.io/providers/incident-io/incident/5.20.0/docs/data-sources/custom_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncidentCustomFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human readable name for the custom field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.20.0/docs/data-sources/custom_field#name DataIncidentCustomField#name}
  */
  readonly name: string;
}
export interface DataIncidentCustomFieldFilterBy {
}

export function dataIncidentCustomFieldFilterByToTerraform(struct?: DataIncidentCustomFieldFilterBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentCustomFieldFilterByToHclTerraform(struct?: DataIncidentCustomFieldFilterBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentCustomFieldFilterByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentCustomFieldFilterBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentCustomFieldFilterBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_attribute_id - computed: true, optional: false, required: false
  public get catalogAttributeId() {
    return this.getStringAttribute('catalog_attribute_id');
  }

  // custom_field_id - computed: true, optional: false, required: false
  public get customFieldId() {
    return this.getStringAttribute('custom_field_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.20.0/docs/data-sources/custom_field incident_custom_field}
*/
export class DataIncidentCustomField extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_custom_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncidentCustomField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncidentCustomField to import
  * @param importFromId The id of the existing DataIncidentCustomField that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.20.0/docs/data-sources/custom_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncidentCustomField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_custom_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.20.0/docs/data-sources/custom_field incident_custom_field} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncidentCustomFieldConfig
  */
  public constructor(scope: Construct, id: string, config: DataIncidentCustomFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_custom_field',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.20.0',
        providerVersionConstraint: '5.20.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_type_id - computed: true, optional: false, required: false
  public get catalogTypeId() {
    return this.getStringAttribute('catalog_type_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // field_type - computed: true, optional: false, required: false
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }

  // filter_by - computed: true, optional: false, required: false
  private _filterBy = new DataIncidentCustomFieldFilterByOutputReference(this, "filter_by");
  public get filterBy() {
    return this._filterBy;
  }

  // group_by_catalog_attribute_id - computed: true, optional: false, required: false
  public get groupByCatalogAttributeId() {
    return this.getStringAttribute('group_by_catalog_attribute_id');
  }

  // helptext_catalog_attribute_id - computed: true, optional: false, required: false
  public get helptextCatalogAttributeId() {
    return this.getStringAttribute('helptext_catalog_attribute_id');
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
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
