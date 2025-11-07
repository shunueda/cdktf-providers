// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNhncloudSharedfilesystemSharenetworkV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#description DataNhncloudSharedfilesystemSharenetworkV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#id DataNhncloudSharedfilesystemSharenetworkV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#ip_version DataNhncloudSharedfilesystemSharenetworkV2#ip_version}
  */
  readonly ipVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#name DataNhncloudSharedfilesystemSharenetworkV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#network_type DataNhncloudSharedfilesystemSharenetworkV2#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#neutron_net_id DataNhncloudSharedfilesystemSharenetworkV2#neutron_net_id}
  */
  readonly neutronNetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#neutron_subnet_id DataNhncloudSharedfilesystemSharenetworkV2#neutron_subnet_id}
  */
  readonly neutronSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#region DataNhncloudSharedfilesystemSharenetworkV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#security_service_id DataNhncloudSharedfilesystemSharenetworkV2#security_service_id}
  */
  readonly securityServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#segmentation_id DataNhncloudSharedfilesystemSharenetworkV2#segmentation_id}
  */
  readonly segmentationId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2 nhncloud_sharedfilesystem_sharenetwork_v2}
*/
export class DataNhncloudSharedfilesystemSharenetworkV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_sharedfilesystem_sharenetwork_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNhncloudSharedfilesystemSharenetworkV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNhncloudSharedfilesystemSharenetworkV2 to import
  * @param importFromId The id of the existing DataNhncloudSharedfilesystemSharenetworkV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNhncloudSharedfilesystemSharenetworkV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_sharedfilesystem_sharenetwork_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.6/docs/data-sources/sharedfilesystem_sharenetwork_v2 nhncloud_sharedfilesystem_sharenetwork_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNhncloudSharedfilesystemSharenetworkV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNhncloudSharedfilesystemSharenetworkV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_sharedfilesystem_sharenetwork_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._networkType = config.networkType;
    this._neutronNetId = config.neutronNetId;
    this._neutronSubnetId = config.neutronSubnetId;
    this._region = config.region;
    this._securityServiceId = config.securityServiceId;
    this._segmentationId = config.segmentationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // description - computed: true, optional: true, required: false
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: number; 
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }
  public set ipVersion(value: number) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // neutron_net_id - computed: true, optional: true, required: false
  private _neutronNetId?: string; 
  public get neutronNetId() {
    return this.getStringAttribute('neutron_net_id');
  }
  public set neutronNetId(value: string) {
    this._neutronNetId = value;
  }
  public resetNeutronNetId() {
    this._neutronNetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neutronNetIdInput() {
    return this._neutronNetId;
  }

  // neutron_subnet_id - computed: true, optional: true, required: false
  private _neutronSubnetId?: string; 
  public get neutronSubnetId() {
    return this.getStringAttribute('neutron_subnet_id');
  }
  public set neutronSubnetId(value: string) {
    this._neutronSubnetId = value;
  }
  public resetNeutronSubnetId() {
    this._neutronSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neutronSubnetIdInput() {
    return this._neutronSubnetId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
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

  // security_service_id - computed: false, optional: true, required: false
  private _securityServiceId?: string; 
  public get securityServiceId() {
    return this.getStringAttribute('security_service_id');
  }
  public set securityServiceId(value: string) {
    this._securityServiceId = value;
  }
  public resetSecurityServiceId() {
    this._securityServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityServiceIdInput() {
    return this._securityServiceId;
  }

  // security_service_ids - computed: true, optional: false, required: false
  public get securityServiceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_service_ids'));
  }

  // segmentation_id - computed: true, optional: true, required: false
  private _segmentationId?: number; 
  public get segmentationId() {
    return this.getNumberAttribute('segmentation_id');
  }
  public set segmentationId(value: number) {
    this._segmentationId = value;
  }
  public resetSegmentationId() {
    this._segmentationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentationIdInput() {
    return this._segmentationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.numberToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      network_type: cdktf.stringToTerraform(this._networkType),
      neutron_net_id: cdktf.stringToTerraform(this._neutronNetId),
      neutron_subnet_id: cdktf.stringToTerraform(this._neutronSubnetId),
      region: cdktf.stringToTerraform(this._region),
      security_service_id: cdktf.stringToTerraform(this._securityServiceId),
      segmentation_id: cdktf.numberToTerraform(this._segmentationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ip_version: {
        value: cdktf.numberToHclTerraform(this._ipVersion),
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
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neutron_net_id: {
        value: cdktf.stringToHclTerraform(this._neutronNetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neutron_subnet_id: {
        value: cdktf.stringToHclTerraform(this._neutronSubnetId),
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
      security_service_id: {
        value: cdktf.stringToHclTerraform(this._securityServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segmentation_id: {
        value: cdktf.numberToHclTerraform(this._segmentationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
