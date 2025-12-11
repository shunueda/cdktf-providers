// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatascienceMlApplicationImplementationVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions#id DataOciDatascienceMlApplicationImplementationVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions#ml_application_implementation_id DataOciDatascienceMlApplicationImplementationVersions#ml_application_implementation_id}
  */
  readonly mlApplicationImplementationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions#state DataOciDatascienceMlApplicationImplementationVersions#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions#filter DataOciDatascienceMlApplicationImplementationVersions#filter}
  */
  readonly filter?: DataOciDatascienceMlApplicationImplementationVersionsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponents {
}

export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponentsToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponentsToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponents | undefined) {
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

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponentsOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchema {
}

export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchemaToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchemaToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchema | undefined) {
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

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchemaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchemaOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArguments {
}

export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArgumentsToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArgumentsToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArguments | undefined) {
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

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArgumentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArgumentsOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArguments {
}

export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arguments - computed: true, optional: false, required: false
  private _arguments = new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsArgumentsList(this, "arguments", false);
  public get arguments() {
    return this._arguments;
  }
}

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItems {
}

export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_migration_destinations - computed: true, optional: false, required: false
  public get allowedMigrationDestinations() {
    return this.getListAttribute('allowed_migration_destinations');
  }

  // application_components - computed: true, optional: false, required: false
  private _applicationComponents = new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsApplicationComponentsList(this, "application_components", false);
  public get applicationComponents() {
    return this._applicationComponents;
  }

  // configuration_schema - computed: true, optional: false, required: false
  private _configurationSchema = new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsConfigurationSchemaList(this, "configuration_schema", false);
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ml_application_name - computed: true, optional: false, required: false
  public get mlApplicationName() {
    return this.getStringAttribute('ml_application_name');
  }

  // ml_application_package_arguments - computed: true, optional: false, required: false
  private _mlApplicationPackageArguments = new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsMlApplicationPackageArgumentsList(this, "ml_application_package_arguments", false);
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
}

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollection {
}

export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatascienceMlApplicationImplementationVersionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions#name DataOciDatascienceMlApplicationImplementationVersions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions#regex DataOciDatascienceMlApplicationImplementationVersions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions#values DataOciDatascienceMlApplicationImplementationVersions#values}
  */
  readonly values: string[];
}

export function dataOciDatascienceMlApplicationImplementationVersionsFilterToTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDatascienceMlApplicationImplementationVersionsFilterToHclTerraform(struct?: DataOciDatascienceMlApplicationImplementationVersionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDatascienceMlApplicationImplementationVersionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatascienceMlApplicationImplementationVersionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatascienceMlApplicationImplementationVersionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDatascienceMlApplicationImplementationVersionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatascienceMlApplicationImplementationVersionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatascienceMlApplicationImplementationVersionsFilterOutputReference {
    return new DataOciDatascienceMlApplicationImplementationVersionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions oci_datascience_ml_application_implementation_versions}
*/
export class DataOciDatascienceMlApplicationImplementationVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_ml_application_implementation_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatascienceMlApplicationImplementationVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatascienceMlApplicationImplementationVersions to import
  * @param importFromId The id of the existing DataOciDatascienceMlApplicationImplementationVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatascienceMlApplicationImplementationVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_ml_application_implementation_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/datascience_ml_application_implementation_versions oci_datascience_ml_application_implementation_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatascienceMlApplicationImplementationVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatascienceMlApplicationImplementationVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_ml_application_implementation_versions',
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
    this._id = config.id;
    this._mlApplicationImplementationId = config.mlApplicationImplementationId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ml_application_implementation_id - computed: false, optional: false, required: true
  private _mlApplicationImplementationId?: string; 
  public get mlApplicationImplementationId() {
    return this.getStringAttribute('ml_application_implementation_id');
  }
  public set mlApplicationImplementationId(value: string) {
    this._mlApplicationImplementationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mlApplicationImplementationIdInput() {
    return this._mlApplicationImplementationId;
  }

  // ml_application_implementation_version_collection - computed: true, optional: false, required: false
  private _mlApplicationImplementationVersionCollection = new DataOciDatascienceMlApplicationImplementationVersionsMlApplicationImplementationVersionCollectionList(this, "ml_application_implementation_version_collection", false);
  public get mlApplicationImplementationVersionCollection() {
    return this._mlApplicationImplementationVersionCollection;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatascienceMlApplicationImplementationVersionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatascienceMlApplicationImplementationVersionsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ml_application_implementation_id: cdktf.stringToTerraform(this._mlApplicationImplementationId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDatascienceMlApplicationImplementationVersionsFilterToTerraform, true)(this._filter.internalValue),
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
      ml_application_implementation_id: {
        value: cdktf.stringToHclTerraform(this._mlApplicationImplementationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatascienceMlApplicationImplementationVersionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatascienceMlApplicationImplementationVersionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
