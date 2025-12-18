// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#action NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#id NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#name NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#network_firewall_policy_id}
  */
  readonly networkFirewallPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#protocol NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#protocol}
  */
  readonly protocol: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#condition NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#condition}
  */
  readonly condition: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition;
  /**
  * position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#position NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#position}
  */
  readonly position?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#profile NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#profile}
  */
  readonly profile?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#timeouts NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#timeouts}
  */
  readonly timeouts?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeouts;
}
export interface NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#destination_address NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#destination_address}
  */
  readonly destinationAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#source_address NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#source_address}
  */
  readonly sourceAddress?: string[];
}

export function networkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionToTerraform(struct?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference | NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddress),
    source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddress),
  }
}


export function networkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionToHclTerraform(struct?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference | NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationAddress = undefined;
      this._sourceAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationAddress = value.destinationAddress;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // destination_address - computed: true, optional: true, required: false
  private _destinationAddress?: string[]; 
  public get destinationAddress() {
    return this.getListAttribute('destination_address');
  }
  public set destinationAddress(value: string[]) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress?: string[]; 
  public get sourceAddress() {
    return this.getListAttribute('source_address');
  }
  public set sourceAddress(value: string[]) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}
export interface NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#after_rule NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#after_rule}
  */
  readonly afterRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#before_rule NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#before_rule}
  */
  readonly beforeRule?: string;
}

export function networkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionToTerraform(struct?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference | NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_rule: cdktf.stringToTerraform(struct!.afterRule),
    before_rule: cdktf.stringToTerraform(struct!.beforeRule),
  }
}


export function networkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionToHclTerraform(struct?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference | NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_rule: {
      value: cdktf.stringToHclTerraform(struct!.afterRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    before_rule: {
      value: cdktf.stringToHclTerraform(struct!.beforeRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterRule = this._afterRule;
    }
    if (this._beforeRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeRule = this._beforeRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterRule = undefined;
      this._beforeRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterRule = value.afterRule;
      this._beforeRule = value.beforeRule;
    }
  }

  // after_rule - computed: true, optional: true, required: false
  private _afterRule?: string; 
  public get afterRule() {
    return this.getStringAttribute('after_rule');
  }
  public set afterRule(value: string) {
    this._afterRule = value;
  }
  public resetAfterRule() {
    this._afterRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterRuleInput() {
    return this._afterRule;
  }

  // before_rule - computed: true, optional: true, required: false
  private _beforeRule?: string; 
  public get beforeRule() {
    return this.getStringAttribute('before_rule');
  }
  public set beforeRule(value: string) {
    this._beforeRule = value;
  }
  public resetBeforeRule() {
    this._beforeRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeRuleInput() {
    return this._beforeRule;
  }
}
export interface NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#must_return_traffic_to_source NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#must_return_traffic_to_source}
  */
  readonly mustReturnTrafficToSource?: boolean | cdktf.IResolvable;
}

export function networkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileToTerraform(struct?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference | NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    must_return_traffic_to_source: cdktf.booleanToTerraform(struct!.mustReturnTrafficToSource),
  }
}


export function networkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileToHclTerraform(struct?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference | NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    must_return_traffic_to_source: {
      value: cdktf.booleanToHclTerraform(struct!.mustReturnTrafficToSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mustReturnTrafficToSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.mustReturnTrafficToSource = this._mustReturnTrafficToSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mustReturnTrafficToSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mustReturnTrafficToSource = value.mustReturnTrafficToSource;
    }
  }

  // must_return_traffic_to_source - computed: true, optional: true, required: false
  private _mustReturnTrafficToSource?: boolean | cdktf.IResolvable; 
  public get mustReturnTrafficToSource() {
    return this.getBooleanAttribute('must_return_traffic_to_source');
  }
  public set mustReturnTrafficToSource(value: boolean | cdktf.IResolvable) {
    this._mustReturnTrafficToSource = value;
  }
  public resetMustReturnTrafficToSource() {
    this._mustReturnTrafficToSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustReturnTrafficToSourceInput() {
    return this._mustReturnTrafficToSource;
  }
}
export interface NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#create NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#delete NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#update NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule#update}
  */
  readonly update?: string;
}

export function networkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeoutsToTerraform(struct?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeouts | cdktf.IResolvable): any {
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


export function networkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeoutsToHclTerraform(struct?: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeouts | cdktf.IResolvable): any {
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

export class NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule oci_network_firewall_network_firewall_policy_tunnel_inspection_rule}
*/
export class NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_firewall_network_firewall_policy_tunnel_inspection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule to import
  * @param importFromId The id of the existing NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyTunnelInspectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_firewall_network_firewall_policy_tunnel_inspection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_firewall_network_firewall_policy_tunnel_inspection_rule oci_network_firewall_network_firewall_policy_tunnel_inspection_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_firewall_network_firewall_policy_tunnel_inspection_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._id = config.id;
    this._name = config.name;
    this._networkFirewallPolicyId = config.networkFirewallPolicyId;
    this._protocol = config.protocol;
    this._condition.internalValue = config.condition;
    this._position.internalValue = config.position;
    this._profile.internalValue = config.profile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // network_firewall_policy_id - computed: false, optional: false, required: true
  private _networkFirewallPolicyId?: string; 
  public get networkFirewallPolicyId() {
    return this.getStringAttribute('network_firewall_policy_id');
  }
  public set networkFirewallPolicyId(value: string) {
    this._networkFirewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFirewallPolicyIdInput() {
    return this._networkFirewallPolicyId;
  }

  // parent_resource_id - computed: true, optional: false, required: false
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }

  // priority_order - computed: true, optional: false, required: false
  public get priorityOrder() {
    return this.getStringAttribute('priority_order');
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

  // condition - computed: false, optional: false, required: true
  private _condition = new NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // position - computed: false, optional: true, required: false
  private _position = new NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePosition) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_firewall_policy_id: cdktf.stringToTerraform(this._networkFirewallPolicyId),
      protocol: cdktf.stringToTerraform(this._protocol),
      condition: networkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionToTerraform(this._condition.internalValue),
      position: networkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionToTerraform(this._position.internalValue),
      profile: networkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileToTerraform(this._profile.internalValue),
      timeouts: networkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_firewall_policy_id: {
        value: cdktf.stringToHclTerraform(this._networkFirewallPolicyId),
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
      condition: {
        value: networkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleConditionList",
      },
      position: {
        value: networkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionToHclTerraform(this._position.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkFirewallNetworkFirewallPolicyTunnelInspectionRulePositionList",
      },
      profile: {
        value: networkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileToHclTerraform(this._profile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleProfileList",
      },
      timeouts: {
        value: networkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkFirewallNetworkFirewallPolicyTunnelInspectionRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
