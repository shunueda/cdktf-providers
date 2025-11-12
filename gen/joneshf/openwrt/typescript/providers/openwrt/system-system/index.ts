// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum log level for kernel messages to be logged to the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#conloglevel SystemSystem#conloglevel}
  */
  readonly conloglevel?: number;
  /**
  * The minimum level for cron messages to be logged to syslog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#cronloglevel SystemSystem#cronloglevel}
  */
  readonly cronloglevel?: number;
  /**
  * The hostname for the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#description SystemSystem#description}
  */
  readonly description?: string;
  /**
  * A short single-line description for the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#hostname SystemSystem#hostname}
  */
  readonly hostname?: string;
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#id SystemSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Size of the file based log buffer in KiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#log_size SystemSystem#log_size}
  */
  readonly logSize?: number;
  /**
  * Multi-line free-form text about the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#notes SystemSystem#notes}
  */
  readonly notes?: string;
  /**
  * The POSIX.1 time zone string. This has no corresponding value in LuCI. See: https://github.com/openwrt/luci/blob/cd82ccacef78d3bb8b8af6b87dabb9e892e2b2aa/modules/luci-base/luasrc/sys/zoneinfo/tzdata.lua.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#timezone SystemSystem#timezone}
  */
  readonly timezone?: string;
  /**
  * Require authentication for local users to log in the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#ttylogin SystemSystem#ttylogin}
  */
  readonly ttylogin?: boolean | cdktf.IResolvable;
  /**
  * The IANA/Olson time zone string. This corresponds to "Timezone" in LuCI. See: https://github.com/openwrt/luci/blob/cd82ccacef78d3bb8b8af6b87dabb9e892e2b2aa/modules/luci-base/luasrc/sys/zoneinfo/tzdata.lua.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#zonename SystemSystem#zonename}
  */
  readonly zonename?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system openwrt_system_system}
*/
export class SystemSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_system_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSystem to import
  * @param importFromId The id of the existing SystemSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_system_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/system_system openwrt_system_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSystemConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_system_system',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20',
        providerVersionConstraint: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conloglevel = config.conloglevel;
    this._cronloglevel = config.cronloglevel;
    this._description = config.description;
    this._hostname = config.hostname;
    this._id = config.id;
    this._logSize = config.logSize;
    this._notes = config.notes;
    this._timezone = config.timezone;
    this._ttylogin = config.ttylogin;
    this._zonename = config.zonename;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conloglevel - computed: true, optional: true, required: false
  private _conloglevel?: number; 
  public get conloglevel() {
    return this.getNumberAttribute('conloglevel');
  }
  public set conloglevel(value: number) {
    this._conloglevel = value;
  }
  public resetConloglevel() {
    this._conloglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conloglevelInput() {
    return this._conloglevel;
  }

  // cronloglevel - computed: true, optional: true, required: false
  private _cronloglevel?: number; 
  public get cronloglevel() {
    return this.getNumberAttribute('cronloglevel');
  }
  public set cronloglevel(value: number) {
    this._cronloglevel = value;
  }
  public resetCronloglevel() {
    this._cronloglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronloglevelInput() {
    return this._cronloglevel;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_size - computed: true, optional: true, required: false
  private _logSize?: number; 
  public get logSize() {
    return this.getNumberAttribute('log_size');
  }
  public set logSize(value: number) {
    this._logSize = value;
  }
  public resetLogSize() {
    this._logSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSizeInput() {
    return this._logSize;
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

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // ttylogin - computed: true, optional: true, required: false
  private _ttylogin?: boolean | cdktf.IResolvable; 
  public get ttylogin() {
    return this.getBooleanAttribute('ttylogin');
  }
  public set ttylogin(value: boolean | cdktf.IResolvable) {
    this._ttylogin = value;
  }
  public resetTtylogin() {
    this._ttylogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttyloginInput() {
    return this._ttylogin;
  }

  // zonename - computed: true, optional: true, required: false
  private _zonename?: string; 
  public get zonename() {
    return this.getStringAttribute('zonename');
  }
  public set zonename(value: string) {
    this._zonename = value;
  }
  public resetZonename() {
    this._zonename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonenameInput() {
    return this._zonename;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conloglevel: cdktf.numberToTerraform(this._conloglevel),
      cronloglevel: cdktf.numberToTerraform(this._cronloglevel),
      description: cdktf.stringToTerraform(this._description),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      log_size: cdktf.numberToTerraform(this._logSize),
      notes: cdktf.stringToTerraform(this._notes),
      timezone: cdktf.stringToTerraform(this._timezone),
      ttylogin: cdktf.booleanToTerraform(this._ttylogin),
      zonename: cdktf.stringToTerraform(this._zonename),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conloglevel: {
        value: cdktf.numberToHclTerraform(this._conloglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cronloglevel: {
        value: cdktf.numberToHclTerraform(this._cronloglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      log_size: {
        value: cdktf.numberToHclTerraform(this._logSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttylogin: {
        value: cdktf.booleanToHclTerraform(this._ttylogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zonename: {
        value: cdktf.stringToHclTerraform(this._zonename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
