// https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * A valid DNS hostname (e.g., 'example.com', 'sub.example.com'). 
  * Must start and end with alphanumeric characters, can contain hyphens but not at the start or end, 
  * and must have at least one dot separator between valid DNS labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#address CheckTcp#address}
  */
  readonly address: string;
  /**
  * List of contact group names to receive notifications. 
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations) 
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#contact_groups CheckTcp#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Whether to use TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#encryption CheckTcp#encryption}
  */
  readonly encryption?: string;
  /**
  * String to expect in server response (may be repeated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#expect_string CheckTcp#expect_string}
  */
  readonly expectString?: string;
  /**
  * Include this check in uptime/response time calculations for the dashboard and status pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#include_in_global_metrics CheckTcp#include_in_global_metrics}
  */
  readonly includeInGlobalMetrics?: boolean | cdktf.IResolvable;
  /**
  * The interval between checks in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#interval CheckTcp#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#is_paused CheckTcp#is_paused}
  */
  readonly isPaused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#locations CheckTcp#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#name CheckTcp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#notes CheckTcp#notes}
  */
  readonly notes?: string;
  /**
  * How many times the check should be retried before a location is considered down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#num_retries CheckTcp#num_retries}
  */
  readonly numRetries?: number;
  /**
  * The port to check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#port CheckTcp#port}
  */
  readonly port: number;
  /**
  * String to send to the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#send_string CheckTcp#send_string}
  */
  readonly sendString?: string;
  /**
  * SLA related attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#sla CheckTcp#sla}
  */
  readonly sla?: CheckTcpSla;
  /**
  * List of tags to organize and filter monitoring checks. 
  * Each account can have up to 3,000 unique tags, with a 100-character limit per tag. 
  * Tags help categorize resources for filtering in Dashboards, Public Status Pages, and SLA Reports. 
  * Common use cases include tagging by team ('dev-team', 'ops'), environment ('production', 'staging'), 
  * or purpose ('api', 'customer-facing'). Defaults to an empty list if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#tags CheckTcp#tags}
  */
  readonly tags?: string[];
  /**
  * Whether to use IPv4 or IPv6 for the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#use_ip_version CheckTcp#use_ip_version}
  */
  readonly useIpVersion?: string;
}
export interface CheckTcpSla {
  /**
  * The maximum average response time. Unit is mandatory (e.g. 1500ms or 1.5s or 1s500ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#latency CheckTcp#latency}
  */
  readonly latency?: string;
  /**
  * The minimum uptime percentage. \nMust be a fraction with exactly 4 decimal places (e.g. 0.9995 for 99.95% uptime)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#uptime CheckTcp#uptime}
  */
  readonly uptime?: string;
}

export function checkTcpSlaToTerraform(struct?: CheckTcpSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latency: cdktf.stringToTerraform(struct!.latency),
    uptime: cdktf.stringToTerraform(struct!.uptime),
  }
}


export function checkTcpSlaToHclTerraform(struct?: CheckTcpSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latency: {
      value: cdktf.stringToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uptime: {
      value: cdktf.stringToHclTerraform(struct!.uptime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckTcpSlaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CheckTcpSla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._uptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.uptime = this._uptime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckTcpSla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._latency = undefined;
      this._uptime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._latency = value.latency;
      this._uptime = value.uptime;
    }
  }

  // latency - computed: true, optional: true, required: false
  private _latency?: string; 
  public get latency() {
    return this.getStringAttribute('latency');
  }
  public set latency(value: string) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // uptime - computed: true, optional: true, required: false
  private _uptime?: string; 
  public get uptime() {
    return this.getStringAttribute('uptime');
  }
  public set uptime(value: string) {
    this._uptime = value;
  }
  public resetUptime() {
    this._uptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimeInput() {
    return this._uptime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp uptime_check_tcp}
*/
export class CheckTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_check_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckTcp to import
  * @param importFromId The id of the existing CheckTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_check_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_tcp uptime_check_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckTcpConfig
  */
  public constructor(scope: Construct, id: string, config: CheckTcpConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_check_tcp',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.16.0'
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
    this._contactGroups = config.contactGroups;
    this._encryption = config.encryption;
    this._expectString = config.expectString;
    this._includeInGlobalMetrics = config.includeInGlobalMetrics;
    this._interval = config.interval;
    this._isPaused = config.isPaused;
    this._locations = config.locations;
    this._name = config.name;
    this._notes = config.notes;
    this._numRetries = config.numRetries;
    this._port = config.port;
    this._sendString = config.sendString;
    this._sla.internalValue = config.sla;
    this._tags = config.tags;
    this._useIpVersion = config.useIpVersion;
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

  // contact_groups - computed: true, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_groups'));
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // expect_string - computed: true, optional: true, required: false
  private _expectString?: string; 
  public get expectString() {
    return this.getStringAttribute('expect_string');
  }
  public set expectString(value: string) {
    this._expectString = value;
  }
  public resetExpectString() {
    this._expectString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectStringInput() {
    return this._expectString;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // include_in_global_metrics - computed: true, optional: true, required: false
  private _includeInGlobalMetrics?: boolean | cdktf.IResolvable; 
  public get includeInGlobalMetrics() {
    return this.getBooleanAttribute('include_in_global_metrics');
  }
  public set includeInGlobalMetrics(value: boolean | cdktf.IResolvable) {
    this._includeInGlobalMetrics = value;
  }
  public resetIncludeInGlobalMetrics() {
    this._includeInGlobalMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInGlobalMetricsInput() {
    return this._includeInGlobalMetrics;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // is_paused - computed: true, optional: true, required: false
  private _isPaused?: boolean | cdktf.IResolvable; 
  public get isPaused() {
    return this.getBooleanAttribute('is_paused');
  }
  public set isPaused(value: boolean | cdktf.IResolvable) {
    this._isPaused = value;
  }
  public resetIsPaused() {
    this._isPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPausedInput() {
    return this._isPaused;
  }

  // locations - computed: true, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
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

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // num_retries - computed: true, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // send_string - computed: true, optional: true, required: false
  private _sendString?: string; 
  public get sendString() {
    return this.getStringAttribute('send_string');
  }
  public set sendString(value: string) {
    this._sendString = value;
  }
  public resetSendString() {
    this._sendString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendStringInput() {
    return this._sendString;
  }

  // sla - computed: true, optional: true, required: false
  private _sla = new CheckTcpSlaOutputReference(this, "sla");
  public get sla() {
    return this._sla;
  }
  public putSla(value: CheckTcpSla) {
    this._sla.internalValue = value;
  }
  public resetSla() {
    this._sla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // use_ip_version - computed: true, optional: true, required: false
  private _useIpVersion?: string; 
  public get useIpVersion() {
    return this.getStringAttribute('use_ip_version');
  }
  public set useIpVersion(value: string) {
    this._useIpVersion = value;
  }
  public resetUseIpVersion() {
    this._useIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpVersionInput() {
    return this._useIpVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      encryption: cdktf.stringToTerraform(this._encryption),
      expect_string: cdktf.stringToTerraform(this._expectString),
      include_in_global_metrics: cdktf.booleanToTerraform(this._includeInGlobalMetrics),
      interval: cdktf.numberToTerraform(this._interval),
      is_paused: cdktf.booleanToTerraform(this._isPaused),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      num_retries: cdktf.numberToTerraform(this._numRetries),
      port: cdktf.numberToTerraform(this._port),
      send_string: cdktf.stringToTerraform(this._sendString),
      sla: checkTcpSlaToTerraform(this._sla.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_ip_version: cdktf.stringToTerraform(this._useIpVersion),
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
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      encryption: {
        value: cdktf.stringToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expect_string: {
        value: cdktf.stringToHclTerraform(this._expectString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_in_global_metrics: {
        value: cdktf.booleanToHclTerraform(this._includeInGlobalMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_paused: {
        value: cdktf.booleanToHclTerraform(this._isPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_retries: {
        value: cdktf.numberToHclTerraform(this._numRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_string: {
        value: cdktf.stringToHclTerraform(this._sendString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla: {
        value: checkTcpSlaToHclTerraform(this._sla.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CheckTcpSla",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_ip_version: {
        value: cdktf.stringToHclTerraform(this._useIpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
