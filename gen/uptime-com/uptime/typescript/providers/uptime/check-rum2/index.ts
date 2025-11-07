// https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckRum2Config extends cdktf.TerraformMetaArguments {
  /**
  * A valid DNS hostname (e.g., 'example.com', 'sub.example.com'). 
  * Must start and end with alphanumeric characters, can contain hyphens but not at the start or end, 
  * and must have at least one dot separator between valid DNS labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2#address CheckRum2#address}
  */
  readonly address: string;
  /**
  * List of contact group names to receive notifications. 
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations) 
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2#contact_groups CheckRum2#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Include this check in uptime/response time calculations for the dashboard and status pages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2#include_in_global_metrics CheckRum2#include_in_global_metrics}
  */
  readonly includeInGlobalMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2#is_paused CheckRum2#is_paused}
  */
  readonly isPaused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2#name CheckRum2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2#notes CheckRum2#notes}
  */
  readonly notes?: string;
  /**
  * The minimum uptime percentage. \nMust be a fraction with exactly 4 decimal places (e.g. 0.9995 for 99.95% uptime)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2#sla_uptime CheckRum2#sla_uptime}
  */
  readonly slaUptime?: string;
  /**
  * List of tags to organize and filter monitoring checks. 
  * Each account can have up to 3,000 unique tags, with a 100-character limit per tag. 
  * Tags help categorize resources for filtering in Dashboards, Public Status Pages, and SLA Reports. 
  * Common use cases include tagging by team ('dev-team', 'ops'), environment ('production', 'staging'), 
  * or purpose ('api', 'customer-facing'). Defaults to an empty list if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2#tags CheckRum2#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2 uptime_check_rum2}
*/
export class CheckRum2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_check_rum2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckRum2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckRum2 to import
  * @param importFromId The id of the existing CheckRum2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckRum2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_check_rum2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_rum2 uptime_check_rum2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckRum2Config
  */
  public constructor(scope: Construct, id: string, config: CheckRum2Config) {
    super(scope, id, {
      terraformResourceType: 'uptime_check_rum2',
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
    this._includeInGlobalMetrics = config.includeInGlobalMetrics;
    this._isPaused = config.isPaused;
    this._name = config.name;
    this._notes = config.notes;
    this._slaUptime = config.slaUptime;
    this._tags = config.tags;
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

  // sla_uptime - computed: true, optional: true, required: false
  private _slaUptime?: string; 
  public get slaUptime() {
    return this.getStringAttribute('sla_uptime');
  }
  public set slaUptime(value: string) {
    this._slaUptime = value;
  }
  public resetSlaUptime() {
    this._slaUptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaUptimeInput() {
    return this._slaUptime;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      include_in_global_metrics: cdktf.booleanToTerraform(this._includeInGlobalMetrics),
      is_paused: cdktf.booleanToTerraform(this._isPaused),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      sla_uptime: cdktf.stringToTerraform(this._slaUptime),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
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
      include_in_global_metrics: {
        value: cdktf.booleanToHclTerraform(this._includeInGlobalMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_paused: {
        value: cdktf.booleanToHclTerraform(this._isPaused),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sla_uptime: {
        value: cdktf.stringToHclTerraform(this._slaUptime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
