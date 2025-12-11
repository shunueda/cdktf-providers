// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSensitiveDataModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_model#sensitive_data_model_id DataOciDataSafeSensitiveDataModel#sensitive_data_model_id}
  */
  readonly sensitiveDataModelId: string;
}
export interface DataOciDataSafeSensitiveDataModelTablesForDiscovery {
}

export function dataOciDataSafeSensitiveDataModelTablesForDiscoveryToTerraform(struct?: DataOciDataSafeSensitiveDataModelTablesForDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveDataModelTablesForDiscoveryToHclTerraform(struct?: DataOciDataSafeSensitiveDataModelTablesForDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSensitiveDataModelTablesForDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveDataModelTablesForDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // table_names - computed: true, optional: false, required: false
  public get tableNames() {
    return this.getListAttribute('table_names');
  }
}

export class DataOciDataSafeSensitiveDataModelTablesForDiscoveryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference {
    return new DataOciDataSafeSensitiveDataModelTablesForDiscoveryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_model oci_data_safe_sensitive_data_model}
*/
export class DataOciDataSafeSensitiveDataModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sensitive_data_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSensitiveDataModel to import
  * @param importFromId The id of the existing DataOciDataSafeSensitiveDataModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSensitiveDataModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sensitive_data_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_model oci_data_safe_sensitive_data_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSensitiveDataModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSensitiveDataModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sensitive_data_model',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._sensitiveDataModelId = config.sensitiveDataModelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_suite_name - computed: true, optional: false, required: false
  public get appSuiteName() {
    return this.getStringAttribute('app_suite_name');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // is_app_defined_relation_discovery_enabled - computed: true, optional: false, required: false
  public get isAppDefinedRelationDiscoveryEnabled() {
    return this.getBooleanAttribute('is_app_defined_relation_discovery_enabled');
  }

  // is_include_all_schemas - computed: true, optional: false, required: false
  public get isIncludeAllSchemas() {
    return this.getBooleanAttribute('is_include_all_schemas');
  }

  // is_include_all_sensitive_types - computed: true, optional: false, required: false
  public get isIncludeAllSensitiveTypes() {
    return this.getBooleanAttribute('is_include_all_sensitive_types');
  }

  // is_sample_data_collection_enabled - computed: true, optional: false, required: false
  public get isSampleDataCollectionEnabled() {
    return this.getBooleanAttribute('is_sample_data_collection_enabled');
  }

  // schemas_for_discovery - computed: true, optional: false, required: false
  public get schemasForDiscovery() {
    return this.getListAttribute('schemas_for_discovery');
  }

  // sensitive_data_model_id - computed: false, optional: false, required: true
  private _sensitiveDataModelId?: string; 
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }
  public set sensitiveDataModelId(value: string) {
    this._sensitiveDataModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataModelIdInput() {
    return this._sensitiveDataModelId;
  }

  // sensitive_type_group_ids_for_discovery - computed: true, optional: false, required: false
  public get sensitiveTypeGroupIdsForDiscovery() {
    return this.getListAttribute('sensitive_type_group_ids_for_discovery');
  }

  // sensitive_type_ids_for_discovery - computed: true, optional: false, required: false
  public get sensitiveTypeIdsForDiscovery() {
    return this.getListAttribute('sensitive_type_ids_for_discovery');
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

  // tables_for_discovery - computed: true, optional: false, required: false
  private _tablesForDiscovery = new DataOciDataSafeSensitiveDataModelTablesForDiscoveryList(this, "tables_for_discovery", false);
  public get tablesForDiscovery() {
    return this._tablesForDiscovery;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sensitive_data_model_id: cdktf.stringToTerraform(this._sensitiveDataModelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sensitive_data_model_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveDataModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
