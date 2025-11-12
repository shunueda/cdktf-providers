// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileRemotePathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#annotation FileRemotePath#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#auth_type FileRemotePath#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#description FileRemotePath#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#host FileRemotePath#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#id FileRemotePath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#identity_private_key_contents FileRemotePath#identity_private_key_contents}
  */
  readonly identityPrivateKeyContents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#identity_private_key_passphrase FileRemotePath#identity_private_key_passphrase}
  */
  readonly identityPrivateKeyPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#name FileRemotePath#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#name_alias FileRemotePath#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#protocol FileRemotePath#protocol}
  */
  readonly protocol?: string;
  /**
  * Create relation to fv:ATg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#relation_file_rs_a_remote_host_to_epg FileRemotePath#relation_file_rs_a_remote_host_to_epg}
  */
  readonly relationFileRsARemoteHostToEpg?: string;
  /**
  * Create relation to fv:AREpP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#relation_file_rs_a_remote_host_to_epp FileRemotePath#relation_file_rs_a_remote_host_to_epp}
  */
  readonly relationFileRsARemoteHostToEpp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#remote_path FileRemotePath#remote_path}
  */
  readonly remotePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#remote_port FileRemotePath#remote_port}
  */
  readonly remotePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#user_name FileRemotePath#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#user_passwd FileRemotePath#user_passwd}
  */
  readonly userPasswd?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path aci_file_remote_path}
*/
export class FileRemotePath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_file_remote_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileRemotePath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileRemotePath to import
  * @param importFromId The id of the existing FileRemotePath that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileRemotePath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_file_remote_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/file_remote_path aci_file_remote_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileRemotePathConfig
  */
  public constructor(scope: Construct, id: string, config: FileRemotePathConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_file_remote_path',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._authType = config.authType;
    this._description = config.description;
    this._host = config.host;
    this._id = config.id;
    this._identityPrivateKeyContents = config.identityPrivateKeyContents;
    this._identityPrivateKeyPassphrase = config.identityPrivateKeyPassphrase;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._protocol = config.protocol;
    this._relationFileRsARemoteHostToEpg = config.relationFileRsARemoteHostToEpg;
    this._relationFileRsARemoteHostToEpp = config.relationFileRsARemoteHostToEpp;
    this._remotePath = config.remotePath;
    this._remotePort = config.remotePort;
    this._userName = config.userName;
    this._userPasswd = config.userPasswd;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // identity_private_key_contents - computed: true, optional: true, required: false
  private _identityPrivateKeyContents?: string; 
  public get identityPrivateKeyContents() {
    return this.getStringAttribute('identity_private_key_contents');
  }
  public set identityPrivateKeyContents(value: string) {
    this._identityPrivateKeyContents = value;
  }
  public resetIdentityPrivateKeyContents() {
    this._identityPrivateKeyContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPrivateKeyContentsInput() {
    return this._identityPrivateKeyContents;
  }

  // identity_private_key_passphrase - computed: true, optional: true, required: false
  private _identityPrivateKeyPassphrase?: string; 
  public get identityPrivateKeyPassphrase() {
    return this.getStringAttribute('identity_private_key_passphrase');
  }
  public set identityPrivateKeyPassphrase(value: string) {
    this._identityPrivateKeyPassphrase = value;
  }
  public resetIdentityPrivateKeyPassphrase() {
    this._identityPrivateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPrivateKeyPassphraseInput() {
    return this._identityPrivateKeyPassphrase;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // relation_file_rs_a_remote_host_to_epg - computed: false, optional: true, required: false
  private _relationFileRsARemoteHostToEpg?: string; 
  public get relationFileRsARemoteHostToEpg() {
    return this.getStringAttribute('relation_file_rs_a_remote_host_to_epg');
  }
  public set relationFileRsARemoteHostToEpg(value: string) {
    this._relationFileRsARemoteHostToEpg = value;
  }
  public resetRelationFileRsARemoteHostToEpg() {
    this._relationFileRsARemoteHostToEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFileRsARemoteHostToEpgInput() {
    return this._relationFileRsARemoteHostToEpg;
  }

  // relation_file_rs_a_remote_host_to_epp - computed: false, optional: true, required: false
  private _relationFileRsARemoteHostToEpp?: string; 
  public get relationFileRsARemoteHostToEpp() {
    return this.getStringAttribute('relation_file_rs_a_remote_host_to_epp');
  }
  public set relationFileRsARemoteHostToEpp(value: string) {
    this._relationFileRsARemoteHostToEpp = value;
  }
  public resetRelationFileRsARemoteHostToEpp() {
    this._relationFileRsARemoteHostToEpp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFileRsARemoteHostToEppInput() {
    return this._relationFileRsARemoteHostToEpp;
  }

  // remote_path - computed: true, optional: true, required: false
  private _remotePath?: string; 
  public get remotePath() {
    return this.getStringAttribute('remote_path');
  }
  public set remotePath(value: string) {
    this._remotePath = value;
  }
  public resetRemotePath() {
    this._remotePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePathInput() {
    return this._remotePath;
  }

  // remote_port - computed: true, optional: true, required: false
  private _remotePort?: string; 
  public get remotePort() {
    return this.getStringAttribute('remote_port');
  }
  public set remotePort(value: string) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_passwd - computed: true, optional: true, required: false
  private _userPasswd?: string; 
  public get userPasswd() {
    return this.getStringAttribute('user_passwd');
  }
  public set userPasswd(value: string) {
    this._userPasswd = value;
  }
  public resetUserPasswd() {
    this._userPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswdInput() {
    return this._userPasswd;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      auth_type: cdktf.stringToTerraform(this._authType),
      description: cdktf.stringToTerraform(this._description),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      identity_private_key_contents: cdktf.stringToTerraform(this._identityPrivateKeyContents),
      identity_private_key_passphrase: cdktf.stringToTerraform(this._identityPrivateKeyPassphrase),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      protocol: cdktf.stringToTerraform(this._protocol),
      relation_file_rs_a_remote_host_to_epg: cdktf.stringToTerraform(this._relationFileRsARemoteHostToEpg),
      relation_file_rs_a_remote_host_to_epp: cdktf.stringToTerraform(this._relationFileRsARemoteHostToEpp),
      remote_path: cdktf.stringToTerraform(this._remotePath),
      remote_port: cdktf.stringToTerraform(this._remotePort),
      user_name: cdktf.stringToTerraform(this._userName),
      user_passwd: cdktf.stringToTerraform(this._userPasswd),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      identity_private_key_contents: {
        value: cdktf.stringToHclTerraform(this._identityPrivateKeyContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_private_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._identityPrivateKeyPassphrase),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_file_rs_a_remote_host_to_epg: {
        value: cdktf.stringToHclTerraform(this._relationFileRsARemoteHostToEpg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_file_rs_a_remote_host_to_epp: {
        value: cdktf.stringToHclTerraform(this._relationFileRsARemoteHostToEpp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_path: {
        value: cdktf.stringToHclTerraform(this._remotePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_port: {
        value: cdktf.stringToHclTerraform(this._remotePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_passwd: {
        value: cdktf.stringToHclTerraform(this._userPasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
