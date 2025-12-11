// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/enrollment_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaEnrollmentCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/enrollment_cert#id DataZpaEnrollmentCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/enrollment_cert#microtenant_id DataZpaEnrollmentCert#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/enrollment_cert#name DataZpaEnrollmentCert#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/enrollment_cert zpa_enrollment_cert}
*/
export class DataZpaEnrollmentCert extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_enrollment_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaEnrollmentCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaEnrollmentCert to import
  * @param importFromId The id of the existing DataZpaEnrollmentCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/enrollment_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaEnrollmentCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_enrollment_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/enrollment_cert zpa_enrollment_cert} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaEnrollmentCertConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaEnrollmentCertConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_enrollment_cert',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
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
    this._microtenantId = config.microtenantId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_signing - computed: true, optional: false, required: false
  public get allowSigning() {
    return this.getBooleanAttribute('allow_signing');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // client_cert_type - computed: true, optional: false, required: false
  public get clientCertType() {
    return this.getStringAttribute('client_cert_type');
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: true, required: false
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

  // issued_by - computed: true, optional: false, required: false
  public get issuedBy() {
    return this.getStringAttribute('issued_by');
  }

  // issued_to - computed: true, optional: false, required: false
  public get issuedTo() {
    return this.getStringAttribute('issued_to');
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // name - computed: false, optional: true, required: false
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

  // parent_cert_id - computed: true, optional: false, required: false
  public get parentCertId() {
    return this.getStringAttribute('parent_cert_id');
  }

  // parent_cert_name - computed: true, optional: false, required: false
  public get parentCertName() {
    return this.getStringAttribute('parent_cert_name');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_present - computed: true, optional: false, required: false
  public get privateKeyPresent() {
    return this.getBooleanAttribute('private_key_present');
  }

  // serial_no - computed: true, optional: false, required: false
  public get serialNo() {
    return this.getStringAttribute('serial_no');
  }

  // valid_from_in_epoch_sec - computed: true, optional: false, required: false
  public get validFromInEpochSec() {
    return this.getStringAttribute('valid_from_in_epoch_sec');
  }

  // valid_to_in_epoch_sec - computed: true, optional: false, required: false
  public get validToInEpochSec() {
    return this.getStringAttribute('valid_to_in_epoch_sec');
  }

  // zrsa_encrypted_private_key - computed: true, optional: false, required: false
  public get zrsaEncryptedPrivateKey() {
    return this.getStringAttribute('zrsa_encrypted_private_key');
  }

  // zrsa_encrypted_session_key - computed: true, optional: false, required: false
  public get zrsaEncryptedSessionKey() {
    return this.getStringAttribute('zrsa_encrypted_session_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
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
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
