// https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#active_directory LdapSetting#active_directory}
  */
  readonly activeDirectory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#additional_default_groups LdapSetting#additional_default_groups}
  */
  readonly additionalDefaultGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#default_group LdapSetting#default_group}
  */
  readonly defaultGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#display_name_attribute LdapSetting#display_name_attribute}
  */
  readonly displayNameAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#enabled LdapSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#group_id_attribute LdapSetting#group_id_attribute}
  */
  readonly groupIdAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#group_mapping LdapSetting#group_mapping}
  */
  readonly groupMapping?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#group_search_base LdapSetting#group_search_base}
  */
  readonly groupSearchBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#group_search_pattern LdapSetting#group_search_pattern}
  */
  readonly groupSearchPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#id LdapSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#ldap_uri LdapSetting#ldap_uri}
  */
  readonly ldapUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#search_base LdapSetting#search_base}
  */
  readonly searchBase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#search_pattern LdapSetting#search_pattern}
  */
  readonly searchPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#system_password LdapSetting#system_password}
  */
  readonly systemPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#system_password_set LdapSetting#system_password_set}
  */
  readonly systemPasswordSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#system_username LdapSetting#system_username}
  */
  readonly systemUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#trust_all_certificates LdapSetting#trust_all_certificates}
  */
  readonly trustAllCertificates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#use_start_tls LdapSetting#use_start_tls}
  */
  readonly useStartTls?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting graylog_ldap_setting}
*/
export class LdapSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graylog_ldap_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapSetting to import
  * @param importFromId The id of the existing LdapSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graylog_ldap_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/ldap_setting graylog_ldap_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapSettingConfig
  */
  public constructor(scope: Construct, id: string, config: LdapSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'graylog_ldap_setting',
      terraformGeneratorMetadata: {
        providerName: 'graylog',
        providerVersion: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeDirectory = config.activeDirectory;
    this._additionalDefaultGroups = config.additionalDefaultGroups;
    this._defaultGroup = config.defaultGroup;
    this._displayNameAttribute = config.displayNameAttribute;
    this._enabled = config.enabled;
    this._groupIdAttribute = config.groupIdAttribute;
    this._groupMapping = config.groupMapping;
    this._groupSearchBase = config.groupSearchBase;
    this._groupSearchPattern = config.groupSearchPattern;
    this._id = config.id;
    this._ldapUri = config.ldapUri;
    this._searchBase = config.searchBase;
    this._searchPattern = config.searchPattern;
    this._systemPassword = config.systemPassword;
    this._systemPasswordSet = config.systemPasswordSet;
    this._systemUsername = config.systemUsername;
    this._trustAllCertificates = config.trustAllCertificates;
    this._useStartTls = config.useStartTls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory?: boolean | cdktf.IResolvable; 
  public get activeDirectory() {
    return this.getBooleanAttribute('active_directory');
  }
  public set activeDirectory(value: boolean | cdktf.IResolvable) {
    this._activeDirectory = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory;
  }

  // additional_default_groups - computed: false, optional: true, required: false
  private _additionalDefaultGroups?: string[]; 
  public get additionalDefaultGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_default_groups'));
  }
  public set additionalDefaultGroups(value: string[]) {
    this._additionalDefaultGroups = value;
  }
  public resetAdditionalDefaultGroups() {
    this._additionalDefaultGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDefaultGroupsInput() {
    return this._additionalDefaultGroups;
  }

  // default_group - computed: false, optional: false, required: true
  private _defaultGroup?: string; 
  public get defaultGroup() {
    return this.getStringAttribute('default_group');
  }
  public set defaultGroup(value: string) {
    this._defaultGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGroupInput() {
    return this._defaultGroup;
  }

  // display_name_attribute - computed: false, optional: false, required: true
  private _displayNameAttribute?: string; 
  public get displayNameAttribute() {
    return this.getStringAttribute('display_name_attribute');
  }
  public set displayNameAttribute(value: string) {
    this._displayNameAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameAttributeInput() {
    return this._displayNameAttribute;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_id_attribute - computed: false, optional: true, required: false
  private _groupIdAttribute?: string; 
  public get groupIdAttribute() {
    return this.getStringAttribute('group_id_attribute');
  }
  public set groupIdAttribute(value: string) {
    this._groupIdAttribute = value;
  }
  public resetGroupIdAttribute() {
    this._groupIdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdAttributeInput() {
    return this._groupIdAttribute;
  }

  // group_mapping - computed: false, optional: true, required: false
  private _groupMapping?: { [key: string]: string }; 
  public get groupMapping() {
    return this.getStringMapAttribute('group_mapping');
  }
  public set groupMapping(value: { [key: string]: string }) {
    this._groupMapping = value;
  }
  public resetGroupMapping() {
    this._groupMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMappingInput() {
    return this._groupMapping;
  }

  // group_search_base - computed: false, optional: true, required: false
  private _groupSearchBase?: string; 
  public get groupSearchBase() {
    return this.getStringAttribute('group_search_base');
  }
  public set groupSearchBase(value: string) {
    this._groupSearchBase = value;
  }
  public resetGroupSearchBase() {
    this._groupSearchBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchBaseInput() {
    return this._groupSearchBase;
  }

  // group_search_pattern - computed: false, optional: true, required: false
  private _groupSearchPattern?: string; 
  public get groupSearchPattern() {
    return this.getStringAttribute('group_search_pattern');
  }
  public set groupSearchPattern(value: string) {
    this._groupSearchPattern = value;
  }
  public resetGroupSearchPattern() {
    this._groupSearchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchPatternInput() {
    return this._groupSearchPattern;
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

  // ldap_uri - computed: false, optional: false, required: true
  private _ldapUri?: string; 
  public get ldapUri() {
    return this.getStringAttribute('ldap_uri');
  }
  public set ldapUri(value: string) {
    this._ldapUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUriInput() {
    return this._ldapUri;
  }

  // search_base - computed: false, optional: false, required: true
  private _searchBase?: string; 
  public get searchBase() {
    return this.getStringAttribute('search_base');
  }
  public set searchBase(value: string) {
    this._searchBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseInput() {
    return this._searchBase;
  }

  // search_pattern - computed: false, optional: false, required: true
  private _searchPattern?: string; 
  public get searchPattern() {
    return this.getStringAttribute('search_pattern');
  }
  public set searchPattern(value: string) {
    this._searchPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPatternInput() {
    return this._searchPattern;
  }

  // system_password - computed: true, optional: true, required: false
  private _systemPassword?: string; 
  public get systemPassword() {
    return this.getStringAttribute('system_password');
  }
  public set systemPassword(value: string) {
    this._systemPassword = value;
  }
  public resetSystemPassword() {
    this._systemPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPasswordInput() {
    return this._systemPassword;
  }

  // system_password_set - computed: true, optional: true, required: false
  private _systemPasswordSet?: boolean | cdktf.IResolvable; 
  public get systemPasswordSet() {
    return this.getBooleanAttribute('system_password_set');
  }
  public set systemPasswordSet(value: boolean | cdktf.IResolvable) {
    this._systemPasswordSet = value;
  }
  public resetSystemPasswordSet() {
    this._systemPasswordSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPasswordSetInput() {
    return this._systemPasswordSet;
  }

  // system_username - computed: false, optional: false, required: true
  private _systemUsername?: string; 
  public get systemUsername() {
    return this.getStringAttribute('system_username');
  }
  public set systemUsername(value: string) {
    this._systemUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemUsernameInput() {
    return this._systemUsername;
  }

  // trust_all_certificates - computed: false, optional: true, required: false
  private _trustAllCertificates?: boolean | cdktf.IResolvable; 
  public get trustAllCertificates() {
    return this.getBooleanAttribute('trust_all_certificates');
  }
  public set trustAllCertificates(value: boolean | cdktf.IResolvable) {
    this._trustAllCertificates = value;
  }
  public resetTrustAllCertificates() {
    this._trustAllCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAllCertificatesInput() {
    return this._trustAllCertificates;
  }

  // use_start_tls - computed: false, optional: true, required: false
  private _useStartTls?: boolean | cdktf.IResolvable; 
  public get useStartTls() {
    return this.getBooleanAttribute('use_start_tls');
  }
  public set useStartTls(value: boolean | cdktf.IResolvable) {
    this._useStartTls = value;
  }
  public resetUseStartTls() {
    this._useStartTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStartTlsInput() {
    return this._useStartTls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_directory: cdktf.booleanToTerraform(this._activeDirectory),
      additional_default_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalDefaultGroups),
      default_group: cdktf.stringToTerraform(this._defaultGroup),
      display_name_attribute: cdktf.stringToTerraform(this._displayNameAttribute),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_id_attribute: cdktf.stringToTerraform(this._groupIdAttribute),
      group_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._groupMapping),
      group_search_base: cdktf.stringToTerraform(this._groupSearchBase),
      group_search_pattern: cdktf.stringToTerraform(this._groupSearchPattern),
      id: cdktf.stringToTerraform(this._id),
      ldap_uri: cdktf.stringToTerraform(this._ldapUri),
      search_base: cdktf.stringToTerraform(this._searchBase),
      search_pattern: cdktf.stringToTerraform(this._searchPattern),
      system_password: cdktf.stringToTerraform(this._systemPassword),
      system_password_set: cdktf.booleanToTerraform(this._systemPasswordSet),
      system_username: cdktf.stringToTerraform(this._systemUsername),
      trust_all_certificates: cdktf.booleanToTerraform(this._trustAllCertificates),
      use_start_tls: cdktf.booleanToTerraform(this._useStartTls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_directory: {
        value: cdktf.booleanToHclTerraform(this._activeDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_default_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalDefaultGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_group: {
        value: cdktf.stringToHclTerraform(this._defaultGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name_attribute: {
        value: cdktf.stringToHclTerraform(this._displayNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id_attribute: {
        value: cdktf.stringToHclTerraform(this._groupIdAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_mapping: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._groupMapping),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      group_search_base: {
        value: cdktf.stringToHclTerraform(this._groupSearchBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_pattern: {
        value: cdktf.stringToHclTerraform(this._groupSearchPattern),
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
      ldap_uri: {
        value: cdktf.stringToHclTerraform(this._ldapUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_base: {
        value: cdktf.stringToHclTerraform(this._searchBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_pattern: {
        value: cdktf.stringToHclTerraform(this._searchPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_password: {
        value: cdktf.stringToHclTerraform(this._systemPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_password_set: {
        value: cdktf.booleanToHclTerraform(this._systemPasswordSet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_username: {
        value: cdktf.stringToHclTerraform(this._systemUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_all_certificates: {
        value: cdktf.booleanToHclTerraform(this._trustAllCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_start_tls: {
        value: cdktf.booleanToHclTerraform(this._useStartTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
