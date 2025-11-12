// https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * id of Cluster where need to enable pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/pool#cluster Pool#cluster}
  */
  readonly cluster?: number;
  /**
  * Pool Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/pool#desc Pool#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/pool#id Pool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ipv4 or Ipv6 Network in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/pool#pool Pool#pool}
  */
  readonly pool: string;
  /**
  * Range of ips in pool. Format: 192.168.0.1 or 192.168.0.1-192.168.0.10 or 192.168.0.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/pool#ranges Pool#ranges}
  */
  readonly ranges: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/pool vmmanager6_pool}
*/
export class Pool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmmanager6_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pool to import
  * @param importFromId The id of the existing Pool that should be imported. Refer to the {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmmanager6_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/pool vmmanager6_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PoolConfig
  */
  public constructor(scope: Construct, id: string, config: PoolConfig) {
    super(scope, id, {
      terraformResourceType: 'vmmanager6_pool',
      terraformGeneratorMetadata: {
        providerName: 'vmmanager6',
        providerVersion: '0.0.34',
        providerVersionConstraint: '0.0.34'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._desc = config.desc;
    this._id = config.id;
    this._pool = config.pool;
    this._ranges = config.ranges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: true, required: false
  private _cluster?: number; 
  public get cluster() {
    return this.getNumberAttribute('cluster');
  }
  public set cluster(value: number) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
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

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // ranges - computed: false, optional: false, required: true
  private _ranges?: string[]; 
  public get ranges() {
    return this.getListAttribute('ranges');
  }
  public set ranges(value: string[]) {
    this._ranges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.numberToTerraform(this._cluster),
      desc: cdktf.stringToTerraform(this._desc),
      id: cdktf.stringToTerraform(this._id),
      pool: cdktf.stringToTerraform(this._pool),
      ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ranges),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.numberToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
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
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ranges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
