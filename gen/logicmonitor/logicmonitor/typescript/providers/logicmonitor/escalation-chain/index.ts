// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EscalationChainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#cc_destinations EscalationChain#cc_destinations}
  */
  readonly ccDestinations?: EscalationChainCcDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#description EscalationChain#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#destinations EscalationChain#destinations}
  */
  readonly destinations: EscalationChainDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#enable_throttling EscalationChain#enable_throttling}
  */
  readonly enableThrottling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#name EscalationChain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#throttling_alerts EscalationChain#throttling_alerts}
  */
  readonly throttlingAlerts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#throttling_period EscalationChain#throttling_period}
  */
  readonly throttlingPeriod?: number;
}
export interface EscalationChainCcDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#addr EscalationChain#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#contact EscalationChain#contact}
  */
  readonly contact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#method EscalationChain#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#type EscalationChain#type}
  */
  readonly type?: string;
}

export function escalationChainCcDestinationsToTerraform(struct?: EscalationChainCcDestinations | cdktf.IResolvable): any {
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


export function escalationChainCcDestinationsToHclTerraform(struct?: EscalationChainCcDestinations | cdktf.IResolvable): any {
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

export class EscalationChainCcDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationChainCcDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EscalationChainCcDestinations | cdktf.IResolvable | undefined) {
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

export class EscalationChainCcDestinationsList extends cdktf.ComplexList {
  public internalValue? : EscalationChainCcDestinations[] | cdktf.IResolvable

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
  public get(index: number): EscalationChainCcDestinationsOutputReference {
    return new EscalationChainCcDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationChainDestinationsPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#end_minutes EscalationChain#end_minutes}
  */
  readonly endMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#start_minutes EscalationChain#start_minutes}
  */
  readonly startMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#timezone EscalationChain#timezone}
  */
  readonly timezone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#week_days EscalationChain#week_days}
  */
  readonly weekDays: number[];
}

export function escalationChainDestinationsPeriodToTerraform(struct?: EscalationChainDestinationsPeriod | cdktf.IResolvable): any {
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


export function escalationChainDestinationsPeriodToHclTerraform(struct?: EscalationChainDestinationsPeriod | cdktf.IResolvable): any {
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

export class EscalationChainDestinationsPeriodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationChainDestinationsPeriod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EscalationChainDestinationsPeriod | cdktf.IResolvable | undefined) {
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

  // end_minutes - computed: false, optional: false, required: true
  private _endMinutes?: number; 
  public get endMinutes() {
    return this.getNumberAttribute('end_minutes');
  }
  public set endMinutes(value: number) {
    this._endMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endMinutesInput() {
    return this._endMinutes;
  }

  // start_minutes - computed: false, optional: false, required: true
  private _startMinutes?: number; 
  public get startMinutes() {
    return this.getNumberAttribute('start_minutes');
  }
  public set startMinutes(value: number) {
    this._startMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinutesInput() {
    return this._startMinutes;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // week_days - computed: false, optional: false, required: true
  private _weekDays?: number[]; 
  public get weekDays() {
    return this.getNumberListAttribute('week_days');
  }
  public set weekDays(value: number[]) {
    this._weekDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays;
  }
}

export class EscalationChainDestinationsPeriodList extends cdktf.ComplexList {
  public internalValue? : EscalationChainDestinationsPeriod[] | cdktf.IResolvable

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
  public get(index: number): EscalationChainDestinationsPeriodOutputReference {
    return new EscalationChainDestinationsPeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationChainDestinationsStages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#addr EscalationChain#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#contact EscalationChain#contact}
  */
  readonly contact: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#method EscalationChain#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#type EscalationChain#type}
  */
  readonly type: string;
}

export function escalationChainDestinationsStagesToTerraform(struct?: EscalationChainDestinationsStages | cdktf.IResolvable): any {
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


export function escalationChainDestinationsStagesToHclTerraform(struct?: EscalationChainDestinationsStages | cdktf.IResolvable): any {
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

export class EscalationChainDestinationsStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationChainDestinationsStages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EscalationChainDestinationsStages | cdktf.IResolvable | undefined) {
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

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // contact - computed: false, optional: false, required: true
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EscalationChainDestinationsStagesListList extends cdktf.MapList {
  public internalValue? : EscalationChainDestinationsStages[][] | cdktf.IResolvable

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
  public get(index: number): EscalationChainDestinationsStagesList {
    return new EscalationChainDestinationsStagesList(this, `[${index}]`, false);
  }
}

export class EscalationChainDestinationsStagesList extends cdktf.ComplexList {
  public internalValue? : EscalationChainDestinationsStages[] | cdktf.IResolvable

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
  public get(index: number): EscalationChainDestinationsStagesOutputReference {
    return new EscalationChainDestinationsStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EscalationChainDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#period EscalationChain#period}
  */
  readonly period: EscalationChainDestinationsPeriod[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#stages EscalationChain#stages}
  */
  readonly stages: EscalationChainDestinationsStagesList[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#type EscalationChain#type}
  */
  readonly type: string;
}

export function escalationChainDestinationsToTerraform(struct?: EscalationChainDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.listMapper(escalationChainDestinationsPeriodToTerraform, false)(struct!.period),
    stages: cdktf.listMapper(cdktf.listMapper(escalationChainDestinationsStagesToTerraform, false), false)(struct!.stages),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function escalationChainDestinationsToHclTerraform(struct?: EscalationChainDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.listMapperHcl(escalationChainDestinationsPeriodToHclTerraform, false)(struct!.period),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationChainDestinationsPeriodList",
    },
    stages: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(escalationChainDestinationsStagesToHclTerraform, false), false)(struct!.stages),
      isBlock: true,
      type: "list",
      storageClassType: "EscalationChainDestinationsStagesListList",
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

export class EscalationChainDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationChainDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EscalationChainDestinations | cdktf.IResolvable | undefined) {
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

  // period - computed: false, optional: false, required: true
  private _period = new EscalationChainDestinationsPeriodList(this, "period", false);
  public get period() {
    return this._period;
  }
  public putPeriod(value: EscalationChainDestinationsPeriod[] | cdktf.IResolvable) {
    this._period.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period.internalValue;
  }

  // stages - computed: false, optional: false, required: true
  private _stages = new EscalationChainDestinationsStagesListList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: EscalationChainDestinationsStagesList[] | cdktf.IResolvable) {
    this._stages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EscalationChainDestinationsList extends cdktf.ComplexList {
  public internalValue? : EscalationChainDestinations[] | cdktf.IResolvable

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
  public get(index: number): EscalationChainDestinationsOutputReference {
    return new EscalationChainDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain logicmonitor_escalation_chain}
*/
export class EscalationChain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_escalation_chain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EscalationChain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EscalationChain to import
  * @param importFromId The id of the existing EscalationChain that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EscalationChain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_escalation_chain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/resources/escalation_chain logicmonitor_escalation_chain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EscalationChainConfig
  */
  public constructor(scope: Construct, id: string, config: EscalationChainConfig) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_escalation_chain',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.27',
        providerVersionConstraint: '2.0.27'
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
    this._name = config.name;
    this._throttlingAlerts = config.throttlingAlerts;
    this._throttlingPeriod = config.throttlingPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cc_destinations - computed: false, optional: true, required: false
  private _ccDestinations = new EscalationChainCcDestinationsList(this, "cc_destinations", false);
  public get ccDestinations() {
    return this._ccDestinations;
  }
  public putCcDestinations(value: EscalationChainCcDestinations[] | cdktf.IResolvable) {
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

  // destinations - computed: false, optional: false, required: true
  private _destinations = new EscalationChainDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: EscalationChainDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_alerting - computed: true, optional: false, required: false
  public get inAlerting() {
    return this.getBooleanAttribute('in_alerting');
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
      cc_destinations: cdktf.listMapper(escalationChainCcDestinationsToTerraform, false)(this._ccDestinations.internalValue),
      description: cdktf.stringToTerraform(this._description),
      destinations: cdktf.listMapper(escalationChainDestinationsToTerraform, false)(this._destinations.internalValue),
      enable_throttling: cdktf.booleanToTerraform(this._enableThrottling),
      name: cdktf.stringToTerraform(this._name),
      throttling_alerts: cdktf.numberToTerraform(this._throttlingAlerts),
      throttling_period: cdktf.numberToTerraform(this._throttlingPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cc_destinations: {
        value: cdktf.listMapperHcl(escalationChainCcDestinationsToHclTerraform, false)(this._ccDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationChainCcDestinationsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destinations: {
        value: cdktf.listMapperHcl(escalationChainDestinationsToHclTerraform, false)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationChainDestinationsList",
      },
      enable_throttling: {
        value: cdktf.booleanToHclTerraform(this._enableThrottling),
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
