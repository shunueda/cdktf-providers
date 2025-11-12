// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerRdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable fixed user only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#fixed_user_only ProducerRdp#fixed_user_only}
  */
  readonly fixedUserOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#id ProducerRdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#name ProducerRdp#name}
  */
  readonly name: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#producer_encryption_key_name ProducerRdp#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * RDP Admin name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#rdp_admin_name ProducerRdp#rdp_admin_name}
  */
  readonly rdpAdminName?: string;
  /**
  * RDP Admin Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#rdp_admin_pwd ProducerRdp#rdp_admin_pwd}
  */
  readonly rdpAdminPwd?: string;
  /**
  * RDP Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#rdp_host_name ProducerRdp#rdp_host_name}
  */
  readonly rdpHostName?: string;
  /**
  * RDP Host port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#rdp_host_port ProducerRdp#rdp_host_port}
  */
  readonly rdpHostPort?: string;
  /**
  * RDP UserGroup name(s). Multiple values should be separated by comma
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#rdp_user_groups ProducerRdp#rdp_user_groups}
  */
  readonly rdpUserGroups?: string;
  /**
  * Allow providing external user for a domain users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#secure_access_allow_external_user ProducerRdp#secure_access_allow_external_user}
  */
  readonly secureAccessAllowExternalUser?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#secure_access_enable ProducerRdp#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Target servers for connections., For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#secure_access_host ProducerRdp#secure_access_host}
  */
  readonly secureAccessHost?: string[];
  /**
  * Required when the Dynamic Secret is used for a domain user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#secure_access_rdp_domain ProducerRdp#secure_access_rdp_domain}
  */
  readonly secureAccessRdpDomain?: string;
  /**
  * Override the RDP Domain username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#secure_access_rdp_user ProducerRdp#secure_access_rdp_user}
  */
  readonly secureAccessRdpUser?: string;
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#secure_access_web ProducerRdp#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#tags ProducerRdp#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#target_name ProducerRdp#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#user_ttl ProducerRdp#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp akeyless_producer_rdp}
*/
export class ProducerRdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_rdp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerRdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerRdp to import
  * @param importFromId The id of the existing ProducerRdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerRdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_rdp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_rdp akeyless_producer_rdp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerRdpConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerRdpConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_rdp',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fixedUserOnly = config.fixedUserOnly;
    this._id = config.id;
    this._name = config.name;
    this._producerEncryptionKeyName = config.producerEncryptionKeyName;
    this._rdpAdminName = config.rdpAdminName;
    this._rdpAdminPwd = config.rdpAdminPwd;
    this._rdpHostName = config.rdpHostName;
    this._rdpHostPort = config.rdpHostPort;
    this._rdpUserGroups = config.rdpUserGroups;
    this._secureAccessAllowExternalUser = config.secureAccessAllowExternalUser;
    this._secureAccessEnable = config.secureAccessEnable;
    this._secureAccessHost = config.secureAccessHost;
    this._secureAccessRdpDomain = config.secureAccessRdpDomain;
    this._secureAccessRdpUser = config.secureAccessRdpUser;
    this._secureAccessWeb = config.secureAccessWeb;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fixed_user_only - computed: false, optional: true, required: false
  private _fixedUserOnly?: string; 
  public get fixedUserOnly() {
    return this.getStringAttribute('fixed_user_only');
  }
  public set fixedUserOnly(value: string) {
    this._fixedUserOnly = value;
  }
  public resetFixedUserOnly() {
    this._fixedUserOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedUserOnlyInput() {
    return this._fixedUserOnly;
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

  // producer_encryption_key_name - computed: false, optional: true, required: false
  private _producerEncryptionKeyName?: string; 
  public get producerEncryptionKeyName() {
    return this.getStringAttribute('producer_encryption_key_name');
  }
  public set producerEncryptionKeyName(value: string) {
    this._producerEncryptionKeyName = value;
  }
  public resetProducerEncryptionKeyName() {
    this._producerEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerEncryptionKeyNameInput() {
    return this._producerEncryptionKeyName;
  }

  // rdp_admin_name - computed: false, optional: true, required: false
  private _rdpAdminName?: string; 
  public get rdpAdminName() {
    return this.getStringAttribute('rdp_admin_name');
  }
  public set rdpAdminName(value: string) {
    this._rdpAdminName = value;
  }
  public resetRdpAdminName() {
    this._rdpAdminName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpAdminNameInput() {
    return this._rdpAdminName;
  }

  // rdp_admin_pwd - computed: false, optional: true, required: false
  private _rdpAdminPwd?: string; 
  public get rdpAdminPwd() {
    return this.getStringAttribute('rdp_admin_pwd');
  }
  public set rdpAdminPwd(value: string) {
    this._rdpAdminPwd = value;
  }
  public resetRdpAdminPwd() {
    this._rdpAdminPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpAdminPwdInput() {
    return this._rdpAdminPwd;
  }

  // rdp_host_name - computed: false, optional: true, required: false
  private _rdpHostName?: string; 
  public get rdpHostName() {
    return this.getStringAttribute('rdp_host_name');
  }
  public set rdpHostName(value: string) {
    this._rdpHostName = value;
  }
  public resetRdpHostName() {
    this._rdpHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpHostNameInput() {
    return this._rdpHostName;
  }

  // rdp_host_port - computed: false, optional: true, required: false
  private _rdpHostPort?: string; 
  public get rdpHostPort() {
    return this.getStringAttribute('rdp_host_port');
  }
  public set rdpHostPort(value: string) {
    this._rdpHostPort = value;
  }
  public resetRdpHostPort() {
    this._rdpHostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpHostPortInput() {
    return this._rdpHostPort;
  }

  // rdp_user_groups - computed: false, optional: true, required: false
  private _rdpUserGroups?: string; 
  public get rdpUserGroups() {
    return this.getStringAttribute('rdp_user_groups');
  }
  public set rdpUserGroups(value: string) {
    this._rdpUserGroups = value;
  }
  public resetRdpUserGroups() {
    this._rdpUserGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpUserGroupsInput() {
    return this._rdpUserGroups;
  }

  // secure_access_allow_external_user - computed: false, optional: true, required: false
  private _secureAccessAllowExternalUser?: boolean | cdktf.IResolvable; 
  public get secureAccessAllowExternalUser() {
    return this.getBooleanAttribute('secure_access_allow_external_user');
  }
  public set secureAccessAllowExternalUser(value: boolean | cdktf.IResolvable) {
    this._secureAccessAllowExternalUser = value;
  }
  public resetSecureAccessAllowExternalUser() {
    this._secureAccessAllowExternalUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessAllowExternalUserInput() {
    return this._secureAccessAllowExternalUser;
  }

  // secure_access_enable - computed: false, optional: true, required: false
  private _secureAccessEnable?: string; 
  public get secureAccessEnable() {
    return this.getStringAttribute('secure_access_enable');
  }
  public set secureAccessEnable(value: string) {
    this._secureAccessEnable = value;
  }
  public resetSecureAccessEnable() {
    this._secureAccessEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessEnableInput() {
    return this._secureAccessEnable;
  }

  // secure_access_host - computed: false, optional: true, required: false
  private _secureAccessHost?: string[]; 
  public get secureAccessHost() {
    return cdktf.Fn.tolist(this.getListAttribute('secure_access_host'));
  }
  public set secureAccessHost(value: string[]) {
    this._secureAccessHost = value;
  }
  public resetSecureAccessHost() {
    this._secureAccessHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessHostInput() {
    return this._secureAccessHost;
  }

  // secure_access_rdp_domain - computed: false, optional: true, required: false
  private _secureAccessRdpDomain?: string; 
  public get secureAccessRdpDomain() {
    return this.getStringAttribute('secure_access_rdp_domain');
  }
  public set secureAccessRdpDomain(value: string) {
    this._secureAccessRdpDomain = value;
  }
  public resetSecureAccessRdpDomain() {
    this._secureAccessRdpDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessRdpDomainInput() {
    return this._secureAccessRdpDomain;
  }

  // secure_access_rdp_user - computed: false, optional: true, required: false
  private _secureAccessRdpUser?: string; 
  public get secureAccessRdpUser() {
    return this.getStringAttribute('secure_access_rdp_user');
  }
  public set secureAccessRdpUser(value: string) {
    this._secureAccessRdpUser = value;
  }
  public resetSecureAccessRdpUser() {
    this._secureAccessRdpUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessRdpUserInput() {
    return this._secureAccessRdpUser;
  }

  // secure_access_web - computed: true, optional: true, required: false
  private _secureAccessWeb?: boolean | cdktf.IResolvable; 
  public get secureAccessWeb() {
    return this.getBooleanAttribute('secure_access_web');
  }
  public set secureAccessWeb(value: boolean | cdktf.IResolvable) {
    this._secureAccessWeb = value;
  }
  public resetSecureAccessWeb() {
    this._secureAccessWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebInput() {
    return this._secureAccessWeb;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // user_ttl - computed: false, optional: true, required: false
  private _userTtl?: string; 
  public get userTtl() {
    return this.getStringAttribute('user_ttl');
  }
  public set userTtl(value: string) {
    this._userTtl = value;
  }
  public resetUserTtl() {
    this._userTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTtlInput() {
    return this._userTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fixed_user_only: cdktf.stringToTerraform(this._fixedUserOnly),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      producer_encryption_key_name: cdktf.stringToTerraform(this._producerEncryptionKeyName),
      rdp_admin_name: cdktf.stringToTerraform(this._rdpAdminName),
      rdp_admin_pwd: cdktf.stringToTerraform(this._rdpAdminPwd),
      rdp_host_name: cdktf.stringToTerraform(this._rdpHostName),
      rdp_host_port: cdktf.stringToTerraform(this._rdpHostPort),
      rdp_user_groups: cdktf.stringToTerraform(this._rdpUserGroups),
      secure_access_allow_external_user: cdktf.booleanToTerraform(this._secureAccessAllowExternalUser),
      secure_access_enable: cdktf.stringToTerraform(this._secureAccessEnable),
      secure_access_host: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secureAccessHost),
      secure_access_rdp_domain: cdktf.stringToTerraform(this._secureAccessRdpDomain),
      secure_access_rdp_user: cdktf.stringToTerraform(this._secureAccessRdpUser),
      secure_access_web: cdktf.booleanToTerraform(this._secureAccessWeb),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fixed_user_only: {
        value: cdktf.stringToHclTerraform(this._fixedUserOnly),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      producer_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._producerEncryptionKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_admin_name: {
        value: cdktf.stringToHclTerraform(this._rdpAdminName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_admin_pwd: {
        value: cdktf.stringToHclTerraform(this._rdpAdminPwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_host_name: {
        value: cdktf.stringToHclTerraform(this._rdpHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_host_port: {
        value: cdktf.stringToHclTerraform(this._rdpHostPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_user_groups: {
        value: cdktf.stringToHclTerraform(this._rdpUserGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_allow_external_user: {
        value: cdktf.booleanToHclTerraform(this._secureAccessAllowExternalUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_access_enable: {
        value: cdktf.stringToHclTerraform(this._secureAccessEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_host: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secureAccessHost),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secure_access_rdp_domain: {
        value: cdktf.stringToHclTerraform(this._secureAccessRdpDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_rdp_user: {
        value: cdktf.stringToHclTerraform(this._secureAccessRdpUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_web: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ttl: {
        value: cdktf.stringToHclTerraform(this._userTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
