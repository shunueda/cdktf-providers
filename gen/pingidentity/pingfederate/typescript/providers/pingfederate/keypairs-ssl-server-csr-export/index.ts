// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeypairsSslServerCsrExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * A meta-argument map of values that, if any values are changed, will force export of a new CSR. Adding values to and removing values from the map will not trigger an export. This parameter can be used to control time-based exports using Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_export#export_trigger_values KeypairsSslServerCsrExport#export_trigger_values}
  */
  readonly exportTriggerValues?: { [key: string]: string };
  /**
  * The id of the key pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_export#keypair_id KeypairsSslServerCsrExport#keypair_id}
  */
  readonly keypairId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_export pingfederate_keypairs_ssl_server_csr_export}
*/
export class KeypairsSslServerCsrExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_keypairs_ssl_server_csr_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeypairsSslServerCsrExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeypairsSslServerCsrExport to import
  * @param importFromId The id of the existing KeypairsSslServerCsrExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeypairsSslServerCsrExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_keypairs_ssl_server_csr_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_csr_export pingfederate_keypairs_ssl_server_csr_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeypairsSslServerCsrExportConfig
  */
  public constructor(scope: Construct, id: string, config: KeypairsSslServerCsrExportConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_keypairs_ssl_server_csr_export',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exportTriggerValues = config.exportTriggerValues;
    this._keypairId = config.keypairId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_trigger_values - computed: false, optional: true, required: false
  private _exportTriggerValues?: { [key: string]: string }; 
  public get exportTriggerValues() {
    return this.getStringMapAttribute('export_trigger_values');
  }
  public set exportTriggerValues(value: { [key: string]: string }) {
    this._exportTriggerValues = value;
  }
  public resetExportTriggerValues() {
    this._exportTriggerValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTriggerValuesInput() {
    return this._exportTriggerValues;
  }

  // exported_csr - computed: true, optional: false, required: false
  public get exportedCsr() {
    return this.getStringAttribute('exported_csr');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keypair_id - computed: false, optional: false, required: true
  private _keypairId?: string; 
  public get keypairId() {
    return this.getStringAttribute('keypair_id');
  }
  public set keypairId(value: string) {
    this._keypairId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairIdInput() {
    return this._keypairId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_trigger_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._exportTriggerValues),
      keypair_id: cdktf.stringToTerraform(this._keypairId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_trigger_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._exportTriggerValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      keypair_id: {
        value: cdktf.stringToHclTerraform(this._keypairId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
