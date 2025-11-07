// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BastionhostHostAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account#host_account_name BastionhostHostAccount#host_account_name}
  */
  readonly hostAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account#host_id BastionhostHostAccount#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account#id BastionhostHostAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account#instance_id BastionhostHostAccount#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account#pass_phrase BastionhostHostAccount#pass_phrase}
  */
  readonly passPhrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account#password BastionhostHostAccount#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account#private_key BastionhostHostAccount#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account#protocol_name BastionhostHostAccount#protocol_name}
  */
  readonly protocolName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account alicloud_bastionhost_host_account}
*/
export class BastionhostHostAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_bastionhost_host_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BastionhostHostAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BastionhostHostAccount to import
  * @param importFromId The id of the existing BastionhostHostAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BastionhostHostAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_bastionhost_host_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/bastionhost_host_account alicloud_bastionhost_host_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BastionhostHostAccountConfig
  */
  public constructor(scope: Construct, id: string, config: BastionhostHostAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_bastionhost_host_account',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostAccountName = config.hostAccountName;
    this._hostId = config.hostId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._passPhrase = config.passPhrase;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._protocolName = config.protocolName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_account_id - computed: true, optional: false, required: false
  public get hostAccountId() {
    return this.getStringAttribute('host_account_id');
  }

  // host_account_name - computed: false, optional: false, required: true
  private _hostAccountName?: string; 
  public get hostAccountName() {
    return this.getStringAttribute('host_account_name');
  }
  public set hostAccountName(value: string) {
    this._hostAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAccountNameInput() {
    return this._hostAccountName;
  }

  // host_id - computed: false, optional: false, required: true
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // pass_phrase - computed: false, optional: true, required: false
  private _passPhrase?: string; 
  public get passPhrase() {
    return this.getStringAttribute('pass_phrase');
  }
  public set passPhrase(value: string) {
    this._passPhrase = value;
  }
  public resetPassPhrase() {
    this._passPhrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passPhraseInput() {
    return this._passPhrase;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // protocol_name - computed: false, optional: false, required: true
  private _protocolName?: string; 
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }
  public set protocolName(value: string) {
    this._protocolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNameInput() {
    return this._protocolName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_account_name: cdktf.stringToTerraform(this._hostAccountName),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      pass_phrase: cdktf.stringToTerraform(this._passPhrase),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      protocol_name: cdktf.stringToTerraform(this._protocolName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_account_name: {
        value: cdktf.stringToHclTerraform(this._hostAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pass_phrase: {
        value: cdktf.stringToHclTerraform(this._passPhrase),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_name: {
        value: cdktf.stringToHclTerraform(this._protocolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
