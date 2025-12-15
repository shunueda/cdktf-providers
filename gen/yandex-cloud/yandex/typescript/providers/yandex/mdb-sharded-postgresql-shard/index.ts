// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_sharded_postgresql_shard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbShardedPostgresqlShardConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Sharded PostgreSQL cluster. Provided by the client when the shard is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_sharded_postgresql_shard#cluster_id MdbShardedPostgresqlShard#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Name of the Sharded PostgreSQL shard. Provided by the client when the shard is added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_sharded_postgresql_shard#name MdbShardedPostgresqlShard#name}
  */
  readonly name: string;
  /**
  * Shard specification required to add shard into cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_sharded_postgresql_shard#shard_spec MdbShardedPostgresqlShard#shard_spec}
  */
  readonly shardSpec: MdbShardedPostgresqlShardShardSpec;
}
export interface MdbShardedPostgresqlShardShardSpec {
  /**
  * ID of the Managed PostgreSQL cluster in Yandex Cloud. Provided by the client when the shard is added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_sharded_postgresql_shard#mdb_postgresql MdbShardedPostgresqlShard#mdb_postgresql}
  */
  readonly mdbPostgresql?: string;
}

export function mdbShardedPostgresqlShardShardSpecToTerraform(struct?: MdbShardedPostgresqlShardShardSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mdb_postgresql: cdktf.stringToTerraform(struct!.mdbPostgresql),
  }
}


export function mdbShardedPostgresqlShardShardSpecToHclTerraform(struct?: MdbShardedPostgresqlShardShardSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mdb_postgresql: {
      value: cdktf.stringToHclTerraform(struct!.mdbPostgresql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbShardedPostgresqlShardShardSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbShardedPostgresqlShardShardSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdbPostgresql !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbPostgresql = this._mdbPostgresql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbShardedPostgresqlShardShardSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mdbPostgresql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mdbPostgresql = value.mdbPostgresql;
    }
  }

  // mdb_postgresql - computed: false, optional: true, required: false
  private _mdbPostgresql?: string; 
  public get mdbPostgresql() {
    return this.getStringAttribute('mdb_postgresql');
  }
  public set mdbPostgresql(value: string) {
    this._mdbPostgresql = value;
  }
  public resetMdbPostgresql() {
    this._mdbPostgresql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbPostgresqlInput() {
    return this._mdbPostgresql;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_sharded_postgresql_shard yandex_mdb_sharded_postgresql_shard}
*/
export class MdbShardedPostgresqlShard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_sharded_postgresql_shard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbShardedPostgresqlShard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbShardedPostgresqlShard to import
  * @param importFromId The id of the existing MdbShardedPostgresqlShard that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_sharded_postgresql_shard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbShardedPostgresqlShard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_sharded_postgresql_shard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/mdb_sharded_postgresql_shard yandex_mdb_sharded_postgresql_shard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbShardedPostgresqlShardConfig
  */
  public constructor(scope: Construct, id: string, config: MdbShardedPostgresqlShardConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_sharded_postgresql_shard',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._name = config.name;
    this._shardSpec.internalValue = config.shardSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // shard_spec - computed: false, optional: false, required: true
  private _shardSpec = new MdbShardedPostgresqlShardShardSpecOutputReference(this, "shard_spec");
  public get shardSpec() {
    return this._shardSpec;
  }
  public putShardSpec(value: MdbShardedPostgresqlShardShardSpec) {
    this._shardSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardSpecInput() {
    return this._shardSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      name: cdktf.stringToTerraform(this._name),
      shard_spec: mdbShardedPostgresqlShardShardSpecToTerraform(this._shardSpec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shard_spec: {
        value: mdbShardedPostgresqlShardShardSpecToHclTerraform(this._shardSpec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbShardedPostgresqlShardShardSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
