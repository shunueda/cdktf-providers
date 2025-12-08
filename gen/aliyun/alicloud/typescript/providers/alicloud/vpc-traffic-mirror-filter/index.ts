// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcTrafficMirrorFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#dry_run VpcTrafficMirrorFilter#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#id VpcTrafficMirrorFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#resource_group_id VpcTrafficMirrorFilter#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#tags VpcTrafficMirrorFilter#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#traffic_mirror_filter_description VpcTrafficMirrorFilter#traffic_mirror_filter_description}
  */
  readonly trafficMirrorFilterDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#traffic_mirror_filter_name VpcTrafficMirrorFilter#traffic_mirror_filter_name}
  */
  readonly trafficMirrorFilterName?: string;
  /**
  * egress_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#egress_rules VpcTrafficMirrorFilter#egress_rules}
  */
  readonly egressRules?: VpcTrafficMirrorFilterEgressRules[] | cdktf.IResolvable;
  /**
  * ingress_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#ingress_rules VpcTrafficMirrorFilter#ingress_rules}
  */
  readonly ingressRules?: VpcTrafficMirrorFilterIngressRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#timeouts VpcTrafficMirrorFilter#timeouts}
  */
  readonly timeouts?: VpcTrafficMirrorFilterTimeouts;
}
export interface VpcTrafficMirrorFilterEgressRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#action VpcTrafficMirrorFilter#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#destination_cidr_block VpcTrafficMirrorFilter#destination_cidr_block}
  */
  readonly destinationCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#destination_port_range VpcTrafficMirrorFilter#destination_port_range}
  */
  readonly destinationPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#priority VpcTrafficMirrorFilter#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#protocol VpcTrafficMirrorFilter#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#source_cidr_block VpcTrafficMirrorFilter#source_cidr_block}
  */
  readonly sourceCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#source_port_range VpcTrafficMirrorFilter#source_port_range}
  */
  readonly sourcePortRange?: string;
}

export function vpcTrafficMirrorFilterEgressRulesToTerraform(struct?: VpcTrafficMirrorFilterEgressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    destination_cidr_block: cdktf.stringToTerraform(struct!.destinationCidrBlock),
    destination_port_range: cdktf.stringToTerraform(struct!.destinationPortRange),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_cidr_block: cdktf.stringToTerraform(struct!.sourceCidrBlock),
    source_port_range: cdktf.stringToTerraform(struct!.sourcePortRange),
  }
}


export function vpcTrafficMirrorFilterEgressRulesToHclTerraform(struct?: VpcTrafficMirrorFilterEgressRules | cdktf.IResolvable): any {
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
    destination_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_range: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_range: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcTrafficMirrorFilterEgressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcTrafficMirrorFilterEgressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destinationCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidrBlock = this._destinationCidrBlock;
    }
    if (this._destinationPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRange = this._destinationPortRange;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidrBlock = this._sourceCidrBlock;
    }
    if (this._sourcePortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcTrafficMirrorFilterEgressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destinationCidrBlock = undefined;
      this._destinationPortRange = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._sourceCidrBlock = undefined;
      this._sourcePortRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destinationCidrBlock = value.destinationCidrBlock;
      this._destinationPortRange = value.destinationPortRange;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._sourceCidrBlock = value.sourceCidrBlock;
      this._sourcePortRange = value.sourcePortRange;
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

  // destination_cidr_block - computed: false, optional: true, required: false
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  public resetDestinationCidrBlock() {
    this._destinationCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange?: string; 
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }
  public set destinationPortRange(value: string) {
    this._destinationPortRange = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange;
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

  // source_cidr_block - computed: false, optional: true, required: false
  private _sourceCidrBlock?: string; 
  public get sourceCidrBlock() {
    return this.getStringAttribute('source_cidr_block');
  }
  public set sourceCidrBlock(value: string) {
    this._sourceCidrBlock = value;
  }
  public resetSourceCidrBlock() {
    this._sourceCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrBlockInput() {
    return this._sourceCidrBlock;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange?: string; 
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }
  public set sourcePortRange(value: string) {
    this._sourcePortRange = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange;
  }

  // traffic_mirror_filter_rule_status - computed: true, optional: false, required: false
  public get trafficMirrorFilterRuleStatus() {
    return this.getStringAttribute('traffic_mirror_filter_rule_status');
  }
}

export class VpcTrafficMirrorFilterEgressRulesList extends cdktf.ComplexList {
  public internalValue? : VpcTrafficMirrorFilterEgressRules[] | cdktf.IResolvable

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
  public get(index: number): VpcTrafficMirrorFilterEgressRulesOutputReference {
    return new VpcTrafficMirrorFilterEgressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcTrafficMirrorFilterIngressRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#action VpcTrafficMirrorFilter#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#destination_cidr_block VpcTrafficMirrorFilter#destination_cidr_block}
  */
  readonly destinationCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#destination_port_range VpcTrafficMirrorFilter#destination_port_range}
  */
  readonly destinationPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#priority VpcTrafficMirrorFilter#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#protocol VpcTrafficMirrorFilter#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#source_cidr_block VpcTrafficMirrorFilter#source_cidr_block}
  */
  readonly sourceCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#source_port_range VpcTrafficMirrorFilter#source_port_range}
  */
  readonly sourcePortRange?: string;
}

export function vpcTrafficMirrorFilterIngressRulesToTerraform(struct?: VpcTrafficMirrorFilterIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    destination_cidr_block: cdktf.stringToTerraform(struct!.destinationCidrBlock),
    destination_port_range: cdktf.stringToTerraform(struct!.destinationPortRange),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_cidr_block: cdktf.stringToTerraform(struct!.sourceCidrBlock),
    source_port_range: cdktf.stringToTerraform(struct!.sourcePortRange),
  }
}


export function vpcTrafficMirrorFilterIngressRulesToHclTerraform(struct?: VpcTrafficMirrorFilterIngressRules | cdktf.IResolvable): any {
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
    destination_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_range: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_range: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcTrafficMirrorFilterIngressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcTrafficMirrorFilterIngressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destinationCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidrBlock = this._destinationCidrBlock;
    }
    if (this._destinationPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRange = this._destinationPortRange;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidrBlock = this._sourceCidrBlock;
    }
    if (this._sourcePortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcTrafficMirrorFilterIngressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destinationCidrBlock = undefined;
      this._destinationPortRange = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._sourceCidrBlock = undefined;
      this._sourcePortRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destinationCidrBlock = value.destinationCidrBlock;
      this._destinationPortRange = value.destinationPortRange;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._sourceCidrBlock = value.sourceCidrBlock;
      this._sourcePortRange = value.sourcePortRange;
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

  // destination_cidr_block - computed: false, optional: true, required: false
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  public resetDestinationCidrBlock() {
    this._destinationCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
  }

  // destination_port_range - computed: false, optional: true, required: false
  private _destinationPortRange?: string; 
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }
  public set destinationPortRange(value: string) {
    this._destinationPortRange = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange;
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

  // source_cidr_block - computed: false, optional: true, required: false
  private _sourceCidrBlock?: string; 
  public get sourceCidrBlock() {
    return this.getStringAttribute('source_cidr_block');
  }
  public set sourceCidrBlock(value: string) {
    this._sourceCidrBlock = value;
  }
  public resetSourceCidrBlock() {
    this._sourceCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrBlockInput() {
    return this._sourceCidrBlock;
  }

  // source_port_range - computed: false, optional: true, required: false
  private _sourcePortRange?: string; 
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }
  public set sourcePortRange(value: string) {
    this._sourcePortRange = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange;
  }

  // traffic_mirror_filter_rule_status - computed: true, optional: false, required: false
  public get trafficMirrorFilterRuleStatus() {
    return this.getStringAttribute('traffic_mirror_filter_rule_status');
  }
}

export class VpcTrafficMirrorFilterIngressRulesList extends cdktf.ComplexList {
  public internalValue? : VpcTrafficMirrorFilterIngressRules[] | cdktf.IResolvable

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
  public get(index: number): VpcTrafficMirrorFilterIngressRulesOutputReference {
    return new VpcTrafficMirrorFilterIngressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcTrafficMirrorFilterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#create VpcTrafficMirrorFilter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#delete VpcTrafficMirrorFilter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#update VpcTrafficMirrorFilter#update}
  */
  readonly update?: string;
}

export function vpcTrafficMirrorFilterTimeoutsToTerraform(struct?: VpcTrafficMirrorFilterTimeouts | cdktf.IResolvable): any {
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


export function vpcTrafficMirrorFilterTimeoutsToHclTerraform(struct?: VpcTrafficMirrorFilterTimeouts | cdktf.IResolvable): any {
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

export class VpcTrafficMirrorFilterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcTrafficMirrorFilterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcTrafficMirrorFilterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter alicloud_vpc_traffic_mirror_filter}
*/
export class VpcTrafficMirrorFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_traffic_mirror_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcTrafficMirrorFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcTrafficMirrorFilter to import
  * @param importFromId The id of the existing VpcTrafficMirrorFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcTrafficMirrorFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_traffic_mirror_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/vpc_traffic_mirror_filter alicloud_vpc_traffic_mirror_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcTrafficMirrorFilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpcTrafficMirrorFilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_traffic_mirror_filter',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._trafficMirrorFilterDescription = config.trafficMirrorFilterDescription;
    this._trafficMirrorFilterName = config.trafficMirrorFilterName;
    this._egressRules.internalValue = config.egressRules;
    this._ingressRules.internalValue = config.ingressRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // traffic_mirror_filter_description - computed: false, optional: true, required: false
  private _trafficMirrorFilterDescription?: string; 
  public get trafficMirrorFilterDescription() {
    return this.getStringAttribute('traffic_mirror_filter_description');
  }
  public set trafficMirrorFilterDescription(value: string) {
    this._trafficMirrorFilterDescription = value;
  }
  public resetTrafficMirrorFilterDescription() {
    this._trafficMirrorFilterDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorFilterDescriptionInput() {
    return this._trafficMirrorFilterDescription;
  }

  // traffic_mirror_filter_name - computed: false, optional: true, required: false
  private _trafficMirrorFilterName?: string; 
  public get trafficMirrorFilterName() {
    return this.getStringAttribute('traffic_mirror_filter_name');
  }
  public set trafficMirrorFilterName(value: string) {
    this._trafficMirrorFilterName = value;
  }
  public resetTrafficMirrorFilterName() {
    this._trafficMirrorFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorFilterNameInput() {
    return this._trafficMirrorFilterName;
  }

  // egress_rules - computed: false, optional: true, required: false
  private _egressRules = new VpcTrafficMirrorFilterEgressRulesList(this, "egress_rules", false);
  public get egressRules() {
    return this._egressRules;
  }
  public putEgressRules(value: VpcTrafficMirrorFilterEgressRules[] | cdktf.IResolvable) {
    this._egressRules.internalValue = value;
  }
  public resetEgressRules() {
    this._egressRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRulesInput() {
    return this._egressRules.internalValue;
  }

  // ingress_rules - computed: false, optional: true, required: false
  private _ingressRules = new VpcTrafficMirrorFilterIngressRulesList(this, "ingress_rules", false);
  public get ingressRules() {
    return this._ingressRules;
  }
  public putIngressRules(value: VpcTrafficMirrorFilterIngressRules[] | cdktf.IResolvable) {
    this._ingressRules.internalValue = value;
  }
  public resetIngressRules() {
    this._ingressRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRulesInput() {
    return this._ingressRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcTrafficMirrorFilterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcTrafficMirrorFilterTimeouts) {
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
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      traffic_mirror_filter_description: cdktf.stringToTerraform(this._trafficMirrorFilterDescription),
      traffic_mirror_filter_name: cdktf.stringToTerraform(this._trafficMirrorFilterName),
      egress_rules: cdktf.listMapper(vpcTrafficMirrorFilterEgressRulesToTerraform, true)(this._egressRules.internalValue),
      ingress_rules: cdktf.listMapper(vpcTrafficMirrorFilterIngressRulesToTerraform, true)(this._ingressRules.internalValue),
      timeouts: vpcTrafficMirrorFilterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      traffic_mirror_filter_description: {
        value: cdktf.stringToHclTerraform(this._trafficMirrorFilterDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_mirror_filter_name: {
        value: cdktf.stringToHclTerraform(this._trafficMirrorFilterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_rules: {
        value: cdktf.listMapperHcl(vpcTrafficMirrorFilterEgressRulesToHclTerraform, true)(this._egressRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcTrafficMirrorFilterEgressRulesList",
      },
      ingress_rules: {
        value: cdktf.listMapperHcl(vpcTrafficMirrorFilterIngressRulesToHclTerraform, true)(this._ingressRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcTrafficMirrorFilterIngressRulesList",
      },
      timeouts: {
        value: vpcTrafficMirrorFilterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcTrafficMirrorFilterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
