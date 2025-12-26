// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#asset_tag Device#asset_tag}
  */
  readonly assetTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#cluster_id Device#cluster_id}
  */
  readonly clusterId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#comments Device#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#config_template_id Device#config_template_id}
  */
  readonly configTemplateId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#custom_fields Device#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#description Device#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#device_type_id Device#device_type_id}
  */
  readonly deviceTypeId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#id Device#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This is best managed through the use of `jsonencode` and a map of settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#local_context_data Device#local_context_data}
  */
  readonly localContextData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#location_id Device#location_id}
  */
  readonly locationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#name Device#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#platform_id Device#platform_id}
  */
  readonly platformId?: number;
  /**
  * Valid values are `front` and `rear`. Required when `rack_position` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#rack_face Device#rack_face}
  */
  readonly rackFace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#rack_id Device#rack_id}
  */
  readonly rackId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#rack_position Device#rack_position}
  */
  readonly rackPosition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#role_id Device#role_id}
  */
  readonly roleId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#serial Device#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#site_id Device#site_id}
  */
  readonly siteId: number;
  /**
  * Valid values are `offline`, `active`, `planned`, `staged`, `failed`, `inventory` and `decommissioning`. Defaults to `active`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#status Device#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#tags Device#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#tenant_id Device#tenant_id}
  */
  readonly tenantId?: number;
  /**
  * Required when `virtual_chassis_master` and `virtual_chassis_id` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#virtual_chassis_id Device#virtual_chassis_id}
  */
  readonly virtualChassisId?: number;
  /**
  * Required when `virtual_chassis_master` and `virtual_chassis_id` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#virtual_chassis_master Device#virtual_chassis_master}
  */
  readonly virtualChassisMaster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#virtual_chassis_position Device#virtual_chassis_position}
  */
  readonly virtualChassisPosition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#virtual_chassis_priority Device#virtual_chassis_priority}
  */
  readonly virtualChassisPriority?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device netbox_device}
*/
export class Device extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Device resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Device to import
  * @param importFromId The id of the existing Device that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Device to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/device netbox_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_device',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetTag = config.assetTag;
    this._clusterId = config.clusterId;
    this._comments = config.comments;
    this._configTemplateId = config.configTemplateId;
    this._customFields = config.customFields;
    this._description = config.description;
    this._deviceTypeId = config.deviceTypeId;
    this._id = config.id;
    this._localContextData = config.localContextData;
    this._locationId = config.locationId;
    this._name = config.name;
    this._platformId = config.platformId;
    this._rackFace = config.rackFace;
    this._rackId = config.rackId;
    this._rackPosition = config.rackPosition;
    this._roleId = config.roleId;
    this._serial = config.serial;
    this._siteId = config.siteId;
    this._status = config.status;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._virtualChassisId = config.virtualChassisId;
    this._virtualChassisMaster = config.virtualChassisMaster;
    this._virtualChassisPosition = config.virtualChassisPosition;
    this._virtualChassisPriority = config.virtualChassisPriority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_tag - computed: false, optional: true, required: false
  private _assetTag?: string; 
  public get assetTag() {
    return this.getStringAttribute('asset_tag');
  }
  public set assetTag(value: string) {
    this._assetTag = value;
  }
  public resetAssetTag() {
    this._assetTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTagInput() {
    return this._assetTag;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: number; 
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }
  public set clusterId(value: number) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // config_template_id - computed: false, optional: true, required: false
  private _configTemplateId?: number; 
  public get configTemplateId() {
    return this.getNumberAttribute('config_template_id');
  }
  public set configTemplateId(value: number) {
    this._configTemplateId = value;
  }
  public resetConfigTemplateId() {
    this._configTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTemplateIdInput() {
    return this._configTemplateId;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
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

  // device_type_id - computed: false, optional: false, required: true
  private _deviceTypeId?: number; 
  public get deviceTypeId() {
    return this.getNumberAttribute('device_type_id');
  }
  public set deviceTypeId(value: number) {
    this._deviceTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeIdInput() {
    return this._deviceTypeId;
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

  // local_context_data - computed: false, optional: true, required: false
  private _localContextData?: string; 
  public get localContextData() {
    return this.getStringAttribute('local_context_data');
  }
  public set localContextData(value: string) {
    this._localContextData = value;
  }
  public resetLocalContextData() {
    this._localContextData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localContextDataInput() {
    return this._localContextData;
  }

  // location_id - computed: false, optional: true, required: false
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

  // platform_id - computed: false, optional: true, required: false
  private _platformId?: number; 
  public get platformId() {
    return this.getNumberAttribute('platform_id');
  }
  public set platformId(value: number) {
    this._platformId = value;
  }
  public resetPlatformId() {
    this._platformId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId;
  }

  // primary_ipv4 - computed: true, optional: false, required: false
  public get primaryIpv4() {
    return this.getNumberAttribute('primary_ipv4');
  }

  // primary_ipv6 - computed: true, optional: false, required: false
  public get primaryIpv6() {
    return this.getNumberAttribute('primary_ipv6');
  }

  // rack_face - computed: false, optional: true, required: false
  private _rackFace?: string; 
  public get rackFace() {
    return this.getStringAttribute('rack_face');
  }
  public set rackFace(value: string) {
    this._rackFace = value;
  }
  public resetRackFace() {
    this._rackFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackFaceInput() {
    return this._rackFace;
  }

  // rack_id - computed: false, optional: true, required: false
  private _rackId?: number; 
  public get rackId() {
    return this.getNumberAttribute('rack_id');
  }
  public set rackId(value: number) {
    this._rackId = value;
  }
  public resetRackId() {
    this._rackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackIdInput() {
    return this._rackId;
  }

  // rack_position - computed: false, optional: true, required: false
  private _rackPosition?: number; 
  public get rackPosition() {
    return this.getNumberAttribute('rack_position');
  }
  public set rackPosition(value: number) {
    this._rackPosition = value;
  }
  public resetRackPosition() {
    this._rackPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackPositionInput() {
    return this._rackPosition;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
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

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: number; 
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }
  public set tenantId(value: number) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // virtual_chassis_id - computed: false, optional: true, required: false
  private _virtualChassisId?: number; 
  public get virtualChassisId() {
    return this.getNumberAttribute('virtual_chassis_id');
  }
  public set virtualChassisId(value: number) {
    this._virtualChassisId = value;
  }
  public resetVirtualChassisId() {
    this._virtualChassisId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualChassisIdInput() {
    return this._virtualChassisId;
  }

  // virtual_chassis_master - computed: false, optional: true, required: false
  private _virtualChassisMaster?: boolean | cdktf.IResolvable; 
  public get virtualChassisMaster() {
    return this.getBooleanAttribute('virtual_chassis_master');
  }
  public set virtualChassisMaster(value: boolean | cdktf.IResolvable) {
    this._virtualChassisMaster = value;
  }
  public resetVirtualChassisMaster() {
    this._virtualChassisMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualChassisMasterInput() {
    return this._virtualChassisMaster;
  }

  // virtual_chassis_position - computed: false, optional: true, required: false
  private _virtualChassisPosition?: number; 
  public get virtualChassisPosition() {
    return this.getNumberAttribute('virtual_chassis_position');
  }
  public set virtualChassisPosition(value: number) {
    this._virtualChassisPosition = value;
  }
  public resetVirtualChassisPosition() {
    this._virtualChassisPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualChassisPositionInput() {
    return this._virtualChassisPosition;
  }

  // virtual_chassis_priority - computed: false, optional: true, required: false
  private _virtualChassisPriority?: number; 
  public get virtualChassisPriority() {
    return this.getNumberAttribute('virtual_chassis_priority');
  }
  public set virtualChassisPriority(value: number) {
    this._virtualChassisPriority = value;
  }
  public resetVirtualChassisPriority() {
    this._virtualChassisPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualChassisPriorityInput() {
    return this._virtualChassisPriority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_tag: cdktf.stringToTerraform(this._assetTag),
      cluster_id: cdktf.numberToTerraform(this._clusterId),
      comments: cdktf.stringToTerraform(this._comments),
      config_template_id: cdktf.numberToTerraform(this._configTemplateId),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      device_type_id: cdktf.numberToTerraform(this._deviceTypeId),
      id: cdktf.stringToTerraform(this._id),
      local_context_data: cdktf.stringToTerraform(this._localContextData),
      location_id: cdktf.numberToTerraform(this._locationId),
      name: cdktf.stringToTerraform(this._name),
      platform_id: cdktf.numberToTerraform(this._platformId),
      rack_face: cdktf.stringToTerraform(this._rackFace),
      rack_id: cdktf.numberToTerraform(this._rackId),
      rack_position: cdktf.numberToTerraform(this._rackPosition),
      role_id: cdktf.numberToTerraform(this._roleId),
      serial: cdktf.stringToTerraform(this._serial),
      site_id: cdktf.numberToTerraform(this._siteId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.numberToTerraform(this._tenantId),
      virtual_chassis_id: cdktf.numberToTerraform(this._virtualChassisId),
      virtual_chassis_master: cdktf.booleanToTerraform(this._virtualChassisMaster),
      virtual_chassis_position: cdktf.numberToTerraform(this._virtualChassisPosition),
      virtual_chassis_priority: cdktf.numberToTerraform(this._virtualChassisPriority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_tag: {
        value: cdktf.stringToHclTerraform(this._assetTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.numberToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_template_id: {
        value: cdktf.numberToHclTerraform(this._configTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type_id: {
        value: cdktf.numberToHclTerraform(this._deviceTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_context_data: {
        value: cdktf.stringToHclTerraform(this._localContextData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
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
      platform_id: {
        value: cdktf.numberToHclTerraform(this._platformId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rack_face: {
        value: cdktf.stringToHclTerraform(this._rackFace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rack_id: {
        value: cdktf.numberToHclTerraform(this._rackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rack_position: {
        value: cdktf.numberToHclTerraform(this._rackPosition),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: cdktf.numberToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_chassis_id: {
        value: cdktf.numberToHclTerraform(this._virtualChassisId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_chassis_master: {
        value: cdktf.booleanToHclTerraform(this._virtualChassisMaster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_chassis_position: {
        value: cdktf.numberToHclTerraform(this._virtualChassisPosition),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_chassis_priority: {
        value: cdktf.numberToHclTerraform(this._virtualChassisPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
