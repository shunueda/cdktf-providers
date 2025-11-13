// https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UnixConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Property for ACCOUNT_ENTITLEMENT_MAPPING_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#account_entitlement_mapping_command UnixConnectionResource#account_entitlement_mapping_command}
  */
  readonly accountEntitlementMappingCommand?: string;
  /**
  * Property for ACCOUNTS_FILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#accounts_file UnixConnectionResource#accounts_file}
  */
  readonly accountsFile?: string;
  /**
  * Property for ADD_ACCESS_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#add_access_command UnixConnectionResource#add_access_command}
  */
  readonly addAccessCommand?: string;
  /**
  * Property for ADD_GROUP_OWNER_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#add_group_owner_command UnixConnectionResource#add_group_owner_command}
  */
  readonly addGroupOwnerCommand?: string;
  /**
  * Property for ADD_PRIMARY_GROUP_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#add_primary_group_command UnixConnectionResource#add_primary_group_command}
  */
  readonly addPrimaryGroupCommand?: string;
  /**
  * Property for CHANGE_PASSWRD_JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#change_password_json UnixConnectionResource#change_password_json}
  */
  readonly changePasswordJson?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#connection_name UnixConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * Property for CREATE_GROUP_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#create_group_command UnixConnectionResource#create_group_command}
  */
  readonly createGroupCommand?: string;
  /**
  * Property for CUSTOM_CONFIG_JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#custom_config_json UnixConnectionResource#custom_config_json}
  */
  readonly customConfigJson?: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#defaultsavroles UnixConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * Property for DELETE_GROUP_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#delete_group_command UnixConnectionResource#delete_group_command}
  */
  readonly deleteGroupCommand?: string;
  /**
  * Property for DEPROVISION_ACCOUNT_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#deprovision_account_command UnixConnectionResource#deprovision_account_command}
  */
  readonly deprovisionAccountCommand?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#description UnixConnectionResource#description}
  */
  readonly description?: string;
  /**
  * Property for DISABLE_ACCOUNT_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#disable_account_command UnixConnectionResource#disable_account_command}
  */
  readonly disableAccountCommand?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#email_template UnixConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * Property for ENABLE_ACCOUNT_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#enable_account_command UnixConnectionResource#enable_account_command}
  */
  readonly enableAccountCommand?: string;
  /**
  * Property for FIREFIGHTERID_GRANT_ACCESS_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#fire_fighter_id_grant_access_command UnixConnectionResource#fire_fighter_id_grant_access_command}
  */
  readonly fireFighterIdGrantAccessCommand?: string;
  /**
  * Property for FIREFIGHTERID_REVOKE_ACCESS_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#fire_fighter_id_revoke_access_command UnixConnectionResource#fire_fighter_id_revoke_access_command}
  */
  readonly fireFighterIdRevokeAccessCommand?: string;
  /**
  * Property for GROUPS_FILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#groups_file UnixConnectionResource#groups_file}
  */
  readonly groupsFile?: string;
  /**
  * Property for HOST_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#host_name UnixConnectionResource#host_name}
  */
  readonly hostName: string;
  /**
  * Property for INACTIVE_LOCK_ACCOUNT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#inactive_lock_account UnixConnectionResource#inactive_lock_account}
  */
  readonly inactiveLockAccount?: string;
  /**
  * Property for LOCK_ACCOUNT_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#lock_account_command UnixConnectionResource#lock_account_command}
  */
  readonly lockAccountCommand?: string;
  /**
  * Property for PassThroughConnectionDetails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#pass_through_connection_details UnixConnectionResource#pass_through_connection_details}
  */
  readonly passThroughConnectionDetails?: string;
  /**
  * Property for PASSPHRASE. Either this or passphrase_wo need to be set to configure the passphrase attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#passphrase UnixConnectionResource#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Passphrase write-only attribute. Either this or passphrase need to be set to configure the passphrase attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#passphrase_wo UnixConnectionResource#passphrase_wo}
  */
  readonly passphraseWo?: string;
  /**
  * Property for PASSWORD. Either this or password_wo need to be set to configure the password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#password UnixConnectionResource#password}
  */
  readonly password?: string;
  /**
  * Password write-only attribute. Either this or password need to be set to configure the password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#password_wo UnixConnectionResource#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Property for PEM_KEY_FILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#pem_key_file UnixConnectionResource#pem_key_file}
  */
  readonly pemKeyFile?: string;
  /**
  * Property for PORT_NUMBER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#port_number UnixConnectionResource#port_number}
  */
  readonly portNumber: string;
  /**
  * Property for PROVISION_ACCOUNT_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#provision_account_command UnixConnectionResource#provision_account_command}
  */
  readonly provisionAccountCommand?: string;
  /**
  * Property for REMOVE_ACCESS_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#remove_access_command UnixConnectionResource#remove_access_command}
  */
  readonly removeAccessCommand?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#save_in_vault UnixConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * Server type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#server_type UnixConnectionResource#server_type}
  */
  readonly serverType?: string;
  /**
  * Property for SHADOW_FILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#shadow_file UnixConnectionResource#shadow_file}
  */
  readonly shadowFile?: string;
  /**
  * Property for SSH_KEY. Either this or ssh_key_wo need to be set to configure the ssh_key attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#ssh_key UnixConnectionResource#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * SSH key write-only attribute. Either this or ssh_key need to be set to configure the ssh_key attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#ssh_key_wo UnixConnectionResource#ssh_key_wo}
  */
  readonly sshKeyWo?: string;
  /**
  * Property for SSHPassThroughPassphrase. Either this or ssh_pass_through_passphrase_wo need to be set to configure the ssh_pass_through_passphrase attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#ssh_pass_through_passphrase UnixConnectionResource#ssh_pass_through_passphrase}
  */
  readonly sshPassThroughPassphrase?: string;
  /**
  * SSH pass-through passphrase write-only attribute. Either this or ssh_pass_through_passphrase need to be set to configure the ssh_pass_through_passphrase attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#ssh_pass_through_passphrase_wo UnixConnectionResource#ssh_pass_through_passphrase_wo}
  */
  readonly sshPassThroughPassphraseWo?: string;
  /**
  * Property for SSHPassThroughPassword. Either this or ssh_pass_through_password_wo need to be set to configure the ssh_pass_through_password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#ssh_pass_through_password UnixConnectionResource#ssh_pass_through_password}
  */
  readonly sshPassThroughPassword?: string;
  /**
  * SSH pass-through password write-only attribute. Either this or ssh_pass_through_password need to be set to configure the ssh_pass_through_password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#ssh_pass_through_password_wo UnixConnectionResource#ssh_pass_through_password_wo}
  */
  readonly sshPassThroughPasswordWo?: string;
  /**
  * Property for SSHPassThroughSSHKEY. Either this or ssh_pass_through_sshkey_wo need to be set to configure the ssh_pass_through_sshkey attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#ssh_pass_through_sshkey UnixConnectionResource#ssh_pass_through_sshkey}
  */
  readonly sshPassThroughSshkey?: string;
  /**
  * Property for SSHPassThroughSSHKEY. Either this or ssh_pass_through_sshkey need to be set to configure the ssh_pass_through_sshkey attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#ssh_pass_through_sshkey_wo UnixConnectionResource#ssh_pass_through_sshkey_wo}
  */
  readonly sshPassThroughSshkeyWo?: string;
  /**
  * Property for STATUS_THRESHOLD_CONFIG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#status_threshold_config UnixConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  * Property for UNLOCK_ACCOUNT_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#unlock_account_command UnixConnectionResource#unlock_account_command}
  */
  readonly unlockAccountCommand?: string;
  /**
  * Property for UPDATE_ACCOUNT_COMMAND
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#update_account_command UnixConnectionResource#update_account_command}
  */
  readonly updateAccountCommand?: string;
  /**
  * Property for USERNAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#username UnixConnectionResource#username}
  */
  readonly username: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#vault_configuration UnixConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#vault_connection UnixConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#wo_version UnixConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource saviynt_unix_connection_resource}
*/
export class UnixConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_unix_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UnixConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UnixConnectionResource to import
  * @param importFromId The id of the existing UnixConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UnixConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_unix_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/unix_connection_resource saviynt_unix_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UnixConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: UnixConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_unix_connection_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountEntitlementMappingCommand = config.accountEntitlementMappingCommand;
    this._accountsFile = config.accountsFile;
    this._addAccessCommand = config.addAccessCommand;
    this._addGroupOwnerCommand = config.addGroupOwnerCommand;
    this._addPrimaryGroupCommand = config.addPrimaryGroupCommand;
    this._changePasswordJson = config.changePasswordJson;
    this._connectionName = config.connectionName;
    this._createGroupCommand = config.createGroupCommand;
    this._customConfigJson = config.customConfigJson;
    this._defaultsavroles = config.defaultsavroles;
    this._deleteGroupCommand = config.deleteGroupCommand;
    this._deprovisionAccountCommand = config.deprovisionAccountCommand;
    this._description = config.description;
    this._disableAccountCommand = config.disableAccountCommand;
    this._emailTemplate = config.emailTemplate;
    this._enableAccountCommand = config.enableAccountCommand;
    this._fireFighterIdGrantAccessCommand = config.fireFighterIdGrantAccessCommand;
    this._fireFighterIdRevokeAccessCommand = config.fireFighterIdRevokeAccessCommand;
    this._groupsFile = config.groupsFile;
    this._hostName = config.hostName;
    this._inactiveLockAccount = config.inactiveLockAccount;
    this._lockAccountCommand = config.lockAccountCommand;
    this._passThroughConnectionDetails = config.passThroughConnectionDetails;
    this._passphrase = config.passphrase;
    this._passphraseWo = config.passphraseWo;
    this._password = config.password;
    this._passwordWo = config.passwordWo;
    this._pemKeyFile = config.pemKeyFile;
    this._portNumber = config.portNumber;
    this._provisionAccountCommand = config.provisionAccountCommand;
    this._removeAccessCommand = config.removeAccessCommand;
    this._saveInVault = config.saveInVault;
    this._serverType = config.serverType;
    this._shadowFile = config.shadowFile;
    this._sshKey = config.sshKey;
    this._sshKeyWo = config.sshKeyWo;
    this._sshPassThroughPassphrase = config.sshPassThroughPassphrase;
    this._sshPassThroughPassphraseWo = config.sshPassThroughPassphraseWo;
    this._sshPassThroughPassword = config.sshPassThroughPassword;
    this._sshPassThroughPasswordWo = config.sshPassThroughPasswordWo;
    this._sshPassThroughSshkey = config.sshPassThroughSshkey;
    this._sshPassThroughSshkeyWo = config.sshPassThroughSshkeyWo;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._unlockAccountCommand = config.unlockAccountCommand;
    this._updateAccountCommand = config.updateAccountCommand;
    this._username = config.username;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_entitlement_mapping_command - computed: true, optional: true, required: false
  private _accountEntitlementMappingCommand?: string; 
  public get accountEntitlementMappingCommand() {
    return this.getStringAttribute('account_entitlement_mapping_command');
  }
  public set accountEntitlementMappingCommand(value: string) {
    this._accountEntitlementMappingCommand = value;
  }
  public resetAccountEntitlementMappingCommand() {
    this._accountEntitlementMappingCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountEntitlementMappingCommandInput() {
    return this._accountEntitlementMappingCommand;
  }

  // accounts_file - computed: true, optional: true, required: false
  private _accountsFile?: string; 
  public get accountsFile() {
    return this.getStringAttribute('accounts_file');
  }
  public set accountsFile(value: string) {
    this._accountsFile = value;
  }
  public resetAccountsFile() {
    this._accountsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsFileInput() {
    return this._accountsFile;
  }

  // add_access_command - computed: true, optional: true, required: false
  private _addAccessCommand?: string; 
  public get addAccessCommand() {
    return this.getStringAttribute('add_access_command');
  }
  public set addAccessCommand(value: string) {
    this._addAccessCommand = value;
  }
  public resetAddAccessCommand() {
    this._addAccessCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAccessCommandInput() {
    return this._addAccessCommand;
  }

  // add_group_owner_command - computed: true, optional: true, required: false
  private _addGroupOwnerCommand?: string; 
  public get addGroupOwnerCommand() {
    return this.getStringAttribute('add_group_owner_command');
  }
  public set addGroupOwnerCommand(value: string) {
    this._addGroupOwnerCommand = value;
  }
  public resetAddGroupOwnerCommand() {
    this._addGroupOwnerCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addGroupOwnerCommandInput() {
    return this._addGroupOwnerCommand;
  }

  // add_primary_group_command - computed: true, optional: true, required: false
  private _addPrimaryGroupCommand?: string; 
  public get addPrimaryGroupCommand() {
    return this.getStringAttribute('add_primary_group_command');
  }
  public set addPrimaryGroupCommand(value: string) {
    this._addPrimaryGroupCommand = value;
  }
  public resetAddPrimaryGroupCommand() {
    this._addPrimaryGroupCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPrimaryGroupCommandInput() {
    return this._addPrimaryGroupCommand;
  }

  // change_password_json - computed: true, optional: true, required: false
  private _changePasswordJson?: string; 
  public get changePasswordJson() {
    return this.getStringAttribute('change_password_json');
  }
  public set changePasswordJson(value: string) {
    this._changePasswordJson = value;
  }
  public resetChangePasswordJson() {
    this._changePasswordJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordJsonInput() {
    return this._changePasswordJson;
  }

  // connection_key - computed: true, optional: false, required: false
  public get connectionKey() {
    return this.getNumberAttribute('connection_key');
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // create_group_command - computed: true, optional: true, required: false
  private _createGroupCommand?: string; 
  public get createGroupCommand() {
    return this.getStringAttribute('create_group_command');
  }
  public set createGroupCommand(value: string) {
    this._createGroupCommand = value;
  }
  public resetCreateGroupCommand() {
    this._createGroupCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createGroupCommandInput() {
    return this._createGroupCommand;
  }

  // custom_config_json - computed: true, optional: true, required: false
  private _customConfigJson?: string; 
  public get customConfigJson() {
    return this.getStringAttribute('custom_config_json');
  }
  public set customConfigJson(value: string) {
    this._customConfigJson = value;
  }
  public resetCustomConfigJson() {
    this._customConfigJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigJsonInput() {
    return this._customConfigJson;
  }

  // defaultsavroles - computed: true, optional: true, required: false
  private _defaultsavroles?: string; 
  public get defaultsavroles() {
    return this.getStringAttribute('defaultsavroles');
  }
  public set defaultsavroles(value: string) {
    this._defaultsavroles = value;
  }
  public resetDefaultsavroles() {
    this._defaultsavroles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsavrolesInput() {
    return this._defaultsavroles;
  }

  // delete_group_command - computed: true, optional: true, required: false
  private _deleteGroupCommand?: string; 
  public get deleteGroupCommand() {
    return this.getStringAttribute('delete_group_command');
  }
  public set deleteGroupCommand(value: string) {
    this._deleteGroupCommand = value;
  }
  public resetDeleteGroupCommand() {
    this._deleteGroupCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteGroupCommandInput() {
    return this._deleteGroupCommand;
  }

  // deprovision_account_command - computed: true, optional: true, required: false
  private _deprovisionAccountCommand?: string; 
  public get deprovisionAccountCommand() {
    return this.getStringAttribute('deprovision_account_command');
  }
  public set deprovisionAccountCommand(value: string) {
    this._deprovisionAccountCommand = value;
  }
  public resetDeprovisionAccountCommand() {
    this._deprovisionAccountCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprovisionAccountCommandInput() {
    return this._deprovisionAccountCommand;
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

  // disable_account_command - computed: true, optional: true, required: false
  private _disableAccountCommand?: string; 
  public get disableAccountCommand() {
    return this.getStringAttribute('disable_account_command');
  }
  public set disableAccountCommand(value: string) {
    this._disableAccountCommand = value;
  }
  public resetDisableAccountCommand() {
    this._disableAccountCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAccountCommandInput() {
    return this._disableAccountCommand;
  }

  // email_template - computed: true, optional: true, required: false
  private _emailTemplate?: string; 
  public get emailTemplate() {
    return this.getStringAttribute('email_template');
  }
  public set emailTemplate(value: string) {
    this._emailTemplate = value;
  }
  public resetEmailTemplate() {
    this._emailTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateInput() {
    return this._emailTemplate;
  }

  // enable_account_command - computed: true, optional: true, required: false
  private _enableAccountCommand?: string; 
  public get enableAccountCommand() {
    return this.getStringAttribute('enable_account_command');
  }
  public set enableAccountCommand(value: string) {
    this._enableAccountCommand = value;
  }
  public resetEnableAccountCommand() {
    this._enableAccountCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccountCommandInput() {
    return this._enableAccountCommand;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // fire_fighter_id_grant_access_command - computed: true, optional: true, required: false
  private _fireFighterIdGrantAccessCommand?: string; 
  public get fireFighterIdGrantAccessCommand() {
    return this.getStringAttribute('fire_fighter_id_grant_access_command');
  }
  public set fireFighterIdGrantAccessCommand(value: string) {
    this._fireFighterIdGrantAccessCommand = value;
  }
  public resetFireFighterIdGrantAccessCommand() {
    this._fireFighterIdGrantAccessCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireFighterIdGrantAccessCommandInput() {
    return this._fireFighterIdGrantAccessCommand;
  }

  // fire_fighter_id_revoke_access_command - computed: true, optional: true, required: false
  private _fireFighterIdRevokeAccessCommand?: string; 
  public get fireFighterIdRevokeAccessCommand() {
    return this.getStringAttribute('fire_fighter_id_revoke_access_command');
  }
  public set fireFighterIdRevokeAccessCommand(value: string) {
    this._fireFighterIdRevokeAccessCommand = value;
  }
  public resetFireFighterIdRevokeAccessCommand() {
    this._fireFighterIdRevokeAccessCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireFighterIdRevokeAccessCommandInput() {
    return this._fireFighterIdRevokeAccessCommand;
  }

  // groups_file - computed: true, optional: true, required: false
  private _groupsFile?: string; 
  public get groupsFile() {
    return this.getStringAttribute('groups_file');
  }
  public set groupsFile(value: string) {
    this._groupsFile = value;
  }
  public resetGroupsFile() {
    this._groupsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsFileInput() {
    return this._groupsFile;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_lock_account - computed: true, optional: true, required: false
  private _inactiveLockAccount?: string; 
  public get inactiveLockAccount() {
    return this.getStringAttribute('inactive_lock_account');
  }
  public set inactiveLockAccount(value: string) {
    this._inactiveLockAccount = value;
  }
  public resetInactiveLockAccount() {
    this._inactiveLockAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveLockAccountInput() {
    return this._inactiveLockAccount;
  }

  // lock_account_command - computed: true, optional: true, required: false
  private _lockAccountCommand?: string; 
  public get lockAccountCommand() {
    return this.getStringAttribute('lock_account_command');
  }
  public set lockAccountCommand(value: string) {
    this._lockAccountCommand = value;
  }
  public resetLockAccountCommand() {
    this._lockAccountCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockAccountCommandInput() {
    return this._lockAccountCommand;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // pass_through_connection_details - computed: true, optional: true, required: false
  private _passThroughConnectionDetails?: string; 
  public get passThroughConnectionDetails() {
    return this.getStringAttribute('pass_through_connection_details');
  }
  public set passThroughConnectionDetails(value: string) {
    this._passThroughConnectionDetails = value;
  }
  public resetPassThroughConnectionDetails() {
    this._passThroughConnectionDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughConnectionDetailsInput() {
    return this._passThroughConnectionDetails;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // passphrase_wo - computed: false, optional: true, required: false
  private _passphraseWo?: string; 
  public get passphraseWo() {
    return this.getStringAttribute('passphrase_wo');
  }
  public set passphraseWo(value: string) {
    this._passphraseWo = value;
  }
  public resetPassphraseWo() {
    this._passphraseWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseWoInput() {
    return this._passphraseWo;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // pem_key_file - computed: true, optional: true, required: false
  private _pemKeyFile?: string; 
  public get pemKeyFile() {
    return this.getStringAttribute('pem_key_file');
  }
  public set pemKeyFile(value: string) {
    this._pemKeyFile = value;
  }
  public resetPemKeyFile() {
    this._pemKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemKeyFileInput() {
    return this._pemKeyFile;
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: string; 
  public get portNumber() {
    return this.getStringAttribute('port_number');
  }
  public set portNumber(value: string) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // provision_account_command - computed: true, optional: true, required: false
  private _provisionAccountCommand?: string; 
  public get provisionAccountCommand() {
    return this.getStringAttribute('provision_account_command');
  }
  public set provisionAccountCommand(value: string) {
    this._provisionAccountCommand = value;
  }
  public resetProvisionAccountCommand() {
    this._provisionAccountCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionAccountCommandInput() {
    return this._provisionAccountCommand;
  }

  // remove_access_command - computed: true, optional: true, required: false
  private _removeAccessCommand?: string; 
  public get removeAccessCommand() {
    return this.getStringAttribute('remove_access_command');
  }
  public set removeAccessCommand(value: string) {
    this._removeAccessCommand = value;
  }
  public resetRemoveAccessCommand() {
    this._removeAccessCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAccessCommandInput() {
    return this._removeAccessCommand;
  }

  // save_in_vault - computed: false, optional: true, required: false
  private _saveInVault?: string; 
  public get saveInVault() {
    return this.getStringAttribute('save_in_vault');
  }
  public set saveInVault(value: string) {
    this._saveInVault = value;
  }
  public resetSaveInVault() {
    this._saveInVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInVaultInput() {
    return this._saveInVault;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // shadow_file - computed: true, optional: true, required: false
  private _shadowFile?: string; 
  public get shadowFile() {
    return this.getStringAttribute('shadow_file');
  }
  public set shadowFile(value: string) {
    this._shadowFile = value;
  }
  public resetShadowFile() {
    this._shadowFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowFileInput() {
    return this._shadowFile;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // ssh_key_wo - computed: false, optional: true, required: false
  private _sshKeyWo?: string; 
  public get sshKeyWo() {
    return this.getStringAttribute('ssh_key_wo');
  }
  public set sshKeyWo(value: string) {
    this._sshKeyWo = value;
  }
  public resetSshKeyWo() {
    this._sshKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyWoInput() {
    return this._sshKeyWo;
  }

  // ssh_pass_through_passphrase - computed: false, optional: true, required: false
  private _sshPassThroughPassphrase?: string; 
  public get sshPassThroughPassphrase() {
    return this.getStringAttribute('ssh_pass_through_passphrase');
  }
  public set sshPassThroughPassphrase(value: string) {
    this._sshPassThroughPassphrase = value;
  }
  public resetSshPassThroughPassphrase() {
    this._sshPassThroughPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPassThroughPassphraseInput() {
    return this._sshPassThroughPassphrase;
  }

  // ssh_pass_through_passphrase_wo - computed: false, optional: true, required: false
  private _sshPassThroughPassphraseWo?: string; 
  public get sshPassThroughPassphraseWo() {
    return this.getStringAttribute('ssh_pass_through_passphrase_wo');
  }
  public set sshPassThroughPassphraseWo(value: string) {
    this._sshPassThroughPassphraseWo = value;
  }
  public resetSshPassThroughPassphraseWo() {
    this._sshPassThroughPassphraseWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPassThroughPassphraseWoInput() {
    return this._sshPassThroughPassphraseWo;
  }

  // ssh_pass_through_password - computed: false, optional: true, required: false
  private _sshPassThroughPassword?: string; 
  public get sshPassThroughPassword() {
    return this.getStringAttribute('ssh_pass_through_password');
  }
  public set sshPassThroughPassword(value: string) {
    this._sshPassThroughPassword = value;
  }
  public resetSshPassThroughPassword() {
    this._sshPassThroughPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPassThroughPasswordInput() {
    return this._sshPassThroughPassword;
  }

  // ssh_pass_through_password_wo - computed: false, optional: true, required: false
  private _sshPassThroughPasswordWo?: string; 
  public get sshPassThroughPasswordWo() {
    return this.getStringAttribute('ssh_pass_through_password_wo');
  }
  public set sshPassThroughPasswordWo(value: string) {
    this._sshPassThroughPasswordWo = value;
  }
  public resetSshPassThroughPasswordWo() {
    this._sshPassThroughPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPassThroughPasswordWoInput() {
    return this._sshPassThroughPasswordWo;
  }

  // ssh_pass_through_sshkey - computed: false, optional: true, required: false
  private _sshPassThroughSshkey?: string; 
  public get sshPassThroughSshkey() {
    return this.getStringAttribute('ssh_pass_through_sshkey');
  }
  public set sshPassThroughSshkey(value: string) {
    this._sshPassThroughSshkey = value;
  }
  public resetSshPassThroughSshkey() {
    this._sshPassThroughSshkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPassThroughSshkeyInput() {
    return this._sshPassThroughSshkey;
  }

  // ssh_pass_through_sshkey_wo - computed: false, optional: true, required: false
  private _sshPassThroughSshkeyWo?: string; 
  public get sshPassThroughSshkeyWo() {
    return this.getStringAttribute('ssh_pass_through_sshkey_wo');
  }
  public set sshPassThroughSshkeyWo(value: string) {
    this._sshPassThroughSshkeyWo = value;
  }
  public resetSshPassThroughSshkeyWo() {
    this._sshPassThroughSshkeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPassThroughSshkeyWoInput() {
    return this._sshPassThroughSshkeyWo;
  }

  // status_threshold_config - computed: true, optional: true, required: false
  private _statusThresholdConfig?: string; 
  public get statusThresholdConfig() {
    return this.getStringAttribute('status_threshold_config');
  }
  public set statusThresholdConfig(value: string) {
    this._statusThresholdConfig = value;
  }
  public resetStatusThresholdConfig() {
    this._statusThresholdConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusThresholdConfigInput() {
    return this._statusThresholdConfig;
  }

  // unlock_account_command - computed: true, optional: true, required: false
  private _unlockAccountCommand?: string; 
  public get unlockAccountCommand() {
    return this.getStringAttribute('unlock_account_command');
  }
  public set unlockAccountCommand(value: string) {
    this._unlockAccountCommand = value;
  }
  public resetUnlockAccountCommand() {
    this._unlockAccountCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockAccountCommandInput() {
    return this._unlockAccountCommand;
  }

  // update_account_command - computed: true, optional: true, required: false
  private _updateAccountCommand?: string; 
  public get updateAccountCommand() {
    return this.getStringAttribute('update_account_command');
  }
  public set updateAccountCommand(value: string) {
    this._updateAccountCommand = value;
  }
  public resetUpdateAccountCommand() {
    this._updateAccountCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAccountCommandInput() {
    return this._updateAccountCommand;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vault_configuration - computed: false, optional: true, required: false
  private _vaultConfiguration?: string; 
  public get vaultConfiguration() {
    return this.getStringAttribute('vault_configuration');
  }
  public set vaultConfiguration(value: string) {
    this._vaultConfiguration = value;
  }
  public resetVaultConfiguration() {
    this._vaultConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultConfigurationInput() {
    return this._vaultConfiguration;
  }

  // vault_connection - computed: false, optional: true, required: false
  private _vaultConnection?: string; 
  public get vaultConnection() {
    return this.getStringAttribute('vault_connection');
  }
  public set vaultConnection(value: string) {
    this._vaultConnection = value;
  }
  public resetVaultConnection() {
    this._vaultConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultConnectionInput() {
    return this._vaultConnection;
  }

  // wo_version - computed: false, optional: true, required: false
  private _woVersion?: string; 
  public get woVersion() {
    return this.getStringAttribute('wo_version');
  }
  public set woVersion(value: string) {
    this._woVersion = value;
  }
  public resetWoVersion() {
    this._woVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get woVersionInput() {
    return this._woVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_entitlement_mapping_command: cdktf.stringToTerraform(this._accountEntitlementMappingCommand),
      accounts_file: cdktf.stringToTerraform(this._accountsFile),
      add_access_command: cdktf.stringToTerraform(this._addAccessCommand),
      add_group_owner_command: cdktf.stringToTerraform(this._addGroupOwnerCommand),
      add_primary_group_command: cdktf.stringToTerraform(this._addPrimaryGroupCommand),
      change_password_json: cdktf.stringToTerraform(this._changePasswordJson),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      create_group_command: cdktf.stringToTerraform(this._createGroupCommand),
      custom_config_json: cdktf.stringToTerraform(this._customConfigJson),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      delete_group_command: cdktf.stringToTerraform(this._deleteGroupCommand),
      deprovision_account_command: cdktf.stringToTerraform(this._deprovisionAccountCommand),
      description: cdktf.stringToTerraform(this._description),
      disable_account_command: cdktf.stringToTerraform(this._disableAccountCommand),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      enable_account_command: cdktf.stringToTerraform(this._enableAccountCommand),
      fire_fighter_id_grant_access_command: cdktf.stringToTerraform(this._fireFighterIdGrantAccessCommand),
      fire_fighter_id_revoke_access_command: cdktf.stringToTerraform(this._fireFighterIdRevokeAccessCommand),
      groups_file: cdktf.stringToTerraform(this._groupsFile),
      host_name: cdktf.stringToTerraform(this._hostName),
      inactive_lock_account: cdktf.stringToTerraform(this._inactiveLockAccount),
      lock_account_command: cdktf.stringToTerraform(this._lockAccountCommand),
      pass_through_connection_details: cdktf.stringToTerraform(this._passThroughConnectionDetails),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      passphrase_wo: cdktf.stringToTerraform(this._passphraseWo),
      password: cdktf.stringToTerraform(this._password),
      password_wo: cdktf.stringToTerraform(this._passwordWo),
      pem_key_file: cdktf.stringToTerraform(this._pemKeyFile),
      port_number: cdktf.stringToTerraform(this._portNumber),
      provision_account_command: cdktf.stringToTerraform(this._provisionAccountCommand),
      remove_access_command: cdktf.stringToTerraform(this._removeAccessCommand),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      server_type: cdktf.stringToTerraform(this._serverType),
      shadow_file: cdktf.stringToTerraform(this._shadowFile),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      ssh_key_wo: cdktf.stringToTerraform(this._sshKeyWo),
      ssh_pass_through_passphrase: cdktf.stringToTerraform(this._sshPassThroughPassphrase),
      ssh_pass_through_passphrase_wo: cdktf.stringToTerraform(this._sshPassThroughPassphraseWo),
      ssh_pass_through_password: cdktf.stringToTerraform(this._sshPassThroughPassword),
      ssh_pass_through_password_wo: cdktf.stringToTerraform(this._sshPassThroughPasswordWo),
      ssh_pass_through_sshkey: cdktf.stringToTerraform(this._sshPassThroughSshkey),
      ssh_pass_through_sshkey_wo: cdktf.stringToTerraform(this._sshPassThroughSshkeyWo),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      unlock_account_command: cdktf.stringToTerraform(this._unlockAccountCommand),
      update_account_command: cdktf.stringToTerraform(this._updateAccountCommand),
      username: cdktf.stringToTerraform(this._username),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_entitlement_mapping_command: {
        value: cdktf.stringToHclTerraform(this._accountEntitlementMappingCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounts_file: {
        value: cdktf.stringToHclTerraform(this._accountsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_access_command: {
        value: cdktf.stringToHclTerraform(this._addAccessCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_group_owner_command: {
        value: cdktf.stringToHclTerraform(this._addGroupOwnerCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_primary_group_command: {
        value: cdktf.stringToHclTerraform(this._addPrimaryGroupCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_password_json: {
        value: cdktf.stringToHclTerraform(this._changePasswordJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_group_command: {
        value: cdktf.stringToHclTerraform(this._createGroupCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_config_json: {
        value: cdktf.stringToHclTerraform(this._customConfigJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultsavroles: {
        value: cdktf.stringToHclTerraform(this._defaultsavroles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_group_command: {
        value: cdktf.stringToHclTerraform(this._deleteGroupCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprovision_account_command: {
        value: cdktf.stringToHclTerraform(this._deprovisionAccountCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_account_command: {
        value: cdktf.stringToHclTerraform(this._disableAccountCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_template: {
        value: cdktf.stringToHclTerraform(this._emailTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_account_command: {
        value: cdktf.stringToHclTerraform(this._enableAccountCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fire_fighter_id_grant_access_command: {
        value: cdktf.stringToHclTerraform(this._fireFighterIdGrantAccessCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fire_fighter_id_revoke_access_command: {
        value: cdktf.stringToHclTerraform(this._fireFighterIdRevokeAccessCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_file: {
        value: cdktf.stringToHclTerraform(this._groupsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inactive_lock_account: {
        value: cdktf.stringToHclTerraform(this._inactiveLockAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_account_command: {
        value: cdktf.stringToHclTerraform(this._lockAccountCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pass_through_connection_details: {
        value: cdktf.stringToHclTerraform(this._passThroughConnectionDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase_wo: {
        value: cdktf.stringToHclTerraform(this._passphraseWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_wo: {
        value: cdktf.stringToHclTerraform(this._passwordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pem_key_file: {
        value: cdktf.stringToHclTerraform(this._pemKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_number: {
        value: cdktf.stringToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provision_account_command: {
        value: cdktf.stringToHclTerraform(this._provisionAccountCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_access_command: {
        value: cdktf.stringToHclTerraform(this._removeAccessCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_in_vault: {
        value: cdktf.stringToHclTerraform(this._saveInVault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shadow_file: {
        value: cdktf.stringToHclTerraform(this._shadowFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_wo: {
        value: cdktf.stringToHclTerraform(this._sshKeyWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_pass_through_passphrase: {
        value: cdktf.stringToHclTerraform(this._sshPassThroughPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_pass_through_passphrase_wo: {
        value: cdktf.stringToHclTerraform(this._sshPassThroughPassphraseWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_pass_through_password: {
        value: cdktf.stringToHclTerraform(this._sshPassThroughPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_pass_through_password_wo: {
        value: cdktf.stringToHclTerraform(this._sshPassThroughPasswordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_pass_through_sshkey: {
        value: cdktf.stringToHclTerraform(this._sshPassThroughSshkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_pass_through_sshkey_wo: {
        value: cdktf.stringToHclTerraform(this._sshPassThroughSshkeyWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_threshold_config: {
        value: cdktf.stringToHclTerraform(this._statusThresholdConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unlock_account_command: {
        value: cdktf.stringToHclTerraform(this._unlockAccountCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_account_command: {
        value: cdktf.stringToHclTerraform(this._updateAccountCommand),
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
      vault_configuration: {
        value: cdktf.stringToHclTerraform(this._vaultConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_connection: {
        value: cdktf.stringToHclTerraform(this._vaultConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wo_version: {
        value: cdktf.stringToHclTerraform(this._woVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
