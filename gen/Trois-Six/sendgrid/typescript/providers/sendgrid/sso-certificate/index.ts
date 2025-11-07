// https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_certificate#id SsoCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An ID that matches an existing SSO integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_certificate#integration_id SsoCertificate#integration_id}
  */
  readonly integrationId: string;
  /**
  * This public certificate allows SendGrid to verify that
  * 					SAML requests it receives are signed by an IdP that it recognizes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_certificate#public_certificate SsoCertificate#public_certificate}
  */
  readonly publicCertificate: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_certificate sendgrid_sso_certificate}
*/
export class SsoCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_sso_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoCertificate to import
  * @param importFromId The id of the existing SsoCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_sso_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_certificate sendgrid_sso_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SsoCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_sso_certificate',
      terraformGeneratorMetadata: {
        providerName: 'sendgrid',
        providerVersion: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._integrationId = config.integrationId;
    this._publicCertificate = config.publicCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // public_certificate - computed: false, optional: false, required: true
  private _publicCertificate?: string; 
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }
  public set publicCertificate(value: string) {
    this._publicCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertificateInput() {
    return this._publicCertificate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      public_certificate: cdktf.stringToTerraform(this._publicCertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_certificate: {
        value: cdktf.stringToHclTerraform(this._publicCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
