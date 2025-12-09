// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg_selector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaTemplateExternalEpgSelectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg_selector#external_epg_name DataMsoSchemaTemplateExternalEpgSelector#external_epg_name}
  */
  readonly externalEpgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg_selector#id DataMsoSchemaTemplateExternalEpgSelector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg_selector#name DataMsoSchemaTemplateExternalEpgSelector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg_selector#schema_id DataMsoSchemaTemplateExternalEpgSelector#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg_selector#template_name DataMsoSchemaTemplateExternalEpgSelector#template_name}
  */
  readonly templateName: string;
}
export interface DataMsoSchemaTemplateExternalEpgSelectorExpressions {
}

export function dataMsoSchemaTemplateExternalEpgSelectorExpressionsToTerraform(struct?: DataMsoSchemaTemplateExternalEpgSelectorExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoSchemaTemplateExternalEpgSelectorExpressionsToHclTerraform(struct?: DataMsoSchemaTemplateExternalEpgSelectorExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoSchemaTemplateExternalEpgSelectorExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoSchemaTemplateExternalEpgSelectorExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoSchemaTemplateExternalEpgSelectorExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMsoSchemaTemplateExternalEpgSelectorExpressionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoSchemaTemplateExternalEpgSelectorExpressionsOutputReference {
    return new DataMsoSchemaTemplateExternalEpgSelectorExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg_selector mso_schema_template_external_epg_selector}
*/
export class DataMsoSchemaTemplateExternalEpgSelector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_external_epg_selector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaTemplateExternalEpgSelector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaTemplateExternalEpgSelector to import
  * @param importFromId The id of the existing DataMsoSchemaTemplateExternalEpgSelector that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg_selector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaTemplateExternalEpgSelector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_external_epg_selector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_template_external_epg_selector mso_schema_template_external_epg_selector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaTemplateExternalEpgSelectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaTemplateExternalEpgSelectorConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_external_epg_selector',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalEpgName = config.externalEpgName;
    this._id = config.id;
    this._name = config.name;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expressions - computed: true, optional: false, required: false
  private _expressions = new DataMsoSchemaTemplateExternalEpgSelectorExpressionsList(this, "expressions", false);
  public get expressions() {
    return this._expressions;
  }

  // external_epg_name - computed: false, optional: false, required: true
  private _externalEpgName?: string; 
  public get externalEpgName() {
    return this.getStringAttribute('external_epg_name');
  }
  public set externalEpgName(value: string) {
    this._externalEpgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEpgNameInput() {
    return this._externalEpgName;
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

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_epg_name: cdktf.stringToTerraform(this._externalEpgName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_epg_name: {
        value: cdktf.stringToHclTerraform(this._externalEpgName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
