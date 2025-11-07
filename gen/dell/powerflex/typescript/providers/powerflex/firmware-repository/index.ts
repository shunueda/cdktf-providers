// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/firmware_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirmwareRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to approve the unsigned file or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/firmware_repository#approve FirmwareRepository#approve}
  */
  readonly approve?: boolean | cdktf.IResolvable;
  /**
  * Password is only used if specifying a CIFS share Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/firmware_repository#password FirmwareRepository#password}
  */
  readonly password?: string;
  /**
  * Specfies the path from where it will download the compliance file. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/firmware_repository#source_location FirmwareRepository#source_location}
  */
  readonly sourceLocation: string;
  /**
  * Describes the time in minutes to timeout the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/firmware_repository#timeout FirmwareRepository#timeout}
  */
  readonly timeout?: number;
  /**
  * Username is only used if specifying a CIFS share Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/firmware_repository#username FirmwareRepository#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/firmware_repository powerflex_firmware_repository}
*/
export class FirmwareRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_firmware_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirmwareRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirmwareRepository to import
  * @param importFromId The id of the existing FirmwareRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/firmware_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirmwareRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_firmware_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/firmware_repository powerflex_firmware_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirmwareRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: FirmwareRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_firmware_repository',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approve = config.approve;
    this._password = config.password;
    this._sourceLocation = config.sourceLocation;
    this._timeout = config.timeout;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approve - computed: true, optional: true, required: false
  private _approve?: boolean | cdktf.IResolvable; 
  public get approve() {
    return this.getBooleanAttribute('approve');
  }
  public set approve(value: boolean | cdktf.IResolvable) {
    this._approve = value;
  }
  public resetApprove() {
    this._approve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approveInput() {
    return this._approve;
  }

  // default_catalog - computed: true, optional: false, required: false
  public get defaultCatalog() {
    return this.getBooleanAttribute('default_catalog');
  }

  // disk_location - computed: true, optional: false, required: false
  public get diskLocation() {
    return this.getStringAttribute('disk_location');
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // source_location - computed: false, optional: false, required: true
  private _sourceLocation?: string; 
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }
  public set sourceLocation(value: string) {
    this._sourceLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationInput() {
    return this._sourceLocation;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
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
      approve: cdktf.booleanToTerraform(this._approve),
      password: cdktf.stringToTerraform(this._password),
      source_location: cdktf.stringToTerraform(this._sourceLocation),
      timeout: cdktf.numberToTerraform(this._timeout),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approve: {
        value: cdktf.booleanToHclTerraform(this._approve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_location: {
        value: cdktf.stringToHclTerraform(this._sourceLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
