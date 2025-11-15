// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The HashiCorp Vault secret mount path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/secret#hashicorp_vault_mount Secret#hashicorp_vault_mount}
  */
  readonly hashicorpVaultMount?: string;
  /**
  * The HashiCorp Vault secret path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/secret#hashicorp_vault_path Secret#hashicorp_vault_path}
  */
  readonly hashicorpVaultPath?: string;
  /**
  * The HashiCorp Vault secret version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/secret#hashicorp_vault_version Secret#hashicorp_vault_version}
  */
  readonly hashicorpVaultVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/secret#id Secret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/secret#name Secret#name}
  */
  readonly name: string;
  /**
  * The redacted secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/secret#secret Secret#secret}
  */
  readonly secret?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/secret rootly_secret}
*/
export class Secret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Secret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Secret to import
  * @param importFromId The id of the existing Secret that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Secret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/secret rootly_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretConfig
  */
  public constructor(scope: Construct, id: string, config: SecretConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_secret',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.8',
        providerVersionConstraint: '4.3.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hashicorpVaultMount = config.hashicorpVaultMount;
    this._hashicorpVaultPath = config.hashicorpVaultPath;
    this._hashicorpVaultVersion = config.hashicorpVaultVersion;
    this._id = config.id;
    this._name = config.name;
    this._secret = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hashicorp_vault_mount - computed: true, optional: true, required: false
  private _hashicorpVaultMount?: string; 
  public get hashicorpVaultMount() {
    return this.getStringAttribute('hashicorp_vault_mount');
  }
  public set hashicorpVaultMount(value: string) {
    this._hashicorpVaultMount = value;
  }
  public resetHashicorpVaultMount() {
    this._hashicorpVaultMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultMountInput() {
    return this._hashicorpVaultMount;
  }

  // hashicorp_vault_path - computed: true, optional: true, required: false
  private _hashicorpVaultPath?: string; 
  public get hashicorpVaultPath() {
    return this.getStringAttribute('hashicorp_vault_path');
  }
  public set hashicorpVaultPath(value: string) {
    this._hashicorpVaultPath = value;
  }
  public resetHashicorpVaultPath() {
    this._hashicorpVaultPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultPathInput() {
    return this._hashicorpVaultPath;
  }

  // hashicorp_vault_version - computed: true, optional: true, required: false
  private _hashicorpVaultVersion?: number; 
  public get hashicorpVaultVersion() {
    return this.getNumberAttribute('hashicorp_vault_version');
  }
  public set hashicorpVaultVersion(value: number) {
    this._hashicorpVaultVersion = value;
  }
  public resetHashicorpVaultVersion() {
    this._hashicorpVaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultVersionInput() {
    return this._hashicorpVaultVersion;
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

  // secret - computed: true, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hashicorp_vault_mount: cdktf.stringToTerraform(this._hashicorpVaultMount),
      hashicorp_vault_path: cdktf.stringToTerraform(this._hashicorpVaultPath),
      hashicorp_vault_version: cdktf.numberToTerraform(this._hashicorpVaultVersion),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secret: cdktf.stringToTerraform(this._secret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hashicorp_vault_mount: {
        value: cdktf.stringToHclTerraform(this._hashicorpVaultMount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashicorp_vault_path: {
        value: cdktf.stringToHclTerraform(this._hashicorpVaultPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashicorp_vault_version: {
        value: cdktf.numberToHclTerraform(this._hashicorpVaultVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
