// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemdhcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemdhcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemdhcp_server#fosid DataFortiosSystemdhcpServer#fosid}
  */
  readonly fosid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemdhcp_server#id DataFortiosSystemdhcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemdhcp_server#vdomparam DataFortiosSystemdhcpServer#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemdhcpServerExcludeRangeUciString {
}

export function dataFortiosSystemdhcpServerExcludeRangeUciStringToTerraform(struct?: DataFortiosSystemdhcpServerExcludeRangeUciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerExcludeRangeUciStringToHclTerraform(struct?: DataFortiosSystemdhcpServerExcludeRangeUciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerExcludeRangeUciStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerExcludeRangeUciString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerExcludeRangeUciString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uci_string - computed: true, optional: false, required: false
  public get uciString() {
    return this.getStringAttribute('uci_string');
  }
}

export class DataFortiosSystemdhcpServerExcludeRangeUciStringList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerExcludeRangeUciStringOutputReference {
    return new DataFortiosSystemdhcpServerExcludeRangeUciStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerExcludeRangeVciString {
}

export function dataFortiosSystemdhcpServerExcludeRangeVciStringToTerraform(struct?: DataFortiosSystemdhcpServerExcludeRangeVciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerExcludeRangeVciStringToHclTerraform(struct?: DataFortiosSystemdhcpServerExcludeRangeVciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerExcludeRangeVciStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerExcludeRangeVciString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerExcludeRangeVciString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vci_string - computed: true, optional: false, required: false
  public get vciString() {
    return this.getStringAttribute('vci_string');
  }
}

export class DataFortiosSystemdhcpServerExcludeRangeVciStringList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerExcludeRangeVciStringOutputReference {
    return new DataFortiosSystemdhcpServerExcludeRangeVciStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerExcludeRange {
}

export function dataFortiosSystemdhcpServerExcludeRangeToTerraform(struct?: DataFortiosSystemdhcpServerExcludeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerExcludeRangeToHclTerraform(struct?: DataFortiosSystemdhcpServerExcludeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerExcludeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerExcludeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerExcludeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_ip - computed: true, optional: false, required: false
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // lease_time - computed: true, optional: false, required: false
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }

  // start_ip - computed: true, optional: false, required: false
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }

  // uci_match - computed: true, optional: false, required: false
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }

  // uci_string - computed: true, optional: false, required: false
  private _uciString = new DataFortiosSystemdhcpServerExcludeRangeUciStringList(this, "uci_string", false);
  public get uciString() {
    return this._uciString;
  }

  // vci_match - computed: true, optional: false, required: false
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }

  // vci_string - computed: true, optional: false, required: false
  private _vciString = new DataFortiosSystemdhcpServerExcludeRangeVciStringList(this, "vci_string", false);
  public get vciString() {
    return this._vciString;
  }
}

export class DataFortiosSystemdhcpServerExcludeRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerExcludeRangeOutputReference {
    return new DataFortiosSystemdhcpServerExcludeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerIpRangeUciString {
}

export function dataFortiosSystemdhcpServerIpRangeUciStringToTerraform(struct?: DataFortiosSystemdhcpServerIpRangeUciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerIpRangeUciStringToHclTerraform(struct?: DataFortiosSystemdhcpServerIpRangeUciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerIpRangeUciStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerIpRangeUciString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerIpRangeUciString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uci_string - computed: true, optional: false, required: false
  public get uciString() {
    return this.getStringAttribute('uci_string');
  }
}

export class DataFortiosSystemdhcpServerIpRangeUciStringList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerIpRangeUciStringOutputReference {
    return new DataFortiosSystemdhcpServerIpRangeUciStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerIpRangeVciString {
}

export function dataFortiosSystemdhcpServerIpRangeVciStringToTerraform(struct?: DataFortiosSystemdhcpServerIpRangeVciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerIpRangeVciStringToHclTerraform(struct?: DataFortiosSystemdhcpServerIpRangeVciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerIpRangeVciStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerIpRangeVciString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerIpRangeVciString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vci_string - computed: true, optional: false, required: false
  public get vciString() {
    return this.getStringAttribute('vci_string');
  }
}

export class DataFortiosSystemdhcpServerIpRangeVciStringList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerIpRangeVciStringOutputReference {
    return new DataFortiosSystemdhcpServerIpRangeVciStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerIpRange {
}

export function dataFortiosSystemdhcpServerIpRangeToTerraform(struct?: DataFortiosSystemdhcpServerIpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerIpRangeToHclTerraform(struct?: DataFortiosSystemdhcpServerIpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerIpRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerIpRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_ip - computed: true, optional: false, required: false
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // lease_time - computed: true, optional: false, required: false
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }

  // start_ip - computed: true, optional: false, required: false
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }

  // uci_match - computed: true, optional: false, required: false
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }

  // uci_string - computed: true, optional: false, required: false
  private _uciString = new DataFortiosSystemdhcpServerIpRangeUciStringList(this, "uci_string", false);
  public get uciString() {
    return this._uciString;
  }

  // vci_match - computed: true, optional: false, required: false
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }

  // vci_string - computed: true, optional: false, required: false
  private _vciString = new DataFortiosSystemdhcpServerIpRangeVciStringList(this, "vci_string", false);
  public get vciString() {
    return this._vciString;
  }
}

export class DataFortiosSystemdhcpServerIpRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerIpRangeOutputReference {
    return new DataFortiosSystemdhcpServerIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerOptionsUciString {
}

export function dataFortiosSystemdhcpServerOptionsUciStringToTerraform(struct?: DataFortiosSystemdhcpServerOptionsUciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerOptionsUciStringToHclTerraform(struct?: DataFortiosSystemdhcpServerOptionsUciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerOptionsUciStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerOptionsUciString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerOptionsUciString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uci_string - computed: true, optional: false, required: false
  public get uciString() {
    return this.getStringAttribute('uci_string');
  }
}

export class DataFortiosSystemdhcpServerOptionsUciStringList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerOptionsUciStringOutputReference {
    return new DataFortiosSystemdhcpServerOptionsUciStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerOptionsVciString {
}

export function dataFortiosSystemdhcpServerOptionsVciStringToTerraform(struct?: DataFortiosSystemdhcpServerOptionsVciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerOptionsVciStringToHclTerraform(struct?: DataFortiosSystemdhcpServerOptionsVciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerOptionsVciStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerOptionsVciString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerOptionsVciString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vci_string - computed: true, optional: false, required: false
  public get vciString() {
    return this.getStringAttribute('vci_string');
  }
}

export class DataFortiosSystemdhcpServerOptionsVciStringList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerOptionsVciStringOutputReference {
    return new DataFortiosSystemdhcpServerOptionsVciStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerOptions {
}

export function dataFortiosSystemdhcpServerOptionsToTerraform(struct?: DataFortiosSystemdhcpServerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerOptionsToHclTerraform(struct?: DataFortiosSystemdhcpServerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uci_match - computed: true, optional: false, required: false
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }

  // uci_string - computed: true, optional: false, required: false
  private _uciString = new DataFortiosSystemdhcpServerOptionsUciStringList(this, "uci_string", false);
  public get uciString() {
    return this._uciString;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // vci_match - computed: true, optional: false, required: false
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }

  // vci_string - computed: true, optional: false, required: false
  private _vciString = new DataFortiosSystemdhcpServerOptionsVciStringList(this, "vci_string", false);
  public get vciString() {
    return this._vciString;
  }
}

export class DataFortiosSystemdhcpServerOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerOptionsOutputReference {
    return new DataFortiosSystemdhcpServerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerReservedAddress {
}

export function dataFortiosSystemdhcpServerReservedAddressToTerraform(struct?: DataFortiosSystemdhcpServerReservedAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerReservedAddressToHclTerraform(struct?: DataFortiosSystemdhcpServerReservedAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerReservedAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerReservedAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerReservedAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // circuit_id - computed: true, optional: false, required: false
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }

  // circuit_id_type - computed: true, optional: false, required: false
  public get circuitIdType() {
    return this.getStringAttribute('circuit_id_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // remote_id_type - computed: true, optional: false, required: false
  public get remoteIdType() {
    return this.getStringAttribute('remote_id_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataFortiosSystemdhcpServerReservedAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerReservedAddressOutputReference {
    return new DataFortiosSystemdhcpServerReservedAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerTftpServer {
}

export function dataFortiosSystemdhcpServerTftpServerToTerraform(struct?: DataFortiosSystemdhcpServerTftpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerTftpServerToHclTerraform(struct?: DataFortiosSystemdhcpServerTftpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerTftpServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerTftpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerTftpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tftp_server - computed: true, optional: false, required: false
  public get tftpServer() {
    return this.getStringAttribute('tftp_server');
  }
}

export class DataFortiosSystemdhcpServerTftpServerList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerTftpServerOutputReference {
    return new DataFortiosSystemdhcpServerTftpServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemdhcpServerVciString {
}

export function dataFortiosSystemdhcpServerVciStringToTerraform(struct?: DataFortiosSystemdhcpServerVciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemdhcpServerVciStringToHclTerraform(struct?: DataFortiosSystemdhcpServerVciString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemdhcpServerVciStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemdhcpServerVciString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemdhcpServerVciString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vci_string - computed: true, optional: false, required: false
  public get vciString() {
    return this.getStringAttribute('vci_string');
  }
}

export class DataFortiosSystemdhcpServerVciStringList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemdhcpServerVciStringOutputReference {
    return new DataFortiosSystemdhcpServerVciStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemdhcp_server fortios_systemdhcp_server}
*/
export class DataFortiosSystemdhcpServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_systemdhcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemdhcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemdhcpServer to import
  * @param importFromId The id of the existing DataFortiosSystemdhcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemdhcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemdhcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_systemdhcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/systemdhcp_server fortios_systemdhcp_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemdhcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemdhcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_systemdhcp_server',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fosid = config.fosid;
    this._id = config.id;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_configuration - computed: true, optional: false, required: false
  public get autoConfiguration() {
    return this.getStringAttribute('auto_configuration');
  }

  // auto_managed_status - computed: true, optional: false, required: false
  public get autoManagedStatus() {
    return this.getStringAttribute('auto_managed_status');
  }

  // conflicted_ip_timeout - computed: true, optional: false, required: false
  public get conflictedIpTimeout() {
    return this.getNumberAttribute('conflicted_ip_timeout');
  }

  // ddns_auth - computed: true, optional: false, required: false
  public get ddnsAuth() {
    return this.getStringAttribute('ddns_auth');
  }

  // ddns_key - computed: true, optional: false, required: false
  public get ddnsKey() {
    return this.getStringAttribute('ddns_key');
  }

  // ddns_keyname - computed: true, optional: false, required: false
  public get ddnsKeyname() {
    return this.getStringAttribute('ddns_keyname');
  }

  // ddns_server_ip - computed: true, optional: false, required: false
  public get ddnsServerIp() {
    return this.getStringAttribute('ddns_server_ip');
  }

  // ddns_ttl - computed: true, optional: false, required: false
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }

  // ddns_update - computed: true, optional: false, required: false
  public get ddnsUpdate() {
    return this.getStringAttribute('ddns_update');
  }

  // ddns_update_override - computed: true, optional: false, required: false
  public get ddnsUpdateOverride() {
    return this.getStringAttribute('ddns_update_override');
  }

  // ddns_zone - computed: true, optional: false, required: false
  public get ddnsZone() {
    return this.getStringAttribute('ddns_zone');
  }

  // default_gateway - computed: true, optional: false, required: false
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }

  // dhcp_settings_from_fortiipam - computed: true, optional: false, required: false
  public get dhcpSettingsFromFortiipam() {
    return this.getStringAttribute('dhcp_settings_from_fortiipam');
  }

  // dns_server1 - computed: true, optional: false, required: false
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }

  // dns_server2 - computed: true, optional: false, required: false
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }

  // dns_server3 - computed: true, optional: false, required: false
  public get dnsServer3() {
    return this.getStringAttribute('dns_server3');
  }

  // dns_server4 - computed: true, optional: false, required: false
  public get dnsServer4() {
    return this.getStringAttribute('dns_server4');
  }

  // dns_service - computed: true, optional: false, required: false
  public get dnsService() {
    return this.getStringAttribute('dns_service');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // exclude_range - computed: true, optional: false, required: false
  private _excludeRange = new DataFortiosSystemdhcpServerExcludeRangeList(this, "exclude_range", false);
  public get excludeRange() {
    return this._excludeRange;
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // forticlient_on_net_status - computed: true, optional: false, required: false
  public get forticlientOnNetStatus() {
    return this.getStringAttribute('forticlient_on_net_status');
  }

  // fosid - computed: false, optional: false, required: true
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ip_mode - computed: true, optional: false, required: false
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }

  // ip_range - computed: true, optional: false, required: false
  private _ipRange = new DataFortiosSystemdhcpServerIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }

  // ipsec_lease_hold - computed: true, optional: false, required: false
  public get ipsecLeaseHold() {
    return this.getNumberAttribute('ipsec_lease_hold');
  }

  // lease_time - computed: true, optional: false, required: false
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }

  // mac_acl_default_action - computed: true, optional: false, required: false
  public get macAclDefaultAction() {
    return this.getStringAttribute('mac_acl_default_action');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // next_server - computed: true, optional: false, required: false
  public get nextServer() {
    return this.getStringAttribute('next_server');
  }

  // ntp_server1 - computed: true, optional: false, required: false
  public get ntpServer1() {
    return this.getStringAttribute('ntp_server1');
  }

  // ntp_server2 - computed: true, optional: false, required: false
  public get ntpServer2() {
    return this.getStringAttribute('ntp_server2');
  }

  // ntp_server3 - computed: true, optional: false, required: false
  public get ntpServer3() {
    return this.getStringAttribute('ntp_server3');
  }

  // ntp_service - computed: true, optional: false, required: false
  public get ntpService() {
    return this.getStringAttribute('ntp_service');
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataFortiosSystemdhcpServerOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }

  // relay_agent - computed: true, optional: false, required: false
  public get relayAgent() {
    return this.getStringAttribute('relay_agent');
  }

  // reserved_address - computed: true, optional: false, required: false
  private _reservedAddress = new DataFortiosSystemdhcpServerReservedAddressList(this, "reserved_address", false);
  public get reservedAddress() {
    return this._reservedAddress;
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // shared_subnet - computed: true, optional: false, required: false
  public get sharedSubnet() {
    return this.getStringAttribute('shared_subnet');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tftp_server - computed: true, optional: false, required: false
  private _tftpServer = new DataFortiosSystemdhcpServerTftpServerList(this, "tftp_server", false);
  public get tftpServer() {
    return this._tftpServer;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // timezone_option - computed: true, optional: false, required: false
  public get timezoneOption() {
    return this.getStringAttribute('timezone_option');
  }

  // vci_match - computed: true, optional: false, required: false
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }

  // vci_string - computed: true, optional: false, required: false
  private _vciString = new DataFortiosSystemdhcpServerVciStringList(this, "vci_string", false);
  public get vciString() {
    return this._vciString;
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // wifi_ac1 - computed: true, optional: false, required: false
  public get wifiAc1() {
    return this.getStringAttribute('wifi_ac1');
  }

  // wifi_ac2 - computed: true, optional: false, required: false
  public get wifiAc2() {
    return this.getStringAttribute('wifi_ac2');
  }

  // wifi_ac3 - computed: true, optional: false, required: false
  public get wifiAc3() {
    return this.getStringAttribute('wifi_ac3');
  }

  // wifi_ac_service - computed: true, optional: false, required: false
  public get wifiAcService() {
    return this.getStringAttribute('wifi_ac_service');
  }

  // wins_server1 - computed: true, optional: false, required: false
  public get winsServer1() {
    return this.getStringAttribute('wins_server1');
  }

  // wins_server2 - computed: true, optional: false, required: false
  public get winsServer2() {
    return this.getStringAttribute('wins_server2');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
