// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUltradnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/zone#id DataUltradnsZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/zone#name DataUltradnsZone#name}
  */
  readonly name: string;
}
export interface DataUltradnsZoneNotifyAddresses {
}

export function dataUltradnsZoneNotifyAddressesToTerraform(struct?: DataUltradnsZoneNotifyAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsZoneNotifyAddressesToHclTerraform(struct?: DataUltradnsZoneNotifyAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsZoneNotifyAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsZoneNotifyAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsZoneNotifyAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // notify_address - computed: true, optional: false, required: false
  public get notifyAddress() {
    return this.getStringAttribute('notify_address');
  }
}

export class DataUltradnsZoneNotifyAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsZoneNotifyAddressesOutputReference {
    return new DataUltradnsZoneNotifyAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsZonePrimaryNameServer1 {
}

export function dataUltradnsZonePrimaryNameServer1ToTerraform(struct?: DataUltradnsZonePrimaryNameServer1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsZonePrimaryNameServer1ToHclTerraform(struct?: DataUltradnsZonePrimaryNameServer1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsZonePrimaryNameServer1OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsZonePrimaryNameServer1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsZonePrimaryNameServer1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // tsig_algorithm - computed: true, optional: false, required: false
  public get tsigAlgorithm() {
    return this.getStringAttribute('tsig_algorithm');
  }

  // tsig_key - computed: true, optional: false, required: false
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }

  // tsig_key_value - computed: true, optional: false, required: false
  public get tsigKeyValue() {
    return this.getStringAttribute('tsig_key_value');
  }
}

export class DataUltradnsZonePrimaryNameServer1List extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsZonePrimaryNameServer1OutputReference {
    return new DataUltradnsZonePrimaryNameServer1OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsZonePrimaryNameServer2 {
}

export function dataUltradnsZonePrimaryNameServer2ToTerraform(struct?: DataUltradnsZonePrimaryNameServer2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsZonePrimaryNameServer2ToHclTerraform(struct?: DataUltradnsZonePrimaryNameServer2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsZonePrimaryNameServer2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsZonePrimaryNameServer2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsZonePrimaryNameServer2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // tsig_algorithm - computed: true, optional: false, required: false
  public get tsigAlgorithm() {
    return this.getStringAttribute('tsig_algorithm');
  }

  // tsig_key - computed: true, optional: false, required: false
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }

  // tsig_key_value - computed: true, optional: false, required: false
  public get tsigKeyValue() {
    return this.getStringAttribute('tsig_key_value');
  }
}

export class DataUltradnsZonePrimaryNameServer2List extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsZonePrimaryNameServer2OutputReference {
    return new DataUltradnsZonePrimaryNameServer2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsZonePrimaryNameServer3 {
}

export function dataUltradnsZonePrimaryNameServer3ToTerraform(struct?: DataUltradnsZonePrimaryNameServer3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsZonePrimaryNameServer3ToHclTerraform(struct?: DataUltradnsZonePrimaryNameServer3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsZonePrimaryNameServer3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsZonePrimaryNameServer3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsZonePrimaryNameServer3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // tsig_algorithm - computed: true, optional: false, required: false
  public get tsigAlgorithm() {
    return this.getStringAttribute('tsig_algorithm');
  }

  // tsig_key - computed: true, optional: false, required: false
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }

  // tsig_key_value - computed: true, optional: false, required: false
  public get tsigKeyValue() {
    return this.getStringAttribute('tsig_key_value');
  }
}

export class DataUltradnsZonePrimaryNameServer3List extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsZonePrimaryNameServer3OutputReference {
    return new DataUltradnsZonePrimaryNameServer3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsZoneRegistrarInfoNameServers {
}

export function dataUltradnsZoneRegistrarInfoNameServersToTerraform(struct?: DataUltradnsZoneRegistrarInfoNameServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsZoneRegistrarInfoNameServersToHclTerraform(struct?: DataUltradnsZoneRegistrarInfoNameServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsZoneRegistrarInfoNameServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsZoneRegistrarInfoNameServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsZoneRegistrarInfoNameServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // incorrect - computed: true, optional: false, required: false
  public get incorrect() {
    return this.getListAttribute('incorrect');
  }

  // missing - computed: true, optional: false, required: false
  public get missing() {
    return this.getListAttribute('missing');
  }

  // ok - computed: true, optional: false, required: false
  public get ok() {
    return this.getListAttribute('ok');
  }

  // unknown - computed: true, optional: false, required: false
  public get unknown() {
    return this.getListAttribute('unknown');
  }
}

export class DataUltradnsZoneRegistrarInfoNameServersList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsZoneRegistrarInfoNameServersOutputReference {
    return new DataUltradnsZoneRegistrarInfoNameServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsZoneRegistrarInfo {
}

export function dataUltradnsZoneRegistrarInfoToTerraform(struct?: DataUltradnsZoneRegistrarInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsZoneRegistrarInfoToHclTerraform(struct?: DataUltradnsZoneRegistrarInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsZoneRegistrarInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsZoneRegistrarInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsZoneRegistrarInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_servers - computed: true, optional: false, required: false
  private _nameServers = new DataUltradnsZoneRegistrarInfoNameServersList(this, "name_servers", false);
  public get nameServers() {
    return this._nameServers;
  }

  // registrar - computed: true, optional: false, required: false
  public get registrar() {
    return this.getStringAttribute('registrar');
  }

  // who_is_expiration - computed: true, optional: false, required: false
  public get whoIsExpiration() {
    return this.getStringAttribute('who_is_expiration');
  }
}

export class DataUltradnsZoneRegistrarInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsZoneRegistrarInfoOutputReference {
    return new DataUltradnsZoneRegistrarInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsZoneRestrictIp {
}

export function dataUltradnsZoneRestrictIpToTerraform(struct?: DataUltradnsZoneRestrictIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsZoneRestrictIpToHclTerraform(struct?: DataUltradnsZoneRestrictIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsZoneRestrictIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsZoneRestrictIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsZoneRestrictIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // end_ip - computed: true, optional: false, required: false
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }

  // single_ip - computed: true, optional: false, required: false
  public get singleIp() {
    return this.getStringAttribute('single_ip');
  }

  // start_ip - computed: true, optional: false, required: false
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
}

export class DataUltradnsZoneRestrictIpList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsZoneRestrictIpOutputReference {
    return new DataUltradnsZoneRestrictIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsZoneTransferStatusDetails {
}

export function dataUltradnsZoneTransferStatusDetailsToTerraform(struct?: DataUltradnsZoneTransferStatusDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsZoneTransferStatusDetailsToHclTerraform(struct?: DataUltradnsZoneTransferStatusDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsZoneTransferStatusDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsZoneTransferStatusDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsZoneTransferStatusDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_refresh - computed: true, optional: false, required: false
  public get lastRefresh() {
    return this.getStringAttribute('last_refresh');
  }

  // last_refresh_status - computed: true, optional: false, required: false
  public get lastRefreshStatus() {
    return this.getStringAttribute('last_refresh_status');
  }

  // last_refresh_status_message - computed: true, optional: false, required: false
  public get lastRefreshStatusMessage() {
    return this.getStringAttribute('last_refresh_status_message');
  }

  // next_refresh - computed: true, optional: false, required: false
  public get nextRefresh() {
    return this.getStringAttribute('next_refresh');
  }
}

export class DataUltradnsZoneTransferStatusDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsZoneTransferStatusDetailsOutputReference {
    return new DataUltradnsZoneTransferStatusDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsZoneTsig {
}

export function dataUltradnsZoneTsigToTerraform(struct?: DataUltradnsZoneTsig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsZoneTsigToHclTerraform(struct?: DataUltradnsZoneTsig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsZoneTsigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUltradnsZoneTsig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsZoneTsig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // tsig_algorithm - computed: true, optional: false, required: false
  public get tsigAlgorithm() {
    return this.getStringAttribute('tsig_algorithm');
  }

  // tsig_key_name - computed: true, optional: false, required: false
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }

  // tsig_key_value - computed: true, optional: false, required: false
  public get tsigKeyValue() {
    return this.getStringAttribute('tsig_key_value');
  }
}

export class DataUltradnsZoneTsigList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsZoneTsigOutputReference {
    return new DataUltradnsZoneTsigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/zone ultradns_zone}
*/
export class DataUltradnsZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUltradnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUltradnsZone to import
  * @param importFromId The id of the existing DataUltradnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUltradnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/zone ultradns_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUltradnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataUltradnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_zone',
      terraformGeneratorMetadata: {
        providerName: 'ultradns',
        providerVersion: '1.11.1'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // dnssec_status - computed: true, optional: false, required: false
  public get dnssecStatus() {
    return this.getStringAttribute('dnssec_status');
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

  // inherit - computed: true, optional: false, required: false
  public get inherit() {
    return this.getStringAttribute('inherit');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // notification_email_address - computed: true, optional: false, required: false
  public get notificationEmailAddress() {
    return this.getStringAttribute('notification_email_address');
  }

  // notify_addresses - computed: true, optional: false, required: false
  private _notifyAddresses = new DataUltradnsZoneNotifyAddressesList(this, "notify_addresses", true);
  public get notifyAddresses() {
    return this._notifyAddresses;
  }

  // original_zone_name - computed: true, optional: false, required: false
  public get originalZoneName() {
    return this.getStringAttribute('original_zone_name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // primary_name_server_1 - computed: true, optional: false, required: false
  private _primaryNameServer1 = new DataUltradnsZonePrimaryNameServer1List(this, "primary_name_server_1", false);
  public get primaryNameServer1() {
    return this._primaryNameServer1;
  }

  // primary_name_server_2 - computed: true, optional: false, required: false
  private _primaryNameServer2 = new DataUltradnsZonePrimaryNameServer2List(this, "primary_name_server_2", false);
  public get primaryNameServer2() {
    return this._primaryNameServer2;
  }

  // primary_name_server_3 - computed: true, optional: false, required: false
  private _primaryNameServer3 = new DataUltradnsZonePrimaryNameServer3List(this, "primary_name_server_3", false);
  public get primaryNameServer3() {
    return this._primaryNameServer3;
  }

  // registrar_info - computed: true, optional: false, required: false
  private _registrarInfo = new DataUltradnsZoneRegistrarInfoList(this, "registrar_info", false);
  public get registrarInfo() {
    return this._registrarInfo;
  }

  // resource_record_count - computed: true, optional: false, required: false
  public get resourceRecordCount() {
    return this.getNumberAttribute('resource_record_count');
  }

  // restrict_ip - computed: true, optional: false, required: false
  private _restrictIp = new DataUltradnsZoneRestrictIpList(this, "restrict_ip", true);
  public get restrictIp() {
    return this._restrictIp;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transfer_status_details - computed: true, optional: false, required: false
  private _transferStatusDetails = new DataUltradnsZoneTransferStatusDetailsList(this, "transfer_status_details", false);
  public get transferStatusDetails() {
    return this._transferStatusDetails;
  }

  // tsig - computed: true, optional: false, required: false
  private _tsig = new DataUltradnsZoneTsigList(this, "tsig", false);
  public get tsig() {
    return this._tsig;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
