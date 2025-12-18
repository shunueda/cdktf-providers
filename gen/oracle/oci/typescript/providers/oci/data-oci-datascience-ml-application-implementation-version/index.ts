// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_ml_application_implementation_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatascienceMlApplicationImplementationVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_ml_application_implementation_version#id DataOciDatascienceMlApplicationImplementationVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_ml_application_implementation_version#ml_application_implementation_version_id DataOciDatascienceMlApplicationImplementationVersion#ml_application_implementation_version_id}
  */
  readonly mlApplicationImplementationVersionId: string;
}
export interface DataOciDatascienceMlApplicationImplementationVersionApplicationComponents {
}

export function dataOciDatascienceMlApplicationImplementationVersionApplicationComponentsToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionApplicationComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionApplicationComponentsToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionApplicationComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceMlApplicationImplementationVersionApplicationComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionApplicationComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionApplicationComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDatascienceMlApplicationImplementationVersionApplicationComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionApplicationComponentsOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionApplicationComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceMlApplicationImplementationVersionConfigurationSchema {
}

export function dataOciDatascienceMlApplicationImplementationVersionConfigurationSchemaToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionConfigurationSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionConfigurationSchemaToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionConfigurationSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceMlApplicationImplementationVersionConfigurationSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionConfigurationSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionConfigurationSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_mandatory - computed: true, optional: false, required: false
  public get isMandatory() {
    return this.getBooleanAttribute('is_mandatory');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // sample_value - computed: true, optional: false, required: false
  public get sampleValue() {
    return this.getStringAttribute('sample_value');
  }

  // validation_regexp - computed: true, optional: false, required: false
  public get validationRegexp() {
    return this.getStringAttribute('validation_regexp');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataOciDatascienceMlApplicationImplementationVersionConfigurationSchemaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionConfigurationSchemaOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionConfigurationSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArguments {
}

export function dataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArgumentsToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArgumentsToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_mandatory - computed: true, optional: false, required: false
  public get isMandatory() {
    return this.getBooleanAttribute('is_mandatory');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArgumentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArgumentsOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArguments {
}

export function dataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arguments - computed: true, optional: false, required: false
  private _arguments = new DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsArgumentsList(this, "arguments", false);
  public get arguments() {
    return this._arguments;
  }
}

export class DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_ml_application_implementation_version oci_datascience_ml_application_implementation_version}
*/
export class DataOciDatascienceMlApplicationImplementationVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_ml_application_implementation_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatascienceMlApplicationImplementationVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatascienceMlApplicationImplementationVersion to import
  * @param importFromId The id of the existing DataOciDatascienceMlApplicationImplementationVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_ml_application_implementation_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatascienceMlApplicationImplementationVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_ml_application_implementation_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datascience_ml_application_implementation_version oci_datascience_ml_application_implementation_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatascienceMlApplicationImplementationVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatascienceMlApplicationImplementationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_ml_application_implementation_version',
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
    this._id = config.id;
    this._mlApplicationImplementationVersionId = config.mlApplicationImplementationVersionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_migration_destinations - computed: true, optional: false, required: false
  public get allowedMigrationDestinations() {
    return this.getListAttribute('allowed_migration_destinations');
  }

  // application_components - computed: true, optional: false, required: false
  private _applicationComponents = new DataOciDatascienceMlApplicationImplementationVersionApplicationComponentsList(this, "application_components", false);
  public get applicationComponents() {
    return this._applicationComponents;
  }

  // configuration_schema - computed: true, optional: false, required: false
  private _configurationSchema = new DataOciDatascienceMlApplicationImplementationVersionConfigurationSchemaList(this, "configuration_schema", false);
  public get configurationSchema() {
    return this._configurationSchema;
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ml_application_id - computed: true, optional: false, required: false
  public get mlApplicationId() {
    return this.getStringAttribute('ml_application_id');
  }

  // ml_application_implementation_id - computed: true, optional: false, required: false
  public get mlApplicationImplementationId() {
    return this.getStringAttribute('ml_application_implementation_id');
  }

  // ml_application_implementation_version_id - computed: false, optional: false, required: true
  private _mlApplicationImplementationVersionId?: string; 
  public get mlApplicationImplementationVersionId() {
    return this.getStringAttribute('ml_application_implementation_version_id');
  }
  public set mlApplicationImplementationVersionId(value: string) {
    this._mlApplicationImplementationVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mlApplicationImplementationVersionIdInput() {
    return this._mlApplicationImplementationVersionId;
  }

  // ml_application_name - computed: true, optional: false, required: false
  public get mlApplicationName() {
    return this.getStringAttribute('ml_application_name');
  }

  // ml_application_package_arguments - computed: true, optional: false, required: false
  private _mlApplicationPackageArguments = new DataOciDatascienceMlApplicationImplementationVersionMlApplicationPackageArgumentsList(this, "ml_application_package_arguments", false);
  public get mlApplicationPackageArguments() {
    return this._mlApplicationPackageArguments;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ml_application_implementation_version_id: cdktf.stringToTerraform(this._mlApplicationImplementationVersionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ml_application_implementation_version_id: {
        value: cdktf.stringToHclTerraform(this._mlApplicationImplementationVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
