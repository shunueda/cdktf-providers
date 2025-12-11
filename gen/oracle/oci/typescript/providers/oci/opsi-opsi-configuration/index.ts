// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsiOpsiConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#compartment_id OpsiOpsiConfiguration#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#config_item_custom_status OpsiOpsiConfiguration#config_item_custom_status}
  */
  readonly configItemCustomStatus?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#config_item_field OpsiOpsiConfiguration#config_item_field}
  */
  readonly configItemField?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#config_items_applicable_context OpsiOpsiConfiguration#config_items_applicable_context}
  */
  readonly configItemsApplicableContext?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#defined_tags OpsiOpsiConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#description OpsiOpsiConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#display_name OpsiOpsiConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#freeform_tags OpsiOpsiConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#id OpsiOpsiConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#opsi_config_field OpsiOpsiConfiguration#opsi_config_field}
  */
  readonly opsiConfigField?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#opsi_config_type OpsiOpsiConfiguration#opsi_config_type}
  */
  readonly opsiConfigType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#system_tags OpsiOpsiConfiguration#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * config_items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#config_items OpsiOpsiConfiguration#config_items}
  */
  readonly configItems?: OpsiOpsiConfigurationConfigItems[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#timeouts OpsiOpsiConfiguration#timeouts}
  */
  readonly timeouts?: OpsiOpsiConfigurationTimeouts;
}
export interface OpsiOpsiConfigurationConfigItemsMetadataUnitDetails {
}

export function opsiOpsiConfigurationConfigItemsMetadataUnitDetailsToTerraform(struct?: OpsiOpsiConfigurationConfigItemsMetadataUnitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function opsiOpsiConfigurationConfigItemsMetadataUnitDetailsToHclTerraform(struct?: OpsiOpsiConfigurationConfigItemsMetadataUnitDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpsiOpsiConfigurationConfigItemsMetadataUnitDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiOpsiConfigurationConfigItemsMetadataUnitDetails | undefined) {
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

export class OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList extends cdktf.ComplexList {

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
  public get(index: number): OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference {
    return new OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails {
}

export function opsiOpsiConfigurationConfigItemsMetadataValueInputDetailsToTerraform(struct?: OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function opsiOpsiConfigurationConfigItemsMetadataValueInputDetailsToHclTerraform(struct?: OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiOpsiConfigurationConfigItemsMetadataValueInputDetails | undefined) {
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

export class OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList extends cdktf.ComplexList {

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
  public get(index: number): OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference {
    return new OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsiOpsiConfigurationConfigItemsMetadata {
}

export function opsiOpsiConfigurationConfigItemsMetadataToTerraform(struct?: OpsiOpsiConfigurationConfigItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function opsiOpsiConfigurationConfigItemsMetadataToHclTerraform(struct?: OpsiOpsiConfigurationConfigItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OpsiOpsiConfigurationConfigItemsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpsiOpsiConfigurationConfigItemsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiOpsiConfigurationConfigItemsMetadata | undefined) {
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
  private _unitDetails = new OpsiOpsiConfigurationConfigItemsMetadataUnitDetailsList(this, "unit_details", false);
  public get unitDetails() {
    return this._unitDetails;
  }

  // value_input_details - computed: true, optional: false, required: false
  private _valueInputDetails = new OpsiOpsiConfigurationConfigItemsMetadataValueInputDetailsList(this, "value_input_details", false);
  public get valueInputDetails() {
    return this._valueInputDetails;
  }
}

export class OpsiOpsiConfigurationConfigItemsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): OpsiOpsiConfigurationConfigItemsMetadataOutputReference {
    return new OpsiOpsiConfigurationConfigItemsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsiOpsiConfigurationConfigItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#config_item_type OpsiOpsiConfiguration#config_item_type}
  */
  readonly configItemType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#name OpsiOpsiConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#value OpsiOpsiConfiguration#value}
  */
  readonly value?: string;
}

export function opsiOpsiConfigurationConfigItemsToTerraform(struct?: OpsiOpsiConfigurationConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_item_type: cdktf.stringToTerraform(struct!.configItemType),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function opsiOpsiConfigurationConfigItemsToHclTerraform(struct?: OpsiOpsiConfigurationConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_item_type: {
      value: cdktf.stringToHclTerraform(struct!.configItemType),
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

export class OpsiOpsiConfigurationConfigItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpsiOpsiConfigurationConfigItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configItemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configItemType = this._configItemType;
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

  public set internalValue(value: OpsiOpsiConfigurationConfigItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configItemType = undefined;
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
      this._configItemType = value.configItemType;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // applicable_contexts - computed: true, optional: false, required: false
  public get applicableContexts() {
    return this.getListAttribute('applicable_contexts');
  }

  // config_item_type - computed: false, optional: false, required: true
  private _configItemType?: string; 
  public get configItemType() {
    return this.getStringAttribute('config_item_type');
  }
  public set configItemType(value: string) {
    this._configItemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemTypeInput() {
    return this._configItemType;
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new OpsiOpsiConfigurationConfigItemsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
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

export class OpsiOpsiConfigurationConfigItemsList extends cdktf.ComplexList {
  public internalValue? : OpsiOpsiConfigurationConfigItems[] | cdktf.IResolvable

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
  public get(index: number): OpsiOpsiConfigurationConfigItemsOutputReference {
    return new OpsiOpsiConfigurationConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsiOpsiConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#create OpsiOpsiConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#delete OpsiOpsiConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#update OpsiOpsiConfiguration#update}
  */
  readonly update?: string;
}

export function opsiOpsiConfigurationTimeoutsToTerraform(struct?: OpsiOpsiConfigurationTimeouts | cdktf.IResolvable): any {
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


export function opsiOpsiConfigurationTimeoutsToHclTerraform(struct?: OpsiOpsiConfigurationTimeouts | cdktf.IResolvable): any {
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

export class OpsiOpsiConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpsiOpsiConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpsiOpsiConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration oci_opsi_opsi_configuration}
*/
export class OpsiOpsiConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_opsi_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpsiOpsiConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpsiOpsiConfiguration to import
  * @param importFromId The id of the existing OpsiOpsiConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpsiOpsiConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_opsi_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opsi_opsi_configuration oci_opsi_opsi_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsiOpsiConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: OpsiOpsiConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_opsi_configuration',
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
    this._compartmentId = config.compartmentId;
    this._configItemCustomStatus = config.configItemCustomStatus;
    this._configItemField = config.configItemField;
    this._configItemsApplicableContext = config.configItemsApplicableContext;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._opsiConfigField = config.opsiConfigField;
    this._opsiConfigType = config.opsiConfigType;
    this._systemTags = config.systemTags;
    this._configItems.internalValue = config.configItems;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
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

  // config_item_custom_status - computed: false, optional: true, required: false
  private _configItemCustomStatus?: string[]; 
  public get configItemCustomStatus() {
    return this.getListAttribute('config_item_custom_status');
  }
  public set configItemCustomStatus(value: string[]) {
    this._configItemCustomStatus = value;
  }
  public resetConfigItemCustomStatus() {
    this._configItemCustomStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemCustomStatusInput() {
    return this._configItemCustomStatus;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // opsi_config_field - computed: false, optional: true, required: false
  private _opsiConfigField?: string[]; 
  public get opsiConfigField() {
    return this.getListAttribute('opsi_config_field');
  }
  public set opsiConfigField(value: string[]) {
    this._opsiConfigField = value;
  }
  public resetOpsiConfigField() {
    this._opsiConfigField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsiConfigFieldInput() {
    return this._opsiConfigField;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
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

  // config_items - computed: false, optional: true, required: false
  private _configItems = new OpsiOpsiConfigurationConfigItemsList(this, "config_items", false);
  public get configItems() {
    return this._configItems;
  }
  public putConfigItems(value: OpsiOpsiConfigurationConfigItems[] | cdktf.IResolvable) {
    this._configItems.internalValue = value;
  }
  public resetConfigItems() {
    this._configItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemsInput() {
    return this._configItems.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpsiOpsiConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpsiOpsiConfigurationTimeouts) {
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
      config_item_custom_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configItemCustomStatus),
      config_item_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configItemField),
      config_items_applicable_context: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configItemsApplicableContext),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      opsi_config_field: cdktf.listMapper(cdktf.stringToTerraform, false)(this._opsiConfigField),
      opsi_config_type: cdktf.stringToTerraform(this._opsiConfigType),
      system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemTags),
      config_items: cdktf.listMapper(opsiOpsiConfigurationConfigItemsToTerraform, true)(this._configItems.internalValue),
      timeouts: opsiOpsiConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
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
      opsi_config_field: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._opsiConfigField),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      opsi_config_type: {
        value: cdktf.stringToHclTerraform(this._opsiConfigType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      config_items: {
        value: cdktf.listMapperHcl(opsiOpsiConfigurationConfigItemsToHclTerraform, true)(this._configItems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpsiOpsiConfigurationConfigItemsList",
      },
      timeouts: {
        value: opsiOpsiConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpsiOpsiConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
