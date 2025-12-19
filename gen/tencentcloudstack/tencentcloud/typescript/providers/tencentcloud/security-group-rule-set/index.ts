// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityGroupRuleSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#id SecurityGroupRuleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the security group to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#security_group_id SecurityGroupRuleSet#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#egress SecurityGroupRuleSet#egress}
  */
  readonly egress?: SecurityGroupRuleSetEgress[] | cdktf.IResolvable;
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#ingress SecurityGroupRuleSet#ingress}
  */
  readonly ingress?: SecurityGroupRuleSetIngress[] | cdktf.IResolvable;
}
export interface SecurityGroupRuleSetEgress {
  /**
  * Rule policy of security group. Valid values: `ACCEPT` and `DROP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#action SecurityGroupRuleSet#action}
  */
  readonly action: string;
  /**
  * Specify Group ID of Address template like `ipmg-xxxxxxxx`, conflict with `source_security_id` and `cidr_block`. NOTE: One of `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#address_template_group SecurityGroupRuleSet#address_template_group}
  */
  readonly addressTemplateGroup?: string;
  /**
  * Specify Address template ID like `ipm-xxxxxxxx`, conflict with `source_security_id` and `cidr_block`. NOTE: One of `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#address_template_id SecurityGroupRuleSet#address_template_id}
  */
  readonly addressTemplateId?: string;
  /**
  * An IP address network or CIDR segment. NOTE: `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` are exclusive and cannot be set in the same time; One of `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#cidr_block SecurityGroupRuleSet#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Description of the security group rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#description SecurityGroupRuleSet#description}
  */
  readonly description?: string;
  /**
  * An IPV6 address network or CIDR segment, and conflict with `source_security_id` and `address_template_*`. NOTE: One of `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#ipv6_cidr_block SecurityGroupRuleSet#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Range of the port. The available value can be `all`, a single port, or a port range. E.g. `80`, `80,90`, `80-90` or `all`. Note: If the `Protocol` value is set to `ALL`, the `Port` value also needs to be set to `all`. Default to all ports, and conflicts with `service_template_*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#port SecurityGroupRuleSet#port}
  */
  readonly port?: string;
  /**
  * Type of IP protocol. Valid values: `TCP`, `UDP`, `ICMP`, `ICMPv6` and `ALL`. Default to all types protocol, and conflicts with `service_template_*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#protocol SecurityGroupRuleSet#protocol}
  */
  readonly protocol?: string;
  /**
  * Specify Group ID of Protocol template ID like `ppmg-xxxxxxxx`, conflict with `protocol` and `port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#service_template_group SecurityGroupRuleSet#service_template_group}
  */
  readonly serviceTemplateGroup?: string;
  /**
  * Specify Protocol template ID like `ppm-xxxxxxxx`, conflict with `protocol` and `port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#service_template_id SecurityGroupRuleSet#service_template_id}
  */
  readonly serviceTemplateId?: string;
  /**
  * ID of the nested security group, and conflicts with `cidr_block` and `address_template_*`. NOTE: One of `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#source_security_id SecurityGroupRuleSet#source_security_id}
  */
  readonly sourceSecurityId?: string;
}

export function securityGroupRuleSetEgressToTerraform(struct?: SecurityGroupRuleSetEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    address_template_group: cdktf.stringToTerraform(struct!.addressTemplateGroup),
    address_template_id: cdktf.stringToTerraform(struct!.addressTemplateId),
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
    ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service_template_group: cdktf.stringToTerraform(struct!.serviceTemplateGroup),
    service_template_id: cdktf.stringToTerraform(struct!.serviceTemplateId),
    source_security_id: cdktf.stringToTerraform(struct!.sourceSecurityId),
  }
}


export function securityGroupRuleSetEgressToHclTerraform(struct?: SecurityGroupRuleSetEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_template_group: {
      value: cdktf.stringToHclTerraform(struct!.addressTemplateGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_template_id: {
      value: cdktf.stringToHclTerraform(struct!.addressTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.ipv6CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_template_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceTemplateGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_template_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_security_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceSecurityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGroupRuleSetEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityGroupRuleSetEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._addressTemplateGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressTemplateGroup = this._addressTemplateGroup;
    }
    if (this._addressTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressTemplateId = this._addressTemplateId;
    }
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serviceTemplateGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTemplateGroup = this._serviceTemplateGroup;
    }
    if (this._serviceTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTemplateId = this._serviceTemplateId;
    }
    if (this._sourceSecurityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSecurityId = this._sourceSecurityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGroupRuleSetEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._addressTemplateGroup = undefined;
      this._addressTemplateId = undefined;
      this._cidrBlock = undefined;
      this._description = undefined;
      this._ipv6CidrBlock = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._serviceTemplateGroup = undefined;
      this._serviceTemplateId = undefined;
      this._sourceSecurityId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._addressTemplateGroup = value.addressTemplateGroup;
      this._addressTemplateId = value.addressTemplateId;
      this._cidrBlock = value.cidrBlock;
      this._description = value.description;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._port = value.port;
      this._protocol = value.protocol;
      this._serviceTemplateGroup = value.serviceTemplateGroup;
      this._serviceTemplateId = value.serviceTemplateId;
      this._sourceSecurityId = value.sourceSecurityId;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // address_template_group - computed: false, optional: true, required: false
  private _addressTemplateGroup?: string; 
  public get addressTemplateGroup() {
    return this.getStringAttribute('address_template_group');
  }
  public set addressTemplateGroup(value: string) {
    this._addressTemplateGroup = value;
  }
  public resetAddressTemplateGroup() {
    this._addressTemplateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTemplateGroupInput() {
    return this._addressTemplateGroup;
  }

  // address_template_id - computed: false, optional: true, required: false
  private _addressTemplateId?: string; 
  public get addressTemplateId() {
    return this.getStringAttribute('address_template_id');
  }
  public set addressTemplateId(value: string) {
    this._addressTemplateId = value;
  }
  public resetAddressTemplateId() {
    this._addressTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTemplateIdInput() {
    return this._addressTemplateId;
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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

  // ipv6_cidr_block - computed: false, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // policy_index - computed: true, optional: false, required: false
  public get policyIndex() {
    return this.getNumberAttribute('policy_index');
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_template_group - computed: false, optional: true, required: false
  private _serviceTemplateGroup?: string; 
  public get serviceTemplateGroup() {
    return this.getStringAttribute('service_template_group');
  }
  public set serviceTemplateGroup(value: string) {
    this._serviceTemplateGroup = value;
  }
  public resetServiceTemplateGroup() {
    this._serviceTemplateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateGroupInput() {
    return this._serviceTemplateGroup;
  }

  // service_template_id - computed: false, optional: true, required: false
  private _serviceTemplateId?: string; 
  public get serviceTemplateId() {
    return this.getStringAttribute('service_template_id');
  }
  public set serviceTemplateId(value: string) {
    this._serviceTemplateId = value;
  }
  public resetServiceTemplateId() {
    this._serviceTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateIdInput() {
    return this._serviceTemplateId;
  }

  // source_security_id - computed: false, optional: true, required: false
  private _sourceSecurityId?: string; 
  public get sourceSecurityId() {
    return this.getStringAttribute('source_security_id');
  }
  public set sourceSecurityId(value: string) {
    this._sourceSecurityId = value;
  }
  public resetSourceSecurityId() {
    this._sourceSecurityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityIdInput() {
    return this._sourceSecurityId;
  }
}

export class SecurityGroupRuleSetEgressList extends cdktf.ComplexList {
  public internalValue? : SecurityGroupRuleSetEgress[] | cdktf.IResolvable

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
  public get(index: number): SecurityGroupRuleSetEgressOutputReference {
    return new SecurityGroupRuleSetEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityGroupRuleSetIngress {
  /**
  * Rule policy of security group. Valid values: `ACCEPT` and `DROP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#action SecurityGroupRuleSet#action}
  */
  readonly action: string;
  /**
  * Specify Group ID of Address template like `ipmg-xxxxxxxx`, conflict with `source_security_id` and `cidr_block`. NOTE: One of `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#address_template_group SecurityGroupRuleSet#address_template_group}
  */
  readonly addressTemplateGroup?: string;
  /**
  * Specify Address template ID like `ipm-xxxxxxxx`, conflict with `source_security_id` and `cidr_block`. NOTE: One of `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#address_template_id SecurityGroupRuleSet#address_template_id}
  */
  readonly addressTemplateId?: string;
  /**
  * An IP address network or CIDR segment. NOTE: `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` are exclusive and cannot be set in the same time; One of `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#cidr_block SecurityGroupRuleSet#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Description of the security group rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#description SecurityGroupRuleSet#description}
  */
  readonly description?: string;
  /**
  * An IPV6 address network or CIDR segment, and conflict with `source_security_id` and `address_template_*`. NOTE: One of `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#ipv6_cidr_block SecurityGroupRuleSet#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Range of the port. The available value can be `all`, a single port, or a port range. E.g. `80`, `80,90`, `80-90` or `all`. Note: If the `Protocol` value is set to `ALL`, the `Port` value also needs to be set to `all`. Default to all ports, and conflicts with `service_template_*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#port SecurityGroupRuleSet#port}
  */
  readonly port?: string;
  /**
  * Type of IP protocol. Valid values: `TCP`, `UDP`, `ICMP`, `ICMPv6` and `ALL`. Default to all types protocol, and conflicts with `service_template_*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#protocol SecurityGroupRuleSet#protocol}
  */
  readonly protocol?: string;
  /**
  * Specify Group ID of Protocol template ID like `ppmg-xxxxxxxx`, conflict with `protocol` and `port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#service_template_group SecurityGroupRuleSet#service_template_group}
  */
  readonly serviceTemplateGroup?: string;
  /**
  * Specify Protocol template ID like `ppm-xxxxxxxx`, conflict with `protocol` and `port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#service_template_id SecurityGroupRuleSet#service_template_id}
  */
  readonly serviceTemplateId?: string;
  /**
  * ID of the nested security group, and conflicts with `cidr_block` and `address_template_*`. NOTE: One of `cidr_block`, `ipv6_cidr_block`, `source_security_id` and `address_template_*` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#source_security_id SecurityGroupRuleSet#source_security_id}
  */
  readonly sourceSecurityId?: string;
}

export function securityGroupRuleSetIngressToTerraform(struct?: SecurityGroupRuleSetIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    address_template_group: cdktf.stringToTerraform(struct!.addressTemplateGroup),
    address_template_id: cdktf.stringToTerraform(struct!.addressTemplateId),
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
    ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service_template_group: cdktf.stringToTerraform(struct!.serviceTemplateGroup),
    service_template_id: cdktf.stringToTerraform(struct!.serviceTemplateId),
    source_security_id: cdktf.stringToTerraform(struct!.sourceSecurityId),
  }
}


export function securityGroupRuleSetIngressToHclTerraform(struct?: SecurityGroupRuleSetIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_template_group: {
      value: cdktf.stringToHclTerraform(struct!.addressTemplateGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_template_id: {
      value: cdktf.stringToHclTerraform(struct!.addressTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.ipv6CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_template_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceTemplateGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_template_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_security_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceSecurityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGroupRuleSetIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityGroupRuleSetIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._addressTemplateGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressTemplateGroup = this._addressTemplateGroup;
    }
    if (this._addressTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressTemplateId = this._addressTemplateId;
    }
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serviceTemplateGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTemplateGroup = this._serviceTemplateGroup;
    }
    if (this._serviceTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTemplateId = this._serviceTemplateId;
    }
    if (this._sourceSecurityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSecurityId = this._sourceSecurityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGroupRuleSetIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._addressTemplateGroup = undefined;
      this._addressTemplateId = undefined;
      this._cidrBlock = undefined;
      this._description = undefined;
      this._ipv6CidrBlock = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._serviceTemplateGroup = undefined;
      this._serviceTemplateId = undefined;
      this._sourceSecurityId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._addressTemplateGroup = value.addressTemplateGroup;
      this._addressTemplateId = value.addressTemplateId;
      this._cidrBlock = value.cidrBlock;
      this._description = value.description;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._port = value.port;
      this._protocol = value.protocol;
      this._serviceTemplateGroup = value.serviceTemplateGroup;
      this._serviceTemplateId = value.serviceTemplateId;
      this._sourceSecurityId = value.sourceSecurityId;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // address_template_group - computed: false, optional: true, required: false
  private _addressTemplateGroup?: string; 
  public get addressTemplateGroup() {
    return this.getStringAttribute('address_template_group');
  }
  public set addressTemplateGroup(value: string) {
    this._addressTemplateGroup = value;
  }
  public resetAddressTemplateGroup() {
    this._addressTemplateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTemplateGroupInput() {
    return this._addressTemplateGroup;
  }

  // address_template_id - computed: false, optional: true, required: false
  private _addressTemplateId?: string; 
  public get addressTemplateId() {
    return this.getStringAttribute('address_template_id');
  }
  public set addressTemplateId(value: string) {
    this._addressTemplateId = value;
  }
  public resetAddressTemplateId() {
    this._addressTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTemplateIdInput() {
    return this._addressTemplateId;
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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

  // ipv6_cidr_block - computed: false, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // policy_index - computed: true, optional: false, required: false
  public get policyIndex() {
    return this.getNumberAttribute('policy_index');
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_template_group - computed: false, optional: true, required: false
  private _serviceTemplateGroup?: string; 
  public get serviceTemplateGroup() {
    return this.getStringAttribute('service_template_group');
  }
  public set serviceTemplateGroup(value: string) {
    this._serviceTemplateGroup = value;
  }
  public resetServiceTemplateGroup() {
    this._serviceTemplateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateGroupInput() {
    return this._serviceTemplateGroup;
  }

  // service_template_id - computed: false, optional: true, required: false
  private _serviceTemplateId?: string; 
  public get serviceTemplateId() {
    return this.getStringAttribute('service_template_id');
  }
  public set serviceTemplateId(value: string) {
    this._serviceTemplateId = value;
  }
  public resetServiceTemplateId() {
    this._serviceTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateIdInput() {
    return this._serviceTemplateId;
  }

  // source_security_id - computed: false, optional: true, required: false
  private _sourceSecurityId?: string; 
  public get sourceSecurityId() {
    return this.getStringAttribute('source_security_id');
  }
  public set sourceSecurityId(value: string) {
    this._sourceSecurityId = value;
  }
  public resetSourceSecurityId() {
    this._sourceSecurityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityIdInput() {
    return this._sourceSecurityId;
  }
}

export class SecurityGroupRuleSetIngressList extends cdktf.ComplexList {
  public internalValue? : SecurityGroupRuleSetIngress[] | cdktf.IResolvable

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
  public get(index: number): SecurityGroupRuleSetIngressOutputReference {
    return new SecurityGroupRuleSetIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set tencentcloud_security_group_rule_set}
*/
export class SecurityGroupRuleSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_security_group_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityGroupRuleSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityGroupRuleSet to import
  * @param importFromId The id of the existing SecurityGroupRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityGroupRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_security_group_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/security_group_rule_set tencentcloud_security_group_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityGroupRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityGroupRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_security_group_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._securityGroupId = config.securityGroupId;
    this._egress.internalValue = config.egress;
    this._ingress.internalValue = config.ingress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new SecurityGroupRuleSetEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: SecurityGroupRuleSetEgress[] | cdktf.IResolvable) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new SecurityGroupRuleSetIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: SecurityGroupRuleSetIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      egress: cdktf.listMapper(securityGroupRuleSetEgressToTerraform, true)(this._egress.internalValue),
      ingress: cdktf.listMapper(securityGroupRuleSetIngressToTerraform, true)(this._ingress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      egress: {
        value: cdktf.listMapperHcl(securityGroupRuleSetEgressToHclTerraform, true)(this._egress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityGroupRuleSetEgressList",
      },
      ingress: {
        value: cdktf.listMapperHcl(securityGroupRuleSetIngressToHclTerraform, true)(this._ingress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityGroupRuleSetIngressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
