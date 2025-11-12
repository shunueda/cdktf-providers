// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmsSiteMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#address CmsSiteMonitor#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#agent_group CmsSiteMonitor#agent_group}
  */
  readonly agentGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#alert_ids CmsSiteMonitor#alert_ids}
  */
  readonly alertIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#id CmsSiteMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#interval CmsSiteMonitor#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#options_json CmsSiteMonitor#options_json}
  */
  readonly optionsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#status CmsSiteMonitor#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#task_name CmsSiteMonitor#task_name}
  */
  readonly taskName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#task_type CmsSiteMonitor#task_type}
  */
  readonly taskType: string;
  /**
  * custom_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#custom_schedule CmsSiteMonitor#custom_schedule}
  */
  readonly customSchedule?: CmsSiteMonitorCustomSchedule;
  /**
  * isp_cities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#isp_cities CmsSiteMonitor#isp_cities}
  */
  readonly ispCities?: CmsSiteMonitorIspCities[] | cdktf.IResolvable;
  /**
  * option_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#option_json CmsSiteMonitor#option_json}
  */
  readonly optionJson?: CmsSiteMonitorOptionJson;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#timeouts CmsSiteMonitor#timeouts}
  */
  readonly timeouts?: CmsSiteMonitorTimeouts;
}
export interface CmsSiteMonitorCustomSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#days CmsSiteMonitor#days}
  */
  readonly days?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#end_hour CmsSiteMonitor#end_hour}
  */
  readonly endHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#start_hour CmsSiteMonitor#start_hour}
  */
  readonly startHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#time_zone CmsSiteMonitor#time_zone}
  */
  readonly timeZone?: string;
}

export function cmsSiteMonitorCustomScheduleToTerraform(struct?: CmsSiteMonitorCustomScheduleOutputReference | CmsSiteMonitorCustomSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
    end_hour: cdktf.numberToTerraform(struct!.endHour),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function cmsSiteMonitorCustomScheduleToHclTerraform(struct?: CmsSiteMonitorCustomScheduleOutputReference | CmsSiteMonitorCustomSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    end_hour: {
      value: cdktf.numberToHclTerraform(struct!.endHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsSiteMonitorCustomScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CmsSiteMonitorCustomSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHour = this._endHour;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsSiteMonitorCustomSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._endHour = undefined;
      this._startHour = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._endHour = value.endHour;
      this._startHour = value.startHour;
      this._timeZone = value.timeZone;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number[]; 
  public get days() {
    return this.getNumberListAttribute('days');
  }
  public set days(value: number[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // end_hour - computed: false, optional: true, required: false
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  public resetEndHour() {
    this._endHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // start_hour - computed: false, optional: true, required: false
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  public resetStartHour() {
    this._startHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface CmsSiteMonitorIspCities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#city CmsSiteMonitor#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#isp CmsSiteMonitor#isp}
  */
  readonly isp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#type CmsSiteMonitor#type}
  */
  readonly type?: string;
}

export function cmsSiteMonitorIspCitiesToTerraform(struct?: CmsSiteMonitorIspCities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    isp: cdktf.stringToTerraform(struct!.isp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cmsSiteMonitorIspCitiesToHclTerraform(struct?: CmsSiteMonitorIspCities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isp: {
      value: cdktf.stringToHclTerraform(struct!.isp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsSiteMonitorIspCitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsSiteMonitorIspCities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._isp !== undefined) {
      hasAnyValues = true;
      internalValueResult.isp = this._isp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsSiteMonitorIspCities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city = undefined;
      this._isp = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city = value.city;
      this._isp = value.isp;
      this._type = value.type;
    }
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // isp - computed: true, optional: true, required: false
  private _isp?: string; 
  public get isp() {
    return this.getStringAttribute('isp');
  }
  public set isp(value: string) {
    this._isp = value;
  }
  public resetIsp() {
    this._isp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ispInput() {
    return this._isp;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CmsSiteMonitorIspCitiesList extends cdktf.ComplexList {
  public internalValue? : CmsSiteMonitorIspCities[] | cdktf.IResolvable

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
  public get(index: number): CmsSiteMonitorIspCitiesOutputReference {
    return new CmsSiteMonitorIspCitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsSiteMonitorOptionJsonAssertions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#operator CmsSiteMonitor#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#target CmsSiteMonitor#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#type CmsSiteMonitor#type}
  */
  readonly type?: string;
}

export function cmsSiteMonitorOptionJsonAssertionsToTerraform(struct?: CmsSiteMonitorOptionJsonAssertions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cmsSiteMonitorOptionJsonAssertionsToHclTerraform(struct?: CmsSiteMonitorOptionJsonAssertions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsSiteMonitorOptionJsonAssertionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsSiteMonitorOptionJsonAssertions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsSiteMonitorOptionJsonAssertions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CmsSiteMonitorOptionJsonAssertionsList extends cdktf.ComplexList {
  public internalValue? : CmsSiteMonitorOptionJsonAssertions[] | cdktf.IResolvable

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
  public get(index: number): CmsSiteMonitorOptionJsonAssertionsOutputReference {
    return new CmsSiteMonitorOptionJsonAssertionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsSiteMonitorOptionJson {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#attempts CmsSiteMonitor#attempts}
  */
  readonly attempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#cookie CmsSiteMonitor#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#diagnosis_mtr CmsSiteMonitor#diagnosis_mtr}
  */
  readonly diagnosisMtr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#diagnosis_ping CmsSiteMonitor#diagnosis_ping}
  */
  readonly diagnosisPing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#dns_hijack_whitelist CmsSiteMonitor#dns_hijack_whitelist}
  */
  readonly dnsHijackWhitelist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#dns_match_rule CmsSiteMonitor#dns_match_rule}
  */
  readonly dnsMatchRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#dns_server CmsSiteMonitor#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#dns_type CmsSiteMonitor#dns_type}
  */
  readonly dnsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#expect_value CmsSiteMonitor#expect_value}
  */
  readonly expectValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#failure_rate CmsSiteMonitor#failure_rate}
  */
  readonly failureRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#header CmsSiteMonitor#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#http_method CmsSiteMonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#is_base_encode CmsSiteMonitor#is_base_encode}
  */
  readonly isBaseEncode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#match_rule CmsSiteMonitor#match_rule}
  */
  readonly matchRule?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#min_tls_version CmsSiteMonitor#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#password CmsSiteMonitor#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#ping_num CmsSiteMonitor#ping_num}
  */
  readonly pingNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#ping_port CmsSiteMonitor#ping_port}
  */
  readonly pingPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#ping_type CmsSiteMonitor#ping_type}
  */
  readonly pingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#port CmsSiteMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#request_content CmsSiteMonitor#request_content}
  */
  readonly requestContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#request_format CmsSiteMonitor#request_format}
  */
  readonly requestFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#response_content CmsSiteMonitor#response_content}
  */
  readonly responseContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#response_format CmsSiteMonitor#response_format}
  */
  readonly responseFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#timeout CmsSiteMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#user_name CmsSiteMonitor#user_name}
  */
  readonly userName?: string;
  /**
  * assertions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#assertions CmsSiteMonitor#assertions}
  */
  readonly assertions?: CmsSiteMonitorOptionJsonAssertions[] | cdktf.IResolvable;
}

export function cmsSiteMonitorOptionJsonToTerraform(struct?: CmsSiteMonitorOptionJsonOutputReference | CmsSiteMonitorOptionJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    cookie: cdktf.stringToTerraform(struct!.cookie),
    diagnosis_mtr: cdktf.booleanToTerraform(struct!.diagnosisMtr),
    diagnosis_ping: cdktf.booleanToTerraform(struct!.diagnosisPing),
    dns_hijack_whitelist: cdktf.stringToTerraform(struct!.dnsHijackWhitelist),
    dns_match_rule: cdktf.stringToTerraform(struct!.dnsMatchRule),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    dns_type: cdktf.stringToTerraform(struct!.dnsType),
    expect_value: cdktf.stringToTerraform(struct!.expectValue),
    failure_rate: cdktf.stringToTerraform(struct!.failureRate),
    header: cdktf.stringToTerraform(struct!.header),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    is_base_encode: cdktf.booleanToTerraform(struct!.isBaseEncode),
    match_rule: cdktf.numberToTerraform(struct!.matchRule),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    password: cdktf.stringToTerraform(struct!.password),
    ping_num: cdktf.numberToTerraform(struct!.pingNum),
    ping_port: cdktf.numberToTerraform(struct!.pingPort),
    ping_type: cdktf.stringToTerraform(struct!.pingType),
    port: cdktf.numberToTerraform(struct!.port),
    request_content: cdktf.stringToTerraform(struct!.requestContent),
    request_format: cdktf.stringToTerraform(struct!.requestFormat),
    response_content: cdktf.stringToTerraform(struct!.responseContent),
    response_format: cdktf.stringToTerraform(struct!.responseFormat),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    user_name: cdktf.stringToTerraform(struct!.userName),
    assertions: cdktf.listMapper(cmsSiteMonitorOptionJsonAssertionsToTerraform, true)(struct!.assertions),
  }
}


export function cmsSiteMonitorOptionJsonToHclTerraform(struct?: CmsSiteMonitorOptionJsonOutputReference | CmsSiteMonitorOptionJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diagnosis_mtr: {
      value: cdktf.booleanToHclTerraform(struct!.diagnosisMtr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    diagnosis_ping: {
      value: cdktf.booleanToHclTerraform(struct!.diagnosisPing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_hijack_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.dnsHijackWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_match_rule: {
      value: cdktf.stringToHclTerraform(struct!.dnsMatchRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect_value: {
      value: cdktf.stringToHclTerraform(struct!.expectValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_rate: {
      value: cdktf.stringToHclTerraform(struct!.failureRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_base_encode: {
      value: cdktf.booleanToHclTerraform(struct!.isBaseEncode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_rule: {
      value: cdktf.numberToHclTerraform(struct!.matchRule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_num: {
      value: cdktf.numberToHclTerraform(struct!.pingNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ping_port: {
      value: cdktf.numberToHclTerraform(struct!.pingPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ping_type: {
      value: cdktf.stringToHclTerraform(struct!.pingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_content: {
      value: cdktf.stringToHclTerraform(struct!.requestContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_format: {
      value: cdktf.stringToHclTerraform(struct!.requestFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_content: {
      value: cdktf.stringToHclTerraform(struct!.responseContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_format: {
      value: cdktf.stringToHclTerraform(struct!.responseFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertions: {
      value: cdktf.listMapperHcl(cmsSiteMonitorOptionJsonAssertionsToHclTerraform, true)(struct!.assertions),
      isBlock: true,
      type: "list",
      storageClassType: "CmsSiteMonitorOptionJsonAssertionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsSiteMonitorOptionJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CmsSiteMonitorOptionJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._diagnosisMtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosisMtr = this._diagnosisMtr;
    }
    if (this._diagnosisPing !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosisPing = this._diagnosisPing;
    }
    if (this._dnsHijackWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsHijackWhitelist = this._dnsHijackWhitelist;
    }
    if (this._dnsMatchRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMatchRule = this._dnsMatchRule;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._dnsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsType = this._dnsType;
    }
    if (this._expectValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectValue = this._expectValue;
    }
    if (this._failureRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureRate = this._failureRate;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._isBaseEncode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBaseEncode = this._isBaseEncode;
    }
    if (this._matchRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRule = this._matchRule;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pingNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingNum = this._pingNum;
    }
    if (this._pingPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingPort = this._pingPort;
    }
    if (this._pingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingType = this._pingType;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._requestContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestContent = this._requestContent;
    }
    if (this._requestFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestFormat = this._requestFormat;
    }
    if (this._responseContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseContent = this._responseContent;
    }
    if (this._responseFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFormat = this._responseFormat;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._assertions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertions = this._assertions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsSiteMonitorOptionJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attempts = undefined;
      this._cookie = undefined;
      this._diagnosisMtr = undefined;
      this._diagnosisPing = undefined;
      this._dnsHijackWhitelist = undefined;
      this._dnsMatchRule = undefined;
      this._dnsServer = undefined;
      this._dnsType = undefined;
      this._expectValue = undefined;
      this._failureRate = undefined;
      this._header = undefined;
      this._httpMethod = undefined;
      this._isBaseEncode = undefined;
      this._matchRule = undefined;
      this._minTlsVersion = undefined;
      this._password = undefined;
      this._pingNum = undefined;
      this._pingPort = undefined;
      this._pingType = undefined;
      this._port = undefined;
      this._requestContent = undefined;
      this._requestFormat = undefined;
      this._responseContent = undefined;
      this._responseFormat = undefined;
      this._timeout = undefined;
      this._userName = undefined;
      this._assertions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attempts = value.attempts;
      this._cookie = value.cookie;
      this._diagnosisMtr = value.diagnosisMtr;
      this._diagnosisPing = value.diagnosisPing;
      this._dnsHijackWhitelist = value.dnsHijackWhitelist;
      this._dnsMatchRule = value.dnsMatchRule;
      this._dnsServer = value.dnsServer;
      this._dnsType = value.dnsType;
      this._expectValue = value.expectValue;
      this._failureRate = value.failureRate;
      this._header = value.header;
      this._httpMethod = value.httpMethod;
      this._isBaseEncode = value.isBaseEncode;
      this._matchRule = value.matchRule;
      this._minTlsVersion = value.minTlsVersion;
      this._password = value.password;
      this._pingNum = value.pingNum;
      this._pingPort = value.pingPort;
      this._pingType = value.pingType;
      this._port = value.port;
      this._requestContent = value.requestContent;
      this._requestFormat = value.requestFormat;
      this._responseContent = value.responseContent;
      this._responseFormat = value.responseFormat;
      this._timeout = value.timeout;
      this._userName = value.userName;
      this._assertions.internalValue = value.assertions;
    }
  }

  // attempts - computed: false, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // diagnosis_mtr - computed: false, optional: true, required: false
  private _diagnosisMtr?: boolean | cdktf.IResolvable; 
  public get diagnosisMtr() {
    return this.getBooleanAttribute('diagnosis_mtr');
  }
  public set diagnosisMtr(value: boolean | cdktf.IResolvable) {
    this._diagnosisMtr = value;
  }
  public resetDiagnosisMtr() {
    this._diagnosisMtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisMtrInput() {
    return this._diagnosisMtr;
  }

  // diagnosis_ping - computed: false, optional: true, required: false
  private _diagnosisPing?: boolean | cdktf.IResolvable; 
  public get diagnosisPing() {
    return this.getBooleanAttribute('diagnosis_ping');
  }
  public set diagnosisPing(value: boolean | cdktf.IResolvable) {
    this._diagnosisPing = value;
  }
  public resetDiagnosisPing() {
    this._diagnosisPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisPingInput() {
    return this._diagnosisPing;
  }

  // dns_hijack_whitelist - computed: false, optional: true, required: false
  private _dnsHijackWhitelist?: string; 
  public get dnsHijackWhitelist() {
    return this.getStringAttribute('dns_hijack_whitelist');
  }
  public set dnsHijackWhitelist(value: string) {
    this._dnsHijackWhitelist = value;
  }
  public resetDnsHijackWhitelist() {
    this._dnsHijackWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHijackWhitelistInput() {
    return this._dnsHijackWhitelist;
  }

  // dns_match_rule - computed: false, optional: true, required: false
  private _dnsMatchRule?: string; 
  public get dnsMatchRule() {
    return this.getStringAttribute('dns_match_rule');
  }
  public set dnsMatchRule(value: string) {
    this._dnsMatchRule = value;
  }
  public resetDnsMatchRule() {
    this._dnsMatchRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMatchRuleInput() {
    return this._dnsMatchRule;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // dns_type - computed: false, optional: true, required: false
  private _dnsType?: string; 
  public get dnsType() {
    return this.getStringAttribute('dns_type');
  }
  public set dnsType(value: string) {
    this._dnsType = value;
  }
  public resetDnsType() {
    this._dnsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTypeInput() {
    return this._dnsType;
  }

  // expect_value - computed: false, optional: true, required: false
  private _expectValue?: string; 
  public get expectValue() {
    return this.getStringAttribute('expect_value');
  }
  public set expectValue(value: string) {
    this._expectValue = value;
  }
  public resetExpectValue() {
    this._expectValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectValueInput() {
    return this._expectValue;
  }

  // failure_rate - computed: false, optional: true, required: false
  private _failureRate?: string; 
  public get failureRate() {
    return this.getStringAttribute('failure_rate');
  }
  public set failureRate(value: string) {
    this._failureRate = value;
  }
  public resetFailureRate() {
    this._failureRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRateInput() {
    return this._failureRate;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // is_base_encode - computed: true, optional: true, required: false
  private _isBaseEncode?: boolean | cdktf.IResolvable; 
  public get isBaseEncode() {
    return this.getBooleanAttribute('is_base_encode');
  }
  public set isBaseEncode(value: boolean | cdktf.IResolvable) {
    this._isBaseEncode = value;
  }
  public resetIsBaseEncode() {
    this._isBaseEncode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBaseEncodeInput() {
    return this._isBaseEncode;
  }

  // match_rule - computed: false, optional: true, required: false
  private _matchRule?: number; 
  public get matchRule() {
    return this.getNumberAttribute('match_rule');
  }
  public set matchRule(value: number) {
    this._matchRule = value;
  }
  public resetMatchRule() {
    this._matchRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRuleInput() {
    return this._matchRule;
  }

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ping_num - computed: false, optional: true, required: false
  private _pingNum?: number; 
  public get pingNum() {
    return this.getNumberAttribute('ping_num');
  }
  public set pingNum(value: number) {
    this._pingNum = value;
  }
  public resetPingNum() {
    this._pingNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingNumInput() {
    return this._pingNum;
  }

  // ping_port - computed: false, optional: true, required: false
  private _pingPort?: number; 
  public get pingPort() {
    return this.getNumberAttribute('ping_port');
  }
  public set pingPort(value: number) {
    this._pingPort = value;
  }
  public resetPingPort() {
    this._pingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingPortInput() {
    return this._pingPort;
  }

  // ping_type - computed: false, optional: true, required: false
  private _pingType?: string; 
  public get pingType() {
    return this.getStringAttribute('ping_type');
  }
  public set pingType(value: string) {
    this._pingType = value;
  }
  public resetPingType() {
    this._pingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingTypeInput() {
    return this._pingType;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // request_content - computed: false, optional: true, required: false
  private _requestContent?: string; 
  public get requestContent() {
    return this.getStringAttribute('request_content');
  }
  public set requestContent(value: string) {
    this._requestContent = value;
  }
  public resetRequestContent() {
    this._requestContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestContentInput() {
    return this._requestContent;
  }

  // request_format - computed: false, optional: true, required: false
  private _requestFormat?: string; 
  public get requestFormat() {
    return this.getStringAttribute('request_format');
  }
  public set requestFormat(value: string) {
    this._requestFormat = value;
  }
  public resetRequestFormat() {
    this._requestFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestFormatInput() {
    return this._requestFormat;
  }

  // response_content - computed: false, optional: true, required: false
  private _responseContent?: string; 
  public get responseContent() {
    return this.getStringAttribute('response_content');
  }
  public set responseContent(value: string) {
    this._responseContent = value;
  }
  public resetResponseContent() {
    this._responseContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseContentInput() {
    return this._responseContent;
  }

  // response_format - computed: false, optional: true, required: false
  private _responseFormat?: string; 
  public get responseFormat() {
    return this.getStringAttribute('response_format');
  }
  public set responseFormat(value: string) {
    this._responseFormat = value;
  }
  public resetResponseFormat() {
    this._responseFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFormatInput() {
    return this._responseFormat;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // assertions - computed: false, optional: true, required: false
  private _assertions = new CmsSiteMonitorOptionJsonAssertionsList(this, "assertions", false);
  public get assertions() {
    return this._assertions;
  }
  public putAssertions(value: CmsSiteMonitorOptionJsonAssertions[] | cdktf.IResolvable) {
    this._assertions.internalValue = value;
  }
  public resetAssertions() {
    this._assertions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionsInput() {
    return this._assertions.internalValue;
  }
}
export interface CmsSiteMonitorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#create CmsSiteMonitor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#delete CmsSiteMonitor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#update CmsSiteMonitor#update}
  */
  readonly update?: string;
}

export function cmsSiteMonitorTimeoutsToTerraform(struct?: CmsSiteMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cmsSiteMonitorTimeoutsToHclTerraform(struct?: CmsSiteMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsSiteMonitorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmsSiteMonitorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsSiteMonitorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor alicloud_cms_site_monitor}
*/
export class CmsSiteMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cms_site_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmsSiteMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmsSiteMonitor to import
  * @param importFromId The id of the existing CmsSiteMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmsSiteMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cms_site_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_site_monitor alicloud_cms_site_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmsSiteMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: CmsSiteMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cms_site_monitor',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._agentGroup = config.agentGroup;
    this._alertIds = config.alertIds;
    this._id = config.id;
    this._interval = config.interval;
    this._optionsJson = config.optionsJson;
    this._status = config.status;
    this._taskName = config.taskName;
    this._taskType = config.taskType;
    this._customSchedule.internalValue = config.customSchedule;
    this._ispCities.internalValue = config.ispCities;
    this._optionJson.internalValue = config.optionJson;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // agent_group - computed: true, optional: true, required: false
  private _agentGroup?: string; 
  public get agentGroup() {
    return this.getStringAttribute('agent_group');
  }
  public set agentGroup(value: string) {
    this._agentGroup = value;
  }
  public resetAgentGroup() {
    this._agentGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGroupInput() {
    return this._agentGroup;
  }

  // alert_ids - computed: false, optional: true, required: false
  private _alertIds?: string[]; 
  public get alertIds() {
    return this.getListAttribute('alert_ids');
  }
  public set alertIds(value: string[]) {
    this._alertIds = value;
  }
  public resetAlertIds() {
    this._alertIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIdsInput() {
    return this._alertIds;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // options_json - computed: true, optional: true, required: false
  private _optionsJson?: string; 
  public get optionsJson() {
    return this.getStringAttribute('options_json');
  }
  public set optionsJson(value: string) {
    this._optionsJson = value;
  }
  public resetOptionsJson() {
    this._optionsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsJsonInput() {
    return this._optionsJson;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // task_state - computed: true, optional: false, required: false
  public get taskState() {
    return this.getStringAttribute('task_state');
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_schedule - computed: false, optional: true, required: false
  private _customSchedule = new CmsSiteMonitorCustomScheduleOutputReference(this, "custom_schedule");
  public get customSchedule() {
    return this._customSchedule;
  }
  public putCustomSchedule(value: CmsSiteMonitorCustomSchedule) {
    this._customSchedule.internalValue = value;
  }
  public resetCustomSchedule() {
    this._customSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customScheduleInput() {
    return this._customSchedule.internalValue;
  }

  // isp_cities - computed: false, optional: true, required: false
  private _ispCities = new CmsSiteMonitorIspCitiesList(this, "isp_cities", true);
  public get ispCities() {
    return this._ispCities;
  }
  public putIspCities(value: CmsSiteMonitorIspCities[] | cdktf.IResolvable) {
    this._ispCities.internalValue = value;
  }
  public resetIspCities() {
    this._ispCities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ispCitiesInput() {
    return this._ispCities.internalValue;
  }

  // option_json - computed: false, optional: true, required: false
  private _optionJson = new CmsSiteMonitorOptionJsonOutputReference(this, "option_json");
  public get optionJson() {
    return this._optionJson;
  }
  public putOptionJson(value: CmsSiteMonitorOptionJson) {
    this._optionJson.internalValue = value;
  }
  public resetOptionJson() {
    this._optionJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionJsonInput() {
    return this._optionJson.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CmsSiteMonitorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CmsSiteMonitorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      agent_group: cdktf.stringToTerraform(this._agentGroup),
      alert_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertIds),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      options_json: cdktf.stringToTerraform(this._optionsJson),
      status: cdktf.stringToTerraform(this._status),
      task_name: cdktf.stringToTerraform(this._taskName),
      task_type: cdktf.stringToTerraform(this._taskType),
      custom_schedule: cmsSiteMonitorCustomScheduleToTerraform(this._customSchedule.internalValue),
      isp_cities: cdktf.listMapper(cmsSiteMonitorIspCitiesToTerraform, true)(this._ispCities.internalValue),
      option_json: cmsSiteMonitorOptionJsonToTerraform(this._optionJson.internalValue),
      timeouts: cmsSiteMonitorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_group: {
        value: cdktf.stringToHclTerraform(this._agentGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options_json: {
        value: cdktf.stringToHclTerraform(this._optionsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_schedule: {
        value: cmsSiteMonitorCustomScheduleToHclTerraform(this._customSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmsSiteMonitorCustomScheduleList",
      },
      isp_cities: {
        value: cdktf.listMapperHcl(cmsSiteMonitorIspCitiesToHclTerraform, true)(this._ispCities.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CmsSiteMonitorIspCitiesList",
      },
      option_json: {
        value: cmsSiteMonitorOptionJsonToHclTerraform(this._optionJson.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmsSiteMonitorOptionJsonList",
      },
      timeouts: {
        value: cmsSiteMonitorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmsSiteMonitorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
