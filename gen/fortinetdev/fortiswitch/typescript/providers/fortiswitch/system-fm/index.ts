// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm#auto_backup SystemFm#auto_backup}
  */
  readonly autoBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm#fswid SystemFm#fswid}
  */
  readonly fswid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm#id SystemFm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm#ip SystemFm#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm#ipsec SystemFm#ipsec}
  */
  readonly ipsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm#scheduled_config_restore SystemFm#scheduled_config_restore}
  */
  readonly scheduledConfigRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm#status SystemFm#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm#vdom SystemFm#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm fortiswitch_system_fm}
*/
export class SystemFm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_fm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFm to import
  * @param importFromId The id of the existing SystemFm that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_fm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_fm fortiswitch_system_fm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_fm',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoBackup = config.autoBackup;
    this._fswid = config.fswid;
    this._id = config.id;
    this._ip = config.ip;
    this._ipsec = config.ipsec;
    this._scheduledConfigRestore = config.scheduledConfigRestore;
    this._status = config.status;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_backup - computed: true, optional: true, required: false
  private _autoBackup?: string; 
  public get autoBackup() {
    return this.getStringAttribute('auto_backup');
  }
  public set autoBackup(value: string) {
    this._autoBackup = value;
  }
  public resetAutoBackup() {
    this._autoBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupInput() {
    return this._autoBackup;
  }

  // fswid - computed: true, optional: true, required: false
  private _fswid?: string; 
  public get fswid() {
    return this.getStringAttribute('fswid');
  }
  public set fswid(value: string) {
    this._fswid = value;
  }
  public resetFswid() {
    this._fswid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswidInput() {
    return this._fswid;
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

  // scheduled_config_restore - computed: true, optional: true, required: false
  private _scheduledConfigRestore?: string; 
  public get scheduledConfigRestore() {
    return this.getStringAttribute('scheduled_config_restore');
  }
  public set scheduledConfigRestore(value: string) {
    this._scheduledConfigRestore = value;
  }
  public resetScheduledConfigRestore() {
    this._scheduledConfigRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledConfigRestoreInput() {
    return this._scheduledConfigRestore;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_backup: cdktf.stringToTerraform(this._autoBackup),
      fswid: cdktf.stringToTerraform(this._fswid),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ipsec: cdktf.stringToTerraform(this._ipsec),
      scheduled_config_restore: cdktf.stringToTerraform(this._scheduledConfigRestore),
      status: cdktf.stringToTerraform(this._status),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_backup: {
        value: cdktf.stringToHclTerraform(this._autoBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fswid: {
        value: cdktf.stringToHclTerraform(this._fswid),
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
      scheduled_config_restore: {
        value: cdktf.stringToHclTerraform(this._scheduledConfigRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
