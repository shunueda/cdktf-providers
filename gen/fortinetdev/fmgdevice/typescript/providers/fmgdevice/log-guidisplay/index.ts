// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_guidisplay
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogGuidisplayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_guidisplay#device_name LogGuidisplay#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_guidisplay#device_vdom LogGuidisplay#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_guidisplay#fortiview_unscanned_apps LogGuidisplay#fortiview_unscanned_apps}
  */
  readonly fortiviewUnscannedApps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_guidisplay#id LogGuidisplay#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_guidisplay#resolve_apps LogGuidisplay#resolve_apps}
  */
  readonly resolveApps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_guidisplay#resolve_hosts LogGuidisplay#resolve_hosts}
  */
  readonly resolveHosts?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_guidisplay fmgdevice_log_guidisplay}
*/
export class LogGuidisplay extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_log_guidisplay";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogGuidisplay resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogGuidisplay to import
  * @param importFromId The id of the existing LogGuidisplay that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_guidisplay#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogGuidisplay to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_log_guidisplay", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_guidisplay fmgdevice_log_guidisplay} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogGuidisplayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogGuidisplayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_log_guidisplay',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fortiviewUnscannedApps = config.fortiviewUnscannedApps;
    this._id = config.id;
    this._resolveApps = config.resolveApps;
    this._resolveHosts = config.resolveHosts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // fortiview_unscanned_apps - computed: false, optional: true, required: false
  private _fortiviewUnscannedApps?: string; 
  public get fortiviewUnscannedApps() {
    return this.getStringAttribute('fortiview_unscanned_apps');
  }
  public set fortiviewUnscannedApps(value: string) {
    this._fortiviewUnscannedApps = value;
  }
  public resetFortiviewUnscannedApps() {
    this._fortiviewUnscannedApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiviewUnscannedAppsInput() {
    return this._fortiviewUnscannedApps;
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

  // resolve_apps - computed: true, optional: true, required: false
  private _resolveApps?: string; 
  public get resolveApps() {
    return this.getStringAttribute('resolve_apps');
  }
  public set resolveApps(value: string) {
    this._resolveApps = value;
  }
  public resetResolveApps() {
    this._resolveApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveAppsInput() {
    return this._resolveApps;
  }

  // resolve_hosts - computed: true, optional: true, required: false
  private _resolveHosts?: string; 
  public get resolveHosts() {
    return this.getStringAttribute('resolve_hosts');
  }
  public set resolveHosts(value: string) {
    this._resolveHosts = value;
  }
  public resetResolveHosts() {
    this._resolveHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveHostsInput() {
    return this._resolveHosts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fortiview_unscanned_apps: cdktf.stringToTerraform(this._fortiviewUnscannedApps),
      id: cdktf.stringToTerraform(this._id),
      resolve_apps: cdktf.stringToTerraform(this._resolveApps),
      resolve_hosts: cdktf.stringToTerraform(this._resolveHosts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiview_unscanned_apps: {
        value: cdktf.stringToHclTerraform(this._fortiviewUnscannedApps),
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
      resolve_apps: {
        value: cdktf.stringToHclTerraform(this._resolveApps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_hosts: {
        value: cdktf.stringToHclTerraform(this._resolveHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
