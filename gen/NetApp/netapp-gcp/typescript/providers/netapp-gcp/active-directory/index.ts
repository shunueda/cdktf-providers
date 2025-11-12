// https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#ad_server ActiveDirectory#ad_server}
  */
  readonly adServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#aes_encryption ActiveDirectory#aes_encryption}
  */
  readonly aesEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#allow_local_nfs_users_with_ldap ActiveDirectory#allow_local_nfs_users_with_ldap}
  */
  readonly allowLocalNfsUsersWithLdap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#backup_operators ActiveDirectory#backup_operators}
  */
  readonly backupOperators?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#connection_type ActiveDirectory#connection_type}
  */
  readonly connectionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#dns_server ActiveDirectory#dns_server}
  */
  readonly dnsServer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#domain ActiveDirectory#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#id ActiveDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#kdc_ip ActiveDirectory#kdc_ip}
  */
  readonly kdcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#ldap_signing ActiveDirectory#ldap_signing}
  */
  readonly ldapSigning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#managed_ad ActiveDirectory#managed_ad}
  */
  readonly managedAd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#net_bios ActiveDirectory#net_bios}
  */
  readonly netBios: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#organizational_unit ActiveDirectory#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#password ActiveDirectory#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#region ActiveDirectory#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#security_operators ActiveDirectory#security_operators}
  */
  readonly securityOperators?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#site ActiveDirectory#site}
  */
  readonly site?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#username ActiveDirectory#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory netapp-gcp_active_directory}
*/
export class ActiveDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-gcp_active_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActiveDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActiveDirectory to import
  * @param importFromId The id of the existing ActiveDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActiveDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-gcp_active_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/active_directory netapp-gcp_active_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-gcp_active_directory',
      terraformGeneratorMetadata: {
        providerName: 'netapp-gcp',
        providerVersion: '24.6.0',
        providerVersionConstraint: '24.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adServer = config.adServer;
    this._aesEncryption = config.aesEncryption;
    this._allowLocalNfsUsersWithLdap = config.allowLocalNfsUsersWithLdap;
    this._backupOperators = config.backupOperators;
    this._connectionType = config.connectionType;
    this._dnsServer = config.dnsServer;
    this._domain = config.domain;
    this._id = config.id;
    this._kdcIp = config.kdcIp;
    this._ldapSigning = config.ldapSigning;
    this._managedAd = config.managedAd;
    this._netBios = config.netBios;
    this._organizationalUnit = config.organizationalUnit;
    this._password = config.password;
    this._region = config.region;
    this._securityOperators = config.securityOperators;
    this._site = config.site;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_server - computed: false, optional: true, required: false
  private _adServer?: string; 
  public get adServer() {
    return this.getStringAttribute('ad_server');
  }
  public set adServer(value: string) {
    this._adServer = value;
  }
  public resetAdServer() {
    this._adServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adServerInput() {
    return this._adServer;
  }

  // aes_encryption - computed: false, optional: true, required: false
  private _aesEncryption?: boolean | cdktf.IResolvable; 
  public get aesEncryption() {
    return this.getBooleanAttribute('aes_encryption');
  }
  public set aesEncryption(value: boolean | cdktf.IResolvable) {
    this._aesEncryption = value;
  }
  public resetAesEncryption() {
    this._aesEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aesEncryptionInput() {
    return this._aesEncryption;
  }

  // allow_local_nfs_users_with_ldap - computed: false, optional: true, required: false
  private _allowLocalNfsUsersWithLdap?: boolean | cdktf.IResolvable; 
  public get allowLocalNfsUsersWithLdap() {
    return this.getBooleanAttribute('allow_local_nfs_users_with_ldap');
  }
  public set allowLocalNfsUsersWithLdap(value: boolean | cdktf.IResolvable) {
    this._allowLocalNfsUsersWithLdap = value;
  }
  public resetAllowLocalNfsUsersWithLdap() {
    this._allowLocalNfsUsersWithLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLocalNfsUsersWithLdapInput() {
    return this._allowLocalNfsUsersWithLdap;
  }

  // backup_operators - computed: false, optional: true, required: false
  private _backupOperators?: string[]; 
  public get backupOperators() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_operators'));
  }
  public set backupOperators(value: string[]) {
    this._backupOperators = value;
  }
  public resetBackupOperators() {
    this._backupOperators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOperatorsInput() {
    return this._backupOperators;
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // dns_server - computed: false, optional: false, required: true
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // kdc_ip - computed: false, optional: true, required: false
  private _kdcIp?: string; 
  public get kdcIp() {
    return this.getStringAttribute('kdc_ip');
  }
  public set kdcIp(value: string) {
    this._kdcIp = value;
  }
  public resetKdcIp() {
    this._kdcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcIpInput() {
    return this._kdcIp;
  }

  // ldap_signing - computed: false, optional: true, required: false
  private _ldapSigning?: boolean | cdktf.IResolvable; 
  public get ldapSigning() {
    return this.getBooleanAttribute('ldap_signing');
  }
  public set ldapSigning(value: boolean | cdktf.IResolvable) {
    this._ldapSigning = value;
  }
  public resetLdapSigning() {
    this._ldapSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSigningInput() {
    return this._ldapSigning;
  }

  // managed_ad - computed: false, optional: true, required: false
  private _managedAd?: boolean | cdktf.IResolvable; 
  public get managedAd() {
    return this.getBooleanAttribute('managed_ad');
  }
  public set managedAd(value: boolean | cdktf.IResolvable) {
    this._managedAd = value;
  }
  public resetManagedAd() {
    this._managedAd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAdInput() {
    return this._managedAd;
  }

  // net_bios - computed: false, optional: false, required: true
  private _netBios?: string; 
  public get netBios() {
    return this.getStringAttribute('net_bios');
  }
  public set netBios(value: string) {
    this._netBios = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netBiosInput() {
    return this._netBios;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_operators - computed: false, optional: true, required: false
  private _securityOperators?: string[]; 
  public get securityOperators() {
    return cdktf.Fn.tolist(this.getListAttribute('security_operators'));
  }
  public set securityOperators(value: string[]) {
    this._securityOperators = value;
  }
  public resetSecurityOperators() {
    this._securityOperators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityOperatorsInput() {
    return this._securityOperators;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_server: cdktf.stringToTerraform(this._adServer),
      aes_encryption: cdktf.booleanToTerraform(this._aesEncryption),
      allow_local_nfs_users_with_ldap: cdktf.booleanToTerraform(this._allowLocalNfsUsersWithLdap),
      backup_operators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupOperators),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      dns_server: cdktf.stringToTerraform(this._dnsServer),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      kdc_ip: cdktf.stringToTerraform(this._kdcIp),
      ldap_signing: cdktf.booleanToTerraform(this._ldapSigning),
      managed_ad: cdktf.booleanToTerraform(this._managedAd),
      net_bios: cdktf.stringToTerraform(this._netBios),
      organizational_unit: cdktf.stringToTerraform(this._organizationalUnit),
      password: cdktf.stringToTerraform(this._password),
      region: cdktf.stringToTerraform(this._region),
      security_operators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityOperators),
      site: cdktf.stringToTerraform(this._site),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_server: {
        value: cdktf.stringToHclTerraform(this._adServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aes_encryption: {
        value: cdktf.booleanToHclTerraform(this._aesEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_local_nfs_users_with_ldap: {
        value: cdktf.booleanToHclTerraform(this._allowLocalNfsUsersWithLdap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_operators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupOperators),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server: {
        value: cdktf.stringToHclTerraform(this._dnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      kdc_ip: {
        value: cdktf.stringToHclTerraform(this._kdcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_signing: {
        value: cdktf.booleanToHclTerraform(this._ldapSigning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      managed_ad: {
        value: cdktf.booleanToHclTerraform(this._managedAd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      net_bios: {
        value: cdktf.stringToHclTerraform(this._netBios),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit: {
        value: cdktf.stringToHclTerraform(this._organizationalUnit),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_operators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityOperators),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
