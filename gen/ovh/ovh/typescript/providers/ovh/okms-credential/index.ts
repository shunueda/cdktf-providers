// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OkmsCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the certificate (ECDSA or RSA)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential#certificate_type OkmsCredential#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * Valid Certificate Signing Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential#csr OkmsCredential#csr}
  */
  readonly csr?: string;
  /**
  * Description of the credential (max 200)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential#description OkmsCredential#description}
  */
  readonly description?: string;
  /**
  * List of identity URNs associated with the credential (max 25)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential#identity_urns OkmsCredential#identity_urns}
  */
  readonly identityUrns: string[];
  /**
  * Name of the credential (max 50)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential#name OkmsCredential#name}
  */
  readonly name: string;
  /**
  * Okms ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential#okms_id OkmsCredential#okms_id}
  */
  readonly okmsId: string;
  /**
  * Validity in days (default 365, max 365)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential#validity OkmsCredential#validity}
  */
  readonly validity?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential ovh_okms_credential}
*/
export class OkmsCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_okms_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OkmsCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OkmsCredential to import
  * @param importFromId The id of the existing OkmsCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OkmsCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_okms_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/okms_credential ovh_okms_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OkmsCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: OkmsCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_okms_credential',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateType = config.certificateType;
    this._csr = config.csr;
    this._description = config.description;
    this._identityUrns = config.identityUrns;
    this._name = config.name;
    this._okmsId = config.okmsId;
    this._validity = config.validity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_pem - computed: true, optional: false, required: false
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }

  // certificate_type - computed: true, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // csr - computed: true, optional: true, required: false
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // description - computed: true, optional: true, required: false
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

  // expired_at - computed: true, optional: false, required: false
  public get expiredAt() {
    return this.getStringAttribute('expired_at');
  }

  // from_csr - computed: true, optional: false, required: false
  public get fromCsr() {
    return this.getBooleanAttribute('from_csr');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_urns - computed: false, optional: false, required: true
  private _identityUrns?: string[]; 
  public get identityUrns() {
    return this.getListAttribute('identity_urns');
  }
  public set identityUrns(value: string[]) {
    this._identityUrns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityUrnsInput() {
    return this._identityUrns;
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

  // okms_id - computed: false, optional: false, required: true
  private _okmsId?: string; 
  public get okmsId() {
    return this.getStringAttribute('okms_id');
  }
  public set okmsId(value: string) {
    this._okmsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get okmsIdInput() {
    return this._okmsId;
  }

  // private_key_pem - computed: true, optional: false, required: false
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // validity - computed: true, optional: true, required: false
  private _validity?: number; 
  public get validity() {
    return this.getNumberAttribute('validity');
  }
  public set validity(value: number) {
    this._validity = value;
  }
  public resetValidity() {
    this._validity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_type: cdktf.stringToTerraform(this._certificateType),
      csr: cdktf.stringToTerraform(this._csr),
      description: cdktf.stringToTerraform(this._description),
      identity_urns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identityUrns),
      name: cdktf.stringToTerraform(this._name),
      okms_id: cdktf.stringToTerraform(this._okmsId),
      validity: cdktf.numberToTerraform(this._validity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_type: {
        value: cdktf.stringToHclTerraform(this._certificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
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
      identity_urns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._identityUrns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okms_id: {
        value: cdktf.stringToHclTerraform(this._okmsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity: {
        value: cdktf.numberToHclTerraform(this._validity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
