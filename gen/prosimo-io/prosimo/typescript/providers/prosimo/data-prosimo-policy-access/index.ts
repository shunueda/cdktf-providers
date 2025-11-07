// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProsimoPolicyAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom filters to scope specific results. Usage: filter = app_access_type==agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_access#filter DataProsimoPolicyAccess#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_access#id DataProsimoPolicyAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataProsimoPolicyAccessPolicyDetailsAppsSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsAppsSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsAppsSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsAppsSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsAppsSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsAppsSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsAppsSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsAppsSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsAppsSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsAppsSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsAppsSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsApps {
}

export function dataProsimoPolicyAccessPolicyDetailsAppsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsAppsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsAppsSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsAppsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValues {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesAdvanced {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesAdvancedToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesAdvanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesAdvancedToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesAdvanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesAdvanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesAdvanced | undefined) {
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
  private _values = new DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValues {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofiles {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofiles | undefined) {
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
  private _values = new DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValues {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesDevices {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesDevicesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesDevices | undefined) {
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
  private _values = new DataProsimoPolicyAccessPolicyDetailsMatchesDevicesValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesDevicesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValues {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesFqdn {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesFqdnToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesFqdnToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesFqdn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesFqdn | undefined) {
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
  private _values = new DataProsimoPolicyAccessPolicyDetailsMatchesFqdnValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesFqdnList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesFqdnOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesIdpValues {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesIdpValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesIdpValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesIdpValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesIdpValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesIdp {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesIdpToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesIdpToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesIdpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesIdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesIdp | undefined) {
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
  private _values = new DataProsimoPolicyAccessPolicyDetailsMatchesIdpValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesIdpList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesIdpOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesIdpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValues {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesNetworks {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesNetworksToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesNetworksToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesNetworks | undefined) {
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
  private _values = new DataProsimoPolicyAccessPolicyDetailsMatchesNetworksValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesNetworksOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesTimeValues {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesTimeValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesTimeValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesTimeValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesTimeValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesTime {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesTimeToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesTimeToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesTime | undefined) {
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
  private _values = new DataProsimoPolicyAccessPolicyDetailsMatchesTimeValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesTimeOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesUrlValues {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUrlValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUrlValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesUrlValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesUrlValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesUrl {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesUrlToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesUrlToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesUrl | undefined) {
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
  private _values = new DataProsimoPolicyAccessPolicyDetailsMatchesUrlValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesUrlOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesUsersValues {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUsersValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUsersValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesUsersValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesUsersValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inputitems - computed: true, optional: false, required: false
  private _inputitems = new DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesInputitemsList(this, "inputitems", true);
  public get inputitems() {
    return this._inputitems;
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatchesUsers {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesUsersToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesUsersToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatchesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatchesUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatchesUsers | undefined) {
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
  private _values = new DataProsimoPolicyAccessPolicyDetailsMatchesUsersValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesUsersOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsMatches {
}

export function dataProsimoPolicyAccessPolicyDetailsMatchesToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsMatchesToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsMatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsMatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsMatches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced - computed: true, optional: false, required: false
  private _advanced = new DataProsimoPolicyAccessPolicyDetailsMatchesAdvancedList(this, "advanced", true);
  public get advanced() {
    return this._advanced;
  }

  // devicepostureprofiles - computed: true, optional: false, required: false
  private _devicepostureprofiles = new DataProsimoPolicyAccessPolicyDetailsMatchesDevicepostureprofilesList(this, "devicepostureprofiles", true);
  public get devicepostureprofiles() {
    return this._devicepostureprofiles;
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataProsimoPolicyAccessPolicyDetailsMatchesDevicesList(this, "devices", true);
  public get devices() {
    return this._devices;
  }

  // fqdn - computed: true, optional: false, required: false
  private _fqdn = new DataProsimoPolicyAccessPolicyDetailsMatchesFqdnList(this, "fqdn", true);
  public get fqdn() {
    return this._fqdn;
  }

  // idp - computed: true, optional: false, required: false
  private _idp = new DataProsimoPolicyAccessPolicyDetailsMatchesIdpList(this, "idp", true);
  public get idp() {
    return this._idp;
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataProsimoPolicyAccessPolicyDetailsMatchesNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }

  // time - computed: true, optional: false, required: false
  private _time = new DataProsimoPolicyAccessPolicyDetailsMatchesTimeList(this, "time", true);
  public get time() {
    return this._time;
  }

  // url - computed: true, optional: false, required: false
  private _url = new DataProsimoPolicyAccessPolicyDetailsMatchesUrlList(this, "url", true);
  public get url() {
    return this._url;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataProsimoPolicyAccessPolicyDetailsMatchesUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsMatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsMatchesOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsNetworksSelecteditems {
}

export function dataProsimoPolicyAccessPolicyDetailsNetworksSelecteditemsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsNetworksSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsNetworksSelecteditemsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsNetworksSelecteditems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsNetworksSelecteditemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsNetworksSelecteditems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsNetworksSelecteditems | undefined) {
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

export class DataProsimoPolicyAccessPolicyDetailsNetworksSelecteditemsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsNetworksSelecteditemsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsNetworksSelecteditemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetailsNetworks {
}

export function dataProsimoPolicyAccessPolicyDetailsNetworksToTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsNetworksToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetailsNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetailsNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetailsNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selecteditems - computed: true, optional: false, required: false
  private _selecteditems = new DataProsimoPolicyAccessPolicyDetailsNetworksSelecteditemsList(this, "selecteditems", true);
  public get selecteditems() {
    return this._selecteditems;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsNetworksOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicyDetails {
}

export function dataProsimoPolicyAccessPolicyDetailsToTerraform(struct?: DataProsimoPolicyAccessPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyDetailsToHclTerraform(struct?: DataProsimoPolicyAccessPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicyDetails | undefined) {
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
  private _apps = new DataProsimoPolicyAccessPolicyDetailsAppsList(this, "apps", true);
  public get apps() {
    return this._apps;
  }

  // matches - computed: true, optional: false, required: false
  private _matches = new DataProsimoPolicyAccessPolicyDetailsMatchesList(this, "matches", true);
  public get matches() {
    return this._matches;
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataProsimoPolicyAccessPolicyDetailsNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }
}

export class DataProsimoPolicyAccessPolicyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyDetailsOutputReference {
    return new DataProsimoPolicyAccessPolicyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoPolicyAccessPolicy {
}

export function dataProsimoPolicyAccessPolicyToTerraform(struct?: DataProsimoPolicyAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoPolicyAccessPolicyToHclTerraform(struct?: DataProsimoPolicyAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoPolicyAccessPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoPolicyAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoPolicyAccessPolicy | undefined) {
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
  private _details = new DataProsimoPolicyAccessPolicyDetailsList(this, "details", true);
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

export class DataProsimoPolicyAccessPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoPolicyAccessPolicyOutputReference {
    return new DataProsimoPolicyAccessPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_access prosimo_policy_access}
*/
export class DataProsimoPolicyAccess extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_policy_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProsimoPolicyAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProsimoPolicyAccess to import
  * @param importFromId The id of the existing DataProsimoPolicyAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProsimoPolicyAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_policy_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/policy_access prosimo_policy_access} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProsimoPolicyAccessConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProsimoPolicyAccessConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prosimo_policy_access',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
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
  private _policy = new DataProsimoPolicyAccessPolicyList(this, "policy", false);
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
