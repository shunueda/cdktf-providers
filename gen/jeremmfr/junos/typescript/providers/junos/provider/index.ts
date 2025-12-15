// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JunosProviderConfig {
  /**
  * Seconds of standby while waiting for Terraform provider to lock candidate configuration on a Junos device. May also be provided via JUNOS_SLEEP_LOCK environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#cmd_sleep_lock JunosProvider#cmd_sleep_lock}
  */
  readonly cmdSleepLock?: number;
  /**
  * Milliseconds to wait after Terraform  provider executes an action on the Junos device. May also be provided via JUNOS_SLEEP_SHORT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#cmd_sleep_short JunosProvider#cmd_sleep_short}
  */
  readonly cmdSleepShort?: number;
  /**
  * Number of minutes until automatic rollback. May also be provided via JUNOS_COMMIT_CONFIRMED environment variable. For each resource action with commit, commit with `confirmed` option and with the value ot this argument as `confirm-timeout`,  wait for `<commit_confirmed_wait_percent>`% of the minutes defined in the value of this argument, and confirm commit to avoid rollback with the `commit check` command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#commit_confirmed JunosProvider#commit_confirmed}
  */
  readonly commitConfirmed?: number;
  /**
  * Percentage of `<commit_confirmed>` minute(s) to wait between `commit confirmed` (commit with automatic rollback) and `commit check` (confirmation) commands. No effect if `<commit_confirmed>` is not used. May also be provided via JUNOS_COMMIT_CONFIRMED_WAIT_PERCENT environment variable. Defaults to 90.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#commit_confirmed_wait_percent JunosProvider#commit_confirmed_wait_percent}
  */
  readonly commitConfirmedWaitPercent?: number;
  /**
  * More detailed log (netconf) in the specified file. May also be provided via JUNOS_LOG_PATH environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#debug_netconf_log_path JunosProvider#debug_netconf_log_path}
  */
  readonly debugNetconfLogPath?: string;
  /**
  * The normal process to create resources skipped to generate set lines, append them to the specified file, and respond with a `fake` successful creation of resources to Terraform. May also be provided via JUNOS_FAKECREATE_SETFILE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#fake_create_with_setfile JunosProvider#fake_create_with_setfile}
  */
  readonly fakeCreateWithSetfile?: string;
  /**
  * The normal process to delete resources skipped to generate delete lines, append them to the same file as `fake_create_with_setfile`, and respond with a `fake` successful delete of resources to Terraform. May also be enabled via JUNOS_FAKEDELETE_ALSO environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#fake_delete_also JunosProvider#fake_delete_also}
  */
  readonly fakeDeleteAlso?: boolean | cdktf.IResolvable;
  /**
  * The normal process to update resources skipped to generate set/delete lines, append them to the same file as `fake_create_with_setfile`, and respond with a `fake` successful update of resources to Terraform. May also be enabled via JUNOS_FAKEUPDATE_ALSO environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#fake_update_also JunosProvider#fake_update_also}
  */
  readonly fakeUpdateAlso?: boolean | cdktf.IResolvable;
  /**
  * The permission to set for the created file (debug, setfile). May also be provided via JUNOS_FILE_PERMISSION environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#file_permission JunosProvider#file_permission}
  */
  readonly filePermission?: string;
  /**
  * This is the Junos group used to remove configuration on a physical interface. May also be provided via JUNOS_GROUP_INTERFACE_DELETE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#group_interface_delete JunosProvider#group_interface_delete}
  */
  readonly groupInterfaceDelete?: string;
  /**
  * This is the target for Netconf session (ip or dns name). May also be provided via JUNOS_HOST environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#ip JunosProvider#ip}
  */
  readonly ip?: string;
  /**
  * This is the passphrase for open `sshkeyfile` or `sshkey_pem`. May also be provided via JUNOS_KEYPASS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#keypass JunosProvider#keypass}
  */
  readonly keypass?: string;
  /**
  * Disable decoding secret $9$ hashes by Junos device when read resource data. So encoded secrets need to be set in resources config to avoid drift between Terraform config and state. May also be enabled via JUNOS_NO_DECODE_SECRETS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#no_decode_secrets JunosProvider#no_decode_secrets}
  */
  readonly noDecodeSecrets?: boolean | cdktf.IResolvable;
  /**
  * This is a password for ssh connection. May also be provided via JUNOS_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#password JunosProvider#password}
  */
  readonly password?: string;
  /**
  * This is the tcp port for ssh connection. May also be provided via JUNOS_PORT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#port JunosProvider#port}
  */
  readonly port?: number;
  /**
  * Ciphers used in SSH connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#ssh_ciphers JunosProvider#ssh_ciphers}
  */
  readonly sshCiphers?: string[];
  /**
  * Number of retries to establish SSH connections.The provider waits after each try, with the sleep time increasing by 1 second each time. May also be provided via JUNOS_SSH_RETRY_TO_ESTABLISH environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#ssh_retry_to_establish JunosProvider#ssh_retry_to_establish}
  */
  readonly sshRetryToEstablish?: number;
  /**
  * Seconds to wait after Terraform provider closed a ssh connection. May also be provided via JUNOS_SLEEP_SSH_CLOSED environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#ssh_sleep_closed JunosProvider#ssh_sleep_closed}
  */
  readonly sshSleepClosed?: number;
  /**
  * Seconds to wait for establishing TCP connections when initiating SSH connections. May also be provided via JUNOS_SSH_TIMEOUT_TO_ESTABLISH environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#ssh_timeout_to_establish JunosProvider#ssh_timeout_to_establish}
  */
  readonly sshTimeoutToEstablish?: number;
  /**
  * This is the ssh key in PEM format for establish ssh connection. May also be provided via JUNOS_KEYPEM environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#sshkey_pem JunosProvider#sshkey_pem}
  */
  readonly sshkeyPem?: string;
  /**
  * This is the path to ssh key for establish ssh connection. May also be provided via JUNOS_KEYFILE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#sshkeyfile JunosProvider#sshkeyfile}
  */
  readonly sshkeyfile?: string;
  /**
  * This is the username for ssh connection. May also be provided via JUNOS_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#username JunosProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#alias JunosProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs junos}
*/
export class JunosProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JunosProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JunosProvider to import
  * @param importFromId The id of the existing JunosProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JunosProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs junos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JunosProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: JunosProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      terraformProviderSource: 'jeremmfr/junos'
    });
    this._cmdSleepLock = config.cmdSleepLock;
    this._cmdSleepShort = config.cmdSleepShort;
    this._commitConfirmed = config.commitConfirmed;
    this._commitConfirmedWaitPercent = config.commitConfirmedWaitPercent;
    this._debugNetconfLogPath = config.debugNetconfLogPath;
    this._fakeCreateWithSetfile = config.fakeCreateWithSetfile;
    this._fakeDeleteAlso = config.fakeDeleteAlso;
    this._fakeUpdateAlso = config.fakeUpdateAlso;
    this._filePermission = config.filePermission;
    this._groupInterfaceDelete = config.groupInterfaceDelete;
    this._ip = config.ip;
    this._keypass = config.keypass;
    this._noDecodeSecrets = config.noDecodeSecrets;
    this._password = config.password;
    this._port = config.port;
    this._sshCiphers = config.sshCiphers;
    this._sshRetryToEstablish = config.sshRetryToEstablish;
    this._sshSleepClosed = config.sshSleepClosed;
    this._sshTimeoutToEstablish = config.sshTimeoutToEstablish;
    this._sshkeyPem = config.sshkeyPem;
    this._sshkeyfile = config.sshkeyfile;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cmd_sleep_lock - computed: false, optional: true, required: false
  private _cmdSleepLock?: number; 
  public get cmdSleepLock() {
    return this._cmdSleepLock;
  }
  public set cmdSleepLock(value: number | undefined) {
    this._cmdSleepLock = value;
  }
  public resetCmdSleepLock() {
    this._cmdSleepLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdSleepLockInput() {
    return this._cmdSleepLock;
  }

  // cmd_sleep_short - computed: false, optional: true, required: false
  private _cmdSleepShort?: number; 
  public get cmdSleepShort() {
    return this._cmdSleepShort;
  }
  public set cmdSleepShort(value: number | undefined) {
    this._cmdSleepShort = value;
  }
  public resetCmdSleepShort() {
    this._cmdSleepShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdSleepShortInput() {
    return this._cmdSleepShort;
  }

  // commit_confirmed - computed: false, optional: true, required: false
  private _commitConfirmed?: number; 
  public get commitConfirmed() {
    return this._commitConfirmed;
  }
  public set commitConfirmed(value: number | undefined) {
    this._commitConfirmed = value;
  }
  public resetCommitConfirmed() {
    this._commitConfirmed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitConfirmedInput() {
    return this._commitConfirmed;
  }

  // commit_confirmed_wait_percent - computed: false, optional: true, required: false
  private _commitConfirmedWaitPercent?: number; 
  public get commitConfirmedWaitPercent() {
    return this._commitConfirmedWaitPercent;
  }
  public set commitConfirmedWaitPercent(value: number | undefined) {
    this._commitConfirmedWaitPercent = value;
  }
  public resetCommitConfirmedWaitPercent() {
    this._commitConfirmedWaitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitConfirmedWaitPercentInput() {
    return this._commitConfirmedWaitPercent;
  }

  // debug_netconf_log_path - computed: false, optional: true, required: false
  private _debugNetconfLogPath?: string; 
  public get debugNetconfLogPath() {
    return this._debugNetconfLogPath;
  }
  public set debugNetconfLogPath(value: string | undefined) {
    this._debugNetconfLogPath = value;
  }
  public resetDebugNetconfLogPath() {
    this._debugNetconfLogPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugNetconfLogPathInput() {
    return this._debugNetconfLogPath;
  }

  // fake_create_with_setfile - computed: false, optional: true, required: false
  private _fakeCreateWithSetfile?: string; 
  public get fakeCreateWithSetfile() {
    return this._fakeCreateWithSetfile;
  }
  public set fakeCreateWithSetfile(value: string | undefined) {
    this._fakeCreateWithSetfile = value;
  }
  public resetFakeCreateWithSetfile() {
    this._fakeCreateWithSetfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeCreateWithSetfileInput() {
    return this._fakeCreateWithSetfile;
  }

  // fake_delete_also - computed: false, optional: true, required: false
  private _fakeDeleteAlso?: boolean | cdktf.IResolvable; 
  public get fakeDeleteAlso() {
    return this._fakeDeleteAlso;
  }
  public set fakeDeleteAlso(value: boolean | cdktf.IResolvable | undefined) {
    this._fakeDeleteAlso = value;
  }
  public resetFakeDeleteAlso() {
    this._fakeDeleteAlso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeDeleteAlsoInput() {
    return this._fakeDeleteAlso;
  }

  // fake_update_also - computed: false, optional: true, required: false
  private _fakeUpdateAlso?: boolean | cdktf.IResolvable; 
  public get fakeUpdateAlso() {
    return this._fakeUpdateAlso;
  }
  public set fakeUpdateAlso(value: boolean | cdktf.IResolvable | undefined) {
    this._fakeUpdateAlso = value;
  }
  public resetFakeUpdateAlso() {
    this._fakeUpdateAlso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeUpdateAlsoInput() {
    return this._fakeUpdateAlso;
  }

  // file_permission - computed: false, optional: true, required: false
  private _filePermission?: string; 
  public get filePermission() {
    return this._filePermission;
  }
  public set filePermission(value: string | undefined) {
    this._filePermission = value;
  }
  public resetFilePermission() {
    this._filePermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePermissionInput() {
    return this._filePermission;
  }

  // group_interface_delete - computed: false, optional: true, required: false
  private _groupInterfaceDelete?: string; 
  public get groupInterfaceDelete() {
    return this._groupInterfaceDelete;
  }
  public set groupInterfaceDelete(value: string | undefined) {
    this._groupInterfaceDelete = value;
  }
  public resetGroupInterfaceDelete() {
    this._groupInterfaceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInterfaceDeleteInput() {
    return this._groupInterfaceDelete;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this._ip;
  }
  public set ip(value: string | undefined) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // keypass - computed: false, optional: true, required: false
  private _keypass?: string; 
  public get keypass() {
    return this._keypass;
  }
  public set keypass(value: string | undefined) {
    this._keypass = value;
  }
  public resetKeypass() {
    this._keypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypassInput() {
    return this._keypass;
  }

  // no_decode_secrets - computed: false, optional: true, required: false
  private _noDecodeSecrets?: boolean | cdktf.IResolvable; 
  public get noDecodeSecrets() {
    return this._noDecodeSecrets;
  }
  public set noDecodeSecrets(value: boolean | cdktf.IResolvable | undefined) {
    this._noDecodeSecrets = value;
  }
  public resetNoDecodeSecrets() {
    this._noDecodeSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDecodeSecretsInput() {
    return this._noDecodeSecrets;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssh_ciphers - computed: false, optional: true, required: false
  private _sshCiphers?: string[]; 
  public get sshCiphers() {
    return this._sshCiphers;
  }
  public set sshCiphers(value: string[] | undefined) {
    this._sshCiphers = value;
  }
  public resetSshCiphers() {
    this._sshCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCiphersInput() {
    return this._sshCiphers;
  }

  // ssh_retry_to_establish - computed: false, optional: true, required: false
  private _sshRetryToEstablish?: number; 
  public get sshRetryToEstablish() {
    return this._sshRetryToEstablish;
  }
  public set sshRetryToEstablish(value: number | undefined) {
    this._sshRetryToEstablish = value;
  }
  public resetSshRetryToEstablish() {
    this._sshRetryToEstablish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshRetryToEstablishInput() {
    return this._sshRetryToEstablish;
  }

  // ssh_sleep_closed - computed: false, optional: true, required: false
  private _sshSleepClosed?: number; 
  public get sshSleepClosed() {
    return this._sshSleepClosed;
  }
  public set sshSleepClosed(value: number | undefined) {
    this._sshSleepClosed = value;
  }
  public resetSshSleepClosed() {
    this._sshSleepClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshSleepClosedInput() {
    return this._sshSleepClosed;
  }

  // ssh_timeout_to_establish - computed: false, optional: true, required: false
  private _sshTimeoutToEstablish?: number; 
  public get sshTimeoutToEstablish() {
    return this._sshTimeoutToEstablish;
  }
  public set sshTimeoutToEstablish(value: number | undefined) {
    this._sshTimeoutToEstablish = value;
  }
  public resetSshTimeoutToEstablish() {
    this._sshTimeoutToEstablish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTimeoutToEstablishInput() {
    return this._sshTimeoutToEstablish;
  }

  // sshkey_pem - computed: false, optional: true, required: false
  private _sshkeyPem?: string; 
  public get sshkeyPem() {
    return this._sshkeyPem;
  }
  public set sshkeyPem(value: string | undefined) {
    this._sshkeyPem = value;
  }
  public resetSshkeyPem() {
    this._sshkeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshkeyPemInput() {
    return this._sshkeyPem;
  }

  // sshkeyfile - computed: false, optional: true, required: false
  private _sshkeyfile?: string; 
  public get sshkeyfile() {
    return this._sshkeyfile;
  }
  public set sshkeyfile(value: string | undefined) {
    this._sshkeyfile = value;
  }
  public resetSshkeyfile() {
    this._sshkeyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshkeyfileInput() {
    return this._sshkeyfile;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cmd_sleep_lock: cdktf.numberToTerraform(this._cmdSleepLock),
      cmd_sleep_short: cdktf.numberToTerraform(this._cmdSleepShort),
      commit_confirmed: cdktf.numberToTerraform(this._commitConfirmed),
      commit_confirmed_wait_percent: cdktf.numberToTerraform(this._commitConfirmedWaitPercent),
      debug_netconf_log_path: cdktf.stringToTerraform(this._debugNetconfLogPath),
      fake_create_with_setfile: cdktf.stringToTerraform(this._fakeCreateWithSetfile),
      fake_delete_also: cdktf.booleanToTerraform(this._fakeDeleteAlso),
      fake_update_also: cdktf.booleanToTerraform(this._fakeUpdateAlso),
      file_permission: cdktf.stringToTerraform(this._filePermission),
      group_interface_delete: cdktf.stringToTerraform(this._groupInterfaceDelete),
      ip: cdktf.stringToTerraform(this._ip),
      keypass: cdktf.stringToTerraform(this._keypass),
      no_decode_secrets: cdktf.booleanToTerraform(this._noDecodeSecrets),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      ssh_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshCiphers),
      ssh_retry_to_establish: cdktf.numberToTerraform(this._sshRetryToEstablish),
      ssh_sleep_closed: cdktf.numberToTerraform(this._sshSleepClosed),
      ssh_timeout_to_establish: cdktf.numberToTerraform(this._sshTimeoutToEstablish),
      sshkey_pem: cdktf.stringToTerraform(this._sshkeyPem),
      sshkeyfile: cdktf.stringToTerraform(this._sshkeyfile),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cmd_sleep_lock: {
        value: cdktf.numberToHclTerraform(this._cmdSleepLock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cmd_sleep_short: {
        value: cdktf.numberToHclTerraform(this._cmdSleepShort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      commit_confirmed: {
        value: cdktf.numberToHclTerraform(this._commitConfirmed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      commit_confirmed_wait_percent: {
        value: cdktf.numberToHclTerraform(this._commitConfirmedWaitPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      debug_netconf_log_path: {
        value: cdktf.stringToHclTerraform(this._debugNetconfLogPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fake_create_with_setfile: {
        value: cdktf.stringToHclTerraform(this._fakeCreateWithSetfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fake_delete_also: {
        value: cdktf.booleanToHclTerraform(this._fakeDeleteAlso),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fake_update_also: {
        value: cdktf.booleanToHclTerraform(this._fakeUpdateAlso),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_permission: {
        value: cdktf.stringToHclTerraform(this._filePermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_interface_delete: {
        value: cdktf.stringToHclTerraform(this._groupInterfaceDelete),
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
      keypass: {
        value: cdktf.stringToHclTerraform(this._keypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_decode_secrets: {
        value: cdktf.booleanToHclTerraform(this._noDecodeSecrets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_ciphers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshCiphers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssh_retry_to_establish: {
        value: cdktf.numberToHclTerraform(this._sshRetryToEstablish),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_sleep_closed: {
        value: cdktf.numberToHclTerraform(this._sshSleepClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_timeout_to_establish: {
        value: cdktf.numberToHclTerraform(this._sshTimeoutToEstablish),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sshkey_pem: {
        value: cdktf.stringToHclTerraform(this._sshkeyPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sshkeyfile: {
        value: cdktf.stringToHclTerraform(this._sshkeyfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
