// https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#bandwidth VolumeReplication#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#destination_volume_id VolumeReplication#destination_volume_id}
  */
  readonly destinationVolumeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#endpoint_type VolumeReplication#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#id VolumeReplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#name VolumeReplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#policy VolumeReplication#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#region VolumeReplication#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#remote_region VolumeReplication#remote_region}
  */
  readonly remoteRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#schedule VolumeReplication#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#source_volume_id VolumeReplication#source_volume_id}
  */
  readonly sourceVolumeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication netapp-gcp_volume_replication}
*/
export class VolumeReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-gcp_volume_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumeReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumeReplication to import
  * @param importFromId The id of the existing VolumeReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumeReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-gcp_volume_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/volume_replication netapp-gcp_volume_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-gcp_volume_replication',
      terraformGeneratorMetadata: {
        providerName: 'netapp-gcp',
        providerVersion: '24.6.0',
        providerVersionConstraint: '24.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._destinationVolumeId = config.destinationVolumeId;
    this._endpointType = config.endpointType;
    this._id = config.id;
    this._name = config.name;
    this._policy = config.policy;
    this._region = config.region;
    this._remoteRegion = config.remoteRegion;
    this._schedule = config.schedule;
    this._sourceVolumeId = config.sourceVolumeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // destination_volume_id - computed: false, optional: false, required: true
  private _destinationVolumeId?: string; 
  public get destinationVolumeId() {
    return this.getStringAttribute('destination_volume_id');
  }
  public set destinationVolumeId(value: string) {
    this._destinationVolumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVolumeIdInput() {
    return this._destinationVolumeId;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
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

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // remote_region - computed: false, optional: false, required: true
  private _remoteRegion?: string; 
  public get remoteRegion() {
    return this.getStringAttribute('remote_region');
  }
  public set remoteRegion(value: string) {
    this._remoteRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRegionInput() {
    return this._remoteRegion;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // source_volume_id - computed: false, optional: false, required: true
  private _sourceVolumeId?: string; 
  public get sourceVolumeId() {
    return this.getStringAttribute('source_volume_id');
  }
  public set sourceVolumeId(value: string) {
    this._sourceVolumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVolumeIdInput() {
    return this._sourceVolumeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      destination_volume_id: cdktf.stringToTerraform(this._destinationVolumeId),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
      region: cdktf.stringToTerraform(this._region),
      remote_region: cdktf.stringToTerraform(this._remoteRegion),
      schedule: cdktf.stringToTerraform(this._schedule),
      source_volume_id: cdktf.stringToTerraform(this._sourceVolumeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_volume_id: {
        value: cdktf.stringToHclTerraform(this._destinationVolumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
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
      remote_region: {
        value: cdktf.stringToHclTerraform(this._remoteRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_volume_id: {
        value: cdktf.stringToHclTerraform(this._sourceVolumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
