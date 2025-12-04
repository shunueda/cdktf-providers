// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance#cluster_id DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance#id DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The status of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance#status DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance#status}
  */
  readonly status?: string;
  /**
  * firewall_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance#firewall_rule DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance#firewall_rule}
  */
  readonly firewallRule?: DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRule[] | cdktf.IResolvable;
}
export interface DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRule {
  /**
  * The reason (if needed) for the deferred status of the AWS security group firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance#deferred_reason DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance#deferred_reason}
  */
  readonly deferredReason?: string;
  /**
  * ID of the AWS security group firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance#id DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The security group ID of the AWS security group firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance#security_group_id DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * The type of firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance#type DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance#type}
  */
  readonly type?: string;
}

export function dataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRuleToTerraform(struct?: DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deferred_reason: cdktf.stringToTerraform(struct!.deferredReason),
    id: cdktf.stringToTerraform(struct!.id),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRuleToHclTerraform(struct?: DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deferred_reason: {
      value: cdktf.stringToHclTerraform(struct!.deferredReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deferredReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.deferredReason = this._deferredReason;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deferredReason = undefined;
      this._id = undefined;
      this._securityGroupId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deferredReason = value.deferredReason;
      this._id = value.id;
      this._securityGroupId = value.securityGroupId;
      this._type = value.type;
    }
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
}

export class DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRuleList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRule[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRuleOutputReference {
    return new DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance instaclustr_aws_security_group_firewall_rules_v2_instance}
*/
export class DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_aws_security_group_firewall_rules_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAwsSecurityGroupFirewallRulesV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_aws_security_group_firewall_rules_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_security_group_firewall_rules_v2_instance instaclustr_aws_security_group_firewall_rules_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_aws_security_group_firewall_rules_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.32',
        providerVersionConstraint: '2.1.32'
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
    this._id = config.id;
    this._status = config.status;
    this._firewallRule.internalValue = config.firewallRule;
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

  // firewall_rule - computed: false, optional: true, required: false
  private _firewallRule = new DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRuleList(this, "firewall_rule", false);
  public get firewallRule() {
    return this._firewallRule;
  }
  public putFirewallRule(value: DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRule[] | cdktf.IResolvable) {
    this._firewallRule.internalValue = value;
  }
  public resetFirewallRule() {
    this._firewallRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleInput() {
    return this._firewallRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      firewall_rule: cdktf.listMapper(dataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRuleToTerraform, true)(this._firewallRule.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      firewall_rule: {
        value: cdktf.listMapperHcl(dataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRuleToHclTerraform, true)(this._firewallRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrAwsSecurityGroupFirewallRulesV2InstanceFirewallRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
