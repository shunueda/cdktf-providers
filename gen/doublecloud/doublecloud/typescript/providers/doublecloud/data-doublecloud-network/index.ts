// https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDoublecloudNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider (`aws`, `gcp`, or `azure`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network#cloud_type DataDoublecloudNetwork#cloud_type}
  */
  readonly cloudType?: string;
  /**
  * Network description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network#description DataDoublecloudNetwork#description}
  */
  readonly description?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network#id DataDoublecloudNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IPv4 network range for the subnet, in CIDR notation. For example, 10.0.0.0/16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network#ipv4_cidr_block DataDoublecloudNetwork#ipv4_cidr_block}
  */
  readonly ipv4CidrBlock?: string;
  /**
  * Network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network#name DataDoublecloudNetwork#name}
  */
  readonly name: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network#project_id DataDoublecloudNetwork#project_id}
  */
  readonly projectId: string;
  /**
  * Network region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network#region_id DataDoublecloudNetwork#region_id}
  */
  readonly regionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network doublecloud_network}
*/
export class DataDoublecloudNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doublecloud_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDoublecloudNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDoublecloudNetwork to import
  * @param importFromId The id of the existing DataDoublecloudNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDoublecloudNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doublecloud_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/network doublecloud_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDoublecloudNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataDoublecloudNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'doublecloud_network',
      terraformGeneratorMetadata: {
        providerName: 'doublecloud',
        providerVersion: '0.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudType = config.cloudType;
    this._description = config.description;
    this._id = config.id;
    this._ipv4CidrBlock = config.ipv4CidrBlock;
    this._name = config.name;
    this._projectId = config.projectId;
    this._regionId = config.regionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
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

  // ipv4_cidr_block - computed: false, optional: true, required: false
  private _ipv4CidrBlock?: string; 
  public get ipv4CidrBlock() {
    return this.getStringAttribute('ipv4_cidr_block');
  }
  public set ipv4CidrBlock(value: string) {
    this._ipv4CidrBlock = value;
  }
  public resetIpv4CidrBlock() {
    this._ipv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrBlockInput() {
    return this._ipv4CidrBlock;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_type: cdktf.stringToTerraform(this._cloudType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ipv4_cidr_block: cdktf.stringToTerraform(this._ipv4CidrBlock),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region_id: cdktf.stringToTerraform(this._regionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_type: {
        value: cdktf.stringToHclTerraform(this._cloudType),
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
      ipv4_cidr_block: {
        value: cdktf.stringToHclTerraform(this._ipv4CidrBlock),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
