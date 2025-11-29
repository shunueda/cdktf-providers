// https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckPagespeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#config CheckPagespeed#config}
  */
  readonly config?: CheckPagespeedConfigA;
  /**
  * List of contact group names to receive notifications. 
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations) 
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#contact_groups CheckPagespeed#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#headers CheckPagespeed#headers}
  */
  readonly headers?: string;
  /**
  * The interval between checks in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#interval CheckPagespeed#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#is_paused CheckPagespeed#is_paused}
  */
  readonly isPaused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#locations CheckPagespeed#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#name CheckPagespeed#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#notes CheckPagespeed#notes}
  */
  readonly notes?: string;
  /**
  * How many times the check should be retried before a location is considered down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#num_retries CheckPagespeed#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#password CheckPagespeed#password}
  */
  readonly password?: string;
  /**
  * The script to run. Must be valid JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#script CheckPagespeed#script}
  */
  readonly script: string;
  /**
  * List of tags to organize and filter monitoring checks. 
  * Each account can have up to 3,000 unique tags, with a 100-character limit per tag. 
  * Tags help categorize resources for filtering in Dashboards, Public Status Pages, and SLA Reports. 
  * Common use cases include tagging by team ('dev-team', 'ops'), environment ('production', 'staging'), 
  * or purpose ('api', 'customer-facing'). Defaults to an empty list if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#tags CheckPagespeed#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#username CheckPagespeed#username}
  */
  readonly username?: string;
}
export interface CheckPagespeedConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#connection_throttling CheckPagespeed#connection_throttling}
  */
  readonly connectionThrottling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#emulated_device CheckPagespeed#emulated_device}
  */
  readonly emulatedDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#exclude_urls CheckPagespeed#exclude_urls}
  */
  readonly excludeUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#uptime_grade_threshold CheckPagespeed#uptime_grade_threshold}
  */
  readonly uptimeGradeThreshold?: string;
}

export function checkPagespeedConfigAToTerraform(struct?: CheckPagespeedConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_throttling: cdktf.stringToTerraform(struct!.connectionThrottling),
    emulated_device: cdktf.stringToTerraform(struct!.emulatedDevice),
    exclude_urls: cdktf.stringToTerraform(struct!.excludeUrls),
    uptime_grade_threshold: cdktf.stringToTerraform(struct!.uptimeGradeThreshold),
  }
}


export function checkPagespeedConfigAToHclTerraform(struct?: CheckPagespeedConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_throttling: {
      value: cdktf.stringToHclTerraform(struct!.connectionThrottling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulated_device: {
      value: cdktf.stringToHclTerraform(struct!.emulatedDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_urls: {
      value: cdktf.stringToHclTerraform(struct!.excludeUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uptime_grade_threshold: {
      value: cdktf.stringToHclTerraform(struct!.uptimeGradeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckPagespeedConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CheckPagespeedConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionThrottling !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionThrottling = this._connectionThrottling;
    }
    if (this._emulatedDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulatedDevice = this._emulatedDevice;
    }
    if (this._excludeUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeUrls = this._excludeUrls;
    }
    if (this._uptimeGradeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.uptimeGradeThreshold = this._uptimeGradeThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckPagespeedConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionThrottling = undefined;
      this._emulatedDevice = undefined;
      this._excludeUrls = undefined;
      this._uptimeGradeThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionThrottling = value.connectionThrottling;
      this._emulatedDevice = value.emulatedDevice;
      this._excludeUrls = value.excludeUrls;
      this._uptimeGradeThreshold = value.uptimeGradeThreshold;
    }
  }

  // connection_throttling - computed: true, optional: true, required: false
  private _connectionThrottling?: string; 
  public get connectionThrottling() {
    return this.getStringAttribute('connection_throttling');
  }
  public set connectionThrottling(value: string) {
    this._connectionThrottling = value;
  }
  public resetConnectionThrottling() {
    this._connectionThrottling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionThrottlingInput() {
    return this._connectionThrottling;
  }

  // emulated_device - computed: true, optional: true, required: false
  private _emulatedDevice?: string; 
  public get emulatedDevice() {
    return this.getStringAttribute('emulated_device');
  }
  public set emulatedDevice(value: string) {
    this._emulatedDevice = value;
  }
  public resetEmulatedDevice() {
    this._emulatedDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatedDeviceInput() {
    return this._emulatedDevice;
  }

  // exclude_urls - computed: true, optional: true, required: false
  private _excludeUrls?: string; 
  public get excludeUrls() {
    return this.getStringAttribute('exclude_urls');
  }
  public set excludeUrls(value: string) {
    this._excludeUrls = value;
  }
  public resetExcludeUrls() {
    this._excludeUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUrlsInput() {
    return this._excludeUrls;
  }

  // uptime_grade_threshold - computed: true, optional: true, required: false
  private _uptimeGradeThreshold?: string; 
  public get uptimeGradeThreshold() {
    return this.getStringAttribute('uptime_grade_threshold');
  }
  public set uptimeGradeThreshold(value: string) {
    this._uptimeGradeThreshold = value;
  }
  public resetUptimeGradeThreshold() {
    this._uptimeGradeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimeGradeThresholdInput() {
    return this._uptimeGradeThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed uptime_check_pagespeed}
*/
export class CheckPagespeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_check_pagespeed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckPagespeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckPagespeed to import
  * @param importFromId The id of the existing CheckPagespeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckPagespeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_check_pagespeed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/check_pagespeed uptime_check_pagespeed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckPagespeedConfig
  */
  public constructor(scope: Construct, id: string, config: CheckPagespeedConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_check_pagespeed',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.1',
        providerVersionConstraint: '2.18.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._contactGroups = config.contactGroups;
    this._headers = config.headers;
    this._interval = config.interval;
    this._isPaused = config.isPaused;
    this._locations = config.locations;
    this._name = config.name;
    this._notes = config.notes;
    this._numRetries = config.numRetries;
    this._password = config.password;
    this._script = config.script;
    this._tags = config.tags;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config = new CheckPagespeedConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: CheckPagespeedConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

  // headers - computed: true, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: checkPagespeedConfigAToTerraform(this._config.internalValue),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      headers: cdktf.stringToTerraform(this._headers),
      interval: cdktf.numberToTerraform(this._interval),
      is_paused: cdktf.booleanToTerraform(this._isPaused),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      num_retries: cdktf.numberToTerraform(this._numRetries),
      password: cdktf.stringToTerraform(this._password),
      script: cdktf.stringToTerraform(this._script),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: checkPagespeedConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CheckPagespeedConfigA",
      },
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      headers: {
        value: cdktf.stringToHclTerraform(this._headers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
