// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfsGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * True if NFSv3 is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings#nfsv3_enabled NfsGlobalSettings#nfsv3_enabled}
  */
  readonly nfsv3Enabled?: boolean | cdktf.IResolvable;
  /**
  * True if the RDMA is enabled for NFSv3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings#nfsv3_rdma_enabled NfsGlobalSettings#nfsv3_rdma_enabled}
  */
  readonly nfsv3RdmaEnabled?: boolean | cdktf.IResolvable;
  /**
  * True if NFSv4 is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings#nfsv4_enabled NfsGlobalSettings#nfsv4_enabled}
  */
  readonly nfsv4Enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum number of threads in the nfsd thread pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings#rpc_maxthreads NfsGlobalSettings#rpc_maxthreads}
  */
  readonly rpcMaxthreads?: number;
  /**
  * Specifies the minimum number of threads in the nfsd thread pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings#rpc_minthreads NfsGlobalSettings#rpc_minthreads}
  */
  readonly rpcMinthreads?: number;
  /**
  * True if the rquota protocol is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings#rquota_enabled NfsGlobalSettings#rquota_enabled}
  */
  readonly rquotaEnabled?: boolean | cdktf.IResolvable;
  /**
  * True if the NFS service is enabled. When set to false, the NFS service is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings#service NfsGlobalSettings#service}
  */
  readonly service?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings powerscale_nfs_global_settings}
*/
export class NfsGlobalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_nfs_global_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NfsGlobalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NfsGlobalSettings to import
  * @param importFromId The id of the existing NfsGlobalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NfsGlobalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_nfs_global_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/nfs_global_settings powerscale_nfs_global_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NfsGlobalSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NfsGlobalSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_nfs_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._nfsv3Enabled = config.nfsv3Enabled;
    this._nfsv3RdmaEnabled = config.nfsv3RdmaEnabled;
    this._nfsv4Enabled = config.nfsv4Enabled;
    this._rpcMaxthreads = config.rpcMaxthreads;
    this._rpcMinthreads = config.rpcMinthreads;
    this._rquotaEnabled = config.rquotaEnabled;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nfsv3_enabled - computed: true, optional: true, required: false
  private _nfsv3Enabled?: boolean | cdktf.IResolvable; 
  public get nfsv3Enabled() {
    return this.getBooleanAttribute('nfsv3_enabled');
  }
  public set nfsv3Enabled(value: boolean | cdktf.IResolvable) {
    this._nfsv3Enabled = value;
  }
  public resetNfsv3Enabled() {
    this._nfsv3Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3EnabledInput() {
    return this._nfsv3Enabled;
  }

  // nfsv3_rdma_enabled - computed: true, optional: true, required: false
  private _nfsv3RdmaEnabled?: boolean | cdktf.IResolvable; 
  public get nfsv3RdmaEnabled() {
    return this.getBooleanAttribute('nfsv3_rdma_enabled');
  }
  public set nfsv3RdmaEnabled(value: boolean | cdktf.IResolvable) {
    this._nfsv3RdmaEnabled = value;
  }
  public resetNfsv3RdmaEnabled() {
    this._nfsv3RdmaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3RdmaEnabledInput() {
    return this._nfsv3RdmaEnabled;
  }

  // nfsv4_enabled - computed: true, optional: true, required: false
  private _nfsv4Enabled?: boolean | cdktf.IResolvable; 
  public get nfsv4Enabled() {
    return this.getBooleanAttribute('nfsv4_enabled');
  }
  public set nfsv4Enabled(value: boolean | cdktf.IResolvable) {
    this._nfsv4Enabled = value;
  }
  public resetNfsv4Enabled() {
    this._nfsv4Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv4EnabledInput() {
    return this._nfsv4Enabled;
  }

  // rpc_maxthreads - computed: true, optional: true, required: false
  private _rpcMaxthreads?: number; 
  public get rpcMaxthreads() {
    return this.getNumberAttribute('rpc_maxthreads');
  }
  public set rpcMaxthreads(value: number) {
    this._rpcMaxthreads = value;
  }
  public resetRpcMaxthreads() {
    this._rpcMaxthreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcMaxthreadsInput() {
    return this._rpcMaxthreads;
  }

  // rpc_minthreads - computed: true, optional: true, required: false
  private _rpcMinthreads?: number; 
  public get rpcMinthreads() {
    return this.getNumberAttribute('rpc_minthreads');
  }
  public set rpcMinthreads(value: number) {
    this._rpcMinthreads = value;
  }
  public resetRpcMinthreads() {
    this._rpcMinthreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcMinthreadsInput() {
    return this._rpcMinthreads;
  }

  // rquota_enabled - computed: true, optional: true, required: false
  private _rquotaEnabled?: boolean | cdktf.IResolvable; 
  public get rquotaEnabled() {
    return this.getBooleanAttribute('rquota_enabled');
  }
  public set rquotaEnabled(value: boolean | cdktf.IResolvable) {
    this._rquotaEnabled = value;
  }
  public resetRquotaEnabled() {
    this._rquotaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rquotaEnabledInput() {
    return this._rquotaEnabled;
  }

  // service - computed: true, optional: true, required: false
  private _service?: boolean | cdktf.IResolvable; 
  public get service() {
    return this.getBooleanAttribute('service');
  }
  public set service(value: boolean | cdktf.IResolvable) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      nfsv3_enabled: cdktf.booleanToTerraform(this._nfsv3Enabled),
      nfsv3_rdma_enabled: cdktf.booleanToTerraform(this._nfsv3RdmaEnabled),
      nfsv4_enabled: cdktf.booleanToTerraform(this._nfsv4Enabled),
      rpc_maxthreads: cdktf.numberToTerraform(this._rpcMaxthreads),
      rpc_minthreads: cdktf.numberToTerraform(this._rpcMinthreads),
      rquota_enabled: cdktf.booleanToTerraform(this._rquotaEnabled),
      service: cdktf.booleanToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      nfsv3_enabled: {
        value: cdktf.booleanToHclTerraform(this._nfsv3Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nfsv3_rdma_enabled: {
        value: cdktf.booleanToHclTerraform(this._nfsv3RdmaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nfsv4_enabled: {
        value: cdktf.booleanToHclTerraform(this._nfsv4Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rpc_maxthreads: {
        value: cdktf.numberToHclTerraform(this._rpcMaxthreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rpc_minthreads: {
        value: cdktf.numberToHclTerraform(this._rpcMinthreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rquota_enabled: {
        value: cdktf.booleanToHclTerraform(this._rquotaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service: {
        value: cdktf.booleanToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
