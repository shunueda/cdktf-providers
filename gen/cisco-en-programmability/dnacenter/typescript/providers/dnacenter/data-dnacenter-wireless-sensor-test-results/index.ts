// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_sensor_test_results
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterWirelessSensorTestResultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * endTime query parameter. The epoch time in milliseconds
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_sensor_test_results#end_time DataDnacenterWirelessSensorTestResults#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_sensor_test_results#id DataDnacenterWirelessSensorTestResults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * siteId query parameter. Assurance site UUID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_sensor_test_results#site_id DataDnacenterWirelessSensorTestResults#site_id}
  */
  readonly siteId?: string;
  /**
  * startTime query parameter. The epoch time in milliseconds
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_sensor_test_results#start_time DataDnacenterWirelessSensorTestResults#start_time}
  */
  readonly startTime?: number;
  /**
  * testFailureBy query parameter. Obtain failure statistics group by "area", "building", or "floor"
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_sensor_test_results#test_failure_by DataDnacenterWirelessSensorTestResults#test_failure_by}
  */
  readonly testFailureBy?: string;
}
export interface DataDnacenterWirelessSensorTestResultsItemFailureStats {
}

export function dataDnacenterWirelessSensorTestResultsItemFailureStatsToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemFailureStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemFailureStatsToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemFailureStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemFailureStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemFailureStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemFailureStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // error_title - computed: true, optional: false, required: false
  public get errorTitle() {
    return this.getStringAttribute('error_title');
  }

  // test_category - computed: true, optional: false, required: false
  public get testCategory() {
    return this.getStringAttribute('test_category');
  }

  // test_type - computed: true, optional: false, required: false
  public get testType() {
    return this.getStringAttribute('test_type');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemFailureStatsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemFailureStatsOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemFailureStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFer {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFerToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFerToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFerList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFerOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitY {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitYToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitY): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitYToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitY): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitYOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitY | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitY | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitYList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitYOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitYOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVer {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVerToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVerToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVerList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVerOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivIty {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivIty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivIty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivIty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivIty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fil_etr_ans_fer - computed: true, optional: false, required: false
  private _filEtrAnsFer = new DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyFilEtrAnsFerList(this, "fil_etr_ans_fer", false);
  public get filEtrAnsFer() {
    return this._filEtrAnsFer;
  }

  // hos_tre_ach_abi_lit_y - computed: true, optional: false, required: false
  private _hosTreAchAbiLitY = new DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyHosTreAchAbiLitYList(this, "hos_tre_ach_abi_lit_y", false);
  public get hosTreAchAbiLitY() {
    return this._hosTreAchAbiLitY;
  }

  // web_ser_ver - computed: true, optional: false, required: false
  private _webSerVer = new DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyWebSerVerList(this, "web_ser_ver", false);
  public get webSerVer() {
    return this._webSerVer;
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveR {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveRToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveR): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveRToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveR): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveROutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveR | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveR | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveRList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveROutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveROutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryEmaIl {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryEmaIlToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryEmaIl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryEmaIlToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryEmaIl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryEmaIl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryEmaIl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mai_lse_rve_r - computed: true, optional: false, required: false
  private _maiLseRveR = new DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlMaiLseRveRList(this, "mai_lse_rve_r", false);
  public get maiLseRveR() {
    return this._maiLseRveR;
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDns {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDnsToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDnsToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDnsOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCes {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOc {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOcToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOcToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOcList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOcOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutH {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutHToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutH): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutHToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutH): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutHOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutH | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutH | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutHList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutHOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutHOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcP {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcPToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcP): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcPToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcP): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcPOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcP | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcP | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcPList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcPOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcPOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinG {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinG): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinG): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinG | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinG | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ass_oc - computed: true, optional: false, required: false
  private _assOc = new DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAssOcList(this, "ass_oc", false);
  public get assOc() {
    return this._assOc;
  }

  // aut_h - computed: true, optional: false, required: false
  private _autH = new DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGAutHList(this, "aut_h", false);
  public get autH() {
    return this._autH;
  }

  // dhc_p - computed: true, optional: false, required: false
  private _dhcP = new DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGDhcPList(this, "dhc_p", false);
  public get dhcP() {
    return this._dhcP;
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndEr {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndErToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndErToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndErOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndErList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndErOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndErOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCe {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ips_las_end_er - computed: true, optional: false, required: false
  private _ipsLasEndEr = new DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeIpsLasEndErList(this, "ips_las_end_er", false);
  public get ipsLasEndEr() {
    return this._ipsLasEndEr;
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTe {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTeToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTeToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTeList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTeOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnr {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnrToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnrToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fail_count - computed: true, optional: false, required: false
  public get failCount() {
    return this.getNumberAttribute('fail_count');
  }

  // pass_count - computed: true, optional: false, required: false
  public get passCount() {
    return this.getNumberAttribute('pass_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnrList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnrOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEnt {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEnt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEnt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEnt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEnt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dat_ara_te - computed: true, optional: false, required: false
  private _datAraTe = new DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntDatAraTeList(this, "dat_ara_te", false);
  public get datAraTe() {
    return this._datAraTe;
  }

  // snr - computed: true, optional: false, required: false
  private _snr = new DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntSnrList(this, "snr", false);
  public get snr() {
    return this._snr;
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItemSummary {
}

export function dataDnacenterWirelessSensorTestResultsItemSummaryToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemSummaryToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItemSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItemSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItemSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_con_nec_tiv_ity - computed: true, optional: false, required: false
  private _appConNecTivIty = new DataDnacenterWirelessSensorTestResultsItemSummaryAppConNecTivItyList(this, "app_con_nec_tiv_ity", false);
  public get appConNecTivIty() {
    return this._appConNecTivIty;
  }

  // ema_il - computed: true, optional: false, required: false
  private _emaIl = new DataDnacenterWirelessSensorTestResultsItemSummaryEmaIlList(this, "ema_il", false);
  public get emaIl() {
    return this._emaIl;
  }

  // net_wor_kse_rvi_ces - computed: true, optional: false, required: false
  private _netWorKseRviCes = new DataDnacenterWirelessSensorTestResultsItemSummaryNetWorKseRviCesList(this, "net_wor_kse_rvi_ces", false);
  public get netWorKseRviCes() {
    return this._netWorKseRviCes;
  }

  // onb_oar_din_g - computed: true, optional: false, required: false
  private _onbOarDinG = new DataDnacenterWirelessSensorTestResultsItemSummaryOnbOarDinGList(this, "onb_oar_din_g", false);
  public get onbOarDinG() {
    return this._onbOarDinG;
  }

  // per_for_man_ce - computed: true, optional: false, required: false
  private _perForManCe = new DataDnacenterWirelessSensorTestResultsItemSummaryPerForManCeList(this, "per_for_man_ce", false);
  public get perForManCe() {
    return this._perForManCe;
  }

  // rfa_sse_ssm_ent - computed: true, optional: false, required: false
  private _rfaSseSsmEnt = new DataDnacenterWirelessSensorTestResultsItemSummaryRfaSseSsmEntList(this, "rfa_sse_ssm_ent", false);
  public get rfaSseSsmEnt() {
    return this._rfaSseSsmEnt;
  }

  // total_test_count - computed: true, optional: false, required: false
  public get totalTestCount() {
    return this.getNumberAttribute('total_test_count');
  }
}

export class DataDnacenterWirelessSensorTestResultsItemSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemSummaryOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessSensorTestResultsItem {
}

export function dataDnacenterWirelessSensorTestResultsItemToTerraform(struct?: DataDnacenterWirelessSensorTestResultsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessSensorTestResultsItemToHclTerraform(struct?: DataDnacenterWirelessSensorTestResultsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessSensorTestResultsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessSensorTestResultsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessSensorTestResultsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_stats - computed: true, optional: false, required: false
  private _failureStats = new DataDnacenterWirelessSensorTestResultsItemFailureStatsList(this, "failure_stats", false);
  public get failureStats() {
    return this._failureStats;
  }

  // summary - computed: true, optional: false, required: false
  private _summary = new DataDnacenterWirelessSensorTestResultsItemSummaryList(this, "summary", false);
  public get summary() {
    return this._summary;
  }
}

export class DataDnacenterWirelessSensorTestResultsItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessSensorTestResultsItemOutputReference {
    return new DataDnacenterWirelessSensorTestResultsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_sensor_test_results dnacenter_wireless_sensor_test_results}
*/
export class DataDnacenterWirelessSensorTestResults extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_sensor_test_results";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterWirelessSensorTestResults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterWirelessSensorTestResults to import
  * @param importFromId The id of the existing DataDnacenterWirelessSensorTestResults that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_sensor_test_results#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterWirelessSensorTestResults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_sensor_test_results", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_sensor_test_results dnacenter_wireless_sensor_test_results} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterWirelessSensorTestResultsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterWirelessSensorTestResultsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_sensor_test_results',
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
    this._endTime = config.endTime;
    this._id = config.id;
    this._siteId = config.siteId;
    this._startTime = config.startTime;
    this._testFailureBy = config.testFailureBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterWirelessSensorTestResultsItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // test_failure_by - computed: false, optional: true, required: false
  private _testFailureBy?: string; 
  public get testFailureBy() {
    return this.getStringAttribute('test_failure_by');
  }
  public set testFailureBy(value: string) {
    this._testFailureBy = value;
  }
  public resetTestFailureBy() {
    this._testFailureBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testFailureByInput() {
    return this._testFailureBy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      site_id: cdktf.stringToTerraform(this._siteId),
      start_time: cdktf.numberToTerraform(this._startTime),
      test_failure_by: cdktf.stringToTerraform(this._testFailureBy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      test_failure_by: {
        value: cdktf.stringToHclTerraform(this._testFailureBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
