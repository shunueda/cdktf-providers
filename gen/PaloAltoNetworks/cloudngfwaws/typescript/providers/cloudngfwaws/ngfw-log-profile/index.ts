// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgfwLogProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#account_id NgfwLogProfile#account_id}
  */
  readonly accountId?: string;
  /**
  * Enable advanced threat logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#advanced_threat_log NgfwLogProfile#advanced_threat_log}
  */
  readonly advancedThreatLog?: boolean | cdktf.IResolvable;
  /**
  * The CloudWatch metric namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#cloud_watch_metric_namespace NgfwLogProfile#cloud_watch_metric_namespace}
  */
  readonly cloudWatchMetricNamespace?: string;
  /**
  * Cloudwatch metric fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#cloudwatch_metric_fields NgfwLogProfile#cloudwatch_metric_fields}
  */
  readonly cloudwatchMetricFields?: string[];
  /**
  * The Firewall Id for the NGFW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#firewall_id NgfwLogProfile#firewall_id}
  */
  readonly firewallId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#id NgfwLogProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the NGFW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#ngfw NgfwLogProfile#ngfw}
  */
  readonly ngfw?: string;
  /**
  * The region of the NGFW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#region NgfwLogProfile#region}
  */
  readonly region?: string;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#log_config NgfwLogProfile#log_config}
  */
  readonly logConfig?: NgfwLogProfileLogConfig;
  /**
  * log_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#log_destination NgfwLogProfile#log_destination}
  */
  readonly logDestination?: NgfwLogProfileLogDestination[] | cdktf.IResolvable;
}
export interface NgfwLogProfileLogConfig {
  /**
  * Type of Role for log configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#account_id NgfwLogProfile#account_id}
  */
  readonly accountId?: string;
  /**
  * The log destination details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#log_destination NgfwLogProfile#log_destination}
  */
  readonly logDestination: string;
  /**
  * The log destination type. Valid values are `S3`, `CloudWatchLogs`, or `KinesisDataFirehose`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#log_destination_type NgfwLogProfile#log_destination_type}
  */
  readonly logDestinationType: string;
  /**
  * The list of different log types that are wanted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#log_type NgfwLogProfile#log_type}
  */
  readonly logType: string[];
  /**
  * Type of Role for log configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#role_type NgfwLogProfile#role_type}
  */
  readonly roleType?: string;
}

export function ngfwLogProfileLogConfigToTerraform(struct?: NgfwLogProfileLogConfigOutputReference | NgfwLogProfileLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    log_destination: cdktf.stringToTerraform(struct!.logDestination),
    log_destination_type: cdktf.stringToTerraform(struct!.logDestinationType),
    log_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logType),
    role_type: cdktf.stringToTerraform(struct!.roleType),
  }
}


export function ngfwLogProfileLogConfigToHclTerraform(struct?: NgfwLogProfileLogConfigOutputReference | NgfwLogProfileLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_destination: {
      value: cdktf.stringToHclTerraform(struct!.logDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_destination_type: {
      value: cdktf.stringToHclTerraform(struct!.logDestinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_type: {
      value: cdktf.stringToHclTerraform(struct!.roleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgfwLogProfileLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NgfwLogProfileLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._logDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDestination = this._logDestination;
    }
    if (this._logDestinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDestinationType = this._logDestinationType;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._roleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleType = this._roleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwLogProfileLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._logDestination = undefined;
      this._logDestinationType = undefined;
      this._logType = undefined;
      this._roleType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._logDestination = value.logDestination;
      this._logDestinationType = value.logDestinationType;
      this._logType = value.logType;
      this._roleType = value.roleType;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // log_destination - computed: false, optional: false, required: true
  private _logDestination?: string; 
  public get logDestination() {
    return this.getStringAttribute('log_destination');
  }
  public set logDestination(value: string) {
    this._logDestination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationInput() {
    return this._logDestination;
  }

  // log_destination_type - computed: false, optional: false, required: true
  private _logDestinationType?: string; 
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }
  public set logDestinationType(value: string) {
    this._logDestinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationTypeInput() {
    return this._logDestinationType;
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: string[]; 
  public get logType() {
    return cdktf.Fn.tolist(this.getListAttribute('log_type'));
  }
  public set logType(value: string[]) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // role_type - computed: false, optional: true, required: false
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  public resetRoleType() {
    this._roleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }
}
export interface NgfwLogProfileLogDestination {
  /**
  * The log destination details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#destination NgfwLogProfile#destination}
  */
  readonly destination?: string;
  /**
  * The log destination type. Valid values are `S3`, `CloudWatchLogs`, or `KinesisDataFirehose`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#destination_type NgfwLogProfile#destination_type}
  */
  readonly destinationType?: string;
  /**
  * The type of logs. Valid values are `TRAFFIC`, `THREAT`, or `DECRYPTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#log_type NgfwLogProfile#log_type}
  */
  readonly logType?: string;
}

export function ngfwLogProfileLogDestinationToTerraform(struct?: NgfwLogProfileLogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}


export function ngfwLogProfileLogDestinationToHclTerraform(struct?: NgfwLogProfileLogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgfwLogProfileLogDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgfwLogProfileLogDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgfwLogProfileLogDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._destinationType = undefined;
      this._logType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._destinationType = value.destinationType;
      this._logType = value.logType;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_type - computed: false, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class NgfwLogProfileLogDestinationList extends cdktf.ComplexList {
  public internalValue? : NgfwLogProfileLogDestination[] | cdktf.IResolvable

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
  public get(index: number): NgfwLogProfileLogDestinationOutputReference {
    return new NgfwLogProfileLogDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile cloudngfwaws_ngfw_log_profile}
*/
export class NgfwLogProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_ngfw_log_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgfwLogProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgfwLogProfile to import
  * @param importFromId The id of the existing NgfwLogProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgfwLogProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_ngfw_log_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/ngfw_log_profile cloudngfwaws_ngfw_log_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgfwLogProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NgfwLogProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_ngfw_log_profile',
      terraformGeneratorMetadata: {
        providerName: 'cloudngfwaws',
        providerVersion: '3.0.4',
        providerVersionConstraint: '3.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._advancedThreatLog = config.advancedThreatLog;
    this._cloudWatchMetricNamespace = config.cloudWatchMetricNamespace;
    this._cloudwatchMetricFields = config.cloudwatchMetricFields;
    this._firewallId = config.firewallId;
    this._id = config.id;
    this._ngfw = config.ngfw;
    this._region = config.region;
    this._logConfig.internalValue = config.logConfig;
    this._logDestination.internalValue = config.logDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // advanced_threat_log - computed: false, optional: true, required: false
  private _advancedThreatLog?: boolean | cdktf.IResolvable; 
  public get advancedThreatLog() {
    return this.getBooleanAttribute('advanced_threat_log');
  }
  public set advancedThreatLog(value: boolean | cdktf.IResolvable) {
    this._advancedThreatLog = value;
  }
  public resetAdvancedThreatLog() {
    this._advancedThreatLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedThreatLogInput() {
    return this._advancedThreatLog;
  }

  // cloud_watch_metric_namespace - computed: false, optional: true, required: false
  private _cloudWatchMetricNamespace?: string; 
  public get cloudWatchMetricNamespace() {
    return this.getStringAttribute('cloud_watch_metric_namespace');
  }
  public set cloudWatchMetricNamespace(value: string) {
    this._cloudWatchMetricNamespace = value;
  }
  public resetCloudWatchMetricNamespace() {
    this._cloudWatchMetricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchMetricNamespaceInput() {
    return this._cloudWatchMetricNamespace;
  }

  // cloudwatch_metric_fields - computed: false, optional: true, required: false
  private _cloudwatchMetricFields?: string[]; 
  public get cloudwatchMetricFields() {
    return this.getListAttribute('cloudwatch_metric_fields');
  }
  public set cloudwatchMetricFields(value: string[]) {
    this._cloudwatchMetricFields = value;
  }
  public resetCloudwatchMetricFields() {
    this._cloudwatchMetricFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricFieldsInput() {
    return this._cloudwatchMetricFields;
  }

  // firewall_id - computed: false, optional: false, required: true
  private _firewallId?: string; 
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }
  public set firewallId(value: string) {
    this._firewallId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
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

  // ngfw - computed: false, optional: true, required: false
  private _ngfw?: string; 
  public get ngfw() {
    return this.getStringAttribute('ngfw');
  }
  public set ngfw(value: string) {
    this._ngfw = value;
  }
  public resetNgfw() {
    this._ngfw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwInput() {
    return this._ngfw;
  }

  // region - computed: true, optional: true, required: false
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

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new NgfwLogProfileLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: NgfwLogProfileLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // log_destination - computed: false, optional: true, required: false
  private _logDestination = new NgfwLogProfileLogDestinationList(this, "log_destination", false);
  public get logDestination() {
    return this._logDestination;
  }
  public putLogDestination(value: NgfwLogProfileLogDestination[] | cdktf.IResolvable) {
    this._logDestination.internalValue = value;
  }
  public resetLogDestination() {
    this._logDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationInput() {
    return this._logDestination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      advanced_threat_log: cdktf.booleanToTerraform(this._advancedThreatLog),
      cloud_watch_metric_namespace: cdktf.stringToTerraform(this._cloudWatchMetricNamespace),
      cloudwatch_metric_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudwatchMetricFields),
      firewall_id: cdktf.stringToTerraform(this._firewallId),
      id: cdktf.stringToTerraform(this._id),
      ngfw: cdktf.stringToTerraform(this._ngfw),
      region: cdktf.stringToTerraform(this._region),
      log_config: ngfwLogProfileLogConfigToTerraform(this._logConfig.internalValue),
      log_destination: cdktf.listMapper(ngfwLogProfileLogDestinationToTerraform, true)(this._logDestination.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_threat_log: {
        value: cdktf.booleanToHclTerraform(this._advancedThreatLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_watch_metric_namespace: {
        value: cdktf.stringToHclTerraform(this._cloudWatchMetricNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudwatch_metric_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudwatchMetricFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      firewall_id: {
        value: cdktf.stringToHclTerraform(this._firewallId),
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
      ngfw: {
        value: cdktf.stringToHclTerraform(this._ngfw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_config: {
        value: ngfwLogProfileLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgfwLogProfileLogConfigList",
      },
      log_destination: {
        value: cdktf.listMapperHcl(ngfwLogProfileLogDestinationToHclTerraform, true)(this._logDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgfwLogProfileLogDestinationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
