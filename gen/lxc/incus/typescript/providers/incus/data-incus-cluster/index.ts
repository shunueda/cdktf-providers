// https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncusClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/cluster#remote DataIncusCluster#remote}
  */
  readonly remote?: string;
}
export interface DataIncusClusterMembers {
}

export function dataIncusClusterMembersToTerraform(struct?: DataIncusClusterMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncusClusterMembersToHclTerraform(struct?: DataIncusClusterMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncusClusterMembersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataIncusClusterMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncusClusterMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // failure_domain - computed: true, optional: false, required: false
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataIncusClusterMembersMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataIncusClusterMembersOutputReference {
    return new DataIncusClusterMembersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/cluster incus_cluster}
*/
export class DataIncusCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incus_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncusCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncusCluster to import
  * @param importFromId The id of the existing DataIncusCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncusCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incus_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/cluster incus_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncusClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIncusClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'incus_cluster',
      terraformGeneratorMetadata: {
        providerName: 'incus',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._remote = config.remote;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // is_clustered - computed: true, optional: false, required: false
  public get isClustered() {
    return this.getBooleanAttribute('is_clustered');
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataIncusClusterMembersMap(this, "members");
  public get members() {
    return this._members;
  }

  // remote - computed: false, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      remote: cdktf.stringToTerraform(this._remote),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      remote: {
        value: cdktf.stringToHclTerraform(this._remote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
