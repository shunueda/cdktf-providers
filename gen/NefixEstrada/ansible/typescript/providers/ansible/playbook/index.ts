// https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlaybookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to ansible-playbook executable (binary).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#ansible_playbook_binary Playbook#ansible_playbook_binary}
  */
  readonly ansiblePlaybookBinary?: string;
  /**
  * If 'true', playbook execution won't make any changes but only change predictions will be made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#check_mode Playbook#check_mode}
  */
  readonly checkMode?: boolean | cdktf.IResolvable;
  /**
  * If 'true', when changing (small) files and templates, differences in those files will be shown. Recommended usage with 'check_mode'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#diff_mode Playbook#diff_mode}
  */
  readonly diffMode?: boolean | cdktf.IResolvable;
  /**
  * List of extra inventory files that the playbook will include, hint: use together with `ansible_host.inventory_path`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#extra_inventory_files Playbook#extra_inventory_files}
  */
  readonly extraInventoryFiles?: string[];
  /**
  * A JSON dict of additional variables as: { key-1 = value-1, key-2 = value-2, ... }. Hint: use jsonencode()
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#extra_vars Playbook#extra_vars}
  */
  readonly extraVars?: string;
  /**
  * If 'true', run handlers even if a task fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#force_handlers Playbook#force_handlers}
  */
  readonly forceHandlers?: boolean | cdktf.IResolvable;
  /**
  * List of desired groups of hosts on which the playbook will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#groups Playbook#groups}
  */
  readonly groups?: string[];
  /**
  * This parameter is good for testing. Set to 'true' if the desired playbook is meant to fail, but still want the resource to run successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#ignore_playbook_failure Playbook#ignore_playbook_failure}
  */
  readonly ignorePlaybookFailure?: boolean | cdktf.IResolvable;
  /**
  * List of hosts to exclude from the playbook execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#limit Playbook#limit}
  */
  readonly limit?: string[];
  /**
  * Name of the desired host on which the playbook will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#name Playbook#name}
  */
  readonly name?: string;
  /**
  * Even if the destroy playbook fails, the resource destruction will be successful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#on_destroy_failure_continue Playbook#on_destroy_failure_continue}
  */
  readonly onDestroyFailureContinue?: boolean | cdktf.IResolvable;
  /**
  * Path to ansible playbook that will be executed when the resource is destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#on_destroy_playbook Playbook#on_destroy_playbook}
  */
  readonly onDestroyPlaybook?: string;
  /**
  * Timeout of the destroy playbook execution. After this time, it will kill the process. In seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#on_destroy_timeout Playbook#on_destroy_timeout}
  */
  readonly onDestroyTimeout?: number;
  /**
  * Path to ansible playbook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#playbook Playbook#playbook}
  */
  readonly playbook: string;
  /**
  * If 'true', the playbook will be executed on every 'terraform apply' and with that, the resource will be recreated. If 'false', the playbook will be executed only on the first 'terraform apply'. Note, that if set to 'true', when doing 'terraform destroy', it might not show in the destroy output, even though the resource still gets destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#replayable Playbook#replayable}
  */
  readonly replayable?: boolean | cdktf.IResolvable;
  /**
  * List of directories where Ansible will search for roles. This removes the defaults, hint: use together with `ansible_galaxy.path`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#roles_directories Playbook#roles_directories}
  */
  readonly rolesDirectories?: string[];
  /**
  * List of tags of plays and tasks to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#tags Playbook#tags}
  */
  readonly tags?: string[];
  /**
  * Timeout of the playbook execution. After this time, it will kill the process. In seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#timeout Playbook#timeout}
  */
  readonly timeout?: number;
  /**
  * List of variable files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#var_files Playbook#var_files}
  */
  readonly varFiles?: string[];
  /**
  * List of vault files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#vault_files Playbook#vault_files}
  */
  readonly vaultFiles?: string[];
  /**
  * ID of the desired vault(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#vault_id Playbook#vault_id}
  */
  readonly vaultId?: string;
  /**
  * Path to a vault password file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#vault_password_file Playbook#vault_password_file}
  */
  readonly vaultPasswordFile?: string;
  /**
  * A verbosity level between 0 and 6. Set ansible 'verbose' parameter, which causes Ansible to print more debug messages. The higher the 'verbosity', the more debug details will be printed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#verbosity Playbook#verbosity}
  */
  readonly verbosity?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook ansible_playbook}
*/
export class Playbook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ansible_playbook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Playbook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Playbook to import
  * @param importFromId The id of the existing Playbook that should be imported. Refer to the {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Playbook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansible_playbook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/playbook ansible_playbook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlaybookConfig
  */
  public constructor(scope: Construct, id: string, config: PlaybookConfig) {
    super(scope, id, {
      terraformResourceType: 'ansible_playbook',
      terraformGeneratorMetadata: {
        providerName: 'ansible',
        providerVersion: '2.0.4',
        providerVersionConstraint: '2.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ansiblePlaybookBinary = config.ansiblePlaybookBinary;
    this._checkMode = config.checkMode;
    this._diffMode = config.diffMode;
    this._extraInventoryFiles = config.extraInventoryFiles;
    this._extraVars = config.extraVars;
    this._forceHandlers = config.forceHandlers;
    this._groups = config.groups;
    this._ignorePlaybookFailure = config.ignorePlaybookFailure;
    this._limit = config.limit;
    this._name = config.name;
    this._onDestroyFailureContinue = config.onDestroyFailureContinue;
    this._onDestroyPlaybook = config.onDestroyPlaybook;
    this._onDestroyTimeout = config.onDestroyTimeout;
    this._playbook = config.playbook;
    this._replayable = config.replayable;
    this._rolesDirectories = config.rolesDirectories;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._varFiles = config.varFiles;
    this._vaultFiles = config.vaultFiles;
    this._vaultId = config.vaultId;
    this._vaultPasswordFile = config.vaultPasswordFile;
    this._verbosity = config.verbosity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ansible_playbook_binary - computed: true, optional: true, required: false
  private _ansiblePlaybookBinary?: string; 
  public get ansiblePlaybookBinary() {
    return this.getStringAttribute('ansible_playbook_binary');
  }
  public set ansiblePlaybookBinary(value: string) {
    this._ansiblePlaybookBinary = value;
  }
  public resetAnsiblePlaybookBinary() {
    this._ansiblePlaybookBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ansiblePlaybookBinaryInput() {
    return this._ansiblePlaybookBinary;
  }

  // ansible_playbook_err - computed: true, optional: false, required: false
  public get ansiblePlaybookErr() {
    return this.getStringAttribute('ansible_playbook_err');
  }

  // ansible_playbook_output - computed: true, optional: false, required: false
  public get ansiblePlaybookOutput() {
    return this.getStringAttribute('ansible_playbook_output');
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // check_mode - computed: false, optional: true, required: false
  private _checkMode?: boolean | cdktf.IResolvable; 
  public get checkMode() {
    return this.getBooleanAttribute('check_mode');
  }
  public set checkMode(value: boolean | cdktf.IResolvable) {
    this._checkMode = value;
  }
  public resetCheckMode() {
    this._checkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkModeInput() {
    return this._checkMode;
  }

  // diff_mode - computed: false, optional: true, required: false
  private _diffMode?: boolean | cdktf.IResolvable; 
  public get diffMode() {
    return this.getBooleanAttribute('diff_mode');
  }
  public set diffMode(value: boolean | cdktf.IResolvable) {
    this._diffMode = value;
  }
  public resetDiffMode() {
    this._diffMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffModeInput() {
    return this._diffMode;
  }

  // extra_inventory_files - computed: false, optional: true, required: false
  private _extraInventoryFiles?: string[]; 
  public get extraInventoryFiles() {
    return this.getListAttribute('extra_inventory_files');
  }
  public set extraInventoryFiles(value: string[]) {
    this._extraInventoryFiles = value;
  }
  public resetExtraInventoryFiles() {
    this._extraInventoryFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInventoryFilesInput() {
    return this._extraInventoryFiles;
  }

  // extra_vars - computed: false, optional: true, required: false
  private _extraVars?: string; 
  public get extraVars() {
    return this.getStringAttribute('extra_vars');
  }
  public set extraVars(value: string) {
    this._extraVars = value;
  }
  public resetExtraVars() {
    this._extraVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVarsInput() {
    return this._extraVars;
  }

  // force_handlers - computed: false, optional: true, required: false
  private _forceHandlers?: boolean | cdktf.IResolvable; 
  public get forceHandlers() {
    return this.getBooleanAttribute('force_handlers');
  }
  public set forceHandlers(value: boolean | cdktf.IResolvable) {
    this._forceHandlers = value;
  }
  public resetForceHandlers() {
    this._forceHandlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceHandlersInput() {
    return this._forceHandlers;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // ignore_playbook_failure - computed: false, optional: true, required: false
  private _ignorePlaybookFailure?: boolean | cdktf.IResolvable; 
  public get ignorePlaybookFailure() {
    return this.getBooleanAttribute('ignore_playbook_failure');
  }
  public set ignorePlaybookFailure(value: boolean | cdktf.IResolvable) {
    this._ignorePlaybookFailure = value;
  }
  public resetIgnorePlaybookFailure() {
    this._ignorePlaybookFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePlaybookFailureInput() {
    return this._ignorePlaybookFailure;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string[]; 
  public get limit() {
    return this.getListAttribute('limit');
  }
  public set limit(value: string[]) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // on_destroy_failure_continue - computed: false, optional: true, required: false
  private _onDestroyFailureContinue?: boolean | cdktf.IResolvable; 
  public get onDestroyFailureContinue() {
    return this.getBooleanAttribute('on_destroy_failure_continue');
  }
  public set onDestroyFailureContinue(value: boolean | cdktf.IResolvable) {
    this._onDestroyFailureContinue = value;
  }
  public resetOnDestroyFailureContinue() {
    this._onDestroyFailureContinue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDestroyFailureContinueInput() {
    return this._onDestroyFailureContinue;
  }

  // on_destroy_playbook - computed: false, optional: true, required: false
  private _onDestroyPlaybook?: string; 
  public get onDestroyPlaybook() {
    return this.getStringAttribute('on_destroy_playbook');
  }
  public set onDestroyPlaybook(value: string) {
    this._onDestroyPlaybook = value;
  }
  public resetOnDestroyPlaybook() {
    this._onDestroyPlaybook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDestroyPlaybookInput() {
    return this._onDestroyPlaybook;
  }

  // on_destroy_timeout - computed: false, optional: true, required: false
  private _onDestroyTimeout?: number; 
  public get onDestroyTimeout() {
    return this.getNumberAttribute('on_destroy_timeout');
  }
  public set onDestroyTimeout(value: number) {
    this._onDestroyTimeout = value;
  }
  public resetOnDestroyTimeout() {
    this._onDestroyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDestroyTimeoutInput() {
    return this._onDestroyTimeout;
  }

  // playbook - computed: false, optional: false, required: true
  private _playbook?: string; 
  public get playbook() {
    return this.getStringAttribute('playbook');
  }
  public set playbook(value: string) {
    this._playbook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get playbookInput() {
    return this._playbook;
  }

  // playbook_sha256_sum - computed: true, optional: false, required: false
  public get playbookSha256Sum() {
    return this.getStringAttribute('playbook_sha256_sum');
  }

  // replayable - computed: true, optional: true, required: false
  private _replayable?: boolean | cdktf.IResolvable; 
  public get replayable() {
    return this.getBooleanAttribute('replayable');
  }
  public set replayable(value: boolean | cdktf.IResolvable) {
    this._replayable = value;
  }
  public resetReplayable() {
    this._replayable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayableInput() {
    return this._replayable;
  }

  // roles_directories - computed: false, optional: true, required: false
  private _rolesDirectories?: string[]; 
  public get rolesDirectories() {
    return this.getListAttribute('roles_directories');
  }
  public set rolesDirectories(value: string[]) {
    this._rolesDirectories = value;
  }
  public resetRolesDirectories() {
    this._rolesDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesDirectoriesInput() {
    return this._rolesDirectories;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // var_files - computed: false, optional: true, required: false
  private _varFiles?: string[]; 
  public get varFiles() {
    return this.getListAttribute('var_files');
  }
  public set varFiles(value: string[]) {
    this._varFiles = value;
  }
  public resetVarFiles() {
    this._varFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varFilesInput() {
    return this._varFiles;
  }

  // vault_files - computed: false, optional: true, required: false
  private _vaultFiles?: string[]; 
  public get vaultFiles() {
    return this.getListAttribute('vault_files');
  }
  public set vaultFiles(value: string[]) {
    this._vaultFiles = value;
  }
  public resetVaultFiles() {
    this._vaultFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultFilesInput() {
    return this._vaultFiles;
  }

  // vault_id - computed: false, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // vault_password_file - computed: false, optional: true, required: false
  private _vaultPasswordFile?: string; 
  public get vaultPasswordFile() {
    return this.getStringAttribute('vault_password_file');
  }
  public set vaultPasswordFile(value: string) {
    this._vaultPasswordFile = value;
  }
  public resetVaultPasswordFile() {
    this._vaultPasswordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultPasswordFileInput() {
    return this._vaultPasswordFile;
  }

  // verbosity - computed: true, optional: true, required: false
  private _verbosity?: number; 
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
  public set verbosity(value: number) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ansible_playbook_binary: cdktf.stringToTerraform(this._ansiblePlaybookBinary),
      check_mode: cdktf.booleanToTerraform(this._checkMode),
      diff_mode: cdktf.booleanToTerraform(this._diffMode),
      extra_inventory_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraInventoryFiles),
      extra_vars: cdktf.stringToTerraform(this._extraVars),
      force_handlers: cdktf.booleanToTerraform(this._forceHandlers),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      ignore_playbook_failure: cdktf.booleanToTerraform(this._ignorePlaybookFailure),
      limit: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limit),
      name: cdktf.stringToTerraform(this._name),
      on_destroy_failure_continue: cdktf.booleanToTerraform(this._onDestroyFailureContinue),
      on_destroy_playbook: cdktf.stringToTerraform(this._onDestroyPlaybook),
      on_destroy_timeout: cdktf.numberToTerraform(this._onDestroyTimeout),
      playbook: cdktf.stringToTerraform(this._playbook),
      replayable: cdktf.booleanToTerraform(this._replayable),
      roles_directories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rolesDirectories),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      var_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._varFiles),
      vault_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vaultFiles),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      vault_password_file: cdktf.stringToTerraform(this._vaultPasswordFile),
      verbosity: cdktf.numberToTerraform(this._verbosity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ansible_playbook_binary: {
        value: cdktf.stringToHclTerraform(this._ansiblePlaybookBinary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_mode: {
        value: cdktf.booleanToHclTerraform(this._checkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      diff_mode: {
        value: cdktf.booleanToHclTerraform(this._diffMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_inventory_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraInventoryFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extra_vars: {
        value: cdktf.stringToHclTerraform(this._extraVars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_handlers: {
        value: cdktf.booleanToHclTerraform(this._forceHandlers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ignore_playbook_failure: {
        value: cdktf.booleanToHclTerraform(this._ignorePlaybookFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._limit),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_destroy_failure_continue: {
        value: cdktf.booleanToHclTerraform(this._onDestroyFailureContinue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_destroy_playbook: {
        value: cdktf.stringToHclTerraform(this._onDestroyPlaybook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_destroy_timeout: {
        value: cdktf.numberToHclTerraform(this._onDestroyTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      playbook: {
        value: cdktf.stringToHclTerraform(this._playbook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replayable: {
        value: cdktf.booleanToHclTerraform(this._replayable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      roles_directories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rolesDirectories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      var_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._varFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vault_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vaultFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_password_file: {
        value: cdktf.stringToHclTerraform(this._vaultPasswordFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verbosity: {
        value: cdktf.numberToHclTerraform(this._verbosity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
