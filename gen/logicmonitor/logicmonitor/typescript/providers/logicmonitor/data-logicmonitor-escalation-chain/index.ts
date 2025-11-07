// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorEscalationChainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#cc_destinations DataLogicmonitorEscalationChain#cc_destinations}
  */
  readonly ccDestinations?: DataLogicmonitorEscalationChainCcDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#description DataLogicmonitorEscalationChain#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#destinations DataLogicmonitorEscalationChain#destinations}
  */
  readonly destinations?: DataLogicmonitorEscalationChainDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#enable_throttling DataLogicmonitorEscalationChain#enable_throttling}
  */
  readonly enableThrottling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#filter DataLogicmonitorEscalationChain#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#id DataLogicmonitorEscalationChain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#in_alerting DataLogicmonitorEscalationChain#in_alerting}
  */
  readonly inAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#name DataLogicmonitorEscalationChain#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#throttling_alerts DataLogicmonitorEscalationChain#throttling_alerts}
  */
  readonly throttlingAlerts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#throttling_period DataLogicmonitorEscalationChain#throttling_period}
  */
  readonly throttlingPeriod?: number;
}
export interface DataLogicmonitorEscalationChainCcDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#addr DataLogicmonitorEscalationChain#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#contact DataLogicmonitorEscalationChain#contact}
  */
  readonly contact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#method DataLogicmonitorEscalationChain#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#type DataLogicmonitorEscalationChain#type}
  */
  readonly type?: string;
}

export function dataLogicmonitorEscalationChainCcDestinationsToTerraform(struct?: DataLogicmonitorEscalationChainCcDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    contact: cdktf.stringToTerraform(struct!.contact),
    method: cdktf.stringToTerraform(struct!.method),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataLogicmonitorEscalationChainCcDestinationsToHclTerraform(struct?: DataLogicmonitorEscalationChainCcDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact: {
      value: cdktf.stringToHclTerraform(struct!.contact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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

export class DataLogicmonitorEscalationChainCcDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorEscalationChainCcDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._contact !== undefined) {
      hasAnyValues = true;
      internalValueResult.contact = this._contact;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorEscalationChainCcDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._contact = undefined;
      this._method = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._contact = value.contact;
      this._method = value.method;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // contact - computed: false, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

export class DataLogicmonitorEscalationChainCcDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorEscalationChainCcDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorEscalationChainCcDestinationsOutputReference {
    return new DataLogicmonitorEscalationChainCcDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorEscalationChainDestinationsPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#end_minutes DataLogicmonitorEscalationChain#end_minutes}
  */
  readonly endMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#start_minutes DataLogicmonitorEscalationChain#start_minutes}
  */
  readonly startMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#timezone DataLogicmonitorEscalationChain#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#week_days DataLogicmonitorEscalationChain#week_days}
  */
  readonly weekDays?: number[];
}

export function dataLogicmonitorEscalationChainDestinationsPeriodToTerraform(struct?: DataLogicmonitorEscalationChainDestinationsPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_minutes: cdktf.numberToTerraform(struct!.endMinutes),
    start_minutes: cdktf.numberToTerraform(struct!.startMinutes),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    week_days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weekDays),
  }
}


export function dataLogicmonitorEscalationChainDestinationsPeriodToHclTerraform(struct?: DataLogicmonitorEscalationChainDestinationsPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_minutes: {
      value: cdktf.numberToHclTerraform(struct!.endMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_minutes: {
      value: cdktf.numberToHclTerraform(struct!.startMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weekDays),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorEscalationChainDestinationsPeriodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorEscalationChainDestinationsPeriod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.endMinutes = this._endMinutes;
    }
    if (this._startMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMinutes = this._startMinutes;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._weekDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDays = this._weekDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorEscalationChainDestinationsPeriod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endMinutes = undefined;
      this._startMinutes = undefined;
      this._timezone = undefined;
      this._weekDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endMinutes = value.endMinutes;
      this._startMinutes = value.startMinutes;
      this._timezone = value.timezone;
      this._weekDays = value.weekDays;
    }
  }

  // end_minutes - computed: false, optional: true, required: false
  private _endMinutes?: number; 
  public get endMinutes() {
    return this.getNumberAttribute('end_minutes');
  }
  public set endMinutes(value: number) {
    this._endMinutes = value;
  }
  public resetEndMinutes() {
    this._endMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endMinutesInput() {
    return this._endMinutes;
  }

  // start_minutes - computed: false, optional: true, required: false
  private _startMinutes?: number; 
  public get startMinutes() {
    return this.getNumberAttribute('start_minutes');
  }
  public set startMinutes(value: number) {
    this._startMinutes = value;
  }
  public resetStartMinutes() {
    this._startMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinutesInput() {
    return this._startMinutes;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // week_days - computed: false, optional: true, required: false
  private _weekDays?: number[]; 
  public get weekDays() {
    return this.getNumberListAttribute('week_days');
  }
  public set weekDays(value: number[]) {
    this._weekDays = value;
  }
  public resetWeekDays() {
    this._weekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays;
  }
}

export class DataLogicmonitorEscalationChainDestinationsPeriodList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorEscalationChainDestinationsPeriod[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorEscalationChainDestinationsPeriodOutputReference {
    return new DataLogicmonitorEscalationChainDestinationsPeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorEscalationChainDestinationsStages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#addr DataLogicmonitorEscalationChain#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#contact DataLogicmonitorEscalationChain#contact}
  */
  readonly contact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#method DataLogicmonitorEscalationChain#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#type DataLogicmonitorEscalationChain#type}
  */
  readonly type?: string;
}

export function dataLogicmonitorEscalationChainDestinationsStagesToTerraform(struct?: DataLogicmonitorEscalationChainDestinationsStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    contact: cdktf.stringToTerraform(struct!.contact),
    method: cdktf.stringToTerraform(struct!.method),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataLogicmonitorEscalationChainDestinationsStagesToHclTerraform(struct?: DataLogicmonitorEscalationChainDestinationsStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact: {
      value: cdktf.stringToHclTerraform(struct!.contact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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

export class DataLogicmonitorEscalationChainDestinationsStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorEscalationChainDestinationsStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._contact !== undefined) {
      hasAnyValues = true;
      internalValueResult.contact = this._contact;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorEscalationChainDestinationsStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._contact = undefined;
      this._method = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._contact = value.contact;
      this._method = value.method;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // contact - computed: false, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

export class DataLogicmonitorEscalationChainDestinationsStagesListList extends cdktf.MapList {
  public internalValue? : DataLogicmonitorEscalationChainDestinationsStages[][] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorEscalationChainDestinationsStagesList {
    return new DataLogicmonitorEscalationChainDestinationsStagesList(this, `[${index}]`, false);
  }
}

export class DataLogicmonitorEscalationChainDestinationsStagesList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorEscalationChainDestinationsStages[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorEscalationChainDestinationsStagesOutputReference {
    return new DataLogicmonitorEscalationChainDestinationsStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorEscalationChainDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#period DataLogicmonitorEscalationChain#period}
  */
  readonly period?: DataLogicmonitorEscalationChainDestinationsPeriod[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#stages DataLogicmonitorEscalationChain#stages}
  */
  readonly stages?: DataLogicmonitorEscalationChainDestinationsStagesList[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#type DataLogicmonitorEscalationChain#type}
  */
  readonly type?: string;
}

export function dataLogicmonitorEscalationChainDestinationsToTerraform(struct?: DataLogicmonitorEscalationChainDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.listMapper(dataLogicmonitorEscalationChainDestinationsPeriodToTerraform, false)(struct!.period),
    stages: cdktf.listMapper(cdktf.listMapper(dataLogicmonitorEscalationChainDestinationsStagesToTerraform, false), false)(struct!.stages),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataLogicmonitorEscalationChainDestinationsToHclTerraform(struct?: DataLogicmonitorEscalationChainDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.listMapperHcl(dataLogicmonitorEscalationChainDestinationsPeriodToHclTerraform, false)(struct!.period),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorEscalationChainDestinationsPeriodList",
    },
    stages: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(dataLogicmonitorEscalationChainDestinationsStagesToHclTerraform, false), false)(struct!.stages),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorEscalationChainDestinationsStagesListList",
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

export class DataLogicmonitorEscalationChainDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorEscalationChainDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period?.internalValue;
    }
    if (this._stages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorEscalationChainDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._period.internalValue = undefined;
      this._stages.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._period.internalValue = value.period;
      this._stages.internalValue = value.stages;
      this._type = value.type;
    }
  }

  // period - computed: false, optional: true, required: false
  private _period = new DataLogicmonitorEscalationChainDestinationsPeriodList(this, "period", false);
  public get period() {
    return this._period;
  }
  public putPeriod(value: DataLogicmonitorEscalationChainDestinationsPeriod[] | cdktf.IResolvable) {
    this._period.internalValue = value;
  }
  public resetPeriod() {
    this._period.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period.internalValue;
  }

  // stages - computed: false, optional: true, required: false
  private _stages = new DataLogicmonitorEscalationChainDestinationsStagesListList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: DataLogicmonitorEscalationChainDestinationsStagesList[] | cdktf.IResolvable) {
    this._stages.internalValue = value;
  }
  public resetStages() {
    this._stages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
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

export class DataLogicmonitorEscalationChainDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorEscalationChainDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorEscalationChainDestinationsOutputReference {
    return new DataLogicmonitorEscalationChainDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain logicmonitor_escalation_chain}
*/
export class DataLogicmonitorEscalationChain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_escalation_chain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorEscalationChain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorEscalationChain to import
  * @param importFromId The id of the existing DataLogicmonitorEscalationChain that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorEscalationChain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_escalation_chain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/escalation_chain logicmonitor_escalation_chain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorEscalationChainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorEscalationChainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_escalation_chain',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccDestinations.internalValue = config.ccDestinations;
    this._description = config.description;
    this._destinations.internalValue = config.destinations;
    this._enableThrottling = config.enableThrottling;
    this._filter = config.filter;
    this._id = config.id;
    this._inAlerting = config.inAlerting;
    this._name = config.name;
    this._throttlingAlerts = config.throttlingAlerts;
    this._throttlingPeriod = config.throttlingPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cc_destinations - computed: false, optional: true, required: false
  private _ccDestinations = new DataLogicmonitorEscalationChainCcDestinationsList(this, "cc_destinations", false);
  public get ccDestinations() {
    return this._ccDestinations;
  }
  public putCcDestinations(value: DataLogicmonitorEscalationChainCcDestinations[] | cdktf.IResolvable) {
    this._ccDestinations.internalValue = value;
  }
  public resetCcDestinations() {
    this._ccDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccDestinationsInput() {
    return this._ccDestinations.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new DataLogicmonitorEscalationChainDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataLogicmonitorEscalationChainDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // enable_throttling - computed: false, optional: true, required: false
  private _enableThrottling?: boolean | cdktf.IResolvable; 
  public get enableThrottling() {
    return this.getBooleanAttribute('enable_throttling');
  }
  public set enableThrottling(value: boolean | cdktf.IResolvable) {
    this._enableThrottling = value;
  }
  public resetEnableThrottling() {
    this._enableThrottling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThrottlingInput() {
    return this._enableThrottling;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // in_alerting - computed: false, optional: true, required: false
  private _inAlerting?: boolean | cdktf.IResolvable; 
  public get inAlerting() {
    return this.getBooleanAttribute('in_alerting');
  }
  public set inAlerting(value: boolean | cdktf.IResolvable) {
    this._inAlerting = value;
  }
  public resetInAlerting() {
    this._inAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inAlertingInput() {
    return this._inAlerting;
  }

  // name - computed: false, optional: true, required: false
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

  // throttling_alerts - computed: false, optional: true, required: false
  private _throttlingAlerts?: number; 
  public get throttlingAlerts() {
    return this.getNumberAttribute('throttling_alerts');
  }
  public set throttlingAlerts(value: number) {
    this._throttlingAlerts = value;
  }
  public resetThrottlingAlerts() {
    this._throttlingAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingAlertsInput() {
    return this._throttlingAlerts;
  }

  // throttling_period - computed: false, optional: true, required: false
  private _throttlingPeriod?: number; 
  public get throttlingPeriod() {
    return this.getNumberAttribute('throttling_period');
  }
  public set throttlingPeriod(value: number) {
    this._throttlingPeriod = value;
  }
  public resetThrottlingPeriod() {
    this._throttlingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingPeriodInput() {
    return this._throttlingPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cc_destinations: cdktf.listMapper(dataLogicmonitorEscalationChainCcDestinationsToTerraform, false)(this._ccDestinations.internalValue),
      description: cdktf.stringToTerraform(this._description),
      destinations: cdktf.listMapper(dataLogicmonitorEscalationChainDestinationsToTerraform, false)(this._destinations.internalValue),
      enable_throttling: cdktf.booleanToTerraform(this._enableThrottling),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.numberToTerraform(this._id),
      in_alerting: cdktf.booleanToTerraform(this._inAlerting),
      name: cdktf.stringToTerraform(this._name),
      throttling_alerts: cdktf.numberToTerraform(this._throttlingAlerts),
      throttling_period: cdktf.numberToTerraform(this._throttlingPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cc_destinations: {
        value: cdktf.listMapperHcl(dataLogicmonitorEscalationChainCcDestinationsToHclTerraform, false)(this._ccDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorEscalationChainCcDestinationsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destinations: {
        value: cdktf.listMapperHcl(dataLogicmonitorEscalationChainDestinationsToHclTerraform, false)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorEscalationChainDestinationsList",
      },
      enable_throttling: {
        value: cdktf.booleanToHclTerraform(this._enableThrottling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      in_alerting: {
        value: cdktf.booleanToHclTerraform(this._inAlerting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throttling_alerts: {
        value: cdktf.numberToHclTerraform(this._throttlingAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttling_period: {
        value: cdktf.numberToHclTerraform(this._throttlingPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
