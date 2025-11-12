// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosRouterIsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_isis#id DataFortiosRouterIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_isis#vdomparam DataFortiosRouterIsis#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosRouterIsisIsisInterface {
}

export function dataFortiosRouterIsisIsisInterfaceToTerraform(struct?: DataFortiosRouterIsisIsisInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterIsisIsisInterfaceToHclTerraform(struct?: DataFortiosRouterIsisIsisInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterIsisIsisInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterIsisIsisInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterIsisIsisInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_keychain_l1 - computed: true, optional: false, required: false
  public get authKeychainL1() {
    return this.getStringAttribute('auth_keychain_l1');
  }

  // auth_keychain_l2 - computed: true, optional: false, required: false
  public get authKeychainL2() {
    return this.getStringAttribute('auth_keychain_l2');
  }

  // auth_mode_l1 - computed: true, optional: false, required: false
  public get authModeL1() {
    return this.getStringAttribute('auth_mode_l1');
  }

  // auth_mode_l2 - computed: true, optional: false, required: false
  public get authModeL2() {
    return this.getStringAttribute('auth_mode_l2');
  }

  // auth_password_l1 - computed: true, optional: false, required: false
  public get authPasswordL1() {
    return this.getStringAttribute('auth_password_l1');
  }

  // auth_password_l2 - computed: true, optional: false, required: false
  public get authPasswordL2() {
    return this.getStringAttribute('auth_password_l2');
  }

  // auth_send_only_l1 - computed: true, optional: false, required: false
  public get authSendOnlyL1() {
    return this.getStringAttribute('auth_send_only_l1');
  }

  // auth_send_only_l2 - computed: true, optional: false, required: false
  public get authSendOnlyL2() {
    return this.getStringAttribute('auth_send_only_l2');
  }

  // circuit_type - computed: true, optional: false, required: false
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }

  // csnp_interval_l1 - computed: true, optional: false, required: false
  public get csnpIntervalL1() {
    return this.getNumberAttribute('csnp_interval_l1');
  }

  // csnp_interval_l2 - computed: true, optional: false, required: false
  public get csnpIntervalL2() {
    return this.getNumberAttribute('csnp_interval_l2');
  }

  // hello_interval_l1 - computed: true, optional: false, required: false
  public get helloIntervalL1() {
    return this.getNumberAttribute('hello_interval_l1');
  }

  // hello_interval_l2 - computed: true, optional: false, required: false
  public get helloIntervalL2() {
    return this.getNumberAttribute('hello_interval_l2');
  }

  // hello_multiplier_l1 - computed: true, optional: false, required: false
  public get helloMultiplierL1() {
    return this.getNumberAttribute('hello_multiplier_l1');
  }

  // hello_multiplier_l2 - computed: true, optional: false, required: false
  public get helloMultiplierL2() {
    return this.getNumberAttribute('hello_multiplier_l2');
  }

  // hello_padding - computed: true, optional: false, required: false
  public get helloPadding() {
    return this.getStringAttribute('hello_padding');
  }

  // lsp_interval - computed: true, optional: false, required: false
  public get lspInterval() {
    return this.getNumberAttribute('lsp_interval');
  }

  // lsp_retransmit_interval - computed: true, optional: false, required: false
  public get lspRetransmitInterval() {
    return this.getNumberAttribute('lsp_retransmit_interval');
  }

  // mesh_group - computed: true, optional: false, required: false
  public get meshGroup() {
    return this.getStringAttribute('mesh_group');
  }

  // mesh_group_id - computed: true, optional: false, required: false
  public get meshGroupId() {
    return this.getNumberAttribute('mesh_group_id');
  }

  // metric_l1 - computed: true, optional: false, required: false
  public get metricL1() {
    return this.getNumberAttribute('metric_l1');
  }

  // metric_l2 - computed: true, optional: false, required: false
  public get metricL2() {
    return this.getNumberAttribute('metric_l2');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // priority_l1 - computed: true, optional: false, required: false
  public get priorityL1() {
    return this.getNumberAttribute('priority_l1');
  }

  // priority_l2 - computed: true, optional: false, required: false
  public get priorityL2() {
    return this.getNumberAttribute('priority_l2');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status6 - computed: true, optional: false, required: false
  public get status6() {
    return this.getStringAttribute('status6');
  }

  // wide_metric_l1 - computed: true, optional: false, required: false
  public get wideMetricL1() {
    return this.getNumberAttribute('wide_metric_l1');
  }

  // wide_metric_l2 - computed: true, optional: false, required: false
  public get wideMetricL2() {
    return this.getNumberAttribute('wide_metric_l2');
  }
}

export class DataFortiosRouterIsisIsisInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterIsisIsisInterfaceOutputReference {
    return new DataFortiosRouterIsisIsisInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterIsisIsisNet {
}

export function dataFortiosRouterIsisIsisNetToTerraform(struct?: DataFortiosRouterIsisIsisNet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterIsisIsisNetToHclTerraform(struct?: DataFortiosRouterIsisIsisNet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterIsisIsisNetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterIsisIsisNet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterIsisIsisNet | undefined) {
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

  // net - computed: true, optional: false, required: false
  public get net() {
    return this.getStringAttribute('net');
  }
}

export class DataFortiosRouterIsisIsisNetList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterIsisIsisNetOutputReference {
    return new DataFortiosRouterIsisIsisNetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterIsisRedistribute {
}

export function dataFortiosRouterIsisRedistributeToTerraform(struct?: DataFortiosRouterIsisRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterIsisRedistributeToHclTerraform(struct?: DataFortiosRouterIsisRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterIsisRedistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterIsisRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterIsisRedistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // routemap - computed: true, optional: false, required: false
  public get routemap() {
    return this.getStringAttribute('routemap');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataFortiosRouterIsisRedistributeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterIsisRedistributeOutputReference {
    return new DataFortiosRouterIsisRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterIsisRedistribute6 {
}

export function dataFortiosRouterIsisRedistribute6ToTerraform(struct?: DataFortiosRouterIsisRedistribute6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterIsisRedistribute6ToHclTerraform(struct?: DataFortiosRouterIsisRedistribute6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterIsisRedistribute6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterIsisRedistribute6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterIsisRedistribute6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // routemap - computed: true, optional: false, required: false
  public get routemap() {
    return this.getStringAttribute('routemap');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataFortiosRouterIsisRedistribute6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterIsisRedistribute6OutputReference {
    return new DataFortiosRouterIsisRedistribute6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterIsisSummaryAddress {
}

export function dataFortiosRouterIsisSummaryAddressToTerraform(struct?: DataFortiosRouterIsisSummaryAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterIsisSummaryAddressToHclTerraform(struct?: DataFortiosRouterIsisSummaryAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterIsisSummaryAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterIsisSummaryAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterIsisSummaryAddress | undefined) {
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

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataFortiosRouterIsisSummaryAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterIsisSummaryAddressOutputReference {
    return new DataFortiosRouterIsisSummaryAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosRouterIsisSummaryAddress6 {
}

export function dataFortiosRouterIsisSummaryAddress6ToTerraform(struct?: DataFortiosRouterIsisSummaryAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterIsisSummaryAddress6ToHclTerraform(struct?: DataFortiosRouterIsisSummaryAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterIsisSummaryAddress6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosRouterIsisSummaryAddress6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterIsisSummaryAddress6 | undefined) {
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

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // prefix6 - computed: true, optional: false, required: false
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }
}

export class DataFortiosRouterIsisSummaryAddress6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterIsisSummaryAddress6OutputReference {
    return new DataFortiosRouterIsisSummaryAddress6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_isis fortios_router_isis}
*/
export class DataFortiosRouterIsis extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosRouterIsis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosRouterIsis to import
  * @param importFromId The id of the existing DataFortiosRouterIsis that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosRouterIsis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_isis fortios_router_isis} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosRouterIsisConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosRouterIsisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_isis',
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

  // adjacency_check - computed: true, optional: false, required: false
  public get adjacencyCheck() {
    return this.getStringAttribute('adjacency_check');
  }

  // adjacency_check6 - computed: true, optional: false, required: false
  public get adjacencyCheck6() {
    return this.getStringAttribute('adjacency_check6');
  }

  // adv_passive_only - computed: true, optional: false, required: false
  public get advPassiveOnly() {
    return this.getStringAttribute('adv_passive_only');
  }

  // adv_passive_only6 - computed: true, optional: false, required: false
  public get advPassiveOnly6() {
    return this.getStringAttribute('adv_passive_only6');
  }

  // auth_keychain_l1 - computed: true, optional: false, required: false
  public get authKeychainL1() {
    return this.getStringAttribute('auth_keychain_l1');
  }

  // auth_keychain_l2 - computed: true, optional: false, required: false
  public get authKeychainL2() {
    return this.getStringAttribute('auth_keychain_l2');
  }

  // auth_mode_l1 - computed: true, optional: false, required: false
  public get authModeL1() {
    return this.getStringAttribute('auth_mode_l1');
  }

  // auth_mode_l2 - computed: true, optional: false, required: false
  public get authModeL2() {
    return this.getStringAttribute('auth_mode_l2');
  }

  // auth_password_l1 - computed: true, optional: false, required: false
  public get authPasswordL1() {
    return this.getStringAttribute('auth_password_l1');
  }

  // auth_password_l2 - computed: true, optional: false, required: false
  public get authPasswordL2() {
    return this.getStringAttribute('auth_password_l2');
  }

  // auth_sendonly_l1 - computed: true, optional: false, required: false
  public get authSendonlyL1() {
    return this.getStringAttribute('auth_sendonly_l1');
  }

  // auth_sendonly_l2 - computed: true, optional: false, required: false
  public get authSendonlyL2() {
    return this.getStringAttribute('auth_sendonly_l2');
  }

  // default_originate - computed: true, optional: false, required: false
  public get defaultOriginate() {
    return this.getStringAttribute('default_originate');
  }

  // default_originate6 - computed: true, optional: false, required: false
  public get defaultOriginate6() {
    return this.getStringAttribute('default_originate6');
  }

  // dynamic_hostname - computed: true, optional: false, required: false
  public get dynamicHostname() {
    return this.getStringAttribute('dynamic_hostname');
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

  // ignore_lsp_errors - computed: true, optional: false, required: false
  public get ignoreLspErrors() {
    return this.getStringAttribute('ignore_lsp_errors');
  }

  // is_type - computed: true, optional: false, required: false
  public get isType() {
    return this.getStringAttribute('is_type');
  }

  // isis_interface - computed: true, optional: false, required: false
  private _isisInterface = new DataFortiosRouterIsisIsisInterfaceList(this, "isis_interface", false);
  public get isisInterface() {
    return this._isisInterface;
  }

  // isis_net - computed: true, optional: false, required: false
  private _isisNet = new DataFortiosRouterIsisIsisNetList(this, "isis_net", false);
  public get isisNet() {
    return this._isisNet;
  }

  // lsp_gen_interval_l1 - computed: true, optional: false, required: false
  public get lspGenIntervalL1() {
    return this.getNumberAttribute('lsp_gen_interval_l1');
  }

  // lsp_gen_interval_l2 - computed: true, optional: false, required: false
  public get lspGenIntervalL2() {
    return this.getNumberAttribute('lsp_gen_interval_l2');
  }

  // lsp_refresh_interval - computed: true, optional: false, required: false
  public get lspRefreshInterval() {
    return this.getNumberAttribute('lsp_refresh_interval');
  }

  // max_lsp_lifetime - computed: true, optional: false, required: false
  public get maxLspLifetime() {
    return this.getNumberAttribute('max_lsp_lifetime');
  }

  // metric_style - computed: true, optional: false, required: false
  public get metricStyle() {
    return this.getStringAttribute('metric_style');
  }

  // overload_bit - computed: true, optional: false, required: false
  public get overloadBit() {
    return this.getStringAttribute('overload_bit');
  }

  // overload_bit_on_startup - computed: true, optional: false, required: false
  public get overloadBitOnStartup() {
    return this.getNumberAttribute('overload_bit_on_startup');
  }

  // overload_bit_suppress - computed: true, optional: false, required: false
  public get overloadBitSuppress() {
    return this.getStringAttribute('overload_bit_suppress');
  }

  // redistribute - computed: true, optional: false, required: false
  private _redistribute = new DataFortiosRouterIsisRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }

  // redistribute6 - computed: true, optional: false, required: false
  private _redistribute6 = new DataFortiosRouterIsisRedistribute6List(this, "redistribute6", false);
  public get redistribute6() {
    return this._redistribute6;
  }

  // redistribute6_l1 - computed: true, optional: false, required: false
  public get redistribute6L1() {
    return this.getStringAttribute('redistribute6_l1');
  }

  // redistribute6_l1_list - computed: true, optional: false, required: false
  public get redistribute6L1List() {
    return this.getStringAttribute('redistribute6_l1_list');
  }

  // redistribute6_l2 - computed: true, optional: false, required: false
  public get redistribute6L2() {
    return this.getStringAttribute('redistribute6_l2');
  }

  // redistribute6_l2_list - computed: true, optional: false, required: false
  public get redistribute6L2List() {
    return this.getStringAttribute('redistribute6_l2_list');
  }

  // redistribute_l1 - computed: true, optional: false, required: false
  public get redistributeL1() {
    return this.getStringAttribute('redistribute_l1');
  }

  // redistribute_l1_list - computed: true, optional: false, required: false
  public get redistributeL1List() {
    return this.getStringAttribute('redistribute_l1_list');
  }

  // redistribute_l2 - computed: true, optional: false, required: false
  public get redistributeL2() {
    return this.getStringAttribute('redistribute_l2');
  }

  // redistribute_l2_list - computed: true, optional: false, required: false
  public get redistributeL2List() {
    return this.getStringAttribute('redistribute_l2_list');
  }

  // spf_interval_exp_l1 - computed: true, optional: false, required: false
  public get spfIntervalExpL1() {
    return this.getStringAttribute('spf_interval_exp_l1');
  }

  // spf_interval_exp_l2 - computed: true, optional: false, required: false
  public get spfIntervalExpL2() {
    return this.getStringAttribute('spf_interval_exp_l2');
  }

  // summary_address - computed: true, optional: false, required: false
  private _summaryAddress = new DataFortiosRouterIsisSummaryAddressList(this, "summary_address", false);
  public get summaryAddress() {
    return this._summaryAddress;
  }

  // summary_address6 - computed: true, optional: false, required: false
  private _summaryAddress6 = new DataFortiosRouterIsisSummaryAddress6List(this, "summary_address6", false);
  public get summaryAddress6() {
    return this._summaryAddress6;
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
