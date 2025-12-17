// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AggregateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#capacity_tier Aggregate#capacity_tier}
  */
  readonly capacityTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#client_id Aggregate#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#connector_ip Aggregate#connector_ip}
  */
  readonly connectorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#deployment_mode Aggregate#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#disk_size_size Aggregate#disk_size_size}
  */
  readonly diskSizeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#disk_size_unit Aggregate#disk_size_unit}
  */
  readonly diskSizeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#home_node Aggregate#home_node}
  */
  readonly homeNode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#id Aggregate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Additional capacity to add to the aggregate (only available during updates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#increase_capacity_size Aggregate#increase_capacity_size}
  */
  readonly increaseCapacitySize?: number;
  /**
  * Unit for the additional capacity (Byte, KB, MB, GB, or TB) (only available during updates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#increase_capacity_unit Aggregate#increase_capacity_unit}
  */
  readonly increaseCapacityUnit?: string;
  /**
  * Initial size for EBS Elastic Volumes aggregate. This enables the aggregate to support capacity expansion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#initial_ev_aggregate_size Aggregate#initial_ev_aggregate_size}
  */
  readonly initialEvAggregateSize?: number;
  /**
  * Unit for initial EBS Elastic Volumes aggregate size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#initial_ev_aggregate_unit Aggregate#initial_ev_aggregate_unit}
  */
  readonly initialEvAggregateUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#iops Aggregate#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#name Aggregate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#number_of_disks Aggregate#number_of_disks}
  */
  readonly numberOfDisks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#provider_volume_type Aggregate#provider_volume_type}
  */
  readonly providerVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#tenant_id Aggregate#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#throughput Aggregate#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#working_environment_id Aggregate#working_environment_id}
  */
  readonly workingEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#working_environment_name Aggregate#working_environment_name}
  */
  readonly workingEnvironmentName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate netapp-cloudmanager_aggregate}
*/
export class Aggregate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_aggregate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aggregate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aggregate to import
  * @param importFromId The id of the existing Aggregate that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aggregate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_aggregate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aggregate netapp-cloudmanager_aggregate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AggregateConfig
  */
  public constructor(scope: Construct, id: string, config: AggregateConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_aggregate',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '27.0.0',
        providerVersionConstraint: '27.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityTier = config.capacityTier;
    this._clientId = config.clientId;
    this._connectorIp = config.connectorIp;
    this._deploymentMode = config.deploymentMode;
    this._diskSizeSize = config.diskSizeSize;
    this._diskSizeUnit = config.diskSizeUnit;
    this._homeNode = config.homeNode;
    this._id = config.id;
    this._increaseCapacitySize = config.increaseCapacitySize;
    this._increaseCapacityUnit = config.increaseCapacityUnit;
    this._initialEvAggregateSize = config.initialEvAggregateSize;
    this._initialEvAggregateUnit = config.initialEvAggregateUnit;
    this._iops = config.iops;
    this._name = config.name;
    this._numberOfDisks = config.numberOfDisks;
    this._providerVolumeType = config.providerVolumeType;
    this._tenantId = config.tenantId;
    this._throughput = config.throughput;
    this._workingEnvironmentId = config.workingEnvironmentId;
    this._workingEnvironmentName = config.workingEnvironmentName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_capacity_size - computed: true, optional: false, required: false
  public get availableCapacitySize() {
    return this.getNumberAttribute('available_capacity_size');
  }

  // available_capacity_unit - computed: true, optional: false, required: false
  public get availableCapacityUnit() {
    return this.getStringAttribute('available_capacity_unit');
  }

  // capacity_tier - computed: false, optional: true, required: false
  private _capacityTier?: string; 
  public get capacityTier() {
    return this.getStringAttribute('capacity_tier');
  }
  public set capacityTier(value: string) {
    this._capacityTier = value;
  }
  public resetCapacityTier() {
    this._capacityTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityTierInput() {
    return this._capacityTier;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // connector_ip - computed: false, optional: true, required: false
  private _connectorIp?: string; 
  public get connectorIp() {
    return this.getStringAttribute('connector_ip');
  }
  public set connectorIp(value: string) {
    this._connectorIp = value;
  }
  public resetConnectorIp() {
    this._connectorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIpInput() {
    return this._connectorIp;
  }

  // deployment_mode - computed: false, optional: true, required: false
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  public resetDeploymentMode() {
    this._deploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
  }

  // disk_size_size - computed: false, optional: true, required: false
  private _diskSizeSize?: number; 
  public get diskSizeSize() {
    return this.getNumberAttribute('disk_size_size');
  }
  public set diskSizeSize(value: number) {
    this._diskSizeSize = value;
  }
  public resetDiskSizeSize() {
    this._diskSizeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeSizeInput() {
    return this._diskSizeSize;
  }

  // disk_size_unit - computed: false, optional: true, required: false
  private _diskSizeUnit?: string; 
  public get diskSizeUnit() {
    return this.getStringAttribute('disk_size_unit');
  }
  public set diskSizeUnit(value: string) {
    this._diskSizeUnit = value;
  }
  public resetDiskSizeUnit() {
    this._diskSizeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeUnitInput() {
    return this._diskSizeUnit;
  }

  // home_node - computed: false, optional: true, required: false
  private _homeNode?: string; 
  public get homeNode() {
    return this.getStringAttribute('home_node');
  }
  public set homeNode(value: string) {
    this._homeNode = value;
  }
  public resetHomeNode() {
    this._homeNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeNodeInput() {
    return this._homeNode;
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

  // increase_capacity_size - computed: true, optional: true, required: false
  private _increaseCapacitySize?: number; 
  public get increaseCapacitySize() {
    return this.getNumberAttribute('increase_capacity_size');
  }
  public set increaseCapacitySize(value: number) {
    this._increaseCapacitySize = value;
  }
  public resetIncreaseCapacitySize() {
    this._increaseCapacitySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get increaseCapacitySizeInput() {
    return this._increaseCapacitySize;
  }

  // increase_capacity_unit - computed: true, optional: true, required: false
  private _increaseCapacityUnit?: string; 
  public get increaseCapacityUnit() {
    return this.getStringAttribute('increase_capacity_unit');
  }
  public set increaseCapacityUnit(value: string) {
    this._increaseCapacityUnit = value;
  }
  public resetIncreaseCapacityUnit() {
    this._increaseCapacityUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get increaseCapacityUnitInput() {
    return this._increaseCapacityUnit;
  }

  // initial_ev_aggregate_size - computed: false, optional: true, required: false
  private _initialEvAggregateSize?: number; 
  public get initialEvAggregateSize() {
    return this.getNumberAttribute('initial_ev_aggregate_size');
  }
  public set initialEvAggregateSize(value: number) {
    this._initialEvAggregateSize = value;
  }
  public resetInitialEvAggregateSize() {
    this._initialEvAggregateSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialEvAggregateSizeInput() {
    return this._initialEvAggregateSize;
  }

  // initial_ev_aggregate_unit - computed: false, optional: true, required: false
  private _initialEvAggregateUnit?: string; 
  public get initialEvAggregateUnit() {
    return this.getStringAttribute('initial_ev_aggregate_unit');
  }
  public set initialEvAggregateUnit(value: string) {
    this._initialEvAggregateUnit = value;
  }
  public resetInitialEvAggregateUnit() {
    this._initialEvAggregateUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialEvAggregateUnitInput() {
    return this._initialEvAggregateUnit;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
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

  // number_of_disks - computed: false, optional: true, required: false
  private _numberOfDisks?: number; 
  public get numberOfDisks() {
    return this.getNumberAttribute('number_of_disks');
  }
  public set numberOfDisks(value: number) {
    this._numberOfDisks = value;
  }
  public resetNumberOfDisks() {
    this._numberOfDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDisksInput() {
    return this._numberOfDisks;
  }

  // provider_volume_type - computed: false, optional: true, required: false
  private _providerVolumeType?: string; 
  public get providerVolumeType() {
    return this.getStringAttribute('provider_volume_type');
  }
  public set providerVolumeType(value: string) {
    this._providerVolumeType = value;
  }
  public resetProviderVolumeType() {
    this._providerVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerVolumeTypeInput() {
    return this._providerVolumeType;
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

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // total_capacity_size - computed: true, optional: false, required: false
  public get totalCapacitySize() {
    return this.getNumberAttribute('total_capacity_size');
  }

  // total_capacity_unit - computed: true, optional: false, required: false
  public get totalCapacityUnit() {
    return this.getStringAttribute('total_capacity_unit');
  }

  // working_environment_id - computed: false, optional: true, required: false
  private _workingEnvironmentId?: string; 
  public get workingEnvironmentId() {
    return this.getStringAttribute('working_environment_id');
  }
  public set workingEnvironmentId(value: string) {
    this._workingEnvironmentId = value;
  }
  public resetWorkingEnvironmentId() {
    this._workingEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingEnvironmentIdInput() {
    return this._workingEnvironmentId;
  }

  // working_environment_name - computed: false, optional: true, required: false
  private _workingEnvironmentName?: string; 
  public get workingEnvironmentName() {
    return this.getStringAttribute('working_environment_name');
  }
  public set workingEnvironmentName(value: string) {
    this._workingEnvironmentName = value;
  }
  public resetWorkingEnvironmentName() {
    this._workingEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingEnvironmentNameInput() {
    return this._workingEnvironmentName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_tier: cdktf.stringToTerraform(this._capacityTier),
      client_id: cdktf.stringToTerraform(this._clientId),
      connector_ip: cdktf.stringToTerraform(this._connectorIp),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      disk_size_size: cdktf.numberToTerraform(this._diskSizeSize),
      disk_size_unit: cdktf.stringToTerraform(this._diskSizeUnit),
      home_node: cdktf.stringToTerraform(this._homeNode),
      id: cdktf.stringToTerraform(this._id),
      increase_capacity_size: cdktf.numberToTerraform(this._increaseCapacitySize),
      increase_capacity_unit: cdktf.stringToTerraform(this._increaseCapacityUnit),
      initial_ev_aggregate_size: cdktf.numberToTerraform(this._initialEvAggregateSize),
      initial_ev_aggregate_unit: cdktf.stringToTerraform(this._initialEvAggregateUnit),
      iops: cdktf.numberToTerraform(this._iops),
      name: cdktf.stringToTerraform(this._name),
      number_of_disks: cdktf.numberToTerraform(this._numberOfDisks),
      provider_volume_type: cdktf.stringToTerraform(this._providerVolumeType),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      throughput: cdktf.numberToTerraform(this._throughput),
      working_environment_id: cdktf.stringToTerraform(this._workingEnvironmentId),
      working_environment_name: cdktf.stringToTerraform(this._workingEnvironmentName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_tier: {
        value: cdktf.stringToHclTerraform(this._capacityTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_ip: {
        value: cdktf.stringToHclTerraform(this._connectorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_mode: {
        value: cdktf.stringToHclTerraform(this._deploymentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size_size: {
        value: cdktf.numberToHclTerraform(this._diskSizeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_size_unit: {
        value: cdktf.stringToHclTerraform(this._diskSizeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_node: {
        value: cdktf.stringToHclTerraform(this._homeNode),
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
      increase_capacity_size: {
        value: cdktf.numberToHclTerraform(this._increaseCapacitySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      increase_capacity_unit: {
        value: cdktf.stringToHclTerraform(this._increaseCapacityUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_ev_aggregate_size: {
        value: cdktf.numberToHclTerraform(this._initialEvAggregateSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      initial_ev_aggregate_unit: {
        value: cdktf.stringToHclTerraform(this._initialEvAggregateUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iops: {
        value: cdktf.numberToHclTerraform(this._iops),
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
      number_of_disks: {
        value: cdktf.numberToHclTerraform(this._numberOfDisks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_volume_type: {
        value: cdktf.stringToHclTerraform(this._providerVolumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput: {
        value: cdktf.numberToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      working_environment_id: {
        value: cdktf.stringToHclTerraform(this._workingEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_environment_name: {
        value: cdktf.stringToHclTerraform(this._workingEnvironmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
