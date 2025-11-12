// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchRouterIsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_isis#id DataFortiswitchRouterIsis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataFortiswitchRouterIsisInterface {
}

export function dataFortiswitchRouterIsisInterfaceToTerraform(struct?: DataFortiswitchRouterIsisInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterIsisInterfaceToHclTerraform(struct?: DataFortiswitchRouterIsisInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterIsisInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterIsisInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterIsisInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_keychain_hello - computed: true, optional: false, required: false
  public get authKeychainHello() {
    return this.getStringAttribute('auth_keychain_hello');
  }

  // auth_mode_hello - computed: true, optional: false, required: false
  public get authModeHello() {
    return this.getStringAttribute('auth_mode_hello');
  }

  // auth_password_hello - computed: true, optional: false, required: false
  public get authPasswordHello() {
    return this.getStringAttribute('auth_password_hello');
  }

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // bfd6 - computed: true, optional: false, required: false
  public get bfd6() {
    return this.getStringAttribute('bfd6');
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

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getStringAttribute('passive');
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

export class DataFortiswitchRouterIsisInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterIsisInterfaceOutputReference {
    return new DataFortiswitchRouterIsisInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterIsisNet {
}

export function dataFortiswitchRouterIsisNetToTerraform(struct?: DataFortiswitchRouterIsisNet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterIsisNetToHclTerraform(struct?: DataFortiswitchRouterIsisNet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterIsisNetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterIsisNet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterIsisNet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // net - computed: true, optional: false, required: false
  public get net() {
    return this.getStringAttribute('net');
  }
}

export class DataFortiswitchRouterIsisNetList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterIsisNetOutputReference {
    return new DataFortiswitchRouterIsisNetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterIsisRedistribute {
}

export function dataFortiswitchRouterIsisRedistributeToTerraform(struct?: DataFortiswitchRouterIsisRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterIsisRedistributeToHclTerraform(struct?: DataFortiswitchRouterIsisRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterIsisRedistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterIsisRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterIsisRedistribute | undefined) {
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

export class DataFortiswitchRouterIsisRedistributeList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterIsisRedistributeOutputReference {
    return new DataFortiswitchRouterIsisRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterIsisRedistribute6 {
}

export function dataFortiswitchRouterIsisRedistribute6ToTerraform(struct?: DataFortiswitchRouterIsisRedistribute6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterIsisRedistribute6ToHclTerraform(struct?: DataFortiswitchRouterIsisRedistribute6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterIsisRedistribute6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterIsisRedistribute6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterIsisRedistribute6 | undefined) {
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

export class DataFortiswitchRouterIsisRedistribute6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterIsisRedistribute6OutputReference {
    return new DataFortiswitchRouterIsisRedistribute6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterIsisSummaryAddress {
}

export function dataFortiswitchRouterIsisSummaryAddressToTerraform(struct?: DataFortiswitchRouterIsisSummaryAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterIsisSummaryAddressToHclTerraform(struct?: DataFortiswitchRouterIsisSummaryAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterIsisSummaryAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterIsisSummaryAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterIsisSummaryAddress | undefined) {
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

export class DataFortiswitchRouterIsisSummaryAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterIsisSummaryAddressOutputReference {
    return new DataFortiswitchRouterIsisSummaryAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterIsisSummaryAddress6 {
}

export function dataFortiswitchRouterIsisSummaryAddress6ToTerraform(struct?: DataFortiswitchRouterIsisSummaryAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterIsisSummaryAddress6ToHclTerraform(struct?: DataFortiswitchRouterIsisSummaryAddress6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterIsisSummaryAddress6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterIsisSummaryAddress6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterIsisSummaryAddress6 | undefined) {
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

export class DataFortiswitchRouterIsisSummaryAddress6List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterIsisSummaryAddress6OutputReference {
    return new DataFortiswitchRouterIsisSummaryAddress6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_isis fortiswitch_router_isis}
*/
export class DataFortiswitchRouterIsis extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_router_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchRouterIsis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchRouterIsis to import
  * @param importFromId The id of the existing DataFortiswitchRouterIsis that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchRouterIsis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_router_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_isis fortiswitch_router_isis} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchRouterIsisConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchRouterIsisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_router_isis',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
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

  // auth_keychain_area - computed: true, optional: false, required: false
  public get authKeychainArea() {
    return this.getStringAttribute('auth_keychain_area');
  }

  // auth_keychain_domain - computed: true, optional: false, required: false
  public get authKeychainDomain() {
    return this.getStringAttribute('auth_keychain_domain');
  }

  // auth_mode_area - computed: true, optional: false, required: false
  public get authModeArea() {
    return this.getStringAttribute('auth_mode_area');
  }

  // auth_mode_domain - computed: true, optional: false, required: false
  public get authModeDomain() {
    return this.getStringAttribute('auth_mode_domain');
  }

  // auth_password_area - computed: true, optional: false, required: false
  public get authPasswordArea() {
    return this.getStringAttribute('auth_password_area');
  }

  // auth_password_domain - computed: true, optional: false, required: false
  public get authPasswordDomain() {
    return this.getStringAttribute('auth_password_domain');
  }

  // auth_sendonly_area - computed: true, optional: false, required: false
  public get authSendonlyArea() {
    return this.getStringAttribute('auth_sendonly_area');
  }

  // auth_sendonly_domain - computed: true, optional: false, required: false
  public get authSendonlyDomain() {
    return this.getStringAttribute('auth_sendonly_domain');
  }

  // default_information_level - computed: true, optional: false, required: false
  public get defaultInformationLevel() {
    return this.getStringAttribute('default_information_level');
  }

  // default_information_level6 - computed: true, optional: false, required: false
  public get defaultInformationLevel6() {
    return this.getStringAttribute('default_information_level6');
  }

  // default_information_metric - computed: true, optional: false, required: false
  public get defaultInformationMetric() {
    return this.getNumberAttribute('default_information_metric');
  }

  // default_information_metric6 - computed: true, optional: false, required: false
  public get defaultInformationMetric6() {
    return this.getNumberAttribute('default_information_metric6');
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getStringAttribute('default_information_originate');
  }

  // default_information_originate6 - computed: true, optional: false, required: false
  public get defaultInformationOriginate6() {
    return this.getStringAttribute('default_information_originate6');
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

  // ignore_attached_bit - computed: true, optional: false, required: false
  public get ignoreAttachedBit() {
    return this.getStringAttribute('ignore_attached_bit');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataFortiswitchRouterIsisInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // is_type - computed: true, optional: false, required: false
  public get isType() {
    return this.getStringAttribute('is_type');
  }

  // log_neighbour_changes - computed: true, optional: false, required: false
  public get logNeighbourChanges() {
    return this.getStringAttribute('log_neighbour_changes');
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

  // net - computed: true, optional: false, required: false
  private _net = new DataFortiswitchRouterIsisNetList(this, "net", false);
  public get net() {
    return this._net;
  }

  // overload_bit - computed: true, optional: false, required: false
  public get overloadBit() {
    return this.getStringAttribute('overload_bit');
  }

  // redistribute - computed: true, optional: false, required: false
  private _redistribute = new DataFortiswitchRouterIsisRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }

  // redistribute6 - computed: true, optional: false, required: false
  private _redistribute6 = new DataFortiswitchRouterIsisRedistribute6List(this, "redistribute6", false);
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

  // redistribute_l1 - computed: true, optional: false, required: false
  public get redistributeL1() {
    return this.getStringAttribute('redistribute_l1');
  }

  // redistribute_l1_list - computed: true, optional: false, required: false
  public get redistributeL1List() {
    return this.getStringAttribute('redistribute_l1_list');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // spf_interval_exp_l1 - computed: true, optional: false, required: false
  public get spfIntervalExpL1() {
    return this.getNumberAttribute('spf_interval_exp_l1');
  }

  // spf_interval_exp_l2 - computed: true, optional: false, required: false
  public get spfIntervalExpL2() {
    return this.getNumberAttribute('spf_interval_exp_l2');
  }

  // summary_address - computed: true, optional: false, required: false
  private _summaryAddress = new DataFortiswitchRouterIsisSummaryAddressList(this, "summary_address", false);
  public get summaryAddress() {
    return this._summaryAddress;
  }

  // summary_address6 - computed: true, optional: false, required: false
  private _summaryAddress6 = new DataFortiswitchRouterIsisSummaryAddress6List(this, "summary_address6", false);
  public get summaryAddress6() {
    return this._summaryAddress6;
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
