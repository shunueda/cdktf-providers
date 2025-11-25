// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNhncloudNetworkingPortIdsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#admin_state_up DataNhncloudNetworkingPortIdsV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#description DataNhncloudNetworkingPortIdsV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#device_id DataNhncloudNetworkingPortIdsV2#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#device_owner DataNhncloudNetworkingPortIdsV2#device_owner}
  */
  readonly deviceOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#dns_name DataNhncloudNetworkingPortIdsV2#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#fixed_ip DataNhncloudNetworkingPortIdsV2#fixed_ip}
  */
  readonly fixedIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#id DataNhncloudNetworkingPortIdsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#mac_address DataNhncloudNetworkingPortIdsV2#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#name DataNhncloudNetworkingPortIdsV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#network_id DataNhncloudNetworkingPortIdsV2#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#project_id DataNhncloudNetworkingPortIdsV2#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#region DataNhncloudNetworkingPortIdsV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#security_group_ids DataNhncloudNetworkingPortIdsV2#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#sort_direction DataNhncloudNetworkingPortIdsV2#sort_direction}
  */
  readonly sortDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#sort_key DataNhncloudNetworkingPortIdsV2#sort_key}
  */
  readonly sortKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#status DataNhncloudNetworkingPortIdsV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#tags DataNhncloudNetworkingPortIdsV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#tenant_id DataNhncloudNetworkingPortIdsV2#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2 nhncloud_networking_port_ids_v2}
*/
export class DataNhncloudNetworkingPortIdsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_networking_port_ids_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNhncloudNetworkingPortIdsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNhncloudNetworkingPortIdsV2 to import
  * @param importFromId The id of the existing DataNhncloudNetworkingPortIdsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNhncloudNetworkingPortIdsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_networking_port_ids_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_port_ids_v2 nhncloud_networking_port_ids_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNhncloudNetworkingPortIdsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNhncloudNetworkingPortIdsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_networking_port_ids_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminStateUp = config.adminStateUp;
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._deviceOwner = config.deviceOwner;
    this._dnsName = config.dnsName;
    this._fixedIp = config.fixedIp;
    this._id = config.id;
    this._macAddress = config.macAddress;
    this._name = config.name;
    this._networkId = config.networkId;
    this._projectId = config.projectId;
    this._region = config.region;
    this._securityGroupIds = config.securityGroupIds;
    this._sortDirection = config.sortDirection;
    this._sortKey = config.sortKey;
    this._status = config.status;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp;
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

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // device_owner - computed: false, optional: true, required: false
  private _deviceOwner?: string; 
  public get deviceOwner() {
    return this.getStringAttribute('device_owner');
  }
  public set deviceOwner(value: string) {
    this._deviceOwner = value;
  }
  public resetDeviceOwner() {
    this._deviceOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOwnerInput() {
    return this._deviceOwner;
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // fixed_ip - computed: false, optional: true, required: false
  private _fixedIp?: string; 
  public get fixedIp() {
    return this.getStringAttribute('fixed_ip');
  }
  public set fixedIp(value: string) {
    this._fixedIp = value;
  }
  public resetFixedIp() {
    this._fixedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpInput() {
    return this._fixedIp;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // name - computed: false, optional: true, required: false
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: true, required: false
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

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }

  // sort_key - computed: false, optional: true, required: false
  private _sortKey?: string; 
  public get sortKey() {
    return this.getStringAttribute('sort_key');
  }
  public set sortKey(value: string) {
    this._sortKey = value;
  }
  public resetSortKey() {
    this._sortKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortKeyInput() {
    return this._sortKey;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.stringToTerraform(this._deviceId),
      device_owner: cdktf.stringToTerraform(this._deviceOwner),
      dns_name: cdktf.stringToTerraform(this._dnsName),
      fixed_ip: cdktf.stringToTerraform(this._fixedIp),
      id: cdktf.stringToTerraform(this._id),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      sort_direction: cdktf.stringToTerraform(this._sortDirection),
      sort_key: cdktf.stringToTerraform(this._sortKey),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state_up: {
        value: cdktf.booleanToHclTerraform(this._adminStateUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_owner: {
        value: cdktf.stringToHclTerraform(this._deviceOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_ip: {
        value: cdktf.stringToHclTerraform(this._fixedIp),
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
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
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
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sort_direction: {
        value: cdktf.stringToHclTerraform(this._sortDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_key: {
        value: cdktf.stringToHclTerraform(this._sortKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
