// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorTmpTkeClusterAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#id MonitorTmpTkeClusterAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#instance_id MonitorTmpTkeClusterAgent#instance_id}
  */
  readonly instanceId: string;
  /**
  * agents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#agents MonitorTmpTkeClusterAgent#agents}
  */
  readonly agents: MonitorTmpTkeClusterAgentAgents;
}
export interface MonitorTmpTkeClusterAgentAgentsExternalLabels {
  /**
  * Indicator name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#name MonitorTmpTkeClusterAgent#name}
  */
  readonly name: string;
  /**
  * Index value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#value MonitorTmpTkeClusterAgent#value}
  */
  readonly value?: string;
}

export function monitorTmpTkeClusterAgentAgentsExternalLabelsToTerraform(struct?: MonitorTmpTkeClusterAgentAgentsExternalLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorTmpTkeClusterAgentAgentsExternalLabelsToHclTerraform(struct?: MonitorTmpTkeClusterAgentAgentsExternalLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeClusterAgentAgentsExternalLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeClusterAgentAgentsExternalLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeClusterAgentAgentsExternalLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MonitorTmpTkeClusterAgentAgentsExternalLabelsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeClusterAgentAgentsExternalLabels[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeClusterAgentAgentsExternalLabelsOutputReference {
    return new MonitorTmpTkeClusterAgentAgentsExternalLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelector {
  /**
  * The pod configuration name of the component deployed in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#name MonitorTmpTkeClusterAgent#name}
  */
  readonly name?: string;
  /**
  * Pod configuration values for components deployed in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#value MonitorTmpTkeClusterAgent#value}
  */
  readonly value?: string;
}

export function monitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelectorToTerraform(struct?: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelectorToHclTerraform(struct?: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelectorList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelector[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelectorOutputReference {
    return new MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerations {
  /**
  * blemish effect to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#effect MonitorTmpTkeClusterAgent#effect}
  */
  readonly effect?: string;
  /**
  * The taint key to which the tolerance applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#key MonitorTmpTkeClusterAgent#key}
  */
  readonly key?: string;
  /**
  * key-value relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#operator MonitorTmpTkeClusterAgent#operator}
  */
  readonly operator?: string;
}

export function monitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerationsToTerraform(struct?: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function monitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerationsToHclTerraform(struct?: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerationsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerations[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerationsOutputReference {
    return new MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeClusterAgentAgentsInClusterPodConfig {
  /**
  * Whether to use HostNetWork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#host_net MonitorTmpTkeClusterAgent#host_net}
  */
  readonly hostNet: boolean | cdktf.IResolvable;
  /**
  * node_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#node_selector MonitorTmpTkeClusterAgent#node_selector}
  */
  readonly nodeSelector?: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelector[] | cdktf.IResolvable;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#tolerations MonitorTmpTkeClusterAgent#tolerations}
  */
  readonly tolerations?: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerations[] | cdktf.IResolvable;
}

export function monitorTmpTkeClusterAgentAgentsInClusterPodConfigToTerraform(struct?: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigOutputReference | MonitorTmpTkeClusterAgentAgentsInClusterPodConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_net: cdktf.booleanToTerraform(struct!.hostNet),
    node_selector: cdktf.listMapper(monitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelectorToTerraform, true)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(monitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function monitorTmpTkeClusterAgentAgentsInClusterPodConfigToHclTerraform(struct?: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigOutputReference | MonitorTmpTkeClusterAgentAgentsInClusterPodConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_net: {
      value: cdktf.booleanToHclTerraform(struct!.hostNet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_selector: {
      value: cdktf.listMapperHcl(monitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelectorToHclTerraform, true)(struct!.nodeSelector),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelectorList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(monitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeClusterAgentAgentsInClusterPodConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpTkeClusterAgentAgentsInClusterPodConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostNet !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNet = this._hostNet;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeClusterAgentAgentsInClusterPodConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostNet = undefined;
      this._nodeSelector.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostNet = value.hostNet;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // host_net - computed: false, optional: false, required: true
  private _hostNet?: boolean | cdktf.IResolvable; 
  public get hostNet() {
    return this.getBooleanAttribute('host_net');
  }
  public set hostNet(value: boolean | cdktf.IResolvable) {
    this._hostNet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetInput() {
    return this._hostNet;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelectorList(this, "node_selector", false);
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigNodeSelector[] | cdktf.IResolvable) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: MonitorTmpTkeClusterAgentAgentsInClusterPodConfigTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface MonitorTmpTkeClusterAgentAgents {
  /**
  * An id identify the cluster, like `cls-xxxxxx`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#cluster_id MonitorTmpTkeClusterAgent#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Type of cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#cluster_type MonitorTmpTkeClusterAgent#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Whether to enable the public network CLB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#enable_external MonitorTmpTkeClusterAgent#enable_external}
  */
  readonly enableExternal: boolean | cdktf.IResolvable;
  /**
  * Whether to install the default collection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#not_install_basic_scrape MonitorTmpTkeClusterAgent#not_install_basic_scrape}
  */
  readonly notInstallBasicScrape?: boolean | cdktf.IResolvable;
  /**
  * Whether to collect indicators, true means drop all indicators, false means collect default indicators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#not_scrape MonitorTmpTkeClusterAgent#not_scrape}
  */
  readonly notScrape?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the default pre-aggregation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#open_default_record MonitorTmpTkeClusterAgent#open_default_record}
  */
  readonly openDefaultRecord?: boolean | cdktf.IResolvable;
  /**
  * Limitation of region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#region MonitorTmpTkeClusterAgent#region}
  */
  readonly region: string;
  /**
  * external_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#external_labels MonitorTmpTkeClusterAgent#external_labels}
  */
  readonly externalLabels?: MonitorTmpTkeClusterAgentAgentsExternalLabels[] | cdktf.IResolvable;
  /**
  * in_cluster_pod_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#in_cluster_pod_config MonitorTmpTkeClusterAgent#in_cluster_pod_config}
  */
  readonly inClusterPodConfig?: MonitorTmpTkeClusterAgentAgentsInClusterPodConfig;
}

export function monitorTmpTkeClusterAgentAgentsToTerraform(struct?: MonitorTmpTkeClusterAgentAgentsOutputReference | MonitorTmpTkeClusterAgentAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    enable_external: cdktf.booleanToTerraform(struct!.enableExternal),
    not_install_basic_scrape: cdktf.booleanToTerraform(struct!.notInstallBasicScrape),
    not_scrape: cdktf.booleanToTerraform(struct!.notScrape),
    open_default_record: cdktf.booleanToTerraform(struct!.openDefaultRecord),
    region: cdktf.stringToTerraform(struct!.region),
    external_labels: cdktf.listMapper(monitorTmpTkeClusterAgentAgentsExternalLabelsToTerraform, true)(struct!.externalLabels),
    in_cluster_pod_config: monitorTmpTkeClusterAgentAgentsInClusterPodConfigToTerraform(struct!.inClusterPodConfig),
  }
}


export function monitorTmpTkeClusterAgentAgentsToHclTerraform(struct?: MonitorTmpTkeClusterAgentAgentsOutputReference | MonitorTmpTkeClusterAgentAgents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_external: {
      value: cdktf.booleanToHclTerraform(struct!.enableExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    not_install_basic_scrape: {
      value: cdktf.booleanToHclTerraform(struct!.notInstallBasicScrape),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    not_scrape: {
      value: cdktf.booleanToHclTerraform(struct!.notScrape),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_default_record: {
      value: cdktf.booleanToHclTerraform(struct!.openDefaultRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_labels: {
      value: cdktf.listMapperHcl(monitorTmpTkeClusterAgentAgentsExternalLabelsToHclTerraform, true)(struct!.externalLabels),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeClusterAgentAgentsExternalLabelsList",
    },
    in_cluster_pod_config: {
      value: monitorTmpTkeClusterAgentAgentsInClusterPodConfigToHclTerraform(struct!.inClusterPodConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeClusterAgentAgentsInClusterPodConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeClusterAgentAgentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpTkeClusterAgentAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._enableExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExternal = this._enableExternal;
    }
    if (this._notInstallBasicScrape !== undefined) {
      hasAnyValues = true;
      internalValueResult.notInstallBasicScrape = this._notInstallBasicScrape;
    }
    if (this._notScrape !== undefined) {
      hasAnyValues = true;
      internalValueResult.notScrape = this._notScrape;
    }
    if (this._openDefaultRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.openDefaultRecord = this._openDefaultRecord;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._externalLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLabels = this._externalLabels?.internalValue;
    }
    if (this._inClusterPodConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inClusterPodConfig = this._inClusterPodConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeClusterAgentAgents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._clusterType = undefined;
      this._enableExternal = undefined;
      this._notInstallBasicScrape = undefined;
      this._notScrape = undefined;
      this._openDefaultRecord = undefined;
      this._region = undefined;
      this._externalLabels.internalValue = undefined;
      this._inClusterPodConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._clusterType = value.clusterType;
      this._enableExternal = value.enableExternal;
      this._notInstallBasicScrape = value.notInstallBasicScrape;
      this._notScrape = value.notScrape;
      this._openDefaultRecord = value.openDefaultRecord;
      this._region = value.region;
      this._externalLabels.internalValue = value.externalLabels;
      this._inClusterPodConfig.internalValue = value.inClusterPodConfig;
    }
  }

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

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // enable_external - computed: false, optional: false, required: true
  private _enableExternal?: boolean | cdktf.IResolvable; 
  public get enableExternal() {
    return this.getBooleanAttribute('enable_external');
  }
  public set enableExternal(value: boolean | cdktf.IResolvable) {
    this._enableExternal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExternalInput() {
    return this._enableExternal;
  }

  // not_install_basic_scrape - computed: false, optional: true, required: false
  private _notInstallBasicScrape?: boolean | cdktf.IResolvable; 
  public get notInstallBasicScrape() {
    return this.getBooleanAttribute('not_install_basic_scrape');
  }
  public set notInstallBasicScrape(value: boolean | cdktf.IResolvable) {
    this._notInstallBasicScrape = value;
  }
  public resetNotInstallBasicScrape() {
    this._notInstallBasicScrape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInstallBasicScrapeInput() {
    return this._notInstallBasicScrape;
  }

  // not_scrape - computed: false, optional: true, required: false
  private _notScrape?: boolean | cdktf.IResolvable; 
  public get notScrape() {
    return this.getBooleanAttribute('not_scrape');
  }
  public set notScrape(value: boolean | cdktf.IResolvable) {
    this._notScrape = value;
  }
  public resetNotScrape() {
    this._notScrape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notScrapeInput() {
    return this._notScrape;
  }

  // open_default_record - computed: true, optional: true, required: false
  private _openDefaultRecord?: boolean | cdktf.IResolvable; 
  public get openDefaultRecord() {
    return this.getBooleanAttribute('open_default_record');
  }
  public set openDefaultRecord(value: boolean | cdktf.IResolvable) {
    this._openDefaultRecord = value;
  }
  public resetOpenDefaultRecord() {
    this._openDefaultRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openDefaultRecordInput() {
    return this._openDefaultRecord;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // external_labels - computed: false, optional: true, required: false
  private _externalLabels = new MonitorTmpTkeClusterAgentAgentsExternalLabelsList(this, "external_labels", false);
  public get externalLabels() {
    return this._externalLabels;
  }
  public putExternalLabels(value: MonitorTmpTkeClusterAgentAgentsExternalLabels[] | cdktf.IResolvable) {
    this._externalLabels.internalValue = value;
  }
  public resetExternalLabels() {
    this._externalLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLabelsInput() {
    return this._externalLabels.internalValue;
  }

  // in_cluster_pod_config - computed: false, optional: true, required: false
  private _inClusterPodConfig = new MonitorTmpTkeClusterAgentAgentsInClusterPodConfigOutputReference(this, "in_cluster_pod_config");
  public get inClusterPodConfig() {
    return this._inClusterPodConfig;
  }
  public putInClusterPodConfig(value: MonitorTmpTkeClusterAgentAgentsInClusterPodConfig) {
    this._inClusterPodConfig.internalValue = value;
  }
  public resetInClusterPodConfig() {
    this._inClusterPodConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inClusterPodConfigInput() {
    return this._inClusterPodConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent tencentcloud_monitor_tmp_tke_cluster_agent}
*/
export class MonitorTmpTkeClusterAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_tmp_tke_cluster_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorTmpTkeClusterAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorTmpTkeClusterAgent to import
  * @param importFromId The id of the existing MonitorTmpTkeClusterAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorTmpTkeClusterAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_tmp_tke_cluster_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/monitor_tmp_tke_cluster_agent tencentcloud_monitor_tmp_tke_cluster_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorTmpTkeClusterAgentConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorTmpTkeClusterAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_tmp_tke_cluster_agent',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._instanceId = config.instanceId;
    this._agents.internalValue = config.agents;
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

  // agents - computed: false, optional: false, required: true
  private _agents = new MonitorTmpTkeClusterAgentAgentsOutputReference(this, "agents");
  public get agents() {
    return this._agents;
  }
  public putAgents(value: MonitorTmpTkeClusterAgentAgents) {
    this._agents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      agents: monitorTmpTkeClusterAgentAgentsToTerraform(this._agents.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agents: {
        value: monitorTmpTkeClusterAgentAgentsToHclTerraform(this._agents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTmpTkeClusterAgentAgentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
