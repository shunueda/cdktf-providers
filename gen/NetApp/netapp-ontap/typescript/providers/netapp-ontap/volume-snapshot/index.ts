// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot#comment VolumeSnapshot#comment}
  */
  readonly comment?: string;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot#cx_profile_name VolumeSnapshot#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Snapshot copies with an expiry time set are not allowed to be deleted until the retetion time is reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot#expiry_time VolumeSnapshot#expiry_time}
  */
  readonly expiryTime?: string;
  /**
  * Snapshot name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot#name VolumeSnapshot#name}
  */
  readonly name: string;
  /**
  * Expiry time for Snapshot copy locking enabled volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot#snaplock_expiry_time VolumeSnapshot#snaplock_expiry_time}
  */
  readonly snaplockExpiryTime?: string;
  /**
  * Label for SnapMirror Operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot#snapmirror_label VolumeSnapshot#snapmirror_label}
  */
  readonly snapmirrorLabel?: string;
  /**
  * The name of the SVM the snapshot is on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot#svm_name VolumeSnapshot#svm_name}
  */
  readonly svmName: string;
  /**
  * The name of the volume the snapshot is on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot#volume_name VolumeSnapshot#volume_name}
  */
  readonly volumeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot netapp-ontap_volume_snapshot}
*/
export class VolumeSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_volume_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VolumeSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VolumeSnapshot to import
  * @param importFromId The id of the existing VolumeSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VolumeSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_volume_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/volume_snapshot netapp-ontap_volume_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_volume_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._cxProfileName = config.cxProfileName;
    this._expiryTime = config.expiryTime;
    this._name = config.name;
    this._snaplockExpiryTime = config.snaplockExpiryTime;
    this._snapmirrorLabel = config.snapmirrorLabel;
    this._svmName = config.svmName;
    this._volumeName = config.volumeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // expiry_time - computed: false, optional: true, required: false
  private _expiryTime?: string; 
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string) {
    this._expiryTime = value;
  }
  public resetExpiryTime() {
    this._expiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime;
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

  // snaplock_expiry_time - computed: false, optional: true, required: false
  private _snaplockExpiryTime?: string; 
  public get snaplockExpiryTime() {
    return this.getStringAttribute('snaplock_expiry_time');
  }
  public set snaplockExpiryTime(value: string) {
    this._snaplockExpiryTime = value;
  }
  public resetSnaplockExpiryTime() {
    this._snaplockExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaplockExpiryTimeInput() {
    return this._snaplockExpiryTime;
  }

  // snapmirror_label - computed: false, optional: true, required: false
  private _snapmirrorLabel?: string; 
  public get snapmirrorLabel() {
    return this.getStringAttribute('snapmirror_label');
  }
  public set snapmirrorLabel(value: string) {
    this._snapmirrorLabel = value;
  }
  public resetSnapmirrorLabel() {
    this._snapmirrorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapmirrorLabelInput() {
    return this._snapmirrorLabel;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      expiry_time: cdktf.stringToTerraform(this._expiryTime),
      name: cdktf.stringToTerraform(this._name),
      snaplock_expiry_time: cdktf.stringToTerraform(this._snaplockExpiryTime),
      snapmirror_label: cdktf.stringToTerraform(this._snapmirrorLabel),
      svm_name: cdktf.stringToTerraform(this._svmName),
      volume_name: cdktf.stringToTerraform(this._volumeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiry_time: {
        value: cdktf.stringToHclTerraform(this._expiryTime),
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
      snaplock_expiry_time: {
        value: cdktf.stringToHclTerraform(this._snaplockExpiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapmirror_label: {
        value: cdktf.stringToHclTerraform(this._snapmirrorLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_name: {
        value: cdktf.stringToHclTerraform(this._volumeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
