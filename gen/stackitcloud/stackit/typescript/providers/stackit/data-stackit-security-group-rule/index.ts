// https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/security_group_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitSecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * STACKIT project ID to which the security group rule is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/security_group_rule#project_id DataStackitSecurityGroupRule#project_id}
  */
  readonly projectId: string;
  /**
  * The security group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/security_group_rule#security_group_id DataStackitSecurityGroupRule#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * The security group rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/security_group_rule#security_group_rule_id DataStackitSecurityGroupRule#security_group_rule_id}
  */
  readonly securityGroupRuleId: string;
}
export interface DataStackitSecurityGroupRuleIcmpParameters {
}

export function dataStackitSecurityGroupRuleIcmpParametersToTerraform(struct?: DataStackitSecurityGroupRuleIcmpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitSecurityGroupRuleIcmpParametersToHclTerraform(struct?: DataStackitSecurityGroupRuleIcmpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitSecurityGroupRuleIcmpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitSecurityGroupRuleIcmpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitSecurityGroupRuleIcmpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}
export interface DataStackitSecurityGroupRulePortRange {
}

export function dataStackitSecurityGroupRulePortRangeToTerraform(struct?: DataStackitSecurityGroupRulePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitSecurityGroupRulePortRangeToHclTerraform(struct?: DataStackitSecurityGroupRulePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitSecurityGroupRulePortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitSecurityGroupRulePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitSecurityGroupRulePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataStackitSecurityGroupRuleProtocol {
}

export function dataStackitSecurityGroupRuleProtocolToTerraform(struct?: DataStackitSecurityGroupRuleProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitSecurityGroupRuleProtocolToHclTerraform(struct?: DataStackitSecurityGroupRuleProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitSecurityGroupRuleProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitSecurityGroupRuleProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitSecurityGroupRuleProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/security_group_rule stackit_security_group_rule}
*/
export class DataStackitSecurityGroupRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_security_group_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitSecurityGroupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitSecurityGroupRule to import
  * @param importFromId The id of the existing DataStackitSecurityGroupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/security_group_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitSecurityGroupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_security_group_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/security_group_rule stackit_security_group_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitSecurityGroupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitSecurityGroupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_security_group_rule',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.73.0',
        providerVersionConstraint: '0.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._securityGroupId = config.securityGroupId;
    this._securityGroupRuleId = config.securityGroupRuleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // ether_type - computed: true, optional: false, required: false
  public get etherType() {
    return this.getStringAttribute('ether_type');
  }

  // icmp_parameters - computed: true, optional: false, required: false
  private _icmpParameters = new DataStackitSecurityGroupRuleIcmpParametersOutputReference(this, "icmp_parameters");
  public get icmpParameters() {
    return this._icmpParameters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_range - computed: true, optional: false, required: false
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }

  // port_range - computed: true, optional: false, required: false
  private _portRange = new DataStackitSecurityGroupRulePortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataStackitSecurityGroupRuleProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }

  // remote_security_group_id - computed: true, optional: false, required: false
  public get remoteSecurityGroupId() {
    return this.getStringAttribute('remote_security_group_id');
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_rule_id - computed: false, optional: false, required: true
  private _securityGroupRuleId?: string; 
  public get securityGroupRuleId() {
    return this.getStringAttribute('security_group_rule_id');
  }
  public set securityGroupRuleId(value: string) {
    this._securityGroupRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupRuleIdInput() {
    return this._securityGroupRuleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      security_group_rule_id: cdktf.stringToTerraform(this._securityGroupRuleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      security_group_rule_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
