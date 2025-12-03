// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * An IP address network or segment, and conflict with `source_sgid` and `address_template`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#cidr_ip SecurityGroupRule#cidr_ip}
  */
  readonly cidrIp?: string;
  /**
  * Description of the security group rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#description SecurityGroupRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#id SecurityGroupRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of IP protocol. Valid values: `TCP`, `UDP`, `ICMP`, `ICMPv6` and `ALL`. Default to all types protocol, and conflicts with `protocol_template`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#ip_protocol SecurityGroupRule#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Rule policy of security group. Valid values: `ACCEPT` and `DROP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#policy SecurityGroupRule#policy}
  */
  readonly policy: string;
  /**
  * The security group rule index number, the value of which dynamically changes as the security group rule changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#policy_index SecurityGroupRule#policy_index}
  */
  readonly policyIndex?: number;
  /**
  * Range of the port. The available value can be one, multiple or one segment. E.g. `80`, `80,90` and `80-90`. Default to all ports, and confilicts with `protocol_template`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#port_range SecurityGroupRule#port_range}
  */
  readonly portRange?: string;
  /**
  * ID of the security group to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#security_group_id SecurityGroupRule#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * ID of the nested security group, and conflicts with `cidr_ip` and `address_template`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#source_sgid SecurityGroupRule#source_sgid}
  */
  readonly sourceSgid?: string;
  /**
  * Type of the security group rule. Valid values: `ingress` and `egress`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#type SecurityGroupRule#type}
  */
  readonly type: string;
  /**
  * address_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#address_template SecurityGroupRule#address_template}
  */
  readonly addressTemplate?: SecurityGroupRuleAddressTemplate;
  /**
  * protocol_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#protocol_template SecurityGroupRule#protocol_template}
  */
  readonly protocolTemplate?: SecurityGroupRuleProtocolTemplate;
}
export interface SecurityGroupRuleAddressTemplate {
  /**
  * Address template group ID, conflicts with `template_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#group_id SecurityGroupRule#group_id}
  */
  readonly groupId?: string;
  /**
  * Address template ID, conflicts with `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#template_id SecurityGroupRule#template_id}
  */
  readonly templateId?: string;
}

export function securityGroupRuleAddressTemplateToTerraform(struct?: SecurityGroupRuleAddressTemplateOutputReference | SecurityGroupRuleAddressTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function securityGroupRuleAddressTemplateToHclTerraform(struct?: SecurityGroupRuleAddressTemplateOutputReference | SecurityGroupRuleAddressTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGroupRuleAddressTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityGroupRuleAddressTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGroupRuleAddressTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._templateId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._templateId = value.templateId;
    }
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}
export interface SecurityGroupRuleProtocolTemplate {
  /**
  * Address template group ID, conflicts with `template_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#group_id SecurityGroupRule#group_id}
  */
  readonly groupId?: string;
  /**
  * Address template ID, conflicts with `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#template_id SecurityGroupRule#template_id}
  */
  readonly templateId?: string;
}

export function securityGroupRuleProtocolTemplateToTerraform(struct?: SecurityGroupRuleProtocolTemplateOutputReference | SecurityGroupRuleProtocolTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function securityGroupRuleProtocolTemplateToHclTerraform(struct?: SecurityGroupRuleProtocolTemplateOutputReference | SecurityGroupRuleProtocolTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGroupRuleProtocolTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityGroupRuleProtocolTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGroupRuleProtocolTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._templateId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._templateId = value.templateId;
    }
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule tencentcloud_security_group_rule}
*/
export class SecurityGroupRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_security_group_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityGroupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityGroupRule to import
  * @param importFromId The id of the existing SecurityGroupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityGroupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_security_group_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/security_group_rule tencentcloud_security_group_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityGroupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityGroupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_security_group_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrIp = config.cidrIp;
    this._description = config.description;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._policy = config.policy;
    this._policyIndex = config.policyIndex;
    this._portRange = config.portRange;
    this._securityGroupId = config.securityGroupId;
    this._sourceSgid = config.sourceSgid;
    this._type = config.type;
    this._addressTemplate.internalValue = config.addressTemplate;
    this._protocolTemplate.internalValue = config.protocolTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_ip - computed: false, optional: true, required: false
  private _cidrIp?: string; 
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }
  public set cidrIp(value: string) {
    this._cidrIp = value;
  }
  public resetCidrIp() {
    this._cidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIpInput() {
    return this._cidrIp;
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

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // policy_index - computed: false, optional: true, required: false
  private _policyIndex?: number; 
  public get policyIndex() {
    return this.getNumberAttribute('policy_index');
  }
  public set policyIndex(value: number) {
    this._policyIndex = value;
  }
  public resetPolicyIndex() {
    this._policyIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIndexInput() {
    return this._policyIndex;
  }

  // port_range - computed: true, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
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

  // source_sgid - computed: true, optional: true, required: false
  private _sourceSgid?: string; 
  public get sourceSgid() {
    return this.getStringAttribute('source_sgid');
  }
  public set sourceSgid(value: string) {
    this._sourceSgid = value;
  }
  public resetSourceSgid() {
    this._sourceSgid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSgidInput() {
    return this._sourceSgid;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // address_template - computed: false, optional: true, required: false
  private _addressTemplate = new SecurityGroupRuleAddressTemplateOutputReference(this, "address_template");
  public get addressTemplate() {
    return this._addressTemplate;
  }
  public putAddressTemplate(value: SecurityGroupRuleAddressTemplate) {
    this._addressTemplate.internalValue = value;
  }
  public resetAddressTemplate() {
    this._addressTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTemplateInput() {
    return this._addressTemplate.internalValue;
  }

  // protocol_template - computed: false, optional: true, required: false
  private _protocolTemplate = new SecurityGroupRuleProtocolTemplateOutputReference(this, "protocol_template");
  public get protocolTemplate() {
    return this._protocolTemplate;
  }
  public putProtocolTemplate(value: SecurityGroupRuleProtocolTemplate) {
    this._protocolTemplate.internalValue = value;
  }
  public resetProtocolTemplate() {
    this._protocolTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTemplateInput() {
    return this._protocolTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_ip: cdktf.stringToTerraform(this._cidrIp),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      policy: cdktf.stringToTerraform(this._policy),
      policy_index: cdktf.numberToTerraform(this._policyIndex),
      port_range: cdktf.stringToTerraform(this._portRange),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      source_sgid: cdktf.stringToTerraform(this._sourceSgid),
      type: cdktf.stringToTerraform(this._type),
      address_template: securityGroupRuleAddressTemplateToTerraform(this._addressTemplate.internalValue),
      protocol_template: securityGroupRuleProtocolTemplateToTerraform(this._protocolTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_ip: {
        value: cdktf.stringToHclTerraform(this._cidrIp),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_index: {
        value: cdktf.numberToHclTerraform(this._policyIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_range: {
        value: cdktf.stringToHclTerraform(this._portRange),
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
      source_sgid: {
        value: cdktf.stringToHclTerraform(this._sourceSgid),
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
      address_template: {
        value: securityGroupRuleAddressTemplateToHclTerraform(this._addressTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityGroupRuleAddressTemplateList",
      },
      protocol_template: {
        value: securityGroupRuleProtocolTemplateToHclTerraform(this._protocolTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityGroupRuleProtocolTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
