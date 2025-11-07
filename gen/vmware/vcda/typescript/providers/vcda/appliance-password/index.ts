// https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/appliance_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppliancePasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address of the appliance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/appliance_password#appliance_ip AppliancePassword#appliance_ip}
  */
  readonly applianceIp: string;
  /**
  * The current password of the appliance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/appliance_password#current_password AppliancePassword#current_password}
  */
  readonly currentPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/appliance_password#id AppliancePassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The new password of the appliance. Note: This value is never returned on read. On creation, include either `new_password` or `password_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/appliance_password#new_password AppliancePassword#new_password}
  */
  readonly newPassword?: string;
  /**
  * The name of a file containing the appliance password. On creation, include either `password_file` or `new_password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/appliance_password#password_file AppliancePassword#password_file}
  */
  readonly passwordFile?: string;
  /**
  * The service certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/appliance_password#service_cert AppliancePassword#service_cert}
  */
  readonly serviceCert: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/appliance_password vcda_appliance_password}
*/
export class AppliancePassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcda_appliance_password";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppliancePassword resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppliancePassword to import
  * @param importFromId The id of the existing AppliancePassword that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/appliance_password#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppliancePassword to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcda_appliance_password", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/appliance_password vcda_appliance_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppliancePasswordConfig
  */
  public constructor(scope: Construct, id: string, config: AppliancePasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'vcda_appliance_password',
      terraformGeneratorMetadata: {
        providerName: 'vcda',
        providerVersion: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applianceIp = config.applianceIp;
    this._currentPassword = config.currentPassword;
    this._id = config.id;
    this._newPassword = config.newPassword;
    this._passwordFile = config.passwordFile;
    this._serviceCert = config.serviceCert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appliance_ip - computed: false, optional: false, required: true
  private _applianceIp?: string; 
  public get applianceIp() {
    return this.getStringAttribute('appliance_ip');
  }
  public set applianceIp(value: string) {
    this._applianceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceIpInput() {
    return this._applianceIp;
  }

  // current_password - computed: false, optional: false, required: true
  private _currentPassword?: string; 
  public get currentPassword() {
    return this.getStringAttribute('current_password');
  }
  public set currentPassword(value: string) {
    this._currentPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPasswordInput() {
    return this._currentPassword;
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

  // new_password - computed: false, optional: true, required: false
  private _newPassword?: string; 
  public get newPassword() {
    return this.getStringAttribute('new_password');
  }
  public set newPassword(value: string) {
    this._newPassword = value;
  }
  public resetNewPassword() {
    this._newPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordInput() {
    return this._newPassword;
  }

  // password_file - computed: false, optional: true, required: false
  private _passwordFile?: string; 
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }
  public set passwordFile(value: string) {
    this._passwordFile = value;
  }
  public resetPasswordFile() {
    this._passwordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileInput() {
    return this._passwordFile;
  }

  // root_password_expired - computed: true, optional: false, required: false
  public get rootPasswordExpired() {
    return this.getBooleanAttribute('root_password_expired');
  }

  // seconds_until_expiration - computed: true, optional: false, required: false
  public get secondsUntilExpiration() {
    return this.getNumberAttribute('seconds_until_expiration');
  }

  // service_cert - computed: false, optional: false, required: true
  private _serviceCert?: string; 
  public get serviceCert() {
    return this.getStringAttribute('service_cert');
  }
  public set serviceCert(value: string) {
    this._serviceCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCertInput() {
    return this._serviceCert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appliance_ip: cdktf.stringToTerraform(this._applianceIp),
      current_password: cdktf.stringToTerraform(this._currentPassword),
      id: cdktf.stringToTerraform(this._id),
      new_password: cdktf.stringToTerraform(this._newPassword),
      password_file: cdktf.stringToTerraform(this._passwordFile),
      service_cert: cdktf.stringToTerraform(this._serviceCert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appliance_ip: {
        value: cdktf.stringToHclTerraform(this._applianceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      current_password: {
        value: cdktf.stringToHclTerraform(this._currentPassword),
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
      new_password: {
        value: cdktf.stringToHclTerraform(this._newPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_file: {
        value: cdktf.stringToHclTerraform(this._passwordFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_cert: {
        value: cdktf.stringToHclTerraform(this._serviceCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
