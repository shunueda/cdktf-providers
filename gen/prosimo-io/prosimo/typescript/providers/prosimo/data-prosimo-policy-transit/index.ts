// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_transit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProsimoPolicyTransitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom filters to scope specific results. Usage: filter = app_access_type==agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_transit#filter DataProsimoPolicyTransit#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_transit#id DataProsimoPolicyTransit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataProsimoPolicyTransitPolicyDetailsAppsSelecteditems {
}

export function dataProsimoPolicyTransitPolicyDetailsAppsSelecteditemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsAppsSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsAppsSelecteditemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsAppsSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsAppsSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsAppsSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsAppsSelecteditems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsAppsSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsAppsSelecteditemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsAppsSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsApps {
}

export function dataProsimoPolicyTransitPolicyDetailsAppsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsAppsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyTransitPolicyDetailsAppsSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsAppsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValues {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesAdvanced {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesAdvancedToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesAdvanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesAdvancedToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesAdvanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesAdvanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesAdvanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getStringAttribute('operations');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValues {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesFqdn {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesFqdnToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesFqdnToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesFqdn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesFqdn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getStringAttribute('operations');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataProsimoPolicyTransitPolicyDetailsMatchesFqdnValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesFqdnList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesFqdnOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvalues {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvaluesToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvalues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvaluesToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvalues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvaluesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvalues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvalues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getListAttribute('protocol');
  }

  // sourceip - computed: true, optional: false, required: false
  public get sourceip() {
    return this.getListAttribute('sourceip');
  }

  // sourceport - computed: true, optional: false, required: false
  public get sourceport() {
    return this.getListAttribute('sourceport');
  }

  // targetip - computed: true, optional: false, required: false
  public get targetip() {
    return this.getListAttribute('targetip');
  }

  // targetport - computed: true, optional: false, required: false
  public get targetport() {
    return this.getListAttribute('targetport');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvaluesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvaluesOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvaluesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keyvalues - computed: true, optional: false, required: false
  private _keyvalues = new DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsKeyvaluesList(this, "keyvalues", true);
  public get keyvalues() {
    return this._keyvalues;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValues {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesNetworkacl {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkacl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkacl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesNetworkacl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesNetworkacl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getStringAttribute('operations');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValues {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworks {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getStringAttribute('operations');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesTimeValues {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesTimeValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesTimeValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesTimeValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesTimeValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesTime {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesTimeToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesTimeToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getStringAttribute('operations');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataProsimoPolicyTransitPolicyDetailsMatchesTimeValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesTimeOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditems {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesUrlValues {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesUrlValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesUrlValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesUrlValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesUrlValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatchesUrl {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesUrlToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesUrlToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatchesUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatchesUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatchesUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operations - computed: true, optional: false, required: false
  public get operations() {
    return this.getStringAttribute('operations');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataProsimoPolicyTransitPolicyDetailsMatchesUrlValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesUrlOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsMatches {
}

export function dataProsimoPolicyTransitPolicyDetailsMatchesToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsMatchesToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsMatches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced - computed: true, optional: false, required: false
  private _advanced = new DataProsimoPolicyTransitPolicyDetailsMatchesAdvancedList(this, "advanced", true);
  public get advanced() {
    return this._advanced;
  }

  // fqdn - computed: true, optional: false, required: false
  private _fqdn = new DataProsimoPolicyTransitPolicyDetailsMatchesFqdnList(this, "fqdn", true);
  public get fqdn() {
    return this._fqdn;
  }

  // networkacl - computed: true, optional: false, required: false
  private _networkacl = new DataProsimoPolicyTransitPolicyDetailsMatchesNetworkaclList(this, "networkacl", true);
  public get networkacl() {
    return this._networkacl;
  }

  // prosimonetworks - computed: true, optional: false, required: false
  private _prosimonetworks = new DataProsimoPolicyTransitPolicyDetailsMatchesProsimonetworksList(this, "prosimonetworks", true);
  public get prosimonetworks() {
    return this._prosimonetworks;
  }

  // time - computed: true, optional: false, required: false
  private _time = new DataProsimoPolicyTransitPolicyDetailsMatchesTimeList(this, "time", true);
  public get time() {
    return this._time;
  }

  // url - computed: true, optional: false, required: false
  private _url = new DataProsimoPolicyTransitPolicyDetailsMatchesUrlList(this, "url", true);
  public get url() {
    return this._url;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsMatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsMatchesOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsNetworksSelecteditems {
}

export function dataProsimoPolicyTransitPolicyDetailsNetworksSelecteditemsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsNetworksSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsNetworksSelecteditemsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsNetworksSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsNetworksSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsNetworksSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsNetworksSelecteditems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // itemid - computed: true, optional: false, required: false
  public get itemid() {
    return this.getStringAttribute('itemid');
  }

  // itemname - computed: true, optional: false, required: false
  public get itemname() {
    return this.getStringAttribute('itemname');
  }
}

export class DataProsimoPolicyTransitPolicyDetailsNetworksSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsNetworksSelecteditemsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsNetworksSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetailsNetworks {
}

export function dataProsimoPolicyTransitPolicyDetailsNetworksToTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsNetworksToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetailsNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetailsNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetailsNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyTransitPolicyDetailsNetworksSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsNetworksOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicyDetails {
}

export function dataProsimoPolicyTransitPolicyDetailsToTerraform(struct?: DataProsimoPolicyTransitPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyDetailsToHclTerraform(struct?: DataProsimoPolicyTransitPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // apps - computed: true, optional: false, required: false
  private _apps = new DataProsimoPolicyTransitPolicyDetailsAppsList(this, "apps", true);
  public get apps() {
    return this._apps;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new DataProsimoPolicyTransitPolicyDetailsMatchesList(this, "matches", true);
  public get matches() {
    return this._matches;
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataProsimoPolicyTransitPolicyDetailsNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }
}

export class DataProsimoPolicyTransitPolicyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyDetailsOutputReference {
    return new DataProsimoPolicyTransitPolicyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyTransitPolicy {
}

export function dataProsimoPolicyTransitPolicyToTerraform(struct?: DataProsimoPolicyTransitPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyTransitPolicyToHclTerraform(struct?: DataProsimoPolicyTransitPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyTransitPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyTransitPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyTransitPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_access_type - computed: true, optional: false, required: false
  public get appAccessType() {
    return this.getStringAttribute('app_access_type');
  }

  // createdtime - computed: true, optional: false, required: false
  public get createdtime() {
    return this.getStringAttribute('createdtime');
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataProsimoPolicyTransitPolicyDetailsList(this, "details", true);
  public get details() {
    return this._details;
  }

  // device_posture_configured - computed: true, optional: false, required: false
  public get devicePostureConfigured() {
    return this.getBooleanAttribute('device_posture_configured');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // teamid - computed: true, optional: false, required: false
  public get teamid() {
    return this.getStringAttribute('teamid');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updatedtime - computed: true, optional: false, required: false
  public get updatedtime() {
    return this.getStringAttribute('updatedtime');
  }
}

export class DataProsimoPolicyTransitPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyTransitPolicyOutputReference {
    return new DataProsimoPolicyTransitPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_transit prosimo_policy_transit}
*/
export class DataProsimoPolicyTransit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_policy_transit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProsimoPolicyTransit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProsimoPolicyTransit to import
  * @param importFromId The id of the existing DataProsimoPolicyTransit that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_transit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProsimoPolicyTransit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_policy_transit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_transit prosimo_policy_transit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProsimoPolicyTransitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProsimoPolicyTransitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prosimo_policy_transit',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // policy - computed: true, optional: false, required: false
  private _policy = new DataProsimoPolicyTransitPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
