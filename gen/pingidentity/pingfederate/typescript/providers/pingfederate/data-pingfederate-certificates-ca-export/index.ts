// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/certificates_ca_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateCertificatesCaExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the trusted certificate authority to export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/certificates_ca_export#ca_id DataPingfederateCertificatesCaExport#ca_id}
  */
  readonly caId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/certificates_ca_export pingfederate_certificates_ca_export}
*/
export class DataPingfederateCertificatesCaExport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_certificates_ca_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateCertificatesCaExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateCertificatesCaExport to import
  * @param importFromId The id of the existing DataPingfederateCertificatesCaExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/certificates_ca_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateCertificatesCaExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_certificates_ca_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/certificates_ca_export pingfederate_certificates_ca_export} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateCertificatesCaExportConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateCertificatesCaExportConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_certificates_ca_export',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caId = config.caId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_id - computed: false, optional: false, required: true
  private _caId?: string; 
  public get caId() {
    return this.getStringAttribute('ca_id');
  }
  public set caId(value: string) {
    this._caId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdInput() {
    return this._caId;
  }

  // exported_certificate - computed: true, optional: false, required: false
  public get exportedCertificate() {
    return this.getStringAttribute('exported_certificate');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_id: cdktf.stringToTerraform(this._caId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_id: {
        value: cdktf.stringToHclTerraform(this._caId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
