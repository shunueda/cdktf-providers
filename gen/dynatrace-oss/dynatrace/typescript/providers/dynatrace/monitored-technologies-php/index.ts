// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/monitored_technologies_php
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoredTechnologiesPhpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Requires enabled PHP monitoring and Dynatrace OneAgent version 1.261 or later
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/monitored_technologies_php#enable_php_cli_server MonitoredTechnologiesPhp#enable_php_cli_server}
  */
  readonly enablePhpCliServer?: boolean | cdktf.IResolvable;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/monitored_technologies_php#enabled MonitoredTechnologiesPhp#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Requires PHP monitoring enabled and from Dynatrace OneAgent version 1.191 it's ignored and permanently enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/monitored_technologies_php#enabled_fast_cgi MonitoredTechnologiesPhp#enabled_fast_cgi}
  */
  readonly enabledFastCgi?: boolean | cdktf.IResolvable;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/monitored_technologies_php#host_id MonitoredTechnologiesPhp#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/monitored_technologies_php#id MonitoredTechnologiesPhp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/monitored_technologies_php dynatrace_monitored_technologies_php}
*/
export class MonitoredTechnologiesPhp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_monitored_technologies_php";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitoredTechnologiesPhp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitoredTechnologiesPhp to import
  * @param importFromId The id of the existing MonitoredTechnologiesPhp that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/monitored_technologies_php#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitoredTechnologiesPhp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_monitored_technologies_php", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/monitored_technologies_php dynatrace_monitored_technologies_php} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoredTechnologiesPhpConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoredTechnologiesPhpConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_monitored_technologies_php',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enablePhpCliServer = config.enablePhpCliServer;
    this._enabled = config.enabled;
    this._enabledFastCgi = config.enabledFastCgi;
    this._hostId = config.hostId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_php_cli_server - computed: false, optional: true, required: false
  private _enablePhpCliServer?: boolean | cdktf.IResolvable; 
  public get enablePhpCliServer() {
    return this.getBooleanAttribute('enable_php_cli_server');
  }
  public set enablePhpCliServer(value: boolean | cdktf.IResolvable) {
    this._enablePhpCliServer = value;
  }
  public resetEnablePhpCliServer() {
    this._enablePhpCliServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePhpCliServerInput() {
    return this._enablePhpCliServer;
  }

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

  // enabled_fast_cgi - computed: false, optional: true, required: false
  private _enabledFastCgi?: boolean | cdktf.IResolvable; 
  public get enabledFastCgi() {
    return this.getBooleanAttribute('enabled_fast_cgi');
  }
  public set enabledFastCgi(value: boolean | cdktf.IResolvable) {
    this._enabledFastCgi = value;
  }
  public resetEnabledFastCgi() {
    this._enabledFastCgi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFastCgiInput() {
    return this._enabledFastCgi;
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
      enable_php_cli_server: cdktf.booleanToTerraform(this._enablePhpCliServer),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enabled_fast_cgi: cdktf.booleanToTerraform(this._enabledFastCgi),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_php_cli_server: {
        value: cdktf.booleanToHclTerraform(this._enablePhpCliServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_fast_cgi: {
        value: cdktf.booleanToHclTerraform(this._enabledFastCgi),
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
