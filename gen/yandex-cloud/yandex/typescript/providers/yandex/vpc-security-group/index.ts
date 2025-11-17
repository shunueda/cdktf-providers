// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#description VpcSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#folder_id VpcSecurityGroup#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#id VpcSecurityGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#labels VpcSecurityGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#name VpcSecurityGroup#name}
  */
  readonly name?: string;
  /**
  * ID of the network this security group belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#network_id VpcSecurityGroup#network_id}
  */
  readonly networkId: string;
  /**
  * egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#egress VpcSecurityGroup#egress}
  */
  readonly egress?: VpcSecurityGroupEgress[] | cdktf.IResolvable;
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#ingress VpcSecurityGroup#ingress}
  */
  readonly ingress?: VpcSecurityGroupIngress[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#timeouts VpcSecurityGroup#timeouts}
  */
  readonly timeouts?: VpcSecurityGroupTimeouts;
}
export interface VpcSecurityGroupEgress {
  /**
  * Description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#description VpcSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Minimum port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#from_port VpcSecurityGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Labels to assign to this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#labels VpcSecurityGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Port number (if applied to a single port).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#port VpcSecurityGroup#port}
  */
  readonly port?: number;
  /**
  * Special-purpose targets. `self_security_group` refers to this particular security group. `loadbalancer_healthchecks` represents [loadbalancer health check nodes](https://yandex.cloud/docs/network-load-balancer/concepts/health-check).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#predefined_target VpcSecurityGroup#predefined_target}
  */
  readonly predefinedTarget?: string;
  /**
  * One of `ANY`, `TCP`, `UDP`, `ICMP`, `IPV6_ICMP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#protocol VpcSecurityGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Target security group ID for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#security_group_id VpcSecurityGroup#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Maximum port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#to_port VpcSecurityGroup#to_port}
  */
  readonly toPort?: number;
  /**
  * The blocks of IPv4 addresses for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#v4_cidr_blocks VpcSecurityGroup#v4_cidr_blocks}
  */
  readonly v4CidrBlocks?: string[];
  /**
  * The blocks of IPv6 addresses for this rule. `v6_cidr_blocks` argument is currently not supported. It will be available in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#v6_cidr_blocks VpcSecurityGroup#v6_cidr_blocks}
  */
  readonly v6CidrBlocks?: string[];
}

export function vpcSecurityGroupEgressToTerraform(struct?: VpcSecurityGroupEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    port: cdktf.numberToTerraform(struct!.port),
    predefined_target: cdktf.stringToTerraform(struct!.predefinedTarget),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    to_port: cdktf.numberToTerraform(struct!.toPort),
    v4_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.v4CidrBlocks),
    v6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.v6CidrBlocks),
  }
}


export function vpcSecurityGroupEgressToHclTerraform(struct?: VpcSecurityGroupEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    predefined_target: {
      value: cdktf.stringToHclTerraform(struct!.predefinedTarget),
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
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v4_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.v4CidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    v6_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.v6CidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSecurityGroupEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcSecurityGroupEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._predefinedTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedTarget = this._predefinedTarget;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    if (this._v4CidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4CidrBlocks = this._v4CidrBlocks;
    }
    if (this._v6CidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6CidrBlocks = this._v6CidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSecurityGroupEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fromPort = undefined;
      this._labels = undefined;
      this._port = undefined;
      this._predefinedTarget = undefined;
      this._protocol = undefined;
      this._securityGroupId = undefined;
      this._toPort = undefined;
      this._v4CidrBlocks = undefined;
      this._v6CidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fromPort = value.fromPort;
      this._labels = value.labels;
      this._port = value.port;
      this._predefinedTarget = value.predefinedTarget;
      this._protocol = value.protocol;
      this._securityGroupId = value.securityGroupId;
      this._toPort = value.toPort;
      this._v4CidrBlocks = value.v4CidrBlocks;
      this._v6CidrBlocks = value.v6CidrBlocks;
    }
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

  // from_port - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
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

  // predefined_target - computed: false, optional: true, required: false
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // security_group_id - computed: false, optional: true, required: false
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

  // to_port - computed: false, optional: true, required: false
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

  // v4_cidr_blocks - computed: false, optional: true, required: false
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

  // v6_cidr_blocks - computed: false, optional: true, required: false
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
}

export class VpcSecurityGroupEgressList extends cdktf.ComplexList {
  public internalValue? : VpcSecurityGroupEgress[] | cdktf.IResolvable

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
  public get(index: number): VpcSecurityGroupEgressOutputReference {
    return new VpcSecurityGroupEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcSecurityGroupIngress {
  /**
  * Description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#description VpcSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Minimum port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#from_port VpcSecurityGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Labels to assign to this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#labels VpcSecurityGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Port number (if applied to a single port).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#port VpcSecurityGroup#port}
  */
  readonly port?: number;
  /**
  * Special-purpose targets. `self_security_group` refers to this particular security group. `loadbalancer_healthchecks` represents [loadbalancer health check nodes](https://yandex.cloud/docs/network-load-balancer/concepts/health-check).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#predefined_target VpcSecurityGroup#predefined_target}
  */
  readonly predefinedTarget?: string;
  /**
  * One of `ANY`, `TCP`, `UDP`, `ICMP`, `IPV6_ICMP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#protocol VpcSecurityGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Target security group ID for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#security_group_id VpcSecurityGroup#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Maximum port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#to_port VpcSecurityGroup#to_port}
  */
  readonly toPort?: number;
  /**
  * The blocks of IPv4 addresses for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#v4_cidr_blocks VpcSecurityGroup#v4_cidr_blocks}
  */
  readonly v4CidrBlocks?: string[];
  /**
  * The blocks of IPv6 addresses for this rule. `v6_cidr_blocks` argument is currently not supported. It will be available in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#v6_cidr_blocks VpcSecurityGroup#v6_cidr_blocks}
  */
  readonly v6CidrBlocks?: string[];
}

export function vpcSecurityGroupIngressToTerraform(struct?: VpcSecurityGroupIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    port: cdktf.numberToTerraform(struct!.port),
    predefined_target: cdktf.stringToTerraform(struct!.predefinedTarget),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    to_port: cdktf.numberToTerraform(struct!.toPort),
    v4_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.v4CidrBlocks),
    v6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.v6CidrBlocks),
  }
}


export function vpcSecurityGroupIngressToHclTerraform(struct?: VpcSecurityGroupIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_port: {
      value: cdktf.numberToHclTerraform(struct!.fromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    predefined_target: {
      value: cdktf.stringToHclTerraform(struct!.predefinedTarget),
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
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktf.numberToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v4_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.v4CidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    v6_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.v6CidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSecurityGroupIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcSecurityGroupIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._predefinedTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedTarget = this._predefinedTarget;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    if (this._v4CidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4CidrBlocks = this._v4CidrBlocks;
    }
    if (this._v6CidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6CidrBlocks = this._v6CidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSecurityGroupIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fromPort = undefined;
      this._labels = undefined;
      this._port = undefined;
      this._predefinedTarget = undefined;
      this._protocol = undefined;
      this._securityGroupId = undefined;
      this._toPort = undefined;
      this._v4CidrBlocks = undefined;
      this._v6CidrBlocks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fromPort = value.fromPort;
      this._labels = value.labels;
      this._port = value.port;
      this._predefinedTarget = value.predefinedTarget;
      this._protocol = value.protocol;
      this._securityGroupId = value.securityGroupId;
      this._toPort = value.toPort;
      this._v4CidrBlocks = value.v4CidrBlocks;
      this._v6CidrBlocks = value.v6CidrBlocks;
    }
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

  // from_port - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
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

  // predefined_target - computed: false, optional: true, required: false
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // security_group_id - computed: false, optional: true, required: false
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

  // to_port - computed: false, optional: true, required: false
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

  // v4_cidr_blocks - computed: false, optional: true, required: false
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

  // v6_cidr_blocks - computed: false, optional: true, required: false
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
}

export class VpcSecurityGroupIngressList extends cdktf.ComplexList {
  public internalValue? : VpcSecurityGroupIngress[] | cdktf.IResolvable

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
  public get(index: number): VpcSecurityGroupIngressOutputReference {
    return new VpcSecurityGroupIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcSecurityGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#create VpcSecurityGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#delete VpcSecurityGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#update VpcSecurityGroup#update}
  */
  readonly update?: string;
}

export function vpcSecurityGroupTimeoutsToTerraform(struct?: VpcSecurityGroupTimeouts | cdktf.IResolvable): any {
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


export function vpcSecurityGroupTimeoutsToHclTerraform(struct?: VpcSecurityGroupTimeouts | cdktf.IResolvable): any {
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

export class VpcSecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcSecurityGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcSecurityGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group yandex_vpc_security_group}
*/
export class VpcSecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_vpc_security_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcSecurityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcSecurityGroup to import
  * @param importFromId The id of the existing VpcSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcSecurityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_vpc_security_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/vpc_security_group yandex_vpc_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcSecurityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VpcSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_vpc_security_group',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
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
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._egress.internalValue = config.egress;
    this._ingress.internalValue = config.ingress;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new VpcSecurityGroupEgressList(this, "egress", true);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: VpcSecurityGroupEgress[] | cdktf.IResolvable) {
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
  private _ingress = new VpcSecurityGroupIngressList(this, "ingress", true);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: VpcSecurityGroupIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcSecurityGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcSecurityGroupTimeouts) {
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
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      egress: cdktf.listMapper(vpcSecurityGroupEgressToTerraform, true)(this._egress.internalValue),
      ingress: cdktf.listMapper(vpcSecurityGroupIngressToTerraform, true)(this._ingress.internalValue),
      timeouts: vpcSecurityGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress: {
        value: cdktf.listMapperHcl(vpcSecurityGroupEgressToHclTerraform, true)(this._egress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcSecurityGroupEgressList",
      },
      ingress: {
        value: cdktf.listMapperHcl(vpcSecurityGroupIngressToHclTerraform, true)(this._ingress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcSecurityGroupIngressList",
      },
      timeouts: {
        value: vpcSecurityGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcSecurityGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
