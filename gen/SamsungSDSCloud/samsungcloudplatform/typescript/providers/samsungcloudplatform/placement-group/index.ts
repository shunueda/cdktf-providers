// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlacementGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability Zone Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group#availability_zone_name PlacementGroup#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group#description PlacementGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group#id PlacementGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Placement Group Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group#placement_group_name PlacementGroup#placement_group_name}
  */
  readonly placementGroupName: string;
  /**
  * Service Zone Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group#service_zone_id PlacementGroup#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group#tags PlacementGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Virtual Server Id List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group#virtual_server_ids PlacementGroup#virtual_server_ids}
  */
  readonly virtualServerIds: string[];
  /**
  * Virtual Server Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group#virtual_server_type PlacementGroup#virtual_server_type}
  */
  readonly virtualServerType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group samsungcloudplatform_placement_group}
*/
export class PlacementGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_placement_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlacementGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlacementGroup to import
  * @param importFromId The id of the existing PlacementGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlacementGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_placement_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/placement_group samsungcloudplatform_placement_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlacementGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PlacementGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_placement_group',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZoneName = config.availabilityZoneName;
    this._description = config.description;
    this._id = config.id;
    this._placementGroupName = config.placementGroupName;
    this._serviceZoneId = config.serviceZoneId;
    this._tags = config.tags;
    this._virtualServerIds = config.virtualServerIds;
    this._virtualServerType = config.virtualServerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone_name - computed: false, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // placement_group_name - computed: false, optional: false, required: true
  private _placementGroupName?: string; 
  public get placementGroupName() {
    return this.getStringAttribute('placement_group_name');
  }
  public set placementGroupName(value: string) {
    this._placementGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupNameInput() {
    return this._placementGroupName;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // virtual_server_ids - computed: false, optional: false, required: true
  private _virtualServerIds?: string[]; 
  public get virtualServerIds() {
    return this.getListAttribute('virtual_server_ids');
  }
  public set virtualServerIds(value: string[]) {
    this._virtualServerIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerIdsInput() {
    return this._virtualServerIds;
  }

  // virtual_server_type - computed: false, optional: false, required: true
  private _virtualServerType?: string; 
  public get virtualServerType() {
    return this.getStringAttribute('virtual_server_type');
  }
  public set virtualServerType(value: string) {
    this._virtualServerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerTypeInput() {
    return this._virtualServerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_name: cdktf.stringToTerraform(this._availabilityZoneName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      placement_group_name: cdktf.stringToTerraform(this._placementGroupName),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_server_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualServerIds),
      virtual_server_type: cdktf.stringToTerraform(this._virtualServerType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone_name: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      placement_group_name: {
        value: cdktf.stringToHclTerraform(this._placementGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      virtual_server_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualServerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      virtual_server_type: {
        value: cdktf.stringToHclTerraform(this._virtualServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
