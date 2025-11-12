// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/sss_user_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SssUserV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/sss_user_v1#id SssUserV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/sss_user_v1#login_id SssUserV1#login_id}
  */
  readonly loginId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/sss_user_v1#mail_address SssUserV1#mail_address}
  */
  readonly mailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/sss_user_v1#notify_password SssUserV1#notify_password}
  */
  readonly notifyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/sss_user_v1#password SssUserV1#password}
  */
  readonly password?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/sss_user_v1 ecl_sss_user_v1}
*/
export class SssUserV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_sss_user_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SssUserV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SssUserV1 to import
  * @param importFromId The id of the existing SssUserV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/sss_user_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SssUserV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_sss_user_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/sss_user_v1 ecl_sss_user_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SssUserV1Config
  */
  public constructor(scope: Construct, id: string, config: SssUserV1Config) {
    super(scope, id, {
      terraformResourceType: 'ecl_sss_user_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1',
        providerVersionConstraint: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._loginId = config.loginId;
    this._mailAddress = config.mailAddress;
    this._notifyPassword = config.notifyPassword;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // brand_id - computed: true, optional: false, required: false
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }

  // contract_id - computed: true, optional: false, required: false
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }

  // contract_owner - computed: true, optional: false, required: false
  public get contractOwner() {
    return this.getBooleanAttribute('contract_owner');
  }

  // external_reference_id - computed: true, optional: false, required: false
  public get externalReferenceId() {
    return this.getStringAttribute('external_reference_id');
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

  // keystone_endpoint - computed: true, optional: false, required: false
  public get keystoneEndpoint() {
    return this.getStringAttribute('keystone_endpoint');
  }

  // keystone_name - computed: true, optional: false, required: false
  public get keystoneName() {
    return this.getStringAttribute('keystone_name');
  }

  // keystone_password - computed: true, optional: false, required: false
  public get keystonePassword() {
    return this.getStringAttribute('keystone_password');
  }

  // login_id - computed: false, optional: false, required: true
  private _loginId?: string; 
  public get loginId() {
    return this.getStringAttribute('login_id');
  }
  public set loginId(value: string) {
    this._loginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginIdInput() {
    return this._loginId;
  }

  // login_integration - computed: true, optional: false, required: false
  public get loginIntegration() {
    return this.getStringAttribute('login_integration');
  }

  // mail_address - computed: false, optional: false, required: true
  private _mailAddress?: string; 
  public get mailAddress() {
    return this.getStringAttribute('mail_address');
  }
  public set mailAddress(value: string) {
    this._mailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mailAddressInput() {
    return this._mailAddress;
  }

  // notify_password - computed: false, optional: true, required: false
  private _notifyPassword?: string; 
  public get notifyPassword() {
    return this.getStringAttribute('notify_password');
  }
  public set notifyPassword(value: string) {
    this._notifyPassword = value;
  }
  public resetNotifyPassword() {
    this._notifyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyPasswordInput() {
    return this._notifyPassword;
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

  // sss_endpoint - computed: true, optional: false, required: false
  public get sssEndpoint() {
    return this.getStringAttribute('sss_endpoint');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      login_id: cdktf.stringToTerraform(this._loginId),
      mail_address: cdktf.stringToTerraform(this._mailAddress),
      notify_password: cdktf.stringToTerraform(this._notifyPassword),
      password: cdktf.stringToTerraform(this._password),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_id: {
        value: cdktf.stringToHclTerraform(this._loginId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mail_address: {
        value: cdktf.stringToHclTerraform(this._mailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_password: {
        value: cdktf.stringToHclTerraform(this._notifyPassword),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
