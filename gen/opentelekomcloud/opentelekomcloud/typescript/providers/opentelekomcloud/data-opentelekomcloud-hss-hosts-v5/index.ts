// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudHssHostsV5Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#agent_status DataOpentelekomcloudHssHostsV5#agent_status}
  */
  readonly agentStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#asset_value DataOpentelekomcloudHssHostsV5#asset_value}
  */
  readonly assetValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#detect_result DataOpentelekomcloudHssHostsV5#detect_result}
  */
  readonly detectResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#group_id DataOpentelekomcloudHssHostsV5#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#host_id DataOpentelekomcloudHssHostsV5#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#id DataOpentelekomcloudHssHostsV5#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#name DataOpentelekomcloudHssHostsV5#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#os_type DataOpentelekomcloudHssHostsV5#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#policy_group_id DataOpentelekomcloudHssHostsV5#policy_group_id}
  */
  readonly policyGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#protect_charging_mode DataOpentelekomcloudHssHostsV5#protect_charging_mode}
  */
  readonly protectChargingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#protect_status DataOpentelekomcloudHssHostsV5#protect_status}
  */
  readonly protectStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#protect_version DataOpentelekomcloudHssHostsV5#protect_version}
  */
  readonly protectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#status DataOpentelekomcloudHssHostsV5#status}
  */
  readonly status?: string;
}
export interface DataOpentelekomcloudHssHostsV5Hosts {
}

export function dataOpentelekomcloudHssHostsV5HostsToTerraform(struct?: DataOpentelekomcloudHssHostsV5Hosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudHssHostsV5HostsToHclTerraform(struct?: DataOpentelekomcloudHssHostsV5Hosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudHssHostsV5HostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpentelekomcloudHssHostsV5Hosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudHssHostsV5Hosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // agent_status - computed: true, optional: false, required: false
  public get agentStatus() {
    return this.getStringAttribute('agent_status');
  }

  // asset_risk_num - computed: true, optional: false, required: false
  public get assetRiskNum() {
    return this.getNumberAttribute('asset_risk_num');
  }

  // asset_value - computed: true, optional: false, required: false
  public get assetValue() {
    return this.getStringAttribute('asset_value');
  }

  // baseline_risk_num - computed: true, optional: false, required: false
  public get baselineRiskNum() {
    return this.getNumberAttribute('baseline_risk_num');
  }

  // detect_result - computed: true, optional: false, required: false
  public get detectResult() {
    return this.getStringAttribute('detect_result');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intrusion_risk_num - computed: true, optional: false, required: false
  public get intrusionRiskNum() {
    return this.getNumberAttribute('intrusion_risk_num');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // policy_group_id - computed: true, optional: false, required: false
  public get policyGroupId() {
    return this.getStringAttribute('policy_group_id');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // protect_charging_mode - computed: true, optional: false, required: false
  public get protectChargingMode() {
    return this.getStringAttribute('protect_charging_mode');
  }

  // protect_status - computed: true, optional: false, required: false
  public get protectStatus() {
    return this.getStringAttribute('protect_status');
  }

  // protect_version - computed: true, optional: false, required: false
  public get protectVersion() {
    return this.getStringAttribute('protect_version');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vulnerability_risk_num - computed: true, optional: false, required: false
  public get vulnerabilityRiskNum() {
    return this.getNumberAttribute('vulnerability_risk_num');
  }
}

export class DataOpentelekomcloudHssHostsV5HostsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOpentelekomcloudHssHostsV5HostsOutputReference {
    return new DataOpentelekomcloudHssHostsV5HostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5 opentelekomcloud_hss_hosts_v5}
*/
export class DataOpentelekomcloudHssHostsV5 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_hss_hosts_v5";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudHssHostsV5 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudHssHostsV5 to import
  * @param importFromId The id of the existing DataOpentelekomcloudHssHostsV5 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudHssHostsV5 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_hss_hosts_v5", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/hss_hosts_v5 opentelekomcloud_hss_hosts_v5} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudHssHostsV5Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudHssHostsV5Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_hss_hosts_v5',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentStatus = config.agentStatus;
    this._assetValue = config.assetValue;
    this._detectResult = config.detectResult;
    this._groupId = config.groupId;
    this._hostId = config.hostId;
    this._id = config.id;
    this._name = config.name;
    this._osType = config.osType;
    this._policyGroupId = config.policyGroupId;
    this._protectChargingMode = config.protectChargingMode;
    this._protectStatus = config.protectStatus;
    this._protectVersion = config.protectVersion;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_status - computed: false, optional: true, required: false
  private _agentStatus?: string; 
  public get agentStatus() {
    return this.getStringAttribute('agent_status');
  }
  public set agentStatus(value: string) {
    this._agentStatus = value;
  }
  public resetAgentStatus() {
    this._agentStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentStatusInput() {
    return this._agentStatus;
  }

  // asset_value - computed: false, optional: true, required: false
  private _assetValue?: string; 
  public get assetValue() {
    return this.getStringAttribute('asset_value');
  }
  public set assetValue(value: string) {
    this._assetValue = value;
  }
  public resetAssetValue() {
    this._assetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetValueInput() {
    return this._assetValue;
  }

  // detect_result - computed: false, optional: true, required: false
  private _detectResult?: string; 
  public get detectResult() {
    return this.getStringAttribute('detect_result');
  }
  public set detectResult(value: string) {
    this._detectResult = value;
  }
  public resetDetectResult() {
    this._detectResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectResultInput() {
    return this._detectResult;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // host_id - computed: false, optional: true, required: false
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

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataOpentelekomcloudHssHostsV5HostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
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

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // policy_group_id - computed: false, optional: true, required: false
  private _policyGroupId?: string; 
  public get policyGroupId() {
    return this.getStringAttribute('policy_group_id');
  }
  public set policyGroupId(value: string) {
    this._policyGroupId = value;
  }
  public resetPolicyGroupId() {
    this._policyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupIdInput() {
    return this._policyGroupId;
  }

  // protect_charging_mode - computed: false, optional: true, required: false
  private _protectChargingMode?: string; 
  public get protectChargingMode() {
    return this.getStringAttribute('protect_charging_mode');
  }
  public set protectChargingMode(value: string) {
    this._protectChargingMode = value;
  }
  public resetProtectChargingMode() {
    this._protectChargingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectChargingModeInput() {
    return this._protectChargingMode;
  }

  // protect_status - computed: false, optional: true, required: false
  private _protectStatus?: string; 
  public get protectStatus() {
    return this.getStringAttribute('protect_status');
  }
  public set protectStatus(value: string) {
    this._protectStatus = value;
  }
  public resetProtectStatus() {
    this._protectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectStatusInput() {
    return this._protectStatus;
  }

  // protect_version - computed: false, optional: true, required: false
  private _protectVersion?: string; 
  public get protectVersion() {
    return this.getStringAttribute('protect_version');
  }
  public set protectVersion(value: string) {
    this._protectVersion = value;
  }
  public resetProtectVersion() {
    this._protectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectVersionInput() {
    return this._protectVersion;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_status: cdktf.stringToTerraform(this._agentStatus),
      asset_value: cdktf.stringToTerraform(this._assetValue),
      detect_result: cdktf.stringToTerraform(this._detectResult),
      group_id: cdktf.stringToTerraform(this._groupId),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      policy_group_id: cdktf.stringToTerraform(this._policyGroupId),
      protect_charging_mode: cdktf.stringToTerraform(this._protectChargingMode),
      protect_status: cdktf.stringToTerraform(this._protectStatus),
      protect_version: cdktf.stringToTerraform(this._protectVersion),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_status: {
        value: cdktf.stringToHclTerraform(this._agentStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_value: {
        value: cdktf.stringToHclTerraform(this._assetValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detect_result: {
        value: cdktf.stringToHclTerraform(this._detectResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_group_id: {
        value: cdktf.stringToHclTerraform(this._policyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_charging_mode: {
        value: cdktf.stringToHclTerraform(this._protectChargingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_status: {
        value: cdktf.stringToHclTerraform(this._protectStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protect_version: {
        value: cdktf.stringToHclTerraform(this._protectVersion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
