// https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageSftpConfig extends cdktf.TerraformMetaArguments {
  /**
  * An client id of new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#client_id StorageSftp#client_id}
  */
  readonly clientId?: number;
  /**
  * A http sftp entry point for new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#generated_http_endpoint StorageSftp#generated_http_endpoint}
  */
  readonly generatedHttpEndpoint?: string;
  /**
  * An auto generated sftp password for new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#generated_password StorageSftp#generated_password}
  */
  readonly generatedPassword?: boolean | cdktf.IResolvable;
  /**
  * A ssh sftp entry point for new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#generated_sftp_endpoint StorageSftp#generated_sftp_endpoint}
  */
  readonly generatedSftpEndpoint?: string;
  /**
  * A expires date of storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#http_expires_header_value StorageSftp#http_expires_header_value}
  */
  readonly httpExpiresHeaderValue?: string;
  /**
  * An alias of storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#http_servername_alias StorageSftp#http_servername_alias}
  */
  readonly httpServernameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#id StorageSftp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A location of new storage resource. One of (ams, sin, fra, mia)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#location StorageSftp#location}
  */
  readonly location: string;
  /**
  * A name of new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#name StorageSftp#name}
  */
  readonly name: string;
  /**
  * A sftp password for new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#password StorageSftp#password}
  */
  readonly password?: string;
  /**
  * An ssh keys IDs to link with new sftp storage resource only. https://storage.gcore.com/ssh-key/list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#ssh_key_id StorageSftp#ssh_key_id}
  */
  readonly sshKeyId?: number[];
  /**
  * An id of new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#storage_id StorageSftp#storage_id}
  */
  readonly storageId?: number;
  /**
  * A temporary flag. An internal cheat, to skip update ssh keys. Skip it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#update_after_create StorageSftp#update_after_create}
  */
  readonly updateAfterCreate?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp gcore_storage_sftp}
*/
export class StorageSftp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_storage_sftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageSftp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageSftp to import
  * @param importFromId The id of the existing StorageSftp that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageSftp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_storage_sftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/storage_sftp gcore_storage_sftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageSftpConfig
  */
  public constructor(scope: Construct, id: string, config: StorageSftpConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_storage_sftp',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._generatedHttpEndpoint = config.generatedHttpEndpoint;
    this._generatedPassword = config.generatedPassword;
    this._generatedSftpEndpoint = config.generatedSftpEndpoint;
    this._httpExpiresHeaderValue = config.httpExpiresHeaderValue;
    this._httpServernameAlias = config.httpServernameAlias;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._password = config.password;
    this._sshKeyId = config.sshKeyId;
    this._storageId = config.storageId;
    this._updateAfterCreate = config.updateAfterCreate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: true, required: false
  private _clientId?: number; 
  public get clientId() {
    return this.getNumberAttribute('client_id');
  }
  public set clientId(value: number) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // generated_http_endpoint - computed: true, optional: true, required: false
  private _generatedHttpEndpoint?: string; 
  public get generatedHttpEndpoint() {
    return this.getStringAttribute('generated_http_endpoint');
  }
  public set generatedHttpEndpoint(value: string) {
    this._generatedHttpEndpoint = value;
  }
  public resetGeneratedHttpEndpoint() {
    this._generatedHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedHttpEndpointInput() {
    return this._generatedHttpEndpoint;
  }

  // generated_password - computed: false, optional: true, required: false
  private _generatedPassword?: boolean | cdktf.IResolvable; 
  public get generatedPassword() {
    return this.getBooleanAttribute('generated_password');
  }
  public set generatedPassword(value: boolean | cdktf.IResolvable) {
    this._generatedPassword = value;
  }
  public resetGeneratedPassword() {
    this._generatedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedPasswordInput() {
    return this._generatedPassword;
  }

  // generated_sftp_endpoint - computed: true, optional: true, required: false
  private _generatedSftpEndpoint?: string; 
  public get generatedSftpEndpoint() {
    return this.getStringAttribute('generated_sftp_endpoint');
  }
  public set generatedSftpEndpoint(value: string) {
    this._generatedSftpEndpoint = value;
  }
  public resetGeneratedSftpEndpoint() {
    this._generatedSftpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedSftpEndpointInput() {
    return this._generatedSftpEndpoint;
  }

  // http_expires_header_value - computed: false, optional: true, required: false
  private _httpExpiresHeaderValue?: string; 
  public get httpExpiresHeaderValue() {
    return this.getStringAttribute('http_expires_header_value');
  }
  public set httpExpiresHeaderValue(value: string) {
    this._httpExpiresHeaderValue = value;
  }
  public resetHttpExpiresHeaderValue() {
    this._httpExpiresHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpExpiresHeaderValueInput() {
    return this._httpExpiresHeaderValue;
  }

  // http_servername_alias - computed: false, optional: true, required: false
  private _httpServernameAlias?: string; 
  public get httpServernameAlias() {
    return this.getStringAttribute('http_servername_alias');
  }
  public set httpServernameAlias(value: string) {
    this._httpServernameAlias = value;
  }
  public resetHttpServernameAlias() {
    this._httpServernameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServernameAliasInput() {
    return this._httpServernameAlias;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // ssh_key_id - computed: false, optional: true, required: false
  private _sshKeyId?: number[]; 
  public get sshKeyId() {
    return this.getNumberListAttribute('ssh_key_id');
  }
  public set sshKeyId(value: number[]) {
    this._sshKeyId = value;
  }
  public resetSshKeyId() {
    this._sshKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyIdInput() {
    return this._sshKeyId;
  }

  // storage_id - computed: true, optional: true, required: false
  private _storageId?: number; 
  public get storageId() {
    return this.getNumberAttribute('storage_id');
  }
  public set storageId(value: number) {
    this._storageId = value;
  }
  public resetStorageId() {
    this._storageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // update_after_create - computed: true, optional: true, required: false
  private _updateAfterCreate?: boolean | cdktf.IResolvable; 
  public get updateAfterCreate() {
    return this.getBooleanAttribute('update_after_create');
  }
  public set updateAfterCreate(value: boolean | cdktf.IResolvable) {
    this._updateAfterCreate = value;
  }
  public resetUpdateAfterCreate() {
    this._updateAfterCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAfterCreateInput() {
    return this._updateAfterCreate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.numberToTerraform(this._clientId),
      generated_http_endpoint: cdktf.stringToTerraform(this._generatedHttpEndpoint),
      generated_password: cdktf.booleanToTerraform(this._generatedPassword),
      generated_sftp_endpoint: cdktf.stringToTerraform(this._generatedSftpEndpoint),
      http_expires_header_value: cdktf.stringToTerraform(this._httpExpiresHeaderValue),
      http_servername_alias: cdktf.stringToTerraform(this._httpServernameAlias),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      ssh_key_id: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sshKeyId),
      storage_id: cdktf.numberToTerraform(this._storageId),
      update_after_create: cdktf.booleanToTerraform(this._updateAfterCreate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.numberToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      generated_http_endpoint: {
        value: cdktf.stringToHclTerraform(this._generatedHttpEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generated_password: {
        value: cdktf.booleanToHclTerraform(this._generatedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      generated_sftp_endpoint: {
        value: cdktf.stringToHclTerraform(this._generatedSftpEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_expires_header_value: {
        value: cdktf.stringToHclTerraform(this._httpExpiresHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_servername_alias: {
        value: cdktf.stringToHclTerraform(this._httpServernameAlias),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_id: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sshKeyId),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      storage_id: {
        value: cdktf.numberToHclTerraform(this._storageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_after_create: {
        value: cdktf.booleanToHclTerraform(this._updateAfterCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
