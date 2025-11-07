// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThresholdProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Generate Trouble Alert if not pinged for more than x seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#cron_duration_alert ThresholdProfile#cron_duration_alert}
  */
  readonly cronDurationAlert?: { [key: string]: string };
  /**
  * Triggers Alert, if job does not start on schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#cron_no_run_alert ThresholdProfile#cron_no_run_alert}
  */
  readonly cronNoRunAlert?: { [key: string]: string };
  /**
  * Generate Down Alert if not pinged for more than x mins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#down_if_not_pinged_more_than ThresholdProfile#down_if_not_pinged_more_than}
  */
  readonly downIfNotPingedMoreThan?: number;
  /**
  * Triggers alert when the monitor is down from configured number of locations. Default value is '3'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#down_location_threshold ThresholdProfile#down_location_threshold}
  */
  readonly downLocationThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#id ThresholdProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Response time critical threshold for the primary monitoring location. Anomaly Enabled Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#primary_response_time_critical_threshold ThresholdProfile#primary_response_time_critical_threshold}
  */
  readonly primaryResponseTimeCriticalThreshold?: { [key: string]: string };
  /**
  * Response time trouble threshold for the primary monitoring location. Anomaly Enabled Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#primary_response_time_trouble_threshold ThresholdProfile#primary_response_time_trouble_threshold}
  */
  readonly primaryResponseTimeTroubleThreshold?: { [key: string]: string };
  /**
  * Display Name for the threshold profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#profile_name ThresholdProfile#profile_name}
  */
  readonly profileName: string;
  /**
  * Static Threshold(1) or AI-based Threshold(2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#profile_type ThresholdProfile#profile_type}
  */
  readonly profileType?: number;
  /**
  * Static Threshold(1) or AI-based Threshold(2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#profile_type_name ThresholdProfile#profile_type_name}
  */
  readonly profileTypeName?: number;
  /**
  * Triggers alert when not receiving the website entire HTTP response within 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#read_time_out ThresholdProfile#read_time_out}
  */
  readonly readTimeOut?: { [key: string]: string };
  /**
  * Response time critical threshold for the secondary monitoring location. Anomaly Enabled Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#secondary_response_time_critical_threshold ThresholdProfile#secondary_response_time_critical_threshold}
  */
  readonly secondaryResponseTimeCriticalThreshold?: { [key: string]: string };
  /**
  * Response time trouble threshold for the secondary monitoring location. Anomaly Enabled Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#secondary_response_time_trouble_threshold ThresholdProfile#secondary_response_time_trouble_threshold}
  */
  readonly secondaryResponseTimeTroubleThreshold?: { [key: string]: string };
  /**
  * Triggers critical alert before the SSL certificate expires within the configured number of days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#ssl_cert_days_until_expiry_critical_threshold ThresholdProfile#ssl_cert_days_until_expiry_critical_threshold}
  */
  readonly sslCertDaysUntilExpiryCriticalThreshold?: { [key: string]: string };
  /**
  * Triggers trouble alert before the SSL certificate expires within the configured number of days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#ssl_cert_days_until_expiry_trouble_threshold ThresholdProfile#ssl_cert_days_until_expiry_trouble_threshold}
  */
  readonly sslCertDaysUntilExpiryTroubleThreshold?: { [key: string]: string };
  /**
  * Triggers alert when the ssl certificate is modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#ssl_cert_fingerprint_modified ThresholdProfile#ssl_cert_fingerprint_modified}
  */
  readonly sslCertFingerprintModified?: boolean | cdktf.IResolvable;
  /**
  * Generate Trouble Alert if not pinged for more than x mins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#trouble_if_not_pinged_more_than ThresholdProfile#trouble_if_not_pinged_more_than}
  */
  readonly troubleIfNotPingedMoreThan?: number;
  /**
  * Generate Trouble Alert if pinged within x mins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#trouble_if_pinged_within ThresholdProfile#trouble_if_pinged_within}
  */
  readonly troubleIfPingedWithin?: number;
  /**
  * Type of the monitor for which the threshold profile is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#type ThresholdProfile#type}
  */
  readonly type: string;
  /**
  * Triggers alert when the website content is modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#website_content_modified ThresholdProfile#website_content_modified}
  */
  readonly websiteContentModified?: boolean | cdktf.IResolvable;
  /**
  * website_content_changes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#website_content_changes ThresholdProfile#website_content_changes}
  */
  readonly websiteContentChanges?: ThresholdProfileWebsiteContentChanges[] | cdktf.IResolvable;
}
export interface ThresholdProfileWebsiteContentChanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#comparison_operator ThresholdProfile#comparison_operator}
  */
  readonly comparisonOperator?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#severity ThresholdProfile#severity}
  */
  readonly severity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#value ThresholdProfile#value}
  */
  readonly value: number;
}

export function thresholdProfileWebsiteContentChangesToTerraform(struct?: ThresholdProfileWebsiteContentChanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.numberToTerraform(struct!.comparisonOperator),
    severity: cdktf.numberToTerraform(struct!.severity),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function thresholdProfileWebsiteContentChangesToHclTerraform(struct?: ThresholdProfileWebsiteContentChanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.numberToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ThresholdProfileWebsiteContentChangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ThresholdProfileWebsiteContentChanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThresholdProfileWebsiteContentChanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._severity = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._severity = value.severity;
      this._value = value.value;
    }
  }

  // comparison_operator - computed: false, optional: true, required: false
  private _comparisonOperator?: number; 
  public get comparisonOperator() {
    return this.getNumberAttribute('comparison_operator');
  }
  public set comparisonOperator(value: number) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

export class ThresholdProfileWebsiteContentChangesList extends cdktf.ComplexList {
  public internalValue? : ThresholdProfileWebsiteContentChanges[] | cdktf.IResolvable

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
  public get(index: number): ThresholdProfileWebsiteContentChangesOutputReference {
    return new ThresholdProfileWebsiteContentChangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile site24x7_threshold_profile}
*/
export class ThresholdProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_threshold_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThresholdProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThresholdProfile to import
  * @param importFromId The id of the existing ThresholdProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThresholdProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_threshold_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/threshold_profile site24x7_threshold_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThresholdProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ThresholdProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_threshold_profile',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronDurationAlert = config.cronDurationAlert;
    this._cronNoRunAlert = config.cronNoRunAlert;
    this._downIfNotPingedMoreThan = config.downIfNotPingedMoreThan;
    this._downLocationThreshold = config.downLocationThreshold;
    this._id = config.id;
    this._primaryResponseTimeCriticalThreshold = config.primaryResponseTimeCriticalThreshold;
    this._primaryResponseTimeTroubleThreshold = config.primaryResponseTimeTroubleThreshold;
    this._profileName = config.profileName;
    this._profileType = config.profileType;
    this._profileTypeName = config.profileTypeName;
    this._readTimeOut = config.readTimeOut;
    this._secondaryResponseTimeCriticalThreshold = config.secondaryResponseTimeCriticalThreshold;
    this._secondaryResponseTimeTroubleThreshold = config.secondaryResponseTimeTroubleThreshold;
    this._sslCertDaysUntilExpiryCriticalThreshold = config.sslCertDaysUntilExpiryCriticalThreshold;
    this._sslCertDaysUntilExpiryTroubleThreshold = config.sslCertDaysUntilExpiryTroubleThreshold;
    this._sslCertFingerprintModified = config.sslCertFingerprintModified;
    this._troubleIfNotPingedMoreThan = config.troubleIfNotPingedMoreThan;
    this._troubleIfPingedWithin = config.troubleIfPingedWithin;
    this._type = config.type;
    this._websiteContentModified = config.websiteContentModified;
    this._websiteContentChanges.internalValue = config.websiteContentChanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_duration_alert - computed: false, optional: true, required: false
  private _cronDurationAlert?: { [key: string]: string }; 
  public get cronDurationAlert() {
    return this.getStringMapAttribute('cron_duration_alert');
  }
  public set cronDurationAlert(value: { [key: string]: string }) {
    this._cronDurationAlert = value;
  }
  public resetCronDurationAlert() {
    this._cronDurationAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronDurationAlertInput() {
    return this._cronDurationAlert;
  }

  // cron_no_run_alert - computed: false, optional: true, required: false
  private _cronNoRunAlert?: { [key: string]: string }; 
  public get cronNoRunAlert() {
    return this.getStringMapAttribute('cron_no_run_alert');
  }
  public set cronNoRunAlert(value: { [key: string]: string }) {
    this._cronNoRunAlert = value;
  }
  public resetCronNoRunAlert() {
    this._cronNoRunAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronNoRunAlertInput() {
    return this._cronNoRunAlert;
  }

  // down_if_not_pinged_more_than - computed: false, optional: true, required: false
  private _downIfNotPingedMoreThan?: number; 
  public get downIfNotPingedMoreThan() {
    return this.getNumberAttribute('down_if_not_pinged_more_than');
  }
  public set downIfNotPingedMoreThan(value: number) {
    this._downIfNotPingedMoreThan = value;
  }
  public resetDownIfNotPingedMoreThan() {
    this._downIfNotPingedMoreThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downIfNotPingedMoreThanInput() {
    return this._downIfNotPingedMoreThan;
  }

  // down_location_threshold - computed: false, optional: true, required: false
  private _downLocationThreshold?: number; 
  public get downLocationThreshold() {
    return this.getNumberAttribute('down_location_threshold');
  }
  public set downLocationThreshold(value: number) {
    this._downLocationThreshold = value;
  }
  public resetDownLocationThreshold() {
    this._downLocationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downLocationThresholdInput() {
    return this._downLocationThreshold;
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

  // primary_response_time_critical_threshold - computed: false, optional: true, required: false
  private _primaryResponseTimeCriticalThreshold?: { [key: string]: string }; 
  public get primaryResponseTimeCriticalThreshold() {
    return this.getStringMapAttribute('primary_response_time_critical_threshold');
  }
  public set primaryResponseTimeCriticalThreshold(value: { [key: string]: string }) {
    this._primaryResponseTimeCriticalThreshold = value;
  }
  public resetPrimaryResponseTimeCriticalThreshold() {
    this._primaryResponseTimeCriticalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryResponseTimeCriticalThresholdInput() {
    return this._primaryResponseTimeCriticalThreshold;
  }

  // primary_response_time_trouble_threshold - computed: false, optional: true, required: false
  private _primaryResponseTimeTroubleThreshold?: { [key: string]: string }; 
  public get primaryResponseTimeTroubleThreshold() {
    return this.getStringMapAttribute('primary_response_time_trouble_threshold');
  }
  public set primaryResponseTimeTroubleThreshold(value: { [key: string]: string }) {
    this._primaryResponseTimeTroubleThreshold = value;
  }
  public resetPrimaryResponseTimeTroubleThreshold() {
    this._primaryResponseTimeTroubleThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryResponseTimeTroubleThresholdInput() {
    return this._primaryResponseTimeTroubleThreshold;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // profile_type - computed: false, optional: true, required: false
  private _profileType?: number; 
  public get profileType() {
    return this.getNumberAttribute('profile_type');
  }
  public set profileType(value: number) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // profile_type_name - computed: false, optional: true, required: false
  private _profileTypeName?: number; 
  public get profileTypeName() {
    return this.getNumberAttribute('profile_type_name');
  }
  public set profileTypeName(value: number) {
    this._profileTypeName = value;
  }
  public resetProfileTypeName() {
    this._profileTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeNameInput() {
    return this._profileTypeName;
  }

  // read_time_out - computed: false, optional: true, required: false
  private _readTimeOut?: { [key: string]: string }; 
  public get readTimeOut() {
    return this.getStringMapAttribute('read_time_out');
  }
  public set readTimeOut(value: { [key: string]: string }) {
    this._readTimeOut = value;
  }
  public resetReadTimeOut() {
    this._readTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeOutInput() {
    return this._readTimeOut;
  }

  // secondary_response_time_critical_threshold - computed: false, optional: true, required: false
  private _secondaryResponseTimeCriticalThreshold?: { [key: string]: string }; 
  public get secondaryResponseTimeCriticalThreshold() {
    return this.getStringMapAttribute('secondary_response_time_critical_threshold');
  }
  public set secondaryResponseTimeCriticalThreshold(value: { [key: string]: string }) {
    this._secondaryResponseTimeCriticalThreshold = value;
  }
  public resetSecondaryResponseTimeCriticalThreshold() {
    this._secondaryResponseTimeCriticalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryResponseTimeCriticalThresholdInput() {
    return this._secondaryResponseTimeCriticalThreshold;
  }

  // secondary_response_time_trouble_threshold - computed: false, optional: true, required: false
  private _secondaryResponseTimeTroubleThreshold?: { [key: string]: string }; 
  public get secondaryResponseTimeTroubleThreshold() {
    return this.getStringMapAttribute('secondary_response_time_trouble_threshold');
  }
  public set secondaryResponseTimeTroubleThreshold(value: { [key: string]: string }) {
    this._secondaryResponseTimeTroubleThreshold = value;
  }
  public resetSecondaryResponseTimeTroubleThreshold() {
    this._secondaryResponseTimeTroubleThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryResponseTimeTroubleThresholdInput() {
    return this._secondaryResponseTimeTroubleThreshold;
  }

  // ssl_cert_days_until_expiry_critical_threshold - computed: false, optional: true, required: false
  private _sslCertDaysUntilExpiryCriticalThreshold?: { [key: string]: string }; 
  public get sslCertDaysUntilExpiryCriticalThreshold() {
    return this.getStringMapAttribute('ssl_cert_days_until_expiry_critical_threshold');
  }
  public set sslCertDaysUntilExpiryCriticalThreshold(value: { [key: string]: string }) {
    this._sslCertDaysUntilExpiryCriticalThreshold = value;
  }
  public resetSslCertDaysUntilExpiryCriticalThreshold() {
    this._sslCertDaysUntilExpiryCriticalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertDaysUntilExpiryCriticalThresholdInput() {
    return this._sslCertDaysUntilExpiryCriticalThreshold;
  }

  // ssl_cert_days_until_expiry_trouble_threshold - computed: false, optional: true, required: false
  private _sslCertDaysUntilExpiryTroubleThreshold?: { [key: string]: string }; 
  public get sslCertDaysUntilExpiryTroubleThreshold() {
    return this.getStringMapAttribute('ssl_cert_days_until_expiry_trouble_threshold');
  }
  public set sslCertDaysUntilExpiryTroubleThreshold(value: { [key: string]: string }) {
    this._sslCertDaysUntilExpiryTroubleThreshold = value;
  }
  public resetSslCertDaysUntilExpiryTroubleThreshold() {
    this._sslCertDaysUntilExpiryTroubleThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertDaysUntilExpiryTroubleThresholdInput() {
    return this._sslCertDaysUntilExpiryTroubleThreshold;
  }

  // ssl_cert_fingerprint_modified - computed: false, optional: true, required: false
  private _sslCertFingerprintModified?: boolean | cdktf.IResolvable; 
  public get sslCertFingerprintModified() {
    return this.getBooleanAttribute('ssl_cert_fingerprint_modified');
  }
  public set sslCertFingerprintModified(value: boolean | cdktf.IResolvable) {
    this._sslCertFingerprintModified = value;
  }
  public resetSslCertFingerprintModified() {
    this._sslCertFingerprintModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertFingerprintModifiedInput() {
    return this._sslCertFingerprintModified;
  }

  // trouble_if_not_pinged_more_than - computed: false, optional: true, required: false
  private _troubleIfNotPingedMoreThan?: number; 
  public get troubleIfNotPingedMoreThan() {
    return this.getNumberAttribute('trouble_if_not_pinged_more_than');
  }
  public set troubleIfNotPingedMoreThan(value: number) {
    this._troubleIfNotPingedMoreThan = value;
  }
  public resetTroubleIfNotPingedMoreThan() {
    this._troubleIfNotPingedMoreThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get troubleIfNotPingedMoreThanInput() {
    return this._troubleIfNotPingedMoreThan;
  }

  // trouble_if_pinged_within - computed: false, optional: true, required: false
  private _troubleIfPingedWithin?: number; 
  public get troubleIfPingedWithin() {
    return this.getNumberAttribute('trouble_if_pinged_within');
  }
  public set troubleIfPingedWithin(value: number) {
    this._troubleIfPingedWithin = value;
  }
  public resetTroubleIfPingedWithin() {
    this._troubleIfPingedWithin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get troubleIfPingedWithinInput() {
    return this._troubleIfPingedWithin;
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

  // website_content_modified - computed: false, optional: true, required: false
  private _websiteContentModified?: boolean | cdktf.IResolvable; 
  public get websiteContentModified() {
    return this.getBooleanAttribute('website_content_modified');
  }
  public set websiteContentModified(value: boolean | cdktf.IResolvable) {
    this._websiteContentModified = value;
  }
  public resetWebsiteContentModified() {
    this._websiteContentModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteContentModifiedInput() {
    return this._websiteContentModified;
  }

  // website_content_changes - computed: false, optional: true, required: false
  private _websiteContentChanges = new ThresholdProfileWebsiteContentChangesList(this, "website_content_changes", false);
  public get websiteContentChanges() {
    return this._websiteContentChanges;
  }
  public putWebsiteContentChanges(value: ThresholdProfileWebsiteContentChanges[] | cdktf.IResolvable) {
    this._websiteContentChanges.internalValue = value;
  }
  public resetWebsiteContentChanges() {
    this._websiteContentChanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteContentChangesInput() {
    return this._websiteContentChanges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_duration_alert: cdktf.hashMapper(cdktf.stringToTerraform)(this._cronDurationAlert),
      cron_no_run_alert: cdktf.hashMapper(cdktf.stringToTerraform)(this._cronNoRunAlert),
      down_if_not_pinged_more_than: cdktf.numberToTerraform(this._downIfNotPingedMoreThan),
      down_location_threshold: cdktf.numberToTerraform(this._downLocationThreshold),
      id: cdktf.stringToTerraform(this._id),
      primary_response_time_critical_threshold: cdktf.hashMapper(cdktf.stringToTerraform)(this._primaryResponseTimeCriticalThreshold),
      primary_response_time_trouble_threshold: cdktf.hashMapper(cdktf.stringToTerraform)(this._primaryResponseTimeTroubleThreshold),
      profile_name: cdktf.stringToTerraform(this._profileName),
      profile_type: cdktf.numberToTerraform(this._profileType),
      profile_type_name: cdktf.numberToTerraform(this._profileTypeName),
      read_time_out: cdktf.hashMapper(cdktf.stringToTerraform)(this._readTimeOut),
      secondary_response_time_critical_threshold: cdktf.hashMapper(cdktf.stringToTerraform)(this._secondaryResponseTimeCriticalThreshold),
      secondary_response_time_trouble_threshold: cdktf.hashMapper(cdktf.stringToTerraform)(this._secondaryResponseTimeTroubleThreshold),
      ssl_cert_days_until_expiry_critical_threshold: cdktf.hashMapper(cdktf.stringToTerraform)(this._sslCertDaysUntilExpiryCriticalThreshold),
      ssl_cert_days_until_expiry_trouble_threshold: cdktf.hashMapper(cdktf.stringToTerraform)(this._sslCertDaysUntilExpiryTroubleThreshold),
      ssl_cert_fingerprint_modified: cdktf.booleanToTerraform(this._sslCertFingerprintModified),
      trouble_if_not_pinged_more_than: cdktf.numberToTerraform(this._troubleIfNotPingedMoreThan),
      trouble_if_pinged_within: cdktf.numberToTerraform(this._troubleIfPingedWithin),
      type: cdktf.stringToTerraform(this._type),
      website_content_modified: cdktf.booleanToTerraform(this._websiteContentModified),
      website_content_changes: cdktf.listMapper(thresholdProfileWebsiteContentChangesToTerraform, true)(this._websiteContentChanges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_duration_alert: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._cronDurationAlert),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cron_no_run_alert: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._cronNoRunAlert),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      down_if_not_pinged_more_than: {
        value: cdktf.numberToHclTerraform(this._downIfNotPingedMoreThan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      down_location_threshold: {
        value: cdktf.numberToHclTerraform(this._downLocationThreshold),
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
      primary_response_time_critical_threshold: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._primaryResponseTimeCriticalThreshold),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      primary_response_time_trouble_threshold: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._primaryResponseTimeTroubleThreshold),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_type: {
        value: cdktf.numberToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_type_name: {
        value: cdktf.numberToHclTerraform(this._profileTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_time_out: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._readTimeOut),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      secondary_response_time_critical_threshold: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._secondaryResponseTimeCriticalThreshold),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      secondary_response_time_trouble_threshold: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._secondaryResponseTimeTroubleThreshold),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ssl_cert_days_until_expiry_critical_threshold: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sslCertDaysUntilExpiryCriticalThreshold),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ssl_cert_days_until_expiry_trouble_threshold: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sslCertDaysUntilExpiryTroubleThreshold),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ssl_cert_fingerprint_modified: {
        value: cdktf.booleanToHclTerraform(this._sslCertFingerprintModified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trouble_if_not_pinged_more_than: {
        value: cdktf.numberToHclTerraform(this._troubleIfNotPingedMoreThan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trouble_if_pinged_within: {
        value: cdktf.numberToHclTerraform(this._troubleIfPingedWithin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website_content_modified: {
        value: cdktf.booleanToHclTerraform(this._websiteContentModified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      website_content_changes: {
        value: cdktf.listMapperHcl(thresholdProfileWebsiteContentChangesToHclTerraform, true)(this._websiteContentChanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ThresholdProfileWebsiteContentChangesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
