// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/monitored_technologies_go
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoredTechnologiesGoConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/monitored_technologies_go#enabled MonitoredTechnologiesGo#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Learn more about the [known limitations for Go static monitoring](https://www.dynatrace.com/support/help/technology-support/application-software/go/support/go-known-limitations#limitations)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/monitored_technologies_go#enabled_go_static_monitoring MonitoredTechnologiesGo#enabled_go_static_monitoring}
  */
  readonly enabledGoStaticMonitoring?: boolean | cdktf.IResolvable;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/monitored_technologies_go#host_id MonitoredTechnologiesGo#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/monitored_technologies_go#id MonitoredTechnologiesGo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/monitored_technologies_go dynatrace_monitored_technologies_go}
*/
export class MonitoredTechnologiesGo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_monitored_technologies_go";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitoredTechnologiesGo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitoredTechnologiesGo to import
  * @param importFromId The id of the existing MonitoredTechnologiesGo that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/monitored_technologies_go#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitoredTechnologiesGo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_monitored_technologies_go", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/monitored_technologies_go dynatrace_monitored_technologies_go} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoredTechnologiesGoConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoredTechnologiesGoConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_monitored_technologies_go',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._enabledGoStaticMonitoring = config.enabledGoStaticMonitoring;
    this._hostId = config.hostId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enabled_go_static_monitoring - computed: false, optional: true, required: false
  private _enabledGoStaticMonitoring?: boolean | cdktf.IResolvable; 
  public get enabledGoStaticMonitoring() {
    return this.getBooleanAttribute('enabled_go_static_monitoring');
  }
  public set enabledGoStaticMonitoring(value: boolean | cdktf.IResolvable) {
    this._enabledGoStaticMonitoring = value;
  }
  public resetEnabledGoStaticMonitoring() {
    this._enabledGoStaticMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledGoStaticMonitoringInput() {
    return this._enabledGoStaticMonitoring;
  }

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      enabled_go_static_monitoring: cdktf.booleanToTerraform(this._enabledGoStaticMonitoring),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_go_static_monitoring: {
        value: cdktf.booleanToHclTerraform(this._enabledGoStaticMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
