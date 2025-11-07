// https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AffinityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster to use for affinity group creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#cluster_id AffinityGroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The description of the affinity group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#description AffinityGroup#description}
  */
  readonly description?: string;
  /**
  * If set to true, VMs will fail to start if the affinity group cannot be observed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#enforcing AffinityGroup#enforcing}
  */
  readonly enforcing?: boolean | cdktf.IResolvable;
  /**
  * The name of the affinity group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#name AffinityGroup#name}
  */
  readonly name: string;
  /**
  * Order in which the affinity group should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#priority AffinityGroup#priority}
  */
  readonly priority?: number;
  /**
  * hosts_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#hosts_rule AffinityGroup#hosts_rule}
  */
  readonly hostsRule?: AffinityGroupHostsRule;
  /**
  * vms_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#vms_rule AffinityGroup#vms_rule}
  */
  readonly vmsRule?: AffinityGroupVmsRule;
}
export interface AffinityGroupHostsRule {
  /**
  * Positive or negative affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#affinity AffinityGroup#affinity}
  */
  readonly affinity?: string;
  /**
  * If set to true VMs will fail to start if they cannot observe this affintiy group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#enforcing AffinityGroup#enforcing}
  */
  readonly enforcing?: boolean | cdktf.IResolvable;
}

export function affinityGroupHostsRuleToTerraform(struct?: AffinityGroupHostsRuleOutputReference | AffinityGroupHostsRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    enforcing: cdktf.booleanToTerraform(struct!.enforcing),
  }
}


export function affinityGroupHostsRuleToHclTerraform(struct?: AffinityGroupHostsRuleOutputReference | AffinityGroupHostsRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.stringToHclTerraform(struct!.affinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforcing: {
      value: cdktf.booleanToHclTerraform(struct!.enforcing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AffinityGroupHostsRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AffinityGroupHostsRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._enforcing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcing = this._enforcing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AffinityGroupHostsRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._affinity = undefined;
      this._enforcing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._affinity = value.affinity;
      this._enforcing = value.enforcing;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: string; 
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // enforcing - computed: false, optional: true, required: false
  private _enforcing?: boolean | cdktf.IResolvable; 
  public get enforcing() {
    return this.getBooleanAttribute('enforcing');
  }
  public set enforcing(value: boolean | cdktf.IResolvable) {
    this._enforcing = value;
  }
  public resetEnforcing() {
    this._enforcing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingInput() {
    return this._enforcing;
  }
}
export interface AffinityGroupVmsRule {
  /**
  * Positive or negative affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#affinity AffinityGroup#affinity}
  */
  readonly affinity?: string;
  /**
  * If set to true VMs will fail to start if they cannot observe this affintiy group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#enforcing AffinityGroup#enforcing}
  */
  readonly enforcing?: boolean | cdktf.IResolvable;
}

export function affinityGroupVmsRuleToTerraform(struct?: AffinityGroupVmsRuleOutputReference | AffinityGroupVmsRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    enforcing: cdktf.booleanToTerraform(struct!.enforcing),
  }
}


export function affinityGroupVmsRuleToHclTerraform(struct?: AffinityGroupVmsRuleOutputReference | AffinityGroupVmsRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.stringToHclTerraform(struct!.affinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforcing: {
      value: cdktf.booleanToHclTerraform(struct!.enforcing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AffinityGroupVmsRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AffinityGroupVmsRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._enforcing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcing = this._enforcing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AffinityGroupVmsRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._affinity = undefined;
      this._enforcing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._affinity = value.affinity;
      this._enforcing = value.enforcing;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: string; 
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // enforcing - computed: false, optional: true, required: false
  private _enforcing?: boolean | cdktf.IResolvable; 
  public get enforcing() {
    return this.getBooleanAttribute('enforcing');
  }
  public set enforcing(value: boolean | cdktf.IResolvable) {
    this._enforcing = value;
  }
  public resetEnforcing() {
    this._enforcing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingInput() {
    return this._enforcing;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group ovirt_affinity_group}
*/
export class AffinityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_affinity_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AffinityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AffinityGroup to import
  * @param importFromId The id of the existing AffinityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AffinityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_affinity_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/affinity_group ovirt_affinity_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AffinityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AffinityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_affinity_group',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.1.5'
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
    this._description = config.description;
    this._enforcing = config.enforcing;
    this._name = config.name;
    this._priority = config.priority;
    this._hostsRule.internalValue = config.hostsRule;
    this._vmsRule.internalValue = config.vmsRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // enforcing - computed: false, optional: true, required: false
  private _enforcing?: boolean | cdktf.IResolvable; 
  public get enforcing() {
    return this.getBooleanAttribute('enforcing');
  }
  public set enforcing(value: boolean | cdktf.IResolvable) {
    this._enforcing = value;
  }
  public resetEnforcing() {
    this._enforcing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingInput() {
    return this._enforcing;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // hosts_rule - computed: false, optional: true, required: false
  private _hostsRule = new AffinityGroupHostsRuleOutputReference(this, "hosts_rule");
  public get hostsRule() {
    return this._hostsRule;
  }
  public putHostsRule(value: AffinityGroupHostsRule) {
    this._hostsRule.internalValue = value;
  }
  public resetHostsRule() {
    this._hostsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsRuleInput() {
    return this._hostsRule.internalValue;
  }

  // vms_rule - computed: false, optional: true, required: false
  private _vmsRule = new AffinityGroupVmsRuleOutputReference(this, "vms_rule");
  public get vmsRule() {
    return this._vmsRule;
  }
  public putVmsRule(value: AffinityGroupVmsRule) {
    this._vmsRule.internalValue = value;
  }
  public resetVmsRule() {
    this._vmsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmsRuleInput() {
    return this._vmsRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
      enforcing: cdktf.booleanToTerraform(this._enforcing),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      hosts_rule: affinityGroupHostsRuleToTerraform(this._hostsRule.internalValue),
      vms_rule: affinityGroupVmsRuleToTerraform(this._vmsRule.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcing: {
        value: cdktf.booleanToHclTerraform(this._enforcing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      hosts_rule: {
        value: affinityGroupHostsRuleToHclTerraform(this._hostsRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AffinityGroupHostsRuleList",
      },
      vms_rule: {
        value: affinityGroupVmsRuleToHclTerraform(this._vmsRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AffinityGroupVmsRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
