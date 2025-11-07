// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_kms_wallet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformKmsWalletConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional JSON object containing configuration applicable to the wallet type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_kms_wallet#config_json PlatformKmsWallet#config_json}
  */
  readonly configJson?: string;
  /**
  * Optional JSON object containing credentials applicable to the wallet type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_kms_wallet#creds_json PlatformKmsWallet#creds_json}
  */
  readonly credsJson?: string;
  /**
  * Environment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_kms_wallet#environment PlatformKmsWallet#environment}
  */
  readonly environment: string;
  /**
  * Wallet Display Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_kms_wallet#name PlatformKmsWallet#name}
  */
  readonly name: string;
  /**
  * Key Manager Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_kms_wallet#service PlatformKmsWallet#service}
  */
  readonly service: string;
  /**
  * Wallet Type. Options include `hdwallet`, `awscloudhsm`, `awsKms`, `azurekeyvault`, `fireblocks`, `gcpKms`, `hashicorp`, and `remotemodule`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_kms_wallet#type PlatformKmsWallet#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_kms_wallet kaleido_platform_kms_wallet}
*/
export class PlatformKmsWallet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_kms_wallet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformKmsWallet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformKmsWallet to import
  * @param importFromId The id of the existing PlatformKmsWallet that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_kms_wallet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformKmsWallet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_kms_wallet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_kms_wallet kaleido_platform_kms_wallet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformKmsWalletConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformKmsWalletConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_kms_wallet',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configJson = config.configJson;
    this._credsJson = config.credsJson;
    this._environment = config.environment;
    this._name = config.name;
    this._service = config.service;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_json - computed: true, optional: true, required: false
  private _configJson?: string; 
  public get configJson() {
    return this.getStringAttribute('config_json');
  }
  public set configJson(value: string) {
    this._configJson = value;
  }
  public resetConfigJson() {
    this._configJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configJsonInput() {
    return this._configJson;
  }

  // creds_json - computed: true, optional: true, required: false
  private _credsJson?: string; 
  public get credsJson() {
    return this.getStringAttribute('creds_json');
  }
  public set credsJson(value: string) {
    this._credsJson = value;
  }
  public resetCredsJson() {
    this._credsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credsJsonInput() {
    return this._credsJson;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_json: cdktf.stringToTerraform(this._configJson),
      creds_json: cdktf.stringToTerraform(this._credsJson),
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.stringToTerraform(this._service),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_json: {
        value: cdktf.stringToHclTerraform(this._configJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creds_json: {
        value: cdktf.stringToHclTerraform(this._credsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
