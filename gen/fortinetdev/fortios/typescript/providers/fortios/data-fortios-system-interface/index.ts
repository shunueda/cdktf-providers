// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_interface#id DataFortiosSystemInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_interface#name DataFortiosSystemInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_interface#vdomparam DataFortiosSystemInterface#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemInterfaceClientOptions {
}

export function dataFortiosSystemInterfaceClientOptionsToTerraform(struct?: DataFortiosSystemInterfaceClientOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceClientOptionsToHclTerraform(struct?: DataFortiosSystemInterfaceClientOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceClientOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceClientOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceClientOptions | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataFortiosSystemInterfaceClientOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceClientOptionsOutputReference {
    return new DataFortiosSystemInterfaceClientOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceDhcpSnoopingServerListStruct {
}

export function dataFortiosSystemInterfaceDhcpSnoopingServerListStructToTerraform(struct?: DataFortiosSystemInterfaceDhcpSnoopingServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceDhcpSnoopingServerListStructToHclTerraform(struct?: DataFortiosSystemInterfaceDhcpSnoopingServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceDhcpSnoopingServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceDhcpSnoopingServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceDhcpSnoopingServerListStruct | undefined) {
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

  // server_ip - computed: true, optional: false, required: false
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
}

export class DataFortiosSystemInterfaceDhcpSnoopingServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceDhcpSnoopingServerListStructOutputReference {
    return new DataFortiosSystemInterfaceDhcpSnoopingServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceFailAlertInterfaces {
}

export function dataFortiosSystemInterfaceFailAlertInterfacesToTerraform(struct?: DataFortiosSystemInterfaceFailAlertInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceFailAlertInterfacesToHclTerraform(struct?: DataFortiosSystemInterfaceFailAlertInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceFailAlertInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceFailAlertInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceFailAlertInterfaces | undefined) {
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

export class DataFortiosSystemInterfaceFailAlertInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceFailAlertInterfacesOutputReference {
    return new DataFortiosSystemInterfaceFailAlertInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6ClientOptions {
}

export function dataFortiosSystemInterfaceIpv6ClientOptionsToTerraform(struct?: DataFortiosSystemInterfaceIpv6ClientOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6ClientOptionsToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6ClientOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6ClientOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6ClientOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6ClientOptions | undefined) {
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

  // ip6 - computed: true, optional: false, required: false
  public get ip6() {
    return this.getStringAttribute('ip6');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataFortiosSystemInterfaceIpv6ClientOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6ClientOptionsOutputReference {
    return new DataFortiosSystemInterfaceIpv6ClientOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6Dhcp6IapdListStruct {
}

export function dataFortiosSystemInterfaceIpv6Dhcp6IapdListStructToTerraform(struct?: DataFortiosSystemInterfaceIpv6Dhcp6IapdListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6Dhcp6IapdListStructToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6Dhcp6IapdListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6Dhcp6IapdListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6Dhcp6IapdListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6Dhcp6IapdListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iaid - computed: true, optional: false, required: false
  public get iaid() {
    return this.getNumberAttribute('iaid');
  }

  // prefix_hint - computed: true, optional: false, required: false
  public get prefixHint() {
    return this.getStringAttribute('prefix_hint');
  }

  // prefix_hint_plt - computed: true, optional: false, required: false
  public get prefixHintPlt() {
    return this.getNumberAttribute('prefix_hint_plt');
  }

  // prefix_hint_vlt - computed: true, optional: false, required: false
  public get prefixHintVlt() {
    return this.getNumberAttribute('prefix_hint_vlt');
  }
}

export class DataFortiosSystemInterfaceIpv6Dhcp6IapdListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6Dhcp6IapdListStructOutputReference {
    return new DataFortiosSystemInterfaceIpv6Dhcp6IapdListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStruct {
}

export function dataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStructToTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStructToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autonomous_flag - computed: true, optional: false, required: false
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }

  // delegated_prefix_iaid - computed: true, optional: false, required: false
  public get delegatedPrefixIaid() {
    return this.getNumberAttribute('delegated_prefix_iaid');
  }

  // onlink_flag - computed: true, optional: false, required: false
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }

  // prefix_id - computed: true, optional: false, required: false
  public get prefixId() {
    return this.getNumberAttribute('prefix_id');
  }

  // rdnss - computed: true, optional: false, required: false
  public get rdnss() {
    return this.getStringAttribute('rdnss');
  }

  // rdnss_service - computed: true, optional: false, required: false
  public get rdnssService() {
    return this.getStringAttribute('rdnss_service');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // upstream_interface - computed: true, optional: false, required: false
  public get upstreamInterface() {
    return this.getStringAttribute('upstream_interface');
  }
}

export class DataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStructOutputReference {
    return new DataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6Ip6DnsslListStruct {
}

export function dataFortiosSystemInterfaceIpv6Ip6DnsslListStructToTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6DnsslListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6Ip6DnsslListStructToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6DnsslListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6Ip6DnsslListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6Ip6DnsslListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6Ip6DnsslListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dnssl_life_time - computed: true, optional: false, required: false
  public get dnsslLifeTime() {
    return this.getNumberAttribute('dnssl_life_time');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}

export class DataFortiosSystemInterfaceIpv6Ip6DnsslListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6Ip6DnsslListStructOutputReference {
    return new DataFortiosSystemInterfaceIpv6Ip6DnsslListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6Ip6ExtraAddr {
}

export function dataFortiosSystemInterfaceIpv6Ip6ExtraAddrToTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6ExtraAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6Ip6ExtraAddrToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6ExtraAddr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6Ip6ExtraAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6Ip6ExtraAddr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6Ip6ExtraAddr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataFortiosSystemInterfaceIpv6Ip6ExtraAddrList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6Ip6ExtraAddrOutputReference {
    return new DataFortiosSystemInterfaceIpv6Ip6ExtraAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6Ip6PrefixListDnssl {
}

export function dataFortiosSystemInterfaceIpv6Ip6PrefixListDnsslToTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6PrefixListDnssl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6Ip6PrefixListDnsslToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6PrefixListDnssl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6Ip6PrefixListDnsslOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6Ip6PrefixListDnssl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6Ip6PrefixListDnssl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}

export class DataFortiosSystemInterfaceIpv6Ip6PrefixListDnsslList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6Ip6PrefixListDnsslOutputReference {
    return new DataFortiosSystemInterfaceIpv6Ip6PrefixListDnsslOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6Ip6PrefixListStruct {
}

export function dataFortiosSystemInterfaceIpv6Ip6PrefixListStructToTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6PrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6Ip6PrefixListStructToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6PrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6Ip6PrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6Ip6PrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6Ip6PrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autonomous_flag - computed: true, optional: false, required: false
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }

  // dnssl - computed: true, optional: false, required: false
  private _dnssl = new DataFortiosSystemInterfaceIpv6Ip6PrefixListDnsslList(this, "dnssl", false);
  public get dnssl() {
    return this._dnssl;
  }

  // onlink_flag - computed: true, optional: false, required: false
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }

  // preferred_life_time - computed: true, optional: false, required: false
  public get preferredLifeTime() {
    return this.getNumberAttribute('preferred_life_time');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // rdnss - computed: true, optional: false, required: false
  public get rdnss() {
    return this.getStringAttribute('rdnss');
  }

  // valid_life_time - computed: true, optional: false, required: false
  public get validLifeTime() {
    return this.getNumberAttribute('valid_life_time');
  }
}

export class DataFortiosSystemInterfaceIpv6Ip6PrefixListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6Ip6PrefixListStructOutputReference {
    return new DataFortiosSystemInterfaceIpv6Ip6PrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6Ip6RdnssListStruct {
}

export function dataFortiosSystemInterfaceIpv6Ip6RdnssListStructToTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6RdnssListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6Ip6RdnssListStructToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6RdnssListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6Ip6RdnssListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6Ip6RdnssListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6Ip6RdnssListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rdnss - computed: true, optional: false, required: false
  public get rdnss() {
    return this.getStringAttribute('rdnss');
  }

  // rdnss_life_time - computed: true, optional: false, required: false
  public get rdnssLifeTime() {
    return this.getNumberAttribute('rdnss_life_time');
  }
}

export class DataFortiosSystemInterfaceIpv6Ip6RdnssListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6Ip6RdnssListStructOutputReference {
    return new DataFortiosSystemInterfaceIpv6Ip6RdnssListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6Ip6RouteListStruct {
}

export function dataFortiosSystemInterfaceIpv6Ip6RouteListStructToTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6RouteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6Ip6RouteListStructToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6Ip6RouteListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6Ip6RouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6Ip6RouteListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6Ip6RouteListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // route_life_time - computed: true, optional: false, required: false
  public get routeLifeTime() {
    return this.getNumberAttribute('route_life_time');
  }

  // route_pref - computed: true, optional: false, required: false
  public get routePref() {
    return this.getStringAttribute('route_pref');
  }
}

export class DataFortiosSystemInterfaceIpv6Ip6RouteListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6Ip6RouteListStructOutputReference {
    return new DataFortiosSystemInterfaceIpv6Ip6RouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6Vrrp6 {
}

export function dataFortiosSystemInterfaceIpv6Vrrp6ToTerraform(struct?: DataFortiosSystemInterfaceIpv6Vrrp6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6Vrrp6ToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6Vrrp6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6Vrrp6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6Vrrp6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6Vrrp6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_mode - computed: true, optional: false, required: false
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }

  // adv_interval - computed: true, optional: false, required: false
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }

  // ignore_default_route - computed: true, optional: false, required: false
  public get ignoreDefaultRoute() {
    return this.getStringAttribute('ignore_default_route');
  }

  // preempt - computed: true, optional: false, required: false
  public get preempt() {
    return this.getStringAttribute('preempt');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vrdst6 - computed: true, optional: false, required: false
  public get vrdst6() {
    return this.getStringAttribute('vrdst6');
  }

  // vrdst_priority - computed: true, optional: false, required: false
  public get vrdstPriority() {
    return this.getNumberAttribute('vrdst_priority');
  }

  // vrgrp - computed: true, optional: false, required: false
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }

  // vrip6 - computed: true, optional: false, required: false
  public get vrip6() {
    return this.getStringAttribute('vrip6');
  }
}

export class DataFortiosSystemInterfaceIpv6Vrrp6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6Vrrp6OutputReference {
    return new DataFortiosSystemInterfaceIpv6Vrrp6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceIpv6 {
}

export function dataFortiosSystemInterfaceIpv6ToTerraform(struct?: DataFortiosSystemInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceIpv6ToHclTerraform(struct?: DataFortiosSystemInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoconf - computed: true, optional: false, required: false
  public get autoconf() {
    return this.getStringAttribute('autoconf');
  }

  // cli_conn6_status - computed: true, optional: false, required: false
  public get cliConn6Status() {
    return this.getNumberAttribute('cli_conn6_status');
  }

  // client_options - computed: true, optional: false, required: false
  private _clientOptions = new DataFortiosSystemInterfaceIpv6ClientOptionsList(this, "client_options", false);
  public get clientOptions() {
    return this._clientOptions;
  }

  // dhcp6_client_options - computed: true, optional: false, required: false
  public get dhcp6ClientOptions() {
    return this.getStringAttribute('dhcp6_client_options');
  }

  // dhcp6_iapd_list - computed: true, optional: false, required: false
  private _dhcp6IapdList = new DataFortiosSystemInterfaceIpv6Dhcp6IapdListStructList(this, "dhcp6_iapd_list", false);
  public get dhcp6IapdList() {
    return this._dhcp6IapdList;
  }

  // dhcp6_information_request - computed: true, optional: false, required: false
  public get dhcp6InformationRequest() {
    return this.getStringAttribute('dhcp6_information_request');
  }

  // dhcp6_prefix_delegation - computed: true, optional: false, required: false
  public get dhcp6PrefixDelegation() {
    return this.getStringAttribute('dhcp6_prefix_delegation');
  }

  // dhcp6_prefix_hint - computed: true, optional: false, required: false
  public get dhcp6PrefixHint() {
    return this.getStringAttribute('dhcp6_prefix_hint');
  }

  // dhcp6_prefix_hint_plt - computed: true, optional: false, required: false
  public get dhcp6PrefixHintPlt() {
    return this.getNumberAttribute('dhcp6_prefix_hint_plt');
  }

  // dhcp6_prefix_hint_vlt - computed: true, optional: false, required: false
  public get dhcp6PrefixHintVlt() {
    return this.getNumberAttribute('dhcp6_prefix_hint_vlt');
  }

  // dhcp6_relay_interface_id - computed: true, optional: false, required: false
  public get dhcp6RelayInterfaceId() {
    return this.getStringAttribute('dhcp6_relay_interface_id');
  }

  // dhcp6_relay_ip - computed: true, optional: false, required: false
  public get dhcp6RelayIp() {
    return this.getStringAttribute('dhcp6_relay_ip');
  }

  // dhcp6_relay_service - computed: true, optional: false, required: false
  public get dhcp6RelayService() {
    return this.getStringAttribute('dhcp6_relay_service');
  }

  // dhcp6_relay_source_interface - computed: true, optional: false, required: false
  public get dhcp6RelaySourceInterface() {
    return this.getStringAttribute('dhcp6_relay_source_interface');
  }

  // dhcp6_relay_source_ip - computed: true, optional: false, required: false
  public get dhcp6RelaySourceIp() {
    return this.getStringAttribute('dhcp6_relay_source_ip');
  }

  // dhcp6_relay_type - computed: true, optional: false, required: false
  public get dhcp6RelayType() {
    return this.getStringAttribute('dhcp6_relay_type');
  }

  // icmp6_send_redirect - computed: true, optional: false, required: false
  public get icmp6SendRedirect() {
    return this.getStringAttribute('icmp6_send_redirect');
  }

  // interface_identifier - computed: true, optional: false, required: false
  public get interfaceIdentifier() {
    return this.getStringAttribute('interface_identifier');
  }

  // ip6_address - computed: true, optional: false, required: false
  public get ip6Address() {
    return this.getStringAttribute('ip6_address');
  }

  // ip6_adv_rio - computed: true, optional: false, required: false
  public get ip6AdvRio() {
    return this.getStringAttribute('ip6_adv_rio');
  }

  // ip6_allowaccess - computed: true, optional: false, required: false
  public get ip6Allowaccess() {
    return this.getStringAttribute('ip6_allowaccess');
  }

  // ip6_default_life - computed: true, optional: false, required: false
  public get ip6DefaultLife() {
    return this.getNumberAttribute('ip6_default_life');
  }

  // ip6_delegated_prefix_iaid - computed: true, optional: false, required: false
  public get ip6DelegatedPrefixIaid() {
    return this.getNumberAttribute('ip6_delegated_prefix_iaid');
  }

  // ip6_delegated_prefix_list - computed: true, optional: false, required: false
  private _ip6DelegatedPrefixList = new DataFortiosSystemInterfaceIpv6Ip6DelegatedPrefixListStructList(this, "ip6_delegated_prefix_list", false);
  public get ip6DelegatedPrefixList() {
    return this._ip6DelegatedPrefixList;
  }

  // ip6_dns_server_override - computed: true, optional: false, required: false
  public get ip6DnsServerOverride() {
    return this.getStringAttribute('ip6_dns_server_override');
  }

  // ip6_dnssl_list - computed: true, optional: false, required: false
  private _ip6DnsslList = new DataFortiosSystemInterfaceIpv6Ip6DnsslListStructList(this, "ip6_dnssl_list", false);
  public get ip6DnsslList() {
    return this._ip6DnsslList;
  }

  // ip6_extra_addr - computed: true, optional: false, required: false
  private _ip6ExtraAddr = new DataFortiosSystemInterfaceIpv6Ip6ExtraAddrList(this, "ip6_extra_addr", false);
  public get ip6ExtraAddr() {
    return this._ip6ExtraAddr;
  }

  // ip6_hop_limit - computed: true, optional: false, required: false
  public get ip6HopLimit() {
    return this.getNumberAttribute('ip6_hop_limit');
  }

  // ip6_link_mtu - computed: true, optional: false, required: false
  public get ip6LinkMtu() {
    return this.getNumberAttribute('ip6_link_mtu');
  }

  // ip6_manage_flag - computed: true, optional: false, required: false
  public get ip6ManageFlag() {
    return this.getStringAttribute('ip6_manage_flag');
  }

  // ip6_max_interval - computed: true, optional: false, required: false
  public get ip6MaxInterval() {
    return this.getNumberAttribute('ip6_max_interval');
  }

  // ip6_min_interval - computed: true, optional: false, required: false
  public get ip6MinInterval() {
    return this.getNumberAttribute('ip6_min_interval');
  }

  // ip6_mode - computed: true, optional: false, required: false
  public get ip6Mode() {
    return this.getStringAttribute('ip6_mode');
  }

  // ip6_other_flag - computed: true, optional: false, required: false
  public get ip6OtherFlag() {
    return this.getStringAttribute('ip6_other_flag');
  }

  // ip6_prefix_list - computed: true, optional: false, required: false
  private _ip6PrefixList = new DataFortiosSystemInterfaceIpv6Ip6PrefixListStructList(this, "ip6_prefix_list", false);
  public get ip6PrefixList() {
    return this._ip6PrefixList;
  }

  // ip6_prefix_mode - computed: true, optional: false, required: false
  public get ip6PrefixMode() {
    return this.getStringAttribute('ip6_prefix_mode');
  }

  // ip6_rdnss_list - computed: true, optional: false, required: false
  private _ip6RdnssList = new DataFortiosSystemInterfaceIpv6Ip6RdnssListStructList(this, "ip6_rdnss_list", false);
  public get ip6RdnssList() {
    return this._ip6RdnssList;
  }

  // ip6_reachable_time - computed: true, optional: false, required: false
  public get ip6ReachableTime() {
    return this.getNumberAttribute('ip6_reachable_time');
  }

  // ip6_retrans_time - computed: true, optional: false, required: false
  public get ip6RetransTime() {
    return this.getNumberAttribute('ip6_retrans_time');
  }

  // ip6_route_list - computed: true, optional: false, required: false
  private _ip6RouteList = new DataFortiosSystemInterfaceIpv6Ip6RouteListStructList(this, "ip6_route_list", false);
  public get ip6RouteList() {
    return this._ip6RouteList;
  }

  // ip6_route_pref - computed: true, optional: false, required: false
  public get ip6RoutePref() {
    return this.getStringAttribute('ip6_route_pref');
  }

  // ip6_send_adv - computed: true, optional: false, required: false
  public get ip6SendAdv() {
    return this.getStringAttribute('ip6_send_adv');
  }

  // ip6_subnet - computed: true, optional: false, required: false
  public get ip6Subnet() {
    return this.getStringAttribute('ip6_subnet');
  }

  // ip6_upstream_interface - computed: true, optional: false, required: false
  public get ip6UpstreamInterface() {
    return this.getStringAttribute('ip6_upstream_interface');
  }

  // nd_cert - computed: true, optional: false, required: false
  public get ndCert() {
    return this.getStringAttribute('nd_cert');
  }

  // nd_cga_modifier - computed: true, optional: false, required: false
  public get ndCgaModifier() {
    return this.getStringAttribute('nd_cga_modifier');
  }

  // nd_mode - computed: true, optional: false, required: false
  public get ndMode() {
    return this.getStringAttribute('nd_mode');
  }

  // nd_security_level - computed: true, optional: false, required: false
  public get ndSecurityLevel() {
    return this.getNumberAttribute('nd_security_level');
  }

  // nd_timestamp_delta - computed: true, optional: false, required: false
  public get ndTimestampDelta() {
    return this.getNumberAttribute('nd_timestamp_delta');
  }

  // nd_timestamp_fuzz - computed: true, optional: false, required: false
  public get ndTimestampFuzz() {
    return this.getNumberAttribute('nd_timestamp_fuzz');
  }

  // ra_send_mtu - computed: true, optional: false, required: false
  public get raSendMtu() {
    return this.getStringAttribute('ra_send_mtu');
  }

  // unique_autoconf_addr - computed: true, optional: false, required: false
  public get uniqueAutoconfAddr() {
    return this.getStringAttribute('unique_autoconf_addr');
  }

  // vrip6_link_local - computed: true, optional: false, required: false
  public get vrip6LinkLocal() {
    return this.getStringAttribute('vrip6_link_local');
  }

  // vrrp6 - computed: true, optional: false, required: false
  private _vrrp6 = new DataFortiosSystemInterfaceIpv6Vrrp6List(this, "vrrp6", false);
  public get vrrp6() {
    return this._vrrp6;
  }

  // vrrp_virtual_mac6 - computed: true, optional: false, required: false
  public get vrrpVirtualMac6() {
    return this.getStringAttribute('vrrp_virtual_mac6');
  }
}

export class DataFortiosSystemInterfaceIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceIpv6OutputReference {
    return new DataFortiosSystemInterfaceIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceManagedDevice {
}

export function dataFortiosSystemInterfaceManagedDeviceToTerraform(struct?: DataFortiosSystemInterfaceManagedDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceManagedDeviceToHclTerraform(struct?: DataFortiosSystemInterfaceManagedDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceManagedDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceManagedDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceManagedDevice | undefined) {
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

export class DataFortiosSystemInterfaceManagedDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceManagedDeviceOutputReference {
    return new DataFortiosSystemInterfaceManagedDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceMember {
}

export function dataFortiosSystemInterfaceMemberToTerraform(struct?: DataFortiosSystemInterfaceMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceMemberToHclTerraform(struct?: DataFortiosSystemInterfaceMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
}

export class DataFortiosSystemInterfaceMemberList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceMemberOutputReference {
    return new DataFortiosSystemInterfaceMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfacePhySetting {
}

export function dataFortiosSystemInterfacePhySettingToTerraform(struct?: DataFortiosSystemInterfacePhySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfacePhySettingToHclTerraform(struct?: DataFortiosSystemInterfacePhySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfacePhySettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfacePhySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfacePhySetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // signal_ok_threshold_value - computed: true, optional: false, required: false
  public get signalOkThresholdValue() {
    return this.getNumberAttribute('signal_ok_threshold_value');
  }
}

export class DataFortiosSystemInterfacePhySettingList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfacePhySettingOutputReference {
    return new DataFortiosSystemInterfacePhySettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceSecondaryip {
}

export function dataFortiosSystemInterfaceSecondaryipToTerraform(struct?: DataFortiosSystemInterfaceSecondaryip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceSecondaryipToHclTerraform(struct?: DataFortiosSystemInterfaceSecondaryip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceSecondaryipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceSecondaryip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceSecondaryip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowaccess - computed: true, optional: false, required: false
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }

  // detectprotocol - computed: true, optional: false, required: false
  public get detectprotocol() {
    return this.getStringAttribute('detectprotocol');
  }

  // detectserver - computed: true, optional: false, required: false
  public get detectserver() {
    return this.getStringAttribute('detectserver');
  }

  // gwdetect - computed: true, optional: false, required: false
  public get gwdetect() {
    return this.getStringAttribute('gwdetect');
  }

  // ha_priority - computed: true, optional: false, required: false
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ping_serv_status - computed: true, optional: false, required: false
  public get pingServStatus() {
    return this.getNumberAttribute('ping_serv_status');
  }

  // secip_relay_ip - computed: true, optional: false, required: false
  public get secipRelayIp() {
    return this.getStringAttribute('secip_relay_ip');
  }
}

export class DataFortiosSystemInterfaceSecondaryipList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceSecondaryipOutputReference {
    return new DataFortiosSystemInterfaceSecondaryipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceSecurityGroups {
}

export function dataFortiosSystemInterfaceSecurityGroupsToTerraform(struct?: DataFortiosSystemInterfaceSecurityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceSecurityGroupsToHclTerraform(struct?: DataFortiosSystemInterfaceSecurityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceSecurityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceSecurityGroups | undefined) {
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

export class DataFortiosSystemInterfaceSecurityGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceSecurityGroupsOutputReference {
    return new DataFortiosSystemInterfaceSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceTaggingTags {
}

export function dataFortiosSystemInterfaceTaggingTagsToTerraform(struct?: DataFortiosSystemInterfaceTaggingTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceTaggingTagsToHclTerraform(struct?: DataFortiosSystemInterfaceTaggingTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceTaggingTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceTaggingTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceTaggingTags | undefined) {
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

export class DataFortiosSystemInterfaceTaggingTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceTaggingTagsOutputReference {
    return new DataFortiosSystemInterfaceTaggingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceTagging {
}

export function dataFortiosSystemInterfaceTaggingToTerraform(struct?: DataFortiosSystemInterfaceTagging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceTaggingToHclTerraform(struct?: DataFortiosSystemInterfaceTagging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceTaggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceTagging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceTagging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataFortiosSystemInterfaceTaggingTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataFortiosSystemInterfaceTaggingList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceTaggingOutputReference {
    return new DataFortiosSystemInterfaceTaggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceVrrpProxyArp {
}

export function dataFortiosSystemInterfaceVrrpProxyArpToTerraform(struct?: DataFortiosSystemInterfaceVrrpProxyArp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceVrrpProxyArpToHclTerraform(struct?: DataFortiosSystemInterfaceVrrpProxyArp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceVrrpProxyArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceVrrpProxyArp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceVrrpProxyArp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}

export class DataFortiosSystemInterfaceVrrpProxyArpList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceVrrpProxyArpOutputReference {
    return new DataFortiosSystemInterfaceVrrpProxyArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemInterfaceVrrp {
}

export function dataFortiosSystemInterfaceVrrpToTerraform(struct?: DataFortiosSystemInterfaceVrrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemInterfaceVrrpToHclTerraform(struct?: DataFortiosSystemInterfaceVrrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemInterfaceVrrpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemInterfaceVrrp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemInterfaceVrrp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_mode - computed: true, optional: false, required: false
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }

  // adv_interval - computed: true, optional: false, required: false
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }

  // ignore_default_route - computed: true, optional: false, required: false
  public get ignoreDefaultRoute() {
    return this.getStringAttribute('ignore_default_route');
  }

  // preempt - computed: true, optional: false, required: false
  public get preempt() {
    return this.getStringAttribute('preempt');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // proxy_arp - computed: true, optional: false, required: false
  private _proxyArp = new DataFortiosSystemInterfaceVrrpProxyArpList(this, "proxy_arp", false);
  public get proxyArp() {
    return this._proxyArp;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vrdst - computed: true, optional: false, required: false
  public get vrdst() {
    return this.getStringAttribute('vrdst');
  }

  // vrdst_priority - computed: true, optional: false, required: false
  public get vrdstPriority() {
    return this.getNumberAttribute('vrdst_priority');
  }

  // vrgrp - computed: true, optional: false, required: false
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }

  // vrip - computed: true, optional: false, required: false
  public get vrip() {
    return this.getStringAttribute('vrip');
  }
}

export class DataFortiosSystemInterfaceVrrpList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemInterfaceVrrpOutputReference {
    return new DataFortiosSystemInterfaceVrrpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_interface fortios_system_interface}
*/
export class DataFortiosSystemInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemInterface to import
  * @param importFromId The id of the existing DataFortiosSystemInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_interface fortios_system_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_interface',
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
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ac_name - computed: true, optional: false, required: false
  public get acName() {
    return this.getStringAttribute('ac_name');
  }

  // aggregate - computed: true, optional: false, required: false
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }

  // aggregate_type - computed: true, optional: false, required: false
  public get aggregateType() {
    return this.getStringAttribute('aggregate_type');
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // allowaccess - computed: true, optional: false, required: false
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }

  // ap_discover - computed: true, optional: false, required: false
  public get apDiscover() {
    return this.getStringAttribute('ap_discover');
  }

  // arpforward - computed: true, optional: false, required: false
  public get arpforward() {
    return this.getStringAttribute('arpforward');
  }

  // auth_cert - computed: true, optional: false, required: false
  public get authCert() {
    return this.getStringAttribute('auth_cert');
  }

  // auth_portal_addr - computed: true, optional: false, required: false
  public get authPortalAddr() {
    return this.getStringAttribute('auth_portal_addr');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // auto_auth_extension_device - computed: true, optional: false, required: false
  public get autoAuthExtensionDevice() {
    return this.getStringAttribute('auto_auth_extension_device');
  }

  // bandwidth_measure_time - computed: true, optional: false, required: false
  public get bandwidthMeasureTime() {
    return this.getNumberAttribute('bandwidth_measure_time');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // bfd_desired_min_tx - computed: true, optional: false, required: false
  public get bfdDesiredMinTx() {
    return this.getNumberAttribute('bfd_desired_min_tx');
  }

  // bfd_detect_mult - computed: true, optional: false, required: false
  public get bfdDetectMult() {
    return this.getNumberAttribute('bfd_detect_mult');
  }

  // bfd_required_min_rx - computed: true, optional: false, required: false
  public get bfdRequiredMinRx() {
    return this.getNumberAttribute('bfd_required_min_rx');
  }

  // broadcast_forticlient_discovery - computed: true, optional: false, required: false
  public get broadcastForticlientDiscovery() {
    return this.getStringAttribute('broadcast_forticlient_discovery');
  }

  // broadcast_forward - computed: true, optional: false, required: false
  public get broadcastForward() {
    return this.getStringAttribute('broadcast_forward');
  }

  // captive_portal - computed: true, optional: false, required: false
  public get captivePortal() {
    return this.getNumberAttribute('captive_portal');
  }

  // cli_conn_status - computed: true, optional: false, required: false
  public get cliConnStatus() {
    return this.getNumberAttribute('cli_conn_status');
  }

  // client_options - computed: true, optional: false, required: false
  private _clientOptions = new DataFortiosSystemInterfaceClientOptionsList(this, "client_options", false);
  public get clientOptions() {
    return this._clientOptions;
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getNumberAttribute('color');
  }

  // dedicated_to - computed: true, optional: false, required: false
  public get dedicatedTo() {
    return this.getStringAttribute('dedicated_to');
  }

  // default_purdue_level - computed: true, optional: false, required: false
  public get defaultPurdueLevel() {
    return this.getStringAttribute('default_purdue_level');
  }

  // defaultgw - computed: true, optional: false, required: false
  public get defaultgw() {
    return this.getStringAttribute('defaultgw');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detected_peer_mtu - computed: true, optional: false, required: false
  public get detectedPeerMtu() {
    return this.getNumberAttribute('detected_peer_mtu');
  }

  // detectprotocol - computed: true, optional: false, required: false
  public get detectprotocol() {
    return this.getStringAttribute('detectprotocol');
  }

  // detectserver - computed: true, optional: false, required: false
  public get detectserver() {
    return this.getStringAttribute('detectserver');
  }

  // device_access_list - computed: true, optional: false, required: false
  public get deviceAccessList() {
    return this.getStringAttribute('device_access_list');
  }

  // device_identification - computed: true, optional: false, required: false
  public get deviceIdentification() {
    return this.getStringAttribute('device_identification');
  }

  // device_identification_active_scan - computed: true, optional: false, required: false
  public get deviceIdentificationActiveScan() {
    return this.getStringAttribute('device_identification_active_scan');
  }

  // device_netscan - computed: true, optional: false, required: false
  public get deviceNetscan() {
    return this.getStringAttribute('device_netscan');
  }

  // device_user_identification - computed: true, optional: false, required: false
  public get deviceUserIdentification() {
    return this.getStringAttribute('device_user_identification');
  }

  // devindex - computed: true, optional: false, required: false
  public get devindex() {
    return this.getNumberAttribute('devindex');
  }

  // dhcp_broadcast_flag - computed: true, optional: false, required: false
  public get dhcpBroadcastFlag() {
    return this.getStringAttribute('dhcp_broadcast_flag');
  }

  // dhcp_classless_route_addition - computed: true, optional: false, required: false
  public get dhcpClasslessRouteAddition() {
    return this.getStringAttribute('dhcp_classless_route_addition');
  }

  // dhcp_client_identifier - computed: true, optional: false, required: false
  public get dhcpClientIdentifier() {
    return this.getStringAttribute('dhcp_client_identifier');
  }

  // dhcp_relay_agent_option - computed: true, optional: false, required: false
  public get dhcpRelayAgentOption() {
    return this.getStringAttribute('dhcp_relay_agent_option');
  }

  // dhcp_relay_allow_no_end_option - computed: true, optional: false, required: false
  public get dhcpRelayAllowNoEndOption() {
    return this.getStringAttribute('dhcp_relay_allow_no_end_option');
  }

  // dhcp_relay_circuit_id - computed: true, optional: false, required: false
  public get dhcpRelayCircuitId() {
    return this.getStringAttribute('dhcp_relay_circuit_id');
  }

  // dhcp_relay_interface - computed: true, optional: false, required: false
  public get dhcpRelayInterface() {
    return this.getStringAttribute('dhcp_relay_interface');
  }

  // dhcp_relay_interface_select_method - computed: true, optional: false, required: false
  public get dhcpRelayInterfaceSelectMethod() {
    return this.getStringAttribute('dhcp_relay_interface_select_method');
  }

  // dhcp_relay_ip - computed: true, optional: false, required: false
  public get dhcpRelayIp() {
    return this.getStringAttribute('dhcp_relay_ip');
  }

  // dhcp_relay_link_selection - computed: true, optional: false, required: false
  public get dhcpRelayLinkSelection() {
    return this.getStringAttribute('dhcp_relay_link_selection');
  }

  // dhcp_relay_request_all_server - computed: true, optional: false, required: false
  public get dhcpRelayRequestAllServer() {
    return this.getStringAttribute('dhcp_relay_request_all_server');
  }

  // dhcp_relay_service - computed: true, optional: false, required: false
  public get dhcpRelayService() {
    return this.getStringAttribute('dhcp_relay_service');
  }

  // dhcp_relay_source_ip - computed: true, optional: false, required: false
  public get dhcpRelaySourceIp() {
    return this.getStringAttribute('dhcp_relay_source_ip');
  }

  // dhcp_relay_type - computed: true, optional: false, required: false
  public get dhcpRelayType() {
    return this.getStringAttribute('dhcp_relay_type');
  }

  // dhcp_relay_vrf_select - computed: true, optional: false, required: false
  public get dhcpRelayVrfSelect() {
    return this.getNumberAttribute('dhcp_relay_vrf_select');
  }

  // dhcp_renew_time - computed: true, optional: false, required: false
  public get dhcpRenewTime() {
    return this.getNumberAttribute('dhcp_renew_time');
  }

  // dhcp_smart_relay - computed: true, optional: false, required: false
  public get dhcpSmartRelay() {
    return this.getStringAttribute('dhcp_smart_relay');
  }

  // dhcp_snooping_server_list - computed: true, optional: false, required: false
  private _dhcpSnoopingServerList = new DataFortiosSystemInterfaceDhcpSnoopingServerListStructList(this, "dhcp_snooping_server_list", false);
  public get dhcpSnoopingServerList() {
    return this._dhcpSnoopingServerList;
  }

  // disc_retry_timeout - computed: true, optional: false, required: false
  public get discRetryTimeout() {
    return this.getNumberAttribute('disc_retry_timeout');
  }

  // disconnect_threshold - computed: true, optional: false, required: false
  public get disconnectThreshold() {
    return this.getNumberAttribute('disconnect_threshold');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // dns_server_override - computed: true, optional: false, required: false
  public get dnsServerOverride() {
    return this.getStringAttribute('dns_server_override');
  }

  // dns_server_protocol - computed: true, optional: false, required: false
  public get dnsServerProtocol() {
    return this.getStringAttribute('dns_server_protocol');
  }

  // drop_fragment - computed: true, optional: false, required: false
  public get dropFragment() {
    return this.getStringAttribute('drop_fragment');
  }

  // drop_overlapped_fragment - computed: true, optional: false, required: false
  public get dropOverlappedFragment() {
    return this.getStringAttribute('drop_overlapped_fragment');
  }

  // eap_ca_cert - computed: true, optional: false, required: false
  public get eapCaCert() {
    return this.getStringAttribute('eap_ca_cert');
  }

  // eap_identity - computed: true, optional: false, required: false
  public get eapIdentity() {
    return this.getStringAttribute('eap_identity');
  }

  // eap_method - computed: true, optional: false, required: false
  public get eapMethod() {
    return this.getStringAttribute('eap_method');
  }

  // eap_password - computed: true, optional: false, required: false
  public get eapPassword() {
    return this.getStringAttribute('eap_password');
  }

  // eap_supplicant - computed: true, optional: false, required: false
  public get eapSupplicant() {
    return this.getStringAttribute('eap_supplicant');
  }

  // eap_user_cert - computed: true, optional: false, required: false
  public get eapUserCert() {
    return this.getStringAttribute('eap_user_cert');
  }

  // egress_shaping_profile - computed: true, optional: false, required: false
  public get egressShapingProfile() {
    return this.getStringAttribute('egress_shaping_profile');
  }

  // endpoint_compliance - computed: true, optional: false, required: false
  public get endpointCompliance() {
    return this.getStringAttribute('endpoint_compliance');
  }

  // estimated_downstream_bandwidth - computed: true, optional: false, required: false
  public get estimatedDownstreamBandwidth() {
    return this.getNumberAttribute('estimated_downstream_bandwidth');
  }

  // estimated_upstream_bandwidth - computed: true, optional: false, required: false
  public get estimatedUpstreamBandwidth() {
    return this.getNumberAttribute('estimated_upstream_bandwidth');
  }

  // exclude_signatures - computed: true, optional: false, required: false
  public get excludeSignatures() {
    return this.getStringAttribute('exclude_signatures');
  }

  // explicit_ftp_proxy - computed: true, optional: false, required: false
  public get explicitFtpProxy() {
    return this.getStringAttribute('explicit_ftp_proxy');
  }

  // explicit_web_proxy - computed: true, optional: false, required: false
  public get explicitWebProxy() {
    return this.getStringAttribute('explicit_web_proxy');
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getStringAttribute('external');
  }

  // fail_action_on_extender - computed: true, optional: false, required: false
  public get failActionOnExtender() {
    return this.getStringAttribute('fail_action_on_extender');
  }

  // fail_alert_interfaces - computed: true, optional: false, required: false
  private _failAlertInterfaces = new DataFortiosSystemInterfaceFailAlertInterfacesList(this, "fail_alert_interfaces", false);
  public get failAlertInterfaces() {
    return this._failAlertInterfaces;
  }

  // fail_alert_method - computed: true, optional: false, required: false
  public get failAlertMethod() {
    return this.getStringAttribute('fail_alert_method');
  }

  // fail_detect - computed: true, optional: false, required: false
  public get failDetect() {
    return this.getStringAttribute('fail_detect');
  }

  // fail_detect_option - computed: true, optional: false, required: false
  public get failDetectOption() {
    return this.getStringAttribute('fail_detect_option');
  }

  // fortiheartbeat - computed: true, optional: false, required: false
  public get fortiheartbeat() {
    return this.getStringAttribute('fortiheartbeat');
  }

  // fortilink - computed: true, optional: false, required: false
  public get fortilink() {
    return this.getStringAttribute('fortilink');
  }

  // fortilink_backup_link - computed: true, optional: false, required: false
  public get fortilinkBackupLink() {
    return this.getNumberAttribute('fortilink_backup_link');
  }

  // fortilink_neighbor_detect - computed: true, optional: false, required: false
  public get fortilinkNeighborDetect() {
    return this.getStringAttribute('fortilink_neighbor_detect');
  }

  // fortilink_split_interface - computed: true, optional: false, required: false
  public get fortilinkSplitInterface() {
    return this.getStringAttribute('fortilink_split_interface');
  }

  // fortilink_stacking - computed: true, optional: false, required: false
  public get fortilinkStacking() {
    return this.getStringAttribute('fortilink_stacking');
  }

  // forward_domain - computed: true, optional: false, required: false
  public get forwardDomain() {
    return this.getNumberAttribute('forward_domain');
  }

  // forward_error_correction - computed: true, optional: false, required: false
  public get forwardErrorCorrection() {
    return this.getStringAttribute('forward_error_correction');
  }

  // gwdetect - computed: true, optional: false, required: false
  public get gwdetect() {
    return this.getStringAttribute('gwdetect');
  }

  // ha_priority - computed: true, optional: false, required: false
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }

  // icmp_accept_redirect - computed: true, optional: false, required: false
  public get icmpAcceptRedirect() {
    return this.getStringAttribute('icmp_accept_redirect');
  }

  // icmp_send_redirect - computed: true, optional: false, required: false
  public get icmpSendRedirect() {
    return this.getStringAttribute('icmp_send_redirect');
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

  // ident_accept - computed: true, optional: false, required: false
  public get identAccept() {
    return this.getStringAttribute('ident_accept');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }

  // ike_saml_server - computed: true, optional: false, required: false
  public get ikeSamlServer() {
    return this.getStringAttribute('ike_saml_server');
  }

  // inbandwidth - computed: true, optional: false, required: false
  public get inbandwidth() {
    return this.getNumberAttribute('inbandwidth');
  }

  // ingress_shaping_profile - computed: true, optional: false, required: false
  public get ingressShapingProfile() {
    return this.getStringAttribute('ingress_shaping_profile');
  }

  // ingress_spillover_threshold - computed: true, optional: false, required: false
  public get ingressSpilloverThreshold() {
    return this.getNumberAttribute('ingress_spillover_threshold');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // internal - computed: true, optional: false, required: false
  public get internal() {
    return this.getNumberAttribute('internal');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip_managed_by_fortiipam - computed: true, optional: false, required: false
  public get ipManagedByFortiipam() {
    return this.getStringAttribute('ip_managed_by_fortiipam');
  }

  // ipmac - computed: true, optional: false, required: false
  public get ipmac() {
    return this.getStringAttribute('ipmac');
  }

  // ips_sniffer_mode - computed: true, optional: false, required: false
  public get ipsSnifferMode() {
    return this.getStringAttribute('ips_sniffer_mode');
  }

  // ipunnumbered - computed: true, optional: false, required: false
  public get ipunnumbered() {
    return this.getStringAttribute('ipunnumbered');
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataFortiosSystemInterfaceIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }

  // l2forward - computed: true, optional: false, required: false
  public get l2Forward() {
    return this.getStringAttribute('l2forward');
  }

  // lacp_ha_secondary - computed: true, optional: false, required: false
  public get lacpHaSecondary() {
    return this.getStringAttribute('lacp_ha_secondary');
  }

  // lacp_ha_slave - computed: true, optional: false, required: false
  public get lacpHaSlave() {
    return this.getStringAttribute('lacp_ha_slave');
  }

  // lacp_mode - computed: true, optional: false, required: false
  public get lacpMode() {
    return this.getStringAttribute('lacp_mode');
  }

  // lacp_speed - computed: true, optional: false, required: false
  public get lacpSpeed() {
    return this.getStringAttribute('lacp_speed');
  }

  // lcp_echo_interval - computed: true, optional: false, required: false
  public get lcpEchoInterval() {
    return this.getNumberAttribute('lcp_echo_interval');
  }

  // lcp_max_echo_fails - computed: true, optional: false, required: false
  public get lcpMaxEchoFails() {
    return this.getNumberAttribute('lcp_max_echo_fails');
  }

  // link_up_delay - computed: true, optional: false, required: false
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }

  // lldp_network_policy - computed: true, optional: false, required: false
  public get lldpNetworkPolicy() {
    return this.getStringAttribute('lldp_network_policy');
  }

  // lldp_reception - computed: true, optional: false, required: false
  public get lldpReception() {
    return this.getStringAttribute('lldp_reception');
  }

  // lldp_transmission - computed: true, optional: false, required: false
  public get lldpTransmission() {
    return this.getStringAttribute('lldp_transmission');
  }

  // macaddr - computed: true, optional: false, required: false
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }

  // managed_device - computed: true, optional: false, required: false
  private _managedDevice = new DataFortiosSystemInterfaceManagedDeviceList(this, "managed_device", false);
  public get managedDevice() {
    return this._managedDevice;
  }

  // managed_subnetwork_size - computed: true, optional: false, required: false
  public get managedSubnetworkSize() {
    return this.getStringAttribute('managed_subnetwork_size');
  }

  // management_ip - computed: true, optional: false, required: false
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }

  // measured_downstream_bandwidth - computed: true, optional: false, required: false
  public get measuredDownstreamBandwidth() {
    return this.getNumberAttribute('measured_downstream_bandwidth');
  }

  // measured_upstream_bandwidth - computed: true, optional: false, required: false
  public get measuredUpstreamBandwidth() {
    return this.getNumberAttribute('measured_upstream_bandwidth');
  }

  // mediatype - computed: true, optional: false, required: false
  public get mediatype() {
    return this.getStringAttribute('mediatype');
  }

  // member - computed: true, optional: false, required: false
  private _member = new DataFortiosSystemInterfaceMemberList(this, "member", false);
  public get member() {
    return this._member;
  }

  // min_links - computed: true, optional: false, required: false
  public get minLinks() {
    return this.getNumberAttribute('min_links');
  }

  // min_links_down - computed: true, optional: false, required: false
  public get minLinksDown() {
    return this.getStringAttribute('min_links_down');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // monitor_bandwidth - computed: true, optional: false, required: false
  public get monitorBandwidth() {
    return this.getStringAttribute('monitor_bandwidth');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // mtu_override - computed: true, optional: false, required: false
  public get mtuOverride() {
    return this.getStringAttribute('mtu_override');
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

  // ndiscforward - computed: true, optional: false, required: false
  public get ndiscforward() {
    return this.getStringAttribute('ndiscforward');
  }

  // netbios_forward - computed: true, optional: false, required: false
  public get netbiosForward() {
    return this.getStringAttribute('netbios_forward');
  }

  // netflow_sample_rate - computed: true, optional: false, required: false
  public get netflowSampleRate() {
    return this.getNumberAttribute('netflow_sample_rate');
  }

  // netflow_sampler - computed: true, optional: false, required: false
  public get netflowSampler() {
    return this.getStringAttribute('netflow_sampler');
  }

  // netflow_sampler_id - computed: true, optional: false, required: false
  public get netflowSamplerId() {
    return this.getNumberAttribute('netflow_sampler_id');
  }

  // outbandwidth - computed: true, optional: false, required: false
  public get outbandwidth() {
    return this.getNumberAttribute('outbandwidth');
  }

  // padt_retry_timeout - computed: true, optional: false, required: false
  public get padtRetryTimeout() {
    return this.getNumberAttribute('padt_retry_timeout');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // phy_setting - computed: true, optional: false, required: false
  private _phySetting = new DataFortiosSystemInterfacePhySettingList(this, "phy_setting", false);
  public get phySetting() {
    return this._phySetting;
  }

  // ping_serv_status - computed: true, optional: false, required: false
  public get pingServStatus() {
    return this.getNumberAttribute('ping_serv_status');
  }

  // polling_interval - computed: true, optional: false, required: false
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }

  // pppoe_egress_cos - computed: true, optional: false, required: false
  public get pppoeEgressCos() {
    return this.getStringAttribute('pppoe_egress_cos');
  }

  // pppoe_unnumbered_negotiate - computed: true, optional: false, required: false
  public get pppoeUnnumberedNegotiate() {
    return this.getStringAttribute('pppoe_unnumbered_negotiate');
  }

  // pptp_auth_type - computed: true, optional: false, required: false
  public get pptpAuthType() {
    return this.getStringAttribute('pptp_auth_type');
  }

  // pptp_client - computed: true, optional: false, required: false
  public get pptpClient() {
    return this.getStringAttribute('pptp_client');
  }

  // pptp_password - computed: true, optional: false, required: false
  public get pptpPassword() {
    return this.getStringAttribute('pptp_password');
  }

  // pptp_server_ip - computed: true, optional: false, required: false
  public get pptpServerIp() {
    return this.getStringAttribute('pptp_server_ip');
  }

  // pptp_timeout - computed: true, optional: false, required: false
  public get pptpTimeout() {
    return this.getNumberAttribute('pptp_timeout');
  }

  // pptp_user - computed: true, optional: false, required: false
  public get pptpUser() {
    return this.getStringAttribute('pptp_user');
  }

  // preserve_session_route - computed: true, optional: false, required: false
  public get preserveSessionRoute() {
    return this.getStringAttribute('preserve_session_route');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // priority_override - computed: true, optional: false, required: false
  public get priorityOverride() {
    return this.getStringAttribute('priority_override');
  }

  // proxy_captive_portal - computed: true, optional: false, required: false
  public get proxyCaptivePortal() {
    return this.getStringAttribute('proxy_captive_portal');
  }

  // reachable_time - computed: true, optional: false, required: false
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }

  // redundant_interface - computed: true, optional: false, required: false
  public get redundantInterface() {
    return this.getStringAttribute('redundant_interface');
  }

  // remote_ip - computed: true, optional: false, required: false
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }

  // replacemsg_override_group - computed: true, optional: false, required: false
  public get replacemsgOverrideGroup() {
    return this.getStringAttribute('replacemsg_override_group');
  }

  // ring_rx - computed: true, optional: false, required: false
  public get ringRx() {
    return this.getNumberAttribute('ring_rx');
  }

  // ring_tx - computed: true, optional: false, required: false
  public get ringTx() {
    return this.getNumberAttribute('ring_tx');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // sample_direction - computed: true, optional: false, required: false
  public get sampleDirection() {
    return this.getStringAttribute('sample_direction');
  }

  // sample_rate - computed: true, optional: false, required: false
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }

  // scan_botnet_connections - computed: true, optional: false, required: false
  public get scanBotnetConnections() {
    return this.getStringAttribute('scan_botnet_connections');
  }

  // secondary_ip - computed: true, optional: false, required: false
  public get secondaryIp() {
    return this.getStringAttribute('secondary_ip');
  }

  // secondaryip - computed: true, optional: false, required: false
  private _secondaryip = new DataFortiosSystemInterfaceSecondaryipList(this, "secondaryip", false);
  public get secondaryip() {
    return this._secondaryip;
  }

  // security_exempt_list - computed: true, optional: false, required: false
  public get securityExemptList() {
    return this.getStringAttribute('security_exempt_list');
  }

  // security_external_logout - computed: true, optional: false, required: false
  public get securityExternalLogout() {
    return this.getStringAttribute('security_external_logout');
  }

  // security_external_web - computed: true, optional: false, required: false
  public get securityExternalWeb() {
    return this.getStringAttribute('security_external_web');
  }

  // security_groups - computed: true, optional: false, required: false
  private _securityGroups = new DataFortiosSystemInterfaceSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }

  // security_ip_auth_bypass - computed: true, optional: false, required: false
  public get securityIpAuthBypass() {
    return this.getStringAttribute('security_ip_auth_bypass');
  }

  // security_mac_auth_bypass - computed: true, optional: false, required: false
  public get securityMacAuthBypass() {
    return this.getStringAttribute('security_mac_auth_bypass');
  }

  // security_mode - computed: true, optional: false, required: false
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }

  // security_redirect_url - computed: true, optional: false, required: false
  public get securityRedirectUrl() {
    return this.getStringAttribute('security_redirect_url');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // sflow_sampler - computed: true, optional: false, required: false
  public get sflowSampler() {
    return this.getStringAttribute('sflow_sampler');
  }

  // snmp_index - computed: true, optional: false, required: false
  public get snmpIndex() {
    return this.getNumberAttribute('snmp_index');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // spillover_threshold - computed: true, optional: false, required: false
  public get spilloverThreshold() {
    return this.getNumberAttribute('spillover_threshold');
  }

  // src_check - computed: true, optional: false, required: false
  public get srcCheck() {
    return this.getStringAttribute('src_check');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stp - computed: true, optional: false, required: false
  public get stp() {
    return this.getStringAttribute('stp');
  }

  // stp_ha_secondary - computed: true, optional: false, required: false
  public get stpHaSecondary() {
    return this.getStringAttribute('stp_ha_secondary');
  }

  // stpforward - computed: true, optional: false, required: false
  public get stpforward() {
    return this.getStringAttribute('stpforward');
  }

  // stpforward_mode - computed: true, optional: false, required: false
  public get stpforwardMode() {
    return this.getStringAttribute('stpforward_mode');
  }

  // subst - computed: true, optional: false, required: false
  public get subst() {
    return this.getStringAttribute('subst');
  }

  // substitute_dst_mac - computed: true, optional: false, required: false
  public get substituteDstMac() {
    return this.getStringAttribute('substitute_dst_mac');
  }

  // swc_first_create - computed: true, optional: false, required: false
  public get swcFirstCreate() {
    return this.getNumberAttribute('swc_first_create');
  }

  // swc_vlan - computed: true, optional: false, required: false
  public get swcVlan() {
    return this.getNumberAttribute('swc_vlan');
  }

  // switch - computed: true, optional: false, required: false
  public get switch() {
    return this.getStringAttribute('switch');
  }

  // switch_controller_access_vlan - computed: true, optional: false, required: false
  public get switchControllerAccessVlan() {
    return this.getStringAttribute('switch_controller_access_vlan');
  }

  // switch_controller_arp_inspection - computed: true, optional: false, required: false
  public get switchControllerArpInspection() {
    return this.getStringAttribute('switch_controller_arp_inspection');
  }

  // switch_controller_dhcp_snooping - computed: true, optional: false, required: false
  public get switchControllerDhcpSnooping() {
    return this.getStringAttribute('switch_controller_dhcp_snooping');
  }

  // switch_controller_dhcp_snooping_option82 - computed: true, optional: false, required: false
  public get switchControllerDhcpSnoopingOption82() {
    return this.getStringAttribute('switch_controller_dhcp_snooping_option82');
  }

  // switch_controller_dhcp_snooping_verify_mac - computed: true, optional: false, required: false
  public get switchControllerDhcpSnoopingVerifyMac() {
    return this.getStringAttribute('switch_controller_dhcp_snooping_verify_mac');
  }

  // switch_controller_dynamic - computed: true, optional: false, required: false
  public get switchControllerDynamic() {
    return this.getStringAttribute('switch_controller_dynamic');
  }

  // switch_controller_feature - computed: true, optional: false, required: false
  public get switchControllerFeature() {
    return this.getStringAttribute('switch_controller_feature');
  }

  // switch_controller_igmp_snooping - computed: true, optional: false, required: false
  public get switchControllerIgmpSnooping() {
    return this.getStringAttribute('switch_controller_igmp_snooping');
  }

  // switch_controller_igmp_snooping_fast_leave - computed: true, optional: false, required: false
  public get switchControllerIgmpSnoopingFastLeave() {
    return this.getStringAttribute('switch_controller_igmp_snooping_fast_leave');
  }

  // switch_controller_igmp_snooping_proxy - computed: true, optional: false, required: false
  public get switchControllerIgmpSnoopingProxy() {
    return this.getStringAttribute('switch_controller_igmp_snooping_proxy');
  }

  // switch_controller_iot_scanning - computed: true, optional: false, required: false
  public get switchControllerIotScanning() {
    return this.getStringAttribute('switch_controller_iot_scanning');
  }

  // switch_controller_learning_limit - computed: true, optional: false, required: false
  public get switchControllerLearningLimit() {
    return this.getNumberAttribute('switch_controller_learning_limit');
  }

  // switch_controller_mgmt_vlan - computed: true, optional: false, required: false
  public get switchControllerMgmtVlan() {
    return this.getNumberAttribute('switch_controller_mgmt_vlan');
  }

  // switch_controller_nac - computed: true, optional: false, required: false
  public get switchControllerNac() {
    return this.getStringAttribute('switch_controller_nac');
  }

  // switch_controller_netflow_collect - computed: true, optional: false, required: false
  public get switchControllerNetflowCollect() {
    return this.getStringAttribute('switch_controller_netflow_collect');
  }

  // switch_controller_offload - computed: true, optional: false, required: false
  public get switchControllerOffload() {
    return this.getStringAttribute('switch_controller_offload');
  }

  // switch_controller_offload_gw - computed: true, optional: false, required: false
  public get switchControllerOffloadGw() {
    return this.getStringAttribute('switch_controller_offload_gw');
  }

  // switch_controller_offload_ip - computed: true, optional: false, required: false
  public get switchControllerOffloadIp() {
    return this.getStringAttribute('switch_controller_offload_ip');
  }

  // switch_controller_rspan_mode - computed: true, optional: false, required: false
  public get switchControllerRspanMode() {
    return this.getStringAttribute('switch_controller_rspan_mode');
  }

  // switch_controller_source_ip - computed: true, optional: false, required: false
  public get switchControllerSourceIp() {
    return this.getStringAttribute('switch_controller_source_ip');
  }

  // switch_controller_traffic_policy - computed: true, optional: false, required: false
  public get switchControllerTrafficPolicy() {
    return this.getStringAttribute('switch_controller_traffic_policy');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // system_id_type - computed: true, optional: false, required: false
  public get systemIdType() {
    return this.getStringAttribute('system_id_type');
  }

  // tagging - computed: true, optional: false, required: false
  private _tagging = new DataFortiosSystemInterfaceTaggingList(this, "tagging", false);
  public get tagging() {
    return this._tagging;
  }

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }

  // trunk - computed: true, optional: false, required: false
  public get trunk() {
    return this.getStringAttribute('trunk');
  }

  // trust_ip6_1 - computed: true, optional: false, required: false
  public get trustIp61() {
    return this.getStringAttribute('trust_ip6_1');
  }

  // trust_ip6_2 - computed: true, optional: false, required: false
  public get trustIp62() {
    return this.getStringAttribute('trust_ip6_2');
  }

  // trust_ip6_3 - computed: true, optional: false, required: false
  public get trustIp63() {
    return this.getStringAttribute('trust_ip6_3');
  }

  // trust_ip_1 - computed: true, optional: false, required: false
  public get trustIp1() {
    return this.getStringAttribute('trust_ip_1');
  }

  // trust_ip_2 - computed: true, optional: false, required: false
  public get trustIp2() {
    return this.getStringAttribute('trust_ip_2');
  }

  // trust_ip_3 - computed: true, optional: false, required: false
  public get trustIp3() {
    return this.getStringAttribute('trust_ip_3');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // vdom - computed: true, optional: false, required: false
  public get vdom() {
    return this.getStringAttribute('vdom');
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

  // vindex - computed: true, optional: false, required: false
  public get vindex() {
    return this.getNumberAttribute('vindex');
  }

  // virtual_mac - computed: true, optional: false, required: false
  public get virtualMac() {
    return this.getStringAttribute('virtual_mac');
  }

  // vlan_protocol - computed: true, optional: false, required: false
  public get vlanProtocol() {
    return this.getStringAttribute('vlan_protocol');
  }

  // vlanforward - computed: true, optional: false, required: false
  public get vlanforward() {
    return this.getStringAttribute('vlanforward');
  }

  // vlanid - computed: true, optional: false, required: false
  public get vlanid() {
    return this.getNumberAttribute('vlanid');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }

  // vrrp - computed: true, optional: false, required: false
  private _vrrp = new DataFortiosSystemInterfaceVrrpList(this, "vrrp", false);
  public get vrrp() {
    return this._vrrp;
  }

  // vrrp_virtual_mac - computed: true, optional: false, required: false
  public get vrrpVirtualMac() {
    return this.getStringAttribute('vrrp_virtual_mac');
  }

  // wccp - computed: true, optional: false, required: false
  public get wccp() {
    return this.getStringAttribute('wccp');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // wins_ip - computed: true, optional: false, required: false
  public get winsIp() {
    return this.getStringAttribute('wins_ip');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
