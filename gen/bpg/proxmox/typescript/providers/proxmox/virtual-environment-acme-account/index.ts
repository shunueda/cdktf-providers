// https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_acme_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentAcmeAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The contact email addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_acme_account#contact VirtualEnvironmentAcmeAccount#contact}
  */
  readonly contact: string;
  /**
  * The URL of the ACME CA directory endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_acme_account#directory VirtualEnvironmentAcmeAccount#directory}
  */
  readonly directory?: string;
  /**
  * The HMAC key for External Account Binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_acme_account#eab_hmac_key VirtualEnvironmentAcmeAccount#eab_hmac_key}
  */
  readonly eabHmacKey?: string;
  /**
  * The Key Identifier for External Account Binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_acme_account#eab_kid VirtualEnvironmentAcmeAccount#eab_kid}
  */
  readonly eabKid?: string;
  /**
  * The ACME account config file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_acme_account#name VirtualEnvironmentAcmeAccount#name}
  */
  readonly name?: string;
  /**
  * The URL of CA TermsOfService - setting this indicates agreement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_acme_account#tos VirtualEnvironmentAcmeAccount#tos}
  */
  readonly tos?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_acme_account proxmox_virtual_environment_acme_account}
*/
export class VirtualEnvironmentAcmeAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_acme_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentAcmeAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentAcmeAccount to import
  * @param importFromId The id of the existing VirtualEnvironmentAcmeAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_acme_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentAcmeAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_acme_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/resources/virtual_environment_acme_account proxmox_virtual_environment_acme_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentAcmeAccountConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentAcmeAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_acme_account',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.87.0',
        providerVersionConstraint: '0.87.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contact = config.contact;
    this._directory = config.directory;
    this._eabHmacKey = config.eabHmacKey;
    this._eabKid = config.eabKid;
    this._name = config.name;
    this._tos = config.tos;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact - computed: false, optional: false, required: true
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // eab_hmac_key - computed: false, optional: true, required: false
  private _eabHmacKey?: string; 
  public get eabHmacKey() {
    return this.getStringAttribute('eab_hmac_key');
  }
  public set eabHmacKey(value: string) {
    this._eabHmacKey = value;
  }
  public resetEabHmacKey() {
    this._eabHmacKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabHmacKeyInput() {
    return this._eabHmacKey;
  }

  // eab_kid - computed: false, optional: true, required: false
  private _eabKid?: string; 
  public get eabKid() {
    return this.getStringAttribute('eab_kid');
  }
  public set eabKid(value: string) {
    this._eabKid = value;
  }
  public resetEabKid() {
    this._eabKid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabKidInput() {
    return this._eabKid;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact: cdktf.stringToTerraform(this._contact),
      directory: cdktf.stringToTerraform(this._directory),
      eab_hmac_key: cdktf.stringToTerraform(this._eabHmacKey),
      eab_kid: cdktf.stringToTerraform(this._eabKid),
      name: cdktf.stringToTerraform(this._name),
      tos: cdktf.stringToTerraform(this._tos),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact: {
        value: cdktf.stringToHclTerraform(this._contact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eab_hmac_key: {
        value: cdktf.stringToHclTerraform(this._eabHmacKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eab_kid: {
        value: cdktf.stringToHclTerraform(this._eabKid),
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
      tos: {
        value: cdktf.stringToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
