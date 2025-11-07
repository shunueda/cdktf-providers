// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSettingGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global#admin_scp SystemSettingGlobal#admin_scp}
  */
  readonly adminScp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global#admin_sport SystemSettingGlobal#admin_sport}
  */
  readonly adminSport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global#admin_ssh_port SystemSettingGlobal#admin_ssh_port}
  */
  readonly adminSshPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global#admintimeout SystemSettingGlobal#admintimeout}
  */
  readonly admintimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global#hostname SystemSettingGlobal#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global#id SystemSettingGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global#timezone SystemSettingGlobal#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global fortios_system_setting_global}
*/
export class SystemSettingGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_setting_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSettingGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSettingGlobal to import
  * @param importFromId The id of the existing SystemSettingGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSettingGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_setting_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_setting_global fortios_system_setting_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSettingGlobalConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSettingGlobalConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_setting_global',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminScp = config.adminScp;
    this._adminSport = config.adminSport;
    this._adminSshPort = config.adminSshPort;
    this._admintimeout = config.admintimeout;
    this._hostname = config.hostname;
    this._id = config.id;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_scp - computed: true, optional: true, required: false
  private _adminScp?: string; 
  public get adminScp() {
    return this.getStringAttribute('admin_scp');
  }
  public set adminScp(value: string) {
    this._adminScp = value;
  }
  public resetAdminScp() {
    this._adminScp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminScpInput() {
    return this._adminScp;
  }

  // admin_sport - computed: true, optional: true, required: false
  private _adminSport?: string; 
  public get adminSport() {
    return this.getStringAttribute('admin_sport');
  }
  public set adminSport(value: string) {
    this._adminSport = value;
  }
  public resetAdminSport() {
    this._adminSport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSportInput() {
    return this._adminSport;
  }

  // admin_ssh_port - computed: true, optional: true, required: false
  private _adminSshPort?: string; 
  public get adminSshPort() {
    return this.getStringAttribute('admin_ssh_port');
  }
  public set adminSshPort(value: string) {
    this._adminSshPort = value;
  }
  public resetAdminSshPort() {
    this._adminSshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshPortInput() {
    return this._adminSshPort;
  }

  // admintimeout - computed: true, optional: true, required: false
  private _admintimeout?: string; 
  public get admintimeout() {
    return this.getStringAttribute('admintimeout');
  }
  public set admintimeout(value: string) {
    this._admintimeout = value;
  }
  public resetAdmintimeout() {
    this._admintimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admintimeoutInput() {
    return this._admintimeout;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_scp: cdktf.stringToTerraform(this._adminScp),
      admin_sport: cdktf.stringToTerraform(this._adminSport),
      admin_ssh_port: cdktf.stringToTerraform(this._adminSshPort),
      admintimeout: cdktf.stringToTerraform(this._admintimeout),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_scp: {
        value: cdktf.stringToHclTerraform(this._adminScp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_sport: {
        value: cdktf.stringToHclTerraform(this._adminSport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_ssh_port: {
        value: cdktf.stringToHclTerraform(this._adminSshPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admintimeout: {
        value: cdktf.stringToHclTerraform(this._admintimeout),
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
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
