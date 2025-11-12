// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseMigrationMigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}
  */
  readonly bulkIncludeExcludeData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}
  */
  readonly databaseCombination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}
  */
  readonly sourceContainerDatabaseConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}
  */
  readonly sourceDatabaseConnectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#source_standby_database_connection_id DatabaseMigrationMigration#source_standby_database_connection_id}
  */
  readonly sourceStandbyDatabaseConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}
  */
  readonly targetDatabaseConnectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}
  */
  readonly type: string;
  /**
  * advanced_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#advanced_parameters DatabaseMigrationMigration#advanced_parameters}
  */
  readonly advancedParameters?: DatabaseMigrationMigrationAdvancedParameters[] | cdktf.IResolvable;
  /**
  * advisor_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#advisor_settings DatabaseMigrationMigration#advisor_settings}
  */
  readonly advisorSettings?: DatabaseMigrationMigrationAdvisorSettings;
  /**
  * data_transfer_medium_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#data_transfer_medium_details DatabaseMigrationMigration#data_transfer_medium_details}
  */
  readonly dataTransferMediumDetails?: DatabaseMigrationMigrationDataTransferMediumDetails;
  /**
  * exclude_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#exclude_objects DatabaseMigrationMigration#exclude_objects}
  */
  readonly excludeObjects?: DatabaseMigrationMigrationExcludeObjects[] | cdktf.IResolvable;
  /**
  * ggs_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#ggs_details DatabaseMigrationMigration#ggs_details}
  */
  readonly ggsDetails?: DatabaseMigrationMigrationGgsDetails;
  /**
  * hub_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#hub_details DatabaseMigrationMigration#hub_details}
  */
  readonly hubDetails?: DatabaseMigrationMigrationHubDetails;
  /**
  * include_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#include_objects DatabaseMigrationMigration#include_objects}
  */
  readonly includeObjects?: DatabaseMigrationMigrationIncludeObjects[] | cdktf.IResolvable;
  /**
  * initial_load_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#initial_load_settings DatabaseMigrationMigration#initial_load_settings}
  */
  readonly initialLoadSettings?: DatabaseMigrationMigrationInitialLoadSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#timeouts DatabaseMigrationMigration#timeouts}
  */
  readonly timeouts?: DatabaseMigrationMigrationTimeouts;
}
export interface DatabaseMigrationMigrationAdvancedParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}
  */
  readonly value?: string;
}

export function databaseMigrationMigrationAdvancedParametersToTerraform(struct?: DatabaseMigrationMigrationAdvancedParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function databaseMigrationMigrationAdvancedParametersToHclTerraform(struct?: DatabaseMigrationMigrationAdvancedParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationAdvancedParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationMigrationAdvancedParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationAdvancedParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DatabaseMigrationMigrationAdvancedParametersList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationMigrationAdvancedParameters[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationMigrationAdvancedParametersOutputReference {
    return new DatabaseMigrationMigrationAdvancedParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationMigrationAdvisorSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}
  */
  readonly isIgnoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}
  */
  readonly isSkipAdvisor?: boolean | cdktf.IResolvable;
}

export function databaseMigrationMigrationAdvisorSettingsToTerraform(struct?: DatabaseMigrationMigrationAdvisorSettingsOutputReference | DatabaseMigrationMigrationAdvisorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ignore_errors: cdktf.booleanToTerraform(struct!.isIgnoreErrors),
    is_skip_advisor: cdktf.booleanToTerraform(struct!.isSkipAdvisor),
  }
}


export function databaseMigrationMigrationAdvisorSettingsToHclTerraform(struct?: DatabaseMigrationMigrationAdvisorSettingsOutputReference | DatabaseMigrationMigrationAdvisorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_ignore_errors: {
      value: cdktf.booleanToHclTerraform(struct!.isIgnoreErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_skip_advisor: {
      value: cdktf.booleanToHclTerraform(struct!.isSkipAdvisor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationAdvisorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationAdvisorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isIgnoreErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIgnoreErrors = this._isIgnoreErrors;
    }
    if (this._isSkipAdvisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSkipAdvisor = this._isSkipAdvisor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationAdvisorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isIgnoreErrors = undefined;
      this._isSkipAdvisor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isIgnoreErrors = value.isIgnoreErrors;
      this._isSkipAdvisor = value.isSkipAdvisor;
    }
  }

  // is_ignore_errors - computed: true, optional: true, required: false
  private _isIgnoreErrors?: boolean | cdktf.IResolvable; 
  public get isIgnoreErrors() {
    return this.getBooleanAttribute('is_ignore_errors');
  }
  public set isIgnoreErrors(value: boolean | cdktf.IResolvable) {
    this._isIgnoreErrors = value;
  }
  public resetIsIgnoreErrors() {
    this._isIgnoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIgnoreErrorsInput() {
    return this._isIgnoreErrors;
  }

  // is_skip_advisor - computed: true, optional: true, required: false
  private _isSkipAdvisor?: boolean | cdktf.IResolvable; 
  public get isSkipAdvisor() {
    return this.getBooleanAttribute('is_skip_advisor');
  }
  public set isSkipAdvisor(value: boolean | cdktf.IResolvable) {
    this._isSkipAdvisor = value;
  }
  public resetIsSkipAdvisor() {
    this._isSkipAdvisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSkipAdvisorInput() {
    return this._isSkipAdvisor;
  }
}
export interface DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}
  */
  readonly namespace?: string;
}

export function databaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketToTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function databaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketToHclTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DatabaseMigrationMigrationDataTransferMediumDetailsSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}
  */
  readonly ociHome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}
  */
  readonly walletLocation?: string;
}

export function databaseMigrationMigrationDataTransferMediumDetailsSourceToTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    oci_home: cdktf.stringToTerraform(struct!.ociHome),
    wallet_location: cdktf.stringToTerraform(struct!.walletLocation),
  }
}


export function databaseMigrationMigrationDataTransferMediumDetailsSourceToHclTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oci_home: {
      value: cdktf.stringToHclTerraform(struct!.ociHome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_location: {
      value: cdktf.stringToHclTerraform(struct!.walletLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDataTransferMediumDetailsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._ociHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.ociHome = this._ociHome;
    }
    if (this._walletLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletLocation = this._walletLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDataTransferMediumDetailsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._ociHome = undefined;
      this._walletLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._ociHome = value.ociHome;
      this._walletLocation = value.walletLocation;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // oci_home - computed: true, optional: true, required: false
  private _ociHome?: string; 
  public get ociHome() {
    return this.getStringAttribute('oci_home');
  }
  public set ociHome(value: string) {
    this._ociHome = value;
  }
  public resetOciHome() {
    this._ociHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociHomeInput() {
    return this._ociHome;
  }

  // wallet_location - computed: true, optional: true, required: false
  private _walletLocation?: string; 
  public get walletLocation() {
    return this.getStringAttribute('wallet_location');
  }
  public set walletLocation(value: string) {
    this._walletLocation = value;
  }
  public resetWalletLocation() {
    this._walletLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletLocationInput() {
    return this._walletLocation;
  }
}
export interface DatabaseMigrationMigrationDataTransferMediumDetailsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}
  */
  readonly ociHome?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}
  */
  readonly walletLocation?: string;
}

export function databaseMigrationMigrationDataTransferMediumDetailsTargetToTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    oci_home: cdktf.stringToTerraform(struct!.ociHome),
    wallet_location: cdktf.stringToTerraform(struct!.walletLocation),
  }
}


export function databaseMigrationMigrationDataTransferMediumDetailsTargetToHclTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference | DatabaseMigrationMigrationDataTransferMediumDetailsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oci_home: {
      value: cdktf.stringToHclTerraform(struct!.ociHome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_location: {
      value: cdktf.stringToHclTerraform(struct!.walletLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDataTransferMediumDetailsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._ociHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.ociHome = this._ociHome;
    }
    if (this._walletLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletLocation = this._walletLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDataTransferMediumDetailsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._ociHome = undefined;
      this._walletLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._ociHome = value.ociHome;
      this._walletLocation = value.walletLocation;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // oci_home - computed: true, optional: true, required: false
  private _ociHome?: string; 
  public get ociHome() {
    return this.getStringAttribute('oci_home');
  }
  public set ociHome(value: string) {
    this._ociHome = value;
  }
  public resetOciHome() {
    this._ociHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociHomeInput() {
    return this._ociHome;
  }

  // wallet_location - computed: true, optional: true, required: false
  private _walletLocation?: string; 
  public get walletLocation() {
    return this.getStringAttribute('wallet_location');
  }
  public set walletLocation(value: string) {
    this._walletLocation = value;
  }
  public resetWalletLocation() {
    this._walletLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletLocationInput() {
    return this._walletLocation;
  }
}
export interface DatabaseMigrationMigrationDataTransferMediumDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}
  */
  readonly sharedStorageMountTargetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}
  */
  readonly type: string;
  /**
  * object_storage_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#object_storage_bucket DatabaseMigrationMigration#object_storage_bucket}
  */
  readonly objectStorageBucket?: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#source DatabaseMigrationMigration#source}
  */
  readonly source?: DatabaseMigrationMigrationDataTransferMediumDetailsSource;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#target DatabaseMigrationMigration#target}
  */
  readonly target?: DatabaseMigrationMigrationDataTransferMediumDetailsTarget;
}

export function databaseMigrationMigrationDataTransferMediumDetailsToTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference | DatabaseMigrationMigrationDataTransferMediumDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    shared_storage_mount_target_id: cdktf.stringToTerraform(struct!.sharedStorageMountTargetId),
    type: cdktf.stringToTerraform(struct!.type),
    object_storage_bucket: databaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketToTerraform(struct!.objectStorageBucket),
    source: databaseMigrationMigrationDataTransferMediumDetailsSourceToTerraform(struct!.source),
    target: databaseMigrationMigrationDataTransferMediumDetailsTargetToTerraform(struct!.target),
  }
}


export function databaseMigrationMigrationDataTransferMediumDetailsToHclTerraform(struct?: DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference | DatabaseMigrationMigrationDataTransferMediumDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_storage_mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.sharedStorageMountTargetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_storage_bucket: {
      value: databaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketToHclTerraform(struct!.objectStorageBucket),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketList",
    },
    source: {
      value: databaseMigrationMigrationDataTransferMediumDetailsSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDataTransferMediumDetailsSourceList",
    },
    target: {
      value: databaseMigrationMigrationDataTransferMediumDetailsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationDataTransferMediumDetailsTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationDataTransferMediumDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._sharedStorageMountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedStorageMountTargetId = this._sharedStorageMountTargetId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._objectStorageBucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageBucket = this._objectStorageBucket?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationDataTransferMediumDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._name = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._sharedStorageMountTargetId = undefined;
      this._type = undefined;
      this._objectStorageBucket.internalValue = undefined;
      this._source.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._name = value.name;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._sharedStorageMountTargetId = value.sharedStorageMountTargetId;
      this._type = value.type;
      this._objectStorageBucket.internalValue = value.objectStorageBucket;
      this._source.internalValue = value.source;
      this._target.internalValue = value.target;
    }
  }

  // access_key_id - computed: true, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: true, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // shared_storage_mount_target_id - computed: true, optional: true, required: false
  private _sharedStorageMountTargetId?: string; 
  public get sharedStorageMountTargetId() {
    return this.getStringAttribute('shared_storage_mount_target_id');
  }
  public set sharedStorageMountTargetId(value: string) {
    this._sharedStorageMountTargetId = value;
  }
  public resetSharedStorageMountTargetId() {
    this._sharedStorageMountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedStorageMountTargetIdInput() {
    return this._sharedStorageMountTargetId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // object_storage_bucket - computed: false, optional: true, required: false
  private _objectStorageBucket = new DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference(this, "object_storage_bucket");
  public get objectStorageBucket() {
    return this._objectStorageBucket;
  }
  public putObjectStorageBucket(value: DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket) {
    this._objectStorageBucket.internalValue = value;
  }
  public resetObjectStorageBucket() {
    this._objectStorageBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageBucketInput() {
    return this._objectStorageBucket.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DatabaseMigrationMigrationDataTransferMediumDetailsSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DatabaseMigrationMigrationDataTransferMediumDetailsTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DatabaseMigrationMigrationExcludeObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}
  */
  readonly isOmitExcludedTableFromReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}
  */
  readonly type?: string;
}

export function databaseMigrationMigrationExcludeObjectsToTerraform(struct?: DatabaseMigrationMigrationExcludeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_omit_excluded_table_from_replication: cdktf.booleanToTerraform(struct!.isOmitExcludedTableFromReplication),
    object: cdktf.stringToTerraform(struct!.object),
    owner: cdktf.stringToTerraform(struct!.owner),
    schema: cdktf.stringToTerraform(struct!.schema),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function databaseMigrationMigrationExcludeObjectsToHclTerraform(struct?: DatabaseMigrationMigrationExcludeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_omit_excluded_table_from_replication: {
      value: cdktf.booleanToHclTerraform(struct!.isOmitExcludedTableFromReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationExcludeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationMigrationExcludeObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isOmitExcludedTableFromReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOmitExcludedTableFromReplication = this._isOmitExcludedTableFromReplication;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationExcludeObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isOmitExcludedTableFromReplication = undefined;
      this._object = undefined;
      this._owner = undefined;
      this._schema = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isOmitExcludedTableFromReplication = value.isOmitExcludedTableFromReplication;
      this._object = value.object;
      this._owner = value.owner;
      this._schema = value.schema;
      this._type = value.type;
    }
  }

  // is_omit_excluded_table_from_replication - computed: true, optional: true, required: false
  private _isOmitExcludedTableFromReplication?: boolean | cdktf.IResolvable; 
  public get isOmitExcludedTableFromReplication() {
    return this.getBooleanAttribute('is_omit_excluded_table_from_replication');
  }
  public set isOmitExcludedTableFromReplication(value: boolean | cdktf.IResolvable) {
    this._isOmitExcludedTableFromReplication = value;
  }
  public resetIsOmitExcludedTableFromReplication() {
    this._isOmitExcludedTableFromReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOmitExcludedTableFromReplicationInput() {
    return this._isOmitExcludedTableFromReplication;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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
}

export class DatabaseMigrationMigrationExcludeObjectsList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationMigrationExcludeObjects[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationMigrationExcludeObjectsOutputReference {
    return new DatabaseMigrationMigrationExcludeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationMigrationGgsDetailsGgsDeployment {
}

export function databaseMigrationMigrationGgsDetailsGgsDeploymentToTerraform(struct?: DatabaseMigrationMigrationGgsDetailsGgsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseMigrationMigrationGgsDetailsGgsDeploymentToHclTerraform(struct?: DatabaseMigrationMigrationGgsDetailsGgsDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationMigrationGgsDetailsGgsDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGgsDetailsGgsDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // ggs_admin_credentials_secret_id - computed: true, optional: false, required: false
  public get ggsAdminCredentialsSecretId() {
    return this.getStringAttribute('ggs_admin_credentials_secret_id');
  }
}

export class DatabaseMigrationMigrationGgsDetailsGgsDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference {
    return new DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationMigrationGgsDetailsExtract {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}
  */
  readonly longTransDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}
  */
  readonly performanceProfile?: string;
}

export function databaseMigrationMigrationGgsDetailsExtractToTerraform(struct?: DatabaseMigrationMigrationGgsDetailsExtractOutputReference | DatabaseMigrationMigrationGgsDetailsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    long_trans_duration: cdktf.numberToTerraform(struct!.longTransDuration),
    performance_profile: cdktf.stringToTerraform(struct!.performanceProfile),
  }
}


export function databaseMigrationMigrationGgsDetailsExtractToHclTerraform(struct?: DatabaseMigrationMigrationGgsDetailsExtractOutputReference | DatabaseMigrationMigrationGgsDetailsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    long_trans_duration: {
      value: cdktf.numberToHclTerraform(struct!.longTransDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_profile: {
      value: cdktf.stringToHclTerraform(struct!.performanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGgsDetailsExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGgsDetailsExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._longTransDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.longTransDuration = this._longTransDuration;
    }
    if (this._performanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceProfile = this._performanceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGgsDetailsExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._longTransDuration = undefined;
      this._performanceProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._longTransDuration = value.longTransDuration;
      this._performanceProfile = value.performanceProfile;
    }
  }

  // long_trans_duration - computed: true, optional: true, required: false
  private _longTransDuration?: number; 
  public get longTransDuration() {
    return this.getNumberAttribute('long_trans_duration');
  }
  public set longTransDuration(value: number) {
    this._longTransDuration = value;
  }
  public resetLongTransDuration() {
    this._longTransDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTransDurationInput() {
    return this._longTransDuration;
  }

  // performance_profile - computed: true, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }
}
export interface DatabaseMigrationMigrationGgsDetailsReplicat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}
  */
  readonly performanceProfile?: string;
}

export function databaseMigrationMigrationGgsDetailsReplicatToTerraform(struct?: DatabaseMigrationMigrationGgsDetailsReplicatOutputReference | DatabaseMigrationMigrationGgsDetailsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    performance_profile: cdktf.stringToTerraform(struct!.performanceProfile),
  }
}


export function databaseMigrationMigrationGgsDetailsReplicatToHclTerraform(struct?: DatabaseMigrationMigrationGgsDetailsReplicatOutputReference | DatabaseMigrationMigrationGgsDetailsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    performance_profile: {
      value: cdktf.stringToHclTerraform(struct!.performanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGgsDetailsReplicatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGgsDetailsReplicat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceProfile = this._performanceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGgsDetailsReplicat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performanceProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performanceProfile = value.performanceProfile;
    }
  }

  // performance_profile - computed: true, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }
}
export interface DatabaseMigrationMigrationGgsDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}
  */
  readonly acceptableLag?: number;
  /**
  * extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}
  */
  readonly extract?: DatabaseMigrationMigrationGgsDetailsExtract;
  /**
  * replicat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}
  */
  readonly replicat?: DatabaseMigrationMigrationGgsDetailsReplicat;
}

export function databaseMigrationMigrationGgsDetailsToTerraform(struct?: DatabaseMigrationMigrationGgsDetailsOutputReference | DatabaseMigrationMigrationGgsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acceptable_lag: cdktf.numberToTerraform(struct!.acceptableLag),
    extract: databaseMigrationMigrationGgsDetailsExtractToTerraform(struct!.extract),
    replicat: databaseMigrationMigrationGgsDetailsReplicatToTerraform(struct!.replicat),
  }
}


export function databaseMigrationMigrationGgsDetailsToHclTerraform(struct?: DatabaseMigrationMigrationGgsDetailsOutputReference | DatabaseMigrationMigrationGgsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acceptable_lag: {
      value: cdktf.numberToHclTerraform(struct!.acceptableLag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extract: {
      value: databaseMigrationMigrationGgsDetailsExtractToHclTerraform(struct!.extract),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGgsDetailsExtractList",
    },
    replicat: {
      value: databaseMigrationMigrationGgsDetailsReplicatToHclTerraform(struct!.replicat),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationGgsDetailsReplicatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationGgsDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationGgsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptableLag !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptableLag = this._acceptableLag;
    }
    if (this._extract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract?.internalValue;
    }
    if (this._replicat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicat = this._replicat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationGgsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptableLag = undefined;
      this._extract.internalValue = undefined;
      this._replicat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptableLag = value.acceptableLag;
      this._extract.internalValue = value.extract;
      this._replicat.internalValue = value.replicat;
    }
  }

  // acceptable_lag - computed: true, optional: true, required: false
  private _acceptableLag?: number; 
  public get acceptableLag() {
    return this.getNumberAttribute('acceptable_lag');
  }
  public set acceptableLag(value: number) {
    this._acceptableLag = value;
  }
  public resetAcceptableLag() {
    this._acceptableLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptableLagInput() {
    return this._acceptableLag;
  }

  // ggs_deployment - computed: true, optional: false, required: false
  private _ggsDeployment = new DatabaseMigrationMigrationGgsDetailsGgsDeploymentList(this, "ggs_deployment", false);
  public get ggsDeployment() {
    return this._ggsDeployment;
  }

  // extract - computed: false, optional: true, required: false
  private _extract = new DatabaseMigrationMigrationGgsDetailsExtractOutputReference(this, "extract");
  public get extract() {
    return this._extract;
  }
  public putExtract(value: DatabaseMigrationMigrationGgsDetailsExtract) {
    this._extract.internalValue = value;
  }
  public resetExtract() {
    this._extract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract.internalValue;
  }

  // replicat - computed: false, optional: true, required: false
  private _replicat = new DatabaseMigrationMigrationGgsDetailsReplicatOutputReference(this, "replicat");
  public get replicat() {
    return this._replicat;
  }
  public putReplicat(value: DatabaseMigrationMigrationGgsDetailsReplicat) {
    this._replicat.internalValue = value;
  }
  public resetReplicat() {
    this._replicat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatInput() {
    return this._replicat.internalValue;
  }
}
export interface DatabaseMigrationMigrationHubDetailsExtract {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}
  */
  readonly longTransDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}
  */
  readonly performanceProfile?: string;
}

export function databaseMigrationMigrationHubDetailsExtractToTerraform(struct?: DatabaseMigrationMigrationHubDetailsExtractOutputReference | DatabaseMigrationMigrationHubDetailsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    long_trans_duration: cdktf.numberToTerraform(struct!.longTransDuration),
    performance_profile: cdktf.stringToTerraform(struct!.performanceProfile),
  }
}


export function databaseMigrationMigrationHubDetailsExtractToHclTerraform(struct?: DatabaseMigrationMigrationHubDetailsExtractOutputReference | DatabaseMigrationMigrationHubDetailsExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    long_trans_duration: {
      value: cdktf.numberToHclTerraform(struct!.longTransDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_profile: {
      value: cdktf.stringToHclTerraform(struct!.performanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationHubDetailsExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationHubDetailsExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._longTransDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.longTransDuration = this._longTransDuration;
    }
    if (this._performanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceProfile = this._performanceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationHubDetailsExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._longTransDuration = undefined;
      this._performanceProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._longTransDuration = value.longTransDuration;
      this._performanceProfile = value.performanceProfile;
    }
  }

  // long_trans_duration - computed: true, optional: true, required: false
  private _longTransDuration?: number; 
  public get longTransDuration() {
    return this.getNumberAttribute('long_trans_duration');
  }
  public set longTransDuration(value: number) {
    this._longTransDuration = value;
  }
  public resetLongTransDuration() {
    this._longTransDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTransDurationInput() {
    return this._longTransDuration;
  }

  // performance_profile - computed: true, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }
}
export interface DatabaseMigrationMigrationHubDetailsReplicat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}
  */
  readonly performanceProfile?: string;
}

export function databaseMigrationMigrationHubDetailsReplicatToTerraform(struct?: DatabaseMigrationMigrationHubDetailsReplicatOutputReference | DatabaseMigrationMigrationHubDetailsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    performance_profile: cdktf.stringToTerraform(struct!.performanceProfile),
  }
}


export function databaseMigrationMigrationHubDetailsReplicatToHclTerraform(struct?: DatabaseMigrationMigrationHubDetailsReplicatOutputReference | DatabaseMigrationMigrationHubDetailsReplicat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    performance_profile: {
      value: cdktf.stringToHclTerraform(struct!.performanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationHubDetailsReplicatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationHubDetailsReplicat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._performanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceProfile = this._performanceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationHubDetailsReplicat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._performanceProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._performanceProfile = value.performanceProfile;
    }
  }

  // performance_profile - computed: true, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }
}
export interface DatabaseMigrationMigrationHubDetailsRestAdminCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}
  */
  readonly username: string;
}

export function databaseMigrationMigrationHubDetailsRestAdminCredentialsToTerraform(struct?: DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference | DatabaseMigrationMigrationHubDetailsRestAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseMigrationMigrationHubDetailsRestAdminCredentialsToHclTerraform(struct?: DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference | DatabaseMigrationMigrationHubDetailsRestAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationHubDetailsRestAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationHubDetailsRestAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseMigrationMigrationHubDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}
  */
  readonly acceptableLag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}
  */
  readonly computeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}
  */
  readonly vaultId: string;
  /**
  * extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}
  */
  readonly extract?: DatabaseMigrationMigrationHubDetailsExtract;
  /**
  * replicat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}
  */
  readonly replicat?: DatabaseMigrationMigrationHubDetailsReplicat;
  /**
  * rest_admin_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#rest_admin_credentials DatabaseMigrationMigration#rest_admin_credentials}
  */
  readonly restAdminCredentials: DatabaseMigrationMigrationHubDetailsRestAdminCredentials;
}

export function databaseMigrationMigrationHubDetailsToTerraform(struct?: DatabaseMigrationMigrationHubDetailsOutputReference | DatabaseMigrationMigrationHubDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acceptable_lag: cdktf.numberToTerraform(struct!.acceptableLag),
    compute_id: cdktf.stringToTerraform(struct!.computeId),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    url: cdktf.stringToTerraform(struct!.url),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
    extract: databaseMigrationMigrationHubDetailsExtractToTerraform(struct!.extract),
    replicat: databaseMigrationMigrationHubDetailsReplicatToTerraform(struct!.replicat),
    rest_admin_credentials: databaseMigrationMigrationHubDetailsRestAdminCredentialsToTerraform(struct!.restAdminCredentials),
  }
}


export function databaseMigrationMigrationHubDetailsToHclTerraform(struct?: DatabaseMigrationMigrationHubDetailsOutputReference | DatabaseMigrationMigrationHubDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acceptable_lag: {
      value: cdktf.numberToHclTerraform(struct!.acceptableLag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compute_id: {
      value: cdktf.stringToHclTerraform(struct!.computeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extract: {
      value: databaseMigrationMigrationHubDetailsExtractToHclTerraform(struct!.extract),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationHubDetailsExtractList",
    },
    replicat: {
      value: databaseMigrationMigrationHubDetailsReplicatToHclTerraform(struct!.replicat),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationHubDetailsReplicatList",
    },
    rest_admin_credentials: {
      value: databaseMigrationMigrationHubDetailsRestAdminCredentialsToHclTerraform(struct!.restAdminCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationHubDetailsRestAdminCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationHubDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationHubDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptableLag !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptableLag = this._acceptableLag;
    }
    if (this._computeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeId = this._computeId;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    if (this._extract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract?.internalValue;
    }
    if (this._replicat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicat = this._replicat?.internalValue;
    }
    if (this._restAdminCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restAdminCredentials = this._restAdminCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationHubDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptableLag = undefined;
      this._computeId = undefined;
      this._keyId = undefined;
      this._url = undefined;
      this._vaultId = undefined;
      this._extract.internalValue = undefined;
      this._replicat.internalValue = undefined;
      this._restAdminCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptableLag = value.acceptableLag;
      this._computeId = value.computeId;
      this._keyId = value.keyId;
      this._url = value.url;
      this._vaultId = value.vaultId;
      this._extract.internalValue = value.extract;
      this._replicat.internalValue = value.replicat;
      this._restAdminCredentials.internalValue = value.restAdminCredentials;
    }
  }

  // acceptable_lag - computed: true, optional: true, required: false
  private _acceptableLag?: number; 
  public get acceptableLag() {
    return this.getNumberAttribute('acceptable_lag');
  }
  public set acceptableLag(value: number) {
    this._acceptableLag = value;
  }
  public resetAcceptableLag() {
    this._acceptableLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptableLagInput() {
    return this._acceptableLag;
  }

  // compute_id - computed: true, optional: true, required: false
  private _computeId?: string; 
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }
  public set computeId(value: string) {
    this._computeId = value;
  }
  public resetComputeId() {
    this._computeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIdInput() {
    return this._computeId;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // extract - computed: false, optional: true, required: false
  private _extract = new DatabaseMigrationMigrationHubDetailsExtractOutputReference(this, "extract");
  public get extract() {
    return this._extract;
  }
  public putExtract(value: DatabaseMigrationMigrationHubDetailsExtract) {
    this._extract.internalValue = value;
  }
  public resetExtract() {
    this._extract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract.internalValue;
  }

  // replicat - computed: false, optional: true, required: false
  private _replicat = new DatabaseMigrationMigrationHubDetailsReplicatOutputReference(this, "replicat");
  public get replicat() {
    return this._replicat;
  }
  public putReplicat(value: DatabaseMigrationMigrationHubDetailsReplicat) {
    this._replicat.internalValue = value;
  }
  public resetReplicat() {
    this._replicat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatInput() {
    return this._replicat.internalValue;
  }

  // rest_admin_credentials - computed: false, optional: false, required: true
  private _restAdminCredentials = new DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference(this, "rest_admin_credentials");
  public get restAdminCredentials() {
    return this._restAdminCredentials;
  }
  public putRestAdminCredentials(value: DatabaseMigrationMigrationHubDetailsRestAdminCredentials) {
    this._restAdminCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restAdminCredentialsInput() {
    return this._restAdminCredentials.internalValue;
  }
}
export interface DatabaseMigrationMigrationIncludeObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}
  */
  readonly isOmitExcludedTableFromReplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}
  */
  readonly type?: string;
}

export function databaseMigrationMigrationIncludeObjectsToTerraform(struct?: DatabaseMigrationMigrationIncludeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_omit_excluded_table_from_replication: cdktf.booleanToTerraform(struct!.isOmitExcludedTableFromReplication),
    object: cdktf.stringToTerraform(struct!.object),
    owner: cdktf.stringToTerraform(struct!.owner),
    schema: cdktf.stringToTerraform(struct!.schema),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function databaseMigrationMigrationIncludeObjectsToHclTerraform(struct?: DatabaseMigrationMigrationIncludeObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_omit_excluded_table_from_replication: {
      value: cdktf.booleanToHclTerraform(struct!.isOmitExcludedTableFromReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationIncludeObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationMigrationIncludeObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isOmitExcludedTableFromReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOmitExcludedTableFromReplication = this._isOmitExcludedTableFromReplication;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationIncludeObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isOmitExcludedTableFromReplication = undefined;
      this._object = undefined;
      this._owner = undefined;
      this._schema = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isOmitExcludedTableFromReplication = value.isOmitExcludedTableFromReplication;
      this._object = value.object;
      this._owner = value.owner;
      this._schema = value.schema;
      this._type = value.type;
    }
  }

  // is_omit_excluded_table_from_replication - computed: true, optional: true, required: false
  private _isOmitExcludedTableFromReplication?: boolean | cdktf.IResolvable; 
  public get isOmitExcludedTableFromReplication() {
    return this.getBooleanAttribute('is_omit_excluded_table_from_replication');
  }
  public set isOmitExcludedTableFromReplication(value: boolean | cdktf.IResolvable) {
    this._isOmitExcludedTableFromReplication = value;
  }
  public resetIsOmitExcludedTableFromReplication() {
    this._isOmitExcludedTableFromReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOmitExcludedTableFromReplicationInput() {
    return this._isOmitExcludedTableFromReplication;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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
}

export class DatabaseMigrationMigrationIncludeObjectsList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationMigrationIncludeObjects[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationMigrationIncludeObjectsOutputReference {
    return new DatabaseMigrationMigrationIncludeObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}
  */
  readonly estimate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}
  */
  readonly excludeParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}
  */
  readonly exportParallelismDegree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}
  */
  readonly importParallelismDegree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}
  */
  readonly isCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}
  */
  readonly tableExistsAction?: string;
}

export function databaseMigrationMigrationInitialLoadSettingsDataPumpParametersToTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference | DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    estimate: cdktf.stringToTerraform(struct!.estimate),
    exclude_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeParameters),
    export_parallelism_degree: cdktf.numberToTerraform(struct!.exportParallelismDegree),
    import_parallelism_degree: cdktf.numberToTerraform(struct!.importParallelismDegree),
    is_cluster: cdktf.booleanToTerraform(struct!.isCluster),
    table_exists_action: cdktf.stringToTerraform(struct!.tableExistsAction),
  }
}


export function databaseMigrationMigrationInitialLoadSettingsDataPumpParametersToHclTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference | DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    estimate: {
      value: cdktf.stringToHclTerraform(struct!.estimate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    export_parallelism_degree: {
      value: cdktf.numberToHclTerraform(struct!.exportParallelismDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    import_parallelism_degree: {
      value: cdktf.numberToHclTerraform(struct!.importParallelismDegree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.isCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    table_exists_action: {
      value: cdktf.stringToHclTerraform(struct!.tableExistsAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._estimate !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimate = this._estimate;
    }
    if (this._excludeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeParameters = this._excludeParameters;
    }
    if (this._exportParallelismDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportParallelismDegree = this._exportParallelismDegree;
    }
    if (this._importParallelismDegree !== undefined) {
      hasAnyValues = true;
      internalValueResult.importParallelismDegree = this._importParallelismDegree;
    }
    if (this._isCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCluster = this._isCluster;
    }
    if (this._tableExistsAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableExistsAction = this._tableExistsAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._estimate = undefined;
      this._excludeParameters = undefined;
      this._exportParallelismDegree = undefined;
      this._importParallelismDegree = undefined;
      this._isCluster = undefined;
      this._tableExistsAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._estimate = value.estimate;
      this._excludeParameters = value.excludeParameters;
      this._exportParallelismDegree = value.exportParallelismDegree;
      this._importParallelismDegree = value.importParallelismDegree;
      this._isCluster = value.isCluster;
      this._tableExistsAction = value.tableExistsAction;
    }
  }

  // estimate - computed: true, optional: true, required: false
  private _estimate?: string; 
  public get estimate() {
    return this.getStringAttribute('estimate');
  }
  public set estimate(value: string) {
    this._estimate = value;
  }
  public resetEstimate() {
    this._estimate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimateInput() {
    return this._estimate;
  }

  // exclude_parameters - computed: true, optional: true, required: false
  private _excludeParameters?: string[]; 
  public get excludeParameters() {
    return this.getListAttribute('exclude_parameters');
  }
  public set excludeParameters(value: string[]) {
    this._excludeParameters = value;
  }
  public resetExcludeParameters() {
    this._excludeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeParametersInput() {
    return this._excludeParameters;
  }

  // export_parallelism_degree - computed: true, optional: true, required: false
  private _exportParallelismDegree?: number; 
  public get exportParallelismDegree() {
    return this.getNumberAttribute('export_parallelism_degree');
  }
  public set exportParallelismDegree(value: number) {
    this._exportParallelismDegree = value;
  }
  public resetExportParallelismDegree() {
    this._exportParallelismDegree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportParallelismDegreeInput() {
    return this._exportParallelismDegree;
  }

  // import_parallelism_degree - computed: true, optional: true, required: false
  private _importParallelismDegree?: number; 
  public get importParallelismDegree() {
    return this.getNumberAttribute('import_parallelism_degree');
  }
  public set importParallelismDegree(value: number) {
    this._importParallelismDegree = value;
  }
  public resetImportParallelismDegree() {
    this._importParallelismDegree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importParallelismDegreeInput() {
    return this._importParallelismDegree;
  }

  // is_cluster - computed: true, optional: true, required: false
  private _isCluster?: boolean | cdktf.IResolvable; 
  public get isCluster() {
    return this.getBooleanAttribute('is_cluster');
  }
  public set isCluster(value: boolean | cdktf.IResolvable) {
    this._isCluster = value;
  }
  public resetIsCluster() {
    this._isCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isClusterInput() {
    return this._isCluster;
  }

  // table_exists_action - computed: true, optional: true, required: false
  private _tableExistsAction?: string; 
  public get tableExistsAction() {
    return this.getStringAttribute('table_exists_action');
  }
  public set tableExistsAction(value: string) {
    this._tableExistsAction = value;
  }
  public resetTableExistsAction() {
    this._tableExistsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableExistsActionInput() {
    return this._tableExistsAction;
  }
}
export interface DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}
  */
  readonly path?: string;
}

export function databaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectToTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference | DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function databaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectToHclTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference | DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._path = value.path;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}
  */
  readonly path?: string;
}

export function databaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectToTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference | DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function databaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectToHclTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference | DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._path = value.path;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}
  */
  readonly newValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}
  */
  readonly oldValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}
  */
  readonly type?: string;
}

export function databaseMigrationMigrationInitialLoadSettingsMetadataRemapsToTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_value: cdktf.stringToTerraform(struct!.newValue),
    old_value: cdktf.stringToTerraform(struct!.oldValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function databaseMigrationMigrationInitialLoadSettingsMetadataRemapsToHclTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_value: {
      value: cdktf.stringToHclTerraform(struct!.newValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_value: {
      value: cdktf.stringToHclTerraform(struct!.oldValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newValue = this._newValue;
    }
    if (this._oldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldValue = this._oldValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newValue = undefined;
      this._oldValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newValue = value.newValue;
      this._oldValue = value.oldValue;
      this._type = value.type;
    }
  }

  // new_value - computed: true, optional: true, required: false
  private _newValue?: string; 
  public get newValue() {
    return this.getStringAttribute('new_value');
  }
  public set newValue(value: string) {
    this._newValue = value;
  }
  public resetNewValue() {
    this._newValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newValueInput() {
    return this._newValue;
  }

  // old_value - computed: true, optional: true, required: false
  private _oldValue?: string; 
  public get oldValue() {
    return this.getStringAttribute('old_value');
  }
  public set oldValue(value: string) {
    this._oldValue = value;
  }
  public resetOldValue() {
    this._oldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldValueInput() {
    return this._oldValue;
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
}

export class DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference {
    return new DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}
  */
  readonly blockSizeInKbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}
  */
  readonly extendSizeInMbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}
  */
  readonly isAutoCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}
  */
  readonly isBigFile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}
  */
  readonly remapTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}
  */
  readonly targetType: string;
}

export function databaseMigrationMigrationInitialLoadSettingsTablespaceDetailsToTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference | DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size_in_kbs: cdktf.stringToTerraform(struct!.blockSizeInKbs),
    extend_size_in_mbs: cdktf.numberToTerraform(struct!.extendSizeInMbs),
    is_auto_create: cdktf.booleanToTerraform(struct!.isAutoCreate),
    is_big_file: cdktf.booleanToTerraform(struct!.isBigFile),
    remap_target: cdktf.stringToTerraform(struct!.remapTarget),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function databaseMigrationMigrationInitialLoadSettingsTablespaceDetailsToHclTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference | DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_size_in_kbs: {
      value: cdktf.stringToHclTerraform(struct!.blockSizeInKbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extend_size_in_mbs: {
      value: cdktf.numberToHclTerraform(struct!.extendSizeInMbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_auto_create: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_big_file: {
      value: cdktf.booleanToHclTerraform(struct!.isBigFile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remap_target: {
      value: cdktf.stringToHclTerraform(struct!.remapTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSizeInKbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSizeInKbs = this._blockSizeInKbs;
    }
    if (this._extendSizeInMbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendSizeInMbs = this._extendSizeInMbs;
    }
    if (this._isAutoCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoCreate = this._isAutoCreate;
    }
    if (this._isBigFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBigFile = this._isBigFile;
    }
    if (this._remapTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.remapTarget = this._remapTarget;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockSizeInKbs = undefined;
      this._extendSizeInMbs = undefined;
      this._isAutoCreate = undefined;
      this._isBigFile = undefined;
      this._remapTarget = undefined;
      this._targetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockSizeInKbs = value.blockSizeInKbs;
      this._extendSizeInMbs = value.extendSizeInMbs;
      this._isAutoCreate = value.isAutoCreate;
      this._isBigFile = value.isBigFile;
      this._remapTarget = value.remapTarget;
      this._targetType = value.targetType;
    }
  }

  // block_size_in_kbs - computed: true, optional: true, required: false
  private _blockSizeInKbs?: string; 
  public get blockSizeInKbs() {
    return this.getStringAttribute('block_size_in_kbs');
  }
  public set blockSizeInKbs(value: string) {
    this._blockSizeInKbs = value;
  }
  public resetBlockSizeInKbs() {
    this._blockSizeInKbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInKbsInput() {
    return this._blockSizeInKbs;
  }

  // extend_size_in_mbs - computed: true, optional: true, required: false
  private _extendSizeInMbs?: number; 
  public get extendSizeInMbs() {
    return this.getNumberAttribute('extend_size_in_mbs');
  }
  public set extendSizeInMbs(value: number) {
    this._extendSizeInMbs = value;
  }
  public resetExtendSizeInMbs() {
    this._extendSizeInMbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendSizeInMbsInput() {
    return this._extendSizeInMbs;
  }

  // is_auto_create - computed: true, optional: true, required: false
  private _isAutoCreate?: boolean | cdktf.IResolvable; 
  public get isAutoCreate() {
    return this.getBooleanAttribute('is_auto_create');
  }
  public set isAutoCreate(value: boolean | cdktf.IResolvable) {
    this._isAutoCreate = value;
  }
  public resetIsAutoCreate() {
    this._isAutoCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoCreateInput() {
    return this._isAutoCreate;
  }

  // is_big_file - computed: true, optional: true, required: false
  private _isBigFile?: boolean | cdktf.IResolvable; 
  public get isBigFile() {
    return this.getBooleanAttribute('is_big_file');
  }
  public set isBigFile(value: boolean | cdktf.IResolvable) {
    this._isBigFile = value;
  }
  public resetIsBigFile() {
    this._isBigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBigFileInput() {
    return this._isBigFile;
  }

  // remap_target - computed: true, optional: true, required: false
  private _remapTarget?: string; 
  public get remapTarget() {
    return this.getStringAttribute('remap_target');
  }
  public set remapTarget(value: string) {
    this._remapTarget = value;
  }
  public resetRemapTarget() {
    this._remapTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remapTargetInput() {
    return this._remapTarget;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface DatabaseMigrationMigrationInitialLoadSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}
  */
  readonly compatibility?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}
  */
  readonly handleGrantErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}
  */
  readonly isConsistent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}
  */
  readonly isIgnoreExistingObjects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}
  */
  readonly isTzUtc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}
  */
  readonly jobMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}
  */
  readonly primaryKeyCompatibility?: string;
  /**
  * data_pump_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#data_pump_parameters DatabaseMigrationMigration#data_pump_parameters}
  */
  readonly dataPumpParameters?: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters;
  /**
  * export_directory_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#export_directory_object DatabaseMigrationMigration#export_directory_object}
  */
  readonly exportDirectoryObject?: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject;
  /**
  * import_directory_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#import_directory_object DatabaseMigrationMigration#import_directory_object}
  */
  readonly importDirectoryObject?: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject;
  /**
  * metadata_remaps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#metadata_remaps DatabaseMigrationMigration#metadata_remaps}
  */
  readonly metadataRemaps?: DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps[] | cdktf.IResolvable;
  /**
  * tablespace_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#tablespace_details DatabaseMigrationMigration#tablespace_details}
  */
  readonly tablespaceDetails?: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails;
}

export function databaseMigrationMigrationInitialLoadSettingsToTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsOutputReference | DatabaseMigrationMigrationInitialLoadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compatibility: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compatibility),
    handle_grant_errors: cdktf.stringToTerraform(struct!.handleGrantErrors),
    is_consistent: cdktf.booleanToTerraform(struct!.isConsistent),
    is_ignore_existing_objects: cdktf.booleanToTerraform(struct!.isIgnoreExistingObjects),
    is_tz_utc: cdktf.booleanToTerraform(struct!.isTzUtc),
    job_mode: cdktf.stringToTerraform(struct!.jobMode),
    primary_key_compatibility: cdktf.stringToTerraform(struct!.primaryKeyCompatibility),
    data_pump_parameters: databaseMigrationMigrationInitialLoadSettingsDataPumpParametersToTerraform(struct!.dataPumpParameters),
    export_directory_object: databaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectToTerraform(struct!.exportDirectoryObject),
    import_directory_object: databaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectToTerraform(struct!.importDirectoryObject),
    metadata_remaps: cdktf.listMapper(databaseMigrationMigrationInitialLoadSettingsMetadataRemapsToTerraform, true)(struct!.metadataRemaps),
    tablespace_details: databaseMigrationMigrationInitialLoadSettingsTablespaceDetailsToTerraform(struct!.tablespaceDetails),
  }
}


export function databaseMigrationMigrationInitialLoadSettingsToHclTerraform(struct?: DatabaseMigrationMigrationInitialLoadSettingsOutputReference | DatabaseMigrationMigrationInitialLoadSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compatibility: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compatibility),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    handle_grant_errors: {
      value: cdktf.stringToHclTerraform(struct!.handleGrantErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_consistent: {
      value: cdktf.booleanToHclTerraform(struct!.isConsistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_ignore_existing_objects: {
      value: cdktf.booleanToHclTerraform(struct!.isIgnoreExistingObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_tz_utc: {
      value: cdktf.booleanToHclTerraform(struct!.isTzUtc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_mode: {
      value: cdktf.stringToHclTerraform(struct!.jobMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key_compatibility: {
      value: cdktf.stringToHclTerraform(struct!.primaryKeyCompatibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_pump_parameters: {
      value: databaseMigrationMigrationInitialLoadSettingsDataPumpParametersToHclTerraform(struct!.dataPumpParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersList",
    },
    export_directory_object: {
      value: databaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectToHclTerraform(struct!.exportDirectoryObject),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectList",
    },
    import_directory_object: {
      value: databaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectToHclTerraform(struct!.importDirectoryObject),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectList",
    },
    metadata_remaps: {
      value: cdktf.listMapperHcl(databaseMigrationMigrationInitialLoadSettingsMetadataRemapsToHclTerraform, true)(struct!.metadataRemaps),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList",
    },
    tablespace_details: {
      value: databaseMigrationMigrationInitialLoadSettingsTablespaceDetailsToHclTerraform(struct!.tablespaceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseMigrationMigrationInitialLoadSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationMigrationInitialLoadSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compatibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibility = this._compatibility;
    }
    if (this._handleGrantErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.handleGrantErrors = this._handleGrantErrors;
    }
    if (this._isConsistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConsistent = this._isConsistent;
    }
    if (this._isIgnoreExistingObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIgnoreExistingObjects = this._isIgnoreExistingObjects;
    }
    if (this._isTzUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTzUtc = this._isTzUtc;
    }
    if (this._jobMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobMode = this._jobMode;
    }
    if (this._primaryKeyCompatibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeyCompatibility = this._primaryKeyCompatibility;
    }
    if (this._dataPumpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPumpParameters = this._dataPumpParameters?.internalValue;
    }
    if (this._exportDirectoryObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportDirectoryObject = this._exportDirectoryObject?.internalValue;
    }
    if (this._importDirectoryObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importDirectoryObject = this._importDirectoryObject?.internalValue;
    }
    if (this._metadataRemaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataRemaps = this._metadataRemaps?.internalValue;
    }
    if (this._tablespaceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablespaceDetails = this._tablespaceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationMigrationInitialLoadSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compatibility = undefined;
      this._handleGrantErrors = undefined;
      this._isConsistent = undefined;
      this._isIgnoreExistingObjects = undefined;
      this._isTzUtc = undefined;
      this._jobMode = undefined;
      this._primaryKeyCompatibility = undefined;
      this._dataPumpParameters.internalValue = undefined;
      this._exportDirectoryObject.internalValue = undefined;
      this._importDirectoryObject.internalValue = undefined;
      this._metadataRemaps.internalValue = undefined;
      this._tablespaceDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compatibility = value.compatibility;
      this._handleGrantErrors = value.handleGrantErrors;
      this._isConsistent = value.isConsistent;
      this._isIgnoreExistingObjects = value.isIgnoreExistingObjects;
      this._isTzUtc = value.isTzUtc;
      this._jobMode = value.jobMode;
      this._primaryKeyCompatibility = value.primaryKeyCompatibility;
      this._dataPumpParameters.internalValue = value.dataPumpParameters;
      this._exportDirectoryObject.internalValue = value.exportDirectoryObject;
      this._importDirectoryObject.internalValue = value.importDirectoryObject;
      this._metadataRemaps.internalValue = value.metadataRemaps;
      this._tablespaceDetails.internalValue = value.tablespaceDetails;
    }
  }

  // compatibility - computed: true, optional: true, required: false
  private _compatibility?: string[]; 
  public get compatibility() {
    return this.getListAttribute('compatibility');
  }
  public set compatibility(value: string[]) {
    this._compatibility = value;
  }
  public resetCompatibility() {
    this._compatibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityInput() {
    return this._compatibility;
  }

  // handle_grant_errors - computed: true, optional: true, required: false
  private _handleGrantErrors?: string; 
  public get handleGrantErrors() {
    return this.getStringAttribute('handle_grant_errors');
  }
  public set handleGrantErrors(value: string) {
    this._handleGrantErrors = value;
  }
  public resetHandleGrantErrors() {
    this._handleGrantErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handleGrantErrorsInput() {
    return this._handleGrantErrors;
  }

  // is_consistent - computed: true, optional: true, required: false
  private _isConsistent?: boolean | cdktf.IResolvable; 
  public get isConsistent() {
    return this.getBooleanAttribute('is_consistent');
  }
  public set isConsistent(value: boolean | cdktf.IResolvable) {
    this._isConsistent = value;
  }
  public resetIsConsistent() {
    this._isConsistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConsistentInput() {
    return this._isConsistent;
  }

  // is_ignore_existing_objects - computed: true, optional: true, required: false
  private _isIgnoreExistingObjects?: boolean | cdktf.IResolvable; 
  public get isIgnoreExistingObjects() {
    return this.getBooleanAttribute('is_ignore_existing_objects');
  }
  public set isIgnoreExistingObjects(value: boolean | cdktf.IResolvable) {
    this._isIgnoreExistingObjects = value;
  }
  public resetIsIgnoreExistingObjects() {
    this._isIgnoreExistingObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIgnoreExistingObjectsInput() {
    return this._isIgnoreExistingObjects;
  }

  // is_tz_utc - computed: true, optional: true, required: false
  private _isTzUtc?: boolean | cdktf.IResolvable; 
  public get isTzUtc() {
    return this.getBooleanAttribute('is_tz_utc');
  }
  public set isTzUtc(value: boolean | cdktf.IResolvable) {
    this._isTzUtc = value;
  }
  public resetIsTzUtc() {
    this._isTzUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTzUtcInput() {
    return this._isTzUtc;
  }

  // job_mode - computed: false, optional: false, required: true
  private _jobMode?: string; 
  public get jobMode() {
    return this.getStringAttribute('job_mode');
  }
  public set jobMode(value: string) {
    this._jobMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobModeInput() {
    return this._jobMode;
  }

  // primary_key_compatibility - computed: true, optional: true, required: false
  private _primaryKeyCompatibility?: string; 
  public get primaryKeyCompatibility() {
    return this.getStringAttribute('primary_key_compatibility');
  }
  public set primaryKeyCompatibility(value: string) {
    this._primaryKeyCompatibility = value;
  }
  public resetPrimaryKeyCompatibility() {
    this._primaryKeyCompatibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyCompatibilityInput() {
    return this._primaryKeyCompatibility;
  }

  // data_pump_parameters - computed: false, optional: true, required: false
  private _dataPumpParameters = new DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference(this, "data_pump_parameters");
  public get dataPumpParameters() {
    return this._dataPumpParameters;
  }
  public putDataPumpParameters(value: DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters) {
    this._dataPumpParameters.internalValue = value;
  }
  public resetDataPumpParameters() {
    this._dataPumpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPumpParametersInput() {
    return this._dataPumpParameters.internalValue;
  }

  // export_directory_object - computed: false, optional: true, required: false
  private _exportDirectoryObject = new DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference(this, "export_directory_object");
  public get exportDirectoryObject() {
    return this._exportDirectoryObject;
  }
  public putExportDirectoryObject(value: DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject) {
    this._exportDirectoryObject.internalValue = value;
  }
  public resetExportDirectoryObject() {
    this._exportDirectoryObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDirectoryObjectInput() {
    return this._exportDirectoryObject.internalValue;
  }

  // import_directory_object - computed: false, optional: true, required: false
  private _importDirectoryObject = new DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference(this, "import_directory_object");
  public get importDirectoryObject() {
    return this._importDirectoryObject;
  }
  public putImportDirectoryObject(value: DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject) {
    this._importDirectoryObject.internalValue = value;
  }
  public resetImportDirectoryObject() {
    this._importDirectoryObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importDirectoryObjectInput() {
    return this._importDirectoryObject.internalValue;
  }

  // metadata_remaps - computed: false, optional: true, required: false
  private _metadataRemaps = new DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList(this, "metadata_remaps", false);
  public get metadataRemaps() {
    return this._metadataRemaps;
  }
  public putMetadataRemaps(value: DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps[] | cdktf.IResolvable) {
    this._metadataRemaps.internalValue = value;
  }
  public resetMetadataRemaps() {
    this._metadataRemaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataRemapsInput() {
    return this._metadataRemaps.internalValue;
  }

  // tablespace_details - computed: false, optional: true, required: false
  private _tablespaceDetails = new DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference(this, "tablespace_details");
  public get tablespaceDetails() {
    return this._tablespaceDetails;
  }
  public putTablespaceDetails(value: DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails) {
    this._tablespaceDetails.internalValue = value;
  }
  public resetTablespaceDetails() {
    this._tablespaceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablespaceDetailsInput() {
    return this._tablespaceDetails.internalValue;
  }
}
export interface DatabaseMigrationMigrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}
  */
  readonly update?: string;
}

export function databaseMigrationMigrationTimeoutsToTerraform(struct?: DatabaseMigrationMigrationTimeouts | cdktf.IResolvable): any {
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


export function databaseMigrationMigrationTimeoutsToHclTerraform(struct?: DatabaseMigrationMigrationTimeouts | cdktf.IResolvable): any {
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

export class DatabaseMigrationMigrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMigrationMigrationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMigrationMigrationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration oci_database_migration_migration}
*/
export class DatabaseMigrationMigration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_migration_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseMigrationMigration to import
  * @param importFromId The id of the existing DatabaseMigrationMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseMigrationMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_migration_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_migration_migration oci_database_migration_migration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMigrationMigrationConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseMigrationMigrationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_migration_migration',
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
    this._bulkIncludeExcludeData = config.bulkIncludeExcludeData;
    this._compartmentId = config.compartmentId;
    this._databaseCombination = config.databaseCombination;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._sourceContainerDatabaseConnectionId = config.sourceContainerDatabaseConnectionId;
    this._sourceDatabaseConnectionId = config.sourceDatabaseConnectionId;
    this._sourceStandbyDatabaseConnectionId = config.sourceStandbyDatabaseConnectionId;
    this._targetDatabaseConnectionId = config.targetDatabaseConnectionId;
    this._type = config.type;
    this._advancedParameters.internalValue = config.advancedParameters;
    this._advisorSettings.internalValue = config.advisorSettings;
    this._dataTransferMediumDetails.internalValue = config.dataTransferMediumDetails;
    this._excludeObjects.internalValue = config.excludeObjects;
    this._ggsDetails.internalValue = config.ggsDetails;
    this._hubDetails.internalValue = config.hubDetails;
    this._includeObjects.internalValue = config.includeObjects;
    this._initialLoadSettings.internalValue = config.initialLoadSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bulk_include_exclude_data - computed: true, optional: true, required: false
  private _bulkIncludeExcludeData?: string; 
  public get bulkIncludeExcludeData() {
    return this.getStringAttribute('bulk_include_exclude_data');
  }
  public set bulkIncludeExcludeData(value: string) {
    this._bulkIncludeExcludeData = value;
  }
  public resetBulkIncludeExcludeData() {
    this._bulkIncludeExcludeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkIncludeExcludeDataInput() {
    return this._bulkIncludeExcludeData;
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

  // database_combination - computed: false, optional: false, required: true
  private _databaseCombination?: string; 
  public get databaseCombination() {
    return this.getStringAttribute('database_combination');
  }
  public set databaseCombination(value: string) {
    this._databaseCombination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCombinationInput() {
    return this._databaseCombination;
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

  // executing_job_id - computed: true, optional: false, required: false
  public get executingJobId() {
    return this.getStringAttribute('executing_job_id');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // source_container_database_connection_id - computed: true, optional: true, required: false
  private _sourceContainerDatabaseConnectionId?: string; 
  public get sourceContainerDatabaseConnectionId() {
    return this.getStringAttribute('source_container_database_connection_id');
  }
  public set sourceContainerDatabaseConnectionId(value: string) {
    this._sourceContainerDatabaseConnectionId = value;
  }
  public resetSourceContainerDatabaseConnectionId() {
    this._sourceContainerDatabaseConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContainerDatabaseConnectionIdInput() {
    return this._sourceContainerDatabaseConnectionId;
  }

  // source_database_connection_id - computed: false, optional: false, required: true
  private _sourceDatabaseConnectionId?: string; 
  public get sourceDatabaseConnectionId() {
    return this.getStringAttribute('source_database_connection_id');
  }
  public set sourceDatabaseConnectionId(value: string) {
    this._sourceDatabaseConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatabaseConnectionIdInput() {
    return this._sourceDatabaseConnectionId;
  }

  // source_standby_database_connection_id - computed: false, optional: true, required: false
  private _sourceStandbyDatabaseConnectionId?: string; 
  public get sourceStandbyDatabaseConnectionId() {
    return this.getStringAttribute('source_standby_database_connection_id');
  }
  public set sourceStandbyDatabaseConnectionId(value: string) {
    this._sourceStandbyDatabaseConnectionId = value;
  }
  public resetSourceStandbyDatabaseConnectionId() {
    this._sourceStandbyDatabaseConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStandbyDatabaseConnectionIdInput() {
    return this._sourceStandbyDatabaseConnectionId;
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

  // target_database_connection_id - computed: false, optional: false, required: true
  private _targetDatabaseConnectionId?: string; 
  public get targetDatabaseConnectionId() {
    return this.getStringAttribute('target_database_connection_id');
  }
  public set targetDatabaseConnectionId(value: string) {
    this._targetDatabaseConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseConnectionIdInput() {
    return this._targetDatabaseConnectionId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_migration - computed: true, optional: false, required: false
  public get timeLastMigration() {
    return this.getStringAttribute('time_last_migration');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wait_after - computed: true, optional: false, required: false
  public get waitAfter() {
    return this.getStringAttribute('wait_after');
  }

  // advanced_parameters - computed: false, optional: true, required: false
  private _advancedParameters = new DatabaseMigrationMigrationAdvancedParametersList(this, "advanced_parameters", false);
  public get advancedParameters() {
    return this._advancedParameters;
  }
  public putAdvancedParameters(value: DatabaseMigrationMigrationAdvancedParameters[] | cdktf.IResolvable) {
    this._advancedParameters.internalValue = value;
  }
  public resetAdvancedParameters() {
    this._advancedParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedParametersInput() {
    return this._advancedParameters.internalValue;
  }

  // advisor_settings - computed: false, optional: true, required: false
  private _advisorSettings = new DatabaseMigrationMigrationAdvisorSettingsOutputReference(this, "advisor_settings");
  public get advisorSettings() {
    return this._advisorSettings;
  }
  public putAdvisorSettings(value: DatabaseMigrationMigrationAdvisorSettings) {
    this._advisorSettings.internalValue = value;
  }
  public resetAdvisorSettings() {
    this._advisorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advisorSettingsInput() {
    return this._advisorSettings.internalValue;
  }

  // data_transfer_medium_details - computed: false, optional: true, required: false
  private _dataTransferMediumDetails = new DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference(this, "data_transfer_medium_details");
  public get dataTransferMediumDetails() {
    return this._dataTransferMediumDetails;
  }
  public putDataTransferMediumDetails(value: DatabaseMigrationMigrationDataTransferMediumDetails) {
    this._dataTransferMediumDetails.internalValue = value;
  }
  public resetDataTransferMediumDetails() {
    this._dataTransferMediumDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferMediumDetailsInput() {
    return this._dataTransferMediumDetails.internalValue;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatabaseMigrationMigrationExcludeObjectsList(this, "exclude_objects", true);
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatabaseMigrationMigrationExcludeObjects[] | cdktf.IResolvable) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // ggs_details - computed: false, optional: true, required: false
  private _ggsDetails = new DatabaseMigrationMigrationGgsDetailsOutputReference(this, "ggs_details");
  public get ggsDetails() {
    return this._ggsDetails;
  }
  public putGgsDetails(value: DatabaseMigrationMigrationGgsDetails) {
    this._ggsDetails.internalValue = value;
  }
  public resetGgsDetails() {
    this._ggsDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ggsDetailsInput() {
    return this._ggsDetails.internalValue;
  }

  // hub_details - computed: false, optional: true, required: false
  private _hubDetails = new DatabaseMigrationMigrationHubDetailsOutputReference(this, "hub_details");
  public get hubDetails() {
    return this._hubDetails;
  }
  public putHubDetails(value: DatabaseMigrationMigrationHubDetails) {
    this._hubDetails.internalValue = value;
  }
  public resetHubDetails() {
    this._hubDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubDetailsInput() {
    return this._hubDetails.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new DatabaseMigrationMigrationIncludeObjectsList(this, "include_objects", false);
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatabaseMigrationMigrationIncludeObjects[] | cdktf.IResolvable) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }

  // initial_load_settings - computed: false, optional: true, required: false
  private _initialLoadSettings = new DatabaseMigrationMigrationInitialLoadSettingsOutputReference(this, "initial_load_settings");
  public get initialLoadSettings() {
    return this._initialLoadSettings;
  }
  public putInitialLoadSettings(value: DatabaseMigrationMigrationInitialLoadSettings) {
    this._initialLoadSettings.internalValue = value;
  }
  public resetInitialLoadSettings() {
    this._initialLoadSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLoadSettingsInput() {
    return this._initialLoadSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseMigrationMigrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseMigrationMigrationTimeouts) {
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
      bulk_include_exclude_data: cdktf.stringToTerraform(this._bulkIncludeExcludeData),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      database_combination: cdktf.stringToTerraform(this._databaseCombination),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      source_container_database_connection_id: cdktf.stringToTerraform(this._sourceContainerDatabaseConnectionId),
      source_database_connection_id: cdktf.stringToTerraform(this._sourceDatabaseConnectionId),
      source_standby_database_connection_id: cdktf.stringToTerraform(this._sourceStandbyDatabaseConnectionId),
      target_database_connection_id: cdktf.stringToTerraform(this._targetDatabaseConnectionId),
      type: cdktf.stringToTerraform(this._type),
      advanced_parameters: cdktf.listMapper(databaseMigrationMigrationAdvancedParametersToTerraform, true)(this._advancedParameters.internalValue),
      advisor_settings: databaseMigrationMigrationAdvisorSettingsToTerraform(this._advisorSettings.internalValue),
      data_transfer_medium_details: databaseMigrationMigrationDataTransferMediumDetailsToTerraform(this._dataTransferMediumDetails.internalValue),
      exclude_objects: cdktf.listMapper(databaseMigrationMigrationExcludeObjectsToTerraform, true)(this._excludeObjects.internalValue),
      ggs_details: databaseMigrationMigrationGgsDetailsToTerraform(this._ggsDetails.internalValue),
      hub_details: databaseMigrationMigrationHubDetailsToTerraform(this._hubDetails.internalValue),
      include_objects: cdktf.listMapper(databaseMigrationMigrationIncludeObjectsToTerraform, true)(this._includeObjects.internalValue),
      initial_load_settings: databaseMigrationMigrationInitialLoadSettingsToTerraform(this._initialLoadSettings.internalValue),
      timeouts: databaseMigrationMigrationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bulk_include_exclude_data: {
        value: cdktf.stringToHclTerraform(this._bulkIncludeExcludeData),
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
      database_combination: {
        value: cdktf.stringToHclTerraform(this._databaseCombination),
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
      source_container_database_connection_id: {
        value: cdktf.stringToHclTerraform(this._sourceContainerDatabaseConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_database_connection_id: {
        value: cdktf.stringToHclTerraform(this._sourceDatabaseConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_standby_database_connection_id: {
        value: cdktf.stringToHclTerraform(this._sourceStandbyDatabaseConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_database_connection_id: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseConnectionId),
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
      advanced_parameters: {
        value: cdktf.listMapperHcl(databaseMigrationMigrationAdvancedParametersToHclTerraform, true)(this._advancedParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationAdvancedParametersList",
      },
      advisor_settings: {
        value: databaseMigrationMigrationAdvisorSettingsToHclTerraform(this._advisorSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationAdvisorSettingsList",
      },
      data_transfer_medium_details: {
        value: databaseMigrationMigrationDataTransferMediumDetailsToHclTerraform(this._dataTransferMediumDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationDataTransferMediumDetailsList",
      },
      exclude_objects: {
        value: cdktf.listMapperHcl(databaseMigrationMigrationExcludeObjectsToHclTerraform, true)(this._excludeObjects.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatabaseMigrationMigrationExcludeObjectsList",
      },
      ggs_details: {
        value: databaseMigrationMigrationGgsDetailsToHclTerraform(this._ggsDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationGgsDetailsList",
      },
      hub_details: {
        value: databaseMigrationMigrationHubDetailsToHclTerraform(this._hubDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationHubDetailsList",
      },
      include_objects: {
        value: cdktf.listMapperHcl(databaseMigrationMigrationIncludeObjectsToHclTerraform, true)(this._includeObjects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationIncludeObjectsList",
      },
      initial_load_settings: {
        value: databaseMigrationMigrationInitialLoadSettingsToHclTerraform(this._initialLoadSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseMigrationMigrationInitialLoadSettingsList",
      },
      timeouts: {
        value: databaseMigrationMigrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseMigrationMigrationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
