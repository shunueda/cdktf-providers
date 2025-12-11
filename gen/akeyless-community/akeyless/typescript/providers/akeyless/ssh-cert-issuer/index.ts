// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshCertIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Users allowed to fetch the certificate, e.g root,ubuntu
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#allowed_users SshCertIssuer#allowed_users}
  */
  readonly allowedUsers: string;
  /**
  * Protection from accidental deletion of this item, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#delete_protection SshCertIssuer#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#description SshCertIssuer#description}
  */
  readonly description?: string;
  /**
  * Signed certificates with extensions (key/val), e.g permit-port-forwarding=
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#extensions SshCertIssuer#extensions}
  */
  readonly extensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#id SshCertIssuer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SSH certificate issuer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#name SshCertIssuer#name}
  */
  readonly name: string;
  /**
  * Signed certificates with principal, e.g example_role1,example_role2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#principals SshCertIssuer#principals}
  */
  readonly principals?: string;
  /**
  * Bastion's SSH control API endpoint. E.g. https://my.bastion:9900
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#secure_access_bastion_api SshCertIssuer#secure_access_bastion_api}
  */
  readonly secureAccessBastionApi?: string;
  /**
  * Bastion's SSH server. E.g. my.bastion:22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#secure_access_bastion_ssh SshCertIssuer#secure_access_bastion_ssh}
  */
  readonly secureAccessBastionSsh?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#secure_access_enable SshCertIssuer#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Target servers for connections. (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#secure_access_host SshCertIssuer#secure_access_host}
  */
  readonly secureAccessHost?: string[];
  /**
  * SSH username to connect to target server, must be in 'Allowed Users' list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#secure_access_ssh_creds_user SshCertIssuer#secure_access_ssh_creds_user}
  */
  readonly secureAccessSshCredsUser?: string;
  /**
  * Use internal SSH Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#secure_access_use_internal_bastion SshCertIssuer#secure_access_use_internal_bastion}
  */
  readonly secureAccessUseInternalBastion?: boolean | cdktf.IResolvable;
  /**
  * A key to sign the certificate with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#signer_key_name SshCertIssuer#signer_key_name}
  */
  readonly signerKeyName: string;
  /**
  * List of the tags attached to this key. To specify multiple tags use argument multiple times: --tag Tag1 --tag Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#tags SshCertIssuer#tags}
  */
  readonly tags?: string[];
  /**
  * The requested Time To Live for the certificate, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#ttl SshCertIssuer#ttl}
  */
  readonly ttl: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer akeyless_ssh_cert_issuer}
*/
export class SshCertIssuer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_ssh_cert_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshCertIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshCertIssuer to import
  * @param importFromId The id of the existing SshCertIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshCertIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_ssh_cert_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/ssh_cert_issuer akeyless_ssh_cert_issuer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshCertIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: SshCertIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_ssh_cert_issuer',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedUsers = config.allowedUsers;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._extensions = config.extensions;
    this._id = config.id;
    this._name = config.name;
    this._principals = config.principals;
    this._secureAccessBastionApi = config.secureAccessBastionApi;
    this._secureAccessBastionSsh = config.secureAccessBastionSsh;
    this._secureAccessEnable = config.secureAccessEnable;
    this._secureAccessHost = config.secureAccessHost;
    this._secureAccessSshCredsUser = config.secureAccessSshCredsUser;
    this._secureAccessUseInternalBastion = config.secureAccessUseInternalBastion;
    this._signerKeyName = config.signerKeyName;
    this._tags = config.tags;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_users - computed: false, optional: false, required: true
  private _allowedUsers?: string; 
  public get allowedUsers() {
    return this.getStringAttribute('allowed_users');
  }
  public set allowedUsers(value: string) {
    this._allowedUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUsersInput() {
    return this._allowedUsers;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // description - computed: false, optional: true, required: false
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

  // extensions - computed: false, optional: true, required: false
  private _extensions?: { [key: string]: string }; 
  public get extensions() {
    return this.getStringMapAttribute('extensions');
  }
  public set extensions(value: { [key: string]: string }) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
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

  // principals - computed: false, optional: true, required: false
  private _principals?: string; 
  public get principals() {
    return this.getStringAttribute('principals');
  }
  public set principals(value: string) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // secure_access_bastion_api - computed: false, optional: true, required: false
  private _secureAccessBastionApi?: string; 
  public get secureAccessBastionApi() {
    return this.getStringAttribute('secure_access_bastion_api');
  }
  public set secureAccessBastionApi(value: string) {
    this._secureAccessBastionApi = value;
  }
  public resetSecureAccessBastionApi() {
    this._secureAccessBastionApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessBastionApiInput() {
    return this._secureAccessBastionApi;
  }

  // secure_access_bastion_ssh - computed: false, optional: true, required: false
  private _secureAccessBastionSsh?: string; 
  public get secureAccessBastionSsh() {
    return this.getStringAttribute('secure_access_bastion_ssh');
  }
  public set secureAccessBastionSsh(value: string) {
    this._secureAccessBastionSsh = value;
  }
  public resetSecureAccessBastionSsh() {
    this._secureAccessBastionSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessBastionSshInput() {
    return this._secureAccessBastionSsh;
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

  // secure_access_ssh_creds_user - computed: false, optional: true, required: false
  private _secureAccessSshCredsUser?: string; 
  public get secureAccessSshCredsUser() {
    return this.getStringAttribute('secure_access_ssh_creds_user');
  }
  public set secureAccessSshCredsUser(value: string) {
    this._secureAccessSshCredsUser = value;
  }
  public resetSecureAccessSshCredsUser() {
    this._secureAccessSshCredsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessSshCredsUserInput() {
    return this._secureAccessSshCredsUser;
  }

  // secure_access_use_internal_bastion - computed: false, optional: true, required: false
  private _secureAccessUseInternalBastion?: boolean | cdktf.IResolvable; 
  public get secureAccessUseInternalBastion() {
    return this.getBooleanAttribute('secure_access_use_internal_bastion');
  }
  public set secureAccessUseInternalBastion(value: boolean | cdktf.IResolvable) {
    this._secureAccessUseInternalBastion = value;
  }
  public resetSecureAccessUseInternalBastion() {
    this._secureAccessUseInternalBastion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessUseInternalBastionInput() {
    return this._secureAccessUseInternalBastion;
  }

  // signer_key_name - computed: false, optional: false, required: true
  private _signerKeyName?: string; 
  public get signerKeyName() {
    return this.getStringAttribute('signer_key_name');
  }
  public set signerKeyName(value: string) {
    this._signerKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signerKeyNameInput() {
    return this._signerKeyName;
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

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_users: cdktf.stringToTerraform(this._allowedUsers),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      extensions: cdktf.hashMapper(cdktf.stringToTerraform)(this._extensions),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      principals: cdktf.stringToTerraform(this._principals),
      secure_access_bastion_api: cdktf.stringToTerraform(this._secureAccessBastionApi),
      secure_access_bastion_ssh: cdktf.stringToTerraform(this._secureAccessBastionSsh),
      secure_access_enable: cdktf.stringToTerraform(this._secureAccessEnable),
      secure_access_host: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secureAccessHost),
      secure_access_ssh_creds_user: cdktf.stringToTerraform(this._secureAccessSshCredsUser),
      secure_access_use_internal_bastion: cdktf.booleanToTerraform(this._secureAccessUseInternalBastion),
      signer_key_name: cdktf.stringToTerraform(this._signerKeyName),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_users: {
        value: cdktf.stringToHclTerraform(this._allowedUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extensions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extensions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      principals: {
        value: cdktf.stringToHclTerraform(this._principals),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_bastion_api: {
        value: cdktf.stringToHclTerraform(this._secureAccessBastionApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_bastion_ssh: {
        value: cdktf.stringToHclTerraform(this._secureAccessBastionSsh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      secure_access_ssh_creds_user: {
        value: cdktf.stringToHclTerraform(this._secureAccessSshCredsUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_use_internal_bastion: {
        value: cdktf.booleanToHclTerraform(this._secureAccessUseInternalBastion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      signer_key_name: {
        value: cdktf.stringToHclTerraform(this._signerKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
