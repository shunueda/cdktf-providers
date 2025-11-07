// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogThreatweightConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#blocked_connection LogThreatweight#blocked_connection}
  */
  readonly blockedConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#botnet_connection_detected LogThreatweight#botnet_connection_detected}
  */
  readonly botnetConnectionDetected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#dynamic_sort_subtable LogThreatweight#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#failed_connection LogThreatweight#failed_connection}
  */
  readonly failedConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#get_all_tables LogThreatweight#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#id LogThreatweight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#status LogThreatweight#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#url_block_detected LogThreatweight#url_block_detected}
  */
  readonly urlBlockDetected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#vdomparam LogThreatweight#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#application LogThreatweight#application}
  */
  readonly application?: LogThreatweightApplication[] | cdktf.IResolvable;
  /**
  * geolocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#geolocation LogThreatweight#geolocation}
  */
  readonly geolocation?: LogThreatweightGeolocation[] | cdktf.IResolvable;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#ips LogThreatweight#ips}
  */
  readonly ips?: LogThreatweightIps;
  /**
  * level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#level LogThreatweight#level}
  */
  readonly level?: LogThreatweightLevel;
  /**
  * malware block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#malware LogThreatweight#malware}
  */
  readonly malware?: LogThreatweightMalware;
  /**
  * web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#web LogThreatweight#web}
  */
  readonly web?: LogThreatweightWeb[] | cdktf.IResolvable;
}
export interface LogThreatweightApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#category LogThreatweight#category}
  */
  readonly category?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#id LogThreatweight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#level LogThreatweight#level}
  */
  readonly level?: string;
}

export function logThreatweightApplicationToTerraform(struct?: LogThreatweightApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.numberToTerraform(struct!.category),
    id: cdktf.numberToTerraform(struct!.id),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function logThreatweightApplicationToHclTerraform(struct?: LogThreatweightApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.numberToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogThreatweightApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogThreatweightApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogThreatweightApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._id = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._id = value.id;
      this._level = value.level;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: number; 
  public get category() {
    return this.getNumberAttribute('category');
  }
  public set category(value: number) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class LogThreatweightApplicationList extends cdktf.ComplexList {
  public internalValue? : LogThreatweightApplication[] | cdktf.IResolvable

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
  public get(index: number): LogThreatweightApplicationOutputReference {
    return new LogThreatweightApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogThreatweightGeolocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#country LogThreatweight#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#id LogThreatweight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#level LogThreatweight#level}
  */
  readonly level?: string;
}

export function logThreatweightGeolocationToTerraform(struct?: LogThreatweightGeolocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    id: cdktf.numberToTerraform(struct!.id),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function logThreatweightGeolocationToHclTerraform(struct?: LogThreatweightGeolocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogThreatweightGeolocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogThreatweightGeolocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogThreatweightGeolocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._country = undefined;
      this._id = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._country = value.country;
      this._id = value.id;
      this._level = value.level;
    }
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
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

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class LogThreatweightGeolocationList extends cdktf.ComplexList {
  public internalValue? : LogThreatweightGeolocation[] | cdktf.IResolvable

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
  public get(index: number): LogThreatweightGeolocationOutputReference {
    return new LogThreatweightGeolocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogThreatweightIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#critical_severity LogThreatweight#critical_severity}
  */
  readonly criticalSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#high_severity LogThreatweight#high_severity}
  */
  readonly highSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#info_severity LogThreatweight#info_severity}
  */
  readonly infoSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#low_severity LogThreatweight#low_severity}
  */
  readonly lowSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#medium_severity LogThreatweight#medium_severity}
  */
  readonly mediumSeverity?: string;
}

export function logThreatweightIpsToTerraform(struct?: LogThreatweightIpsOutputReference | LogThreatweightIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_severity: cdktf.stringToTerraform(struct!.criticalSeverity),
    high_severity: cdktf.stringToTerraform(struct!.highSeverity),
    info_severity: cdktf.stringToTerraform(struct!.infoSeverity),
    low_severity: cdktf.stringToTerraform(struct!.lowSeverity),
    medium_severity: cdktf.stringToTerraform(struct!.mediumSeverity),
  }
}


export function logThreatweightIpsToHclTerraform(struct?: LogThreatweightIpsOutputReference | LogThreatweightIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical_severity: {
      value: cdktf.stringToHclTerraform(struct!.criticalSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    high_severity: {
      value: cdktf.stringToHclTerraform(struct!.highSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_severity: {
      value: cdktf.stringToHclTerraform(struct!.infoSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low_severity: {
      value: cdktf.stringToHclTerraform(struct!.lowSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    medium_severity: {
      value: cdktf.stringToHclTerraform(struct!.mediumSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogThreatweightIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogThreatweightIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criticalSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalSeverity = this._criticalSeverity;
    }
    if (this._highSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.highSeverity = this._highSeverity;
    }
    if (this._infoSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoSeverity = this._infoSeverity;
    }
    if (this._lowSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSeverity = this._lowSeverity;
    }
    if (this._mediumSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSeverity = this._mediumSeverity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogThreatweightIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criticalSeverity = undefined;
      this._highSeverity = undefined;
      this._infoSeverity = undefined;
      this._lowSeverity = undefined;
      this._mediumSeverity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criticalSeverity = value.criticalSeverity;
      this._highSeverity = value.highSeverity;
      this._infoSeverity = value.infoSeverity;
      this._lowSeverity = value.lowSeverity;
      this._mediumSeverity = value.mediumSeverity;
    }
  }

  // critical_severity - computed: true, optional: true, required: false
  private _criticalSeverity?: string; 
  public get criticalSeverity() {
    return this.getStringAttribute('critical_severity');
  }
  public set criticalSeverity(value: string) {
    this._criticalSeverity = value;
  }
  public resetCriticalSeverity() {
    this._criticalSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalSeverityInput() {
    return this._criticalSeverity;
  }

  // high_severity - computed: true, optional: true, required: false
  private _highSeverity?: string; 
  public get highSeverity() {
    return this.getStringAttribute('high_severity');
  }
  public set highSeverity(value: string) {
    this._highSeverity = value;
  }
  public resetHighSeverity() {
    this._highSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highSeverityInput() {
    return this._highSeverity;
  }

  // info_severity - computed: true, optional: true, required: false
  private _infoSeverity?: string; 
  public get infoSeverity() {
    return this.getStringAttribute('info_severity');
  }
  public set infoSeverity(value: string) {
    this._infoSeverity = value;
  }
  public resetInfoSeverity() {
    this._infoSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoSeverityInput() {
    return this._infoSeverity;
  }

  // low_severity - computed: true, optional: true, required: false
  private _lowSeverity?: string; 
  public get lowSeverity() {
    return this.getStringAttribute('low_severity');
  }
  public set lowSeverity(value: string) {
    this._lowSeverity = value;
  }
  public resetLowSeverity() {
    this._lowSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSeverityInput() {
    return this._lowSeverity;
  }

  // medium_severity - computed: true, optional: true, required: false
  private _mediumSeverity?: string; 
  public get mediumSeverity() {
    return this.getStringAttribute('medium_severity');
  }
  public set mediumSeverity(value: string) {
    this._mediumSeverity = value;
  }
  public resetMediumSeverity() {
    this._mediumSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSeverityInput() {
    return this._mediumSeverity;
  }
}
export interface LogThreatweightLevel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#critical LogThreatweight#critical}
  */
  readonly critical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#high LogThreatweight#high}
  */
  readonly high?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#low LogThreatweight#low}
  */
  readonly low?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#medium LogThreatweight#medium}
  */
  readonly medium?: number;
}

export function logThreatweightLevelToTerraform(struct?: LogThreatweightLevelOutputReference | LogThreatweightLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.numberToTerraform(struct!.critical),
    high: cdktf.numberToTerraform(struct!.high),
    low: cdktf.numberToTerraform(struct!.low),
    medium: cdktf.numberToTerraform(struct!.medium),
  }
}


export function logThreatweightLevelToHclTerraform(struct?: LogThreatweightLevelOutputReference | LogThreatweightLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.numberToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    medium: {
      value: cdktf.numberToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogThreatweightLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogThreatweightLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogThreatweightLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._high = undefined;
      this._low = undefined;
      this._medium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._high = value.high;
      this._low = value.low;
      this._medium = value.medium;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: number; 
  public get critical() {
    return this.getNumberAttribute('critical');
  }
  public set critical(value: number) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // high - computed: true, optional: true, required: false
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: true, optional: true, required: false
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }

  // medium - computed: true, optional: true, required: false
  private _medium?: number; 
  public get medium() {
    return this.getNumberAttribute('medium');
  }
  public set medium(value: number) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }
}
export interface LogThreatweightMalware {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#botnet_connection LogThreatweight#botnet_connection}
  */
  readonly botnetConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#command_blocked LogThreatweight#command_blocked}
  */
  readonly commandBlocked?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#content_disarm LogThreatweight#content_disarm}
  */
  readonly contentDisarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#ems_threat_feed LogThreatweight#ems_threat_feed}
  */
  readonly emsThreatFeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#file_blocked LogThreatweight#file_blocked}
  */
  readonly fileBlocked?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#fortiai LogThreatweight#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#fortindr LogThreatweight#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#fortisandbox LogThreatweight#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#fsa_high_risk LogThreatweight#fsa_high_risk}
  */
  readonly fsaHighRisk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#fsa_malicious LogThreatweight#fsa_malicious}
  */
  readonly fsaMalicious?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#fsa_medium_risk LogThreatweight#fsa_medium_risk}
  */
  readonly fsaMediumRisk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#inline_block LogThreatweight#inline_block}
  */
  readonly inlineBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#malware_list LogThreatweight#malware_list}
  */
  readonly malwareList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#mimefragmented LogThreatweight#mimefragmented}
  */
  readonly mimefragmented?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#oversized LogThreatweight#oversized}
  */
  readonly oversized?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#switch_proto LogThreatweight#switch_proto}
  */
  readonly switchProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#virus_file_type_executable LogThreatweight#virus_file_type_executable}
  */
  readonly virusFileTypeExecutable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#virus_infected LogThreatweight#virus_infected}
  */
  readonly virusInfected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#virus_outbreak_prevention LogThreatweight#virus_outbreak_prevention}
  */
  readonly virusOutbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#virus_scan_error LogThreatweight#virus_scan_error}
  */
  readonly virusScanError?: string;
}

export function logThreatweightMalwareToTerraform(struct?: LogThreatweightMalwareOutputReference | LogThreatweightMalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    botnet_connection: cdktf.stringToTerraform(struct!.botnetConnection),
    command_blocked: cdktf.stringToTerraform(struct!.commandBlocked),
    content_disarm: cdktf.stringToTerraform(struct!.contentDisarm),
    ems_threat_feed: cdktf.stringToTerraform(struct!.emsThreatFeed),
    file_blocked: cdktf.stringToTerraform(struct!.fileBlocked),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    fsa_high_risk: cdktf.stringToTerraform(struct!.fsaHighRisk),
    fsa_malicious: cdktf.stringToTerraform(struct!.fsaMalicious),
    fsa_medium_risk: cdktf.stringToTerraform(struct!.fsaMediumRisk),
    inline_block: cdktf.stringToTerraform(struct!.inlineBlock),
    malware_list: cdktf.stringToTerraform(struct!.malwareList),
    mimefragmented: cdktf.stringToTerraform(struct!.mimefragmented),
    oversized: cdktf.stringToTerraform(struct!.oversized),
    switch_proto: cdktf.stringToTerraform(struct!.switchProto),
    virus_file_type_executable: cdktf.stringToTerraform(struct!.virusFileTypeExecutable),
    virus_infected: cdktf.stringToTerraform(struct!.virusInfected),
    virus_outbreak_prevention: cdktf.stringToTerraform(struct!.virusOutbreakPrevention),
    virus_scan_error: cdktf.stringToTerraform(struct!.virusScanError),
  }
}


export function logThreatweightMalwareToHclTerraform(struct?: LogThreatweightMalwareOutputReference | LogThreatweightMalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    botnet_connection: {
      value: cdktf.stringToHclTerraform(struct!.botnetConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command_blocked: {
      value: cdktf.stringToHclTerraform(struct!.commandBlocked),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_disarm: {
      value: cdktf.stringToHclTerraform(struct!.contentDisarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ems_threat_feed: {
      value: cdktf.stringToHclTerraform(struct!.emsThreatFeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_blocked: {
      value: cdktf.stringToHclTerraform(struct!.fileBlocked),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiai: {
      value: cdktf.stringToHclTerraform(struct!.fortiai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortindr: {
      value: cdktf.stringToHclTerraform(struct!.fortindr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortisandbox: {
      value: cdktf.stringToHclTerraform(struct!.fortisandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fsa_high_risk: {
      value: cdktf.stringToHclTerraform(struct!.fsaHighRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fsa_malicious: {
      value: cdktf.stringToHclTerraform(struct!.fsaMalicious),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fsa_medium_risk: {
      value: cdktf.stringToHclTerraform(struct!.fsaMediumRisk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inline_block: {
      value: cdktf.stringToHclTerraform(struct!.inlineBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_list: {
      value: cdktf.stringToHclTerraform(struct!.malwareList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mimefragmented: {
      value: cdktf.stringToHclTerraform(struct!.mimefragmented),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversized: {
      value: cdktf.stringToHclTerraform(struct!.oversized),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_proto: {
      value: cdktf.stringToHclTerraform(struct!.switchProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virus_file_type_executable: {
      value: cdktf.stringToHclTerraform(struct!.virusFileTypeExecutable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virus_infected: {
      value: cdktf.stringToHclTerraform(struct!.virusInfected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virus_outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.virusOutbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virus_scan_error: {
      value: cdktf.stringToHclTerraform(struct!.virusScanError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogThreatweightMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogThreatweightMalware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botnetConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.botnetConnection = this._botnetConnection;
    }
    if (this._commandBlocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandBlocked = this._commandBlocked;
    }
    if (this._contentDisarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDisarm = this._contentDisarm;
    }
    if (this._emsThreatFeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.emsThreatFeed = this._emsThreatFeed;
    }
    if (this._fileBlocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlocked = this._fileBlocked;
    }
    if (this._fortiai !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiai = this._fortiai;
    }
    if (this._fortindr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortindr = this._fortindr;
    }
    if (this._fortisandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortisandbox = this._fortisandbox;
    }
    if (this._fsaHighRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsaHighRisk = this._fsaHighRisk;
    }
    if (this._fsaMalicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsaMalicious = this._fsaMalicious;
    }
    if (this._fsaMediumRisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsaMediumRisk = this._fsaMediumRisk;
    }
    if (this._inlineBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineBlock = this._inlineBlock;
    }
    if (this._malwareList !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareList = this._malwareList;
    }
    if (this._mimefragmented !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimefragmented = this._mimefragmented;
    }
    if (this._oversized !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversized = this._oversized;
    }
    if (this._switchProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchProto = this._switchProto;
    }
    if (this._virusFileTypeExecutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.virusFileTypeExecutable = this._virusFileTypeExecutable;
    }
    if (this._virusInfected !== undefined) {
      hasAnyValues = true;
      internalValueResult.virusInfected = this._virusInfected;
    }
    if (this._virusOutbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.virusOutbreakPrevention = this._virusOutbreakPrevention;
    }
    if (this._virusScanError !== undefined) {
      hasAnyValues = true;
      internalValueResult.virusScanError = this._virusScanError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogThreatweightMalware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._botnetConnection = undefined;
      this._commandBlocked = undefined;
      this._contentDisarm = undefined;
      this._emsThreatFeed = undefined;
      this._fileBlocked = undefined;
      this._fortiai = undefined;
      this._fortindr = undefined;
      this._fortisandbox = undefined;
      this._fsaHighRisk = undefined;
      this._fsaMalicious = undefined;
      this._fsaMediumRisk = undefined;
      this._inlineBlock = undefined;
      this._malwareList = undefined;
      this._mimefragmented = undefined;
      this._oversized = undefined;
      this._switchProto = undefined;
      this._virusFileTypeExecutable = undefined;
      this._virusInfected = undefined;
      this._virusOutbreakPrevention = undefined;
      this._virusScanError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._botnetConnection = value.botnetConnection;
      this._commandBlocked = value.commandBlocked;
      this._contentDisarm = value.contentDisarm;
      this._emsThreatFeed = value.emsThreatFeed;
      this._fileBlocked = value.fileBlocked;
      this._fortiai = value.fortiai;
      this._fortindr = value.fortindr;
      this._fortisandbox = value.fortisandbox;
      this._fsaHighRisk = value.fsaHighRisk;
      this._fsaMalicious = value.fsaMalicious;
      this._fsaMediumRisk = value.fsaMediumRisk;
      this._inlineBlock = value.inlineBlock;
      this._malwareList = value.malwareList;
      this._mimefragmented = value.mimefragmented;
      this._oversized = value.oversized;
      this._switchProto = value.switchProto;
      this._virusFileTypeExecutable = value.virusFileTypeExecutable;
      this._virusInfected = value.virusInfected;
      this._virusOutbreakPrevention = value.virusOutbreakPrevention;
      this._virusScanError = value.virusScanError;
    }
  }

  // botnet_connection - computed: false, optional: true, required: false
  private _botnetConnection?: string; 
  public get botnetConnection() {
    return this.getStringAttribute('botnet_connection');
  }
  public set botnetConnection(value: string) {
    this._botnetConnection = value;
  }
  public resetBotnetConnection() {
    this._botnetConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botnetConnectionInput() {
    return this._botnetConnection;
  }

  // command_blocked - computed: true, optional: true, required: false
  private _commandBlocked?: string; 
  public get commandBlocked() {
    return this.getStringAttribute('command_blocked');
  }
  public set commandBlocked(value: string) {
    this._commandBlocked = value;
  }
  public resetCommandBlocked() {
    this._commandBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandBlockedInput() {
    return this._commandBlocked;
  }

  // content_disarm - computed: true, optional: true, required: false
  private _contentDisarm?: string; 
  public get contentDisarm() {
    return this.getStringAttribute('content_disarm');
  }
  public set contentDisarm(value: string) {
    this._contentDisarm = value;
  }
  public resetContentDisarm() {
    this._contentDisarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDisarmInput() {
    return this._contentDisarm;
  }

  // ems_threat_feed - computed: true, optional: true, required: false
  private _emsThreatFeed?: string; 
  public get emsThreatFeed() {
    return this.getStringAttribute('ems_threat_feed');
  }
  public set emsThreatFeed(value: string) {
    this._emsThreatFeed = value;
  }
  public resetEmsThreatFeed() {
    this._emsThreatFeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emsThreatFeedInput() {
    return this._emsThreatFeed;
  }

  // file_blocked - computed: true, optional: true, required: false
  private _fileBlocked?: string; 
  public get fileBlocked() {
    return this.getStringAttribute('file_blocked');
  }
  public set fileBlocked(value: string) {
    this._fileBlocked = value;
  }
  public resetFileBlocked() {
    this._fileBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockedInput() {
    return this._fileBlocked;
  }

  // fortiai - computed: true, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // fortindr - computed: true, optional: true, required: false
  private _fortindr?: string; 
  public get fortindr() {
    return this.getStringAttribute('fortindr');
  }
  public set fortindr(value: string) {
    this._fortindr = value;
  }
  public resetFortindr() {
    this._fortindr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrInput() {
    return this._fortindr;
  }

  // fortisandbox - computed: true, optional: true, required: false
  private _fortisandbox?: string; 
  public get fortisandbox() {
    return this.getStringAttribute('fortisandbox');
  }
  public set fortisandbox(value: string) {
    this._fortisandbox = value;
  }
  public resetFortisandbox() {
    this._fortisandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxInput() {
    return this._fortisandbox;
  }

  // fsa_high_risk - computed: true, optional: true, required: false
  private _fsaHighRisk?: string; 
  public get fsaHighRisk() {
    return this.getStringAttribute('fsa_high_risk');
  }
  public set fsaHighRisk(value: string) {
    this._fsaHighRisk = value;
  }
  public resetFsaHighRisk() {
    this._fsaHighRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsaHighRiskInput() {
    return this._fsaHighRisk;
  }

  // fsa_malicious - computed: true, optional: true, required: false
  private _fsaMalicious?: string; 
  public get fsaMalicious() {
    return this.getStringAttribute('fsa_malicious');
  }
  public set fsaMalicious(value: string) {
    this._fsaMalicious = value;
  }
  public resetFsaMalicious() {
    this._fsaMalicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsaMaliciousInput() {
    return this._fsaMalicious;
  }

  // fsa_medium_risk - computed: true, optional: true, required: false
  private _fsaMediumRisk?: string; 
  public get fsaMediumRisk() {
    return this.getStringAttribute('fsa_medium_risk');
  }
  public set fsaMediumRisk(value: string) {
    this._fsaMediumRisk = value;
  }
  public resetFsaMediumRisk() {
    this._fsaMediumRisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsaMediumRiskInput() {
    return this._fsaMediumRisk;
  }

  // inline_block - computed: true, optional: true, required: false
  private _inlineBlock?: string; 
  public get inlineBlock() {
    return this.getStringAttribute('inline_block');
  }
  public set inlineBlock(value: string) {
    this._inlineBlock = value;
  }
  public resetInlineBlock() {
    this._inlineBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineBlockInput() {
    return this._inlineBlock;
  }

  // malware_list - computed: true, optional: true, required: false
  private _malwareList?: string; 
  public get malwareList() {
    return this.getStringAttribute('malware_list');
  }
  public set malwareList(value: string) {
    this._malwareList = value;
  }
  public resetMalwareList() {
    this._malwareList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareListInput() {
    return this._malwareList;
  }

  // mimefragmented - computed: true, optional: true, required: false
  private _mimefragmented?: string; 
  public get mimefragmented() {
    return this.getStringAttribute('mimefragmented');
  }
  public set mimefragmented(value: string) {
    this._mimefragmented = value;
  }
  public resetMimefragmented() {
    this._mimefragmented = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimefragmentedInput() {
    return this._mimefragmented;
  }

  // oversized - computed: true, optional: true, required: false
  private _oversized?: string; 
  public get oversized() {
    return this.getStringAttribute('oversized');
  }
  public set oversized(value: string) {
    this._oversized = value;
  }
  public resetOversized() {
    this._oversized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedInput() {
    return this._oversized;
  }

  // switch_proto - computed: true, optional: true, required: false
  private _switchProto?: string; 
  public get switchProto() {
    return this.getStringAttribute('switch_proto');
  }
  public set switchProto(value: string) {
    this._switchProto = value;
  }
  public resetSwitchProto() {
    this._switchProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchProtoInput() {
    return this._switchProto;
  }

  // virus_file_type_executable - computed: true, optional: true, required: false
  private _virusFileTypeExecutable?: string; 
  public get virusFileTypeExecutable() {
    return this.getStringAttribute('virus_file_type_executable');
  }
  public set virusFileTypeExecutable(value: string) {
    this._virusFileTypeExecutable = value;
  }
  public resetVirusFileTypeExecutable() {
    this._virusFileTypeExecutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusFileTypeExecutableInput() {
    return this._virusFileTypeExecutable;
  }

  // virus_infected - computed: true, optional: true, required: false
  private _virusInfected?: string; 
  public get virusInfected() {
    return this.getStringAttribute('virus_infected');
  }
  public set virusInfected(value: string) {
    this._virusInfected = value;
  }
  public resetVirusInfected() {
    this._virusInfected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusInfectedInput() {
    return this._virusInfected;
  }

  // virus_outbreak_prevention - computed: true, optional: true, required: false
  private _virusOutbreakPrevention?: string; 
  public get virusOutbreakPrevention() {
    return this.getStringAttribute('virus_outbreak_prevention');
  }
  public set virusOutbreakPrevention(value: string) {
    this._virusOutbreakPrevention = value;
  }
  public resetVirusOutbreakPrevention() {
    this._virusOutbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusOutbreakPreventionInput() {
    return this._virusOutbreakPrevention;
  }

  // virus_scan_error - computed: true, optional: true, required: false
  private _virusScanError?: string; 
  public get virusScanError() {
    return this.getStringAttribute('virus_scan_error');
  }
  public set virusScanError(value: string) {
    this._virusScanError = value;
  }
  public resetVirusScanError() {
    this._virusScanError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusScanErrorInput() {
    return this._virusScanError;
  }
}
export interface LogThreatweightWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#category LogThreatweight#category}
  */
  readonly category?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#id LogThreatweight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#level LogThreatweight#level}
  */
  readonly level?: string;
}

export function logThreatweightWebToTerraform(struct?: LogThreatweightWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.numberToTerraform(struct!.category),
    id: cdktf.numberToTerraform(struct!.id),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function logThreatweightWebToHclTerraform(struct?: LogThreatweightWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.numberToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogThreatweightWebOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogThreatweightWeb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogThreatweightWeb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._id = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._id = value.id;
      this._level = value.level;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: number; 
  public get category() {
    return this.getNumberAttribute('category');
  }
  public set category(value: number) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class LogThreatweightWebList extends cdktf.ComplexList {
  public internalValue? : LogThreatweightWeb[] | cdktf.IResolvable

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
  public get(index: number): LogThreatweightWebOutputReference {
    return new LogThreatweightWebOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight fortios_log_threatweight}
*/
export class LogThreatweight extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_log_threatweight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogThreatweight resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogThreatweight to import
  * @param importFromId The id of the existing LogThreatweight that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogThreatweight to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_log_threatweight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_threatweight fortios_log_threatweight} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogThreatweightConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogThreatweightConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_log_threatweight',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockedConnection = config.blockedConnection;
    this._botnetConnectionDetected = config.botnetConnectionDetected;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._failedConnection = config.failedConnection;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._status = config.status;
    this._urlBlockDetected = config.urlBlockDetected;
    this._vdomparam = config.vdomparam;
    this._application.internalValue = config.application;
    this._geolocation.internalValue = config.geolocation;
    this._ips.internalValue = config.ips;
    this._level.internalValue = config.level;
    this._malware.internalValue = config.malware;
    this._web.internalValue = config.web;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_connection - computed: true, optional: true, required: false
  private _blockedConnection?: string; 
  public get blockedConnection() {
    return this.getStringAttribute('blocked_connection');
  }
  public set blockedConnection(value: string) {
    this._blockedConnection = value;
  }
  public resetBlockedConnection() {
    this._blockedConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedConnectionInput() {
    return this._blockedConnection;
  }

  // botnet_connection_detected - computed: true, optional: true, required: false
  private _botnetConnectionDetected?: string; 
  public get botnetConnectionDetected() {
    return this.getStringAttribute('botnet_connection_detected');
  }
  public set botnetConnectionDetected(value: string) {
    this._botnetConnectionDetected = value;
  }
  public resetBotnetConnectionDetected() {
    this._botnetConnectionDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botnetConnectionDetectedInput() {
    return this._botnetConnectionDetected;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // failed_connection - computed: true, optional: true, required: false
  private _failedConnection?: string; 
  public get failedConnection() {
    return this.getStringAttribute('failed_connection');
  }
  public set failedConnection(value: string) {
    this._failedConnection = value;
  }
  public resetFailedConnection() {
    this._failedConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedConnectionInput() {
    return this._failedConnection;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // url_block_detected - computed: true, optional: true, required: false
  private _urlBlockDetected?: string; 
  public get urlBlockDetected() {
    return this.getStringAttribute('url_block_detected');
  }
  public set urlBlockDetected(value: string) {
    this._urlBlockDetected = value;
  }
  public resetUrlBlockDetected() {
    this._urlBlockDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBlockDetectedInput() {
    return this._urlBlockDetected;
  }

  // vdomparam - computed: true, optional: true, required: false
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

  // application - computed: false, optional: true, required: false
  private _application = new LogThreatweightApplicationList(this, "application", false);
  public get application() {
    return this._application;
  }
  public putApplication(value: LogThreatweightApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // geolocation - computed: false, optional: true, required: false
  private _geolocation = new LogThreatweightGeolocationList(this, "geolocation", false);
  public get geolocation() {
    return this._geolocation;
  }
  public putGeolocation(value: LogThreatweightGeolocation[] | cdktf.IResolvable) {
    this._geolocation.internalValue = value;
  }
  public resetGeolocation() {
    this._geolocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationInput() {
    return this._geolocation.internalValue;
  }

  // ips - computed: false, optional: true, required: false
  private _ips = new LogThreatweightIpsOutputReference(this, "ips");
  public get ips() {
    return this._ips;
  }
  public putIps(value: LogThreatweightIps) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // level - computed: false, optional: true, required: false
  private _level = new LogThreatweightLevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }
  public putLevel(value: LogThreatweightLevel) {
    this._level.internalValue = value;
  }
  public resetLevel() {
    this._level.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }

  // malware - computed: false, optional: true, required: false
  private _malware = new LogThreatweightMalwareOutputReference(this, "malware");
  public get malware() {
    return this._malware;
  }
  public putMalware(value: LogThreatweightMalware) {
    this._malware.internalValue = value;
  }
  public resetMalware() {
    this._malware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareInput() {
    return this._malware.internalValue;
  }

  // web - computed: false, optional: true, required: false
  private _web = new LogThreatweightWebList(this, "web", false);
  public get web() {
    return this._web;
  }
  public putWeb(value: LogThreatweightWeb[] | cdktf.IResolvable) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_connection: cdktf.stringToTerraform(this._blockedConnection),
      botnet_connection_detected: cdktf.stringToTerraform(this._botnetConnectionDetected),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      failed_connection: cdktf.stringToTerraform(this._failedConnection),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      url_block_detected: cdktf.stringToTerraform(this._urlBlockDetected),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      application: cdktf.listMapper(logThreatweightApplicationToTerraform, true)(this._application.internalValue),
      geolocation: cdktf.listMapper(logThreatweightGeolocationToTerraform, true)(this._geolocation.internalValue),
      ips: logThreatweightIpsToTerraform(this._ips.internalValue),
      level: logThreatweightLevelToTerraform(this._level.internalValue),
      malware: logThreatweightMalwareToTerraform(this._malware.internalValue),
      web: cdktf.listMapper(logThreatweightWebToTerraform, true)(this._web.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked_connection: {
        value: cdktf.stringToHclTerraform(this._blockedConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      botnet_connection_detected: {
        value: cdktf.stringToHclTerraform(this._botnetConnectionDetected),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_connection: {
        value: cdktf.stringToHclTerraform(this._failedConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      url_block_detected: {
        value: cdktf.stringToHclTerraform(this._urlBlockDetected),
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
      application: {
        value: cdktf.listMapperHcl(logThreatweightApplicationToHclTerraform, true)(this._application.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogThreatweightApplicationList",
      },
      geolocation: {
        value: cdktf.listMapperHcl(logThreatweightGeolocationToHclTerraform, true)(this._geolocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogThreatweightGeolocationList",
      },
      ips: {
        value: logThreatweightIpsToHclTerraform(this._ips.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogThreatweightIpsList",
      },
      level: {
        value: logThreatweightLevelToHclTerraform(this._level.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogThreatweightLevelList",
      },
      malware: {
        value: logThreatweightMalwareToHclTerraform(this._malware.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogThreatweightMalwareList",
      },
      web: {
        value: cdktf.listMapperHcl(logThreatweightWebToHclTerraform, true)(this._web.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogThreatweightWebList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
