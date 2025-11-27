// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/aws_security_group_firewall_rule_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAwsSecurityGroupFirewallRuleV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster for the AWS security group firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/aws_security_group_firewall_rule_v2_instance#cluster_id DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The reason (if needed) for the deferred status of the AWS security group firewall rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/aws_security_group_firewall_rule_v2_instance#deferred_reason DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance#deferred_reason}
  */
  readonly deferredReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/aws_security_group_firewall_rule_v2_instance#id DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The security group ID of the AWS security group firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/aws_security_group_firewall_rule_v2_instance#security_group_id DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * The status of the AWS security group firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/aws_security_group_firewall_rule_v2_instance#status DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance#status}
  */
  readonly status?: string;
  /**
  * The type of firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/aws_security_group_firewall_rule_v2_instance#type DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/aws_security_group_firewall_rule_v2_instance instaclustr_aws_security_group_firewall_rule_v2_instance}
*/
export class DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_aws_security_group_firewall_rule_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/aws_security_group_firewall_rule_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAwsSecurityGroupFirewallRuleV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_aws_security_group_firewall_rule_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.31/docs/data-sources/aws_security_group_firewall_rule_v2_instance instaclustr_aws_security_group_firewall_rule_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAwsSecurityGroupFirewallRuleV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAwsSecurityGroupFirewallRuleV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_aws_security_group_firewall_rule_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.31',
        providerVersionConstraint: '2.1.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._deferredReason = config.deferredReason;
    this._id = config.id;
    this._securityGroupId = config.securityGroupId;
    this._status = config.status;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // deferred_reason - computed: true, optional: true, required: false
  private _deferredReason?: string; 
  public get deferredReason() {
    return this.getStringAttribute('deferred_reason');
  }
  public set deferredReason(value: string) {
    this._deferredReason = value;
  }
  public resetDeferredReason() {
    this._deferredReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferredReasonInput() {
    return this._deferredReason;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // status - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deferred_reason: cdktf.stringToTerraform(this._deferredReason),
      id: cdktf.stringToTerraform(this._id),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deferred_reason: {
        value: cdktf.stringToHclTerraform(this._deferredReason),
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
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
