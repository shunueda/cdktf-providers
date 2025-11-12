// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/vpnssl_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosVpnsslSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/vpnssl_settings#id DataFortiosVpnsslSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/vpnssl_settings#vdomparam DataFortiosVpnsslSettings#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosVpnsslSettingsAuthenticationRuleGroups {
}

export function dataFortiosVpnsslSettingsAuthenticationRuleGroupsToTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRuleGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsAuthenticationRuleGroupsToHclTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRuleGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsAuthenticationRuleGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsAuthenticationRuleGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsAuthenticationRuleGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosVpnsslSettingsAuthenticationRuleGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsAuthenticationRuleGroupsOutputReference {
    return new DataFortiosVpnsslSettingsAuthenticationRuleGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress {
}

export function dataFortiosVpnsslSettingsAuthenticationRuleSourceAddressToTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsAuthenticationRuleSourceAddressToHclTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsAuthenticationRuleSourceAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosVpnsslSettingsAuthenticationRuleSourceAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsAuthenticationRuleSourceAddressOutputReference {
    return new DataFortiosVpnsslSettingsAuthenticationRuleSourceAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6 {
}

export function dataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6ToTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6ToHclTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6OutputReference {
    return new DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosVpnsslSettingsAuthenticationRuleSourceInterface {
}

export function dataFortiosVpnsslSettingsAuthenticationRuleSourceInterfaceToTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRuleSourceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsAuthenticationRuleSourceInterfaceToHclTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRuleSourceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsAuthenticationRuleSourceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsAuthenticationRuleSourceInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsAuthenticationRuleSourceInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosVpnsslSettingsAuthenticationRuleSourceInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsAuthenticationRuleSourceInterfaceOutputReference {
    return new DataFortiosVpnsslSettingsAuthenticationRuleSourceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosVpnsslSettingsAuthenticationRuleUsers {
}

export function dataFortiosVpnsslSettingsAuthenticationRuleUsersToTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRuleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsAuthenticationRuleUsersToHclTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRuleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsAuthenticationRuleUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsAuthenticationRuleUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsAuthenticationRuleUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosVpnsslSettingsAuthenticationRuleUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsAuthenticationRuleUsersOutputReference {
    return new DataFortiosVpnsslSettingsAuthenticationRuleUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosVpnsslSettingsAuthenticationRule {
}

export function dataFortiosVpnsslSettingsAuthenticationRuleToTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsAuthenticationRuleToHclTerraform(struct?: DataFortiosVpnsslSettingsAuthenticationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsAuthenticationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsAuthenticationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsAuthenticationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  public get auth() {
    return this.getStringAttribute('auth');
  }

  // cipher - computed: true, optional: false, required: false
  public get cipher() {
    return this.getStringAttribute('cipher');
  }

  // client_cert - computed: true, optional: false, required: false
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataFortiosVpnsslSettingsAuthenticationRuleGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // portal - computed: true, optional: false, required: false
  public get portal() {
    return this.getStringAttribute('portal');
  }

  // realm - computed: true, optional: false, required: false
  public get realm() {
    return this.getStringAttribute('realm');
  }

  // source_address - computed: true, optional: false, required: false
  private _sourceAddress = new DataFortiosVpnsslSettingsAuthenticationRuleSourceAddressList(this, "source_address", false);
  public get sourceAddress() {
    return this._sourceAddress;
  }

  // source_address6 - computed: true, optional: false, required: false
  private _sourceAddress6 = new DataFortiosVpnsslSettingsAuthenticationRuleSourceAddress6List(this, "source_address6", false);
  public get sourceAddress6() {
    return this._sourceAddress6;
  }

  // source_address6_negate - computed: true, optional: false, required: false
  public get sourceAddress6Negate() {
    return this.getStringAttribute('source_address6_negate');
  }

  // source_address_negate - computed: true, optional: false, required: false
  public get sourceAddressNegate() {
    return this.getStringAttribute('source_address_negate');
  }

  // source_interface - computed: true, optional: false, required: false
  private _sourceInterface = new DataFortiosVpnsslSettingsAuthenticationRuleSourceInterfaceList(this, "source_interface", false);
  public get sourceInterface() {
    return this._sourceInterface;
  }

  // user_peer - computed: true, optional: false, required: false
  public get userPeer() {
    return this.getStringAttribute('user_peer');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataFortiosVpnsslSettingsAuthenticationRuleUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
}

export class DataFortiosVpnsslSettingsAuthenticationRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsAuthenticationRuleOutputReference {
    return new DataFortiosVpnsslSettingsAuthenticationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosVpnsslSettingsSourceAddress {
}

export function dataFortiosVpnsslSettingsSourceAddressToTerraform(struct?: DataFortiosVpnsslSettingsSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsSourceAddressToHclTerraform(struct?: DataFortiosVpnsslSettingsSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsSourceAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsSourceAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsSourceAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosVpnsslSettingsSourceAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsSourceAddressOutputReference {
    return new DataFortiosVpnsslSettingsSourceAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosVpnsslSettingsSourceAddress6 {
}

export function dataFortiosVpnsslSettingsSourceAddress6ToTerraform(struct?: DataFortiosVpnsslSettingsSourceAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsSourceAddress6ToHclTerraform(struct?: DataFortiosVpnsslSettingsSourceAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsSourceAddress6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsSourceAddress6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsSourceAddress6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosVpnsslSettingsSourceAddress6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsSourceAddress6OutputReference {
    return new DataFortiosVpnsslSettingsSourceAddress6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosVpnsslSettingsSourceInterface {
}

export function dataFortiosVpnsslSettingsSourceInterfaceToTerraform(struct?: DataFortiosVpnsslSettingsSourceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsSourceInterfaceToHclTerraform(struct?: DataFortiosVpnsslSettingsSourceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsSourceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsSourceInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsSourceInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosVpnsslSettingsSourceInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsSourceInterfaceOutputReference {
    return new DataFortiosVpnsslSettingsSourceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosVpnsslSettingsTunnelIpPools {
}

export function dataFortiosVpnsslSettingsTunnelIpPoolsToTerraform(struct?: DataFortiosVpnsslSettingsTunnelIpPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsTunnelIpPoolsToHclTerraform(struct?: DataFortiosVpnsslSettingsTunnelIpPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsTunnelIpPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsTunnelIpPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsTunnelIpPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosVpnsslSettingsTunnelIpPoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsTunnelIpPoolsOutputReference {
    return new DataFortiosVpnsslSettingsTunnelIpPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosVpnsslSettingsTunnelIpv6Pools {
}

export function dataFortiosVpnsslSettingsTunnelIpv6PoolsToTerraform(struct?: DataFortiosVpnsslSettingsTunnelIpv6Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosVpnsslSettingsTunnelIpv6PoolsToHclTerraform(struct?: DataFortiosVpnsslSettingsTunnelIpv6Pools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosVpnsslSettingsTunnelIpv6PoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosVpnsslSettingsTunnelIpv6Pools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosVpnsslSettingsTunnelIpv6Pools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosVpnsslSettingsTunnelIpv6PoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosVpnsslSettingsTunnelIpv6PoolsOutputReference {
    return new DataFortiosVpnsslSettingsTunnelIpv6PoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/vpnssl_settings fortios_vpnssl_settings}
*/
export class DataFortiosVpnsslSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpnssl_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosVpnsslSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosVpnsslSettings to import
  * @param importFromId The id of the existing DataFortiosVpnsslSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/vpnssl_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosVpnsslSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpnssl_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/vpnssl_settings fortios_vpnssl_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosVpnsslSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosVpnsslSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpnssl_settings',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // auth_session_check_source_ip - computed: true, optional: false, required: false
  public get authSessionCheckSourceIp() {
    return this.getStringAttribute('auth_session_check_source_ip');
  }

  // auth_timeout - computed: true, optional: false, required: false
  public get authTimeout() {
    return this.getNumberAttribute('auth_timeout');
  }

  // authentication_rule - computed: true, optional: false, required: false
  private _authenticationRule = new DataFortiosVpnsslSettingsAuthenticationRuleList(this, "authentication_rule", false);
  public get authenticationRule() {
    return this._authenticationRule;
  }

  // auto_tunnel_static_route - computed: true, optional: false, required: false
  public get autoTunnelStaticRoute() {
    return this.getStringAttribute('auto_tunnel_static_route');
  }

  // banned_cipher - computed: true, optional: false, required: false
  public get bannedCipher() {
    return this.getStringAttribute('banned_cipher');
  }

  // browser_language_detection - computed: true, optional: false, required: false
  public get browserLanguageDetection() {
    return this.getStringAttribute('browser_language_detection');
  }

  // check_referer - computed: true, optional: false, required: false
  public get checkReferer() {
    return this.getStringAttribute('check_referer');
  }

  // ciphersuite - computed: true, optional: false, required: false
  public get ciphersuite() {
    return this.getStringAttribute('ciphersuite');
  }

  // client_sigalgs - computed: true, optional: false, required: false
  public get clientSigalgs() {
    return this.getStringAttribute('client_sigalgs');
  }

  // default_portal - computed: true, optional: false, required: false
  public get defaultPortal() {
    return this.getStringAttribute('default_portal');
  }

  // deflate_compression_level - computed: true, optional: false, required: false
  public get deflateCompressionLevel() {
    return this.getNumberAttribute('deflate_compression_level');
  }

  // deflate_min_data_size - computed: true, optional: false, required: false
  public get deflateMinDataSize() {
    return this.getNumberAttribute('deflate_min_data_size');
  }

  // dns_server1 - computed: true, optional: false, required: false
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }

  // dns_server2 - computed: true, optional: false, required: false
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }

  // dns_suffix - computed: true, optional: false, required: false
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }

  // dtls_heartbeat_fail_count - computed: true, optional: false, required: false
  public get dtlsHeartbeatFailCount() {
    return this.getNumberAttribute('dtls_heartbeat_fail_count');
  }

  // dtls_heartbeat_idle_timeout - computed: true, optional: false, required: false
  public get dtlsHeartbeatIdleTimeout() {
    return this.getNumberAttribute('dtls_heartbeat_idle_timeout');
  }

  // dtls_heartbeat_interval - computed: true, optional: false, required: false
  public get dtlsHeartbeatInterval() {
    return this.getNumberAttribute('dtls_heartbeat_interval');
  }

  // dtls_hello_timeout - computed: true, optional: false, required: false
  public get dtlsHelloTimeout() {
    return this.getNumberAttribute('dtls_hello_timeout');
  }

  // dtls_max_proto_ver - computed: true, optional: false, required: false
  public get dtlsMaxProtoVer() {
    return this.getStringAttribute('dtls_max_proto_ver');
  }

  // dtls_min_proto_ver - computed: true, optional: false, required: false
  public get dtlsMinProtoVer() {
    return this.getStringAttribute('dtls_min_proto_ver');
  }

  // dtls_tunnel - computed: true, optional: false, required: false
  public get dtlsTunnel() {
    return this.getStringAttribute('dtls_tunnel');
  }

  // dual_stack_mode - computed: true, optional: false, required: false
  public get dualStackMode() {
    return this.getStringAttribute('dual_stack_mode');
  }

  // encode_2f_sequence - computed: true, optional: false, required: false
  public get encode2FSequence() {
    return this.getStringAttribute('encode_2f_sequence');
  }

  // encrypt_and_store_password - computed: true, optional: false, required: false
  public get encryptAndStorePassword() {
    return this.getStringAttribute('encrypt_and_store_password');
  }

  // force_two_factor_auth - computed: true, optional: false, required: false
  public get forceTwoFactorAuth() {
    return this.getStringAttribute('force_two_factor_auth');
  }

  // header_x_forwarded_for - computed: true, optional: false, required: false
  public get headerXForwardedFor() {
    return this.getStringAttribute('header_x_forwarded_for');
  }

  // hsts_include_subdomains - computed: true, optional: false, required: false
  public get hstsIncludeSubdomains() {
    return this.getStringAttribute('hsts_include_subdomains');
  }

  // http_compression - computed: true, optional: false, required: false
  public get httpCompression() {
    return this.getStringAttribute('http_compression');
  }

  // http_only_cookie - computed: true, optional: false, required: false
  public get httpOnlyCookie() {
    return this.getStringAttribute('http_only_cookie');
  }

  // http_request_body_timeout - computed: true, optional: false, required: false
  public get httpRequestBodyTimeout() {
    return this.getNumberAttribute('http_request_body_timeout');
  }

  // http_request_header_timeout - computed: true, optional: false, required: false
  public get httpRequestHeaderTimeout() {
    return this.getNumberAttribute('http_request_header_timeout');
  }

  // https_redirect - computed: true, optional: false, required: false
  public get httpsRedirect() {
    return this.getStringAttribute('https_redirect');
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

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }

  // ipv6_dns_server1 - computed: true, optional: false, required: false
  public get ipv6DnsServer1() {
    return this.getStringAttribute('ipv6_dns_server1');
  }

  // ipv6_dns_server2 - computed: true, optional: false, required: false
  public get ipv6DnsServer2() {
    return this.getStringAttribute('ipv6_dns_server2');
  }

  // ipv6_wins_server1 - computed: true, optional: false, required: false
  public get ipv6WinsServer1() {
    return this.getStringAttribute('ipv6_wins_server1');
  }

  // ipv6_wins_server2 - computed: true, optional: false, required: false
  public get ipv6WinsServer2() {
    return this.getStringAttribute('ipv6_wins_server2');
  }

  // login_attempt_limit - computed: true, optional: false, required: false
  public get loginAttemptLimit() {
    return this.getNumberAttribute('login_attempt_limit');
  }

  // login_block_time - computed: true, optional: false, required: false
  public get loginBlockTime() {
    return this.getNumberAttribute('login_block_time');
  }

  // login_timeout - computed: true, optional: false, required: false
  public get loginTimeout() {
    return this.getNumberAttribute('login_timeout');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_precedence - computed: true, optional: false, required: false
  public get portPrecedence() {
    return this.getStringAttribute('port_precedence');
  }

  // reqclientcert - computed: true, optional: false, required: false
  public get reqclientcert() {
    return this.getStringAttribute('reqclientcert');
  }

  // route_source_interface - computed: true, optional: false, required: false
  public get routeSourceInterface() {
    return this.getStringAttribute('route_source_interface');
  }

  // saml_redirect_port - computed: true, optional: false, required: false
  public get samlRedirectPort() {
    return this.getNumberAttribute('saml_redirect_port');
  }

  // server_hostname - computed: true, optional: false, required: false
  public get serverHostname() {
    return this.getStringAttribute('server_hostname');
  }

  // servercert - computed: true, optional: false, required: false
  public get servercert() {
    return this.getStringAttribute('servercert');
  }

  // source_address - computed: true, optional: false, required: false
  private _sourceAddress = new DataFortiosVpnsslSettingsSourceAddressList(this, "source_address", false);
  public get sourceAddress() {
    return this._sourceAddress;
  }

  // source_address6 - computed: true, optional: false, required: false
  private _sourceAddress6 = new DataFortiosVpnsslSettingsSourceAddress6List(this, "source_address6", false);
  public get sourceAddress6() {
    return this._sourceAddress6;
  }

  // source_address6_negate - computed: true, optional: false, required: false
  public get sourceAddress6Negate() {
    return this.getStringAttribute('source_address6_negate');
  }

  // source_address_negate - computed: true, optional: false, required: false
  public get sourceAddressNegate() {
    return this.getStringAttribute('source_address_negate');
  }

  // source_interface - computed: true, optional: false, required: false
  private _sourceInterface = new DataFortiosVpnsslSettingsSourceInterfaceList(this, "source_interface", false);
  public get sourceInterface() {
    return this._sourceInterface;
  }

  // ssl_client_renegotiation - computed: true, optional: false, required: false
  public get sslClientRenegotiation() {
    return this.getStringAttribute('ssl_client_renegotiation');
  }

  // ssl_insert_empty_fragment - computed: true, optional: false, required: false
  public get sslInsertEmptyFragment() {
    return this.getStringAttribute('ssl_insert_empty_fragment');
  }

  // ssl_max_proto_ver - computed: true, optional: false, required: false
  public get sslMaxProtoVer() {
    return this.getStringAttribute('ssl_max_proto_ver');
  }

  // ssl_min_proto_ver - computed: true, optional: false, required: false
  public get sslMinProtoVer() {
    return this.getStringAttribute('ssl_min_proto_ver');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tlsv1_0 - computed: true, optional: false, required: false
  public get tlsv10() {
    return this.getStringAttribute('tlsv1_0');
  }

  // tlsv1_1 - computed: true, optional: false, required: false
  public get tlsv11() {
    return this.getStringAttribute('tlsv1_1');
  }

  // tlsv1_2 - computed: true, optional: false, required: false
  public get tlsv12() {
    return this.getStringAttribute('tlsv1_2');
  }

  // tlsv1_3 - computed: true, optional: false, required: false
  public get tlsv13() {
    return this.getStringAttribute('tlsv1_3');
  }

  // transform_backward_slashes - computed: true, optional: false, required: false
  public get transformBackwardSlashes() {
    return this.getStringAttribute('transform_backward_slashes');
  }

  // tunnel_addr_assigned_method - computed: true, optional: false, required: false
  public get tunnelAddrAssignedMethod() {
    return this.getStringAttribute('tunnel_addr_assigned_method');
  }

  // tunnel_connect_without_reauth - computed: true, optional: false, required: false
  public get tunnelConnectWithoutReauth() {
    return this.getStringAttribute('tunnel_connect_without_reauth');
  }

  // tunnel_ip_pools - computed: true, optional: false, required: false
  private _tunnelIpPools = new DataFortiosVpnsslSettingsTunnelIpPoolsList(this, "tunnel_ip_pools", false);
  public get tunnelIpPools() {
    return this._tunnelIpPools;
  }

  // tunnel_ipv6_pools - computed: true, optional: false, required: false
  private _tunnelIpv6Pools = new DataFortiosVpnsslSettingsTunnelIpv6PoolsList(this, "tunnel_ipv6_pools", false);
  public get tunnelIpv6Pools() {
    return this._tunnelIpv6Pools;
  }

  // tunnel_user_session_timeout - computed: true, optional: false, required: false
  public get tunnelUserSessionTimeout() {
    return this.getNumberAttribute('tunnel_user_session_timeout');
  }

  // unsafe_legacy_renegotiation - computed: true, optional: false, required: false
  public get unsafeLegacyRenegotiation() {
    return this.getStringAttribute('unsafe_legacy_renegotiation');
  }

  // url_obscuration - computed: true, optional: false, required: false
  public get urlObscuration() {
    return this.getStringAttribute('url_obscuration');
  }

  // user_peer - computed: true, optional: false, required: false
  public get userPeer() {
    return this.getStringAttribute('user_peer');
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

  // web_mode_snat - computed: true, optional: false, required: false
  public get webModeSnat() {
    return this.getStringAttribute('web_mode_snat');
  }

  // wins_server1 - computed: true, optional: false, required: false
  public get winsServer1() {
    return this.getStringAttribute('wins_server1');
  }

  // wins_server2 - computed: true, optional: false, required: false
  public get winsServer2() {
    return this.getStringAttribute('wins_server2');
  }

  // x_content_type_options - computed: true, optional: false, required: false
  public get xContentTypeOptions() {
    return this.getStringAttribute('x_content_type_options');
  }

  // ztna_trusted_client - computed: true, optional: false, required: false
  public get ztnaTrustedClient() {
    return this.getStringAttribute('ztna_trusted_client');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
