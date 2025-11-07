// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerSwitchprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile#device_name SwitchcontrollerSwitchprofile#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile#device_vdom SwitchcontrollerSwitchprofile#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile#id SwitchcontrollerSwitchprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile#login SwitchcontrollerSwitchprofile#login}
  */
  readonly login?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile#login_passwd SwitchcontrollerSwitchprofile#login_passwd}
  */
  readonly loginPasswd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile#login_passwd_override SwitchcontrollerSwitchprofile#login_passwd_override}
  */
  readonly loginPasswdOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile#name SwitchcontrollerSwitchprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile#revision_backup_on_logout SwitchcontrollerSwitchprofile#revision_backup_on_logout}
  */
  readonly revisionBackupOnLogout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile#revision_backup_on_upgrade SwitchcontrollerSwitchprofile#revision_backup_on_upgrade}
  */
  readonly revisionBackupOnUpgrade?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile fmgdevice_switchcontroller_switchprofile}
*/
export class SwitchcontrollerSwitchprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_switchprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerSwitchprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerSwitchprofile to import
  * @param importFromId The id of the existing SwitchcontrollerSwitchprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerSwitchprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_switchprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_switchprofile fmgdevice_switchcontroller_switchprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerSwitchprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerSwitchprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_switchprofile',
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
    this._id = config.id;
    this._login = config.login;
    this._loginPasswd = config.loginPasswd;
    this._loginPasswdOverride = config.loginPasswdOverride;
    this._name = config.name;
    this._revisionBackupOnLogout = config.revisionBackupOnLogout;
    this._revisionBackupOnUpgrade = config.revisionBackupOnUpgrade;
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

  // login - computed: true, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // login_passwd - computed: true, optional: true, required: false
  private _loginPasswd?: string[]; 
  public get loginPasswd() {
    return cdktf.Fn.tolist(this.getListAttribute('login_passwd'));
  }
  public set loginPasswd(value: string[]) {
    this._loginPasswd = value;
  }
  public resetLoginPasswd() {
    this._loginPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswdInput() {
    return this._loginPasswd;
  }

  // login_passwd_override - computed: true, optional: true, required: false
  private _loginPasswdOverride?: string; 
  public get loginPasswdOverride() {
    return this.getStringAttribute('login_passwd_override');
  }
  public set loginPasswdOverride(value: string) {
    this._loginPasswdOverride = value;
  }
  public resetLoginPasswdOverride() {
    this._loginPasswdOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswdOverrideInput() {
    return this._loginPasswdOverride;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // revision_backup_on_logout - computed: true, optional: true, required: false
  private _revisionBackupOnLogout?: string; 
  public get revisionBackupOnLogout() {
    return this.getStringAttribute('revision_backup_on_logout');
  }
  public set revisionBackupOnLogout(value: string) {
    this._revisionBackupOnLogout = value;
  }
  public resetRevisionBackupOnLogout() {
    this._revisionBackupOnLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionBackupOnLogoutInput() {
    return this._revisionBackupOnLogout;
  }

  // revision_backup_on_upgrade - computed: true, optional: true, required: false
  private _revisionBackupOnUpgrade?: string; 
  public get revisionBackupOnUpgrade() {
    return this.getStringAttribute('revision_backup_on_upgrade');
  }
  public set revisionBackupOnUpgrade(value: string) {
    this._revisionBackupOnUpgrade = value;
  }
  public resetRevisionBackupOnUpgrade() {
    this._revisionBackupOnUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionBackupOnUpgradeInput() {
    return this._revisionBackupOnUpgrade;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      login: cdktf.stringToTerraform(this._login),
      login_passwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loginPasswd),
      login_passwd_override: cdktf.stringToTerraform(this._loginPasswdOverride),
      name: cdktf.stringToTerraform(this._name),
      revision_backup_on_logout: cdktf.stringToTerraform(this._revisionBackupOnLogout),
      revision_backup_on_upgrade: cdktf.stringToTerraform(this._revisionBackupOnUpgrade),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login: {
        value: cdktf.stringToHclTerraform(this._login),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_passwd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loginPasswd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      login_passwd_override: {
        value: cdktf.stringToHclTerraform(this._loginPasswdOverride),
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
      revision_backup_on_logout: {
        value: cdktf.stringToHclTerraform(this._revisionBackupOnLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision_backup_on_upgrade: {
        value: cdktf.stringToHclTerraform(this._revisionBackupOnUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
