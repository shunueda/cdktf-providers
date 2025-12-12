// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#description VpcSecurityGroupRule#description}
  */
  readonly description?: string;
  /**
  * Direction of the Security group rule. Can be `ingress` (inbound network traffic to the VPC network) or `egress` (outbound network traffic from the VPC network).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#direction VpcSecurityGroupRule#direction}
  */
  readonly direction: string;
  /**
  * Minimum port number. Applicable for TCP and UDP protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#from_port VpcSecurityGroupRule#from_port}
  */
  readonly fromPort?: number;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#labels VpcSecurityGroupRule#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Port number (if applied to a single port).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#port VpcSecurityGroupRule#port}
  */
  readonly port?: number;
  /**
  * Special-purpose targets. The `self_security_group` target refers to this particular security group. The `loadbalancer_healthchecks` target represents [NLB health check nodes](https://yandex.cloud/docs/network-load-balancer/concepts/health-check).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#predefined_target VpcSecurityGroupRule#predefined_target}
  */
  readonly predefinedTarget?: string;
  /**
  * Specific network protocol. Can be one of `ANY`, `TCP`, `UDP`, `ICMP`, `IPV6_ICMP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#protocol VpcSecurityGroupRule#protocol}
  */
  readonly protocol?: string;
  /**
  * The id of target security group which rule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#security_group_binding VpcSecurityGroupRule#security_group_binding}
  */
  readonly securityGroupBinding: string;
  /**
  * Target security group ID for this Security group rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#security_group_id VpcSecurityGroupRule#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Maximum port number. Applicable for TCP and UDP protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#to_port VpcSecurityGroupRule#to_port}
  */
  readonly toPort?: number;
  /**
  * The list of IPv4 CIDR prefixes for this Security group rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#v4_cidr_blocks VpcSecurityGroupRule#v4_cidr_blocks}
  */
  readonly v4CidrBlocks?: string[];
  /**
  * The list of IPv6 CIDR prefixes for this Security group rule. Not supported yet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#v6_cidr_blocks VpcSecurityGroupRule#v6_cidr_blocks}
  */
  readonly v6CidrBlocks?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#timeouts VpcSecurityGroupRule#timeouts}
  */
  readonly timeouts?: VpcSecurityGroupRuleTimeouts;
}
export interface VpcSecurityGroupRuleTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#create VpcSecurityGroupRule#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#delete VpcSecurityGroupRule#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#update VpcSecurityGroupRule#update}
  */
  readonly update?: string;
}

export function vpcSecurityGroupRuleTimeoutsToTerraform(struct?: VpcSecurityGroupRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vpcSecurityGroupRuleTimeoutsToHclTerraform(struct?: VpcSecurityGroupRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSecurityGroupRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcSecurityGroupRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSecurityGroupRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule yandex_vpc_security_group_rule}
*/
export class VpcSecurityGroupRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_vpc_security_group_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcSecurityGroupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcSecurityGroupRule to import
  * @param importFromId The id of the existing VpcSecurityGroupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcSecurityGroupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_vpc_security_group_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/vpc_security_group_rule yandex_vpc_security_group_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcSecurityGroupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: VpcSecurityGroupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_vpc_security_group_rule',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._direction = config.direction;
    this._fromPort = config.fromPort;
    this._labels = config.labels;
    this._port = config.port;
    this._predefinedTarget = config.predefinedTarget;
    this._protocol = config.protocol;
    this._securityGroupBinding = config.securityGroupBinding;
    this._securityGroupId = config.securityGroupId;
    this._toPort = config.toPort;
    this._v4CidrBlocks = config.v4CidrBlocks;
    this._v6CidrBlocks = config.v6CidrBlocks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // from_port - computed: true, optional: true, required: false
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  public resetFromPort() {
    this._fromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // predefined_target - computed: true, optional: true, required: false
  private _predefinedTarget?: string; 
  public get predefinedTarget() {
    return this.getStringAttribute('predefined_target');
  }
  public set predefinedTarget(value: string) {
    this._predefinedTarget = value;
  }
  public resetPredefinedTarget() {
    this._predefinedTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedTargetInput() {
    return this._predefinedTarget;
  }

  // protocol - computed: false, optional: true, required: false
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

  // security_group_binding - computed: false, optional: false, required: true
  private _securityGroupBinding?: string; 
  public get securityGroupBinding() {
    return this.getStringAttribute('security_group_binding');
  }
  public set securityGroupBinding(value: string) {
    this._securityGroupBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupBindingInput() {
    return this._securityGroupBinding;
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

  // to_port - computed: true, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }

  // v4_cidr_blocks - computed: true, optional: true, required: false
  private _v4CidrBlocks?: string[]; 
  public get v4CidrBlocks() {
    return this.getListAttribute('v4_cidr_blocks');
  }
  public set v4CidrBlocks(value: string[]) {
    this._v4CidrBlocks = value;
  }
  public resetV4CidrBlocks() {
    this._v4CidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4CidrBlocksInput() {
    return this._v4CidrBlocks;
  }

  // v6_cidr_blocks - computed: true, optional: true, required: false
  private _v6CidrBlocks?: string[]; 
  public get v6CidrBlocks() {
    return this.getListAttribute('v6_cidr_blocks');
  }
  public set v6CidrBlocks(value: string[]) {
    this._v6CidrBlocks = value;
  }
  public resetV6CidrBlocks() {
    this._v6CidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6CidrBlocksInput() {
    return this._v6CidrBlocks;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcSecurityGroupRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcSecurityGroupRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      from_port: cdktf.numberToTerraform(this._fromPort),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      port: cdktf.numberToTerraform(this._port),
      predefined_target: cdktf.stringToTerraform(this._predefinedTarget),
      protocol: cdktf.stringToTerraform(this._protocol),
      security_group_binding: cdktf.stringToTerraform(this._securityGroupBinding),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      to_port: cdktf.numberToTerraform(this._toPort),
      v4_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._v4CidrBlocks),
      v6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._v6CidrBlocks),
      timeouts: vpcSecurityGroupRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_port: {
        value: cdktf.numberToHclTerraform(this._fromPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      predefined_target: {
        value: cdktf.stringToHclTerraform(this._predefinedTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_binding: {
        value: cdktf.stringToHclTerraform(this._securityGroupBinding),
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
      to_port: {
        value: cdktf.numberToHclTerraform(this._toPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v4_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._v4CidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      v6_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._v6CidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: vpcSecurityGroupRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcSecurityGroupRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
