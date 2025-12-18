// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciPsqlDefaultConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#instance_memory_size_in_gbs DataOciPsqlDefaultConfigurations#instance_memory_size_in_gbs}
  */
  readonly instanceMemorySizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#instance_ocpu_count DataOciPsqlDefaultConfigurations#instance_ocpu_count}
  */
  readonly instanceOcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}
  */
  readonly shape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#filter DataOciPsqlDefaultConfigurations#filter}
  */
  readonly filter?: DataOciPsqlDefaultConfigurationsFilter[] | cdktf.IResolvable;
}
export interface DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems {
}

export function dataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsToTerraform(struct?: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsToHclTerraform(struct?: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getStringAttribute('allowed_values');
  }

  // config_key - computed: true, optional: false, required: false
  public get configKey() {
    return this.getStringAttribute('config_key');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // default_config_value - computed: true, optional: false, required: false
  public get defaultConfigValue() {
    return this.getStringAttribute('default_config_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_overridable - computed: true, optional: false, required: false
  public get isOverridable() {
    return this.getBooleanAttribute('is_overridable');
  }

  // is_restart_required - computed: true, optional: false, required: false
  public get isRestartRequired() {
    return this.getBooleanAttribute('is_restart_required');
  }
}

export class DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference {
    return new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails {
}

export function dataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsToTerraform(struct?: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsToHclTerraform(struct?: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference {
    return new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems {
}

export function dataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsToTerraform(struct?: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsToHclTerraform(struct?: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compatible_shapes - computed: true, optional: false, required: false
  public get compatibleShapes() {
    return this.getListAttribute('compatible_shapes');
  }

  // configuration_details - computed: true, optional: false, required: false
  private _configurationDetails = new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList(this, "configuration_details", false);
  public get configurationDetails() {
    return this._configurationDetails;
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_memory_size_in_gbs - computed: true, optional: false, required: false
  public get instanceMemorySizeInGbs() {
    return this.getNumberAttribute('instance_memory_size_in_gbs');
  }

  // instance_ocpu_count - computed: true, optional: false, required: false
  public get instanceOcpuCount() {
    return this.getNumberAttribute('instance_ocpu_count');
  }

  // is_flexible - computed: true, optional: false, required: false
  public get isFlexible() {
    return this.getBooleanAttribute('is_flexible');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

export class DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference {
    return new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection {
}

export function dataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionToTerraform(struct?: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionToHclTerraform(struct?: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference {
    return new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDefaultConfigurationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#name DataOciPsqlDefaultConfigurations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#regex DataOciPsqlDefaultConfigurations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#values DataOciPsqlDefaultConfigurations#values}
  */
  readonly values: string[];
}

export function dataOciPsqlDefaultConfigurationsFilterToTerraform(struct?: DataOciPsqlDefaultConfigurationsFilter | cdktf.IResolvable): any {
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


export function dataOciPsqlDefaultConfigurationsFilterToHclTerraform(struct?: DataOciPsqlDefaultConfigurationsFilter | cdktf.IResolvable): any {
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

export class DataOciPsqlDefaultConfigurationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDefaultConfigurationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciPsqlDefaultConfigurationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciPsqlDefaultConfigurationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciPsqlDefaultConfigurationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciPsqlDefaultConfigurationsFilterOutputReference {
    return new DataOciPsqlDefaultConfigurationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations oci_psql_default_configurations}
*/
export class DataOciPsqlDefaultConfigurations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_psql_default_configurations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciPsqlDefaultConfigurations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciPsqlDefaultConfigurations to import
  * @param importFromId The id of the existing DataOciPsqlDefaultConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciPsqlDefaultConfigurations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_psql_default_configurations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/psql_default_configurations oci_psql_default_configurations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciPsqlDefaultConfigurationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciPsqlDefaultConfigurationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_psql_default_configurations',
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
    this._configurationId = config.configurationId;
    this._dbVersion = config.dbVersion;
    this._displayName = config.displayName;
    this._id = config.id;
    this._instanceMemorySizeInGbs = config.instanceMemorySizeInGbs;
    this._instanceOcpuCount = config.instanceOcpuCount;
    this._shape = config.shape;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: false, optional: true, required: false
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  public resetConfigurationId() {
    this._configurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // db_version - computed: false, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // default_configuration_collection - computed: true, optional: false, required: false
  private _defaultConfigurationCollection = new DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList(this, "default_configuration_collection", false);
  public get defaultConfigurationCollection() {
    return this._defaultConfigurationCollection;
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

  // instance_memory_size_in_gbs - computed: false, optional: true, required: false
  private _instanceMemorySizeInGbs?: number; 
  public get instanceMemorySizeInGbs() {
    return this.getNumberAttribute('instance_memory_size_in_gbs');
  }
  public set instanceMemorySizeInGbs(value: number) {
    this._instanceMemorySizeInGbs = value;
  }
  public resetInstanceMemorySizeInGbs() {
    this._instanceMemorySizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMemorySizeInGbsInput() {
    return this._instanceMemorySizeInGbs;
  }

  // instance_ocpu_count - computed: false, optional: true, required: false
  private _instanceOcpuCount?: number; 
  public get instanceOcpuCount() {
    return this.getNumberAttribute('instance_ocpu_count');
  }
  public set instanceOcpuCount(value: number) {
    this._instanceOcpuCount = value;
  }
  public resetInstanceOcpuCount() {
    this._instanceOcpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceOcpuCountInput() {
    return this._instanceOcpuCount;
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
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
  private _filter = new DataOciPsqlDefaultConfigurationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciPsqlDefaultConfigurationsFilter[] | cdktf.IResolvable) {
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
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      instance_memory_size_in_gbs: cdktf.numberToTerraform(this._instanceMemorySizeInGbs),
      instance_ocpu_count: cdktf.numberToTerraform(this._instanceOcpuCount),
      shape: cdktf.stringToTerraform(this._shape),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciPsqlDefaultConfigurationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
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
      instance_memory_size_in_gbs: {
        value: cdktf.numberToHclTerraform(this._instanceMemorySizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._instanceOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
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
        value: cdktf.listMapperHcl(dataOciPsqlDefaultConfigurationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciPsqlDefaultConfigurationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
