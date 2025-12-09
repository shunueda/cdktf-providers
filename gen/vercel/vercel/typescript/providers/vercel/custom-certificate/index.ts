// https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/custom_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The certificate itself. Should be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/custom_certificate#certificate CustomCertificate#certificate}
  */
  readonly certificate: string;
  /**
  * The Certificate Authority root certificate such as one of Let's Encrypt's ISRG root certificates. This will be provided by your certificate issuer and is different to the core certificate. This may be included in their download process or available for download on their website. Should be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/custom_certificate#certificate_authority_certificate CustomCertificate#certificate_authority_certificate}
  */
  readonly certificateAuthorityCertificate: string;
  /**
  * The private key of the Certificate. Should be in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/custom_certificate#private_key CustomCertificate#private_key}
  */
  readonly privateKey: string;
  /**
  * The ID of the team the Custom Certificate should exist under. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/custom_certificate#team_id CustomCertificate#team_id}
  */
  readonly teamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/custom_certificate vercel_custom_certificate}
*/
export class CustomCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_custom_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomCertificate to import
  * @param importFromId The id of the existing CustomCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/custom_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_custom_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/custom_certificate vercel_custom_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CustomCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_custom_certificate',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.1.0',
        providerVersionConstraint: '4.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificate = config.certificate;
    this._certificateAuthorityCertificate = config.certificateAuthorityCertificate;
    this._privateKey = config.privateKey;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_authority_certificate - computed: false, optional: false, required: true
  private _certificateAuthorityCertificate?: string; 
  public get certificateAuthorityCertificate() {
    return this.getStringAttribute('certificate_authority_certificate');
  }
  public set certificateAuthorityCertificate(value: string) {
    this._certificateAuthorityCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityCertificateInput() {
    return this._certificateAuthorityCertificate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      certificate_authority_certificate: cdktf.stringToTerraform(this._certificateAuthorityCertificate),
      private_key: cdktf.stringToTerraform(this._privateKey),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_authority_certificate: {
        value: cdktf.stringToHclTerraform(this._certificateAuthorityCertificate),
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
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
