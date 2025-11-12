// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospf_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoOspfFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospf_feature_template#id DataSdwanCiscoOspfFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospf_feature_template#name DataSdwanCiscoOspfFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoOspfFeatureTemplateAreasInterfaces {
}

export function dataSdwanCiscoOspfFeatureTemplateAreasInterfacesToTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateAreasInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfFeatureTemplateAreasInterfacesToHclTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateAreasInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfFeatureTemplateAreasInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfFeatureTemplateAreasInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfFeatureTemplateAreasInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_message_digest_key - computed: true, optional: false, required: false
  public get authenticationMessageDigestKey() {
    return this.getStringAttribute('authentication_message_digest_key');
  }

  // authentication_message_digest_key_id - computed: true, optional: false, required: false
  public get authenticationMessageDigestKeyId() {
    return this.getNumberAttribute('authentication_message_digest_key_id');
  }

  // authentication_message_digest_key_id_variable - computed: true, optional: false, required: false
  public get authenticationMessageDigestKeyIdVariable() {
    return this.getStringAttribute('authentication_message_digest_key_id_variable');
  }

  // authentication_message_digest_key_variable - computed: true, optional: false, required: false
  public get authenticationMessageDigestKeyVariable() {
    return this.getStringAttribute('authentication_message_digest_key_variable');
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // priority_variable - computed: true, optional: false, required: false
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
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

export class DataSdwanCiscoOspfFeatureTemplateAreasInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfFeatureTemplateAreasInterfacesOutputReference {
    return new DataSdwanCiscoOspfFeatureTemplateAreasInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfFeatureTemplateAreasRanges {
}

export function dataSdwanCiscoOspfFeatureTemplateAreasRangesToTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateAreasRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfFeatureTemplateAreasRangesToHclTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateAreasRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfFeatureTemplateAreasRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfFeatureTemplateAreasRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfFeatureTemplateAreasRanges | undefined) {
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

export class DataSdwanCiscoOspfFeatureTemplateAreasRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfFeatureTemplateAreasRangesOutputReference {
    return new DataSdwanCiscoOspfFeatureTemplateAreasRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfFeatureTemplateAreas {
}

export function dataSdwanCiscoOspfFeatureTemplateAreasToTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfFeatureTemplateAreasToHclTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfFeatureTemplateAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfFeatureTemplateAreas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfFeatureTemplateAreas | undefined) {
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
  private _interfaces = new DataSdwanCiscoOspfFeatureTemplateAreasInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
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
  private _ranges = new DataSdwanCiscoOspfFeatureTemplateAreasRangesList(this, "ranges", false);
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
}

export class DataSdwanCiscoOspfFeatureTemplateAreasList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfFeatureTemplateAreasOutputReference {
    return new DataSdwanCiscoOspfFeatureTemplateAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsa {
}

export function dataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsaToTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsaToHclTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsa | undefined) {
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

export class DataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsaList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsaOutputReference {
    return new DataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfFeatureTemplateRedistribute {
}

export function dataSdwanCiscoOspfFeatureTemplateRedistributeToTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfFeatureTemplateRedistributeToHclTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfFeatureTemplateRedistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfFeatureTemplateRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfFeatureTemplateRedistribute | undefined) {
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

export class DataSdwanCiscoOspfFeatureTemplateRedistributeList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfFeatureTemplateRedistributeOutputReference {
    return new DataSdwanCiscoOspfFeatureTemplateRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoOspfFeatureTemplateRoutePolicies {
}

export function dataSdwanCiscoOspfFeatureTemplateRoutePoliciesToTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateRoutePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoOspfFeatureTemplateRoutePoliciesToHclTerraform(struct?: DataSdwanCiscoOspfFeatureTemplateRoutePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoOspfFeatureTemplateRoutePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoOspfFeatureTemplateRoutePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoOspfFeatureTemplateRoutePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // direction_variable - computed: true, optional: false, required: false
  public get directionVariable() {
    return this.getStringAttribute('direction_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // policy_name_variable - computed: true, optional: false, required: false
  public get policyNameVariable() {
    return this.getStringAttribute('policy_name_variable');
  }
}

export class DataSdwanCiscoOspfFeatureTemplateRoutePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoOspfFeatureTemplateRoutePoliciesOutputReference {
    return new DataSdwanCiscoOspfFeatureTemplateRoutePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospf_feature_template sdwan_cisco_ospf_feature_template}
*/
export class DataSdwanCiscoOspfFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_ospf_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoOspfFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoOspfFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoOspfFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospf_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoOspfFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_ospf_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_ospf_feature_template sdwan_cisco_ospf_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoOspfFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoOspfFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_ospf_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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

  // areas - computed: true, optional: false, required: false
  private _areas = new DataSdwanCiscoOspfFeatureTemplateAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }

  // auto_cost_reference_bandwidth - computed: true, optional: false, required: false
  public get autoCostReferenceBandwidth() {
    return this.getNumberAttribute('auto_cost_reference_bandwidth');
  }

  // auto_cost_reference_bandwidth_variable - computed: true, optional: false, required: false
  public get autoCostReferenceBandwidthVariable() {
    return this.getStringAttribute('auto_cost_reference_bandwidth_variable');
  }

  // compatible_rfc1583 - computed: true, optional: false, required: false
  public get compatibleRfc1583() {
    return this.getBooleanAttribute('compatible_rfc1583');
  }

  // compatible_rfc1583_variable - computed: true, optional: false, required: false
  public get compatibleRfc1583Variable() {
    return this.getStringAttribute('compatible_rfc1583_variable');
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }

  // default_information_originate_always - computed: true, optional: false, required: false
  public get defaultInformationOriginateAlways() {
    return this.getBooleanAttribute('default_information_originate_always');
  }

  // default_information_originate_always_variable - computed: true, optional: false, required: false
  public get defaultInformationOriginateAlwaysVariable() {
    return this.getStringAttribute('default_information_originate_always_variable');
  }

  // default_information_originate_metric - computed: true, optional: false, required: false
  public get defaultInformationOriginateMetric() {
    return this.getNumberAttribute('default_information_originate_metric');
  }

  // default_information_originate_metric_type - computed: true, optional: false, required: false
  public get defaultInformationOriginateMetricType() {
    return this.getStringAttribute('default_information_originate_metric_type');
  }

  // default_information_originate_metric_type_variable - computed: true, optional: false, required: false
  public get defaultInformationOriginateMetricTypeVariable() {
    return this.getStringAttribute('default_information_originate_metric_type_variable');
  }

  // default_information_originate_metric_variable - computed: true, optional: false, required: false
  public get defaultInformationOriginateMetricVariable() {
    return this.getStringAttribute('default_information_originate_metric_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // distance_external - computed: true, optional: false, required: false
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }

  // distance_external_variable - computed: true, optional: false, required: false
  public get distanceExternalVariable() {
    return this.getStringAttribute('distance_external_variable');
  }

  // distance_inter_area - computed: true, optional: false, required: false
  public get distanceInterArea() {
    return this.getNumberAttribute('distance_inter_area');
  }

  // distance_inter_area_variable - computed: true, optional: false, required: false
  public get distanceInterAreaVariable() {
    return this.getStringAttribute('distance_inter_area_variable');
  }

  // distance_intra_area - computed: true, optional: false, required: false
  public get distanceIntraArea() {
    return this.getNumberAttribute('distance_intra_area');
  }

  // distance_intra_area_variable - computed: true, optional: false, required: false
  public get distanceIntraAreaVariable() {
    return this.getStringAttribute('distance_intra_area_variable');
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

  // max_metric_router_lsa - computed: true, optional: false, required: false
  private _maxMetricRouterLsa = new DataSdwanCiscoOspfFeatureTemplateMaxMetricRouterLsaList(this, "max_metric_router_lsa", false);
  public get maxMetricRouterLsa() {
    return this._maxMetricRouterLsa;
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

  // redistribute - computed: true, optional: false, required: false
  private _redistribute = new DataSdwanCiscoOspfFeatureTemplateRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }

  // route_policies - computed: true, optional: false, required: false
  private _routePolicies = new DataSdwanCiscoOspfFeatureTemplateRoutePoliciesList(this, "route_policies", false);
  public get routePolicies() {
    return this._routePolicies;
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // router_id_variable - computed: true, optional: false, required: false
  public get routerIdVariable() {
    return this.getStringAttribute('router_id_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // timers_spf_delay - computed: true, optional: false, required: false
  public get timersSpfDelay() {
    return this.getNumberAttribute('timers_spf_delay');
  }

  // timers_spf_delay_variable - computed: true, optional: false, required: false
  public get timersSpfDelayVariable() {
    return this.getStringAttribute('timers_spf_delay_variable');
  }

  // timers_spf_initial_hold - computed: true, optional: false, required: false
  public get timersSpfInitialHold() {
    return this.getNumberAttribute('timers_spf_initial_hold');
  }

  // timers_spf_initial_hold_variable - computed: true, optional: false, required: false
  public get timersSpfInitialHoldVariable() {
    return this.getStringAttribute('timers_spf_initial_hold_variable');
  }

  // timers_spf_max_hold - computed: true, optional: false, required: false
  public get timersSpfMaxHold() {
    return this.getNumberAttribute('timers_spf_max_hold');
  }

  // timers_spf_max_hold_variable - computed: true, optional: false, required: false
  public get timersSpfMaxHoldVariable() {
    return this.getStringAttribute('timers_spf_max_hold_variable');
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
