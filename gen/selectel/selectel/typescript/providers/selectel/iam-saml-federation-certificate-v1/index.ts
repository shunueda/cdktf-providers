// https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_certificate_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamSamlFederationCertificateV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Certificate issued on the provider side. It must begin with -----BEGIN CERTIFICATE----- and end with -----END CERTIFICATE-----.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_certificate_v1#data IamSamlFederationCertificateV1#data}
  */
  readonly data: string;
  /**
  * Description of the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_certificate_v1#description IamSamlFederationCertificateV1#description}
  */
  readonly description?: string;
  /**
  * Federation ID to create Certificate for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_certificate_v1#federation_id IamSamlFederationCertificateV1#federation_id}
  */
  readonly federationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_certificate_v1#id IamSamlFederationCertificateV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_certificate_v1#name IamSamlFederationCertificateV1#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_certificate_v1 selectel_iam_saml_federation_certificate_v1}
*/
export class IamSamlFederationCertificateV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_iam_saml_federation_certificate_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamSamlFederationCertificateV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamSamlFederationCertificateV1 to import
  * @param importFromId The id of the existing IamSamlFederationCertificateV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_certificate_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamSamlFederationCertificateV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_iam_saml_federation_certificate_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_certificate_v1 selectel_iam_saml_federation_certificate_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamSamlFederationCertificateV1Config
  */
  public constructor(scope: Construct, id: string, config: IamSamlFederationCertificateV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_iam_saml_federation_certificate_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._data = config.data;
    this._description = config.description;
    this._federationId = config.federationId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // federation_id - computed: false, optional: false, required: true
  private _federationId?: string; 
  public get federationId() {
    return this.getStringAttribute('federation_id');
  }
  public set federationId(value: string) {
    this._federationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get federationIdInput() {
    return this._federationId;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data: cdktf.stringToTerraform(this._data),
      description: cdktf.stringToTerraform(this._description),
      federation_id: cdktf.stringToTerraform(this._federationId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federation_id: {
        value: cdktf.stringToHclTerraform(this._federationId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
