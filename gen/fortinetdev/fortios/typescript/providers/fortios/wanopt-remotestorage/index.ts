// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_remotestorage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WanoptRemotestorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_remotestorage#id WanoptRemotestorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_remotestorage#local_cache_id WanoptRemotestorage#local_cache_id}
  */
  readonly localCacheId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_remotestorage#remote_cache_id WanoptRemotestorage#remote_cache_id}
  */
  readonly remoteCacheId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_remotestorage#remote_cache_ip WanoptRemotestorage#remote_cache_ip}
  */
  readonly remoteCacheIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_remotestorage#status WanoptRemotestorage#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_remotestorage#vdomparam WanoptRemotestorage#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_remotestorage fortios_wanopt_remotestorage}
*/
export class WanoptRemotestorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wanopt_remotestorage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WanoptRemotestorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WanoptRemotestorage to import
  * @param importFromId The id of the existing WanoptRemotestorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_remotestorage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WanoptRemotestorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wanopt_remotestorage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wanopt_remotestorage fortios_wanopt_remotestorage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WanoptRemotestorageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WanoptRemotestorageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wanopt_remotestorage',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._localCacheId = config.localCacheId;
    this._remoteCacheId = config.remoteCacheId;
    this._remoteCacheIp = config.remoteCacheIp;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // local_cache_id - computed: false, optional: true, required: false
  private _localCacheId?: string; 
  public get localCacheId() {
    return this.getStringAttribute('local_cache_id');
  }
  public set localCacheId(value: string) {
    this._localCacheId = value;
  }
  public resetLocalCacheId() {
    this._localCacheId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCacheIdInput() {
    return this._localCacheId;
  }

  // remote_cache_id - computed: false, optional: true, required: false
  private _remoteCacheId?: string; 
  public get remoteCacheId() {
    return this.getStringAttribute('remote_cache_id');
  }
  public set remoteCacheId(value: string) {
    this._remoteCacheId = value;
  }
  public resetRemoteCacheId() {
    this._remoteCacheId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCacheIdInput() {
    return this._remoteCacheId;
  }

  // remote_cache_ip - computed: true, optional: true, required: false
  private _remoteCacheIp?: string; 
  public get remoteCacheIp() {
    return this.getStringAttribute('remote_cache_ip');
  }
  public set remoteCacheIp(value: string) {
    this._remoteCacheIp = value;
  }
  public resetRemoteCacheIp() {
    this._remoteCacheIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCacheIpInput() {
    return this._remoteCacheIp;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      local_cache_id: cdktf.stringToTerraform(this._localCacheId),
      remote_cache_id: cdktf.stringToTerraform(this._remoteCacheId),
      remote_cache_ip: cdktf.stringToTerraform(this._remoteCacheIp),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      local_cache_id: {
        value: cdktf.stringToHclTerraform(this._localCacheId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_cache_id: {
        value: cdktf.stringToHclTerraform(this._remoteCacheId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_cache_ip: {
        value: cdktf.stringToHclTerraform(this._remoteCacheIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
