// https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterReplicaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The specific availability zone of the replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#availability_zone ClusterReplica#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The cluster whose resources you want to create an additional computation of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#cluster_name ClusterReplica#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#comment ClusterReplica#comment}
  */
  readonly comment?: string;
  /**
  * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should use 'cc' sizes for disk access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#disk ClusterReplica#disk}
  */
  readonly disk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#id ClusterReplica#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to introspect the gathering of the introspection data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#introspection_debugging ClusterReplica#introspection_debugging}
  */
  readonly introspectionDebugging?: boolean | cdktf.IResolvable;
  /**
  * The interval at which to collect introspection data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#introspection_interval ClusterReplica#introspection_interval}
  */
  readonly introspectionInterval?: string;
  /**
  * The identifier for the replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#name ClusterReplica#name}
  */
  readonly name: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#region ClusterReplica#region}
  */
  readonly region?: string;
  /**
  * The size of the replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#size ClusterReplica#size}
  */
  readonly size: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica materialize_cluster_replica}
*/
export class ClusterReplica extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_cluster_replica";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterReplica resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterReplica to import
  * @param importFromId The id of the existing ClusterReplica that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterReplica to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_cluster_replica", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster_replica materialize_cluster_replica} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterReplicaConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterReplicaConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_cluster_replica',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.2',
        providerVersionConstraint: '0.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._clusterName = config.clusterName;
    this._comment = config.comment;
    this._disk = config.disk;
    this._id = config.id;
    this._introspectionDebugging = config.introspectionDebugging;
    this._introspectionInterval = config.introspectionInterval;
    this._name = config.name;
    this._region = config.region;
    this._size = config.size;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: boolean | cdktf.IResolvable; 
  public get disk() {
    return this.getBooleanAttribute('disk');
  }
  public set disk(value: boolean | cdktf.IResolvable) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
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

  // introspection_debugging - computed: false, optional: true, required: false
  private _introspectionDebugging?: boolean | cdktf.IResolvable; 
  public get introspectionDebugging() {
    return this.getBooleanAttribute('introspection_debugging');
  }
  public set introspectionDebugging(value: boolean | cdktf.IResolvable) {
    this._introspectionDebugging = value;
  }
  public resetIntrospectionDebugging() {
    this._introspectionDebugging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionDebuggingInput() {
    return this._introspectionDebugging;
  }

  // introspection_interval - computed: false, optional: true, required: false
  private _introspectionInterval?: string; 
  public get introspectionInterval() {
    return this.getStringAttribute('introspection_interval');
  }
  public set introspectionInterval(value: string) {
    this._introspectionInterval = value;
  }
  public resetIntrospectionInterval() {
    this._introspectionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionIntervalInput() {
    return this._introspectionInterval;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      comment: cdktf.stringToTerraform(this._comment),
      disk: cdktf.booleanToTerraform(this._disk),
      id: cdktf.stringToTerraform(this._id),
      introspection_debugging: cdktf.booleanToTerraform(this._introspectionDebugging),
      introspection_interval: cdktf.stringToTerraform(this._introspectionInterval),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      size: cdktf.stringToTerraform(this._size),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.booleanToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      introspection_debugging: {
        value: cdktf.booleanToHclTerraform(this._introspectionDebugging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      introspection_interval: {
        value: cdktf.stringToHclTerraform(this._introspectionInterval),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
