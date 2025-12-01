// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#cidr_ip SecurityGroupRule#cidr_ip}
  */
  readonly cidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#description SecurityGroupRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#id SecurityGroupRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#ip_protocol SecurityGroupRule#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#ipv6_cidr_ip SecurityGroupRule#ipv6_cidr_ip}
  */
  readonly ipv6CidrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#nic_type SecurityGroupRule#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#policy SecurityGroupRule#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#port_range SecurityGroupRule#port_range}
  */
  readonly portRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#priority SecurityGroupRule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#security_group_id SecurityGroupRule#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#source_group_owner_account SecurityGroupRule#source_group_owner_account}
  */
  readonly sourceGroupOwnerAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#source_security_group_id SecurityGroupRule#source_security_group_id}
  */
  readonly sourceSecurityGroupId?: string;
  /**
  * Type of rule, ingress (inbound) or egress (outbound).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#type SecurityGroupRule#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule alibabacloudstack_security_group_rule}
*/
export class SecurityGroupRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_security_group_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityGroupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityGroupRule to import
  * @param importFromId The id of the existing SecurityGroupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityGroupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_security_group_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/security_group_rule alibabacloudstack_security_group_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityGroupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityGroupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_security_group_rule',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._ipv6CidrIp = config.ipv6CidrIp;
    this._nicType = config.nicType;
    this._policy = config.policy;
    this._portRange = config.portRange;
    this._priority = config.priority;
    this._securityGroupId = config.securityGroupId;
    this._sourceGroupOwnerAccount = config.sourceGroupOwnerAccount;
    this._sourceSecurityGroupId = config.sourceSecurityGroupId;
    this._type = config.type;
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

  // description - computed: false, optional: true, required: false
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

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // ipv6_cidr_ip - computed: false, optional: true, required: false
  private _ipv6CidrIp?: string; 
  public get ipv6CidrIp() {
    return this.getStringAttribute('ipv6_cidr_ip');
  }
  public set ipv6CidrIp(value: string) {
    this._ipv6CidrIp = value;
  }
  public resetIpv6CidrIp() {
    this._ipv6CidrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrIpInput() {
    return this._ipv6CidrIp;
  }

  // nic_type - computed: false, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
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

  // port_range - computed: false, optional: false, required: true
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // source_group_owner_account - computed: false, optional: true, required: false
  private _sourceGroupOwnerAccount?: string; 
  public get sourceGroupOwnerAccount() {
    return this.getStringAttribute('source_group_owner_account');
  }
  public set sourceGroupOwnerAccount(value: string) {
    this._sourceGroupOwnerAccount = value;
  }
  public resetSourceGroupOwnerAccount() {
    this._sourceGroupOwnerAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupOwnerAccountInput() {
    return this._sourceGroupOwnerAccount;
  }

  // source_security_group_id - computed: false, optional: true, required: false
  private _sourceSecurityGroupId?: string; 
  public get sourceSecurityGroupId() {
    return this.getStringAttribute('source_security_group_id');
  }
  public set sourceSecurityGroupId(value: string) {
    this._sourceSecurityGroupId = value;
  }
  public resetSourceSecurityGroupId() {
    this._sourceSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupIdInput() {
    return this._sourceSecurityGroupId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_ip: cdktf.stringToTerraform(this._cidrIp),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      ipv6_cidr_ip: cdktf.stringToTerraform(this._ipv6CidrIp),
      nic_type: cdktf.stringToTerraform(this._nicType),
      policy: cdktf.stringToTerraform(this._policy),
      port_range: cdktf.stringToTerraform(this._portRange),
      priority: cdktf.numberToTerraform(this._priority),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      source_group_owner_account: cdktf.stringToTerraform(this._sourceGroupOwnerAccount),
      source_security_group_id: cdktf.stringToTerraform(this._sourceSecurityGroupId),
      type: cdktf.stringToTerraform(this._type),
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
      ipv6_cidr_ip: {
        value: cdktf.stringToHclTerraform(this._ipv6CidrIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nic_type: {
        value: cdktf.stringToHclTerraform(this._nicType),
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
      port_range: {
        value: cdktf.stringToHclTerraform(this._portRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_group_owner_account: {
        value: cdktf.stringToHclTerraform(this._sourceGroupOwnerAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_security_group_id: {
        value: cdktf.stringToHclTerraform(this._sourceSecurityGroupId),
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
