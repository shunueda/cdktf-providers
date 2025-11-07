// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/root_dse_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryRootDseBackendConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/root_dse_backend pingdirectory_root_dse_backend}
*/
export class DataPingdirectoryRootDseBackend extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_root_dse_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryRootDseBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryRootDseBackend to import
  * @param importFromId The id of the existing DataPingdirectoryRootDseBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/root_dse_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryRootDseBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_root_dse_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/root_dse_backend pingdirectory_root_dse_backend} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryRootDseBackendConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryRootDseBackendConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_root_dse_backend',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_supported_control_oid - computed: true, optional: false, required: false
  public get additionalSupportedControlOid() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_supported_control_oid'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // show_all_attributes - computed: true, optional: false, required: false
  public get showAllAttributes() {
    return this.getBooleanAttribute('show_all_attributes');
  }

  // subordinate_base_dn - computed: true, optional: false, required: false
  public get subordinateBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('subordinate_base_dn'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_legacy_vendor_version - computed: true, optional: false, required: false
  public get useLegacyVendorVersion() {
    return this.getBooleanAttribute('use_legacy_vendor_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
