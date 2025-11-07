// https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EscalationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy#id EscalationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy#ignore_custom_paging_policies EscalationPolicy#ignore_custom_paging_policies}
  */
  readonly ignoreCustomPagingPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy#name EscalationPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy#team_id EscalationPolicy#team_id}
  */
  readonly teamId: string;
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy#step EscalationPolicy#step}
  */
  readonly step: EscalationPolicyStep[] | cdktf.IResolvable;
}
export interface EscalationPolicyStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy#entries EscalationPolicy#entries}
  */
  readonly entries: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy#timeout EscalationPolicy#timeout}
  */
  readonly timeout?: number;
}

export function escalationPolicyStepToTerraform(struct?: EscalationPolicyStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.entries),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function escalationPolicyStepToHclTerraform(struct?: EscalationPolicyStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.entries),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationPolicyStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationPolicyStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationPolicyStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entries = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entries = value.entries;
      this._timeout = value.timeout;
    }
  }

  // entries - computed: false, optional: false, required: true
  private _entries?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get entries() {
    return this.interpolationForAttribute('entries');
  }
  public set entries(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._entries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class EscalationPolicyStepList extends cdktf.ComplexList {
  public internalValue? : EscalationPolicyStep[] | cdktf.IResolvable

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
  public get(index: number): EscalationPolicyStepOutputReference {
    return new EscalationPolicyStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy victorops_escalation_policy}
*/
export class EscalationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "victorops_escalation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EscalationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EscalationPolicy to import
  * @param importFromId The id of the existing EscalationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EscalationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "victorops_escalation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/escalation_policy victorops_escalation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EscalationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EscalationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'victorops_escalation_policy',
      terraformGeneratorMetadata: {
        providerName: 'victorops',
        providerVersion: '0.1.4'
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
    this._ignoreCustomPagingPolicies = config.ignoreCustomPagingPolicies;
    this._name = config.name;
    this._teamId = config.teamId;
    this._step.internalValue = config.step;
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

  // ignore_custom_paging_policies - computed: false, optional: true, required: false
  private _ignoreCustomPagingPolicies?: boolean | cdktf.IResolvable; 
  public get ignoreCustomPagingPolicies() {
    return this.getBooleanAttribute('ignore_custom_paging_policies');
  }
  public set ignoreCustomPagingPolicies(value: boolean | cdktf.IResolvable) {
    this._ignoreCustomPagingPolicies = value;
  }
  public resetIgnoreCustomPagingPolicies() {
    this._ignoreCustomPagingPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCustomPagingPoliciesInput() {
    return this._ignoreCustomPagingPolicies;
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

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // step - computed: false, optional: false, required: true
  private _step = new EscalationPolicyStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: EscalationPolicyStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ignore_custom_paging_policies: cdktf.booleanToTerraform(this._ignoreCustomPagingPolicies),
      name: cdktf.stringToTerraform(this._name),
      team_id: cdktf.stringToTerraform(this._teamId),
      step: cdktf.listMapper(escalationPolicyStepToTerraform, true)(this._step.internalValue),
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
      ignore_custom_paging_policies: {
        value: cdktf.booleanToHclTerraform(this._ignoreCustomPagingPolicies),
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
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      step: {
        value: cdktf.listMapperHcl(escalationPolicyStepToHclTerraform, true)(this._step.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationPolicyStepList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
