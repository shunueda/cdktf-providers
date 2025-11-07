// https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClustermeshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable kvstoremesh, an extension which caches remote cluster information in the local kvstore (Cilium >=1.14 only) (Default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh#enable_kv_store_mesh Clustermesh#enable_kv_store_mesh}
  */
  readonly enableKvStoreMesh?: boolean | cdktf.IResolvable;
  /**
  * Type of Kubernetes service to expose control plane { LoadBalancer | NodePort | ClusterIP } (Default: `autodetected`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh#service_type Clustermesh#service_type}
  */
  readonly serviceType?: string;
  /**
  * Wait Cluster Mesh status is ok (Default: `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh#wait Clustermesh#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh cilium_clustermesh}
*/
export class Clustermesh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cilium_clustermesh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Clustermesh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Clustermesh to import
  * @param importFromId The id of the existing Clustermesh that should be imported. Refer to the {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Clustermesh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cilium_clustermesh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/clustermesh cilium_clustermesh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClustermeshConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClustermeshConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cilium_clustermesh',
      terraformGeneratorMetadata: {
        providerName: 'cilium',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableKvStoreMesh = config.enableKvStoreMesh;
    this._serviceType = config.serviceType;
    this._wait = config.wait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_kv_store_mesh - computed: true, optional: true, required: false
  private _enableKvStoreMesh?: boolean | cdktf.IResolvable; 
  public get enableKvStoreMesh() {
    return this.getBooleanAttribute('enable_kv_store_mesh');
  }
  public set enableKvStoreMesh(value: boolean | cdktf.IResolvable) {
    this._enableKvStoreMesh = value;
  }
  public resetEnableKvStoreMesh() {
    this._enableKvStoreMesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKvStoreMeshInput() {
    return this._enableKvStoreMesh;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // wait - computed: true, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_kv_store_mesh: cdktf.booleanToTerraform(this._enableKvStoreMesh),
      service_type: cdktf.stringToTerraform(this._serviceType),
      wait: cdktf.booleanToTerraform(this._wait),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_kv_store_mesh: {
        value: cdktf.booleanToHclTerraform(this._enableKvStoreMesh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
