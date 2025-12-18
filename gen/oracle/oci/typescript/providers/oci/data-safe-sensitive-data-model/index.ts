// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeSensitiveDataModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#app_suite_name DataSafeSensitiveDataModel#app_suite_name}
  */
  readonly appSuiteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#compartment_id DataSafeSensitiveDataModel#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#defined_tags DataSafeSensitiveDataModel#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#description DataSafeSensitiveDataModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#display_name DataSafeSensitiveDataModel#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#freeform_tags DataSafeSensitiveDataModel#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#id DataSafeSensitiveDataModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#is_app_defined_relation_discovery_enabled DataSafeSensitiveDataModel#is_app_defined_relation_discovery_enabled}
  */
  readonly isAppDefinedRelationDiscoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#is_include_all_schemas DataSafeSensitiveDataModel#is_include_all_schemas}
  */
  readonly isIncludeAllSchemas?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#is_include_all_sensitive_types DataSafeSensitiveDataModel#is_include_all_sensitive_types}
  */
  readonly isIncludeAllSensitiveTypes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#is_sample_data_collection_enabled DataSafeSensitiveDataModel#is_sample_data_collection_enabled}
  */
  readonly isSampleDataCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#schemas_for_discovery DataSafeSensitiveDataModel#schemas_for_discovery}
  */
  readonly schemasForDiscovery?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#sensitive_type_group_ids_for_discovery DataSafeSensitiveDataModel#sensitive_type_group_ids_for_discovery}
  */
  readonly sensitiveTypeGroupIdsForDiscovery?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#sensitive_type_ids_for_discovery DataSafeSensitiveDataModel#sensitive_type_ids_for_discovery}
  */
  readonly sensitiveTypeIdsForDiscovery?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#target_id DataSafeSensitiveDataModel#target_id}
  */
  readonly targetId: string;
  /**
  * tables_for_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#tables_for_discovery DataSafeSensitiveDataModel#tables_for_discovery}
  */
  readonly tablesForDiscovery?: DataSafeSensitiveDataModelTablesForDiscovery[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#timeouts DataSafeSensitiveDataModel#timeouts}
  */
  readonly timeouts?: DataSafeSensitiveDataModelTimeouts;
}
export interface DataSafeSensitiveDataModelTablesForDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#schema_name DataSafeSensitiveDataModel#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#table_names DataSafeSensitiveDataModel#table_names}
  */
  readonly tableNames?: string[];
}

export function dataSafeSensitiveDataModelTablesForDiscoveryToTerraform(struct?: DataSafeSensitiveDataModelTablesForDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableNames),
  }
}


export function dataSafeSensitiveDataModelTablesForDiscoveryToHclTerraform(struct?: DataSafeSensitiveDataModelTablesForDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tableNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeSensitiveDataModelTablesForDiscoveryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeSensitiveDataModelTablesForDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNames = this._tableNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeSensitiveDataModelTablesForDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaName = undefined;
      this._tableNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaName = value.schemaName;
      this._tableNames = value.tableNames;
    }
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_names - computed: true, optional: true, required: false
  private _tableNames?: string[]; 
  public get tableNames() {
    return this.getListAttribute('table_names');
  }
  public set tableNames(value: string[]) {
    this._tableNames = value;
  }
  public resetTableNames() {
    this._tableNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamesInput() {
    return this._tableNames;
  }
}

export class DataSafeSensitiveDataModelTablesForDiscoveryList extends cdktf.ComplexList {
  public internalValue? : DataSafeSensitiveDataModelTablesForDiscovery[] | cdktf.IResolvable

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
  public get(index: number): DataSafeSensitiveDataModelTablesForDiscoveryOutputReference {
    return new DataSafeSensitiveDataModelTablesForDiscoveryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeSensitiveDataModelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#create DataSafeSensitiveDataModel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#delete DataSafeSensitiveDataModel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#update DataSafeSensitiveDataModel#update}
  */
  readonly update?: string;
}

export function dataSafeSensitiveDataModelTimeoutsToTerraform(struct?: DataSafeSensitiveDataModelTimeouts | cdktf.IResolvable): any {
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


export function dataSafeSensitiveDataModelTimeoutsToHclTerraform(struct?: DataSafeSensitiveDataModelTimeouts | cdktf.IResolvable): any {
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

export class DataSafeSensitiveDataModelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeSensitiveDataModelTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeSensitiveDataModelTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model oci_data_safe_sensitive_data_model}
*/
export class DataSafeSensitiveDataModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sensitive_data_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeSensitiveDataModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeSensitiveDataModel to import
  * @param importFromId The id of the existing DataSafeSensitiveDataModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeSensitiveDataModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sensitive_data_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/data_safe_sensitive_data_model oci_data_safe_sensitive_data_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeSensitiveDataModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeSensitiveDataModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sensitive_data_model',
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
    this._appSuiteName = config.appSuiteName;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAppDefinedRelationDiscoveryEnabled = config.isAppDefinedRelationDiscoveryEnabled;
    this._isIncludeAllSchemas = config.isIncludeAllSchemas;
    this._isIncludeAllSensitiveTypes = config.isIncludeAllSensitiveTypes;
    this._isSampleDataCollectionEnabled = config.isSampleDataCollectionEnabled;
    this._schemasForDiscovery = config.schemasForDiscovery;
    this._sensitiveTypeGroupIdsForDiscovery = config.sensitiveTypeGroupIdsForDiscovery;
    this._sensitiveTypeIdsForDiscovery = config.sensitiveTypeIdsForDiscovery;
    this._targetId = config.targetId;
    this._tablesForDiscovery.internalValue = config.tablesForDiscovery;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_suite_name - computed: true, optional: true, required: false
  private _appSuiteName?: string; 
  public get appSuiteName() {
    return this.getStringAttribute('app_suite_name');
  }
  public set appSuiteName(value: string) {
    this._appSuiteName = value;
  }
  public resetAppSuiteName() {
    this._appSuiteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSuiteNameInput() {
    return this._appSuiteName;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_app_defined_relation_discovery_enabled - computed: true, optional: true, required: false
  private _isAppDefinedRelationDiscoveryEnabled?: boolean | cdktf.IResolvable; 
  public get isAppDefinedRelationDiscoveryEnabled() {
    return this.getBooleanAttribute('is_app_defined_relation_discovery_enabled');
  }
  public set isAppDefinedRelationDiscoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._isAppDefinedRelationDiscoveryEnabled = value;
  }
  public resetIsAppDefinedRelationDiscoveryEnabled() {
    this._isAppDefinedRelationDiscoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAppDefinedRelationDiscoveryEnabledInput() {
    return this._isAppDefinedRelationDiscoveryEnabled;
  }

  // is_include_all_schemas - computed: true, optional: true, required: false
  private _isIncludeAllSchemas?: boolean | cdktf.IResolvable; 
  public get isIncludeAllSchemas() {
    return this.getBooleanAttribute('is_include_all_schemas');
  }
  public set isIncludeAllSchemas(value: boolean | cdktf.IResolvable) {
    this._isIncludeAllSchemas = value;
  }
  public resetIsIncludeAllSchemas() {
    this._isIncludeAllSchemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncludeAllSchemasInput() {
    return this._isIncludeAllSchemas;
  }

  // is_include_all_sensitive_types - computed: true, optional: true, required: false
  private _isIncludeAllSensitiveTypes?: boolean | cdktf.IResolvable; 
  public get isIncludeAllSensitiveTypes() {
    return this.getBooleanAttribute('is_include_all_sensitive_types');
  }
  public set isIncludeAllSensitiveTypes(value: boolean | cdktf.IResolvable) {
    this._isIncludeAllSensitiveTypes = value;
  }
  public resetIsIncludeAllSensitiveTypes() {
    this._isIncludeAllSensitiveTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncludeAllSensitiveTypesInput() {
    return this._isIncludeAllSensitiveTypes;
  }

  // is_sample_data_collection_enabled - computed: true, optional: true, required: false
  private _isSampleDataCollectionEnabled?: boolean | cdktf.IResolvable; 
  public get isSampleDataCollectionEnabled() {
    return this.getBooleanAttribute('is_sample_data_collection_enabled');
  }
  public set isSampleDataCollectionEnabled(value: boolean | cdktf.IResolvable) {
    this._isSampleDataCollectionEnabled = value;
  }
  public resetIsSampleDataCollectionEnabled() {
    this._isSampleDataCollectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSampleDataCollectionEnabledInput() {
    return this._isSampleDataCollectionEnabled;
  }

  // schemas_for_discovery - computed: true, optional: true, required: false
  private _schemasForDiscovery?: string[]; 
  public get schemasForDiscovery() {
    return this.getListAttribute('schemas_for_discovery');
  }
  public set schemasForDiscovery(value: string[]) {
    this._schemasForDiscovery = value;
  }
  public resetSchemasForDiscovery() {
    this._schemasForDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasForDiscoveryInput() {
    return this._schemasForDiscovery;
  }

  // sensitive_type_group_ids_for_discovery - computed: true, optional: true, required: false
  private _sensitiveTypeGroupIdsForDiscovery?: string[]; 
  public get sensitiveTypeGroupIdsForDiscovery() {
    return this.getListAttribute('sensitive_type_group_ids_for_discovery');
  }
  public set sensitiveTypeGroupIdsForDiscovery(value: string[]) {
    this._sensitiveTypeGroupIdsForDiscovery = value;
  }
  public resetSensitiveTypeGroupIdsForDiscovery() {
    this._sensitiveTypeGroupIdsForDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeGroupIdsForDiscoveryInput() {
    return this._sensitiveTypeGroupIdsForDiscovery;
  }

  // sensitive_type_ids_for_discovery - computed: true, optional: true, required: false
  private _sensitiveTypeIdsForDiscovery?: string[]; 
  public get sensitiveTypeIdsForDiscovery() {
    return this.getListAttribute('sensitive_type_ids_for_discovery');
  }
  public set sensitiveTypeIdsForDiscovery(value: string[]) {
    this._sensitiveTypeIdsForDiscovery = value;
  }
  public resetSensitiveTypeIdsForDiscovery() {
    this._sensitiveTypeIdsForDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeIdsForDiscoveryInput() {
    return this._sensitiveTypeIdsForDiscovery;
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

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // tables_for_discovery - computed: false, optional: true, required: false
  private _tablesForDiscovery = new DataSafeSensitiveDataModelTablesForDiscoveryList(this, "tables_for_discovery", false);
  public get tablesForDiscovery() {
    return this._tablesForDiscovery;
  }
  public putTablesForDiscovery(value: DataSafeSensitiveDataModelTablesForDiscovery[] | cdktf.IResolvable) {
    this._tablesForDiscovery.internalValue = value;
  }
  public resetTablesForDiscovery() {
    this._tablesForDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesForDiscoveryInput() {
    return this._tablesForDiscovery.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeSensitiveDataModelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeSensitiveDataModelTimeouts) {
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
      app_suite_name: cdktf.stringToTerraform(this._appSuiteName),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_app_defined_relation_discovery_enabled: cdktf.booleanToTerraform(this._isAppDefinedRelationDiscoveryEnabled),
      is_include_all_schemas: cdktf.booleanToTerraform(this._isIncludeAllSchemas),
      is_include_all_sensitive_types: cdktf.booleanToTerraform(this._isIncludeAllSensitiveTypes),
      is_sample_data_collection_enabled: cdktf.booleanToTerraform(this._isSampleDataCollectionEnabled),
      schemas_for_discovery: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemasForDiscovery),
      sensitive_type_group_ids_for_discovery: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveTypeGroupIdsForDiscovery),
      sensitive_type_ids_for_discovery: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveTypeIdsForDiscovery),
      target_id: cdktf.stringToTerraform(this._targetId),
      tables_for_discovery: cdktf.listMapper(dataSafeSensitiveDataModelTablesForDiscoveryToTerraform, true)(this._tablesForDiscovery.internalValue),
      timeouts: dataSafeSensitiveDataModelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_suite_name: {
        value: cdktf.stringToHclTerraform(this._appSuiteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_app_defined_relation_discovery_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAppDefinedRelationDiscoveryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_include_all_schemas: {
        value: cdktf.booleanToHclTerraform(this._isIncludeAllSchemas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_include_all_sensitive_types: {
        value: cdktf.booleanToHclTerraform(this._isIncludeAllSensitiveTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_sample_data_collection_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSampleDataCollectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schemas_for_discovery: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemasForDiscovery),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sensitive_type_group_ids_for_discovery: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitiveTypeGroupIdsForDiscovery),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sensitive_type_ids_for_discovery: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitiveTypeIdsForDiscovery),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tables_for_discovery: {
        value: cdktf.listMapperHcl(dataSafeSensitiveDataModelTablesForDiscoveryToHclTerraform, true)(this._tablesForDiscovery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeSensitiveDataModelTablesForDiscoveryList",
      },
      timeouts: {
        value: dataSafeSensitiveDataModelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeSensitiveDataModelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
