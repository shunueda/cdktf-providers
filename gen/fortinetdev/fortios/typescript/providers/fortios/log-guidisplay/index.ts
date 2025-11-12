// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_guidisplay
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogGuidisplayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_guidisplay#fortiview_unscanned_apps LogGuidisplay#fortiview_unscanned_apps}
  */
  readonly fortiviewUnscannedApps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_guidisplay#id LogGuidisplay#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_guidisplay#resolve_apps LogGuidisplay#resolve_apps}
  */
  readonly resolveApps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_guidisplay#resolve_hosts LogGuidisplay#resolve_hosts}
  */
  readonly resolveHosts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_guidisplay#vdomparam LogGuidisplay#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_guidisplay fortios_log_guidisplay}
*/
export class LogGuidisplay extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_log_guidisplay";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogGuidisplay resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogGuidisplay to import
  * @param importFromId The id of the existing LogGuidisplay that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_guidisplay#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogGuidisplay to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_log_guidisplay", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_guidisplay fortios_log_guidisplay} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogGuidisplayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogGuidisplayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_log_guidisplay',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fortiviewUnscannedApps = config.fortiviewUnscannedApps;
    this._id = config.id;
    this._resolveApps = config.resolveApps;
    this._resolveHosts = config.resolveHosts;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fortiview_unscanned_apps - computed: true, optional: true, required: false
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fortiview_unscanned_apps: cdktf.stringToTerraform(this._fortiviewUnscannedApps),
      id: cdktf.stringToTerraform(this._id),
      resolve_apps: cdktf.stringToTerraform(this._resolveApps),
      resolve_hosts: cdktf.stringToTerraform(this._resolveHosts),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
