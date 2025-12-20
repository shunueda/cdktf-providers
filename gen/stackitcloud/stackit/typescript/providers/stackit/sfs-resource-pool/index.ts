// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfsResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool#availability_zone SfsResourcePool#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * List of IPs that can mount the resource pool in read-only; IPs must have a subnet mask (e.g. "172.16.0.0/24" for a range of IPs, or "172.16.0.250/32" for a specific IP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool#ip_acl SfsResourcePool#ip_acl}
  */
  readonly ipAcl: string[];
  /**
  * Name of the resource pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool#name SfsResourcePool#name}
  */
  readonly name: string;
  /**
  * Name of the performance class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool#performance_class SfsResourcePool#performance_class}
  */
  readonly performanceClass: string;
  /**
  * STACKIT project ID to which the resource pool is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool#project_id SfsResourcePool#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool#region SfsResourcePool#region}
  */
  readonly region?: string;
  /**
  * Size of the resource pool (unit: gigabytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool#size_gigabytes SfsResourcePool#size_gigabytes}
  */
  readonly sizeGigabytes: number;
  /**
  * If set to true, snapshots are visible and accessible to users. (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool#snapshots_are_visible SfsResourcePool#snapshots_are_visible}
  */
  readonly snapshotsAreVisible?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool stackit_sfs_resource_pool}
*/
export class SfsResourcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_sfs_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SfsResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SfsResourcePool to import
  * @param importFromId The id of the existing SfsResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SfsResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_sfs_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/sfs_resource_pool stackit_sfs_resource_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfsResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: SfsResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_sfs_resource_pool',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
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
    this._ipAcl = config.ipAcl;
    this._name = config.name;
    this._performanceClass = config.performanceClass;
    this._projectId = config.projectId;
    this._region = config.region;
    this._sizeGigabytes = config.sizeGigabytes;
    this._snapshotsAreVisible = config.snapshotsAreVisible;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_acl - computed: false, optional: false, required: true
  private _ipAcl?: string[]; 
  public get ipAcl() {
    return this.getListAttribute('ip_acl');
  }
  public set ipAcl(value: string[]) {
    this._ipAcl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAclInput() {
    return this._ipAcl;
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

  // performance_class - computed: false, optional: false, required: true
  private _performanceClass?: string; 
  public get performanceClass() {
    return this.getStringAttribute('performance_class');
  }
  public set performanceClass(value: string) {
    this._performanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceClassInput() {
    return this._performanceClass;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // resource_pool_id - computed: true, optional: false, required: false
  public get resourcePoolId() {
    return this.getStringAttribute('resource_pool_id');
  }

  // size_gigabytes - computed: false, optional: false, required: true
  private _sizeGigabytes?: number; 
  public get sizeGigabytes() {
    return this.getNumberAttribute('size_gigabytes');
  }
  public set sizeGigabytes(value: number) {
    this._sizeGigabytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGigabytesInput() {
    return this._sizeGigabytes;
  }

  // snapshots_are_visible - computed: true, optional: true, required: false
  private _snapshotsAreVisible?: boolean | cdktf.IResolvable; 
  public get snapshotsAreVisible() {
    return this.getBooleanAttribute('snapshots_are_visible');
  }
  public set snapshotsAreVisible(value: boolean | cdktf.IResolvable) {
    this._snapshotsAreVisible = value;
  }
  public resetSnapshotsAreVisible() {
    this._snapshotsAreVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsAreVisibleInput() {
    return this._snapshotsAreVisible;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      ip_acl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAcl),
      name: cdktf.stringToTerraform(this._name),
      performance_class: cdktf.stringToTerraform(this._performanceClass),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      size_gigabytes: cdktf.numberToTerraform(this._sizeGigabytes),
      snapshots_are_visible: cdktf.booleanToTerraform(this._snapshotsAreVisible),
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
      ip_acl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAcl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_class: {
        value: cdktf.stringToHclTerraform(this._performanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      size_gigabytes: {
        value: cdktf.numberToHclTerraform(this._sizeGigabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshots_are_visible: {
        value: cdktf.booleanToHclTerraform(this._snapshotsAreVisible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
