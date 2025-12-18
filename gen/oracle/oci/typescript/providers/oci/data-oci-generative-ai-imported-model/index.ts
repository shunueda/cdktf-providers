// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_imported_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenerativeAiImportedModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_imported_model#imported_model_id DataOciGenerativeAiImportedModel#imported_model_id}
  */
  readonly importedModelId: string;
}
export interface DataOciGenerativeAiImportedModelDataSource {
}

export function dataOciGenerativeAiImportedModelDataSourceToTerraform(struct?: DataOciGenerativeAiImportedModelDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiImportedModelDataSourceToHclTerraform(struct?: DataOciGenerativeAiImportedModelDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiImportedModelDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiImportedModelDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiImportedModelDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // commit - computed: true, optional: false, required: false
  public get commit() {
    return this.getStringAttribute('commit');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // prefix_name - computed: true, optional: false, required: false
  public get prefixName() {
    return this.getStringAttribute('prefix_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciGenerativeAiImportedModelDataSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiImportedModelDataSourceOutputReference {
    return new DataOciGenerativeAiImportedModelDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_imported_model oci_generative_ai_imported_model}
*/
export class DataOciGenerativeAiImportedModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_imported_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGenerativeAiImportedModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGenerativeAiImportedModel to import
  * @param importFromId The id of the existing DataOciGenerativeAiImportedModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_imported_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGenerativeAiImportedModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_imported_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/generative_ai_imported_model oci_generative_ai_imported_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenerativeAiImportedModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGenerativeAiImportedModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_imported_model',
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
    this._importedModelId = config.importedModelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_source - computed: true, optional: false, required: false
  private _dataSource = new DataOciGenerativeAiImportedModelDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // imported_model_id - computed: false, optional: false, required: true
  private _importedModelId?: string; 
  public get importedModelId() {
    return this.getStringAttribute('imported_model_id');
  }
  public set importedModelId(value: string) {
    this._importedModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importedModelIdInput() {
    return this._importedModelId;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // previous_state - computed: true, optional: false, required: false
  public get previousState() {
    return this.getStringAttribute('previous_state');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      imported_model_id: cdktf.stringToTerraform(this._importedModelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      imported_model_id: {
        value: cdktf.stringToHclTerraform(this._importedModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
