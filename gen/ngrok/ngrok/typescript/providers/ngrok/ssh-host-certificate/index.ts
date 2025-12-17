// https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshHostCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * human-readable description of this SSH Host Certificate. optional, max 255 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate#description SshHostCertificate#description}
  */
  readonly description?: string;
  /**
  * arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate#metadata SshHostCertificate#metadata}
  */
  readonly metadata?: string;
  /**
  * the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate#principals SshHostCertificate#principals}
  */
  readonly principals?: string[];
  /**
  * a public key in OpenSSH Authorized Keys format that this certificate signs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate#public_key SshHostCertificate#public_key}
  */
  readonly publicKey: string;
  /**
  * the ssh certificate authority that is used to sign this ssh host certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate#ssh_certificate_authority_id SshHostCertificate#ssh_certificate_authority_id}
  */
  readonly sshCertificateAuthorityId: string;
  /**
  * the time when the ssh host certificate becomes valid, in RFC 3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate#valid_after SshHostCertificate#valid_after}
  */
  readonly validAfter?: string;
  /**
  * the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate#valid_until SshHostCertificate#valid_until}
  */
  readonly validUntil?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate ngrok_ssh_host_certificate}
*/
export class SshHostCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ngrok_ssh_host_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshHostCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshHostCertificate to import
  * @param importFromId The id of the existing SshHostCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshHostCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ngrok_ssh_host_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_host_certificate ngrok_ssh_host_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshHostCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SshHostCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'ngrok_ssh_host_certificate',
      terraformGeneratorMetadata: {
        providerName: 'ngrok',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._metadata = config.metadata;
    this._principals = config.principals;
    this._publicKey = config.publicKey;
    this._sshCertificateAuthorityId = config.sshCertificateAuthorityId;
    this._validAfter = config.validAfter;
    this._validUntil = config.validUntil;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // principals - computed: false, optional: true, required: false
  private _principals?: string[]; 
  public get principals() {
    return this.getListAttribute('principals');
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // ssh_certificate_authority_id - computed: false, optional: false, required: true
  private _sshCertificateAuthorityId?: string; 
  public get sshCertificateAuthorityId() {
    return this.getStringAttribute('ssh_certificate_authority_id');
  }
  public set sshCertificateAuthorityId(value: string) {
    this._sshCertificateAuthorityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertificateAuthorityIdInput() {
    return this._sshCertificateAuthorityId;
  }

  // valid_after - computed: true, optional: true, required: false
  private _validAfter?: string; 
  public get validAfter() {
    return this.getStringAttribute('valid_after');
  }
  public set validAfter(value: string) {
    this._validAfter = value;
  }
  public resetValidAfter() {
    this._validAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validAfterInput() {
    return this._validAfter;
  }

  // valid_until - computed: true, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      metadata: cdktf.stringToTerraform(this._metadata),
      principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._principals),
      public_key: cdktf.stringToTerraform(this._publicKey),
      ssh_certificate_authority_id: cdktf.stringToTerraform(this._sshCertificateAuthorityId),
      valid_after: cdktf.stringToTerraform(this._validAfter),
      valid_until: cdktf.stringToTerraform(this._validUntil),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._principals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_certificate_authority_id: {
        value: cdktf.stringToHclTerraform(this._sshCertificateAuthorityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_after: {
        value: cdktf.stringToHclTerraform(this._validAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_until: {
        value: cdktf.stringToHclTerraform(this._validUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
