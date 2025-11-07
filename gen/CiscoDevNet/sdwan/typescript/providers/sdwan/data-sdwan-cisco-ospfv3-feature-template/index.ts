// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospfv3_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoOspfv3FeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospfv3_feature_template#id DataSdwanCiscoOspfv3FeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospfv3_feature_template#name DataSdwanCiscoOspfv3FeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfaces {
}

export function dataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfacesToTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfacesToHclTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_key - computed: true, optional: false, required: false
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }

  // authentication_key_variable - computed: true, optional: false, required: false
  public get authenticationKeyVariable() {
    return this.getStringAttribute('authentication_key_variable');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // authentication_type_variable - computed: true, optional: false, required: false
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // cost_variable - computed: true, optional: false, required: false
  public get costVariable() {
    return this.getStringAttribute('cost_variable');
  }

  // dead_interval - computed: true, optional: false, required: false
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }

  // dead_interval_variable - computed: true, optional: false, required: false
  public get deadIntervalVariable() {
    return this.getStringAttribute('dead_interval_variable');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // hello_interval_variable - computed: true, optional: false, required: false
  public get helloIntervalVariable() {
    return this.getStringAttribute('hello_interval_variable');
  }

  // ipsec_spi - computed: true, optional: false, required: false
  public get ipsecSpi() {
    return this.getNumberAttribute('ipsec_spi');
  }

  // ipsec_spi_variable - computed: true, optional: false, required: false
  public get ipsecSpiVariable() {
    return this.getStringAttribute('ipsec_spi_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_variable - computed: true, optional: false, required: false
  public get networkVariable() {
    return this.getStringAttribute('network_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // passive_interface - computed: true, optional: false, required: false
  public get passiveInterface() {
    return this.getBooleanAttribute('passive_interface');
  }

  // passive_interface_variable - computed: true, optional: false, required: false
  public get passiveInterfaceVariable() {
    return this.getStringAttribute('passive_interface_variable');
  }

  // retransmit_interval - computed: true, optional: false, required: false
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }

  // retransmit_interval_variable - computed: true, optional: false, required: false
  public get retransmitIntervalVariable() {
    return this.getStringAttribute('retransmit_interval_variable');
  }
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfacesOutputReference {
    return new DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRanges {
}

export function dataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRangesToTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRangesToHclTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // cost_variable - computed: true, optional: false, required: false
  public get costVariable() {
    return this.getStringAttribute('cost_variable');
  }

  // no_advertise - computed: true, optional: false, required: false
  public get noAdvertise() {
    return this.getBooleanAttribute('no_advertise');
  }

  // no_advertise_variable - computed: true, optional: false, required: false
  public get noAdvertiseVariable() {
    return this.getStringAttribute('no_advertise_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRangesOutputReference {
    return new DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfv3FeatureTemplateIpv4Areas {
}

export function dataSdwanCiscoOspfv3FeatureTemplateIpv4AreasToTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv4Areas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfv3FeatureTemplateIpv4AreasToHclTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv4Areas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfv3FeatureTemplateIpv4Areas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfv3FeatureTemplateIpv4Areas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area_number - computed: true, optional: false, required: false
  public get areaNumber() {
    return this.getNumberAttribute('area_number');
  }

  // area_number_variable - computed: true, optional: false, required: false
  public get areaNumberVariable() {
    return this.getStringAttribute('area_number_variable');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // normal - computed: true, optional: false, required: false
  public get normal() {
    return this.getBooleanAttribute('normal');
  }

  // normal_variable - computed: true, optional: false, required: false
  public get normalVariable() {
    return this.getStringAttribute('normal_variable');
  }

  // nssa - computed: true, optional: false, required: false
  public get nssa() {
    return this.getBooleanAttribute('nssa');
  }

  // nssa_no_summary - computed: true, optional: false, required: false
  public get nssaNoSummary() {
    return this.getBooleanAttribute('nssa_no_summary');
  }

  // nssa_no_summary_variable - computed: true, optional: false, required: false
  public get nssaNoSummaryVariable() {
    return this.getStringAttribute('nssa_no_summary_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }

  // stub - computed: true, optional: false, required: false
  public get stub() {
    return this.getBooleanAttribute('stub');
  }

  // stub_no_summary - computed: true, optional: false, required: false
  public get stubNoSummary() {
    return this.getBooleanAttribute('stub_no_summary');
  }

  // stub_no_summary_variable - computed: true, optional: false, required: false
  public get stubNoSummaryVariable() {
    return this.getStringAttribute('stub_no_summary_variable');
  }

  // translate - computed: true, optional: false, required: false
  public get translate() {
    return this.getStringAttribute('translate');
  }

  // translate_variable - computed: true, optional: false, required: false
  public get translateVariable() {
    return this.getStringAttribute('translate_variable');
  }
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasOutputReference {
    return new DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas {
}

export function dataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasToTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasToHclTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_type - computed: true, optional: false, required: false
  public get adType() {
    return this.getStringAttribute('ad_type');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getNumberAttribute('time');
  }

  // time_variable - computed: true, optional: false, required: false
  public get timeVariable() {
    return this.getStringAttribute('time_variable');
  }
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasOutputReference {
    return new DataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfv3FeatureTemplateIpv4Redistributes {
}

export function dataSdwanCiscoOspfv3FeatureTemplateIpv4RedistributesToTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv4Redistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfv3FeatureTemplateIpv4RedistributesToHclTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv4Redistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv4RedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfv3FeatureTemplateIpv4Redistributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfv3FeatureTemplateIpv4Redistributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nat_dia - computed: true, optional: false, required: false
  public get natDia() {
    return this.getBooleanAttribute('nat_dia');
  }

  // nat_dia_variable - computed: true, optional: false, required: false
  public get natDiaVariable() {
    return this.getStringAttribute('nat_dia_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }

  // route_policy_variable - computed: true, optional: false, required: false
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv4RedistributesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfv3FeatureTemplateIpv4RedistributesOutputReference {
    return new DataSdwanCiscoOspfv3FeatureTemplateIpv4RedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfaces {
}

export function dataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfacesToTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfacesToHclTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_key - computed: true, optional: false, required: false
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }

  // authentication_key_variable - computed: true, optional: false, required: false
  public get authenticationKeyVariable() {
    return this.getStringAttribute('authentication_key_variable');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // authentication_type_variable - computed: true, optional: false, required: false
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // cost_variable - computed: true, optional: false, required: false
  public get costVariable() {
    return this.getStringAttribute('cost_variable');
  }

  // dead_interval - computed: true, optional: false, required: false
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }

  // dead_interval_variable - computed: true, optional: false, required: false
  public get deadIntervalVariable() {
    return this.getStringAttribute('dead_interval_variable');
  }

  // hello_interval - computed: true, optional: false, required: false
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }

  // hello_interval_variable - computed: true, optional: false, required: false
  public get helloIntervalVariable() {
    return this.getStringAttribute('hello_interval_variable');
  }

  // ipsec_spi - computed: true, optional: false, required: false
  public get ipsecSpi() {
    return this.getNumberAttribute('ipsec_spi');
  }

  // ipsec_spi_variable - computed: true, optional: false, required: false
  public get ipsecSpiVariable() {
    return this.getStringAttribute('ipsec_spi_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_variable - computed: true, optional: false, required: false
  public get networkVariable() {
    return this.getStringAttribute('network_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // passive_interface - computed: true, optional: false, required: false
  public get passiveInterface() {
    return this.getBooleanAttribute('passive_interface');
  }

  // passive_interface_variable - computed: true, optional: false, required: false
  public get passiveInterfaceVariable() {
    return this.getStringAttribute('passive_interface_variable');
  }

  // retransmit_interval - computed: true, optional: false, required: false
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }

  // retransmit_interval_variable - computed: true, optional: false, required: false
  public get retransmitIntervalVariable() {
    return this.getStringAttribute('retransmit_interval_variable');
  }
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfacesOutputReference {
    return new DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRanges {
}

export function dataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRangesToTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRangesToHclTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_variable - computed: true, optional: false, required: false
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // cost_variable - computed: true, optional: false, required: false
  public get costVariable() {
    return this.getStringAttribute('cost_variable');
  }

  // no_advertise - computed: true, optional: false, required: false
  public get noAdvertise() {
    return this.getBooleanAttribute('no_advertise');
  }

  // no_advertise_variable - computed: true, optional: false, required: false
  public get noAdvertiseVariable() {
    return this.getStringAttribute('no_advertise_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRangesOutputReference {
    return new DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfv3FeatureTemplateIpv6Areas {
}

export function dataSdwanCiscoOspfv3FeatureTemplateIpv6AreasToTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv6Areas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfv3FeatureTemplateIpv6AreasToHclTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv6Areas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfv3FeatureTemplateIpv6Areas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfv3FeatureTemplateIpv6Areas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area_number - computed: true, optional: false, required: false
  public get areaNumber() {
    return this.getNumberAttribute('area_number');
  }

  // area_number_variable - computed: true, optional: false, required: false
  public get areaNumberVariable() {
    return this.getStringAttribute('area_number_variable');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // normal - computed: true, optional: false, required: false
  public get normal() {
    return this.getBooleanAttribute('normal');
  }

  // normal_variable - computed: true, optional: false, required: false
  public get normalVariable() {
    return this.getStringAttribute('normal_variable');
  }

  // nssa - computed: true, optional: false, required: false
  public get nssa() {
    return this.getBooleanAttribute('nssa');
  }

  // nssa_no_summary - computed: true, optional: false, required: false
  public get nssaNoSummary() {
    return this.getBooleanAttribute('nssa_no_summary');
  }

  // nssa_no_summary_variable - computed: true, optional: false, required: false
  public get nssaNoSummaryVariable() {
    return this.getStringAttribute('nssa_no_summary_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // ranges - computed: true, optional: false, required: false
  private _ranges = new DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }

  // stub - computed: true, optional: false, required: false
  public get stub() {
    return this.getBooleanAttribute('stub');
  }

  // stub_no_summary - computed: true, optional: false, required: false
  public get stubNoSummary() {
    return this.getBooleanAttribute('stub_no_summary');
  }

  // stub_no_summary_variable - computed: true, optional: false, required: false
  public get stubNoSummaryVariable() {
    return this.getStringAttribute('stub_no_summary_variable');
  }

  // translate - computed: true, optional: false, required: false
  public get translate() {
    return this.getStringAttribute('translate');
  }

  // translate_variable - computed: true, optional: false, required: false
  public get translateVariable() {
    return this.getStringAttribute('translate_variable');
  }
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasOutputReference {
    return new DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas {
}

export function dataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasToTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasToHclTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_type - computed: true, optional: false, required: false
  public get adType() {
    return this.getStringAttribute('ad_type');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getNumberAttribute('time');
  }

  // time_variable - computed: true, optional: false, required: false
  public get timeVariable() {
    return this.getStringAttribute('time_variable');
  }
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasOutputReference {
    return new DataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfv3FeatureTemplateIpv6Redistributes {
}

export function dataSdwanCiscoOspfv3FeatureTemplateIpv6RedistributesToTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv6Redistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfv3FeatureTemplateIpv6RedistributesToHclTerraform(struct?: DataSdwanCiscoOspfv3FeatureTemplateIpv6Redistributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv6RedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfv3FeatureTemplateIpv6Redistributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfv3FeatureTemplateIpv6Redistributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_variable - computed: true, optional: false, required: false
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }

  // route_policy_variable - computed: true, optional: false, required: false
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
}

export class DataSdwanCiscoOspfv3FeatureTemplateIpv6RedistributesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfv3FeatureTemplateIpv6RedistributesOutputReference {
    return new DataSdwanCiscoOspfv3FeatureTemplateIpv6RedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospfv3_feature_template sdwan_cisco_ospfv3_feature_template}
*/
export class DataSdwanCiscoOspfv3FeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_ospfv3_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoOspfv3FeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoOspfv3FeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoOspfv3FeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospfv3_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoOspfv3FeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_ospfv3_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospfv3_feature_template sdwan_cisco_ospfv3_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoOspfv3FeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoOspfv3FeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_ospfv3_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
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

  // ipv4_areas - computed: true, optional: false, required: false
  private _ipv4Areas = new DataSdwanCiscoOspfv3FeatureTemplateIpv4AreasList(this, "ipv4_areas", false);
  public get ipv4Areas() {
    return this._ipv4Areas;
  }

  // ipv4_auto_cost_reference_bandwidth - computed: true, optional: false, required: false
  public get ipv4AutoCostReferenceBandwidth() {
    return this.getNumberAttribute('ipv4_auto_cost_reference_bandwidth');
  }

  // ipv4_auto_cost_reference_bandwidth_variable - computed: true, optional: false, required: false
  public get ipv4AutoCostReferenceBandwidthVariable() {
    return this.getStringAttribute('ipv4_auto_cost_reference_bandwidth_variable');
  }

  // ipv4_compatible_rfc1583 - computed: true, optional: false, required: false
  public get ipv4CompatibleRfc1583() {
    return this.getBooleanAttribute('ipv4_compatible_rfc1583');
  }

  // ipv4_compatible_rfc1583_variable - computed: true, optional: false, required: false
  public get ipv4CompatibleRfc1583Variable() {
    return this.getStringAttribute('ipv4_compatible_rfc1583_variable');
  }

  // ipv4_default_information_originate - computed: true, optional: false, required: false
  public get ipv4DefaultInformationOriginate() {
    return this.getBooleanAttribute('ipv4_default_information_originate');
  }

  // ipv4_default_information_originate_always - computed: true, optional: false, required: false
  public get ipv4DefaultInformationOriginateAlways() {
    return this.getBooleanAttribute('ipv4_default_information_originate_always');
  }

  // ipv4_default_information_originate_always_variable - computed: true, optional: false, required: false
  public get ipv4DefaultInformationOriginateAlwaysVariable() {
    return this.getStringAttribute('ipv4_default_information_originate_always_variable');
  }

  // ipv4_default_information_originate_metric - computed: true, optional: false, required: false
  public get ipv4DefaultInformationOriginateMetric() {
    return this.getNumberAttribute('ipv4_default_information_originate_metric');
  }

  // ipv4_default_information_originate_metric_type - computed: true, optional: false, required: false
  public get ipv4DefaultInformationOriginateMetricType() {
    return this.getStringAttribute('ipv4_default_information_originate_metric_type');
  }

  // ipv4_default_information_originate_metric_type_variable - computed: true, optional: false, required: false
  public get ipv4DefaultInformationOriginateMetricTypeVariable() {
    return this.getStringAttribute('ipv4_default_information_originate_metric_type_variable');
  }

  // ipv4_default_information_originate_metric_variable - computed: true, optional: false, required: false
  public get ipv4DefaultInformationOriginateMetricVariable() {
    return this.getStringAttribute('ipv4_default_information_originate_metric_variable');
  }

  // ipv4_distance - computed: true, optional: false, required: false
  public get ipv4Distance() {
    return this.getNumberAttribute('ipv4_distance');
  }

  // ipv4_distance_external - computed: true, optional: false, required: false
  public get ipv4DistanceExternal() {
    return this.getNumberAttribute('ipv4_distance_external');
  }

  // ipv4_distance_external_variable - computed: true, optional: false, required: false
  public get ipv4DistanceExternalVariable() {
    return this.getStringAttribute('ipv4_distance_external_variable');
  }

  // ipv4_distance_inter_area - computed: true, optional: false, required: false
  public get ipv4DistanceInterArea() {
    return this.getNumberAttribute('ipv4_distance_inter_area');
  }

  // ipv4_distance_inter_area_variable - computed: true, optional: false, required: false
  public get ipv4DistanceInterAreaVariable() {
    return this.getStringAttribute('ipv4_distance_inter_area_variable');
  }

  // ipv4_distance_intra_area - computed: true, optional: false, required: false
  public get ipv4DistanceIntraArea() {
    return this.getNumberAttribute('ipv4_distance_intra_area');
  }

  // ipv4_distance_intra_area_variable - computed: true, optional: false, required: false
  public get ipv4DistanceIntraAreaVariable() {
    return this.getStringAttribute('ipv4_distance_intra_area_variable');
  }

  // ipv4_distance_variable - computed: true, optional: false, required: false
  public get ipv4DistanceVariable() {
    return this.getStringAttribute('ipv4_distance_variable');
  }

  // ipv4_filter - computed: true, optional: false, required: false
  public get ipv4Filter() {
    return this.getBooleanAttribute('ipv4_filter');
  }

  // ipv4_filter_variable - computed: true, optional: false, required: false
  public get ipv4FilterVariable() {
    return this.getStringAttribute('ipv4_filter_variable');
  }

  // ipv4_max_metric_router_lsas - computed: true, optional: false, required: false
  private _ipv4MaxMetricRouterLsas = new DataSdwanCiscoOspfv3FeatureTemplateIpv4MaxMetricRouterLsasList(this, "ipv4_max_metric_router_lsas", false);
  public get ipv4MaxMetricRouterLsas() {
    return this._ipv4MaxMetricRouterLsas;
  }

  // ipv4_policy_name - computed: true, optional: false, required: false
  public get ipv4PolicyName() {
    return this.getStringAttribute('ipv4_policy_name');
  }

  // ipv4_policy_name_variable - computed: true, optional: false, required: false
  public get ipv4PolicyNameVariable() {
    return this.getStringAttribute('ipv4_policy_name_variable');
  }

  // ipv4_redistributes - computed: true, optional: false, required: false
  private _ipv4Redistributes = new DataSdwanCiscoOspfv3FeatureTemplateIpv4RedistributesList(this, "ipv4_redistributes", false);
  public get ipv4Redistributes() {
    return this._ipv4Redistributes;
  }

  // ipv4_router_id - computed: true, optional: false, required: false
  public get ipv4RouterId() {
    return this.getStringAttribute('ipv4_router_id');
  }

  // ipv4_router_id_variable - computed: true, optional: false, required: false
  public get ipv4RouterIdVariable() {
    return this.getStringAttribute('ipv4_router_id_variable');
  }

  // ipv4_timers_spf_delay - computed: true, optional: false, required: false
  public get ipv4TimersSpfDelay() {
    return this.getNumberAttribute('ipv4_timers_spf_delay');
  }

  // ipv4_timers_spf_delay_variable - computed: true, optional: false, required: false
  public get ipv4TimersSpfDelayVariable() {
    return this.getStringAttribute('ipv4_timers_spf_delay_variable');
  }

  // ipv4_timers_spf_initial_hold - computed: true, optional: false, required: false
  public get ipv4TimersSpfInitialHold() {
    return this.getNumberAttribute('ipv4_timers_spf_initial_hold');
  }

  // ipv4_timers_spf_initial_hold_variable - computed: true, optional: false, required: false
  public get ipv4TimersSpfInitialHoldVariable() {
    return this.getStringAttribute('ipv4_timers_spf_initial_hold_variable');
  }

  // ipv4_timers_spf_max_hold - computed: true, optional: false, required: false
  public get ipv4TimersSpfMaxHold() {
    return this.getNumberAttribute('ipv4_timers_spf_max_hold');
  }

  // ipv4_timers_spf_max_hold_variable - computed: true, optional: false, required: false
  public get ipv4TimersSpfMaxHoldVariable() {
    return this.getStringAttribute('ipv4_timers_spf_max_hold_variable');
  }

  // ipv6_areas - computed: true, optional: false, required: false
  private _ipv6Areas = new DataSdwanCiscoOspfv3FeatureTemplateIpv6AreasList(this, "ipv6_areas", false);
  public get ipv6Areas() {
    return this._ipv6Areas;
  }

  // ipv6_auto_cost_reference_bandwidth - computed: true, optional: false, required: false
  public get ipv6AutoCostReferenceBandwidth() {
    return this.getNumberAttribute('ipv6_auto_cost_reference_bandwidth');
  }

  // ipv6_auto_cost_reference_bandwidth_variable - computed: true, optional: false, required: false
  public get ipv6AutoCostReferenceBandwidthVariable() {
    return this.getStringAttribute('ipv6_auto_cost_reference_bandwidth_variable');
  }

  // ipv6_compatible_rfc1583 - computed: true, optional: false, required: false
  public get ipv6CompatibleRfc1583() {
    return this.getBooleanAttribute('ipv6_compatible_rfc1583');
  }

  // ipv6_compatible_rfc1583_variable - computed: true, optional: false, required: false
  public get ipv6CompatibleRfc1583Variable() {
    return this.getStringAttribute('ipv6_compatible_rfc1583_variable');
  }

  // ipv6_default_information_originate - computed: true, optional: false, required: false
  public get ipv6DefaultInformationOriginate() {
    return this.getBooleanAttribute('ipv6_default_information_originate');
  }

  // ipv6_default_information_originate_always - computed: true, optional: false, required: false
  public get ipv6DefaultInformationOriginateAlways() {
    return this.getBooleanAttribute('ipv6_default_information_originate_always');
  }

  // ipv6_default_information_originate_always_variable - computed: true, optional: false, required: false
  public get ipv6DefaultInformationOriginateAlwaysVariable() {
    return this.getStringAttribute('ipv6_default_information_originate_always_variable');
  }

  // ipv6_default_information_originate_metric - computed: true, optional: false, required: false
  public get ipv6DefaultInformationOriginateMetric() {
    return this.getNumberAttribute('ipv6_default_information_originate_metric');
  }

  // ipv6_default_information_originate_metric_type - computed: true, optional: false, required: false
  public get ipv6DefaultInformationOriginateMetricType() {
    return this.getStringAttribute('ipv6_default_information_originate_metric_type');
  }

  // ipv6_default_information_originate_metric_type_variable - computed: true, optional: false, required: false
  public get ipv6DefaultInformationOriginateMetricTypeVariable() {
    return this.getStringAttribute('ipv6_default_information_originate_metric_type_variable');
  }

  // ipv6_default_information_originate_metric_variable - computed: true, optional: false, required: false
  public get ipv6DefaultInformationOriginateMetricVariable() {
    return this.getStringAttribute('ipv6_default_information_originate_metric_variable');
  }

  // ipv6_distance - computed: true, optional: false, required: false
  public get ipv6Distance() {
    return this.getNumberAttribute('ipv6_distance');
  }

  // ipv6_distance_external - computed: true, optional: false, required: false
  public get ipv6DistanceExternal() {
    return this.getNumberAttribute('ipv6_distance_external');
  }

  // ipv6_distance_external_variable - computed: true, optional: false, required: false
  public get ipv6DistanceExternalVariable() {
    return this.getStringAttribute('ipv6_distance_external_variable');
  }

  // ipv6_distance_inter_area - computed: true, optional: false, required: false
  public get ipv6DistanceInterArea() {
    return this.getNumberAttribute('ipv6_distance_inter_area');
  }

  // ipv6_distance_inter_area_variable - computed: true, optional: false, required: false
  public get ipv6DistanceInterAreaVariable() {
    return this.getStringAttribute('ipv6_distance_inter_area_variable');
  }

  // ipv6_distance_intra_area - computed: true, optional: false, required: false
  public get ipv6DistanceIntraArea() {
    return this.getNumberAttribute('ipv6_distance_intra_area');
  }

  // ipv6_distance_intra_area_variable - computed: true, optional: false, required: false
  public get ipv6DistanceIntraAreaVariable() {
    return this.getStringAttribute('ipv6_distance_intra_area_variable');
  }

  // ipv6_distance_variable - computed: true, optional: false, required: false
  public get ipv6DistanceVariable() {
    return this.getStringAttribute('ipv6_distance_variable');
  }

  // ipv6_filter - computed: true, optional: false, required: false
  public get ipv6Filter() {
    return this.getBooleanAttribute('ipv6_filter');
  }

  // ipv6_filter_variable - computed: true, optional: false, required: false
  public get ipv6FilterVariable() {
    return this.getStringAttribute('ipv6_filter_variable');
  }

  // ipv6_max_metric_router_lsas - computed: true, optional: false, required: false
  private _ipv6MaxMetricRouterLsas = new DataSdwanCiscoOspfv3FeatureTemplateIpv6MaxMetricRouterLsasList(this, "ipv6_max_metric_router_lsas", false);
  public get ipv6MaxMetricRouterLsas() {
    return this._ipv6MaxMetricRouterLsas;
  }

  // ipv6_policy_name - computed: true, optional: false, required: false
  public get ipv6PolicyName() {
    return this.getStringAttribute('ipv6_policy_name');
  }

  // ipv6_policy_name_variable - computed: true, optional: false, required: false
  public get ipv6PolicyNameVariable() {
    return this.getStringAttribute('ipv6_policy_name_variable');
  }

  // ipv6_redistributes - computed: true, optional: false, required: false
  private _ipv6Redistributes = new DataSdwanCiscoOspfv3FeatureTemplateIpv6RedistributesList(this, "ipv6_redistributes", false);
  public get ipv6Redistributes() {
    return this._ipv6Redistributes;
  }

  // ipv6_router_id - computed: true, optional: false, required: false
  public get ipv6RouterId() {
    return this.getStringAttribute('ipv6_router_id');
  }

  // ipv6_router_id_variable - computed: true, optional: false, required: false
  public get ipv6RouterIdVariable() {
    return this.getStringAttribute('ipv6_router_id_variable');
  }

  // ipv6_timers_spf_delay - computed: true, optional: false, required: false
  public get ipv6TimersSpfDelay() {
    return this.getNumberAttribute('ipv6_timers_spf_delay');
  }

  // ipv6_timers_spf_delay_variable - computed: true, optional: false, required: false
  public get ipv6TimersSpfDelayVariable() {
    return this.getStringAttribute('ipv6_timers_spf_delay_variable');
  }

  // ipv6_timers_spf_initial_hold - computed: true, optional: false, required: false
  public get ipv6TimersSpfInitialHold() {
    return this.getNumberAttribute('ipv6_timers_spf_initial_hold');
  }

  // ipv6_timers_spf_initial_hold_variable - computed: true, optional: false, required: false
  public get ipv6TimersSpfInitialHoldVariable() {
    return this.getStringAttribute('ipv6_timers_spf_initial_hold_variable');
  }

  // ipv6_timers_spf_max_hold - computed: true, optional: false, required: false
  public get ipv6TimersSpfMaxHold() {
    return this.getNumberAttribute('ipv6_timers_spf_max_hold');
  }

  // ipv6_timers_spf_max_hold_variable - computed: true, optional: false, required: false
  public get ipv6TimersSpfMaxHoldVariable() {
    return this.getStringAttribute('ipv6_timers_spf_max_hold_variable');
  }

  // name - computed: true, optional: true, required: false
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
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
