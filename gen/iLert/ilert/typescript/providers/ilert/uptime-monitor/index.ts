// https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UptimeMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#check_type UptimeMonitor#check_type}
  */
  readonly checkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#create_alert_after_failed_checks UptimeMonitor#create_alert_after_failed_checks}
  */
  readonly createAlertAfterFailedChecks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#create_incident_after_failed_checks UptimeMonitor#create_incident_after_failed_checks}
  */
  readonly createIncidentAfterFailedChecks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#escalation_policy UptimeMonitor#escalation_policy}
  */
  readonly escalationPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#id UptimeMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#interval_sec UptimeMonitor#interval_sec}
  */
  readonly intervalSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#name UptimeMonitor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#paused UptimeMonitor#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#region UptimeMonitor#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#timeout_ms UptimeMonitor#timeout_ms}
  */
  readonly timeoutMs?: number;
  /**
  * check_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#check_params UptimeMonitor#check_params}
  */
  readonly checkParams: UptimeMonitorCheckParams;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#timeouts UptimeMonitor#timeouts}
  */
  readonly timeouts?: UptimeMonitorTimeouts;
}
export interface UptimeMonitorCheckParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#alert_before_sec UptimeMonitor#alert_before_sec}
  */
  readonly alertBeforeSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#alert_on_fingerprint_change UptimeMonitor#alert_on_fingerprint_change}
  */
  readonly alertOnFingerprintChange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#host UptimeMonitor#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#port UptimeMonitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#response_keywords UptimeMonitor#response_keywords}
  */
  readonly responseKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#url UptimeMonitor#url}
  */
  readonly url?: string;
}

export function uptimeMonitorCheckParamsToTerraform(struct?: UptimeMonitorCheckParamsOutputReference | UptimeMonitorCheckParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_before_sec: cdktf.numberToTerraform(struct!.alertBeforeSec),
    alert_on_fingerprint_change: cdktf.booleanToTerraform(struct!.alertOnFingerprintChange),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    response_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseKeywords),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function uptimeMonitorCheckParamsToHclTerraform(struct?: UptimeMonitorCheckParamsOutputReference | UptimeMonitorCheckParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_before_sec: {
      value: cdktf.numberToHclTerraform(struct!.alertBeforeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alert_on_fingerprint_change: {
      value: cdktf.booleanToHclTerraform(struct!.alertOnFingerprintChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    response_keywords: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseKeywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UptimeMonitorCheckParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UptimeMonitorCheckParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertBeforeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertBeforeSec = this._alertBeforeSec;
    }
    if (this._alertOnFingerprintChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnFingerprintChange = this._alertOnFingerprintChange;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._responseKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseKeywords = this._responseKeywords;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeMonitorCheckParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertBeforeSec = undefined;
      this._alertOnFingerprintChange = undefined;
      this._host = undefined;
      this._port = undefined;
      this._responseKeywords = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertBeforeSec = value.alertBeforeSec;
      this._alertOnFingerprintChange = value.alertOnFingerprintChange;
      this._host = value.host;
      this._port = value.port;
      this._responseKeywords = value.responseKeywords;
      this._url = value.url;
    }
  }

  // alert_before_sec - computed: false, optional: true, required: false
  private _alertBeforeSec?: number; 
  public get alertBeforeSec() {
    return this.getNumberAttribute('alert_before_sec');
  }
  public set alertBeforeSec(value: number) {
    this._alertBeforeSec = value;
  }
  public resetAlertBeforeSec() {
    this._alertBeforeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertBeforeSecInput() {
    return this._alertBeforeSec;
  }

  // alert_on_fingerprint_change - computed: false, optional: true, required: false
  private _alertOnFingerprintChange?: boolean | cdktf.IResolvable; 
  public get alertOnFingerprintChange() {
    return this.getBooleanAttribute('alert_on_fingerprint_change');
  }
  public set alertOnFingerprintChange(value: boolean | cdktf.IResolvable) {
    this._alertOnFingerprintChange = value;
  }
  public resetAlertOnFingerprintChange() {
    this._alertOnFingerprintChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnFingerprintChangeInput() {
    return this._alertOnFingerprintChange;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // response_keywords - computed: false, optional: true, required: false
  private _responseKeywords?: string[]; 
  public get responseKeywords() {
    return this.getListAttribute('response_keywords');
  }
  public set responseKeywords(value: string[]) {
    this._responseKeywords = value;
  }
  public resetResponseKeywords() {
    this._responseKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseKeywordsInput() {
    return this._responseKeywords;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface UptimeMonitorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#create UptimeMonitor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#delete UptimeMonitor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#read UptimeMonitor#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#update UptimeMonitor#update}
  */
  readonly update?: string;
}

export function uptimeMonitorTimeoutsToTerraform(struct?: UptimeMonitorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function uptimeMonitorTimeoutsToHclTerraform(struct?: UptimeMonitorTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class UptimeMonitorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UptimeMonitorTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UptimeMonitorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor ilert_uptime_monitor}
*/
export class UptimeMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ilert_uptime_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UptimeMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UptimeMonitor to import
  * @param importFromId The id of the existing UptimeMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UptimeMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ilert_uptime_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/uptime_monitor ilert_uptime_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UptimeMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: UptimeMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'ilert_uptime_monitor',
      terraformGeneratorMetadata: {
        providerName: 'ilert',
        providerVersion: '2.14.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkType = config.checkType;
    this._createAlertAfterFailedChecks = config.createAlertAfterFailedChecks;
    this._createIncidentAfterFailedChecks = config.createIncidentAfterFailedChecks;
    this._escalationPolicy = config.escalationPolicy;
    this._id = config.id;
    this._intervalSec = config.intervalSec;
    this._name = config.name;
    this._paused = config.paused;
    this._region = config.region;
    this._timeoutMs = config.timeoutMs;
    this._checkParams.internalValue = config.checkParams;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_type - computed: false, optional: false, required: true
  private _checkType?: string; 
  public get checkType() {
    return this.getStringAttribute('check_type');
  }
  public set checkType(value: string) {
    this._checkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }

  // create_alert_after_failed_checks - computed: false, optional: true, required: false
  private _createAlertAfterFailedChecks?: number; 
  public get createAlertAfterFailedChecks() {
    return this.getNumberAttribute('create_alert_after_failed_checks');
  }
  public set createAlertAfterFailedChecks(value: number) {
    this._createAlertAfterFailedChecks = value;
  }
  public resetCreateAlertAfterFailedChecks() {
    this._createAlertAfterFailedChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAlertAfterFailedChecksInput() {
    return this._createAlertAfterFailedChecks;
  }

  // create_incident_after_failed_checks - computed: false, optional: true, required: false
  private _createIncidentAfterFailedChecks?: number; 
  public get createIncidentAfterFailedChecks() {
    return this.getNumberAttribute('create_incident_after_failed_checks');
  }
  public set createIncidentAfterFailedChecks(value: number) {
    this._createIncidentAfterFailedChecks = value;
  }
  public resetCreateIncidentAfterFailedChecks() {
    this._createIncidentAfterFailedChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIncidentAfterFailedChecksInput() {
    return this._createIncidentAfterFailedChecks;
  }

  // embed_url - computed: true, optional: false, required: false
  public get embedUrl() {
    return this.getStringAttribute('embed_url');
  }

  // escalation_policy - computed: false, optional: false, required: true
  private _escalationPolicy?: string; 
  public get escalationPolicy() {
    return this.getStringAttribute('escalation_policy');
  }
  public set escalationPolicy(value: string) {
    this._escalationPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyInput() {
    return this._escalationPolicy;
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

  // interval_sec - computed: false, optional: true, required: false
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  public resetIntervalSec() {
    this._intervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
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

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
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

  // share_url - computed: true, optional: false, required: false
  public get shareUrl() {
    return this.getStringAttribute('share_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout_ms - computed: false, optional: true, required: false
  private _timeoutMs?: number; 
  public get timeoutMs() {
    return this.getNumberAttribute('timeout_ms');
  }
  public set timeoutMs(value: number) {
    this._timeoutMs = value;
  }
  public resetTimeoutMs() {
    this._timeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMsInput() {
    return this._timeoutMs;
  }

  // check_params - computed: false, optional: false, required: true
  private _checkParams = new UptimeMonitorCheckParamsOutputReference(this, "check_params");
  public get checkParams() {
    return this._checkParams;
  }
  public putCheckParams(value: UptimeMonitorCheckParams) {
    this._checkParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkParamsInput() {
    return this._checkParams.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new UptimeMonitorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: UptimeMonitorTimeouts) {
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
      check_type: cdktf.stringToTerraform(this._checkType),
      create_alert_after_failed_checks: cdktf.numberToTerraform(this._createAlertAfterFailedChecks),
      create_incident_after_failed_checks: cdktf.numberToTerraform(this._createIncidentAfterFailedChecks),
      escalation_policy: cdktf.stringToTerraform(this._escalationPolicy),
      id: cdktf.stringToTerraform(this._id),
      interval_sec: cdktf.numberToTerraform(this._intervalSec),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      region: cdktf.stringToTerraform(this._region),
      timeout_ms: cdktf.numberToTerraform(this._timeoutMs),
      check_params: uptimeMonitorCheckParamsToTerraform(this._checkParams.internalValue),
      timeouts: uptimeMonitorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_type: {
        value: cdktf.stringToHclTerraform(this._checkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_alert_after_failed_checks: {
        value: cdktf.numberToHclTerraform(this._createAlertAfterFailedChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_incident_after_failed_checks: {
        value: cdktf.numberToHclTerraform(this._createIncidentAfterFailedChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      escalation_policy: {
        value: cdktf.stringToHclTerraform(this._escalationPolicy),
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
      interval_sec: {
        value: cdktf.numberToHclTerraform(this._intervalSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_ms: {
        value: cdktf.numberToHclTerraform(this._timeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_params: {
        value: uptimeMonitorCheckParamsToHclTerraform(this._checkParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UptimeMonitorCheckParamsList",
      },
      timeouts: {
        value: uptimeMonitorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UptimeMonitorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
