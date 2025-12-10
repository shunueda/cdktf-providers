// https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A valid DNS hostname (e.g., 'example.com', 'sub.example.com'). 
  * Must start and end with alphanumeric characters, can contain hyphens but not at the start or end, 
  * and must have at least one dot separator between valid DNS labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#address CheckDns#address}
  */
  readonly address: string;
  /**
  * List of contact group names to receive notifications.
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations)
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  * Set to an empty list to disable notifications at this level and rely on parent check group notifications instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#contact_groups CheckDns#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#dns_record_type CheckDns#dns_record_type}
  */
  readonly dnsRecordType?: string;
  /**
  * DNS server to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#dns_server CheckDns#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * IP Address, Domain Name or String to expect in response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#expect_string CheckDns#expect_string}
  */
  readonly expectString?: string;
  /**
  * Include this check in uptime/response time calculations for the dashboard and status pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#include_in_global_metrics CheckDns#include_in_global_metrics}
  */
  readonly includeInGlobalMetrics?: boolean | cdktf.IResolvable;
  /**
  * The interval between checks in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#interval CheckDns#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#is_paused CheckDns#is_paused}
  */
  readonly isPaused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#locations CheckDns#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#name CheckDns#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#notes CheckDns#notes}
  */
  readonly notes?: string;
  /**
  * How many times the check should be retried before a location is considered down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#num_retries CheckDns#num_retries}
  */
  readonly numRetries?: number;
  /**
  * How many locations should be down before an alert is sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#sensitivity CheckDns#sensitivity}
  */
  readonly sensitivity?: number;
  /**
  * SLA related attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#sla CheckDns#sla}
  */
  readonly sla?: CheckDnsSla;
  /**
  * List of tags to organize and filter monitoring checks. 
  * Each account can have up to 3,000 unique tags, with a 100-character limit per tag. 
  * Tags help categorize resources for filtering in Dashboards, Public Status Pages, and SLA Reports. 
  * Common use cases include tagging by team ('dev-team', 'ops'), environment ('production', 'staging'), 
  * or purpose ('api', 'customer-facing'). Defaults to an empty list if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#tags CheckDns#tags}
  */
  readonly tags?: string[];
  /**
  * A timeout alert will be issued if the check takes longer than this many seconds to complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#threshold CheckDns#threshold}
  */
  readonly threshold?: number;
}
export interface CheckDnsSla {
  /**
  * The maximum average response time. Unit is mandatory (e.g. 1500ms or 1.5s or 1s500ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#latency CheckDns#latency}
  */
  readonly latency?: string;
  /**
  * The minimum uptime percentage. \nMust be a fraction with exactly 4 decimal places (e.g. 0.9995 for 99.95% uptime)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#uptime CheckDns#uptime}
  */
  readonly uptime?: string;
}

export function checkDnsSlaToTerraform(struct?: CheckDnsSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latency: cdktf.stringToTerraform(struct!.latency),
    uptime: cdktf.stringToTerraform(struct!.uptime),
  }
}


export function checkDnsSlaToHclTerraform(struct?: CheckDnsSla | cdktf.IResolvable): any {
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

export class CheckDnsSlaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CheckDnsSla | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CheckDnsSla | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns uptime_check_dns}
*/
export class CheckDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_check_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckDns to import
  * @param importFromId The id of the existing CheckDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_check_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.21.0/docs/resources/check_dns uptime_check_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckDnsConfig
  */
  public constructor(scope: Construct, id: string, config: CheckDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_check_dns',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.21.0',
        providerVersionConstraint: '2.21.0'
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
    this._dnsRecordType = config.dnsRecordType;
    this._dnsServer = config.dnsServer;
    this._expectString = config.expectString;
    this._includeInGlobalMetrics = config.includeInGlobalMetrics;
    this._interval = config.interval;
    this._isPaused = config.isPaused;
    this._locations = config.locations;
    this._name = config.name;
    this._notes = config.notes;
    this._numRetries = config.numRetries;
    this._sensitivity = config.sensitivity;
    this._sla.internalValue = config.sla;
    this._tags = config.tags;
    this._threshold = config.threshold;
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

  // dns_record_type - computed: true, optional: true, required: false
  private _dnsRecordType?: string; 
  public get dnsRecordType() {
    return this.getStringAttribute('dns_record_type');
  }
  public set dnsRecordType(value: string) {
    this._dnsRecordType = value;
  }
  public resetDnsRecordType() {
    this._dnsRecordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordTypeInput() {
    return this._dnsRecordType;
  }

  // dns_server - computed: true, optional: true, required: false
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

  // sensitivity - computed: true, optional: true, required: false
  private _sensitivity?: number; 
  public get sensitivity() {
    return this.getNumberAttribute('sensitivity');
  }
  public set sensitivity(value: number) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // sla - computed: true, optional: true, required: false
  private _sla = new CheckDnsSlaOutputReference(this, "sla");
  public get sla() {
    return this._sla;
  }
  public putSla(value: CheckDnsSla) {
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

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      dns_record_type: cdktf.stringToTerraform(this._dnsRecordType),
      dns_server: cdktf.stringToTerraform(this._dnsServer),
      expect_string: cdktf.stringToTerraform(this._expectString),
      include_in_global_metrics: cdktf.booleanToTerraform(this._includeInGlobalMetrics),
      interval: cdktf.numberToTerraform(this._interval),
      is_paused: cdktf.booleanToTerraform(this._isPaused),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      num_retries: cdktf.numberToTerraform(this._numRetries),
      sensitivity: cdktf.numberToTerraform(this._sensitivity),
      sla: checkDnsSlaToTerraform(this._sla.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      threshold: cdktf.numberToTerraform(this._threshold),
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
      dns_record_type: {
        value: cdktf.stringToHclTerraform(this._dnsRecordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server: {
        value: cdktf.stringToHclTerraform(this._dnsServer),
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
      sensitivity: {
        value: cdktf.numberToHclTerraform(this._sensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sla: {
        value: checkDnsSlaToHclTerraform(this._sla.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CheckDnsSla",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
