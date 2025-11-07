// https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * An account binding ID in EJBCA to associate with issued certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate#account_binding_id Certificate#account_binding_id}
  */
  readonly accountBindingId?: string;
  /**
  * EJBCA Certificate Authority Name used to sign the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate#certificate_authority_name Certificate#certificate_authority_name}
  */
  readonly certificateAuthorityName: string;
  /**
  * EJBCA Certificate Profile Name to use for the certificate. Profile must exist in the connected EJBCA instance, and it must correspond to the format of the certificate_signing_request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate#certificate_profile_name Certificate#certificate_profile_name}
  */
  readonly certificateProfileName: string;
  /**
  * PKCS#10 PEM-encoded Certificate Signing Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate#certificate_signing_request Certificate#certificate_signing_request}
  */
  readonly certificateSigningRequest: string;
  /**
  * The resource will consider the certificate to have expired the given number of hours before its actual expiry time. This can be useful to renew the certificate in advance of the expiration of the current certificate. The advance update can only be performed if the resource is applied within the early renewal period. (default: `0`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate#early_renewal_hours Certificate#early_renewal_hours}
  */
  readonly earlyRenewalHours?: number;
  /**
  * Name of the EJBCA entity to create for the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate#end_entity_name Certificate#end_entity_name}
  */
  readonly endEntityName?: string;
  /**
  * EJBCA End Entity Profile Name to use for the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate#end_entity_profile_name Certificate#end_entity_profile_name}
  */
  readonly endEntityProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate ejbca_certificate}
*/
export class Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ejbca_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Certificate to import
  * @param importFromId The id of the existing Certificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Certificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ejbca_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/ejbca/1.1.0/docs/resources/certificate ejbca_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'ejbca_certificate',
      terraformGeneratorMetadata: {
        providerName: 'ejbca',
        providerVersion: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountBindingId = config.accountBindingId;
    this._certificateAuthorityName = config.certificateAuthorityName;
    this._certificateProfileName = config.certificateProfileName;
    this._certificateSigningRequest = config.certificateSigningRequest;
    this._earlyRenewalHours = config.earlyRenewalHours;
    this._endEntityName = config.endEntityName;
    this._endEntityProfileName = config.endEntityProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_binding_id - computed: false, optional: true, required: false
  private _accountBindingId?: string; 
  public get accountBindingId() {
    return this.getStringAttribute('account_binding_id');
  }
  public set accountBindingId(value: string) {
    this._accountBindingId = value;
  }
  public resetAccountBindingId() {
    this._accountBindingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountBindingIdInput() {
    return this._accountBindingId;
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_authority_name - computed: false, optional: false, required: true
  private _certificateAuthorityName?: string; 
  public get certificateAuthorityName() {
    return this.getStringAttribute('certificate_authority_name');
  }
  public set certificateAuthorityName(value: string) {
    this._certificateAuthorityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityNameInput() {
    return this._certificateAuthorityName;
  }

  // certificate_profile_name - computed: false, optional: false, required: true
  private _certificateProfileName?: string; 
  public get certificateProfileName() {
    return this.getStringAttribute('certificate_profile_name');
  }
  public set certificateProfileName(value: string) {
    this._certificateProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileNameInput() {
    return this._certificateProfileName;
  }

  // certificate_signing_request - computed: false, optional: false, required: true
  private _certificateSigningRequest?: string; 
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }
  public set certificateSigningRequest(value: string) {
    this._certificateSigningRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSigningRequestInput() {
    return this._certificateSigningRequest;
  }

  // chain - computed: true, optional: false, required: false
  public get chain() {
    return this.getStringAttribute('chain');
  }

  // early_renewal_hours - computed: true, optional: true, required: false
  private _earlyRenewalHours?: number; 
  public get earlyRenewalHours() {
    return this.getNumberAttribute('early_renewal_hours');
  }
  public set earlyRenewalHours(value: number) {
    this._earlyRenewalHours = value;
  }
  public resetEarlyRenewalHours() {
    this._earlyRenewalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyRenewalHoursInput() {
    return this._earlyRenewalHours;
  }

  // end_entity_name - computed: false, optional: true, required: false
  private _endEntityName?: string; 
  public get endEntityName() {
    return this.getStringAttribute('end_entity_name');
  }
  public set endEntityName(value: string) {
    this._endEntityName = value;
  }
  public resetEndEntityName() {
    this._endEntityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endEntityNameInput() {
    return this._endEntityName;
  }

  // end_entity_profile_name - computed: false, optional: false, required: true
  private _endEntityProfileName?: string; 
  public get endEntityProfileName() {
    return this.getStringAttribute('end_entity_profile_name');
  }
  public set endEntityProfileName(value: string) {
    this._endEntityProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endEntityProfileNameInput() {
    return this._endEntityProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_revoked - computed: true, optional: false, required: false
  public get isRevoked() {
    return this.getBooleanAttribute('is_revoked');
  }

  // issuer_dn - computed: true, optional: false, required: false
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }

  // ready_for_renewal - computed: true, optional: false, required: false
  public get readyForRenewal() {
    return this.getBooleanAttribute('ready_for_renewal');
  }

  // validity_end_time - computed: true, optional: false, required: false
  public get validityEndTime() {
    return this.getStringAttribute('validity_end_time');
  }

  // validity_start_time - computed: true, optional: false, required: false
  public get validityStartTime() {
    return this.getStringAttribute('validity_start_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_binding_id: cdktf.stringToTerraform(this._accountBindingId),
      certificate_authority_name: cdktf.stringToTerraform(this._certificateAuthorityName),
      certificate_profile_name: cdktf.stringToTerraform(this._certificateProfileName),
      certificate_signing_request: cdktf.stringToTerraform(this._certificateSigningRequest),
      early_renewal_hours: cdktf.numberToTerraform(this._earlyRenewalHours),
      end_entity_name: cdktf.stringToTerraform(this._endEntityName),
      end_entity_profile_name: cdktf.stringToTerraform(this._endEntityProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_binding_id: {
        value: cdktf.stringToHclTerraform(this._accountBindingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_authority_name: {
        value: cdktf.stringToHclTerraform(this._certificateAuthorityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_profile_name: {
        value: cdktf.stringToHclTerraform(this._certificateProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_signing_request: {
        value: cdktf.stringToHclTerraform(this._certificateSigningRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      early_renewal_hours: {
        value: cdktf.numberToHclTerraform(this._earlyRenewalHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_entity_name: {
        value: cdktf.stringToHclTerraform(this._endEntityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_entity_profile_name: {
        value: cdktf.stringToHclTerraform(this._endEntityProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
