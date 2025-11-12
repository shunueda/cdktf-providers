// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_saml_idp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationSamlIdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_saml_idp#organization_id OrganizationSamlIdp#organization_id}
  */
  readonly organizationId: string;
  /**
  * Dashboard will redirect users to this URL when they sign out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_saml_idp#slo_logout_url OrganizationSamlIdp#slo_logout_url}
  */
  readonly sloLogoutUrl?: string;
  /**
  * Fingerprint (SHA1) of the SAML certificate provided by your Identity Provider (IdP). This will be used for encryption / validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_saml_idp#x509cert_sha1_fingerprint OrganizationSamlIdp#x509cert_sha1_fingerprint}
  */
  readonly x509CertSha1Fingerprint: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_saml_idp meraki_organization_saml_idp}
*/
export class OrganizationSamlIdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_saml_idp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationSamlIdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationSamlIdp to import
  * @param importFromId The id of the existing OrganizationSamlIdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_saml_idp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationSamlIdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_saml_idp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_saml_idp meraki_organization_saml_idp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationSamlIdpConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationSamlIdpConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_saml_idp',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationId = config.organizationId;
    this._sloLogoutUrl = config.sloLogoutUrl;
    this._x509CertSha1Fingerprint = config.x509CertSha1Fingerprint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // slo_logout_url - computed: false, optional: true, required: false
  private _sloLogoutUrl?: string; 
  public get sloLogoutUrl() {
    return this.getStringAttribute('slo_logout_url');
  }
  public set sloLogoutUrl(value: string) {
    this._sloLogoutUrl = value;
  }
  public resetSloLogoutUrl() {
    this._sloLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloLogoutUrlInput() {
    return this._sloLogoutUrl;
  }

  // x509cert_sha1_fingerprint - computed: false, optional: false, required: true
  private _x509CertSha1Fingerprint?: string; 
  public get x509CertSha1Fingerprint() {
    return this.getStringAttribute('x509cert_sha1_fingerprint');
  }
  public set x509CertSha1Fingerprint(value: string) {
    this._x509CertSha1Fingerprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertSha1FingerprintInput() {
    return this._x509CertSha1Fingerprint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
      slo_logout_url: cdktf.stringToTerraform(this._sloLogoutUrl),
      x509cert_sha1_fingerprint: cdktf.stringToTerraform(this._x509CertSha1Fingerprint),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slo_logout_url: {
        value: cdktf.stringToHclTerraform(this._sloLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x509cert_sha1_fingerprint: {
        value: cdktf.stringToHclTerraform(this._x509CertSha1Fingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
