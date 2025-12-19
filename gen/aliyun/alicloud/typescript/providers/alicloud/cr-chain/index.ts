// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CrChainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#chain_name CrChain#chain_name}
  */
  readonly chainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#description CrChain#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#id CrChain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#instance_id CrChain#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#repo_name CrChain#repo_name}
  */
  readonly repoName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#repo_namespace_name CrChain#repo_namespace_name}
  */
  readonly repoNamespaceName?: string;
  /**
  * chain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#chain_config CrChain#chain_config}
  */
  readonly chainConfig?: CrChainChainConfig[] | cdktf.IResolvable;
}
export interface CrChainChainConfigNodesNodeConfigDenyPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#action CrChain#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#issue_count CrChain#issue_count}
  */
  readonly issueCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#issue_level CrChain#issue_level}
  */
  readonly issueLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#logic CrChain#logic}
  */
  readonly logic?: string;
}

export function crChainChainConfigNodesNodeConfigDenyPolicyToTerraform(struct?: CrChainChainConfigNodesNodeConfigDenyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    issue_count: cdktf.stringToTerraform(struct!.issueCount),
    issue_level: cdktf.stringToTerraform(struct!.issueLevel),
    logic: cdktf.stringToTerraform(struct!.logic),
  }
}


export function crChainChainConfigNodesNodeConfigDenyPolicyToHclTerraform(struct?: CrChainChainConfigNodesNodeConfigDenyPolicy | cdktf.IResolvable): any {
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
    issue_count: {
      value: cdktf.stringToHclTerraform(struct!.issueCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_level: {
      value: cdktf.stringToHclTerraform(struct!.issueLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic: {
      value: cdktf.stringToHclTerraform(struct!.logic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CrChainChainConfigNodesNodeConfigDenyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CrChainChainConfigNodesNodeConfigDenyPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._issueCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueCount = this._issueCount;
    }
    if (this._issueLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueLevel = this._issueLevel;
    }
    if (this._logic !== undefined) {
      hasAnyValues = true;
      internalValueResult.logic = this._logic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrChainChainConfigNodesNodeConfigDenyPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._issueCount = undefined;
      this._issueLevel = undefined;
      this._logic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._issueCount = value.issueCount;
      this._issueLevel = value.issueLevel;
      this._logic = value.logic;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // issue_count - computed: false, optional: true, required: false
  private _issueCount?: string; 
  public get issueCount() {
    return this.getStringAttribute('issue_count');
  }
  public set issueCount(value: string) {
    this._issueCount = value;
  }
  public resetIssueCount() {
    this._issueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueCountInput() {
    return this._issueCount;
  }

  // issue_level - computed: false, optional: true, required: false
  private _issueLevel?: string; 
  public get issueLevel() {
    return this.getStringAttribute('issue_level');
  }
  public set issueLevel(value: string) {
    this._issueLevel = value;
  }
  public resetIssueLevel() {
    this._issueLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueLevelInput() {
    return this._issueLevel;
  }

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
  }
}

export class CrChainChainConfigNodesNodeConfigDenyPolicyList extends cdktf.ComplexList {
  public internalValue? : CrChainChainConfigNodesNodeConfigDenyPolicy[] | cdktf.IResolvable

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
  public get(index: number): CrChainChainConfigNodesNodeConfigDenyPolicyOutputReference {
    return new CrChainChainConfigNodesNodeConfigDenyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CrChainChainConfigNodesNodeConfig {
  /**
  * deny_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#deny_policy CrChain#deny_policy}
  */
  readonly denyPolicy?: CrChainChainConfigNodesNodeConfigDenyPolicy[] | cdktf.IResolvable;
}

export function crChainChainConfigNodesNodeConfigToTerraform(struct?: CrChainChainConfigNodesNodeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_policy: cdktf.listMapper(crChainChainConfigNodesNodeConfigDenyPolicyToTerraform, true)(struct!.denyPolicy),
  }
}


export function crChainChainConfigNodesNodeConfigToHclTerraform(struct?: CrChainChainConfigNodesNodeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_policy: {
      value: cdktf.listMapperHcl(crChainChainConfigNodesNodeConfigDenyPolicyToHclTerraform, true)(struct!.denyPolicy),
      isBlock: true,
      type: "set",
      storageClassType: "CrChainChainConfigNodesNodeConfigDenyPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CrChainChainConfigNodesNodeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CrChainChainConfigNodesNodeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPolicy = this._denyPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrChainChainConfigNodesNodeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denyPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denyPolicy.internalValue = value.denyPolicy;
    }
  }

  // deny_policy - computed: false, optional: true, required: false
  private _denyPolicy = new CrChainChainConfigNodesNodeConfigDenyPolicyList(this, "deny_policy", true);
  public get denyPolicy() {
    return this._denyPolicy;
  }
  public putDenyPolicy(value: CrChainChainConfigNodesNodeConfigDenyPolicy[] | cdktf.IResolvable) {
    this._denyPolicy.internalValue = value;
  }
  public resetDenyPolicy() {
    this._denyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPolicyInput() {
    return this._denyPolicy.internalValue;
  }
}

export class CrChainChainConfigNodesNodeConfigList extends cdktf.ComplexList {
  public internalValue? : CrChainChainConfigNodesNodeConfig[] | cdktf.IResolvable

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
  public get(index: number): CrChainChainConfigNodesNodeConfigOutputReference {
    return new CrChainChainConfigNodesNodeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CrChainChainConfigNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#enable CrChain#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#node_name CrChain#node_name}
  */
  readonly nodeName?: string;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#node_config CrChain#node_config}
  */
  readonly nodeConfig?: CrChainChainConfigNodesNodeConfig[] | cdktf.IResolvable;
}

export function crChainChainConfigNodesToTerraform(struct?: CrChainChainConfigNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_config: cdktf.listMapper(crChainChainConfigNodesNodeConfigToTerraform, true)(struct!.nodeConfig),
  }
}


export function crChainChainConfigNodesToHclTerraform(struct?: CrChainChainConfigNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_config: {
      value: cdktf.listMapperHcl(crChainChainConfigNodesNodeConfigToHclTerraform, true)(struct!.nodeConfig),
      isBlock: true,
      type: "set",
      storageClassType: "CrChainChainConfigNodesNodeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CrChainChainConfigNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CrChainChainConfigNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrChainChainConfigNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._nodeName = undefined;
      this._nodeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._nodeName = value.nodeName;
      this._nodeConfig.internalValue = value.nodeConfig;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new CrChainChainConfigNodesNodeConfigList(this, "node_config", true);
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: CrChainChainConfigNodesNodeConfig[] | cdktf.IResolvable) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }
}

export class CrChainChainConfigNodesList extends cdktf.ComplexList {
  public internalValue? : CrChainChainConfigNodes[] | cdktf.IResolvable

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
  public get(index: number): CrChainChainConfigNodesOutputReference {
    return new CrChainChainConfigNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CrChainChainConfigRoutersFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#node_name CrChain#node_name}
  */
  readonly nodeName?: string;
}

export function crChainChainConfigRoutersFromToTerraform(struct?: CrChainChainConfigRoutersFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}


export function crChainChainConfigRoutersFromToHclTerraform(struct?: CrChainChainConfigRoutersFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CrChainChainConfigRoutersFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CrChainChainConfigRoutersFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrChainChainConfigRoutersFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeName = value.nodeName;
    }
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }
}

export class CrChainChainConfigRoutersFromList extends cdktf.ComplexList {
  public internalValue? : CrChainChainConfigRoutersFrom[] | cdktf.IResolvable

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
  public get(index: number): CrChainChainConfigRoutersFromOutputReference {
    return new CrChainChainConfigRoutersFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CrChainChainConfigRoutersTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#node_name CrChain#node_name}
  */
  readonly nodeName?: string;
}

export function crChainChainConfigRoutersToToTerraform(struct?: CrChainChainConfigRoutersTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}


export function crChainChainConfigRoutersToToHclTerraform(struct?: CrChainChainConfigRoutersTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CrChainChainConfigRoutersToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CrChainChainConfigRoutersTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrChainChainConfigRoutersTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeName = value.nodeName;
    }
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }
}

export class CrChainChainConfigRoutersToList extends cdktf.ComplexList {
  public internalValue? : CrChainChainConfigRoutersTo[] | cdktf.IResolvable

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
  public get(index: number): CrChainChainConfigRoutersToOutputReference {
    return new CrChainChainConfigRoutersToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CrChainChainConfigRouters {
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#from CrChain#from}
  */
  readonly from?: CrChainChainConfigRoutersFrom[] | cdktf.IResolvable;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#to CrChain#to}
  */
  readonly to?: CrChainChainConfigRoutersTo[] | cdktf.IResolvable;
}

export function crChainChainConfigRoutersToTerraform(struct?: CrChainChainConfigRouters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(crChainChainConfigRoutersFromToTerraform, true)(struct!.from),
    to: cdktf.listMapper(crChainChainConfigRoutersToToTerraform, true)(struct!.to),
  }
}


export function crChainChainConfigRoutersToHclTerraform(struct?: CrChainChainConfigRouters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(crChainChainConfigRoutersFromToHclTerraform, true)(struct!.from),
      isBlock: true,
      type: "set",
      storageClassType: "CrChainChainConfigRoutersFromList",
    },
    to: {
      value: cdktf.listMapperHcl(crChainChainConfigRoutersToToHclTerraform, true)(struct!.to),
      isBlock: true,
      type: "set",
      storageClassType: "CrChainChainConfigRoutersToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CrChainChainConfigRoutersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CrChainChainConfigRouters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrChainChainConfigRouters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new CrChainChainConfigRoutersFromList(this, "from", true);
  public get from() {
    return this._from;
  }
  public putFrom(value: CrChainChainConfigRoutersFrom[] | cdktf.IResolvable) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new CrChainChainConfigRoutersToList(this, "to", true);
  public get to() {
    return this._to;
  }
  public putTo(value: CrChainChainConfigRoutersTo[] | cdktf.IResolvable) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class CrChainChainConfigRoutersList extends cdktf.ComplexList {
  public internalValue? : CrChainChainConfigRouters[] | cdktf.IResolvable

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
  public get(index: number): CrChainChainConfigRoutersOutputReference {
    return new CrChainChainConfigRoutersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CrChainChainConfig {
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#nodes CrChain#nodes}
  */
  readonly nodes?: CrChainChainConfigNodes[] | cdktf.IResolvable;
  /**
  * routers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#routers CrChain#routers}
  */
  readonly routers?: CrChainChainConfigRouters[] | cdktf.IResolvable;
}

export function crChainChainConfigToTerraform(struct?: CrChainChainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nodes: cdktf.listMapper(crChainChainConfigNodesToTerraform, true)(struct!.nodes),
    routers: cdktf.listMapper(crChainChainConfigRoutersToTerraform, true)(struct!.routers),
  }
}


export function crChainChainConfigToHclTerraform(struct?: CrChainChainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nodes: {
      value: cdktf.listMapperHcl(crChainChainConfigNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "set",
      storageClassType: "CrChainChainConfigNodesList",
    },
    routers: {
      value: cdktf.listMapperHcl(crChainChainConfigRoutersToHclTerraform, true)(struct!.routers),
      isBlock: true,
      type: "set",
      storageClassType: "CrChainChainConfigRoutersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CrChainChainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CrChainChainConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._routers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routers = this._routers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrChainChainConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodes.internalValue = undefined;
      this._routers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodes.internalValue = value.nodes;
      this._routers.internalValue = value.routers;
    }
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new CrChainChainConfigNodesList(this, "nodes", true);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: CrChainChainConfigNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // routers - computed: false, optional: true, required: false
  private _routers = new CrChainChainConfigRoutersList(this, "routers", true);
  public get routers() {
    return this._routers;
  }
  public putRouters(value: CrChainChainConfigRouters[] | cdktf.IResolvable) {
    this._routers.internalValue = value;
  }
  public resetRouters() {
    this._routers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routersInput() {
    return this._routers.internalValue;
  }
}

export class CrChainChainConfigList extends cdktf.ComplexList {
  public internalValue? : CrChainChainConfig[] | cdktf.IResolvable

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
  public get(index: number): CrChainChainConfigOutputReference {
    return new CrChainChainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain alicloud_cr_chain}
*/
export class CrChain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cr_chain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CrChain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CrChain to import
  * @param importFromId The id of the existing CrChain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CrChain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cr_chain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_chain alicloud_cr_chain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CrChainConfig
  */
  public constructor(scope: Construct, id: string, config: CrChainConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cr_chain',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chainName = config.chainName;
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._repoName = config.repoName;
    this._repoNamespaceName = config.repoNamespaceName;
    this._chainConfig.internalValue = config.chainConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chain_id - computed: true, optional: false, required: false
  public get chainId() {
    return this.getStringAttribute('chain_id');
  }

  // chain_name - computed: false, optional: false, required: true
  private _chainName?: string; 
  public get chainName() {
    return this.getStringAttribute('chain_name');
  }
  public set chainName(value: string) {
    this._chainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chainNameInput() {
    return this._chainName;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // repo_namespace_name - computed: false, optional: true, required: false
  private _repoNamespaceName?: string; 
  public get repoNamespaceName() {
    return this.getStringAttribute('repo_namespace_name');
  }
  public set repoNamespaceName(value: string) {
    this._repoNamespaceName = value;
  }
  public resetRepoNamespaceName() {
    this._repoNamespaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNamespaceNameInput() {
    return this._repoNamespaceName;
  }

  // chain_config - computed: false, optional: true, required: false
  private _chainConfig = new CrChainChainConfigList(this, "chain_config", true);
  public get chainConfig() {
    return this._chainConfig;
  }
  public putChainConfig(value: CrChainChainConfig[] | cdktf.IResolvable) {
    this._chainConfig.internalValue = value;
  }
  public resetChainConfig() {
    this._chainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainConfigInput() {
    return this._chainConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chain_name: cdktf.stringToTerraform(this._chainName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      repo_name: cdktf.stringToTerraform(this._repoName),
      repo_namespace_name: cdktf.stringToTerraform(this._repoNamespaceName),
      chain_config: cdktf.listMapper(crChainChainConfigToTerraform, true)(this._chainConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chain_name: {
        value: cdktf.stringToHclTerraform(this._chainName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_name: {
        value: cdktf.stringToHclTerraform(this._repoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_namespace_name: {
        value: cdktf.stringToHclTerraform(this._repoNamespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chain_config: {
        value: cdktf.listMapperHcl(crChainChainConfigToHclTerraform, true)(this._chainConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CrChainChainConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
