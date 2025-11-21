// https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationFlowPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the DaVinci application to manage the flow policy for. Must be a valid DaVinci resource ID. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#application_id ApplicationFlowPolicy#application_id}
  */
  readonly applicationId: string;
  /**
  * The ID of the PingOne environment to manage the flow policy in. Must be a valid PingOne resource ID. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#environment_id ApplicationFlowPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#id ApplicationFlowPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A string that specifies the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#name ApplicationFlowPolicy#name}
  */
  readonly name: string;
  /**
  * A boolan that specifies whether the policy should be enabled. Valid values are: `enabled`, `disabled`. Defaults to `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#status ApplicationFlowPolicy#status}
  */
  readonly status?: string;
  /**
  * policy_flow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#policy_flow ApplicationFlowPolicy#policy_flow}
  */
  readonly policyFlow: ApplicationFlowPolicyPolicyFlow[] | cdktf.IResolvable;
}
export interface ApplicationFlowPolicyPolicyFlow {
  /**
  * A list of IP CIDR entries that are allowed use of the application policy flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#allowed_ip_list ApplicationFlowPolicy#allowed_ip_list}
  */
  readonly allowedIpList?: string[];
  /**
  * Identifier of the flow that this policy will use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#flow_id ApplicationFlowPolicy#flow_id}
  */
  readonly flowId: string;
  /**
  * A list of node ids used by analytics for tracking user interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#success_nodes ApplicationFlowPolicy#success_nodes}
  */
  readonly successNodes?: string[];
  /**
  * Version of the flow that this policy will use. Use `-1` for the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#version_id ApplicationFlowPolicy#version_id}
  */
  readonly versionId: number;
  /**
  * If multiple flows are specified, the weight determines the probability of the flow being used. The weights across all policy flows must add up to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#weight ApplicationFlowPolicy#weight}
  */
  readonly weight?: number;
}

export function applicationFlowPolicyPolicyFlowToTerraform(struct?: ApplicationFlowPolicyPolicyFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIpList),
    flow_id: cdktf.stringToTerraform(struct!.flowId),
    success_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.successNodes),
    version_id: cdktf.numberToTerraform(struct!.versionId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function applicationFlowPolicyPolicyFlowToHclTerraform(struct?: ApplicationFlowPolicyPolicyFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ip_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIpList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    flow_id: {
      value: cdktf.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.successNodes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    version_id: {
      value: cdktf.numberToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationFlowPolicyPolicyFlowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationFlowPolicyPolicyFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpList = this._allowedIpList;
    }
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    if (this._successNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successNodes = this._successNodes;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationFlowPolicyPolicyFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedIpList = undefined;
      this._flowId = undefined;
      this._successNodes = undefined;
      this._versionId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedIpList = value.allowedIpList;
      this._flowId = value.flowId;
      this._successNodes = value.successNodes;
      this._versionId = value.versionId;
      this._weight = value.weight;
    }
  }

  // allowed_ip_list - computed: false, optional: true, required: false
  private _allowedIpList?: string[]; 
  public get allowedIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_ip_list'));
  }
  public set allowedIpList(value: string[]) {
    this._allowedIpList = value;
  }
  public resetAllowedIpList() {
    this._allowedIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpListInput() {
    return this._allowedIpList;
  }

  // flow_id - computed: false, optional: false, required: true
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // success_nodes - computed: false, optional: true, required: false
  private _successNodes?: string[]; 
  public get successNodes() {
    return cdktf.Fn.tolist(this.getListAttribute('success_nodes'));
  }
  public set successNodes(value: string[]) {
    this._successNodes = value;
  }
  public resetSuccessNodes() {
    this._successNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successNodesInput() {
    return this._successNodes;
  }

  // version_id - computed: false, optional: false, required: true
  private _versionId?: number; 
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }
  public set versionId(value: number) {
    this._versionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ApplicationFlowPolicyPolicyFlowList extends cdktf.ComplexList {
  public internalValue? : ApplicationFlowPolicyPolicyFlow[] | cdktf.IResolvable

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
  public get(index: number): ApplicationFlowPolicyPolicyFlowOutputReference {
    return new ApplicationFlowPolicyPolicyFlowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy davinci_application_flow_policy}
*/
export class ApplicationFlowPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "davinci_application_flow_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationFlowPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationFlowPolicy to import
  * @param importFromId The id of the existing ApplicationFlowPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationFlowPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "davinci_application_flow_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.3/docs/resources/application_flow_policy davinci_application_flow_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationFlowPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationFlowPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'davinci_application_flow_policy',
      terraformGeneratorMetadata: {
        providerName: 'davinci',
        providerVersion: '0.5.3',
        providerVersionConstraint: '0.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._name = config.name;
    this._status = config.status;
    this._policyFlow.internalValue = config.policyFlow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getNumberAttribute('created_date');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // policy_flow - computed: false, optional: false, required: true
  private _policyFlow = new ApplicationFlowPolicyPolicyFlowList(this, "policy_flow", true);
  public get policyFlow() {
    return this._policyFlow;
  }
  public putPolicyFlow(value: ApplicationFlowPolicyPolicyFlow[] | cdktf.IResolvable) {
    this._policyFlow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyFlowInput() {
    return this._policyFlow.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      policy_flow: cdktf.listMapper(applicationFlowPolicyPolicyFlowToTerraform, true)(this._policyFlow.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_flow: {
        value: cdktf.listMapperHcl(applicationFlowPolicyPolicyFlowToHclTerraform, true)(this._policyFlow.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationFlowPolicyPolicyFlowList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
