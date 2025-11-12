// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_opsi_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiOpsiConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_opsi_configuration#config_item_custom_status DataOciOpsiOpsiConfiguration#config_item_custom_status}
  */
  readonly configItemCustomStatus: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_opsi_configuration#config_item_field DataOciOpsiOpsiConfiguration#config_item_field}
  */
  readonly configItemField: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_opsi_configuration#config_items_applicable_context DataOciOpsiOpsiConfiguration#config_items_applicable_context}
  */
  readonly configItemsApplicableContext: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_opsi_configuration#opsi_config_field DataOciOpsiOpsiConfiguration#opsi_config_field}
  */
  readonly opsiConfigField: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_opsi_configuration#opsi_configuration_id DataOciOpsiOpsiConfiguration#opsi_configuration_id}
  */
  readonly opsiConfigurationId: string;
}
export interface DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails {
}

export function dataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsToTerraform(struct?: DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsToHclTerraform(struct?: DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference {
    return new DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails {
}

export function dataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsToTerraform(struct?: DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsToHclTerraform(struct?: DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_value_type - computed: true, optional: false, required: false
  public get allowedValueType() {
    return this.getStringAttribute('allowed_value_type');
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getStringAttribute('min_value');
  }

  // possible_values - computed: true, optional: false, required: false
  public get possibleValues() {
    return this.getListAttribute('possible_values');
  }
}

export class DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference {
    return new DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiOpsiConfigurationConfigItemsMetadata {
}

export function dataOciOpsiOpsiConfigurationConfigItemsMetadataToTerraform(struct?: DataOciOpsiOpsiConfigurationConfigItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiOpsiConfigurationConfigItemsMetadataToHclTerraform(struct?: DataOciOpsiOpsiConfigurationConfigItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiOpsiConfigurationConfigItemsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiOpsiConfigurationConfigItemsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_item_type - computed: true, optional: false, required: false
  public get configItemType() {
    return this.getStringAttribute('config_item_type');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // unit_details - computed: true, optional: false, required: false
  private _unitDetails = new DataOciOpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList(this, "unit_details", false);
  public get unitDetails() {
    return this._unitDetails;
  }

  // value_input_details - computed: true, optional: false, required: false
  private _valueInputDetails = new DataOciOpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList(this, "value_input_details", false);
  public get valueInputDetails() {
    return this._valueInputDetails;
  }
}

export class DataOciOpsiOpsiConfigurationConfigItemsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference {
    return new DataOciOpsiOpsiConfigurationConfigItemsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiOpsiConfigurationConfigItems {
}

export function dataOciOpsiOpsiConfigurationConfigItemsToTerraform(struct?: DataOciOpsiOpsiConfigurationConfigItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiOpsiConfigurationConfigItemsToHclTerraform(struct?: DataOciOpsiOpsiConfigurationConfigItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiOpsiConfigurationConfigItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiOpsiConfigurationConfigItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiOpsiConfigurationConfigItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applicable_contexts - computed: true, optional: false, required: false
  public get applicableContexts() {
    return this.getListAttribute('applicable_contexts');
  }

  // config_item_type - computed: true, optional: false, required: false
  public get configItemType() {
    return this.getStringAttribute('config_item_type');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciOpsiOpsiConfigurationConfigItemsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciOpsiOpsiConfigurationConfigItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiOpsiConfigurationConfigItemsOutputReference {
    return new DataOciOpsiOpsiConfigurationConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_opsi_configuration oci_opsi_opsi_configuration}
*/
export class DataOciOpsiOpsiConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_opsi_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiOpsiConfiguration to import
  * @param importFromId The id of the existing DataOciOpsiOpsiConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_opsi_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiOpsiConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_opsi_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_opsi_configuration oci_opsi_opsi_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiOpsiConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiOpsiConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_opsi_configuration',
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
    this._configItemCustomStatus = config.configItemCustomStatus;
    this._configItemField = config.configItemField;
    this._configItemsApplicableContext = config.configItemsApplicableContext;
    this._opsiConfigField = config.opsiConfigField;
    this._opsiConfigurationId = config.opsiConfigurationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // config_item_custom_status - computed: false, optional: false, required: true
  private _configItemCustomStatus?: string[]; 
  public get configItemCustomStatus() {
    return this.getListAttribute('config_item_custom_status');
  }
  public set configItemCustomStatus(value: string[]) {
    this._configItemCustomStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemCustomStatusInput() {
    return this._configItemCustomStatus;
  }

  // config_item_field - computed: false, optional: false, required: true
  private _configItemField?: string[]; 
  public get configItemField() {
    return this.getListAttribute('config_item_field');
  }
  public set configItemField(value: string[]) {
    this._configItemField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemFieldInput() {
    return this._configItemField;
  }

  // config_items - computed: true, optional: false, required: false
  private _configItems = new DataOciOpsiOpsiConfigurationConfigItemsList(this, "config_items", false);
  public get configItems() {
    return this._configItems;
  }

  // config_items_applicable_context - computed: false, optional: false, required: true
  private _configItemsApplicableContext?: string[]; 
  public get configItemsApplicableContext() {
    return this.getListAttribute('config_items_applicable_context');
  }
  public set configItemsApplicableContext(value: string[]) {
    this._configItemsApplicableContext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemsApplicableContextInput() {
    return this._configItemsApplicableContext;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // opsi_config_field - computed: false, optional: false, required: true
  private _opsiConfigField?: string[]; 
  public get opsiConfigField() {
    return this.getListAttribute('opsi_config_field');
  }
  public set opsiConfigField(value: string[]) {
    this._opsiConfigField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opsiConfigFieldInput() {
    return this._opsiConfigField;
  }

  // opsi_config_type - computed: true, optional: false, required: false
  public get opsiConfigType() {
    return this.getStringAttribute('opsi_config_type');
  }

  // opsi_configuration_id - computed: false, optional: false, required: true
  private _opsiConfigurationId?: string; 
  public get opsiConfigurationId() {
    return this.getStringAttribute('opsi_configuration_id');
  }
  public set opsiConfigurationId(value: string) {
    this._opsiConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opsiConfigurationIdInput() {
    return this._opsiConfigurationId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_item_custom_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configItemCustomStatus),
      config_item_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configItemField),
      config_items_applicable_context: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configItemsApplicableContext),
      opsi_config_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._opsiConfigField),
      opsi_configuration_id: cdktf.stringToTerraform(this._opsiConfigurationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_item_custom_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configItemCustomStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      config_item_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configItemField),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      config_items_applicable_context: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configItemsApplicableContext),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      opsi_config_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._opsiConfigField),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      opsi_configuration_id: {
        value: cdktf.stringToHclTerraform(this._opsiConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
