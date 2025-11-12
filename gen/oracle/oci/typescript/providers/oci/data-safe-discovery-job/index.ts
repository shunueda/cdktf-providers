// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeDiscoveryJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}
  */
  readonly discoveryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}
  */
  readonly isAppDefinedRelationDiscoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}
  */
  readonly isIncludeAllSchemas?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}
  */
  readonly isIncludeAllSensitiveTypes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}
  */
  readonly isSampleDataCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}
  */
  readonly schemasForDiscovery?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}
  */
  readonly sensitiveDataModelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#sensitive_type_group_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_group_ids_for_discovery}
  */
  readonly sensitiveTypeGroupIdsForDiscovery?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}
  */
  readonly sensitiveTypeIdsForDiscovery?: string[];
  /**
  * tables_for_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#tables_for_discovery DataSafeDiscoveryJob#tables_for_discovery}
  */
  readonly tablesForDiscovery?: DataSafeDiscoveryJobTablesForDiscovery[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#timeouts DataSafeDiscoveryJob#timeouts}
  */
  readonly timeouts?: DataSafeDiscoveryJobTimeouts;
}
export interface DataSafeDiscoveryJobTablesForDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#schema_name DataSafeDiscoveryJob#schema_name}
  */
  readonly schemaName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#table_names DataSafeDiscoveryJob#table_names}
  */
  readonly tableNames?: string[];
}

export function dataSafeDiscoveryJobTablesForDiscoveryToTerraform(struct?: DataSafeDiscoveryJobTablesForDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableNames),
  }
}


export function dataSafeDiscoveryJobTablesForDiscoveryToHclTerraform(struct?: DataSafeDiscoveryJobTablesForDiscovery | cdktf.IResolvable): any {
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

export class DataSafeDiscoveryJobTablesForDiscoveryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSafeDiscoveryJobTablesForDiscovery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeDiscoveryJobTablesForDiscovery | cdktf.IResolvable | undefined) {
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

export class DataSafeDiscoveryJobTablesForDiscoveryList extends cdktf.ComplexList {
  public internalValue? : DataSafeDiscoveryJobTablesForDiscovery[] | cdktf.IResolvable

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
  public get(index: number): DataSafeDiscoveryJobTablesForDiscoveryOutputReference {
    return new DataSafeDiscoveryJobTablesForDiscoveryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeDiscoveryJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#create DataSafeDiscoveryJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#delete DataSafeDiscoveryJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#update DataSafeDiscoveryJob#update}
  */
  readonly update?: string;
}

export function dataSafeDiscoveryJobTimeoutsToTerraform(struct?: DataSafeDiscoveryJobTimeouts | cdktf.IResolvable): any {
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


export function dataSafeDiscoveryJobTimeoutsToHclTerraform(struct?: DataSafeDiscoveryJobTimeouts | cdktf.IResolvable): any {
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

export class DataSafeDiscoveryJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeDiscoveryJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSafeDiscoveryJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job oci_data_safe_discovery_job}
*/
export class DataSafeDiscoveryJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_discovery_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeDiscoveryJob to import
  * @param importFromId The id of the existing DataSafeDiscoveryJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeDiscoveryJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_discovery_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/data_safe_discovery_job oci_data_safe_discovery_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeDiscoveryJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeDiscoveryJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_discovery_job',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._discoveryType = config.discoveryType;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAppDefinedRelationDiscoveryEnabled = config.isAppDefinedRelationDiscoveryEnabled;
    this._isIncludeAllSchemas = config.isIncludeAllSchemas;
    this._isIncludeAllSensitiveTypes = config.isIncludeAllSensitiveTypes;
    this._isSampleDataCollectionEnabled = config.isSampleDataCollectionEnabled;
    this._schemasForDiscovery = config.schemasForDiscovery;
    this._sensitiveDataModelId = config.sensitiveDataModelId;
    this._sensitiveTypeGroupIdsForDiscovery = config.sensitiveTypeGroupIdsForDiscovery;
    this._sensitiveTypeIdsForDiscovery = config.sensitiveTypeIdsForDiscovery;
    this._tablesForDiscovery.internalValue = config.tablesForDiscovery;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // discovery_type - computed: true, optional: true, required: false
  private _discoveryType?: string; 
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }
  public set discoveryType(value: string) {
    this._discoveryType = value;
  }
  public resetDiscoveryType() {
    this._discoveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTypeInput() {
    return this._discoveryType;
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

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // total_columns_scanned - computed: true, optional: false, required: false
  public get totalColumnsScanned() {
    return this.getStringAttribute('total_columns_scanned');
  }

  // total_deleted_sensitive_columns - computed: true, optional: false, required: false
  public get totalDeletedSensitiveColumns() {
    return this.getStringAttribute('total_deleted_sensitive_columns');
  }

  // total_modified_sensitive_columns - computed: true, optional: false, required: false
  public get totalModifiedSensitiveColumns() {
    return this.getStringAttribute('total_modified_sensitive_columns');
  }

  // total_new_sensitive_columns - computed: true, optional: false, required: false
  public get totalNewSensitiveColumns() {
    return this.getStringAttribute('total_new_sensitive_columns');
  }

  // total_objects_scanned - computed: true, optional: false, required: false
  public get totalObjectsScanned() {
    return this.getStringAttribute('total_objects_scanned');
  }

  // total_schemas_scanned - computed: true, optional: false, required: false
  public get totalSchemasScanned() {
    return this.getStringAttribute('total_schemas_scanned');
  }

  // tables_for_discovery - computed: false, optional: true, required: false
  private _tablesForDiscovery = new DataSafeDiscoveryJobTablesForDiscoveryList(this, "tables_for_discovery", false);
  public get tablesForDiscovery() {
    return this._tablesForDiscovery;
  }
  public putTablesForDiscovery(value: DataSafeDiscoveryJobTablesForDiscovery[] | cdktf.IResolvable) {
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
  private _timeouts = new DataSafeDiscoveryJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeDiscoveryJobTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      discovery_type: cdktf.stringToTerraform(this._discoveryType),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_app_defined_relation_discovery_enabled: cdktf.booleanToTerraform(this._isAppDefinedRelationDiscoveryEnabled),
      is_include_all_schemas: cdktf.booleanToTerraform(this._isIncludeAllSchemas),
      is_include_all_sensitive_types: cdktf.booleanToTerraform(this._isIncludeAllSensitiveTypes),
      is_sample_data_collection_enabled: cdktf.booleanToTerraform(this._isSampleDataCollectionEnabled),
      schemas_for_discovery: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemasForDiscovery),
      sensitive_data_model_id: cdktf.stringToTerraform(this._sensitiveDataModelId),
      sensitive_type_group_ids_for_discovery: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveTypeGroupIdsForDiscovery),
      sensitive_type_ids_for_discovery: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveTypeIdsForDiscovery),
      tables_for_discovery: cdktf.listMapper(dataSafeDiscoveryJobTablesForDiscoveryToTerraform, true)(this._tablesForDiscovery.internalValue),
      timeouts: dataSafeDiscoveryJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      discovery_type: {
        value: cdktf.stringToHclTerraform(this._discoveryType),
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
      sensitive_data_model_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveDataModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tables_for_discovery: {
        value: cdktf.listMapperHcl(dataSafeDiscoveryJobTablesForDiscoveryToHclTerraform, true)(this._tablesForDiscovery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeDiscoveryJobTablesForDiscoveryList",
      },
      timeouts: {
        value: dataSafeDiscoveryJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeDiscoveryJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
