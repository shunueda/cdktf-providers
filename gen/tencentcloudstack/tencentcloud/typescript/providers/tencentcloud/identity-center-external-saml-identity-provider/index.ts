// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityCenterExternalSamlIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * IdP metadata document (Base64 encoded). Provided by an IdP that supports the SAML 2.0 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider#encoded_metadata_document IdentityCenterExternalSamlIdentityProvider#encoded_metadata_document}
  */
  readonly encodedMetadataDocument?: string;
  /**
  * IdP identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider#entity_id IdentityCenterExternalSamlIdentityProvider#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider#id IdentityCenterExternalSamlIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IdP login URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider#login_url IdentityCenterExternalSamlIdentityProvider#login_url}
  */
  readonly loginUrl?: string;
  /**
  * SSO enabling status. Valid values: Enabled, Disabled (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider#sso_status IdentityCenterExternalSamlIdentityProvider#sso_status}
  */
  readonly ssoStatus?: string;
  /**
  * X509 certificate in PEM format. If this parameter is specified, all existing certificates will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider#x509_certificate IdentityCenterExternalSamlIdentityProvider#x509_certificate}
  */
  readonly x509Certificate?: string;
  /**
  * Space ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider#zone_id IdentityCenterExternalSamlIdentityProvider#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider tencentcloud_identity_center_external_saml_identity_provider}
*/
export class IdentityCenterExternalSamlIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_identity_center_external_saml_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityCenterExternalSamlIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityCenterExternalSamlIdentityProvider to import
  * @param importFromId The id of the existing IdentityCenterExternalSamlIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityCenterExternalSamlIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_identity_center_external_saml_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/identity_center_external_saml_identity_provider tencentcloud_identity_center_external_saml_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityCenterExternalSamlIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityCenterExternalSamlIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_identity_center_external_saml_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._encodedMetadataDocument = config.encodedMetadataDocument;
    this._entityId = config.entityId;
    this._id = config.id;
    this._loginUrl = config.loginUrl;
    this._ssoStatus = config.ssoStatus;
    this._x509Certificate = config.x509Certificate;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_url - computed: true, optional: false, required: false
  public get acsUrl() {
    return this.getStringAttribute('acs_url');
  }

  // certificate_ids - computed: true, optional: false, required: false
  public get certificateIds() {
    return this.getListAttribute('certificate_ids');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // encoded_metadata_document - computed: true, optional: true, required: false
  private _encodedMetadataDocument?: string; 
  public get encodedMetadataDocument() {
    return this.getStringAttribute('encoded_metadata_document');
  }
  public set encodedMetadataDocument(value: string) {
    this._encodedMetadataDocument = value;
  }
  public resetEncodedMetadataDocument() {
    this._encodedMetadataDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedMetadataDocumentInput() {
    return this._encodedMetadataDocument;
  }

  // entity_id - computed: true, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
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

  // login_url - computed: true, optional: true, required: false
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  public resetLoginUrl() {
    this._loginUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
  }

  // sso_status - computed: true, optional: true, required: false
  private _ssoStatus?: string; 
  public get ssoStatus() {
    return this.getStringAttribute('sso_status');
  }
  public set ssoStatus(value: string) {
    this._ssoStatus = value;
  }
  public resetSsoStatus() {
    this._ssoStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoStatusInput() {
    return this._ssoStatus;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // x509_certificate - computed: true, optional: true, required: false
  private _x509Certificate?: string; 
  public get x509Certificate() {
    return this.getStringAttribute('x509_certificate');
  }
  public set x509Certificate(value: string) {
    this._x509Certificate = value;
  }
  public resetX509Certificate() {
    this._x509Certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertificateInput() {
    return this._x509Certificate;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encoded_metadata_document: cdktf.stringToTerraform(this._encodedMetadataDocument),
      entity_id: cdktf.stringToTerraform(this._entityId),
      id: cdktf.stringToTerraform(this._id),
      login_url: cdktf.stringToTerraform(this._loginUrl),
      sso_status: cdktf.stringToTerraform(this._ssoStatus),
      x509_certificate: cdktf.stringToTerraform(this._x509Certificate),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encoded_metadata_document: {
        value: cdktf.stringToHclTerraform(this._encodedMetadataDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
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
      login_url: {
        value: cdktf.stringToHclTerraform(this._loginUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_status: {
        value: cdktf.stringToHclTerraform(this._ssoStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x509_certificate: {
        value: cdktf.stringToHclTerraform(this._x509Certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
