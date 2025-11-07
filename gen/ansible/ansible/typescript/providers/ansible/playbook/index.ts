// https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlaybookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to ansible-playbook executable (binary).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#ansible_playbook_binary Playbook#ansible_playbook_binary}
  */
  readonly ansiblePlaybookBinary?: string;
  /**
  * If 'true', playbook execution won't make any changes but only change predictions will be made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#check_mode Playbook#check_mode}
  */
  readonly checkMode?: boolean | cdktf.IResolvable;
  /**
  * If 'true', when changing (small) files and templates, differences in those files will be shown. Recommended usage with 'check_mode'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#diff_mode Playbook#diff_mode}
  */
  readonly diffMode?: boolean | cdktf.IResolvable;
  /**
  * A map of additional variables as: { key-1 = value-1, key-2 = value-2, ... }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#extra_vars Playbook#extra_vars}
  */
  readonly extraVars?: { [key: string]: string };
  /**
  * If 'true', run handlers even if a task fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#force_handlers Playbook#force_handlers}
  */
  readonly forceHandlers?: boolean | cdktf.IResolvable;
  /**
  * List of desired groups of hosts on which the playbook will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#groups Playbook#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#id Playbook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This parameter is good for testing. Set to 'true' if the desired playbook is meant to fail, but still want the resource to run successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#ignore_playbook_failure Playbook#ignore_playbook_failure}
  */
  readonly ignorePlaybookFailure?: boolean | cdktf.IResolvable;
  /**
  * List of hosts to include in playbook execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#limit Playbook#limit}
  */
  readonly limit?: string[];
  /**
  * Name of the desired host on which the playbook will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#name Playbook#name}
  */
  readonly name: string;
  /**
  * Path to ansible playbook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#playbook Playbook#playbook}
  */
  readonly playbook: string;
  /**
  * If 'true', the playbook will be executed on every 'terraform apply' and with that, the resource will be recreated. If 'false', the playbook will be executed only on the first 'terraform apply'. Note, that if set to 'true', when doing 'terraform destroy', it might not show in the destroy output, even though the resource still gets destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#replayable Playbook#replayable}
  */
  readonly replayable?: boolean | cdktf.IResolvable;
  /**
  * List of tags of plays and tasks to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#tags Playbook#tags}
  */
  readonly tags?: string[];
  /**
  * List of variable files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#var_files Playbook#var_files}
  */
  readonly varFiles?: string[];
  /**
  * List of vault files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#vault_files Playbook#vault_files}
  */
  readonly vaultFiles?: string[];
  /**
  * ID of the desired vault(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#vault_id Playbook#vault_id}
  */
  readonly vaultId?: string;
  /**
  * Path to a vault password file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#vault_password_file Playbook#vault_password_file}
  */
  readonly vaultPasswordFile?: string;
  /**
  * A verbosity level between 0 and 6. Set ansible 'verbose' parameter, which causes Ansible to print more debug messages. The higher the 'verbosity', the more debug details will be printed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#verbosity Playbook#verbosity}
  */
  readonly verbosity?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#timeouts Playbook#timeouts}
  */
  readonly timeouts?: PlaybookTimeouts;
}
export interface PlaybookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#create Playbook#create}
  */
  readonly create?: string;
}

export function playbookTimeoutsToTerraform(struct?: PlaybookTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function playbookTimeoutsToHclTerraform(struct?: PlaybookTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaybookTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlaybookTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaybookTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook ansible_playbook}
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
  * @param importFromId The id of the existing Playbook that should be imported. Refer to the {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Playbook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansible_playbook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/playbook ansible_playbook} Resource
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
        providerVersion: '1.3.0'
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
    this._extraVars = config.extraVars;
    this._forceHandlers = config.forceHandlers;
    this._groups = config.groups;
    this._id = config.id;
    this._ignorePlaybookFailure = config.ignorePlaybookFailure;
    this._limit = config.limit;
    this._name = config.name;
    this._playbook = config.playbook;
    this._replayable = config.replayable;
    this._tags = config.tags;
    this._varFiles = config.varFiles;
    this._vaultFiles = config.vaultFiles;
    this._vaultId = config.vaultId;
    this._vaultPasswordFile = config.vaultPasswordFile;
    this._verbosity = config.verbosity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ansible_playbook_binary - computed: false, optional: true, required: false
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

  // ansible_playbook_stderr - computed: true, optional: false, required: false
  public get ansiblePlaybookStderr() {
    return this.getStringAttribute('ansible_playbook_stderr');
  }

  // ansible_playbook_stdout - computed: true, optional: false, required: false
  public get ansiblePlaybookStdout() {
    return this.getStringAttribute('ansible_playbook_stdout');
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

  // extra_vars - computed: false, optional: true, required: false
  private _extraVars?: { [key: string]: string }; 
  public get extraVars() {
    return this.getStringMapAttribute('extra_vars');
  }
  public set extraVars(value: { [key: string]: string }) {
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // replayable - computed: false, optional: true, required: false
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

  // temp_inventory_file - computed: true, optional: false, required: false
  public get tempInventoryFile() {
    return this.getStringAttribute('temp_inventory_file');
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

  // verbosity - computed: false, optional: true, required: false
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PlaybookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PlaybookTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ansible_playbook_binary: cdktf.stringToTerraform(this._ansiblePlaybookBinary),
      check_mode: cdktf.booleanToTerraform(this._checkMode),
      diff_mode: cdktf.booleanToTerraform(this._diffMode),
      extra_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraVars),
      force_handlers: cdktf.booleanToTerraform(this._forceHandlers),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      ignore_playbook_failure: cdktf.booleanToTerraform(this._ignorePlaybookFailure),
      limit: cdktf.listMapper(cdktf.stringToTerraform, false)(this._limit),
      name: cdktf.stringToTerraform(this._name),
      playbook: cdktf.stringToTerraform(this._playbook),
      replayable: cdktf.booleanToTerraform(this._replayable),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      var_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._varFiles),
      vault_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vaultFiles),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      vault_password_file: cdktf.stringToTerraform(this._vaultPasswordFile),
      verbosity: cdktf.numberToTerraform(this._verbosity),
      timeouts: playbookTimeoutsToTerraform(this._timeouts.internalValue),
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
      extra_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      timeouts: {
        value: playbookTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlaybookTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
