// https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/lets_encrypt_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LetsEncryptCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/lets_encrypt_certificate#alternate_names LetsEncryptCertificate#alternate_names}
  */
  readonly alternateNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/lets_encrypt_certificate#auto_renew LetsEncryptCertificate#auto_renew}
  */
  readonly autoRenew: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/lets_encrypt_certificate#domain_id LetsEncryptCertificate#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/lets_encrypt_certificate#name LetsEncryptCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/lets_encrypt_certificate#signature_algorithm LetsEncryptCertificate#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/lets_encrypt_certificate dnsimple_lets_encrypt_certificate}
*/
export class LetsEncryptCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnsimple_lets_encrypt_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LetsEncryptCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LetsEncryptCertificate to import
  * @param importFromId The id of the existing LetsEncryptCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/lets_encrypt_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LetsEncryptCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnsimple_lets_encrypt_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsimple/dnsimple/2.0.0/docs/resources/lets_encrypt_certificate dnsimple_lets_encrypt_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LetsEncryptCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: LetsEncryptCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'dnsimple_lets_encrypt_certificate',
      terraformGeneratorMetadata: {
        providerName: 'dnsimple',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alternateNames = config.alternateNames;
    this._autoRenew = config.autoRenew;
    this._domainId = config.domainId;
    this._name = config.name;
    this._signatureAlgorithm = config.signatureAlgorithm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_names - computed: false, optional: true, required: false
  private _alternateNames?: string[]; 
  public get alternateNames() {
    return this.getListAttribute('alternate_names');
  }
  public set alternateNames(value: string[]) {
    this._alternateNames = value;
  }
  public resetAlternateNames() {
    this._alternateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNamesInput() {
    return this._alternateNames;
  }

  // authority_identifier - computed: true, optional: false, required: false
  public get authorityIdentifier() {
    return this.getStringAttribute('authority_identifier');
  }

  // auto_renew - computed: false, optional: false, required: true
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // years - computed: true, optional: false, required: false
  public get years() {
    return this.getNumberAttribute('years');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternate_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alternateNames),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      domain_id: cdktf.stringToTerraform(this._domainId),
      name: cdktf.stringToTerraform(this._name),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternate_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alternateNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
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
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
