// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NameServicesLdapResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the name of the Active Directory domain used to discover LDAP servers for use by this client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#ad_domain NameServicesLdapResource#ad_domain}
  */
  readonly adDomain?: string;
  /**
  * Specifies the default base DN for all searches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#base_dn NameServicesLdapResource#base_dn}
  */
  readonly baseDn?: string;
  /**
  * Specifies the default search scope for LDAP queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#base_scope NameServicesLdapResource#base_scope}
  */
  readonly baseScope?: string;
  /**
  * Specifies whether or not CIFS server's credentials are used to bind to the LDAP server (9.9)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#bind_as_cifs_server NameServicesLdapResource#bind_as_cifs_server}
  */
  readonly bindAsCifsServer?: boolean | cdktf.IResolvable;
  /**
  * Specifies the user that binds to the LDAP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#bind_dn NameServicesLdapResource#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * Specifies the bind password for the LDAP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#bind_password NameServicesLdapResource#bind_password}
  */
  readonly bindPassword?: string;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#cx_profile_name NameServicesLdapResource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Specifies whether or not LDAPS is enabled (9.9)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#ldaps_enabled NameServicesLdapResource#ldaps_enabled}
  */
  readonly ldapsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The minimum bind authentication level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#min_bind_level NameServicesLdapResource#min_bind_level}
  */
  readonly minBindLevel?: string;
  /**
  * The port used to connect to the LDAP Servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#port NameServicesLdapResource#port}
  */
  readonly port?: number;
  /**
  * This parameter specifies a list of LDAP servers preferred over discovered servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#preferred_ad_servers NameServicesLdapResource#preferred_ad_servers}
  */
  readonly preferredAdServers?: string[];
  /**
  * Specifies the timeout for LDAP queries in seconds (9.9)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#query_timeout NameServicesLdapResource#query_timeout}
  */
  readonly queryTimeout?: number;
  /**
  * Specifies whether or not LDAP referral is enabled (9.9)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#referral_enabled NameServicesLdapResource#referral_enabled}
  */
  readonly referralEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the schema template used by the SVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#schema NameServicesLdapResource#schema}
  */
  readonly schema?: string;
  /**
  * List of LDAP servers used for this client configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#servers NameServicesLdapResource#servers}
  */
  readonly servers?: string[];
  /**
  * Specifies the level of security to be used for LDAP communications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#session_security NameServicesLdapResource#session_security}
  */
  readonly sessionSecurity?: string;
  /**
  * Specifies whether or not to skip the validation of the LDAP configuration (9.9)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#skip_config_validation NameServicesLdapResource#skip_config_validation}
  */
  readonly skipConfigValidation?: boolean | cdktf.IResolvable;
  /**
  * NameServicesLDAP svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#svm_name NameServicesLdapResource#svm_name}
  */
  readonly svmName: string;
  /**
  * Specifies whether or not to use Start TLS over LDAP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#use_start_tls NameServicesLdapResource#use_start_tls}
  */
  readonly useStartTls?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource netapp-ontap_name_services_ldap_resource}
*/
export class NameServicesLdapResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_name_services_ldap_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NameServicesLdapResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NameServicesLdapResource to import
  * @param importFromId The id of the existing NameServicesLdapResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NameServicesLdapResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_name_services_ldap_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/name_services_ldap_resource netapp-ontap_name_services_ldap_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NameServicesLdapResourceConfig
  */
  public constructor(scope: Construct, id: string, config: NameServicesLdapResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_name_services_ldap_resource',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adDomain = config.adDomain;
    this._baseDn = config.baseDn;
    this._baseScope = config.baseScope;
    this._bindAsCifsServer = config.bindAsCifsServer;
    this._bindDn = config.bindDn;
    this._bindPassword = config.bindPassword;
    this._cxProfileName = config.cxProfileName;
    this._ldapsEnabled = config.ldapsEnabled;
    this._minBindLevel = config.minBindLevel;
    this._port = config.port;
    this._preferredAdServers = config.preferredAdServers;
    this._queryTimeout = config.queryTimeout;
    this._referralEnabled = config.referralEnabled;
    this._schema = config.schema;
    this._servers = config.servers;
    this._sessionSecurity = config.sessionSecurity;
    this._skipConfigValidation = config.skipConfigValidation;
    this._svmName = config.svmName;
    this._useStartTls = config.useStartTls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_domain - computed: false, optional: true, required: false
  private _adDomain?: string; 
  public get adDomain() {
    return this.getStringAttribute('ad_domain');
  }
  public set adDomain(value: string) {
    this._adDomain = value;
  }
  public resetAdDomain() {
    this._adDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainInput() {
    return this._adDomain;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // base_scope - computed: true, optional: true, required: false
  private _baseScope?: string; 
  public get baseScope() {
    return this.getStringAttribute('base_scope');
  }
  public set baseScope(value: string) {
    this._baseScope = value;
  }
  public resetBaseScope() {
    this._baseScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseScopeInput() {
    return this._baseScope;
  }

  // bind_as_cifs_server - computed: true, optional: true, required: false
  private _bindAsCifsServer?: boolean | cdktf.IResolvable; 
  public get bindAsCifsServer() {
    return this.getBooleanAttribute('bind_as_cifs_server');
  }
  public set bindAsCifsServer(value: boolean | cdktf.IResolvable) {
    this._bindAsCifsServer = value;
  }
  public resetBindAsCifsServer() {
    this._bindAsCifsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAsCifsServerInput() {
    return this._bindAsCifsServer;
  }

  // bind_dn - computed: false, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // bind_password - computed: false, optional: true, required: false
  private _bindPassword?: string; 
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }
  public set bindPassword(value: string) {
    this._bindPassword = value;
  }
  public resetBindPassword() {
    this._bindPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldaps_enabled - computed: true, optional: true, required: false
  private _ldapsEnabled?: boolean | cdktf.IResolvable; 
  public get ldapsEnabled() {
    return this.getBooleanAttribute('ldaps_enabled');
  }
  public set ldapsEnabled(value: boolean | cdktf.IResolvable) {
    this._ldapsEnabled = value;
  }
  public resetLdapsEnabled() {
    this._ldapsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsEnabledInput() {
    return this._ldapsEnabled;
  }

  // min_bind_level - computed: true, optional: true, required: false
  private _minBindLevel?: string; 
  public get minBindLevel() {
    return this.getStringAttribute('min_bind_level');
  }
  public set minBindLevel(value: string) {
    this._minBindLevel = value;
  }
  public resetMinBindLevel() {
    this._minBindLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBindLevelInput() {
    return this._minBindLevel;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // preferred_ad_servers - computed: false, optional: true, required: false
  private _preferredAdServers?: string[]; 
  public get preferredAdServers() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_ad_servers'));
  }
  public set preferredAdServers(value: string[]) {
    this._preferredAdServers = value;
  }
  public resetPreferredAdServers() {
    this._preferredAdServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAdServersInput() {
    return this._preferredAdServers;
  }

  // query_timeout - computed: true, optional: true, required: false
  private _queryTimeout?: number; 
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }
  public set queryTimeout(value: number) {
    this._queryTimeout = value;
  }
  public resetQueryTimeout() {
    this._queryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeoutInput() {
    return this._queryTimeout;
  }

  // referral_enabled - computed: true, optional: true, required: false
  private _referralEnabled?: boolean | cdktf.IResolvable; 
  public get referralEnabled() {
    return this.getBooleanAttribute('referral_enabled');
  }
  public set referralEnabled(value: boolean | cdktf.IResolvable) {
    this._referralEnabled = value;
  }
  public resetReferralEnabled() {
    this._referralEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referralEnabledInput() {
    return this._referralEnabled;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return cdktf.Fn.tolist(this.getListAttribute('servers'));
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // session_security - computed: true, optional: true, required: false
  private _sessionSecurity?: string; 
  public get sessionSecurity() {
    return this.getStringAttribute('session_security');
  }
  public set sessionSecurity(value: string) {
    this._sessionSecurity = value;
  }
  public resetSessionSecurity() {
    this._sessionSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSecurityInput() {
    return this._sessionSecurity;
  }

  // skip_config_validation - computed: false, optional: true, required: false
  private _skipConfigValidation?: boolean | cdktf.IResolvable; 
  public get skipConfigValidation() {
    return this.getBooleanAttribute('skip_config_validation');
  }
  public set skipConfigValidation(value: boolean | cdktf.IResolvable) {
    this._skipConfigValidation = value;
  }
  public resetSkipConfigValidation() {
    this._skipConfigValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConfigValidationInput() {
    return this._skipConfigValidation;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // use_start_tls - computed: true, optional: true, required: false
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
      ad_domain: cdktf.stringToTerraform(this._adDomain),
      base_dn: cdktf.stringToTerraform(this._baseDn),
      base_scope: cdktf.stringToTerraform(this._baseScope),
      bind_as_cifs_server: cdktf.booleanToTerraform(this._bindAsCifsServer),
      bind_dn: cdktf.stringToTerraform(this._bindDn),
      bind_password: cdktf.stringToTerraform(this._bindPassword),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      ldaps_enabled: cdktf.booleanToTerraform(this._ldapsEnabled),
      min_bind_level: cdktf.stringToTerraform(this._minBindLevel),
      port: cdktf.numberToTerraform(this._port),
      preferred_ad_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredAdServers),
      query_timeout: cdktf.numberToTerraform(this._queryTimeout),
      referral_enabled: cdktf.booleanToTerraform(this._referralEnabled),
      schema: cdktf.stringToTerraform(this._schema),
      servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servers),
      session_security: cdktf.stringToTerraform(this._sessionSecurity),
      skip_config_validation: cdktf.booleanToTerraform(this._skipConfigValidation),
      svm_name: cdktf.stringToTerraform(this._svmName),
      use_start_tls: cdktf.booleanToTerraform(this._useStartTls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_domain: {
        value: cdktf.stringToHclTerraform(this._adDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_dn: {
        value: cdktf.stringToHclTerraform(this._baseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_scope: {
        value: cdktf.stringToHclTerraform(this._baseScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_as_cifs_server: {
        value: cdktf.booleanToHclTerraform(this._bindAsCifsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bind_dn: {
        value: cdktf.stringToHclTerraform(this._bindDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_password: {
        value: cdktf.stringToHclTerraform(this._bindPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldaps_enabled: {
        value: cdktf.booleanToHclTerraform(this._ldapsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_bind_level: {
        value: cdktf.stringToHclTerraform(this._minBindLevel),
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
      preferred_ad_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredAdServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      query_timeout: {
        value: cdktf.numberToHclTerraform(this._queryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      referral_enabled: {
        value: cdktf.booleanToHclTerraform(this._referralEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      session_security: {
        value: cdktf.stringToHclTerraform(this._sessionSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_config_validation: {
        value: cdktf.booleanToHclTerraform(this._skipConfigValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
