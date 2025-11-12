// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_summary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterSecurityAdvisoriesSummaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_summary#id DataDnacenterSecurityAdvisoriesSummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterSecurityAdvisoriesSummaryItemCriTicAl {
}

export function dataDnacenterSecurityAdvisoriesSummaryItemCriTicAlToTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemCriTicAl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSecurityAdvisoriesSummaryItemCriTicAlToHclTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemCriTicAl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSecurityAdvisoriesSummaryItemCriTicAlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSecurityAdvisoriesSummaryItemCriTicAl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSecurityAdvisoriesSummaryItemCriTicAl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // con_fig - computed: true, optional: false, required: false
  public get conFig() {
    return this.getNumberAttribute('con_fig');
  }

  // tot_al - computed: true, optional: false, required: false
  public get totAl() {
    return this.getNumberAttribute('tot_al');
  }

  // ver_sio_n - computed: true, optional: false, required: false
  public get verSioN() {
    return this.getNumberAttribute('ver_sio_n');
  }
}

export class DataDnacenterSecurityAdvisoriesSummaryItemCriTicAlList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSecurityAdvisoriesSummaryItemCriTicAlOutputReference {
    return new DataDnacenterSecurityAdvisoriesSummaryItemCriTicAlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSecurityAdvisoriesSummaryItemHigH {
}

export function dataDnacenterSecurityAdvisoriesSummaryItemHigHToTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemHigH): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSecurityAdvisoriesSummaryItemHigHToHclTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemHigH): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSecurityAdvisoriesSummaryItemHigHOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSecurityAdvisoriesSummaryItemHigH | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSecurityAdvisoriesSummaryItemHigH | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // con_fig - computed: true, optional: false, required: false
  public get conFig() {
    return this.getNumberAttribute('con_fig');
  }

  // tot_al - computed: true, optional: false, required: false
  public get totAl() {
    return this.getNumberAttribute('tot_al');
  }

  // ver_sio_n - computed: true, optional: false, required: false
  public get verSioN() {
    return this.getNumberAttribute('ver_sio_n');
  }
}

export class DataDnacenterSecurityAdvisoriesSummaryItemHigHList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSecurityAdvisoriesSummaryItemHigHOutputReference {
    return new DataDnacenterSecurityAdvisoriesSummaryItemHigHOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaL {
}

export function dataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaLToTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaL): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaLToHclTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaL): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaLOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaL | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaL | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // con_fig - computed: true, optional: false, required: false
  public get conFig() {
    return this.getNumberAttribute('con_fig');
  }

  // tot_al - computed: true, optional: false, required: false
  public get totAl() {
    return this.getNumberAttribute('tot_al');
  }

  // ver_sio_n - computed: true, optional: false, required: false
  public get verSioN() {
    return this.getNumberAttribute('ver_sio_n');
  }
}

export class DataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaLList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaLOutputReference {
    return new DataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaLOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSecurityAdvisoriesSummaryItemLow {
}

export function dataDnacenterSecurityAdvisoriesSummaryItemLowToTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemLow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSecurityAdvisoriesSummaryItemLowToHclTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemLow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSecurityAdvisoriesSummaryItemLowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSecurityAdvisoriesSummaryItemLow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSecurityAdvisoriesSummaryItemLow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // con_fig - computed: true, optional: false, required: false
  public get conFig() {
    return this.getNumberAttribute('con_fig');
  }

  // tot_al - computed: true, optional: false, required: false
  public get totAl() {
    return this.getNumberAttribute('tot_al');
  }

  // ver_sio_n - computed: true, optional: false, required: false
  public get verSioN() {
    return this.getNumberAttribute('ver_sio_n');
  }
}

export class DataDnacenterSecurityAdvisoriesSummaryItemLowList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSecurityAdvisoriesSummaryItemLowOutputReference {
    return new DataDnacenterSecurityAdvisoriesSummaryItemLowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSecurityAdvisoriesSummaryItemMedIum {
}

export function dataDnacenterSecurityAdvisoriesSummaryItemMedIumToTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemMedIum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSecurityAdvisoriesSummaryItemMedIumToHclTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemMedIum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSecurityAdvisoriesSummaryItemMedIumOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSecurityAdvisoriesSummaryItemMedIum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSecurityAdvisoriesSummaryItemMedIum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // con_fig - computed: true, optional: false, required: false
  public get conFig() {
    return this.getNumberAttribute('con_fig');
  }

  // tot_al - computed: true, optional: false, required: false
  public get totAl() {
    return this.getNumberAttribute('tot_al');
  }

  // ver_sio_n - computed: true, optional: false, required: false
  public get verSioN() {
    return this.getNumberAttribute('ver_sio_n');
  }
}

export class DataDnacenterSecurityAdvisoriesSummaryItemMedIumList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSecurityAdvisoriesSummaryItemMedIumOutputReference {
    return new DataDnacenterSecurityAdvisoriesSummaryItemMedIumOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSecurityAdvisoriesSummaryItemNa {
}

export function dataDnacenterSecurityAdvisoriesSummaryItemNaToTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemNa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSecurityAdvisoriesSummaryItemNaToHclTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItemNa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSecurityAdvisoriesSummaryItemNaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSecurityAdvisoriesSummaryItemNa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSecurityAdvisoriesSummaryItemNa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // con_fig - computed: true, optional: false, required: false
  public get conFig() {
    return this.getNumberAttribute('con_fig');
  }

  // tot_al - computed: true, optional: false, required: false
  public get totAl() {
    return this.getNumberAttribute('tot_al');
  }

  // ver_sio_n - computed: true, optional: false, required: false
  public get verSioN() {
    return this.getNumberAttribute('ver_sio_n');
  }
}

export class DataDnacenterSecurityAdvisoriesSummaryItemNaList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSecurityAdvisoriesSummaryItemNaOutputReference {
    return new DataDnacenterSecurityAdvisoriesSummaryItemNaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSecurityAdvisoriesSummaryItem {
}

export function dataDnacenterSecurityAdvisoriesSummaryItemToTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSecurityAdvisoriesSummaryItemToHclTerraform(struct?: DataDnacenterSecurityAdvisoriesSummaryItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSecurityAdvisoriesSummaryItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSecurityAdvisoriesSummaryItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSecurityAdvisoriesSummaryItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cri_tic_al - computed: true, optional: false, required: false
  private _criTicAl = new DataDnacenterSecurityAdvisoriesSummaryItemCriTicAlList(this, "cri_tic_al", false);
  public get criTicAl() {
    return this._criTicAl;
  }

  // hig_h - computed: true, optional: false, required: false
  private _higH = new DataDnacenterSecurityAdvisoriesSummaryItemHigHList(this, "hig_h", false);
  public get higH() {
    return this._higH;
  }

  // inf_orm_ati_ona_l - computed: true, optional: false, required: false
  private _infOrmAtiOnaL = new DataDnacenterSecurityAdvisoriesSummaryItemInfOrmAtiOnaLList(this, "inf_orm_ati_ona_l", false);
  public get infOrmAtiOnaL() {
    return this._infOrmAtiOnaL;
  }

  // low - computed: true, optional: false, required: false
  private _low = new DataDnacenterSecurityAdvisoriesSummaryItemLowList(this, "low", false);
  public get low() {
    return this._low;
  }

  // med_ium - computed: true, optional: false, required: false
  private _medIum = new DataDnacenterSecurityAdvisoriesSummaryItemMedIumList(this, "med_ium", false);
  public get medIum() {
    return this._medIum;
  }

  // na - computed: true, optional: false, required: false
  private _na = new DataDnacenterSecurityAdvisoriesSummaryItemNaList(this, "na", false);
  public get na() {
    return this._na;
  }
}

export class DataDnacenterSecurityAdvisoriesSummaryItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSecurityAdvisoriesSummaryItemOutputReference {
    return new DataDnacenterSecurityAdvisoriesSummaryItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_summary dnacenter_security_advisories_summary}
*/
export class DataDnacenterSecurityAdvisoriesSummary extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_security_advisories_summary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterSecurityAdvisoriesSummary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterSecurityAdvisoriesSummary to import
  * @param importFromId The id of the existing DataDnacenterSecurityAdvisoriesSummary that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_summary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterSecurityAdvisoriesSummary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_security_advisories_summary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_summary dnacenter_security_advisories_summary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterSecurityAdvisoriesSummaryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterSecurityAdvisoriesSummaryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_security_advisories_summary',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterSecurityAdvisoriesSummaryItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
