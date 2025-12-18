// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCapacityManagementOccmDemandSignalCatalogResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources#compartment_id DataOciCapacityManagementOccmDemandSignalCatalogResources#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources#demand_signal_namespace DataOciCapacityManagementOccmDemandSignalCatalogResources#demand_signal_namespace}
  */
  readonly demandSignalNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources#id DataOciCapacityManagementOccmDemandSignalCatalogResources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources#name DataOciCapacityManagementOccmDemandSignalCatalogResources#name}
  */
  readonly name?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources#filter DataOciCapacityManagementOccmDemandSignalCatalogResources#filter}
  */
  readonly filter?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilter[] | cdktf.IResolvable;
}
export interface DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptions {
}

export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptionsToTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptionsToHclTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // option_key - computed: true, optional: false, required: false
  public get optionKey() {
    return this.getStringAttribute('option_key');
  }

  // option_value - computed: true, optional: false, required: false
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptionsOutputReference {
    return new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItems {
}

export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsToTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsToHclTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_editable - computed: true, optional: false, required: false
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }

  // property_max_value - computed: true, optional: false, required: false
  public get propertyMaxValue() {
    return this.getStringAttribute('property_max_value');
  }

  // property_min_value - computed: true, optional: false, required: false
  public get propertyMinValue() {
    return this.getStringAttribute('property_min_value');
  }

  // property_name - computed: true, optional: false, required: false
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }

  // property_options - computed: true, optional: false, required: false
  private _propertyOptions = new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsPropertyOptionsList(this, "property_options", false);
  public get propertyOptions() {
    return this._propertyOptions;
  }

  // property_unit - computed: true, optional: false, required: false
  public get propertyUnit() {
    return this.getStringAttribute('property_unit');
  }

  // property_value - computed: true, optional: false, required: false
  public get propertyValue() {
    return this.getStringAttribute('property_value');
  }
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsOutputReference {
    return new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourceProperties {
}

export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesToTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesToHclTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesOutputReference {
    return new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItems {
}

export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItemsToTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItemsToHclTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraint_name - computed: true, optional: false, required: false
  public get constraintName() {
    return this.getStringAttribute('constraint_name');
  }

  // constraint_value - computed: true, optional: false, required: false
  public get constraintValue() {
    return this.getStringAttribute('constraint_value');
  }
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItemsOutputReference {
    return new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraints {
}

export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsToTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsToHclTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsOutputReference {
    return new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItems {
}

export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsToTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsToHclTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_properties - computed: true, optional: false, required: false
  private _resourceProperties = new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertiesList(this, "resource_properties", false);
  public get resourceProperties() {
    return this._resourceProperties;
  }

  // resource_property_constraints - computed: true, optional: false, required: false
  private _resourcePropertyConstraints = new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsResourcePropertyConstraintsList(this, "resource_property_constraints", false);
  public get resourcePropertyConstraints() {
    return this._resourcePropertyConstraints;
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

  // target_compartment_id - computed: true, optional: false, required: false
  public get targetCompartmentId() {
    return this.getStringAttribute('target_compartment_id');
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

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsOutputReference {
    return new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollection {
}

export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionToTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionToHclTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionOutputReference {
    return new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources#name DataOciCapacityManagementOccmDemandSignalCatalogResources#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources#regex DataOciCapacityManagementOccmDemandSignalCatalogResources#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources#values DataOciCapacityManagementOccmDemandSignalCatalogResources#values}
  */
  readonly values: string[];
}

export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesFilterToTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilter | cdktf.IResolvable): any {
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


export function dataOciCapacityManagementOccmDemandSignalCatalogResourcesFilterToHclTerraform(struct?: DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilter | cdktf.IResolvable): any {
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

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilterOutputReference {
    return new DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources oci_capacity_management_occm_demand_signal_catalog_resources}
*/
export class DataOciCapacityManagementOccmDemandSignalCatalogResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_occm_demand_signal_catalog_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCapacityManagementOccmDemandSignalCatalogResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCapacityManagementOccmDemandSignalCatalogResources to import
  * @param importFromId The id of the existing DataOciCapacityManagementOccmDemandSignalCatalogResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCapacityManagementOccmDemandSignalCatalogResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_occm_demand_signal_catalog_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occm_demand_signal_catalog_resources oci_capacity_management_occm_demand_signal_catalog_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCapacityManagementOccmDemandSignalCatalogResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCapacityManagementOccmDemandSignalCatalogResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_occm_demand_signal_catalog_resources',
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
    this._demandSignalNamespace = config.demandSignalNamespace;
    this._id = config.id;
    this._name = config.name;
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

  // demand_signal_namespace - computed: false, optional: true, required: false
  private _demandSignalNamespace?: string; 
  public get demandSignalNamespace() {
    return this.getStringAttribute('demand_signal_namespace');
  }
  public set demandSignalNamespace(value: string) {
    this._demandSignalNamespace = value;
  }
  public resetDemandSignalNamespace() {
    this._demandSignalNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demandSignalNamespaceInput() {
    return this._demandSignalNamespace;
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

  // occm_demand_signal_catalog_resource_collection - computed: true, optional: false, required: false
  private _occmDemandSignalCatalogResourceCollection = new DataOciCapacityManagementOccmDemandSignalCatalogResourcesOccmDemandSignalCatalogResourceCollectionList(this, "occm_demand_signal_catalog_resource_collection", false);
  public get occmDemandSignalCatalogResourceCollection() {
    return this._occmDemandSignalCatalogResourceCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilter[] | cdktf.IResolvable) {
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
      demand_signal_namespace: cdktf.stringToTerraform(this._demandSignalNamespace),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      filter: cdktf.listMapper(dataOciCapacityManagementOccmDemandSignalCatalogResourcesFilterToTerraform, true)(this._filter.internalValue),
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
      demand_signal_namespace: {
        value: cdktf.stringToHclTerraform(this._demandSignalNamespace),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCapacityManagementOccmDemandSignalCatalogResourcesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCapacityManagementOccmDemandSignalCatalogResourcesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
