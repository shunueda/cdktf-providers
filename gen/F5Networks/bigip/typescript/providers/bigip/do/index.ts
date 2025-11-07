// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DoConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP Address of BIGIP host to be used for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do#bigip_address Do#bigip_address}
  */
  readonly bigipAddress?: string;
  /**
  * Password of  BIGIP host to be used for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do#bigip_password Do#bigip_password}
  */
  readonly bigipPassword?: string;
  /**
  * Port number of BIGIP host to be used for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do#bigip_port Do#bigip_port}
  */
  readonly bigipPort?: string;
  /**
  * Enable to use an external authentication source (LDAP, TACACS, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do#bigip_token_auth Do#bigip_token_auth}
  */
  readonly bigipTokenAuth?: boolean | cdktf.IResolvable;
  /**
  * UserName of BIGIP host to be used for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do#bigip_user Do#bigip_user}
  */
  readonly bigipUser?: string;
  /**
  * DO json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do#do_json Do#do_json}
  */
  readonly doJson: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do#id Do#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * unique identifier for DO resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do#tenant_name Do#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * DO json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do#timeout Do#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do bigip_do}
*/
export class Do extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_do";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Do resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Do to import
  * @param importFromId The id of the existing Do that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Do to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_do", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/do bigip_do} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DoConfig
  */
  public constructor(scope: Construct, id: string, config: DoConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_do',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bigipAddress = config.bigipAddress;
    this._bigipPassword = config.bigipPassword;
    this._bigipPort = config.bigipPort;
    this._bigipTokenAuth = config.bigipTokenAuth;
    this._bigipUser = config.bigipUser;
    this._doJson = config.doJson;
    this._id = config.id;
    this._tenantName = config.tenantName;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bigip_address - computed: false, optional: true, required: false
  private _bigipAddress?: string; 
  public get bigipAddress() {
    return this.getStringAttribute('bigip_address');
  }
  public set bigipAddress(value: string) {
    this._bigipAddress = value;
  }
  public resetBigipAddress() {
    this._bigipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigipAddressInput() {
    return this._bigipAddress;
  }

  // bigip_password - computed: false, optional: true, required: false
  private _bigipPassword?: string; 
  public get bigipPassword() {
    return this.getStringAttribute('bigip_password');
  }
  public set bigipPassword(value: string) {
    this._bigipPassword = value;
  }
  public resetBigipPassword() {
    this._bigipPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigipPasswordInput() {
    return this._bigipPassword;
  }

  // bigip_port - computed: false, optional: true, required: false
  private _bigipPort?: string; 
  public get bigipPort() {
    return this.getStringAttribute('bigip_port');
  }
  public set bigipPort(value: string) {
    this._bigipPort = value;
  }
  public resetBigipPort() {
    this._bigipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigipPortInput() {
    return this._bigipPort;
  }

  // bigip_token_auth - computed: false, optional: true, required: false
  private _bigipTokenAuth?: boolean | cdktf.IResolvable; 
  public get bigipTokenAuth() {
    return this.getBooleanAttribute('bigip_token_auth');
  }
  public set bigipTokenAuth(value: boolean | cdktf.IResolvable) {
    this._bigipTokenAuth = value;
  }
  public resetBigipTokenAuth() {
    this._bigipTokenAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigipTokenAuthInput() {
    return this._bigipTokenAuth;
  }

  // bigip_user - computed: false, optional: true, required: false
  private _bigipUser?: string; 
  public get bigipUser() {
    return this.getStringAttribute('bigip_user');
  }
  public set bigipUser(value: string) {
    this._bigipUser = value;
  }
  public resetBigipUser() {
    this._bigipUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigipUserInput() {
    return this._bigipUser;
  }

  // do_json - computed: false, optional: false, required: true
  private _doJson?: string; 
  public get doJson() {
    return this.getStringAttribute('do_json');
  }
  public set doJson(value: string) {
    this._doJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get doJsonInput() {
    return this._doJson;
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

  // tenant_name - computed: false, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // timeout - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bigip_address: cdktf.stringToTerraform(this._bigipAddress),
      bigip_password: cdktf.stringToTerraform(this._bigipPassword),
      bigip_port: cdktf.stringToTerraform(this._bigipPort),
      bigip_token_auth: cdktf.booleanToTerraform(this._bigipTokenAuth),
      bigip_user: cdktf.stringToTerraform(this._bigipUser),
      do_json: cdktf.stringToTerraform(this._doJson),
      id: cdktf.stringToTerraform(this._id),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bigip_address: {
        value: cdktf.stringToHclTerraform(this._bigipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigip_password: {
        value: cdktf.stringToHclTerraform(this._bigipPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigip_port: {
        value: cdktf.stringToHclTerraform(this._bigipPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigip_token_auth: {
        value: cdktf.booleanToHclTerraform(this._bigipTokenAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bigip_user: {
        value: cdktf.stringToHclTerraform(this._bigipUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      do_json: {
        value: cdktf.stringToHclTerraform(this._doJson),
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
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
