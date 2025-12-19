// https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user-provided description of the compliance report configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#description ReportConfiguration#description}
  */
  readonly description?: string;
  /**
  * The user-provided name of the compliance report configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#name ReportConfiguration#name}
  */
  readonly name: string;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#notification ReportConfiguration#notification}
  */
  readonly notification?: ReportConfigurationNotification[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#parameter ReportConfiguration#parameter}
  */
  readonly parameter?: ReportConfigurationParameter[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#schedule ReportConfiguration#schedule}
  */
  readonly schedule?: ReportConfigurationSchedule[] | cdktf.IResolvable;
}
export interface ReportConfigurationNotification {
  /**
  * Email list to send a generated report run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#email_list ReportConfiguration#email_list}
  */
  readonly emailList?: string[];
}

export function reportConfigurationNotificationToTerraform(struct?: ReportConfigurationNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailList),
  }
}


export function reportConfigurationNotificationToHclTerraform(struct?: ReportConfigurationNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationNotificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailList !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailList = value.emailList;
    }
  }

  // email_list - computed: false, optional: true, required: false
  private _emailList?: string[]; 
  public get emailList() {
    return cdktf.Fn.tolist(this.getListAttribute('email_list'));
  }
  public set emailList(value: string[]) {
    this._emailList = value;
  }
  public resetEmailList() {
    this._emailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList;
  }
}

export class ReportConfigurationNotificationList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationNotification[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationNotificationOutputReference {
    return new ReportConfigurationNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterControlsAssetBackupLookBackPeriod {
  /**
  * Enum: `minutes` `hours` `days` `weeks` `months` `years`<br>Unit indicates the unit for time unit param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#unit ReportConfiguration#unit}
  */
  readonly unit: string;
  /**
  * Value indicates the value for time unit param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#value ReportConfiguration#value}
  */
  readonly value: number;
}

export function reportConfigurationParameterControlsAssetBackupLookBackPeriodToTerraform(struct?: ReportConfigurationParameterControlsAssetBackupLookBackPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function reportConfigurationParameterControlsAssetBackupLookBackPeriodToHclTerraform(struct?: ReportConfigurationParameterControlsAssetBackupLookBackPeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterControlsAssetBackupLookBackPeriodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterControlsAssetBackupLookBackPeriod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterControlsAssetBackupLookBackPeriod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ReportConfigurationParameterControlsAssetBackupLookBackPeriodList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterControlsAssetBackupLookBackPeriod[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterControlsAssetBackupLookBackPeriodOutputReference {
    return new ReportConfigurationParameterControlsAssetBackupLookBackPeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterControlsAssetBackupMinimumRetentionDuration {
  /**
  * Enum: `minutes` `hours` `days` `weeks` `months` `years`<br>Unit indicates the unit for time unit param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#unit ReportConfiguration#unit}
  */
  readonly unit: string;
  /**
  * Value indicates the value for time unit param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#value ReportConfiguration#value}
  */
  readonly value: number;
}

export function reportConfigurationParameterControlsAssetBackupMinimumRetentionDurationToTerraform(struct?: ReportConfigurationParameterControlsAssetBackupMinimumRetentionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function reportConfigurationParameterControlsAssetBackupMinimumRetentionDurationToHclTerraform(struct?: ReportConfigurationParameterControlsAssetBackupMinimumRetentionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterControlsAssetBackupMinimumRetentionDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterControlsAssetBackupMinimumRetentionDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterControlsAssetBackupMinimumRetentionDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ReportConfigurationParameterControlsAssetBackupMinimumRetentionDurationList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterControlsAssetBackupMinimumRetentionDuration[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterControlsAssetBackupMinimumRetentionDurationOutputReference {
    return new ReportConfigurationParameterControlsAssetBackupMinimumRetentionDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterControlsAssetBackupWindowSize {
  /**
  * Enum: `minutes` `hours` `days` `weeks` `months` `years`<br>Unit indicates the unit for time unit param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#unit ReportConfiguration#unit}
  */
  readonly unit: string;
  /**
  * Value indicates the value for time unit param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#value ReportConfiguration#value}
  */
  readonly value: number;
}

export function reportConfigurationParameterControlsAssetBackupWindowSizeToTerraform(struct?: ReportConfigurationParameterControlsAssetBackupWindowSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function reportConfigurationParameterControlsAssetBackupWindowSizeToHclTerraform(struct?: ReportConfigurationParameterControlsAssetBackupWindowSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterControlsAssetBackupWindowSizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterControlsAssetBackupWindowSize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterControlsAssetBackupWindowSize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ReportConfigurationParameterControlsAssetBackupWindowSizeList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterControlsAssetBackupWindowSize[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterControlsAssetBackupWindowSizeOutputReference {
    return new ReportConfigurationParameterControlsAssetBackupWindowSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterControlsAssetBackup {
  /**
  * look_back_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#look_back_period ReportConfiguration#look_back_period}
  */
  readonly lookBackPeriod?: ReportConfigurationParameterControlsAssetBackupLookBackPeriod[] | cdktf.IResolvable;
  /**
  * minimum_retention_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#minimum_retention_duration ReportConfiguration#minimum_retention_duration}
  */
  readonly minimumRetentionDuration?: ReportConfigurationParameterControlsAssetBackupMinimumRetentionDuration[] | cdktf.IResolvable;
  /**
  * window_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#window_size ReportConfiguration#window_size}
  */
  readonly windowSize?: ReportConfigurationParameterControlsAssetBackupWindowSize[] | cdktf.IResolvable;
}

export function reportConfigurationParameterControlsAssetBackupToTerraform(struct?: ReportConfigurationParameterControlsAssetBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    look_back_period: cdktf.listMapper(reportConfigurationParameterControlsAssetBackupLookBackPeriodToTerraform, true)(struct!.lookBackPeriod),
    minimum_retention_duration: cdktf.listMapper(reportConfigurationParameterControlsAssetBackupMinimumRetentionDurationToTerraform, true)(struct!.minimumRetentionDuration),
    window_size: cdktf.listMapper(reportConfigurationParameterControlsAssetBackupWindowSizeToTerraform, true)(struct!.windowSize),
  }
}


export function reportConfigurationParameterControlsAssetBackupToHclTerraform(struct?: ReportConfigurationParameterControlsAssetBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    look_back_period: {
      value: cdktf.listMapperHcl(reportConfigurationParameterControlsAssetBackupLookBackPeriodToHclTerraform, true)(struct!.lookBackPeriod),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterControlsAssetBackupLookBackPeriodList",
    },
    minimum_retention_duration: {
      value: cdktf.listMapperHcl(reportConfigurationParameterControlsAssetBackupMinimumRetentionDurationToHclTerraform, true)(struct!.minimumRetentionDuration),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterControlsAssetBackupMinimumRetentionDurationList",
    },
    window_size: {
      value: cdktf.listMapperHcl(reportConfigurationParameterControlsAssetBackupWindowSizeToHclTerraform, true)(struct!.windowSize),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterControlsAssetBackupWindowSizeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterControlsAssetBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterControlsAssetBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lookBackPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookBackPeriod = this._lookBackPeriod?.internalValue;
    }
    if (this._minimumRetentionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRetentionDuration = this._minimumRetentionDuration?.internalValue;
    }
    if (this._windowSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterControlsAssetBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lookBackPeriod.internalValue = undefined;
      this._minimumRetentionDuration.internalValue = undefined;
      this._windowSize.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lookBackPeriod.internalValue = value.lookBackPeriod;
      this._minimumRetentionDuration.internalValue = value.minimumRetentionDuration;
      this._windowSize.internalValue = value.windowSize;
    }
  }

  // look_back_period - computed: false, optional: true, required: false
  private _lookBackPeriod = new ReportConfigurationParameterControlsAssetBackupLookBackPeriodList(this, "look_back_period", true);
  public get lookBackPeriod() {
    return this._lookBackPeriod;
  }
  public putLookBackPeriod(value: ReportConfigurationParameterControlsAssetBackupLookBackPeriod[] | cdktf.IResolvable) {
    this._lookBackPeriod.internalValue = value;
  }
  public resetLookBackPeriod() {
    this._lookBackPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookBackPeriodInput() {
    return this._lookBackPeriod.internalValue;
  }

  // minimum_retention_duration - computed: false, optional: true, required: false
  private _minimumRetentionDuration = new ReportConfigurationParameterControlsAssetBackupMinimumRetentionDurationList(this, "minimum_retention_duration", true);
  public get minimumRetentionDuration() {
    return this._minimumRetentionDuration;
  }
  public putMinimumRetentionDuration(value: ReportConfigurationParameterControlsAssetBackupMinimumRetentionDuration[] | cdktf.IResolvable) {
    this._minimumRetentionDuration.internalValue = value;
  }
  public resetMinimumRetentionDuration() {
    this._minimumRetentionDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRetentionDurationInput() {
    return this._minimumRetentionDuration.internalValue;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize = new ReportConfigurationParameterControlsAssetBackupWindowSizeList(this, "window_size", true);
  public get windowSize() {
    return this._windowSize;
  }
  public putWindowSize(value: ReportConfigurationParameterControlsAssetBackupWindowSize[] | cdktf.IResolvable) {
    this._windowSize.internalValue = value;
  }
  public resetWindowSize() {
    this._windowSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize.internalValue;
  }
}

export class ReportConfigurationParameterControlsAssetBackupList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterControlsAssetBackup[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterControlsAssetBackupOutputReference {
    return new ReportConfigurationParameterControlsAssetBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterControlsAssetProtection {
  /**
  * Treat deactivated policies as compliant if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#should_ignore_deactivated_policy ReportConfiguration#should_ignore_deactivated_policy}
  */
  readonly shouldIgnoreDeactivatedPolicy: boolean | cdktf.IResolvable;
}

export function reportConfigurationParameterControlsAssetProtectionToTerraform(struct?: ReportConfigurationParameterControlsAssetProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_ignore_deactivated_policy: cdktf.booleanToTerraform(struct!.shouldIgnoreDeactivatedPolicy),
  }
}


export function reportConfigurationParameterControlsAssetProtectionToHclTerraform(struct?: ReportConfigurationParameterControlsAssetProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_ignore_deactivated_policy: {
      value: cdktf.booleanToHclTerraform(struct!.shouldIgnoreDeactivatedPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterControlsAssetProtectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterControlsAssetProtection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldIgnoreDeactivatedPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldIgnoreDeactivatedPolicy = this._shouldIgnoreDeactivatedPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterControlsAssetProtection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldIgnoreDeactivatedPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldIgnoreDeactivatedPolicy = value.shouldIgnoreDeactivatedPolicy;
    }
  }

  // should_ignore_deactivated_policy - computed: false, optional: false, required: true
  private _shouldIgnoreDeactivatedPolicy?: boolean | cdktf.IResolvable; 
  public get shouldIgnoreDeactivatedPolicy() {
    return this.getBooleanAttribute('should_ignore_deactivated_policy');
  }
  public set shouldIgnoreDeactivatedPolicy(value: boolean | cdktf.IResolvable) {
    this._shouldIgnoreDeactivatedPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldIgnoreDeactivatedPolicyInput() {
    return this._shouldIgnoreDeactivatedPolicy;
  }
}

export class ReportConfigurationParameterControlsAssetProtectionList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterControlsAssetProtection[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterControlsAssetProtectionOutputReference {
    return new ReportConfigurationParameterControlsAssetProtectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterControlsPolicyMinimumRetentionDuration {
  /**
  * Enum: `minutes` `hours` `days` `weeks` `months` `years`<br>Unit indicates the unit for time unit param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#unit ReportConfiguration#unit}
  */
  readonly unit: string;
  /**
  * Value indicates the value for time unit param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#value ReportConfiguration#value}
  */
  readonly value: number;
}

export function reportConfigurationParameterControlsPolicyMinimumRetentionDurationToTerraform(struct?: ReportConfigurationParameterControlsPolicyMinimumRetentionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function reportConfigurationParameterControlsPolicyMinimumRetentionDurationToHclTerraform(struct?: ReportConfigurationParameterControlsPolicyMinimumRetentionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterControlsPolicyMinimumRetentionDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterControlsPolicyMinimumRetentionDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterControlsPolicyMinimumRetentionDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ReportConfigurationParameterControlsPolicyMinimumRetentionDurationList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterControlsPolicyMinimumRetentionDuration[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterControlsPolicyMinimumRetentionDurationOutputReference {
    return new ReportConfigurationParameterControlsPolicyMinimumRetentionDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterControlsPolicyMinimumRpoFrequency {
  /**
  * Enum: `minutes` `hours` `days` `weeks` `months` `years`<br>Unit indicates the unit for time unit param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#unit ReportConfiguration#unit}
  */
  readonly unit: string;
  /**
  * Value indicates the value for time unit param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#value ReportConfiguration#value}
  */
  readonly value: number;
}

export function reportConfigurationParameterControlsPolicyMinimumRpoFrequencyToTerraform(struct?: ReportConfigurationParameterControlsPolicyMinimumRpoFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function reportConfigurationParameterControlsPolicyMinimumRpoFrequencyToHclTerraform(struct?: ReportConfigurationParameterControlsPolicyMinimumRpoFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterControlsPolicyMinimumRpoFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterControlsPolicyMinimumRpoFrequency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterControlsPolicyMinimumRpoFrequency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ReportConfigurationParameterControlsPolicyMinimumRpoFrequencyList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterControlsPolicyMinimumRpoFrequency[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterControlsPolicyMinimumRpoFrequencyOutputReference {
    return new ReportConfigurationParameterControlsPolicyMinimumRpoFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterControlsPolicy {
  /**
  * minimum_retention_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#minimum_retention_duration ReportConfiguration#minimum_retention_duration}
  */
  readonly minimumRetentionDuration?: ReportConfigurationParameterControlsPolicyMinimumRetentionDuration[] | cdktf.IResolvable;
  /**
  * minimum_rpo_frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#minimum_rpo_frequency ReportConfiguration#minimum_rpo_frequency}
  */
  readonly minimumRpoFrequency?: ReportConfigurationParameterControlsPolicyMinimumRpoFrequency[] | cdktf.IResolvable;
}

export function reportConfigurationParameterControlsPolicyToTerraform(struct?: ReportConfigurationParameterControlsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_retention_duration: cdktf.listMapper(reportConfigurationParameterControlsPolicyMinimumRetentionDurationToTerraform, true)(struct!.minimumRetentionDuration),
    minimum_rpo_frequency: cdktf.listMapper(reportConfigurationParameterControlsPolicyMinimumRpoFrequencyToTerraform, true)(struct!.minimumRpoFrequency),
  }
}


export function reportConfigurationParameterControlsPolicyToHclTerraform(struct?: ReportConfigurationParameterControlsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_retention_duration: {
      value: cdktf.listMapperHcl(reportConfigurationParameterControlsPolicyMinimumRetentionDurationToHclTerraform, true)(struct!.minimumRetentionDuration),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterControlsPolicyMinimumRetentionDurationList",
    },
    minimum_rpo_frequency: {
      value: cdktf.listMapperHcl(reportConfigurationParameterControlsPolicyMinimumRpoFrequencyToHclTerraform, true)(struct!.minimumRpoFrequency),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterControlsPolicyMinimumRpoFrequencyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterControlsPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterControlsPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumRetentionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRetentionDuration = this._minimumRetentionDuration?.internalValue;
    }
    if (this._minimumRpoFrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRpoFrequency = this._minimumRpoFrequency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterControlsPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumRetentionDuration.internalValue = undefined;
      this._minimumRpoFrequency.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumRetentionDuration.internalValue = value.minimumRetentionDuration;
      this._minimumRpoFrequency.internalValue = value.minimumRpoFrequency;
    }
  }

  // minimum_retention_duration - computed: false, optional: true, required: false
  private _minimumRetentionDuration = new ReportConfigurationParameterControlsPolicyMinimumRetentionDurationList(this, "minimum_retention_duration", true);
  public get minimumRetentionDuration() {
    return this._minimumRetentionDuration;
  }
  public putMinimumRetentionDuration(value: ReportConfigurationParameterControlsPolicyMinimumRetentionDuration[] | cdktf.IResolvable) {
    this._minimumRetentionDuration.internalValue = value;
  }
  public resetMinimumRetentionDuration() {
    this._minimumRetentionDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRetentionDurationInput() {
    return this._minimumRetentionDuration.internalValue;
  }

  // minimum_rpo_frequency - computed: false, optional: true, required: false
  private _minimumRpoFrequency = new ReportConfigurationParameterControlsPolicyMinimumRpoFrequencyList(this, "minimum_rpo_frequency", true);
  public get minimumRpoFrequency() {
    return this._minimumRpoFrequency;
  }
  public putMinimumRpoFrequency(value: ReportConfigurationParameterControlsPolicyMinimumRpoFrequency[] | cdktf.IResolvable) {
    this._minimumRpoFrequency.internalValue = value;
  }
  public resetMinimumRpoFrequency() {
    this._minimumRpoFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRpoFrequencyInput() {
    return this._minimumRpoFrequency.internalValue;
  }
}

export class ReportConfigurationParameterControlsPolicyList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterControlsPolicy[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterControlsPolicyOutputReference {
    return new ReportConfigurationParameterControlsPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterControls {
  /**
  * asset_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#asset_backup ReportConfiguration#asset_backup}
  */
  readonly assetBackup?: ReportConfigurationParameterControlsAssetBackup[] | cdktf.IResolvable;
  /**
  * asset_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#asset_protection ReportConfiguration#asset_protection}
  */
  readonly assetProtection?: ReportConfigurationParameterControlsAssetProtection[] | cdktf.IResolvable;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#policy ReportConfiguration#policy}
  */
  readonly policy?: ReportConfigurationParameterControlsPolicy[] | cdktf.IResolvable;
}

export function reportConfigurationParameterControlsToTerraform(struct?: ReportConfigurationParameterControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_backup: cdktf.listMapper(reportConfigurationParameterControlsAssetBackupToTerraform, true)(struct!.assetBackup),
    asset_protection: cdktf.listMapper(reportConfigurationParameterControlsAssetProtectionToTerraform, true)(struct!.assetProtection),
    policy: cdktf.listMapper(reportConfigurationParameterControlsPolicyToTerraform, true)(struct!.policy),
  }
}


export function reportConfigurationParameterControlsToHclTerraform(struct?: ReportConfigurationParameterControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_backup: {
      value: cdktf.listMapperHcl(reportConfigurationParameterControlsAssetBackupToHclTerraform, true)(struct!.assetBackup),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterControlsAssetBackupList",
    },
    asset_protection: {
      value: cdktf.listMapperHcl(reportConfigurationParameterControlsAssetProtectionToHclTerraform, true)(struct!.assetProtection),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterControlsAssetProtectionList",
    },
    policy: {
      value: cdktf.listMapperHcl(reportConfigurationParameterControlsPolicyToHclTerraform, true)(struct!.policy),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterControlsPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetBackup = this._assetBackup?.internalValue;
    }
    if (this._assetProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetProtection = this._assetProtection?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetBackup.internalValue = undefined;
      this._assetProtection.internalValue = undefined;
      this._policy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetBackup.internalValue = value.assetBackup;
      this._assetProtection.internalValue = value.assetProtection;
      this._policy.internalValue = value.policy;
    }
  }

  // asset_backup - computed: false, optional: true, required: false
  private _assetBackup = new ReportConfigurationParameterControlsAssetBackupList(this, "asset_backup", true);
  public get assetBackup() {
    return this._assetBackup;
  }
  public putAssetBackup(value: ReportConfigurationParameterControlsAssetBackup[] | cdktf.IResolvable) {
    this._assetBackup.internalValue = value;
  }
  public resetAssetBackup() {
    this._assetBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetBackupInput() {
    return this._assetBackup.internalValue;
  }

  // asset_protection - computed: false, optional: true, required: false
  private _assetProtection = new ReportConfigurationParameterControlsAssetProtectionList(this, "asset_protection", true);
  public get assetProtection() {
    return this._assetProtection;
  }
  public putAssetProtection(value: ReportConfigurationParameterControlsAssetProtection[] | cdktf.IResolvable) {
    this._assetProtection.internalValue = value;
  }
  public resetAssetProtection() {
    this._assetProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetProtectionInput() {
    return this._assetProtection.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new ReportConfigurationParameterControlsPolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: ReportConfigurationParameterControlsPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}

export class ReportConfigurationParameterControlsList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterControls[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterControlsOutputReference {
    return new ReportConfigurationParameterControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterFiltersAssetGroups {
  /**
  * The id of asset group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#id ReportConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region of asset group. For example, `us-west-2`. This is supported for AWS asset groups only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#region ReportConfiguration#region}
  */
  readonly region?: string;
  /**
  * Enum: `aws` `microsoft365` `vmware`<br>The type of asset group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#type ReportConfiguration#type}
  */
  readonly type: string;
}

export function reportConfigurationParameterFiltersAssetGroupsToTerraform(struct?: ReportConfigurationParameterFiltersAssetGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reportConfigurationParameterFiltersAssetGroupsToHclTerraform(struct?: ReportConfigurationParameterFiltersAssetGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
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

export class ReportConfigurationParameterFiltersAssetGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterFiltersAssetGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterFiltersAssetGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._region = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._region = value.region;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

export class ReportConfigurationParameterFiltersAssetGroupsList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterFiltersAssetGroups[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterFiltersAssetGroupsOutputReference {
    return new ReportConfigurationParameterFiltersAssetGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterFiltersAssetTags {
  /**
  * The key of tag to filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#key ReportConfiguration#key}
  */
  readonly key: string;
  /**
  * The value of tag to filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#value ReportConfiguration#value}
  */
  readonly value: string;
}

export function reportConfigurationParameterFiltersAssetTagsToTerraform(struct?: ReportConfigurationParameterFiltersAssetTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function reportConfigurationParameterFiltersAssetTagsToHclTerraform(struct?: ReportConfigurationParameterFiltersAssetTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterFiltersAssetTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterFiltersAssetTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterFiltersAssetTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ReportConfigurationParameterFiltersAssetTagsList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterFiltersAssetTags[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterFiltersAssetTagsOutputReference {
    return new ReportConfigurationParameterFiltersAssetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterFiltersAsset {
  /**
  * Enum: `equal` `or` `and`<br>The tag filter operation to be applied to the given tags. This is supported for AWS assets only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#tag_op_mode ReportConfiguration#tag_op_mode}
  */
  readonly tagOpMode?: string;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#groups ReportConfiguration#groups}
  */
  readonly groups?: ReportConfigurationParameterFiltersAssetGroups[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#tags ReportConfiguration#tags}
  */
  readonly tags?: ReportConfigurationParameterFiltersAssetTags[] | cdktf.IResolvable;
}

export function reportConfigurationParameterFiltersAssetToTerraform(struct?: ReportConfigurationParameterFiltersAsset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_op_mode: cdktf.stringToTerraform(struct!.tagOpMode),
    groups: cdktf.listMapper(reportConfigurationParameterFiltersAssetGroupsToTerraform, true)(struct!.groups),
    tags: cdktf.listMapper(reportConfigurationParameterFiltersAssetTagsToTerraform, true)(struct!.tags),
  }
}


export function reportConfigurationParameterFiltersAssetToHclTerraform(struct?: ReportConfigurationParameterFiltersAsset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_op_mode: {
      value: cdktf.stringToHclTerraform(struct!.tagOpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(reportConfigurationParameterFiltersAssetGroupsToHclTerraform, true)(struct!.groups),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterFiltersAssetGroupsList",
    },
    tags: {
      value: cdktf.listMapperHcl(reportConfigurationParameterFiltersAssetTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterFiltersAssetTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterFiltersAssetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterFiltersAsset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagOpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagOpMode = this._tagOpMode;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterFiltersAsset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagOpMode = undefined;
      this._groups.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagOpMode = value.tagOpMode;
      this._groups.internalValue = value.groups;
      this._tags.internalValue = value.tags;
    }
  }

  // tag_op_mode - computed: false, optional: true, required: false
  private _tagOpMode?: string; 
  public get tagOpMode() {
    return this.getStringAttribute('tag_op_mode');
  }
  public set tagOpMode(value: string) {
    this._tagOpMode = value;
  }
  public resetTagOpMode() {
    this._tagOpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagOpModeInput() {
    return this._tagOpMode;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new ReportConfigurationParameterFiltersAssetGroupsList(this, "groups", true);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: ReportConfigurationParameterFiltersAssetGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ReportConfigurationParameterFiltersAssetTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ReportConfigurationParameterFiltersAssetTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class ReportConfigurationParameterFiltersAssetList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterFiltersAsset[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterFiltersAssetOutputReference {
    return new ReportConfigurationParameterFiltersAssetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterFiltersCommon {
  /**
  * The asset types to be included in the report. For example, [`aws_ec2_instance`, `microsoft365_drive`].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#asset_types ReportConfiguration#asset_types}
  */
  readonly assetTypes?: string[];
  /**
  * The data sources to be included in the report. Possible values include `aws`, `microsoft365` or `vmware`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#data_sources ReportConfiguration#data_sources}
  */
  readonly dataSources?: string[];
  /**
  * The organizational units to be included in the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#organizational_units ReportConfiguration#organizational_units}
  */
  readonly organizationalUnits?: string[];
}

export function reportConfigurationParameterFiltersCommonToTerraform(struct?: ReportConfigurationParameterFiltersCommon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assetTypes),
    data_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataSources),
    organizational_units: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationalUnits),
  }
}


export function reportConfigurationParameterFiltersCommonToHclTerraform(struct?: ReportConfigurationParameterFiltersCommon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assetTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataSources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    organizational_units: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizationalUnits),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterFiltersCommonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterFiltersCommon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetTypes = this._assetTypes;
    }
    if (this._dataSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSources = this._dataSources;
    }
    if (this._organizationalUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnits = this._organizationalUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterFiltersCommon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetTypes = undefined;
      this._dataSources = undefined;
      this._organizationalUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetTypes = value.assetTypes;
      this._dataSources = value.dataSources;
      this._organizationalUnits = value.organizationalUnits;
    }
  }

  // asset_types - computed: false, optional: true, required: false
  private _assetTypes?: string[]; 
  public get assetTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('asset_types'));
  }
  public set assetTypes(value: string[]) {
    this._assetTypes = value;
  }
  public resetAssetTypes() {
    this._assetTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypesInput() {
    return this._assetTypes;
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources?: string[]; 
  public get dataSources() {
    return cdktf.Fn.tolist(this.getListAttribute('data_sources'));
  }
  public set dataSources(value: string[]) {
    this._dataSources = value;
  }
  public resetDataSources() {
    this._dataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources;
  }

  // organizational_units - computed: false, optional: true, required: false
  private _organizationalUnits?: string[]; 
  public get organizationalUnits() {
    return cdktf.Fn.tolist(this.getListAttribute('organizational_units'));
  }
  public set organizationalUnits(value: string[]) {
    this._organizationalUnits = value;
  }
  public resetOrganizationalUnits() {
    this._organizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitsInput() {
    return this._organizationalUnits;
  }
}

export class ReportConfigurationParameterFiltersCommonList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterFiltersCommon[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterFiltersCommonOutputReference {
    return new ReportConfigurationParameterFiltersCommonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameterFilters {
  /**
  * asset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#asset ReportConfiguration#asset}
  */
  readonly asset?: ReportConfigurationParameterFiltersAsset[] | cdktf.IResolvable;
  /**
  * common block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#common ReportConfiguration#common}
  */
  readonly common?: ReportConfigurationParameterFiltersCommon[] | cdktf.IResolvable;
}

export function reportConfigurationParameterFiltersToTerraform(struct?: ReportConfigurationParameterFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset: cdktf.listMapper(reportConfigurationParameterFiltersAssetToTerraform, true)(struct!.asset),
    common: cdktf.listMapper(reportConfigurationParameterFiltersCommonToTerraform, true)(struct!.common),
  }
}


export function reportConfigurationParameterFiltersToHclTerraform(struct?: ReportConfigurationParameterFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset: {
      value: cdktf.listMapperHcl(reportConfigurationParameterFiltersAssetToHclTerraform, true)(struct!.asset),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterFiltersAssetList",
    },
    common: {
      value: cdktf.listMapperHcl(reportConfigurationParameterFiltersCommonToHclTerraform, true)(struct!.common),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterFiltersCommonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameterFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asset = this._asset?.internalValue;
    }
    if (this._common?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.common = this._common?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameterFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asset.internalValue = undefined;
      this._common.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asset.internalValue = value.asset;
      this._common.internalValue = value.common;
    }
  }

  // asset - computed: false, optional: true, required: false
  private _asset = new ReportConfigurationParameterFiltersAssetList(this, "asset", true);
  public get asset() {
    return this._asset;
  }
  public putAsset(value: ReportConfigurationParameterFiltersAsset[] | cdktf.IResolvable) {
    this._asset.internalValue = value;
  }
  public resetAsset() {
    this._asset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInput() {
    return this._asset.internalValue;
  }

  // common - computed: false, optional: true, required: false
  private _common = new ReportConfigurationParameterFiltersCommonList(this, "common", true);
  public get common() {
    return this._common;
  }
  public putCommon(value: ReportConfigurationParameterFiltersCommon[] | cdktf.IResolvable) {
    this._common.internalValue = value;
  }
  public resetCommon() {
    this._common.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonInput() {
    return this._common.internalValue;
  }
}

export class ReportConfigurationParameterFiltersList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameterFilters[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterFiltersOutputReference {
    return new ReportConfigurationParameterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationParameter {
  /**
  * controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#controls ReportConfiguration#controls}
  */
  readonly controls?: ReportConfigurationParameterControls[] | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#filters ReportConfiguration#filters}
  */
  readonly filters?: ReportConfigurationParameterFilters[] | cdktf.IResolvable;
}

export function reportConfigurationParameterToTerraform(struct?: ReportConfigurationParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controls: cdktf.listMapper(reportConfigurationParameterControlsToTerraform, true)(struct!.controls),
    filters: cdktf.listMapper(reportConfigurationParameterFiltersToTerraform, true)(struct!.filters),
  }
}


export function reportConfigurationParameterToHclTerraform(struct?: ReportConfigurationParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controls: {
      value: cdktf.listMapperHcl(reportConfigurationParameterControlsToHclTerraform, true)(struct!.controls),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterControlsList",
    },
    filters: {
      value: cdktf.listMapperHcl(reportConfigurationParameterFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "set",
      storageClassType: "ReportConfigurationParameterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controls = this._controls?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controls.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controls.internalValue = value.controls;
      this._filters.internalValue = value.filters;
    }
  }

  // controls - computed: false, optional: true, required: false
  private _controls = new ReportConfigurationParameterControlsList(this, "controls", true);
  public get controls() {
    return this._controls;
  }
  public putControls(value: ReportConfigurationParameterControls[] | cdktf.IResolvable) {
    this._controls.internalValue = value;
  }
  public resetControls() {
    this._controls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlsInput() {
    return this._controls.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new ReportConfigurationParameterFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ReportConfigurationParameterFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class ReportConfigurationParameterList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationParameter[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationParameterOutputReference {
    return new ReportConfigurationParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportConfigurationSchedule {
  /**
  * The day of the month when the report will be sent out. This is required for the 'monthly' report frequency. It has to be >= 1 and <= 28, or '-1', which signifies end of month. If the day_of_month is set to -1 then the report will be sent out at the end of every month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#day_of_month ReportConfiguration#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Enum: `sunday` `monday` `tuesday` `wednesday` `thursday` `friday` `saturday`<br>Which day the report will be sent out. This is required for 'weekly' report frequency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#day_of_week ReportConfiguration#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Enum: `daily` `weekly` `monthly`<br>The unit of frequency in which the report is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#frequency ReportConfiguration#frequency}
  */
  readonly frequency?: string;
  /**
  * When the report will be send out. This field should follow the format `HH:MM` based on a 24-hour clock. Only values where HH ranges from 0 to 23 and MM ranges from 0 to 59 are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#start_time ReportConfiguration#start_time}
  */
  readonly startTime: string;
  /**
  * The timezone for the report schedule. The timezone must be a valid location name from the IANA Time Zone database. For instance, it can be `America/New_York`, `US/Central`, `UTC`, or similar. If empty, then the timezone is considered as UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#timezone ReportConfiguration#timezone}
  */
  readonly timezone?: string;
}

export function reportConfigurationScheduleToTerraform(struct?: ReportConfigurationSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function reportConfigurationScheduleToHclTerraform(struct?: ReportConfigurationSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportConfigurationScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportConfigurationSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportConfigurationSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._frequency = undefined;
      this._startTime = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._frequency = value.frequency;
      this._startTime = value.startTime;
      this._timezone = value.timezone;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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
}

export class ReportConfigurationScheduleList extends cdktf.ComplexList {
  public internalValue? : ReportConfigurationSchedule[] | cdktf.IResolvable

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
  public get(index: number): ReportConfigurationScheduleOutputReference {
    return new ReportConfigurationScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration clumio_report_configuration}
*/
export class ReportConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_report_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportConfiguration to import
  * @param importFromId The id of the existing ReportConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_report_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/report_configuration clumio_report_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ReportConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_report_configuration',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._notification.internalValue = config.notification;
    this._parameter.internalValue = config.parameter;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // notification - computed: false, optional: true, required: false
  private _notification = new ReportConfigurationNotificationList(this, "notification", true);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: ReportConfigurationNotification[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ReportConfigurationParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ReportConfigurationParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new ReportConfigurationScheduleList(this, "schedule", true);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ReportConfigurationSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      notification: cdktf.listMapper(reportConfigurationNotificationToTerraform, true)(this._notification.internalValue),
      parameter: cdktf.listMapper(reportConfigurationParameterToTerraform, true)(this._parameter.internalValue),
      schedule: cdktf.listMapper(reportConfigurationScheduleToTerraform, true)(this._schedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      notification: {
        value: cdktf.listMapperHcl(reportConfigurationNotificationToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ReportConfigurationNotificationList",
      },
      parameter: {
        value: cdktf.listMapperHcl(reportConfigurationParameterToHclTerraform, true)(this._parameter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ReportConfigurationParameterList",
      },
      schedule: {
        value: cdktf.listMapperHcl(reportConfigurationScheduleToHclTerraform, true)(this._schedule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ReportConfigurationScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
