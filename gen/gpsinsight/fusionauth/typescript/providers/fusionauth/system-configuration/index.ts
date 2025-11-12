// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#audit_log_configuration SystemConfiguration#audit_log_configuration}
  */
  readonly auditLogConfiguration?: SystemConfigurationAuditLogConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#cors_configuration SystemConfiguration#cors_configuration}
  */
  readonly corsConfiguration?: SystemConfigurationCorsConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#event_log_configuration SystemConfiguration#event_log_configuration}
  */
  readonly eventLogConfiguration?: SystemConfigurationEventLogConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#id SystemConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#login_record_configuration SystemConfiguration#login_record_configuration}
  */
  readonly loginRecordConfiguration?: SystemConfigurationLoginRecordConfiguration[] | cdktf.IResolvable;
  /**
  * The time zone used to adjust the stored UTC time when generating reports. Since reports are usually rolled up hourly, this timezone will be used for demarcating the hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#report_timezone SystemConfiguration#report_timezone}
  */
  readonly reportTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#ui_configuration SystemConfiguration#ui_configuration}
  */
  readonly uiConfiguration?: SystemConfigurationUiConfiguration[] | cdktf.IResolvable;
}
export interface SystemConfigurationAuditLogConfigurationDelete {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#enabled SystemConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#number_of_days_to_retain SystemConfiguration#number_of_days_to_retain}
  */
  readonly numberOfDaysToRetain?: number;
}

export function systemConfigurationAuditLogConfigurationDeleteToTerraform(struct?: SystemConfigurationAuditLogConfigurationDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    number_of_days_to_retain: cdktf.numberToTerraform(struct!.numberOfDaysToRetain),
  }
}


export function systemConfigurationAuditLogConfigurationDeleteToHclTerraform(struct?: SystemConfigurationAuditLogConfigurationDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_days_to_retain: {
      value: cdktf.numberToHclTerraform(struct!.numberOfDaysToRetain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemConfigurationAuditLogConfigurationDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemConfigurationAuditLogConfigurationDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._numberOfDaysToRetain !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDaysToRetain = this._numberOfDaysToRetain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigurationAuditLogConfigurationDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._numberOfDaysToRetain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._numberOfDaysToRetain = value.numberOfDaysToRetain;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // number_of_days_to_retain - computed: true, optional: true, required: false
  private _numberOfDaysToRetain?: number; 
  public get numberOfDaysToRetain() {
    return this.getNumberAttribute('number_of_days_to_retain');
  }
  public set numberOfDaysToRetain(value: number) {
    this._numberOfDaysToRetain = value;
  }
  public resetNumberOfDaysToRetain() {
    this._numberOfDaysToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDaysToRetainInput() {
    return this._numberOfDaysToRetain;
  }
}

export class SystemConfigurationAuditLogConfigurationDeleteList extends cdktf.ComplexList {
  public internalValue? : SystemConfigurationAuditLogConfigurationDelete[] | cdktf.IResolvable

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
  public get(index: number): SystemConfigurationAuditLogConfigurationDeleteOutputReference {
    return new SystemConfigurationAuditLogConfigurationDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemConfigurationAuditLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#delete SystemConfiguration#delete}
  */
  readonly delete?: SystemConfigurationAuditLogConfigurationDelete[] | cdktf.IResolvable;
}

export function systemConfigurationAuditLogConfigurationToTerraform(struct?: SystemConfigurationAuditLogConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.listMapper(systemConfigurationAuditLogConfigurationDeleteToTerraform, false)(struct!.delete),
  }
}


export function systemConfigurationAuditLogConfigurationToHclTerraform(struct?: SystemConfigurationAuditLogConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.listMapperHcl(systemConfigurationAuditLogConfigurationDeleteToHclTerraform, false)(struct!.delete),
      isBlock: true,
      type: "list",
      storageClassType: "SystemConfigurationAuditLogConfigurationDeleteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemConfigurationAuditLogConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemConfigurationAuditLogConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigurationAuditLogConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete.internalValue = value.delete;
    }
  }

  // delete - computed: true, optional: true, required: false
  private _delete = new SystemConfigurationAuditLogConfigurationDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }
  public putDelete(value: SystemConfigurationAuditLogConfigurationDelete[] | cdktf.IResolvable) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }
}

export class SystemConfigurationAuditLogConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemConfigurationAuditLogConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemConfigurationAuditLogConfigurationOutputReference {
    return new SystemConfigurationAuditLogConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemConfigurationCorsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#allow_credentials SystemConfiguration#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#allowed_headers SystemConfiguration#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#allowed_methods SystemConfiguration#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#allowed_origins SystemConfiguration#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#enabled SystemConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#exposed_headers SystemConfiguration#exposed_headers}
  */
  readonly exposedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#preflight_max_age_in_seconds SystemConfiguration#preflight_max_age_in_seconds}
  */
  readonly preflightMaxAgeInSeconds?: number;
}

export function systemConfigurationCorsConfigurationToTerraform(struct?: SystemConfigurationCorsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposedHeaders),
    preflight_max_age_in_seconds: cdktf.numberToTerraform(struct!.preflightMaxAgeInSeconds),
  }
}


export function systemConfigurationCorsConfigurationToHclTerraform(struct?: SystemConfigurationCorsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exposed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preflight_max_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.preflightMaxAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemConfigurationCorsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemConfigurationCorsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._preflightMaxAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.preflightMaxAgeInSeconds = this._preflightMaxAgeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigurationCorsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCredentials = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._enabled = undefined;
      this._exposedHeaders = undefined;
      this._preflightMaxAgeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCredentials = value.allowCredentials;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._enabled = value.enabled;
      this._exposedHeaders = value.exposedHeaders;
      this._preflightMaxAgeInSeconds = value.preflightMaxAgeInSeconds;
    }
  }

  // allow_credentials - computed: true, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allowed_headers - computed: true, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_headers'));
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: true, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_methods'));
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: true, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exposed_headers - computed: true, optional: true, required: false
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('exposed_headers'));
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  public resetExposedHeaders() {
    this._exposedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // preflight_max_age_in_seconds - computed: true, optional: true, required: false
  private _preflightMaxAgeInSeconds?: number; 
  public get preflightMaxAgeInSeconds() {
    return this.getNumberAttribute('preflight_max_age_in_seconds');
  }
  public set preflightMaxAgeInSeconds(value: number) {
    this._preflightMaxAgeInSeconds = value;
  }
  public resetPreflightMaxAgeInSeconds() {
    this._preflightMaxAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preflightMaxAgeInSecondsInput() {
    return this._preflightMaxAgeInSeconds;
  }
}

export class SystemConfigurationCorsConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemConfigurationCorsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemConfigurationCorsConfigurationOutputReference {
    return new SystemConfigurationCorsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemConfigurationEventLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#number_to_retain SystemConfiguration#number_to_retain}
  */
  readonly numberToRetain?: number;
}

export function systemConfigurationEventLogConfigurationToTerraform(struct?: SystemConfigurationEventLogConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_to_retain: cdktf.numberToTerraform(struct!.numberToRetain),
  }
}


export function systemConfigurationEventLogConfigurationToHclTerraform(struct?: SystemConfigurationEventLogConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_to_retain: {
      value: cdktf.numberToHclTerraform(struct!.numberToRetain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemConfigurationEventLogConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemConfigurationEventLogConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberToRetain !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberToRetain = this._numberToRetain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigurationEventLogConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberToRetain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberToRetain = value.numberToRetain;
    }
  }

  // number_to_retain - computed: true, optional: true, required: false
  private _numberToRetain?: number; 
  public get numberToRetain() {
    return this.getNumberAttribute('number_to_retain');
  }
  public set numberToRetain(value: number) {
    this._numberToRetain = value;
  }
  public resetNumberToRetain() {
    this._numberToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberToRetainInput() {
    return this._numberToRetain;
  }
}

export class SystemConfigurationEventLogConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemConfigurationEventLogConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemConfigurationEventLogConfigurationOutputReference {
    return new SystemConfigurationEventLogConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemConfigurationLoginRecordConfigurationDelete {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#enabled SystemConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#number_of_days_to_retain SystemConfiguration#number_of_days_to_retain}
  */
  readonly numberOfDaysToRetain?: number;
}

export function systemConfigurationLoginRecordConfigurationDeleteToTerraform(struct?: SystemConfigurationLoginRecordConfigurationDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    number_of_days_to_retain: cdktf.numberToTerraform(struct!.numberOfDaysToRetain),
  }
}


export function systemConfigurationLoginRecordConfigurationDeleteToHclTerraform(struct?: SystemConfigurationLoginRecordConfigurationDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_days_to_retain: {
      value: cdktf.numberToHclTerraform(struct!.numberOfDaysToRetain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemConfigurationLoginRecordConfigurationDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemConfigurationLoginRecordConfigurationDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._numberOfDaysToRetain !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDaysToRetain = this._numberOfDaysToRetain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigurationLoginRecordConfigurationDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._numberOfDaysToRetain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._numberOfDaysToRetain = value.numberOfDaysToRetain;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // number_of_days_to_retain - computed: true, optional: true, required: false
  private _numberOfDaysToRetain?: number; 
  public get numberOfDaysToRetain() {
    return this.getNumberAttribute('number_of_days_to_retain');
  }
  public set numberOfDaysToRetain(value: number) {
    this._numberOfDaysToRetain = value;
  }
  public resetNumberOfDaysToRetain() {
    this._numberOfDaysToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDaysToRetainInput() {
    return this._numberOfDaysToRetain;
  }
}

export class SystemConfigurationLoginRecordConfigurationDeleteList extends cdktf.ComplexList {
  public internalValue? : SystemConfigurationLoginRecordConfigurationDelete[] | cdktf.IResolvable

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
  public get(index: number): SystemConfigurationLoginRecordConfigurationDeleteOutputReference {
    return new SystemConfigurationLoginRecordConfigurationDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemConfigurationLoginRecordConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#delete SystemConfiguration#delete}
  */
  readonly delete?: SystemConfigurationLoginRecordConfigurationDelete[] | cdktf.IResolvable;
}

export function systemConfigurationLoginRecordConfigurationToTerraform(struct?: SystemConfigurationLoginRecordConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.listMapper(systemConfigurationLoginRecordConfigurationDeleteToTerraform, false)(struct!.delete),
  }
}


export function systemConfigurationLoginRecordConfigurationToHclTerraform(struct?: SystemConfigurationLoginRecordConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.listMapperHcl(systemConfigurationLoginRecordConfigurationDeleteToHclTerraform, false)(struct!.delete),
      isBlock: true,
      type: "list",
      storageClassType: "SystemConfigurationLoginRecordConfigurationDeleteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemConfigurationLoginRecordConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemConfigurationLoginRecordConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigurationLoginRecordConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete.internalValue = value.delete;
    }
  }

  // delete - computed: true, optional: true, required: false
  private _delete = new SystemConfigurationLoginRecordConfigurationDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }
  public putDelete(value: SystemConfigurationLoginRecordConfigurationDelete[] | cdktf.IResolvable) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }
}

export class SystemConfigurationLoginRecordConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemConfigurationLoginRecordConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemConfigurationLoginRecordConfigurationOutputReference {
    return new SystemConfigurationLoginRecordConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemConfigurationUiConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#header_color SystemConfiguration#header_color}
  */
  readonly headerColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#logo_url SystemConfiguration#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#menu_font_color SystemConfiguration#menu_font_color}
  */
  readonly menuFontColor?: string;
}

export function systemConfigurationUiConfigurationToTerraform(struct?: SystemConfigurationUiConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_color: cdktf.stringToTerraform(struct!.headerColor),
    logo_url: cdktf.stringToTerraform(struct!.logoUrl),
    menu_font_color: cdktf.stringToTerraform(struct!.menuFontColor),
  }
}


export function systemConfigurationUiConfigurationToHclTerraform(struct?: SystemConfigurationUiConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_color: {
      value: cdktf.stringToHclTerraform(struct!.headerColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_url: {
      value: cdktf.stringToHclTerraform(struct!.logoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    menu_font_color: {
      value: cdktf.stringToHclTerraform(struct!.menuFontColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemConfigurationUiConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemConfigurationUiConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerColor = this._headerColor;
    }
    if (this._logoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoUrl = this._logoUrl;
    }
    if (this._menuFontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.menuFontColor = this._menuFontColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigurationUiConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerColor = undefined;
      this._logoUrl = undefined;
      this._menuFontColor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerColor = value.headerColor;
      this._logoUrl = value.logoUrl;
      this._menuFontColor = value.menuFontColor;
    }
  }

  // header_color - computed: true, optional: true, required: false
  private _headerColor?: string; 
  public get headerColor() {
    return this.getStringAttribute('header_color');
  }
  public set headerColor(value: string) {
    this._headerColor = value;
  }
  public resetHeaderColor() {
    this._headerColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerColorInput() {
    return this._headerColor;
  }

  // logo_url - computed: true, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }

  // menu_font_color - computed: true, optional: true, required: false
  private _menuFontColor?: string; 
  public get menuFontColor() {
    return this.getStringAttribute('menu_font_color');
  }
  public set menuFontColor(value: string) {
    this._menuFontColor = value;
  }
  public resetMenuFontColor() {
    this._menuFontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get menuFontColorInput() {
    return this._menuFontColor;
  }
}

export class SystemConfigurationUiConfigurationList extends cdktf.ComplexList {
  public internalValue? : SystemConfigurationUiConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SystemConfigurationUiConfigurationOutputReference {
    return new SystemConfigurationUiConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration fusionauth_system_configuration}
*/
export class SystemConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_system_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemConfiguration to import
  * @param importFromId The id of the existing SystemConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_system_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/system_configuration fusionauth_system_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_system_configuration',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100',
        providerVersionConstraint: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditLogConfiguration.internalValue = config.auditLogConfiguration;
    this._corsConfiguration.internalValue = config.corsConfiguration;
    this._eventLogConfiguration.internalValue = config.eventLogConfiguration;
    this._id = config.id;
    this._loginRecordConfiguration.internalValue = config.loginRecordConfiguration;
    this._reportTimezone = config.reportTimezone;
    this._uiConfiguration.internalValue = config.uiConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_log_configuration - computed: true, optional: true, required: false
  private _auditLogConfiguration = new SystemConfigurationAuditLogConfigurationList(this, "audit_log_configuration", false);
  public get auditLogConfiguration() {
    return this._auditLogConfiguration;
  }
  public putAuditLogConfiguration(value: SystemConfigurationAuditLogConfiguration[] | cdktf.IResolvable) {
    this._auditLogConfiguration.internalValue = value;
  }
  public resetAuditLogConfiguration() {
    this._auditLogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogConfigurationInput() {
    return this._auditLogConfiguration.internalValue;
  }

  // cors_configuration - computed: true, optional: true, required: false
  private _corsConfiguration = new SystemConfigurationCorsConfigurationList(this, "cors_configuration", false);
  public get corsConfiguration() {
    return this._corsConfiguration;
  }
  public putCorsConfiguration(value: SystemConfigurationCorsConfiguration[] | cdktf.IResolvable) {
    this._corsConfiguration.internalValue = value;
  }
  public resetCorsConfiguration() {
    this._corsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigurationInput() {
    return this._corsConfiguration.internalValue;
  }

  // event_log_configuration - computed: true, optional: true, required: false
  private _eventLogConfiguration = new SystemConfigurationEventLogConfigurationList(this, "event_log_configuration", false);
  public get eventLogConfiguration() {
    return this._eventLogConfiguration;
  }
  public putEventLogConfiguration(value: SystemConfigurationEventLogConfiguration[] | cdktf.IResolvable) {
    this._eventLogConfiguration.internalValue = value;
  }
  public resetEventLogConfiguration() {
    this._eventLogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventLogConfigurationInput() {
    return this._eventLogConfiguration.internalValue;
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

  // login_record_configuration - computed: true, optional: true, required: false
  private _loginRecordConfiguration = new SystemConfigurationLoginRecordConfigurationList(this, "login_record_configuration", false);
  public get loginRecordConfiguration() {
    return this._loginRecordConfiguration;
  }
  public putLoginRecordConfiguration(value: SystemConfigurationLoginRecordConfiguration[] | cdktf.IResolvable) {
    this._loginRecordConfiguration.internalValue = value;
  }
  public resetLoginRecordConfiguration() {
    this._loginRecordConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginRecordConfigurationInput() {
    return this._loginRecordConfiguration.internalValue;
  }

  // report_timezone - computed: false, optional: true, required: false
  private _reportTimezone?: string; 
  public get reportTimezone() {
    return this.getStringAttribute('report_timezone');
  }
  public set reportTimezone(value: string) {
    this._reportTimezone = value;
  }
  public resetReportTimezone() {
    this._reportTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTimezoneInput() {
    return this._reportTimezone;
  }

  // ui_configuration - computed: true, optional: true, required: false
  private _uiConfiguration = new SystemConfigurationUiConfigurationList(this, "ui_configuration", false);
  public get uiConfiguration() {
    return this._uiConfiguration;
  }
  public putUiConfiguration(value: SystemConfigurationUiConfiguration[] | cdktf.IResolvable) {
    this._uiConfiguration.internalValue = value;
  }
  public resetUiConfiguration() {
    this._uiConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiConfigurationInput() {
    return this._uiConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_log_configuration: cdktf.listMapper(systemConfigurationAuditLogConfigurationToTerraform, false)(this._auditLogConfiguration.internalValue),
      cors_configuration: cdktf.listMapper(systemConfigurationCorsConfigurationToTerraform, false)(this._corsConfiguration.internalValue),
      event_log_configuration: cdktf.listMapper(systemConfigurationEventLogConfigurationToTerraform, false)(this._eventLogConfiguration.internalValue),
      id: cdktf.stringToTerraform(this._id),
      login_record_configuration: cdktf.listMapper(systemConfigurationLoginRecordConfigurationToTerraform, false)(this._loginRecordConfiguration.internalValue),
      report_timezone: cdktf.stringToTerraform(this._reportTimezone),
      ui_configuration: cdktf.listMapper(systemConfigurationUiConfigurationToTerraform, false)(this._uiConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_log_configuration: {
        value: cdktf.listMapperHcl(systemConfigurationAuditLogConfigurationToHclTerraform, false)(this._auditLogConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemConfigurationAuditLogConfigurationList",
      },
      cors_configuration: {
        value: cdktf.listMapperHcl(systemConfigurationCorsConfigurationToHclTerraform, false)(this._corsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemConfigurationCorsConfigurationList",
      },
      event_log_configuration: {
        value: cdktf.listMapperHcl(systemConfigurationEventLogConfigurationToHclTerraform, false)(this._eventLogConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemConfigurationEventLogConfigurationList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_record_configuration: {
        value: cdktf.listMapperHcl(systemConfigurationLoginRecordConfigurationToHclTerraform, false)(this._loginRecordConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemConfigurationLoginRecordConfigurationList",
      },
      report_timezone: {
        value: cdktf.stringToHclTerraform(this._reportTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ui_configuration: {
        value: cdktf.listMapperHcl(systemConfigurationUiConfigurationToHclTerraform, false)(this._uiConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemConfigurationUiConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
