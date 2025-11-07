// https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the cluster is high availability, meaning that it has a secondary it can fail over to quickly in case the primary becomes unavailable. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster#is_ha Cluster#is_ha}
  */
  readonly isHa?: boolean | cdktf.IResolvable;
  /**
  * The cluster's major Postgres version. For example, `16`. Defaults to [Create Cluster](https://docs.crunchybridge.com/api/cluster/#create-cluster) defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster#major_version Cluster#major_version}
  */
  readonly majorVersion?: number;
  /**
  * A human-readable name for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * The ID of the [cluster's plan](https://docs.crunchybridge.com/concepts/plans-pricing/). Determines instance, CPU, and memory. Defaults to `hobby-2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster#plan_id Cluster#plan_id}
  */
  readonly planId?: string;
  /**
  * The [cloud provider](https://docs.crunchybridge.com/api/provider) where the cluster is located. Defaults to `aws`, allows `aws`, `gcp`, or `azure`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster#provider_id Cluster#provider_id}
  */
  readonly providerId?: string;
  /**
  * The [provider region](https://docs.crunchybridge.com/api/provider#region) where the cluster is located. Defaults to `us-west-1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster#region_id Cluster#region_id}
  */
  readonly regionId?: string;
  /**
  * The amount of storage available to the cluster in GB (gigabytes). Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster#storage Cluster#storage}
  */
  readonly storage?: number;
  /**
  * The ID of the parent [team](https://docs.crunchybridge.com/concepts/teams/) for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster#team_id Cluster#team_id}
  */
  readonly teamId: string;
  /**
  * Treats the create operation as incomplete until the cluster reports a ready status. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster#wait_until_ready Cluster#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster crunchybridge_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crunchybridge_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crunchybridge_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/resources/cluster crunchybridge_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'crunchybridge_cluster',
      terraformGeneratorMetadata: {
        providerName: 'crunchybridge',
        providerVersion: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isHa = config.isHa;
    this._majorVersion = config.majorVersion;
    this._name = config.name;
    this._planId = config.planId;
    this._providerId = config.providerId;
    this._regionId = config.regionId;
    this._storage = config.storage;
    this._teamId = config.teamId;
    this._waitUntilReady = config.waitUntilReady;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_ha - computed: false, optional: true, required: false
  private _isHa?: boolean | cdktf.IResolvable; 
  public get isHa() {
    return this.getBooleanAttribute('is_ha');
  }
  public set isHa(value: boolean | cdktf.IResolvable) {
    this._isHa = value;
  }
  public resetIsHa() {
    this._isHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHaInput() {
    return this._isHa;
  }

  // maintenance_window_start - computed: true, optional: false, required: false
  public get maintenanceWindowStart() {
    return this.getNumberAttribute('maintenance_window_start');
  }

  // major_version - computed: false, optional: true, required: false
  private _majorVersion?: number; 
  public get majorVersion() {
    return this.getNumberAttribute('major_version');
  }
  public set majorVersion(value: number) {
    this._majorVersion = value;
  }
  public resetMajorVersion() {
    this._majorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionInput() {
    return this._majorVersion;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
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

  // plan_id - computed: false, optional: true, required: false
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  public resetPlanId() {
    this._planId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
  }

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // wait_until_ready - computed: false, optional: true, required: false
  private _waitUntilReady?: boolean | cdktf.IResolvable; 
  public get waitUntilReady() {
    return this.getBooleanAttribute('wait_until_ready');
  }
  public set waitUntilReady(value: boolean | cdktf.IResolvable) {
    this._waitUntilReady = value;
  }
  public resetWaitUntilReady() {
    this._waitUntilReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReadyInput() {
    return this._waitUntilReady;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_ha: cdktf.booleanToTerraform(this._isHa),
      major_version: cdktf.numberToTerraform(this._majorVersion),
      name: cdktf.stringToTerraform(this._name),
      plan_id: cdktf.stringToTerraform(this._planId),
      provider_id: cdktf.stringToTerraform(this._providerId),
      region_id: cdktf.stringToTerraform(this._regionId),
      storage: cdktf.numberToTerraform(this._storage),
      team_id: cdktf.stringToTerraform(this._teamId),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_ha: {
        value: cdktf.booleanToHclTerraform(this._isHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      major_version: {
        value: cdktf.numberToHclTerraform(this._majorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_id: {
        value: cdktf.stringToHclTerraform(this._planId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_id: {
        value: cdktf.stringToHclTerraform(this._providerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_ready: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
