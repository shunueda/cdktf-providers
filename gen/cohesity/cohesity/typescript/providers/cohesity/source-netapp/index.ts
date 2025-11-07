// https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceNetappConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#allowed_ips SourceNetapp#allowed_ips}
  */
  readonly allowedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#backup_smb_volumes SourceNetapp#backup_smb_volumes}
  */
  readonly backupSmbVolumes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#disallowed_ips SourceNetapp#disallowed_ips}
  */
  readonly disallowedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#endpoint SourceNetapp#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#id SourceNetapp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#password SourceNetapp#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#smb_password SourceNetapp#smb_password}
  */
  readonly smbPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#smb_username SourceNetapp#smb_username}
  */
  readonly smbUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#source_type SourceNetapp#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#username SourceNetapp#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp cohesity_source_netapp}
*/
export class SourceNetapp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesity_source_netapp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceNetapp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceNetapp to import
  * @param importFromId The id of the existing SourceNetapp that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceNetapp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesity_source_netapp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_netapp cohesity_source_netapp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceNetappConfig
  */
  public constructor(scope: Construct, id: string, config: SourceNetappConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesity_source_netapp',
      terraformGeneratorMetadata: {
        providerName: 'cohesity',
        providerVersion: '2.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedIps = config.allowedIps;
    this._backupSmbVolumes = config.backupSmbVolumes;
    this._disallowedIps = config.disallowedIps;
    this._endpoint = config.endpoint;
    this._id = config.id;
    this._password = config.password;
    this._smbPassword = config.smbPassword;
    this._smbUsername = config.smbUsername;
    this._sourceType = config.sourceType;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ips - computed: false, optional: true, required: false
  private _allowedIps?: string[]; 
  public get allowedIps() {
    return this.getListAttribute('allowed_ips');
  }
  public set allowedIps(value: string[]) {
    this._allowedIps = value;
  }
  public resetAllowedIps() {
    this._allowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpsInput() {
    return this._allowedIps;
  }

  // backup_smb_volumes - computed: false, optional: true, required: false
  private _backupSmbVolumes?: boolean | cdktf.IResolvable; 
  public get backupSmbVolumes() {
    return this.getBooleanAttribute('backup_smb_volumes');
  }
  public set backupSmbVolumes(value: boolean | cdktf.IResolvable) {
    this._backupSmbVolumes = value;
  }
  public resetBackupSmbVolumes() {
    this._backupSmbVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSmbVolumesInput() {
    return this._backupSmbVolumes;
  }

  // disallowed_ips - computed: false, optional: true, required: false
  private _disallowedIps?: string[]; 
  public get disallowedIps() {
    return this.getListAttribute('disallowed_ips');
  }
  public set disallowedIps(value: string[]) {
    this._disallowedIps = value;
  }
  public resetDisallowedIps() {
    this._disallowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedIpsInput() {
    return this._disallowedIps;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // smb_password - computed: false, optional: true, required: false
  private _smbPassword?: string; 
  public get smbPassword() {
    return this.getStringAttribute('smb_password');
  }
  public set smbPassword(value: string) {
    this._smbPassword = value;
  }
  public resetSmbPassword() {
    this._smbPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbPasswordInput() {
    return this._smbPassword;
  }

  // smb_username - computed: false, optional: true, required: false
  private _smbUsername?: string; 
  public get smbUsername() {
    return this.getStringAttribute('smb_username');
  }
  public set smbUsername(value: string) {
    this._smbUsername = value;
  }
  public resetSmbUsername() {
    this._smbUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbUsernameInput() {
    return this._smbUsername;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIps),
      backup_smb_volumes: cdktf.booleanToTerraform(this._backupSmbVolumes),
      disallowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disallowedIps),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      smb_password: cdktf.stringToTerraform(this._smbPassword),
      smb_username: cdktf.stringToTerraform(this._smbUsername),
      source_type: cdktf.stringToTerraform(this._sourceType),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backup_smb_volumes: {
        value: cdktf.booleanToHclTerraform(this._backupSmbVolumes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disallowed_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disallowedIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smb_password: {
        value: cdktf.stringToHclTerraform(this._smbPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smb_username: {
        value: cdktf.stringToHclTerraform(this._smbUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
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
