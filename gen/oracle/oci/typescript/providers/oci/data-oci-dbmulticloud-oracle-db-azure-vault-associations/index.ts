// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudOracleDbAzureVaultAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#compartment_id DataOciDbmulticloudOracleDbAzureVaultAssociations#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#display_name DataOciDbmulticloudOracleDbAzureVaultAssociations#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#id DataOciDbmulticloudOracleDbAzureVaultAssociations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#oracle_db_azure_connector_id DataOciDbmulticloudOracleDbAzureVaultAssociations#oracle_db_azure_connector_id}
  */
  readonly oracleDbAzureConnectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#oracle_db_azure_vault_association_id DataOciDbmulticloudOracleDbAzureVaultAssociations#oracle_db_azure_vault_association_id}
  */
  readonly oracleDbAzureVaultAssociationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#oracle_db_azure_vault_id DataOciDbmulticloudOracleDbAzureVaultAssociations#oracle_db_azure_vault_id}
  */
  readonly oracleDbAzureVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#state DataOciDbmulticloudOracleDbAzureVaultAssociations#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#filter DataOciDbmulticloudOracleDbAzureVaultAssociations#filter}
  */
  readonly filter?: DataOciDbmulticloudOracleDbAzureVaultAssociationsFilter[] | cdktf.IResolvable;
}
export interface DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItems {
}

export function dataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItemsToTerraform(struct?: DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItemsToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // is_resource_accessible - computed: true, optional: false, required: false
  public get isResourceAccessible() {
    return this.getBooleanAttribute('is_resource_accessible');
  }

  // last_modification - computed: true, optional: false, required: false
  public get lastModification() {
    return this.getStringAttribute('last_modification');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // oracle_db_azure_connector_id - computed: true, optional: false, required: false
  public get oracleDbAzureConnectorId() {
    return this.getStringAttribute('oracle_db_azure_connector_id');
  }

  // oracle_db_azure_vault_id - computed: true, optional: false, required: false
  public get oracleDbAzureVaultId() {
    return this.getStringAttribute('oracle_db_azure_vault_id');
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
}

export class DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItemsOutputReference {
    return new DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollection {
}

export function dataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionToTerraform(struct?: DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionOutputReference {
    return new DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDbmulticloudOracleDbAzureVaultAssociationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#name DataOciDbmulticloudOracleDbAzureVaultAssociations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#regex DataOciDbmulticloudOracleDbAzureVaultAssociations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#values DataOciDbmulticloudOracleDbAzureVaultAssociations#values}
  */
  readonly values: string[];
}

export function dataOciDbmulticloudOracleDbAzureVaultAssociationsFilterToTerraform(struct?: DataOciDbmulticloudOracleDbAzureVaultAssociationsFilter | cdktf.IResolvable): any {
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


export function dataOciDbmulticloudOracleDbAzureVaultAssociationsFilterToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureVaultAssociationsFilter | cdktf.IResolvable): any {
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

export class DataOciDbmulticloudOracleDbAzureVaultAssociationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureVaultAssociationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureVaultAssociationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDbmulticloudOracleDbAzureVaultAssociationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDbmulticloudOracleDbAzureVaultAssociationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureVaultAssociationsFilterOutputReference {
    return new DataOciDbmulticloudOracleDbAzureVaultAssociationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations oci_dbmulticloud_oracle_db_azure_vault_associations}
*/
export class DataOciDbmulticloudOracleDbAzureVaultAssociations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_azure_vault_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudOracleDbAzureVaultAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudOracleDbAzureVaultAssociations to import
  * @param importFromId The id of the existing DataOciDbmulticloudOracleDbAzureVaultAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudOracleDbAzureVaultAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_azure_vault_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dbmulticloud_oracle_db_azure_vault_associations oci_dbmulticloud_oracle_db_azure_vault_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudOracleDbAzureVaultAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudOracleDbAzureVaultAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_azure_vault_associations',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._oracleDbAzureConnectorId = config.oracleDbAzureConnectorId;
    this._oracleDbAzureVaultAssociationId = config.oracleDbAzureVaultAssociationId;
    this._oracleDbAzureVaultId = config.oracleDbAzureVaultId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
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

  // display_name - computed: false, optional: true, required: false
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

  // oracle_db_azure_connector_id - computed: false, optional: true, required: false
  private _oracleDbAzureConnectorId?: string; 
  public get oracleDbAzureConnectorId() {
    return this.getStringAttribute('oracle_db_azure_connector_id');
  }
  public set oracleDbAzureConnectorId(value: string) {
    this._oracleDbAzureConnectorId = value;
  }
  public resetOracleDbAzureConnectorId() {
    this._oracleDbAzureConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbAzureConnectorIdInput() {
    return this._oracleDbAzureConnectorId;
  }

  // oracle_db_azure_vault_association_id - computed: false, optional: true, required: false
  private _oracleDbAzureVaultAssociationId?: string; 
  public get oracleDbAzureVaultAssociationId() {
    return this.getStringAttribute('oracle_db_azure_vault_association_id');
  }
  public set oracleDbAzureVaultAssociationId(value: string) {
    this._oracleDbAzureVaultAssociationId = value;
  }
  public resetOracleDbAzureVaultAssociationId() {
    this._oracleDbAzureVaultAssociationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbAzureVaultAssociationIdInput() {
    return this._oracleDbAzureVaultAssociationId;
  }

  // oracle_db_azure_vault_association_summary_collection - computed: true, optional: false, required: false
  private _oracleDbAzureVaultAssociationSummaryCollection = new DataOciDbmulticloudOracleDbAzureVaultAssociationsOracleDbAzureVaultAssociationSummaryCollectionList(this, "oracle_db_azure_vault_association_summary_collection", false);
  public get oracleDbAzureVaultAssociationSummaryCollection() {
    return this._oracleDbAzureVaultAssociationSummaryCollection;
  }

  // oracle_db_azure_vault_id - computed: false, optional: true, required: false
  private _oracleDbAzureVaultId?: string; 
  public get oracleDbAzureVaultId() {
    return this.getStringAttribute('oracle_db_azure_vault_id');
  }
  public set oracleDbAzureVaultId(value: string) {
    this._oracleDbAzureVaultId = value;
  }
  public resetOracleDbAzureVaultId() {
    this._oracleDbAzureVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbAzureVaultIdInput() {
    return this._oracleDbAzureVaultId;
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
  private _filter = new DataOciDbmulticloudOracleDbAzureVaultAssociationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDbmulticloudOracleDbAzureVaultAssociationsFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      oracle_db_azure_connector_id: cdktf.stringToTerraform(this._oracleDbAzureConnectorId),
      oracle_db_azure_vault_association_id: cdktf.stringToTerraform(this._oracleDbAzureVaultAssociationId),
      oracle_db_azure_vault_id: cdktf.stringToTerraform(this._oracleDbAzureVaultId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDbmulticloudOracleDbAzureVaultAssociationsFilterToTerraform, true)(this._filter.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      oracle_db_azure_connector_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbAzureConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_db_azure_vault_association_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbAzureVaultAssociationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_db_azure_vault_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbAzureVaultId),
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
        value: cdktf.listMapperHcl(dataOciDbmulticloudOracleDbAzureVaultAssociationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDbmulticloudOracleDbAzureVaultAssociationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
