// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSbercloudCfwIpsCustomRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#action_type DataSbercloudCfwIpsCustomRules#action_type}
  */
  readonly actionType?: number;
  /**
  * Specifies the affected OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#affected_os DataSbercloudCfwIpsCustomRules#affected_os}
  */
  readonly affectedOs?: number;
  /**
  * Specifies the attack type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#attack_type DataSbercloudCfwIpsCustomRules#attack_type}
  */
  readonly attackType?: number;
  /**
  * Specifies the enterprise project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#enterprise_project_id DataSbercloudCfwIpsCustomRules#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Specifies the firewall ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#fw_instance_id DataSbercloudCfwIpsCustomRules#fw_instance_id}
  */
  readonly fwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#id DataSbercloudCfwIpsCustomRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the IPS custom rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#ips_name DataSbercloudCfwIpsCustomRules#ips_name}
  */
  readonly ipsName?: string;
  /**
  * Specifies the protected object ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#object_id DataSbercloudCfwIpsCustomRules#object_id}
  */
  readonly objectId: string;
  /**
  * Specifies the protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#protocol DataSbercloudCfwIpsCustomRules#protocol}
  */
  readonly protocol?: number;
  /**
  * Specifies the region in which to query the resource. If omitted, the provider-level region will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#region DataSbercloudCfwIpsCustomRules#region}
  */
  readonly region?: string;
  /**
  * Specifies the severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#severity DataSbercloudCfwIpsCustomRules#severity}
  */
  readonly severity?: number;
  /**
  * Specifies the affected software.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#software DataSbercloudCfwIpsCustomRules#software}
  */
  readonly softwareAttribute?: number;
}
export interface DataSbercloudCfwIpsCustomRulesRecords {
}

export function dataSbercloudCfwIpsCustomRulesRecordsToTerraform(struct?: DataSbercloudCfwIpsCustomRulesRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwIpsCustomRulesRecordsToHclTerraform(struct?: DataSbercloudCfwIpsCustomRulesRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwIpsCustomRulesRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwIpsCustomRulesRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwIpsCustomRulesRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getNumberAttribute('action');
  }

  // affected_os - computed: true, optional: false, required: false
  public get affectedOs() {
    return this.getNumberAttribute('affected_os');
  }

  // attack_type - computed: true, optional: false, required: false
  public get attackType() {
    return this.getNumberAttribute('attack_type');
  }

  // config_status - computed: true, optional: false, required: false
  public get configStatus() {
    return this.getNumberAttribute('config_status');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // dst_port_type - computed: true, optional: false, required: false
  public get dstPortType() {
    return this.getNumberAttribute('dst_port_type');
  }

  // dst_ports - computed: true, optional: false, required: false
  public get dstPorts() {
    return this.getStringAttribute('dst_ports');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // ips_cfw_id - computed: true, optional: false, required: false
  public get ipsCfwId() {
    return this.getStringAttribute('ips_cfw_id');
  }

  // ips_id - computed: true, optional: false, required: false
  public get ipsId() {
    return this.getStringAttribute('ips_id');
  }

  // ips_name - computed: true, optional: false, required: false
  public get ipsName() {
    return this.getStringAttribute('ips_name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getNumberAttribute('severity');
  }

  // software - computed: true, optional: false, required: false
  public get softwareAttribute() {
    return this.getNumberAttribute('software');
  }

  // src_port_type - computed: true, optional: false, required: false
  public get srcPortType() {
    return this.getNumberAttribute('src_port_type');
  }

  // src_ports - computed: true, optional: false, required: false
  public get srcPorts() {
    return this.getStringAttribute('src_ports');
  }
}

export class DataSbercloudCfwIpsCustomRulesRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwIpsCustomRulesRecordsOutputReference {
    return new DataSbercloudCfwIpsCustomRulesRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules sbercloud_cfw_ips_custom_rules}
*/
export class DataSbercloudCfwIpsCustomRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_cfw_ips_custom_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSbercloudCfwIpsCustomRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSbercloudCfwIpsCustomRules to import
  * @param importFromId The id of the existing DataSbercloudCfwIpsCustomRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSbercloudCfwIpsCustomRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_cfw_ips_custom_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/cfw_ips_custom_rules sbercloud_cfw_ips_custom_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSbercloudCfwIpsCustomRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSbercloudCfwIpsCustomRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_cfw_ips_custom_rules',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.15',
        providerVersionConstraint: '1.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionType = config.actionType;
    this._affectedOs = config.affectedOs;
    this._attackType = config.attackType;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._fwInstanceId = config.fwInstanceId;
    this._id = config.id;
    this._ipsName = config.ipsName;
    this._objectId = config.objectId;
    this._protocol = config.protocol;
    this._region = config.region;
    this._severity = config.severity;
    this._software = config.softwareAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: true, required: false
  private _actionType?: number; 
  public get actionType() {
    return this.getNumberAttribute('action_type');
  }
  public set actionType(value: number) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // affected_os - computed: false, optional: true, required: false
  private _affectedOs?: number; 
  public get affectedOs() {
    return this.getNumberAttribute('affected_os');
  }
  public set affectedOs(value: number) {
    this._affectedOs = value;
  }
  public resetAffectedOs() {
    this._affectedOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affectedOsInput() {
    return this._affectedOs;
  }

  // attack_type - computed: false, optional: true, required: false
  private _attackType?: number; 
  public get attackType() {
    return this.getNumberAttribute('attack_type');
  }
  public set attackType(value: number) {
    this._attackType = value;
  }
  public resetAttackType() {
    this._attackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypeInput() {
    return this._attackType;
  }

  // enterprise_project_id - computed: false, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // fw_instance_id - computed: false, optional: false, required: true
  private _fwInstanceId?: string; 
  public get fwInstanceId() {
    return this.getStringAttribute('fw_instance_id');
  }
  public set fwInstanceId(value: string) {
    this._fwInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fwInstanceIdInput() {
    return this._fwInstanceId;
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

  // ips_name - computed: false, optional: true, required: false
  private _ipsName?: string; 
  public get ipsName() {
    return this.getStringAttribute('ips_name');
  }
  public set ipsName(value: string) {
    this._ipsName = value;
  }
  public resetIpsName() {
    this._ipsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsNameInput() {
    return this._ipsName;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // records - computed: true, optional: false, required: false
  private _records = new DataSbercloudCfwIpsCustomRulesRecordsList(this, "records", false);
  public get records() {
    return this._records;
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

  // severity - computed: false, optional: true, required: false
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // software - computed: false, optional: true, required: false
  private _software?: number; 
  public get softwareAttribute() {
    return this.getNumberAttribute('software');
  }
  public set softwareAttribute(value: number) {
    this._software = value;
  }
  public resetSoftwareAttribute() {
    this._software = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAttributeInput() {
    return this._software;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_type: cdktf.numberToTerraform(this._actionType),
      affected_os: cdktf.numberToTerraform(this._affectedOs),
      attack_type: cdktf.numberToTerraform(this._attackType),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      fw_instance_id: cdktf.stringToTerraform(this._fwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      ips_name: cdktf.stringToTerraform(this._ipsName),
      object_id: cdktf.stringToTerraform(this._objectId),
      protocol: cdktf.numberToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      severity: cdktf.numberToTerraform(this._severity),
      software: cdktf.numberToTerraform(this._software),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.numberToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      affected_os: {
        value: cdktf.numberToHclTerraform(this._affectedOs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attack_type: {
        value: cdktf.numberToHclTerraform(this._attackType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fw_instance_id: {
        value: cdktf.stringToHclTerraform(this._fwInstanceId),
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
      ips_name: {
        value: cdktf.stringToHclTerraform(this._ipsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.numberToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      software: {
        value: cdktf.numberToHclTerraform(this._software),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
