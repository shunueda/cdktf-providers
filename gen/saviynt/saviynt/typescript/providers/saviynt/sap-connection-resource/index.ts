// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SapConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alternateoutputparameteretdata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#alternate_output_parameter_et_data SapConnectionResource#alternate_output_parameter_et_data}
  */
  readonly alternateOutputParameterEtData?: string;
  /**
  * Auditlogjson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#audit_log_json SapConnectionResource#audit_log_json}
  */
  readonly auditLogJson?: string;
  /**
  * Config json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#config_json SapConnectionResource#config_json}
  */
  readonly configJson?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#connection_name SapConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * Createaccountjson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#create_account_json SapConnectionResource#create_account_json}
  */
  readonly createAccountJson?: string;
  /**
  * Data import filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#data_import_filter SapConnectionResource#data_import_filter}
  */
  readonly dataImportFilter?: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#defaultsavroles SapConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#description SapConnectionResource#description}
  */
  readonly description?: string;
  /**
  * Eccors4hana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#ecc_or_s4hana SapConnectionResource#ecc_or_s4hana}
  */
  readonly eccOrS4Hana?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#email_template SapConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * Enableaccountjson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#enable_account_json SapConnectionResource#enable_account_json}
  */
  readonly enableAccountJson?: string;
  /**
  * Enforcepasswordchange.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#enforce_password_change SapConnectionResource#enforce_password_change}
  */
  readonly enforcePasswordChange?: string;
  /**
  * Externalsodevaljson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#external_sod_eval_json SapConnectionResource#external_sod_eval_json}
  */
  readonly externalSodEvalJson?: string;
  /**
  * Externalsodevaljsondetail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#external_sod_eval_json_detail SapConnectionResource#external_sod_eval_json_detail}
  */
  readonly externalSodEvalJsonDetail?: string;
  /**
  * Firefighteridgrantaccessjson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#fire_fighter_id_grant_access_json SapConnectionResource#fire_fighter_id_grant_access_json}
  */
  readonly fireFighterIdGrantAccessJson?: string;
  /**
  * Firefighteridrevokeaccessjson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#fire_fighter_id_revoke_access_json SapConnectionResource#fire_fighter_id_revoke_access_json}
  */
  readonly fireFighterIdRevokeAccessJson?: string;
  /**
  * Hanareftablejson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#hanareftablejson SapConnectionResource#hanareftablejson}
  */
  readonly hanareftablejson?: string;
  /**
  * Jcoashost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_ashost SapConnectionResource#jco_ashost}
  */
  readonly jcoAshost?: string;
  /**
  * Jcoclient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_client SapConnectionResource#jco_client}
  */
  readonly jcoClient?: string;
  /**
  * Jcogroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_group SapConnectionResource#jco_group}
  */
  readonly jcoGroup?: string;
  /**
  * Jcolang.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_lang SapConnectionResource#jco_lang}
  */
  readonly jcoLang?: string;
  /**
  * Jcomshost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_mshost SapConnectionResource#jco_mshost}
  */
  readonly jcoMshost?: string;
  /**
  * Jcomsserv.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_msserv SapConnectionResource#jco_msserv}
  */
  readonly jcoMsserv?: string;
  /**
  * Jcor3name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_r3name SapConnectionResource#jco_r3name}
  */
  readonly jcoR3Name?: string;
  /**
  * Jcosnclibrary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_snc_library SapConnectionResource#jco_snc_library}
  */
  readonly jcoSncLibrary?: string;
  /**
  * Jcosncmode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_snc_mode SapConnectionResource#jco_snc_mode}
  */
  readonly jcoSncMode?: string;
  /**
  * Jcosncmyname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_snc_myname SapConnectionResource#jco_snc_myname}
  */
  readonly jcoSncMyname?: string;
  /**
  * Jcosncpartnername.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_snc_partnername SapConnectionResource#jco_snc_partnername}
  */
  readonly jcoSncPartnername?: string;
  /**
  * Jcosncqop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_snc_qop SapConnectionResource#jco_snc_qop}
  */
  readonly jcoSncQop?: string;
  /**
  * Jcosysnr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_sysnr SapConnectionResource#jco_sysnr}
  */
  readonly jcoSysnr?: string;
  /**
  * Jcouser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#jco_user SapConnectionResource#jco_user}
  */
  readonly jcoUser?: string;
  /**
  * Logstablefilter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#logs_table_filter SapConnectionResource#logs_table_filter}
  */
  readonly logsTableFilter?: string;
  /**
  * Messageserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#message_server SapConnectionResource#message_server}
  */
  readonly messageServer?: string;
  /**
  * Modifyuserdatajson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#modify_user_data_json SapConnectionResource#modify_user_data_json}
  */
  readonly modifyUserDataJson?: string;
  /**
  * Pamconfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#pam_config SapConnectionResource#pam_config}
  */
  readonly pamConfig?: string;
  /**
  * Password. Either this or password_wo need to be set to configure the password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#password SapConnectionResource#password}
  */
  readonly password?: string;
  /**
  * Passwordmaxlength.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#password_max_length SapConnectionResource#password_max_length}
  */
  readonly passwordMaxLength?: string;
  /**
  * Passwordminlength.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#password_min_length SapConnectionResource#password_min_length}
  */
  readonly passwordMinLength?: string;
  /**
  * Passwordnoofcapsalpha.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#password_no_of_caps_alpha SapConnectionResource#password_no_of_caps_alpha}
  */
  readonly passwordNoOfCapsAlpha?: string;
  /**
  * Passwordnoofdigits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#password_no_of_digits SapConnectionResource#password_no_of_digits}
  */
  readonly passwordNoOfDigits?: string;
  /**
  * Passwordnoofsplchars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#password_no_of_spl_chars SapConnectionResource#password_no_of_spl_chars}
  */
  readonly passwordNoOfSplChars?: string;
  /**
  * Password write-only attribute. Either this or password need to be set to configure the password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#password_wo SapConnectionResource#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Provcuaenabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_cua_enabled SapConnectionResource#prov_cua_enabled}
  */
  readonly provCuaEnabled?: string;
  /**
  * Provcuasnc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_cua_snc SapConnectionResource#prov_cua_snc}
  */
  readonly provCuaSnc?: string;
  /**
  * Provjcoashost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_jco_ashost SapConnectionResource#prov_jco_ashost}
  */
  readonly provJcoAshost?: string;
  /**
  * Provjcoclient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_jco_client SapConnectionResource#prov_jco_client}
  */
  readonly provJcoClient?: string;
  /**
  * Provjcogroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_jco_group SapConnectionResource#prov_jco_group}
  */
  readonly provJcoGroup?: string;
  /**
  * Provjcolang.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_jco_lang SapConnectionResource#prov_jco_lang}
  */
  readonly provJcoLang?: string;
  /**
  * Provjcomshost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_jco_mshost SapConnectionResource#prov_jco_mshost}
  */
  readonly provJcoMshost?: string;
  /**
  * Provjcomsserv.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_jco_msserv SapConnectionResource#prov_jco_msserv}
  */
  readonly provJcoMsserv?: string;
  /**
  * Provjcor3name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_jco_r3name SapConnectionResource#prov_jco_r3name}
  */
  readonly provJcoR3Name?: string;
  /**
  * Provjcosysnr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_jco_sysnr SapConnectionResource#prov_jco_sysnr}
  */
  readonly provJcoSysnr?: string;
  /**
  * Provjcouser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_jco_user SapConnectionResource#prov_jco_user}
  */
  readonly provJcoUser?: string;
  /**
  * Provpassword. Either this field or the prov_password_wo field must be populated to set the prov_password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_password SapConnectionResource#prov_password}
  */
  readonly provPassword?: string;
  /**
  * Provpassword write-only attribute. Either this field or the prov_password field must be populated to set the prov_password attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#prov_password_wo SapConnectionResource#prov_password_wo}
  */
  readonly provPasswordWo?: string;
  /**
  * Resetpwdfornewaccount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#reset_pwd_for_newaccount SapConnectionResource#reset_pwd_for_newaccount}
  */
  readonly resetPwdForNewaccount?: string;
  /**
  * Role default date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#role_default_date SapConnectionResource#role_default_date}
  */
  readonly roleDefaultDate?: string;
  /**
  * Saptablefilterlang.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#saptable_filter_lang SapConnectionResource#saptable_filter_lang}
  */
  readonly saptableFilterLang?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#save_in_vault SapConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * Setcuasystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#set_cua_system SapConnectionResource#set_cua_system}
  */
  readonly setCuaSystem?: string;
  /**
  * Snc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#snc SapConnectionResource#snc}
  */
  readonly snc?: string;
  /**
  * Statusthresholdconfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#status_threshold_config SapConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  * Systemname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#system_name SapConnectionResource#system_name}
  */
  readonly systemName?: string;
  /**
  * Tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#tables SapConnectionResource#tables}
  */
  readonly tables?: string;
  /**
  * Terminatedusergroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#terminated_user_group SapConnectionResource#terminated_user_group}
  */
  readonly terminatedUserGroup?: string;
  /**
  * Terminateduserroleaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#terminated_user_role_action SapConnectionResource#terminated_user_role_action}
  */
  readonly terminatedUserRoleAction?: string;
  /**
  * Updateaccountjson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#update_account_json SapConnectionResource#update_account_json}
  */
  readonly updateAccountJson?: string;
  /**
  * Userimportjson.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#user_import_json SapConnectionResource#user_import_json}
  */
  readonly userImportJson?: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#vault_configuration SapConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#vault_connection SapConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#wo_version SapConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource saviynt_sap_connection_resource}
*/
export class SapConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_sap_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SapConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SapConnectionResource to import
  * @param importFromId The id of the existing SapConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SapConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_sap_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/sap_connection_resource saviynt_sap_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SapConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: SapConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_sap_connection_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alternateOutputParameterEtData = config.alternateOutputParameterEtData;
    this._auditLogJson = config.auditLogJson;
    this._configJson = config.configJson;
    this._connectionName = config.connectionName;
    this._createAccountJson = config.createAccountJson;
    this._dataImportFilter = config.dataImportFilter;
    this._defaultsavroles = config.defaultsavroles;
    this._description = config.description;
    this._eccOrS4Hana = config.eccOrS4Hana;
    this._emailTemplate = config.emailTemplate;
    this._enableAccountJson = config.enableAccountJson;
    this._enforcePasswordChange = config.enforcePasswordChange;
    this._externalSodEvalJson = config.externalSodEvalJson;
    this._externalSodEvalJsonDetail = config.externalSodEvalJsonDetail;
    this._fireFighterIdGrantAccessJson = config.fireFighterIdGrantAccessJson;
    this._fireFighterIdRevokeAccessJson = config.fireFighterIdRevokeAccessJson;
    this._hanareftablejson = config.hanareftablejson;
    this._jcoAshost = config.jcoAshost;
    this._jcoClient = config.jcoClient;
    this._jcoGroup = config.jcoGroup;
    this._jcoLang = config.jcoLang;
    this._jcoMshost = config.jcoMshost;
    this._jcoMsserv = config.jcoMsserv;
    this._jcoR3Name = config.jcoR3Name;
    this._jcoSncLibrary = config.jcoSncLibrary;
    this._jcoSncMode = config.jcoSncMode;
    this._jcoSncMyname = config.jcoSncMyname;
    this._jcoSncPartnername = config.jcoSncPartnername;
    this._jcoSncQop = config.jcoSncQop;
    this._jcoSysnr = config.jcoSysnr;
    this._jcoUser = config.jcoUser;
    this._logsTableFilter = config.logsTableFilter;
    this._messageServer = config.messageServer;
    this._modifyUserDataJson = config.modifyUserDataJson;
    this._pamConfig = config.pamConfig;
    this._password = config.password;
    this._passwordMaxLength = config.passwordMaxLength;
    this._passwordMinLength = config.passwordMinLength;
    this._passwordNoOfCapsAlpha = config.passwordNoOfCapsAlpha;
    this._passwordNoOfDigits = config.passwordNoOfDigits;
    this._passwordNoOfSplChars = config.passwordNoOfSplChars;
    this._passwordWo = config.passwordWo;
    this._provCuaEnabled = config.provCuaEnabled;
    this._provCuaSnc = config.provCuaSnc;
    this._provJcoAshost = config.provJcoAshost;
    this._provJcoClient = config.provJcoClient;
    this._provJcoGroup = config.provJcoGroup;
    this._provJcoLang = config.provJcoLang;
    this._provJcoMshost = config.provJcoMshost;
    this._provJcoMsserv = config.provJcoMsserv;
    this._provJcoR3Name = config.provJcoR3Name;
    this._provJcoSysnr = config.provJcoSysnr;
    this._provJcoUser = config.provJcoUser;
    this._provPassword = config.provPassword;
    this._provPasswordWo = config.provPasswordWo;
    this._resetPwdForNewaccount = config.resetPwdForNewaccount;
    this._roleDefaultDate = config.roleDefaultDate;
    this._saptableFilterLang = config.saptableFilterLang;
    this._saveInVault = config.saveInVault;
    this._setCuaSystem = config.setCuaSystem;
    this._snc = config.snc;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._systemName = config.systemName;
    this._tables = config.tables;
    this._terminatedUserGroup = config.terminatedUserGroup;
    this._terminatedUserRoleAction = config.terminatedUserRoleAction;
    this._updateAccountJson = config.updateAccountJson;
    this._userImportJson = config.userImportJson;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_output_parameter_et_data - computed: true, optional: true, required: false
  private _alternateOutputParameterEtData?: string; 
  public get alternateOutputParameterEtData() {
    return this.getStringAttribute('alternate_output_parameter_et_data');
  }
  public set alternateOutputParameterEtData(value: string) {
    this._alternateOutputParameterEtData = value;
  }
  public resetAlternateOutputParameterEtData() {
    this._alternateOutputParameterEtData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateOutputParameterEtDataInput() {
    return this._alternateOutputParameterEtData;
  }

  // audit_log_json - computed: true, optional: true, required: false
  private _auditLogJson?: string; 
  public get auditLogJson() {
    return this.getStringAttribute('audit_log_json');
  }
  public set auditLogJson(value: string) {
    this._auditLogJson = value;
  }
  public resetAuditLogJson() {
    this._auditLogJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogJsonInput() {
    return this._auditLogJson;
  }

  // config_json - computed: true, optional: true, required: false
  private _configJson?: string; 
  public get configJson() {
    return this.getStringAttribute('config_json');
  }
  public set configJson(value: string) {
    this._configJson = value;
  }
  public resetConfigJson() {
    this._configJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configJsonInput() {
    return this._configJson;
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

  // create_account_json - computed: true, optional: true, required: false
  private _createAccountJson?: string; 
  public get createAccountJson() {
    return this.getStringAttribute('create_account_json');
  }
  public set createAccountJson(value: string) {
    this._createAccountJson = value;
  }
  public resetCreateAccountJson() {
    this._createAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAccountJsonInput() {
    return this._createAccountJson;
  }

  // data_import_filter - computed: true, optional: true, required: false
  private _dataImportFilter?: string; 
  public get dataImportFilter() {
    return this.getStringAttribute('data_import_filter');
  }
  public set dataImportFilter(value: string) {
    this._dataImportFilter = value;
  }
  public resetDataImportFilter() {
    this._dataImportFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataImportFilterInput() {
    return this._dataImportFilter;
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

  // ecc_or_s4hana - computed: true, optional: true, required: false
  private _eccOrS4Hana?: string; 
  public get eccOrS4Hana() {
    return this.getStringAttribute('ecc_or_s4hana');
  }
  public set eccOrS4Hana(value: string) {
    this._eccOrS4Hana = value;
  }
  public resetEccOrS4Hana() {
    this._eccOrS4Hana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eccOrS4HanaInput() {
    return this._eccOrS4Hana;
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

  // enable_account_json - computed: true, optional: true, required: false
  private _enableAccountJson?: string; 
  public get enableAccountJson() {
    return this.getStringAttribute('enable_account_json');
  }
  public set enableAccountJson(value: string) {
    this._enableAccountJson = value;
  }
  public resetEnableAccountJson() {
    this._enableAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccountJsonInput() {
    return this._enableAccountJson;
  }

  // enforce_password_change - computed: true, optional: true, required: false
  private _enforcePasswordChange?: string; 
  public get enforcePasswordChange() {
    return this.getStringAttribute('enforce_password_change');
  }
  public set enforcePasswordChange(value: string) {
    this._enforcePasswordChange = value;
  }
  public resetEnforcePasswordChange() {
    this._enforcePasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcePasswordChangeInput() {
    return this._enforcePasswordChange;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // external_sod_eval_json - computed: true, optional: true, required: false
  private _externalSodEvalJson?: string; 
  public get externalSodEvalJson() {
    return this.getStringAttribute('external_sod_eval_json');
  }
  public set externalSodEvalJson(value: string) {
    this._externalSodEvalJson = value;
  }
  public resetExternalSodEvalJson() {
    this._externalSodEvalJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSodEvalJsonInput() {
    return this._externalSodEvalJson;
  }

  // external_sod_eval_json_detail - computed: true, optional: true, required: false
  private _externalSodEvalJsonDetail?: string; 
  public get externalSodEvalJsonDetail() {
    return this.getStringAttribute('external_sod_eval_json_detail');
  }
  public set externalSodEvalJsonDetail(value: string) {
    this._externalSodEvalJsonDetail = value;
  }
  public resetExternalSodEvalJsonDetail() {
    this._externalSodEvalJsonDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSodEvalJsonDetailInput() {
    return this._externalSodEvalJsonDetail;
  }

  // fire_fighter_id_grant_access_json - computed: true, optional: true, required: false
  private _fireFighterIdGrantAccessJson?: string; 
  public get fireFighterIdGrantAccessJson() {
    return this.getStringAttribute('fire_fighter_id_grant_access_json');
  }
  public set fireFighterIdGrantAccessJson(value: string) {
    this._fireFighterIdGrantAccessJson = value;
  }
  public resetFireFighterIdGrantAccessJson() {
    this._fireFighterIdGrantAccessJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireFighterIdGrantAccessJsonInput() {
    return this._fireFighterIdGrantAccessJson;
  }

  // fire_fighter_id_revoke_access_json - computed: true, optional: true, required: false
  private _fireFighterIdRevokeAccessJson?: string; 
  public get fireFighterIdRevokeAccessJson() {
    return this.getStringAttribute('fire_fighter_id_revoke_access_json');
  }
  public set fireFighterIdRevokeAccessJson(value: string) {
    this._fireFighterIdRevokeAccessJson = value;
  }
  public resetFireFighterIdRevokeAccessJson() {
    this._fireFighterIdRevokeAccessJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireFighterIdRevokeAccessJsonInput() {
    return this._fireFighterIdRevokeAccessJson;
  }

  // hanareftablejson - computed: true, optional: true, required: false
  private _hanareftablejson?: string; 
  public get hanareftablejson() {
    return this.getStringAttribute('hanareftablejson');
  }
  public set hanareftablejson(value: string) {
    this._hanareftablejson = value;
  }
  public resetHanareftablejson() {
    this._hanareftablejson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanareftablejsonInput() {
    return this._hanareftablejson;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jco_ashost - computed: true, optional: true, required: false
  private _jcoAshost?: string; 
  public get jcoAshost() {
    return this.getStringAttribute('jco_ashost');
  }
  public set jcoAshost(value: string) {
    this._jcoAshost = value;
  }
  public resetJcoAshost() {
    this._jcoAshost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoAshostInput() {
    return this._jcoAshost;
  }

  // jco_client - computed: true, optional: true, required: false
  private _jcoClient?: string; 
  public get jcoClient() {
    return this.getStringAttribute('jco_client');
  }
  public set jcoClient(value: string) {
    this._jcoClient = value;
  }
  public resetJcoClient() {
    this._jcoClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoClientInput() {
    return this._jcoClient;
  }

  // jco_group - computed: true, optional: true, required: false
  private _jcoGroup?: string; 
  public get jcoGroup() {
    return this.getStringAttribute('jco_group');
  }
  public set jcoGroup(value: string) {
    this._jcoGroup = value;
  }
  public resetJcoGroup() {
    this._jcoGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoGroupInput() {
    return this._jcoGroup;
  }

  // jco_lang - computed: true, optional: true, required: false
  private _jcoLang?: string; 
  public get jcoLang() {
    return this.getStringAttribute('jco_lang');
  }
  public set jcoLang(value: string) {
    this._jcoLang = value;
  }
  public resetJcoLang() {
    this._jcoLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoLangInput() {
    return this._jcoLang;
  }

  // jco_mshost - computed: true, optional: true, required: false
  private _jcoMshost?: string; 
  public get jcoMshost() {
    return this.getStringAttribute('jco_mshost');
  }
  public set jcoMshost(value: string) {
    this._jcoMshost = value;
  }
  public resetJcoMshost() {
    this._jcoMshost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoMshostInput() {
    return this._jcoMshost;
  }

  // jco_msserv - computed: true, optional: true, required: false
  private _jcoMsserv?: string; 
  public get jcoMsserv() {
    return this.getStringAttribute('jco_msserv');
  }
  public set jcoMsserv(value: string) {
    this._jcoMsserv = value;
  }
  public resetJcoMsserv() {
    this._jcoMsserv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoMsservInput() {
    return this._jcoMsserv;
  }

  // jco_r3name - computed: true, optional: true, required: false
  private _jcoR3Name?: string; 
  public get jcoR3Name() {
    return this.getStringAttribute('jco_r3name');
  }
  public set jcoR3Name(value: string) {
    this._jcoR3Name = value;
  }
  public resetJcoR3Name() {
    this._jcoR3Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoR3NameInput() {
    return this._jcoR3Name;
  }

  // jco_snc_library - computed: true, optional: true, required: false
  private _jcoSncLibrary?: string; 
  public get jcoSncLibrary() {
    return this.getStringAttribute('jco_snc_library');
  }
  public set jcoSncLibrary(value: string) {
    this._jcoSncLibrary = value;
  }
  public resetJcoSncLibrary() {
    this._jcoSncLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoSncLibraryInput() {
    return this._jcoSncLibrary;
  }

  // jco_snc_mode - computed: true, optional: true, required: false
  private _jcoSncMode?: string; 
  public get jcoSncMode() {
    return this.getStringAttribute('jco_snc_mode');
  }
  public set jcoSncMode(value: string) {
    this._jcoSncMode = value;
  }
  public resetJcoSncMode() {
    this._jcoSncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoSncModeInput() {
    return this._jcoSncMode;
  }

  // jco_snc_myname - computed: true, optional: true, required: false
  private _jcoSncMyname?: string; 
  public get jcoSncMyname() {
    return this.getStringAttribute('jco_snc_myname');
  }
  public set jcoSncMyname(value: string) {
    this._jcoSncMyname = value;
  }
  public resetJcoSncMyname() {
    this._jcoSncMyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoSncMynameInput() {
    return this._jcoSncMyname;
  }

  // jco_snc_partnername - computed: true, optional: true, required: false
  private _jcoSncPartnername?: string; 
  public get jcoSncPartnername() {
    return this.getStringAttribute('jco_snc_partnername');
  }
  public set jcoSncPartnername(value: string) {
    this._jcoSncPartnername = value;
  }
  public resetJcoSncPartnername() {
    this._jcoSncPartnername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoSncPartnernameInput() {
    return this._jcoSncPartnername;
  }

  // jco_snc_qop - computed: true, optional: true, required: false
  private _jcoSncQop?: string; 
  public get jcoSncQop() {
    return this.getStringAttribute('jco_snc_qop');
  }
  public set jcoSncQop(value: string) {
    this._jcoSncQop = value;
  }
  public resetJcoSncQop() {
    this._jcoSncQop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoSncQopInput() {
    return this._jcoSncQop;
  }

  // jco_sysnr - computed: true, optional: true, required: false
  private _jcoSysnr?: string; 
  public get jcoSysnr() {
    return this.getStringAttribute('jco_sysnr');
  }
  public set jcoSysnr(value: string) {
    this._jcoSysnr = value;
  }
  public resetJcoSysnr() {
    this._jcoSysnr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoSysnrInput() {
    return this._jcoSysnr;
  }

  // jco_user - computed: true, optional: true, required: false
  private _jcoUser?: string; 
  public get jcoUser() {
    return this.getStringAttribute('jco_user');
  }
  public set jcoUser(value: string) {
    this._jcoUser = value;
  }
  public resetJcoUser() {
    this._jcoUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcoUserInput() {
    return this._jcoUser;
  }

  // logs_table_filter - computed: true, optional: true, required: false
  private _logsTableFilter?: string; 
  public get logsTableFilter() {
    return this.getStringAttribute('logs_table_filter');
  }
  public set logsTableFilter(value: string) {
    this._logsTableFilter = value;
  }
  public resetLogsTableFilter() {
    this._logsTableFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsTableFilterInput() {
    return this._logsTableFilter;
  }

  // message_server - computed: true, optional: true, required: false
  private _messageServer?: string; 
  public get messageServer() {
    return this.getStringAttribute('message_server');
  }
  public set messageServer(value: string) {
    this._messageServer = value;
  }
  public resetMessageServer() {
    this._messageServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageServerInput() {
    return this._messageServer;
  }

  // modify_user_data_json - computed: true, optional: true, required: false
  private _modifyUserDataJson?: string; 
  public get modifyUserDataJson() {
    return this.getStringAttribute('modify_user_data_json');
  }
  public set modifyUserDataJson(value: string) {
    this._modifyUserDataJson = value;
  }
  public resetModifyUserDataJson() {
    this._modifyUserDataJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyUserDataJsonInput() {
    return this._modifyUserDataJson;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // pam_config - computed: true, optional: true, required: false
  private _pamConfig?: string; 
  public get pamConfig() {
    return this.getStringAttribute('pam_config');
  }
  public set pamConfig(value: string) {
    this._pamConfig = value;
  }
  public resetPamConfig() {
    this._pamConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pamConfigInput() {
    return this._pamConfig;
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

  // password_max_length - computed: true, optional: true, required: false
  private _passwordMaxLength?: string; 
  public get passwordMaxLength() {
    return this.getStringAttribute('password_max_length');
  }
  public set passwordMaxLength(value: string) {
    this._passwordMaxLength = value;
  }
  public resetPasswordMaxLength() {
    this._passwordMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMaxLengthInput() {
    return this._passwordMaxLength;
  }

  // password_min_length - computed: true, optional: true, required: false
  private _passwordMinLength?: string; 
  public get passwordMinLength() {
    return this.getStringAttribute('password_min_length');
  }
  public set passwordMinLength(value: string) {
    this._passwordMinLength = value;
  }
  public resetPasswordMinLength() {
    this._passwordMinLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordMinLengthInput() {
    return this._passwordMinLength;
  }

  // password_no_of_caps_alpha - computed: true, optional: true, required: false
  private _passwordNoOfCapsAlpha?: string; 
  public get passwordNoOfCapsAlpha() {
    return this.getStringAttribute('password_no_of_caps_alpha');
  }
  public set passwordNoOfCapsAlpha(value: string) {
    this._passwordNoOfCapsAlpha = value;
  }
  public resetPasswordNoOfCapsAlpha() {
    this._passwordNoOfCapsAlpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoOfCapsAlphaInput() {
    return this._passwordNoOfCapsAlpha;
  }

  // password_no_of_digits - computed: true, optional: true, required: false
  private _passwordNoOfDigits?: string; 
  public get passwordNoOfDigits() {
    return this.getStringAttribute('password_no_of_digits');
  }
  public set passwordNoOfDigits(value: string) {
    this._passwordNoOfDigits = value;
  }
  public resetPasswordNoOfDigits() {
    this._passwordNoOfDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoOfDigitsInput() {
    return this._passwordNoOfDigits;
  }

  // password_no_of_spl_chars - computed: true, optional: true, required: false
  private _passwordNoOfSplChars?: string; 
  public get passwordNoOfSplChars() {
    return this.getStringAttribute('password_no_of_spl_chars');
  }
  public set passwordNoOfSplChars(value: string) {
    this._passwordNoOfSplChars = value;
  }
  public resetPasswordNoOfSplChars() {
    this._passwordNoOfSplChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoOfSplCharsInput() {
    return this._passwordNoOfSplChars;
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

  // prov_cua_enabled - computed: true, optional: true, required: false
  private _provCuaEnabled?: string; 
  public get provCuaEnabled() {
    return this.getStringAttribute('prov_cua_enabled');
  }
  public set provCuaEnabled(value: string) {
    this._provCuaEnabled = value;
  }
  public resetProvCuaEnabled() {
    this._provCuaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provCuaEnabledInput() {
    return this._provCuaEnabled;
  }

  // prov_cua_snc - computed: true, optional: true, required: false
  private _provCuaSnc?: string; 
  public get provCuaSnc() {
    return this.getStringAttribute('prov_cua_snc');
  }
  public set provCuaSnc(value: string) {
    this._provCuaSnc = value;
  }
  public resetProvCuaSnc() {
    this._provCuaSnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provCuaSncInput() {
    return this._provCuaSnc;
  }

  // prov_jco_ashost - computed: true, optional: true, required: false
  private _provJcoAshost?: string; 
  public get provJcoAshost() {
    return this.getStringAttribute('prov_jco_ashost');
  }
  public set provJcoAshost(value: string) {
    this._provJcoAshost = value;
  }
  public resetProvJcoAshost() {
    this._provJcoAshost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provJcoAshostInput() {
    return this._provJcoAshost;
  }

  // prov_jco_client - computed: true, optional: true, required: false
  private _provJcoClient?: string; 
  public get provJcoClient() {
    return this.getStringAttribute('prov_jco_client');
  }
  public set provJcoClient(value: string) {
    this._provJcoClient = value;
  }
  public resetProvJcoClient() {
    this._provJcoClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provJcoClientInput() {
    return this._provJcoClient;
  }

  // prov_jco_group - computed: true, optional: true, required: false
  private _provJcoGroup?: string; 
  public get provJcoGroup() {
    return this.getStringAttribute('prov_jco_group');
  }
  public set provJcoGroup(value: string) {
    this._provJcoGroup = value;
  }
  public resetProvJcoGroup() {
    this._provJcoGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provJcoGroupInput() {
    return this._provJcoGroup;
  }

  // prov_jco_lang - computed: true, optional: true, required: false
  private _provJcoLang?: string; 
  public get provJcoLang() {
    return this.getStringAttribute('prov_jco_lang');
  }
  public set provJcoLang(value: string) {
    this._provJcoLang = value;
  }
  public resetProvJcoLang() {
    this._provJcoLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provJcoLangInput() {
    return this._provJcoLang;
  }

  // prov_jco_mshost - computed: true, optional: true, required: false
  private _provJcoMshost?: string; 
  public get provJcoMshost() {
    return this.getStringAttribute('prov_jco_mshost');
  }
  public set provJcoMshost(value: string) {
    this._provJcoMshost = value;
  }
  public resetProvJcoMshost() {
    this._provJcoMshost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provJcoMshostInput() {
    return this._provJcoMshost;
  }

  // prov_jco_msserv - computed: true, optional: true, required: false
  private _provJcoMsserv?: string; 
  public get provJcoMsserv() {
    return this.getStringAttribute('prov_jco_msserv');
  }
  public set provJcoMsserv(value: string) {
    this._provJcoMsserv = value;
  }
  public resetProvJcoMsserv() {
    this._provJcoMsserv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provJcoMsservInput() {
    return this._provJcoMsserv;
  }

  // prov_jco_r3name - computed: true, optional: true, required: false
  private _provJcoR3Name?: string; 
  public get provJcoR3Name() {
    return this.getStringAttribute('prov_jco_r3name');
  }
  public set provJcoR3Name(value: string) {
    this._provJcoR3Name = value;
  }
  public resetProvJcoR3Name() {
    this._provJcoR3Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provJcoR3NameInput() {
    return this._provJcoR3Name;
  }

  // prov_jco_sysnr - computed: true, optional: true, required: false
  private _provJcoSysnr?: string; 
  public get provJcoSysnr() {
    return this.getStringAttribute('prov_jco_sysnr');
  }
  public set provJcoSysnr(value: string) {
    this._provJcoSysnr = value;
  }
  public resetProvJcoSysnr() {
    this._provJcoSysnr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provJcoSysnrInput() {
    return this._provJcoSysnr;
  }

  // prov_jco_user - computed: true, optional: true, required: false
  private _provJcoUser?: string; 
  public get provJcoUser() {
    return this.getStringAttribute('prov_jco_user');
  }
  public set provJcoUser(value: string) {
    this._provJcoUser = value;
  }
  public resetProvJcoUser() {
    this._provJcoUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provJcoUserInput() {
    return this._provJcoUser;
  }

  // prov_password - computed: false, optional: true, required: false
  private _provPassword?: string; 
  public get provPassword() {
    return this.getStringAttribute('prov_password');
  }
  public set provPassword(value: string) {
    this._provPassword = value;
  }
  public resetProvPassword() {
    this._provPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provPasswordInput() {
    return this._provPassword;
  }

  // prov_password_wo - computed: false, optional: true, required: false
  private _provPasswordWo?: string; 
  public get provPasswordWo() {
    return this.getStringAttribute('prov_password_wo');
  }
  public set provPasswordWo(value: string) {
    this._provPasswordWo = value;
  }
  public resetProvPasswordWo() {
    this._provPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provPasswordWoInput() {
    return this._provPasswordWo;
  }

  // reset_pwd_for_newaccount - computed: true, optional: true, required: false
  private _resetPwdForNewaccount?: string; 
  public get resetPwdForNewaccount() {
    return this.getStringAttribute('reset_pwd_for_newaccount');
  }
  public set resetPwdForNewaccount(value: string) {
    this._resetPwdForNewaccount = value;
  }
  public resetResetPwdForNewaccount() {
    this._resetPwdForNewaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPwdForNewaccountInput() {
    return this._resetPwdForNewaccount;
  }

  // role_default_date - computed: true, optional: true, required: false
  private _roleDefaultDate?: string; 
  public get roleDefaultDate() {
    return this.getStringAttribute('role_default_date');
  }
  public set roleDefaultDate(value: string) {
    this._roleDefaultDate = value;
  }
  public resetRoleDefaultDate() {
    this._roleDefaultDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefaultDateInput() {
    return this._roleDefaultDate;
  }

  // saptable_filter_lang - computed: true, optional: true, required: false
  private _saptableFilterLang?: string; 
  public get saptableFilterLang() {
    return this.getStringAttribute('saptable_filter_lang');
  }
  public set saptableFilterLang(value: string) {
    this._saptableFilterLang = value;
  }
  public resetSaptableFilterLang() {
    this._saptableFilterLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saptableFilterLangInput() {
    return this._saptableFilterLang;
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

  // set_cua_system - computed: true, optional: true, required: false
  private _setCuaSystem?: string; 
  public get setCuaSystem() {
    return this.getStringAttribute('set_cua_system');
  }
  public set setCuaSystem(value: string) {
    this._setCuaSystem = value;
  }
  public resetSetCuaSystem() {
    this._setCuaSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCuaSystemInput() {
    return this._setCuaSystem;
  }

  // snc - computed: true, optional: true, required: false
  private _snc?: string; 
  public get snc() {
    return this.getStringAttribute('snc');
  }
  public set snc(value: string) {
    this._snc = value;
  }
  public resetSnc() {
    this._snc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sncInput() {
    return this._snc;
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

  // system_name - computed: true, optional: true, required: false
  private _systemName?: string; 
  public get systemName() {
    return this.getStringAttribute('system_name');
  }
  public set systemName(value: string) {
    this._systemName = value;
  }
  public resetSystemName() {
    this._systemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
  }

  // tables - computed: true, optional: true, required: false
  private _tables?: string; 
  public get tables() {
    return this.getStringAttribute('tables');
  }
  public set tables(value: string) {
    this._tables = value;
  }
  public resetTables() {
    this._tables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables;
  }

  // terminated_user_group - computed: true, optional: true, required: false
  private _terminatedUserGroup?: string; 
  public get terminatedUserGroup() {
    return this.getStringAttribute('terminated_user_group');
  }
  public set terminatedUserGroup(value: string) {
    this._terminatedUserGroup = value;
  }
  public resetTerminatedUserGroup() {
    this._terminatedUserGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedUserGroupInput() {
    return this._terminatedUserGroup;
  }

  // terminated_user_role_action - computed: true, optional: true, required: false
  private _terminatedUserRoleAction?: string; 
  public get terminatedUserRoleAction() {
    return this.getStringAttribute('terminated_user_role_action');
  }
  public set terminatedUserRoleAction(value: string) {
    this._terminatedUserRoleAction = value;
  }
  public resetTerminatedUserRoleAction() {
    this._terminatedUserRoleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatedUserRoleActionInput() {
    return this._terminatedUserRoleAction;
  }

  // update_account_json - computed: true, optional: true, required: false
  private _updateAccountJson?: string; 
  public get updateAccountJson() {
    return this.getStringAttribute('update_account_json');
  }
  public set updateAccountJson(value: string) {
    this._updateAccountJson = value;
  }
  public resetUpdateAccountJson() {
    this._updateAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAccountJsonInput() {
    return this._updateAccountJson;
  }

  // user_import_json - computed: true, optional: true, required: false
  private _userImportJson?: string; 
  public get userImportJson() {
    return this.getStringAttribute('user_import_json');
  }
  public set userImportJson(value: string) {
    this._userImportJson = value;
  }
  public resetUserImportJson() {
    this._userImportJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userImportJsonInput() {
    return this._userImportJson;
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
      alternate_output_parameter_et_data: cdktf.stringToTerraform(this._alternateOutputParameterEtData),
      audit_log_json: cdktf.stringToTerraform(this._auditLogJson),
      config_json: cdktf.stringToTerraform(this._configJson),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      create_account_json: cdktf.stringToTerraform(this._createAccountJson),
      data_import_filter: cdktf.stringToTerraform(this._dataImportFilter),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      description: cdktf.stringToTerraform(this._description),
      ecc_or_s4hana: cdktf.stringToTerraform(this._eccOrS4Hana),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      enable_account_json: cdktf.stringToTerraform(this._enableAccountJson),
      enforce_password_change: cdktf.stringToTerraform(this._enforcePasswordChange),
      external_sod_eval_json: cdktf.stringToTerraform(this._externalSodEvalJson),
      external_sod_eval_json_detail: cdktf.stringToTerraform(this._externalSodEvalJsonDetail),
      fire_fighter_id_grant_access_json: cdktf.stringToTerraform(this._fireFighterIdGrantAccessJson),
      fire_fighter_id_revoke_access_json: cdktf.stringToTerraform(this._fireFighterIdRevokeAccessJson),
      hanareftablejson: cdktf.stringToTerraform(this._hanareftablejson),
      jco_ashost: cdktf.stringToTerraform(this._jcoAshost),
      jco_client: cdktf.stringToTerraform(this._jcoClient),
      jco_group: cdktf.stringToTerraform(this._jcoGroup),
      jco_lang: cdktf.stringToTerraform(this._jcoLang),
      jco_mshost: cdktf.stringToTerraform(this._jcoMshost),
      jco_msserv: cdktf.stringToTerraform(this._jcoMsserv),
      jco_r3name: cdktf.stringToTerraform(this._jcoR3Name),
      jco_snc_library: cdktf.stringToTerraform(this._jcoSncLibrary),
      jco_snc_mode: cdktf.stringToTerraform(this._jcoSncMode),
      jco_snc_myname: cdktf.stringToTerraform(this._jcoSncMyname),
      jco_snc_partnername: cdktf.stringToTerraform(this._jcoSncPartnername),
      jco_snc_qop: cdktf.stringToTerraform(this._jcoSncQop),
      jco_sysnr: cdktf.stringToTerraform(this._jcoSysnr),
      jco_user: cdktf.stringToTerraform(this._jcoUser),
      logs_table_filter: cdktf.stringToTerraform(this._logsTableFilter),
      message_server: cdktf.stringToTerraform(this._messageServer),
      modify_user_data_json: cdktf.stringToTerraform(this._modifyUserDataJson),
      pam_config: cdktf.stringToTerraform(this._pamConfig),
      password: cdktf.stringToTerraform(this._password),
      password_max_length: cdktf.stringToTerraform(this._passwordMaxLength),
      password_min_length: cdktf.stringToTerraform(this._passwordMinLength),
      password_no_of_caps_alpha: cdktf.stringToTerraform(this._passwordNoOfCapsAlpha),
      password_no_of_digits: cdktf.stringToTerraform(this._passwordNoOfDigits),
      password_no_of_spl_chars: cdktf.stringToTerraform(this._passwordNoOfSplChars),
      password_wo: cdktf.stringToTerraform(this._passwordWo),
      prov_cua_enabled: cdktf.stringToTerraform(this._provCuaEnabled),
      prov_cua_snc: cdktf.stringToTerraform(this._provCuaSnc),
      prov_jco_ashost: cdktf.stringToTerraform(this._provJcoAshost),
      prov_jco_client: cdktf.stringToTerraform(this._provJcoClient),
      prov_jco_group: cdktf.stringToTerraform(this._provJcoGroup),
      prov_jco_lang: cdktf.stringToTerraform(this._provJcoLang),
      prov_jco_mshost: cdktf.stringToTerraform(this._provJcoMshost),
      prov_jco_msserv: cdktf.stringToTerraform(this._provJcoMsserv),
      prov_jco_r3name: cdktf.stringToTerraform(this._provJcoR3Name),
      prov_jco_sysnr: cdktf.stringToTerraform(this._provJcoSysnr),
      prov_jco_user: cdktf.stringToTerraform(this._provJcoUser),
      prov_password: cdktf.stringToTerraform(this._provPassword),
      prov_password_wo: cdktf.stringToTerraform(this._provPasswordWo),
      reset_pwd_for_newaccount: cdktf.stringToTerraform(this._resetPwdForNewaccount),
      role_default_date: cdktf.stringToTerraform(this._roleDefaultDate),
      saptable_filter_lang: cdktf.stringToTerraform(this._saptableFilterLang),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      set_cua_system: cdktf.stringToTerraform(this._setCuaSystem),
      snc: cdktf.stringToTerraform(this._snc),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      system_name: cdktf.stringToTerraform(this._systemName),
      tables: cdktf.stringToTerraform(this._tables),
      terminated_user_group: cdktf.stringToTerraform(this._terminatedUserGroup),
      terminated_user_role_action: cdktf.stringToTerraform(this._terminatedUserRoleAction),
      update_account_json: cdktf.stringToTerraform(this._updateAccountJson),
      user_import_json: cdktf.stringToTerraform(this._userImportJson),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternate_output_parameter_et_data: {
        value: cdktf.stringToHclTerraform(this._alternateOutputParameterEtData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_log_json: {
        value: cdktf.stringToHclTerraform(this._auditLogJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_json: {
        value: cdktf.stringToHclTerraform(this._configJson),
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
      create_account_json: {
        value: cdktf.stringToHclTerraform(this._createAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_import_filter: {
        value: cdktf.stringToHclTerraform(this._dataImportFilter),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecc_or_s4hana: {
        value: cdktf.stringToHclTerraform(this._eccOrS4Hana),
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
      enable_account_json: {
        value: cdktf.stringToHclTerraform(this._enableAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_password_change: {
        value: cdktf.stringToHclTerraform(this._enforcePasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_sod_eval_json: {
        value: cdktf.stringToHclTerraform(this._externalSodEvalJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_sod_eval_json_detail: {
        value: cdktf.stringToHclTerraform(this._externalSodEvalJsonDetail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fire_fighter_id_grant_access_json: {
        value: cdktf.stringToHclTerraform(this._fireFighterIdGrantAccessJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fire_fighter_id_revoke_access_json: {
        value: cdktf.stringToHclTerraform(this._fireFighterIdRevokeAccessJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hanareftablejson: {
        value: cdktf.stringToHclTerraform(this._hanareftablejson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_ashost: {
        value: cdktf.stringToHclTerraform(this._jcoAshost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_client: {
        value: cdktf.stringToHclTerraform(this._jcoClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_group: {
        value: cdktf.stringToHclTerraform(this._jcoGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_lang: {
        value: cdktf.stringToHclTerraform(this._jcoLang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_mshost: {
        value: cdktf.stringToHclTerraform(this._jcoMshost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_msserv: {
        value: cdktf.stringToHclTerraform(this._jcoMsserv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_r3name: {
        value: cdktf.stringToHclTerraform(this._jcoR3Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_snc_library: {
        value: cdktf.stringToHclTerraform(this._jcoSncLibrary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_snc_mode: {
        value: cdktf.stringToHclTerraform(this._jcoSncMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_snc_myname: {
        value: cdktf.stringToHclTerraform(this._jcoSncMyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_snc_partnername: {
        value: cdktf.stringToHclTerraform(this._jcoSncPartnername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_snc_qop: {
        value: cdktf.stringToHclTerraform(this._jcoSncQop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_sysnr: {
        value: cdktf.stringToHclTerraform(this._jcoSysnr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jco_user: {
        value: cdktf.stringToHclTerraform(this._jcoUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs_table_filter: {
        value: cdktf.stringToHclTerraform(this._logsTableFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_server: {
        value: cdktf.stringToHclTerraform(this._messageServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_user_data_json: {
        value: cdktf.stringToHclTerraform(this._modifyUserDataJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pam_config: {
        value: cdktf.stringToHclTerraform(this._pamConfig),
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
      password_max_length: {
        value: cdktf.stringToHclTerraform(this._passwordMaxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_min_length: {
        value: cdktf.stringToHclTerraform(this._passwordMinLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_no_of_caps_alpha: {
        value: cdktf.stringToHclTerraform(this._passwordNoOfCapsAlpha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_no_of_digits: {
        value: cdktf.stringToHclTerraform(this._passwordNoOfDigits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_no_of_spl_chars: {
        value: cdktf.stringToHclTerraform(this._passwordNoOfSplChars),
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
      prov_cua_enabled: {
        value: cdktf.stringToHclTerraform(this._provCuaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_cua_snc: {
        value: cdktf.stringToHclTerraform(this._provCuaSnc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_jco_ashost: {
        value: cdktf.stringToHclTerraform(this._provJcoAshost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_jco_client: {
        value: cdktf.stringToHclTerraform(this._provJcoClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_jco_group: {
        value: cdktf.stringToHclTerraform(this._provJcoGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_jco_lang: {
        value: cdktf.stringToHclTerraform(this._provJcoLang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_jco_mshost: {
        value: cdktf.stringToHclTerraform(this._provJcoMshost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_jco_msserv: {
        value: cdktf.stringToHclTerraform(this._provJcoMsserv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_jco_r3name: {
        value: cdktf.stringToHclTerraform(this._provJcoR3Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_jco_sysnr: {
        value: cdktf.stringToHclTerraform(this._provJcoSysnr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_jco_user: {
        value: cdktf.stringToHclTerraform(this._provJcoUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_password: {
        value: cdktf.stringToHclTerraform(this._provPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prov_password_wo: {
        value: cdktf.stringToHclTerraform(this._provPasswordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_pwd_for_newaccount: {
        value: cdktf.stringToHclTerraform(this._resetPwdForNewaccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_default_date: {
        value: cdktf.stringToHclTerraform(this._roleDefaultDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saptable_filter_lang: {
        value: cdktf.stringToHclTerraform(this._saptableFilterLang),
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
      set_cua_system: {
        value: cdktf.stringToHclTerraform(this._setCuaSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snc: {
        value: cdktf.stringToHclTerraform(this._snc),
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
      system_name: {
        value: cdktf.stringToHclTerraform(this._systemName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tables: {
        value: cdktf.stringToHclTerraform(this._tables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminated_user_group: {
        value: cdktf.stringToHclTerraform(this._terminatedUserGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminated_user_role_action: {
        value: cdktf.stringToHclTerraform(this._terminatedUserRoleAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_account_json: {
        value: cdktf.stringToHclTerraform(this._updateAccountJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_import_json: {
        value: cdktf.stringToHclTerraform(this._userImportJson),
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
