// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_opsi_configuration_configuration_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiOpsiConfigurationConfigurationItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_opsi_configuration_configuration_item#compartment_id DataOciOpsiOpsiConfigurationConfigurationItem#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_item_field DataOciOpsiOpsiConfigurationConfigurationItem#config_item_field}
  */
  readonly configItemField?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_opsi_configuration_configuration_item#config_items_applicable_context DataOciOpsiOpsiConfigurationConfigurationItem#config_items_applicable_context}
  */
  readonly configItemsApplicableContext?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_opsi_configuration_configuration_item#id DataOciOpsiOpsiConfigurationConfigurationItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_opsi_configuration_configuration_item#name DataOciOpsiOpsiConfigurationConfigurationItem#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_opsi_configuration_configuration_item#opsi_config_type DataOciOpsiOpsiConfigurationConfigurationItem#opsi_config_type}
  */
  readonly opsiConfigType: string;
}
export interface DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails {
}

export function dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsToTerraform(struct?: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsToHclTerraform(struct?: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetails | undefined) {
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

export class DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference {
    return new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails {
}

export function dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsToTerraform(struct?: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsToHclTerraform(struct?: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetails | undefined) {
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

export class DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference {
    return new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata {
}

export function dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataToTerraform(struct?: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataToHclTerraform(struct?: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadata | undefined) {
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
  private _unitDetails = new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataUnitDetailsList(this, "unit_details", false);
  public get unitDetails() {
    return this._unitDetails;
  }

  // value_input_details - computed: true, optional: false, required: false
  private _valueInputDetails = new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataValueInputDetailsList(this, "value_input_details", false);
  public get valueInputDetails() {
    return this._valueInputDetails;
  }
}

export class DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference {
    return new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiOpsiConfigurationConfigurationItemConfigItems {
}

export function dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsToTerraform(struct?: DataOciOpsiOpsiConfigurationConfigurationItemConfigItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiOpsiConfigurationConfigurationItemConfigItemsToHclTerraform(struct?: DataOciOpsiOpsiConfigurationConfigurationItemConfigItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiOpsiConfigurationConfigurationItemConfigItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiOpsiConfigurationConfigurationItemConfigItems | undefined) {
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
  private _metadata = new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsMetadataList(this, "metadata", false);
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

  // value_source_config - computed: true, optional: false, required: false
  public get valueSourceConfig() {
    return this.getStringAttribute('value_source_config');
  }
}

export class DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference {
    return new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_opsi_configuration_configuration_item oci_opsi_opsi_configuration_configuration_item}
*/
export class DataOciOpsiOpsiConfigurationConfigurationItem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_opsi_configuration_configuration_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiOpsiConfigurationConfigurationItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiOpsiConfigurationConfigurationItem to import
  * @param importFromId The id of the existing DataOciOpsiOpsiConfigurationConfigurationItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_opsi_configuration_configuration_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiOpsiConfigurationConfigurationItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_opsi_configuration_configuration_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_opsi_configuration_configuration_item oci_opsi_opsi_configuration_configuration_item} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiOpsiConfigurationConfigurationItemConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiOpsiConfigurationConfigurationItemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_opsi_configuration_configuration_item',
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
    this._compartmentId = config.compartmentId;
    this._configItemField = config.configItemField;
    this._configItemsApplicableContext = config.configItemsApplicableContext;
    this._id = config.id;
    this._name = config.name;
    this._opsiConfigType = config.opsiConfigType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // config_item_field - computed: false, optional: true, required: false
  private _configItemField?: string[]; 
  public get configItemField() {
    return this.getListAttribute('config_item_field');
  }
  public set configItemField(value: string[]) {
    this._configItemField = value;
  }
  public resetConfigItemField() {
    this._configItemField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemFieldInput() {
    return this._configItemField;
  }

  // config_items - computed: true, optional: false, required: false
  private _configItems = new DataOciOpsiOpsiConfigurationConfigurationItemConfigItemsList(this, "config_items", false);
  public get configItems() {
    return this._configItems;
  }

  // config_items_applicable_context - computed: false, optional: true, required: false
  private _configItemsApplicableContext?: string[]; 
  public get configItemsApplicableContext() {
    return this.getListAttribute('config_items_applicable_context');
  }
  public set configItemsApplicableContext(value: string[]) {
    this._configItemsApplicableContext = value;
  }
  public resetConfigItemsApplicableContext() {
    this._configItemsApplicableContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemsApplicableContextInput() {
    return this._configItemsApplicableContext;
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

  // name - computed: false, optional: true, required: false
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

  // opsi_config_type - computed: false, optional: false, required: true
  private _opsiConfigType?: string; 
  public get opsiConfigType() {
    return this.getStringAttribute('opsi_config_type');
  }
  public set opsiConfigType(value: string) {
    this._opsiConfigType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opsiConfigTypeInput() {
    return this._opsiConfigType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      config_item_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configItemField),
      config_items_applicable_context: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configItemsApplicableContext),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      opsi_config_type: cdktf.stringToTerraform(this._opsiConfigType),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opsi_config_type: {
        value: cdktf.stringToHclTerraform(this._opsiConfigType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
