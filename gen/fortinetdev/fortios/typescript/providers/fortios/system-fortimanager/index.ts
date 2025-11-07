// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFortimanagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager#central_management SystemFortimanager#central_management}
  */
  readonly centralManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager#central_mgmt_auto_backup SystemFortimanager#central_mgmt_auto_backup}
  */
  readonly centralMgmtAutoBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager#central_mgmt_schedule_config_restore SystemFortimanager#central_mgmt_schedule_config_restore}
  */
  readonly centralMgmtScheduleConfigRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager#central_mgmt_schedule_script_restore SystemFortimanager#central_mgmt_schedule_script_restore}
  */
  readonly centralMgmtScheduleScriptRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager#id SystemFortimanager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager#ip SystemFortimanager#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager#ipsec SystemFortimanager#ipsec}
  */
  readonly ipsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager#vdom SystemFortimanager#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager#vdomparam SystemFortimanager#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager fortios_system_fortimanager}
*/
export class SystemFortimanager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_fortimanager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFortimanager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFortimanager to import
  * @param importFromId The id of the existing SystemFortimanager that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFortimanager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_fortimanager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_fortimanager fortios_system_fortimanager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFortimanagerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFortimanagerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_fortimanager',
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
    this._centralManagement = config.centralManagement;
    this._centralMgmtAutoBackup = config.centralMgmtAutoBackup;
    this._centralMgmtScheduleConfigRestore = config.centralMgmtScheduleConfigRestore;
    this._centralMgmtScheduleScriptRestore = config.centralMgmtScheduleScriptRestore;
    this._id = config.id;
    this._ip = config.ip;
    this._ipsec = config.ipsec;
    this._vdom = config.vdom;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // central_management - computed: true, optional: true, required: false
  private _centralManagement?: string; 
  public get centralManagement() {
    return this.getStringAttribute('central_management');
  }
  public set centralManagement(value: string) {
    this._centralManagement = value;
  }
  public resetCentralManagement() {
    this._centralManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralManagementInput() {
    return this._centralManagement;
  }

  // central_mgmt_auto_backup - computed: true, optional: true, required: false
  private _centralMgmtAutoBackup?: string; 
  public get centralMgmtAutoBackup() {
    return this.getStringAttribute('central_mgmt_auto_backup');
  }
  public set centralMgmtAutoBackup(value: string) {
    this._centralMgmtAutoBackup = value;
  }
  public resetCentralMgmtAutoBackup() {
    this._centralMgmtAutoBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralMgmtAutoBackupInput() {
    return this._centralMgmtAutoBackup;
  }

  // central_mgmt_schedule_config_restore - computed: true, optional: true, required: false
  private _centralMgmtScheduleConfigRestore?: string; 
  public get centralMgmtScheduleConfigRestore() {
    return this.getStringAttribute('central_mgmt_schedule_config_restore');
  }
  public set centralMgmtScheduleConfigRestore(value: string) {
    this._centralMgmtScheduleConfigRestore = value;
  }
  public resetCentralMgmtScheduleConfigRestore() {
    this._centralMgmtScheduleConfigRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralMgmtScheduleConfigRestoreInput() {
    return this._centralMgmtScheduleConfigRestore;
  }

  // central_mgmt_schedule_script_restore - computed: true, optional: true, required: false
  private _centralMgmtScheduleScriptRestore?: string; 
  public get centralMgmtScheduleScriptRestore() {
    return this.getStringAttribute('central_mgmt_schedule_script_restore');
  }
  public set centralMgmtScheduleScriptRestore(value: string) {
    this._centralMgmtScheduleScriptRestore = value;
  }
  public resetCentralMgmtScheduleScriptRestore() {
    this._centralMgmtScheduleScriptRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralMgmtScheduleScriptRestoreInput() {
    return this._centralMgmtScheduleScriptRestore;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipsec - computed: true, optional: true, required: false
  private _ipsec?: string; 
  public get ipsec() {
    return this.getStringAttribute('ipsec');
  }
  public set ipsec(value: string) {
    this._ipsec = value;
  }
  public resetIpsec() {
    this._ipsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecInput() {
    return this._ipsec;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
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
      central_management: cdktf.stringToTerraform(this._centralManagement),
      central_mgmt_auto_backup: cdktf.stringToTerraform(this._centralMgmtAutoBackup),
      central_mgmt_schedule_config_restore: cdktf.stringToTerraform(this._centralMgmtScheduleConfigRestore),
      central_mgmt_schedule_script_restore: cdktf.stringToTerraform(this._centralMgmtScheduleScriptRestore),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ipsec: cdktf.stringToTerraform(this._ipsec),
      vdom: cdktf.stringToTerraform(this._vdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      central_management: {
        value: cdktf.stringToHclTerraform(this._centralManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      central_mgmt_auto_backup: {
        value: cdktf.stringToHclTerraform(this._centralMgmtAutoBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      central_mgmt_schedule_config_restore: {
        value: cdktf.stringToHclTerraform(this._centralMgmtScheduleConfigRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      central_mgmt_schedule_script_restore: {
        value: cdktf.stringToHclTerraform(this._centralMgmtScheduleScriptRestore),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec: {
        value: cdktf.stringToHclTerraform(this._ipsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
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
