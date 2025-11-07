// https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HeartbeatCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of contact group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check#contact_groups HeartbeatCheck#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check#id HeartbeatCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check#name HeartbeatCheck#name}
  */
  readonly name: string;
  /**
  * Whether the check should be run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check#paused HeartbeatCheck#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds since the last ping before the check is considered down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check#period HeartbeatCheck#period}
  */
  readonly period: number;
  /**
  * List of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check#tags HeartbeatCheck#tags}
  */
  readonly tags?: string[];
  /**
  * monitored_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check#monitored_resource HeartbeatCheck#monitored_resource}
  */
  readonly monitoredResource?: HeartbeatCheckMonitoredResource;
}
export interface HeartbeatCheckMonitoredResource {
  /**
  * Name of the hosting provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check#host HeartbeatCheck#host}
  */
  readonly host?: string;
}

export function heartbeatCheckMonitoredResourceToTerraform(struct?: HeartbeatCheckMonitoredResourceOutputReference | HeartbeatCheckMonitoredResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function heartbeatCheckMonitoredResourceToHclTerraform(struct?: HeartbeatCheckMonitoredResourceOutputReference | HeartbeatCheckMonitoredResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HeartbeatCheckMonitoredResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HeartbeatCheckMonitoredResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeartbeatCheckMonitoredResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check statuscake_heartbeat_check}
*/
export class HeartbeatCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuscake_heartbeat_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HeartbeatCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HeartbeatCheck to import
  * @param importFromId The id of the existing HeartbeatCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HeartbeatCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuscake_heartbeat_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/heartbeat_check statuscake_heartbeat_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HeartbeatCheckConfig
  */
  public constructor(scope: Construct, id: string, config: HeartbeatCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'statuscake_heartbeat_check',
      terraformGeneratorMetadata: {
        providerName: 'statuscake',
        providerVersion: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactGroups = config.contactGroups;
    this._id = config.id;
    this._name = config.name;
    this._paused = config.paused;
    this._period = config.period;
    this._tags = config.tags;
    this._monitoredResource.internalValue = config.monitoredResource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_url - computed: true, optional: false, required: false
  public get checkUrl() {
    return this.getStringAttribute('check_url');
  }

  // contact_groups - computed: false, optional: true, required: false
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

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // tags - computed: false, optional: true, required: false
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

  // monitored_resource - computed: false, optional: true, required: false
  private _monitoredResource = new HeartbeatCheckMonitoredResourceOutputReference(this, "monitored_resource");
  public get monitoredResource() {
    return this._monitoredResource;
  }
  public putMonitoredResource(value: HeartbeatCheckMonitoredResource) {
    this._monitoredResource.internalValue = value;
  }
  public resetMonitoredResource() {
    this._monitoredResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredResourceInput() {
    return this._monitoredResource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      period: cdktf.numberToTerraform(this._period),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      monitored_resource: heartbeatCheckMonitoredResourceToTerraform(this._monitoredResource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      monitored_resource: {
        value: heartbeatCheckMonitoredResourceToHclTerraform(this._monitoredResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HeartbeatCheckMonitoredResourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
