// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#aws_cluster_id DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#aws_cluster_id}
  */
  readonly awsClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#cluster_id DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#id DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#filter DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#filter}
  */
  readonly filter?: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Filter[] | cdktf.IResolvable;
  /**
  * firewall_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#firewall_rules DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#firewall_rules}
  */
  readonly firewallRules?: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRules[] | cdktf.IResolvable;
}
export interface DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#name DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#values DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FilterToTerraform(struct?: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FilterToHclTerraform(struct?: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FilterOutputReference {
    return new DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRules {
  /**
  * ID of the cluster for the AWS security group firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#cluster_id DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The reason (if needed) for the deferred status of the AWS security group firewall rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#deferred_reason DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#deferred_reason}
  */
  readonly deferredReason?: string;
  /**
  * ID of the AWS security group firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#id DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The security group ID of the AWS security group firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#security_group_id DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * The status of the AWS security group firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#status DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#status}
  */
  readonly status?: string;
  /**
  * The type of firewall rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#type DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2#type}
  */
  readonly type?: string;
}

export function dataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRulesToTerraform(struct?: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    deferred_reason: cdktf.stringToTerraform(struct!.deferredReason),
    id: cdktf.stringToTerraform(struct!.id),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRulesToHclTerraform(struct?: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
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
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._deferredReason = undefined;
      this._id = undefined;
      this._securityGroupId = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._deferredReason = value.deferredReason;
      this._id = value.id;
      this._securityGroupId = value.securityGroupId;
      this._status = value.status;
      this._type = value.type;
    }
  }

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
}

export class DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRulesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRules[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRulesOutputReference {
    return new DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2 instaclustr_aws_cluster_security_group_firewall_rules_v2}
*/
export class DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_aws_cluster_security_group_firewall_rules_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2 to import
  * @param importFromId The id of the existing DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_aws_cluster_security_group_firewall_rules_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/aws_cluster_security_group_firewall_rules_v2 instaclustr_aws_cluster_security_group_firewall_rules_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Config
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_aws_cluster_security_group_firewall_rules_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.28',
        providerVersionConstraint: '2.1.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsClusterId = config.awsClusterId;
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._filter.internalValue = config.filter;
    this._firewallRules.internalValue = config.firewallRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_cluster_id - computed: false, optional: false, required: true
  private _awsClusterId?: string; 
  public get awsClusterId() {
    return this.getStringAttribute('aws_cluster_id');
  }
  public set awsClusterId(value: string) {
    this._awsClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsClusterIdInput() {
    return this._awsClusterId;
  }

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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // firewall_rules - computed: false, optional: true, required: false
  private _firewallRules = new DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRulesList(this, "firewall_rules", false);
  public get firewallRules() {
    return this._firewallRules;
  }
  public putFirewallRules(value: DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRules[] | cdktf.IResolvable) {
    this._firewallRules.internalValue = value;
  }
  public resetFirewallRules() {
    this._firewallRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRulesInput() {
    return this._firewallRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_cluster_id: cdktf.stringToTerraform(this._awsClusterId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FilterToTerraform, true)(this._filter.internalValue),
      firewall_rules: cdktf.listMapper(dataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRulesToTerraform, true)(this._firewallRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_cluster_id: {
        value: cdktf.stringToHclTerraform(this._awsClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FilterList",
      },
      firewall_rules: {
        value: cdktf.listMapperHcl(dataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRulesToHclTerraform, true)(this._firewallRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrAwsClusterSecurityGroupFirewallRulesV2FirewallRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
