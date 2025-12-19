// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#id DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#zone_name DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#oper DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#oper}
  */
  readonly oper?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOper;
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#address DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#rate DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#rate}
  */
  readonly rate?: string;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnetsToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    rate: cdktf.stringToTerraform(struct!.rate),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnetsToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate: {
      value: cdktf.stringToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._rate = value.rate;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnetsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnets[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnetsOutputReference {
    return new DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicators {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#indicator_index DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#indicator_index}
  */
  readonly indicatorIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#indicator_name DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#indicator_name}
  */
  readonly indicatorName?: string;
  /**
  * source_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#source_subnets DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#source_subnets}
  */
  readonly sourceSubnets?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnets[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_index: cdktf.numberToTerraform(struct!.indicatorIndex),
    indicator_name: cdktf.stringToTerraform(struct!.indicatorName),
    source_subnets: cdktf.listMapper(dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnetsToTerraform, true)(struct!.sourceSubnets),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_index: {
      value: cdktf.numberToHclTerraform(struct!.indicatorIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indicator_name: {
      value: cdktf.stringToHclTerraform(struct!.indicatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_subnets: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnetsToHclTerraform, true)(struct!.sourceSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIndex = this._indicatorIndex;
    }
    if (this._indicatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorName = this._indicatorName;
    }
    if (this._sourceSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSubnets = this._sourceSubnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indicatorIndex = undefined;
      this._indicatorName = undefined;
      this._sourceSubnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indicatorIndex = value.indicatorIndex;
      this._indicatorName = value.indicatorName;
      this._sourceSubnets.internalValue = value.sourceSubnets;
    }
  }

  // indicator_index - computed: false, optional: true, required: false
  private _indicatorIndex?: number; 
  public get indicatorIndex() {
    return this.getNumberAttribute('indicator_index');
  }
  public set indicatorIndex(value: number) {
    this._indicatorIndex = value;
  }
  public resetIndicatorIndex() {
    this._indicatorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIndexInput() {
    return this._indicatorIndex;
  }

  // indicator_name - computed: false, optional: true, required: false
  private _indicatorName?: string; 
  public get indicatorName() {
    return this.getStringAttribute('indicator_name');
  }
  public set indicatorName(value: string) {
    this._indicatorName = value;
  }
  public resetIndicatorName() {
    this._indicatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorNameInput() {
    return this._indicatorName;
  }

  // source_subnets - computed: false, optional: true, required: false
  private _sourceSubnets = new DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnetsList(this, "source_subnets", false);
  public get sourceSubnets() {
    return this._sourceSubnets;
  }
  public putSourceSubnets(value: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsSourceSubnets[] | cdktf.IResolvable) {
    this._sourceSubnets.internalValue = value;
  }
  public resetSourceSubnets() {
    this._sourceSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSubnetsInput() {
    return this._sourceSubnets.internalValue;
  }
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicators[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsOutputReference {
    return new DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#location_name DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#location_name}
  */
  readonly locationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#location_type DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#location_type}
  */
  readonly locationType?: string;
  /**
  * indicators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#indicators DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#indicators}
  */
  readonly indicators?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicators[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStructToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_name: cdktf.stringToTerraform(struct!.locationName),
    location_type: cdktf.stringToTerraform(struct!.locationType),
    indicators: cdktf.listMapper(dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsToTerraform, true)(struct!.indicators),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStructToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_name: {
      value: cdktf.stringToHclTerraform(struct!.locationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indicators: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsToHclTerraform, true)(struct!.indicators),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationName = this._locationName;
    }
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    if (this._indicators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicators = this._indicators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locationName = undefined;
      this._locationType = undefined;
      this._indicators.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locationName = value.locationName;
      this._locationType = value.locationType;
      this._indicators.internalValue = value.indicators;
    }
  }

  // location_name - computed: false, optional: true, required: false
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  public resetLocationName() {
    this._locationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }

  // location_type - computed: false, optional: true, required: false
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  public resetLocationType() {
    this._locationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
  }

  // indicators - computed: false, optional: true, required: false
  private _indicators = new DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicatorsList(this, "indicators", false);
  public get indicators() {
    return this._indicators;
  }
  public putIndicators(value: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListIndicators[] | cdktf.IResolvable) {
    this._indicators.internalValue = value;
  }
  public resetIndicators() {
    this._indicators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsInput() {
    return this._indicators.internalValue;
  }
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStructOutputReference {
    return new DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOper {
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#entry_list DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper#entry_list}
  */
  readonly entryList?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperToTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperOutputReference | DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_list: cdktf.listMapper(dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperToHclTerraform(struct?: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperOutputReference | DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryList.internalValue = value.entryList;
    }
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper thunder_ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper}
*/
export class DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper to import
  * @param importFromId The id of the existing DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper thunder_ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_detection_outbound_detection_topk_source_subnet_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._zoneName = config.zoneName;
    this._oper.internalValue = config.oper;
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

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperToTerraform(this._oper.internalValue),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneDetectionOutboundDetectionTopkSourceSubnetOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
