// https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/postgres_mtls_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHerokuxPostgresMtlsCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/postgres_mtls_certificate#cert_id DataHerokuxPostgresMtlsCertificate#cert_id}
  */
  readonly certId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/postgres_mtls_certificate#database_name DataHerokuxPostgresMtlsCertificate#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/postgres_mtls_certificate#id DataHerokuxPostgresMtlsCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/postgres_mtls_certificate herokux_postgres_mtls_certificate}
*/
export class DataHerokuxPostgresMtlsCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "herokux_postgres_mtls_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHerokuxPostgresMtlsCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHerokuxPostgresMtlsCertificate to import
  * @param importFromId The id of the existing DataHerokuxPostgresMtlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/postgres_mtls_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHerokuxPostgresMtlsCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "herokux_postgres_mtls_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/postgres_mtls_certificate herokux_postgres_mtls_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHerokuxPostgresMtlsCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataHerokuxPostgresMtlsCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'herokux_postgres_mtls_certificate',
      terraformGeneratorMetadata: {
        providerName: 'herokux',
        providerVersion: '1.4.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certId = config.certId;
    this._databaseName = config.databaseName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_id - computed: false, optional: false, required: true
  private _certId?: string; 
  public get certId() {
    return this.getStringAttribute('cert_id');
  }
  public set certId(value: string) {
    this._certId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdInput() {
    return this._certId;
  }

  // certificate_with_chain - computed: true, optional: false, required: false
  public get certificateWithChain() {
    return this.getStringAttribute('certificate_with_chain');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
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
      cert_id: cdktf.stringToTerraform(this._certId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_id: {
        value: cdktf.stringToHclTerraform(this._certId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
