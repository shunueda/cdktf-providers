// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/okms_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhOkmsCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/okms_credential#id DataOvhOkmsCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Okms ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/okms_credential#okms_id DataOvhOkmsCredential#okms_id}
  */
  readonly okmsId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/okms_credential ovh_okms_credential}
*/
export class DataOvhOkmsCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_okms_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhOkmsCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhOkmsCredential to import
  * @param importFromId The id of the existing DataOvhOkmsCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/okms_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhOkmsCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_okms_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/okms_credential ovh_okms_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhOkmsCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhOkmsCredentialConfig) {
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
    this._id = config.id;
    this._okmsId = config.okmsId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_pem - computed: true, optional: false, required: false
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expired_at - computed: true, optional: false, required: false
  public get expiredAt() {
    return this.getStringAttribute('expired_at');
  }

  // from_csr - computed: true, optional: false, required: false
  public get fromCsr() {
    return this.getBooleanAttribute('from_csr');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_urns - computed: true, optional: false, required: false
  public get identityUrns() {
    return this.getListAttribute('identity_urns');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      okms_id: cdktf.stringToTerraform(this._okmsId),
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
      okms_id: {
        value: cdktf.stringToHclTerraform(this._okmsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
