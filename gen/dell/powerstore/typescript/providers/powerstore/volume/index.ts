// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The app type of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#app_type Volume#app_type}
  */
  readonly appType?: string;
  /**
  * The app type other of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#app_type_other Volume#app_type_other}
  */
  readonly appTypeOther?: string;
  /**
  * The appliance_id of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#appliance_id Volume#appliance_id}
  */
  readonly applianceId?: string;
  /**
  * The appliance name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#appliance_name Volume#appliance_name}
  */
  readonly applianceName?: string;
  /**
  * The Capacity Unit corresponding to the size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#capacity_unit Volume#capacity_unit}
  */
  readonly capacityUnit?: string;
  /**
  * The description of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#description Volume#description}
  */
  readonly description?: string;
  /**
  * The host group id of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#host_group_id Volume#host_group_id}
  */
  readonly hostGroupId?: string;
  /**
  * The host group name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#host_group_name Volume#host_group_name}
  */
  readonly hostGroupName?: string;
  /**
  * The host id of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#host_id Volume#host_id}
  */
  readonly hostId?: string;
  /**
  * The host name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#host_name Volume#host_name}
  */
  readonly hostName?: string;
  /**
  * The current amount of data written to the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#logical_unit_number Volume#logical_unit_number}
  */
  readonly logicalUnitNumber?: number;
  /**
  * The minimum size of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#min_size Volume#min_size}
  */
  readonly minSize?: number;
  /**
  * The name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#name Volume#name}
  */
  readonly name: string;
  /**
  * The performance_policy_id of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#performance_policy_id Volume#performance_policy_id}
  */
  readonly performancePolicyId?: string;
  /**
  * The protection_policy_id of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#protection_policy_id Volume#protection_policy_id}
  */
  readonly protectionPolicyId?: string;
  /**
  * The protection policy name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#protection_policy_name Volume#protection_policy_name}
  */
  readonly protectionPolicyName?: string;
  /**
  * The sector size of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#sector_size Volume#sector_size}
  */
  readonly sectorSize?: number;
  /**
  * The size of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#size Volume#size}
  */
  readonly size: number;
  /**
  * The volume group id of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#volume_group_id Volume#volume_group_id}
  */
  readonly volumeGroupId?: string;
  /**
  * The volume group name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#volume_group_name Volume#volume_group_name}
  */
  readonly volumeGroupName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume powerstore_volume}
*/
export class Volume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volume to import
  * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/volume powerstore_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_volume',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appType = config.appType;
    this._appTypeOther = config.appTypeOther;
    this._applianceId = config.applianceId;
    this._applianceName = config.applianceName;
    this._capacityUnit = config.capacityUnit;
    this._description = config.description;
    this._hostGroupId = config.hostGroupId;
    this._hostGroupName = config.hostGroupName;
    this._hostId = config.hostId;
    this._hostName = config.hostName;
    this._logicalUnitNumber = config.logicalUnitNumber;
    this._minSize = config.minSize;
    this._name = config.name;
    this._performancePolicyId = config.performancePolicyId;
    this._protectionPolicyId = config.protectionPolicyId;
    this._protectionPolicyName = config.protectionPolicyName;
    this._sectorSize = config.sectorSize;
    this._size = config.size;
    this._volumeGroupId = config.volumeGroupId;
    this._volumeGroupName = config.volumeGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_type - computed: true, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // app_type_other - computed: true, optional: true, required: false
  private _appTypeOther?: string; 
  public get appTypeOther() {
    return this.getStringAttribute('app_type_other');
  }
  public set appTypeOther(value: string) {
    this._appTypeOther = value;
  }
  public resetAppTypeOther() {
    this._appTypeOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeOtherInput() {
    return this._appTypeOther;
  }

  // appliance_id - computed: true, optional: true, required: false
  private _applianceId?: string; 
  public get applianceId() {
    return this.getStringAttribute('appliance_id');
  }
  public set applianceId(value: string) {
    this._applianceId = value;
  }
  public resetApplianceId() {
    this._applianceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceIdInput() {
    return this._applianceId;
  }

  // appliance_name - computed: false, optional: true, required: false
  private _applianceName?: string; 
  public get applianceName() {
    return this.getStringAttribute('appliance_name');
  }
  public set applianceName(value: string) {
    this._applianceName = value;
  }
  public resetApplianceName() {
    this._applianceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceNameInput() {
    return this._applianceName;
  }

  // capacity_unit - computed: true, optional: true, required: false
  private _capacityUnit?: string; 
  public get capacityUnit() {
    return this.getStringAttribute('capacity_unit');
  }
  public set capacityUnit(value: string) {
    this._capacityUnit = value;
  }
  public resetCapacityUnit() {
    this._capacityUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitInput() {
    return this._capacityUnit;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // host_group_id - computed: true, optional: true, required: false
  private _hostGroupId?: string; 
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }
  public set hostGroupId(value: string) {
    this._hostGroupId = value;
  }
  public resetHostGroupId() {
    this._hostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdInput() {
    return this._hostGroupId;
  }

  // host_group_name - computed: false, optional: true, required: false
  private _hostGroupName?: string; 
  public get hostGroupName() {
    return this.getStringAttribute('host_group_name');
  }
  public set hostGroupName(value: string) {
    this._hostGroupName = value;
  }
  public resetHostGroupName() {
    this._hostGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupNameInput() {
    return this._hostGroupName;
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_replication_destination - computed: true, optional: false, required: false
  public get isReplicationDestination() {
    return this.getBooleanAttribute('is_replication_destination');
  }

  // logical_unit_number - computed: true, optional: true, required: false
  private _logicalUnitNumber?: number; 
  public get logicalUnitNumber() {
    return this.getNumberAttribute('logical_unit_number');
  }
  public set logicalUnitNumber(value: number) {
    this._logicalUnitNumber = value;
  }
  public resetLogicalUnitNumber() {
    this._logicalUnitNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalUnitNumberInput() {
    return this._logicalUnitNumber;
  }

  // logical_used - computed: true, optional: false, required: false
  public get logicalUsed() {
    return this.getNumberAttribute('logical_used');
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // nguid - computed: true, optional: false, required: false
  public get nguid() {
    return this.getStringAttribute('nguid');
  }

  // node_affinity - computed: true, optional: false, required: false
  public get nodeAffinity() {
    return this.getStringAttribute('node_affinity');
  }

  // nsid - computed: true, optional: false, required: false
  public get nsid() {
    return this.getNumberAttribute('nsid');
  }

  // performance_policy_id - computed: true, optional: true, required: false
  private _performancePolicyId?: string; 
  public get performancePolicyId() {
    return this.getStringAttribute('performance_policy_id');
  }
  public set performancePolicyId(value: string) {
    this._performancePolicyId = value;
  }
  public resetPerformancePolicyId() {
    this._performancePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performancePolicyIdInput() {
    return this._performancePolicyId;
  }

  // protection_policy_id - computed: true, optional: true, required: false
  private _protectionPolicyId?: string; 
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }
  public set protectionPolicyId(value: string) {
    this._protectionPolicyId = value;
  }
  public resetProtectionPolicyId() {
    this._protectionPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyIdInput() {
    return this._protectionPolicyId;
  }

  // protection_policy_name - computed: false, optional: true, required: false
  private _protectionPolicyName?: string; 
  public get protectionPolicyName() {
    return this.getStringAttribute('protection_policy_name');
  }
  public set protectionPolicyName(value: string) {
    this._protectionPolicyName = value;
  }
  public resetProtectionPolicyName() {
    this._protectionPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionPolicyNameInput() {
    return this._protectionPolicyName;
  }

  // sector_size - computed: true, optional: true, required: false
  private _sectorSize?: number; 
  public get sectorSize() {
    return this.getNumberAttribute('sector_size');
  }
  public set sectorSize(value: number) {
    this._sectorSize = value;
  }
  public resetSectorSize() {
    this._sectorSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectorSizeInput() {
    return this._sectorSize;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // volume_group_id - computed: true, optional: true, required: false
  private _volumeGroupId?: string; 
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
  }
  public set volumeGroupId(value: string) {
    this._volumeGroupId = value;
  }
  public resetVolumeGroupId() {
    this._volumeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupIdInput() {
    return this._volumeGroupId;
  }

  // volume_group_name - computed: false, optional: true, required: false
  private _volumeGroupName?: string; 
  public get volumeGroupName() {
    return this.getStringAttribute('volume_group_name');
  }
  public set volumeGroupName(value: string) {
    this._volumeGroupName = value;
  }
  public resetVolumeGroupName() {
    this._volumeGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupNameInput() {
    return this._volumeGroupName;
  }

  // wwn - computed: true, optional: false, required: false
  public get wwn() {
    return this.getStringAttribute('wwn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_type: cdktf.stringToTerraform(this._appType),
      app_type_other: cdktf.stringToTerraform(this._appTypeOther),
      appliance_id: cdktf.stringToTerraform(this._applianceId),
      appliance_name: cdktf.stringToTerraform(this._applianceName),
      capacity_unit: cdktf.stringToTerraform(this._capacityUnit),
      description: cdktf.stringToTerraform(this._description),
      host_group_id: cdktf.stringToTerraform(this._hostGroupId),
      host_group_name: cdktf.stringToTerraform(this._hostGroupName),
      host_id: cdktf.stringToTerraform(this._hostId),
      host_name: cdktf.stringToTerraform(this._hostName),
      logical_unit_number: cdktf.numberToTerraform(this._logicalUnitNumber),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      performance_policy_id: cdktf.stringToTerraform(this._performancePolicyId),
      protection_policy_id: cdktf.stringToTerraform(this._protectionPolicyId),
      protection_policy_name: cdktf.stringToTerraform(this._protectionPolicyName),
      sector_size: cdktf.numberToTerraform(this._sectorSize),
      size: cdktf.numberToTerraform(this._size),
      volume_group_id: cdktf.stringToTerraform(this._volumeGroupId),
      volume_group_name: cdktf.stringToTerraform(this._volumeGroupName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_type: {
        value: cdktf.stringToHclTerraform(this._appType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_type_other: {
        value: cdktf.stringToHclTerraform(this._appTypeOther),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appliance_id: {
        value: cdktf.stringToHclTerraform(this._applianceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appliance_name: {
        value: cdktf.stringToHclTerraform(this._applianceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_unit: {
        value: cdktf.stringToHclTerraform(this._capacityUnit),
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
      host_group_id: {
        value: cdktf.stringToHclTerraform(this._hostGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_group_name: {
        value: cdktf.stringToHclTerraform(this._hostGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_unit_number: {
        value: cdktf.numberToHclTerraform(this._logicalUnitNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
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
      performance_policy_id: {
        value: cdktf.stringToHclTerraform(this._performancePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_policy_id: {
        value: cdktf.stringToHclTerraform(this._protectionPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_policy_name: {
        value: cdktf.stringToHclTerraform(this._protectionPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sector_size: {
        value: cdktf.numberToHclTerraform(this._sectorSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_group_id: {
        value: cdktf.stringToHclTerraform(this._volumeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_group_name: {
        value: cdktf.stringToHclTerraform(this._volumeGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
