// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleNfsGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_global_settings powerscale_nfs_global_settings}
*/
export class DataPowerscaleNfsGlobalSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_nfs_global_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleNfsGlobalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleNfsGlobalSettings to import
  * @param importFromId The id of the existing DataPowerscaleNfsGlobalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_global_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleNfsGlobalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_nfs_global_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/nfs_global_settings powerscale_nfs_global_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleNfsGlobalSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleNfsGlobalSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_nfs_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nfsv3_enabled - computed: true, optional: false, required: false
  public get nfsv3Enabled() {
    return this.getBooleanAttribute('nfsv3_enabled');
  }

  // nfsv3_rdma_enabled - computed: true, optional: false, required: false
  public get nfsv3RdmaEnabled() {
    return this.getBooleanAttribute('nfsv3_rdma_enabled');
  }

  // nfsv4_enabled - computed: true, optional: false, required: false
  public get nfsv4Enabled() {
    return this.getBooleanAttribute('nfsv4_enabled');
  }

  // rpc_maxthreads - computed: true, optional: false, required: false
  public get rpcMaxthreads() {
    return this.getNumberAttribute('rpc_maxthreads');
  }

  // rpc_minthreads - computed: true, optional: false, required: false
  public get rpcMinthreads() {
    return this.getNumberAttribute('rpc_minthreads');
  }

  // rquota_enabled - computed: true, optional: false, required: false
  public get rquotaEnabled() {
    return this.getBooleanAttribute('rquota_enabled');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getBooleanAttribute('service');
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
