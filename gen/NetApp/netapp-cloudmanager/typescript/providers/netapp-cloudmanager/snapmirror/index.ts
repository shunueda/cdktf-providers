// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapmirrorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#capacity_tier Snapmirror#capacity_tier}
  */
  readonly capacityTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#client_id Snapmirror#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#connector_ip Snapmirror#connector_ip}
  */
  readonly connectorIp?: string;
  /**
  * Set to true to delete the destination volume when the snapmirror relationship is destroyed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#delete_destination_volume Snapmirror#delete_destination_volume}
  */
  readonly deleteDestinationVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#deployment_mode Snapmirror#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#destination_aggregate_name Snapmirror#destination_aggregate_name}
  */
  readonly destinationAggregateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#destination_svm_name Snapmirror#destination_svm_name}
  */
  readonly destinationSvmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#destination_volume_name Snapmirror#destination_volume_name}
  */
  readonly destinationVolumeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#destination_working_environment_id Snapmirror#destination_working_environment_id}
  */
  readonly destinationWorkingEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#destination_working_environment_name Snapmirror#destination_working_environment_name}
  */
  readonly destinationWorkingEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#id Snapmirror#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#iops Snapmirror#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#max_transfer_rate Snapmirror#max_transfer_rate}
  */
  readonly maxTransferRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#policy Snapmirror#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#provider_volume_type Snapmirror#provider_volume_type}
  */
  readonly providerVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#schedule Snapmirror#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#source_svm_name Snapmirror#source_svm_name}
  */
  readonly sourceSvmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#source_volume_name Snapmirror#source_volume_name}
  */
  readonly sourceVolumeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#source_working_environment_id Snapmirror#source_working_environment_id}
  */
  readonly sourceWorkingEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#source_working_environment_name Snapmirror#source_working_environment_name}
  */
  readonly sourceWorkingEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#tenant_id Snapmirror#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#throughput Snapmirror#throughput}
  */
  readonly throughput?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror netapp-cloudmanager_snapmirror}
*/
export class Snapmirror extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_snapmirror";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snapmirror resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snapmirror to import
  * @param importFromId The id of the existing Snapmirror that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snapmirror to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_snapmirror", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/snapmirror netapp-cloudmanager_snapmirror} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapmirrorConfig
  */
  public constructor(scope: Construct, id: string, config: SnapmirrorConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_snapmirror',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '26.0.0'
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
    this._deleteDestinationVolume = config.deleteDestinationVolume;
    this._deploymentMode = config.deploymentMode;
    this._destinationAggregateName = config.destinationAggregateName;
    this._destinationSvmName = config.destinationSvmName;
    this._destinationVolumeName = config.destinationVolumeName;
    this._destinationWorkingEnvironmentId = config.destinationWorkingEnvironmentId;
    this._destinationWorkingEnvironmentName = config.destinationWorkingEnvironmentName;
    this._id = config.id;
    this._iops = config.iops;
    this._maxTransferRate = config.maxTransferRate;
    this._policy = config.policy;
    this._providerVolumeType = config.providerVolumeType;
    this._schedule = config.schedule;
    this._sourceSvmName = config.sourceSvmName;
    this._sourceVolumeName = config.sourceVolumeName;
    this._sourceWorkingEnvironmentId = config.sourceWorkingEnvironmentId;
    this._sourceWorkingEnvironmentName = config.sourceWorkingEnvironmentName;
    this._tenantId = config.tenantId;
    this._throughput = config.throughput;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // delete_destination_volume - computed: false, optional: true, required: false
  private _deleteDestinationVolume?: boolean | cdktf.IResolvable; 
  public get deleteDestinationVolume() {
    return this.getBooleanAttribute('delete_destination_volume');
  }
  public set deleteDestinationVolume(value: boolean | cdktf.IResolvable) {
    this._deleteDestinationVolume = value;
  }
  public resetDeleteDestinationVolume() {
    this._deleteDestinationVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDestinationVolumeInput() {
    return this._deleteDestinationVolume;
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

  // destination_aggregate_name - computed: false, optional: true, required: false
  private _destinationAggregateName?: string; 
  public get destinationAggregateName() {
    return this.getStringAttribute('destination_aggregate_name');
  }
  public set destinationAggregateName(value: string) {
    this._destinationAggregateName = value;
  }
  public resetDestinationAggregateName() {
    this._destinationAggregateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAggregateNameInput() {
    return this._destinationAggregateName;
  }

  // destination_svm_name - computed: true, optional: true, required: false
  private _destinationSvmName?: string; 
  public get destinationSvmName() {
    return this.getStringAttribute('destination_svm_name');
  }
  public set destinationSvmName(value: string) {
    this._destinationSvmName = value;
  }
  public resetDestinationSvmName() {
    this._destinationSvmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSvmNameInput() {
    return this._destinationSvmName;
  }

  // destination_volume_name - computed: false, optional: false, required: true
  private _destinationVolumeName?: string; 
  public get destinationVolumeName() {
    return this.getStringAttribute('destination_volume_name');
  }
  public set destinationVolumeName(value: string) {
    this._destinationVolumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVolumeNameInput() {
    return this._destinationVolumeName;
  }

  // destination_working_environment_id - computed: false, optional: true, required: false
  private _destinationWorkingEnvironmentId?: string; 
  public get destinationWorkingEnvironmentId() {
    return this.getStringAttribute('destination_working_environment_id');
  }
  public set destinationWorkingEnvironmentId(value: string) {
    this._destinationWorkingEnvironmentId = value;
  }
  public resetDestinationWorkingEnvironmentId() {
    this._destinationWorkingEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationWorkingEnvironmentIdInput() {
    return this._destinationWorkingEnvironmentId;
  }

  // destination_working_environment_name - computed: false, optional: true, required: false
  private _destinationWorkingEnvironmentName?: string; 
  public get destinationWorkingEnvironmentName() {
    return this.getStringAttribute('destination_working_environment_name');
  }
  public set destinationWorkingEnvironmentName(value: string) {
    this._destinationWorkingEnvironmentName = value;
  }
  public resetDestinationWorkingEnvironmentName() {
    this._destinationWorkingEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationWorkingEnvironmentNameInput() {
    return this._destinationWorkingEnvironmentName;
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

  // max_transfer_rate - computed: false, optional: true, required: false
  private _maxTransferRate?: number; 
  public get maxTransferRate() {
    return this.getNumberAttribute('max_transfer_rate');
  }
  public set maxTransferRate(value: number) {
    this._maxTransferRate = value;
  }
  public resetMaxTransferRate() {
    this._maxTransferRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTransferRateInput() {
    return this._maxTransferRate;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // source_svm_name - computed: true, optional: true, required: false
  private _sourceSvmName?: string; 
  public get sourceSvmName() {
    return this.getStringAttribute('source_svm_name');
  }
  public set sourceSvmName(value: string) {
    this._sourceSvmName = value;
  }
  public resetSourceSvmName() {
    this._sourceSvmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSvmNameInput() {
    return this._sourceSvmName;
  }

  // source_volume_name - computed: false, optional: false, required: true
  private _sourceVolumeName?: string; 
  public get sourceVolumeName() {
    return this.getStringAttribute('source_volume_name');
  }
  public set sourceVolumeName(value: string) {
    this._sourceVolumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVolumeNameInput() {
    return this._sourceVolumeName;
  }

  // source_working_environment_id - computed: false, optional: true, required: false
  private _sourceWorkingEnvironmentId?: string; 
  public get sourceWorkingEnvironmentId() {
    return this.getStringAttribute('source_working_environment_id');
  }
  public set sourceWorkingEnvironmentId(value: string) {
    this._sourceWorkingEnvironmentId = value;
  }
  public resetSourceWorkingEnvironmentId() {
    this._sourceWorkingEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceWorkingEnvironmentIdInput() {
    return this._sourceWorkingEnvironmentId;
  }

  // source_working_environment_name - computed: false, optional: true, required: false
  private _sourceWorkingEnvironmentName?: string; 
  public get sourceWorkingEnvironmentName() {
    return this.getStringAttribute('source_working_environment_name');
  }
  public set sourceWorkingEnvironmentName(value: string) {
    this._sourceWorkingEnvironmentName = value;
  }
  public resetSourceWorkingEnvironmentName() {
    this._sourceWorkingEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceWorkingEnvironmentNameInput() {
    return this._sourceWorkingEnvironmentName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_tier: cdktf.stringToTerraform(this._capacityTier),
      client_id: cdktf.stringToTerraform(this._clientId),
      connector_ip: cdktf.stringToTerraform(this._connectorIp),
      delete_destination_volume: cdktf.booleanToTerraform(this._deleteDestinationVolume),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      destination_aggregate_name: cdktf.stringToTerraform(this._destinationAggregateName),
      destination_svm_name: cdktf.stringToTerraform(this._destinationSvmName),
      destination_volume_name: cdktf.stringToTerraform(this._destinationVolumeName),
      destination_working_environment_id: cdktf.stringToTerraform(this._destinationWorkingEnvironmentId),
      destination_working_environment_name: cdktf.stringToTerraform(this._destinationWorkingEnvironmentName),
      id: cdktf.stringToTerraform(this._id),
      iops: cdktf.numberToTerraform(this._iops),
      max_transfer_rate: cdktf.numberToTerraform(this._maxTransferRate),
      policy: cdktf.stringToTerraform(this._policy),
      provider_volume_type: cdktf.stringToTerraform(this._providerVolumeType),
      schedule: cdktf.stringToTerraform(this._schedule),
      source_svm_name: cdktf.stringToTerraform(this._sourceSvmName),
      source_volume_name: cdktf.stringToTerraform(this._sourceVolumeName),
      source_working_environment_id: cdktf.stringToTerraform(this._sourceWorkingEnvironmentId),
      source_working_environment_name: cdktf.stringToTerraform(this._sourceWorkingEnvironmentName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      throughput: cdktf.numberToTerraform(this._throughput),
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
      delete_destination_volume: {
        value: cdktf.booleanToHclTerraform(this._deleteDestinationVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_mode: {
        value: cdktf.stringToHclTerraform(this._deploymentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_aggregate_name: {
        value: cdktf.stringToHclTerraform(this._destinationAggregateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_svm_name: {
        value: cdktf.stringToHclTerraform(this._destinationSvmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_volume_name: {
        value: cdktf.stringToHclTerraform(this._destinationVolumeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_working_environment_id: {
        value: cdktf.stringToHclTerraform(this._destinationWorkingEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_working_environment_name: {
        value: cdktf.stringToHclTerraform(this._destinationWorkingEnvironmentName),
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
      iops: {
        value: cdktf.numberToHclTerraform(this._iops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_transfer_rate: {
        value: cdktf.numberToHclTerraform(this._maxTransferRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_volume_type: {
        value: cdktf.stringToHclTerraform(this._providerVolumeType),
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
      source_svm_name: {
        value: cdktf.stringToHclTerraform(this._sourceSvmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_volume_name: {
        value: cdktf.stringToHclTerraform(this._sourceVolumeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_working_environment_id: {
        value: cdktf.stringToHclTerraform(this._sourceWorkingEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_working_environment_name: {
        value: cdktf.stringToHclTerraform(this._sourceWorkingEnvironmentName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
