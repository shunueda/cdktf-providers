// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfigTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cloud type for the cluster template. Examples: 'aws', 'azure', 'gcp', 'vsphere', etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#cloud_type ClusterConfigTemplate#cloud_type}
  */
  readonly cloudType: string;
  /**
  * The context of the cluster config template. Allowed values are `project` or `tenant`. Default value is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#context ClusterConfigTemplate#context}
  */
  readonly context?: string;
  /**
  * The description of the cluster config template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#description ClusterConfigTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#id ClusterConfigTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the cluster config template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#name ClusterConfigTemplate#name}
  */
  readonly name: string;
  /**
  * Assign tags to the cluster config template. Tags can be in the format `key:value` or just `key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#tags ClusterConfigTemplate#tags}
  */
  readonly tags?: string[];
  /**
  * Timestamp to trigger an immediate upgrade for all clusters launched from this template. NOTE: The upgrade executes immediately when this value changes - the timestamp does NOT schedule a future upgrade. Set this to the current timestamp each time you want to trigger an upgrade. This field can also be used for tracking when upgrades were triggered by the user. Format: RFC3339 (e.g., '2024-01-15T10:30:00Z'). Example: To trigger an upgrade now, set to current time like '2024-11-12T15:30:00Z'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#upgrade_now ClusterConfigTemplate#upgrade_now}
  */
  readonly upgradeNow?: string;
  /**
  * cluster_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#cluster_profile ClusterConfigTemplate#cluster_profile}
  */
  readonly clusterProfile?: ClusterConfigTemplateClusterProfile[] | cdktf.IResolvable;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#policy ClusterConfigTemplate#policy}
  */
  readonly policy?: ClusterConfigTemplatePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#timeouts ClusterConfigTemplate#timeouts}
  */
  readonly timeouts?: ClusterConfigTemplateTimeouts;
}
export interface ClusterConfigTemplateAttachedCluster {
}

export function clusterConfigTemplateAttachedClusterToTerraform(struct?: ClusterConfigTemplateAttachedCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterConfigTemplateAttachedClusterToHclTerraform(struct?: ClusterConfigTemplateAttachedCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterConfigTemplateAttachedClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClusterConfigTemplateAttachedCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigTemplateAttachedCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_uid - computed: true, optional: false, required: false
  public get clusterUid() {
    return this.getStringAttribute('cluster_uid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ClusterConfigTemplateAttachedClusterList extends cdktf.ComplexList {

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
  public get(index: number): ClusterConfigTemplateAttachedClusterOutputReference {
    return new ClusterConfigTemplateAttachedClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterConfigTemplateClusterProfileVariables {
  /**
  * Assignment strategy for the variable. Allowed values are `all` or `cluster`. Default is `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#assign_strategy ClusterConfigTemplate#assign_strategy}
  */
  readonly assignStrategy?: string;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#name ClusterConfigTemplate#name}
  */
  readonly name: string;
  /**
  * Value of the variable to be applied to all clusters launched from this template. This value is used when assign_strategy is set to 'all'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#value ClusterConfigTemplate#value}
  */
  readonly value?: string;
}

export function clusterConfigTemplateClusterProfileVariablesToTerraform(struct?: ClusterConfigTemplateClusterProfileVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_strategy: cdktf.stringToTerraform(struct!.assignStrategy),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterConfigTemplateClusterProfileVariablesToHclTerraform(struct?: ClusterConfigTemplateClusterProfileVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_strategy: {
      value: cdktf.stringToHclTerraform(struct!.assignStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ClusterConfigTemplateClusterProfileVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterConfigTemplateClusterProfileVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignStrategy = this._assignStrategy;
    }
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

  public set internalValue(value: ClusterConfigTemplateClusterProfileVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignStrategy = undefined;
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
      this._assignStrategy = value.assignStrategy;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // assign_strategy - computed: false, optional: true, required: false
  private _assignStrategy?: string; 
  public get assignStrategy() {
    return this.getStringAttribute('assign_strategy');
  }
  public set assignStrategy(value: string) {
    this._assignStrategy = value;
  }
  public resetAssignStrategy() {
    this._assignStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignStrategyInput() {
    return this._assignStrategy;
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

export class ClusterConfigTemplateClusterProfileVariablesList extends cdktf.ComplexList {
  public internalValue? : ClusterConfigTemplateClusterProfileVariables[] | cdktf.IResolvable

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
  public get(index: number): ClusterConfigTemplateClusterProfileVariablesOutputReference {
    return new ClusterConfigTemplateClusterProfileVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterConfigTemplateClusterProfile {
  /**
  * ID of the cluster profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#id ClusterConfigTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#variables ClusterConfigTemplate#variables}
  */
  readonly variables?: ClusterConfigTemplateClusterProfileVariables[] | cdktf.IResolvable;
}

export function clusterConfigTemplateClusterProfileToTerraform(struct?: ClusterConfigTemplateClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.listMapper(clusterConfigTemplateClusterProfileVariablesToTerraform, true)(struct!.variables),
  }
}


export function clusterConfigTemplateClusterProfileToHclTerraform(struct?: ClusterConfigTemplateClusterProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.listMapperHcl(clusterConfigTemplateClusterProfileVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "set",
      storageClassType: "ClusterConfigTemplateClusterProfileVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterConfigTemplateClusterProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterConfigTemplateClusterProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigTemplateClusterProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._variables.internalValue = value.variables;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new ClusterConfigTemplateClusterProfileVariablesList(this, "variables", true);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: ClusterConfigTemplateClusterProfileVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class ClusterConfigTemplateClusterProfileList extends cdktf.ComplexList {
  public internalValue? : ClusterConfigTemplateClusterProfile[] | cdktf.IResolvable

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
  public get(index: number): ClusterConfigTemplateClusterProfileOutputReference {
    return new ClusterConfigTemplateClusterProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterConfigTemplatePolicy {
  /**
  * ID of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#id ClusterConfigTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Kind of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#kind ClusterConfigTemplate#kind}
  */
  readonly kind?: string;
}

export function clusterConfigTemplatePolicyToTerraform(struct?: ClusterConfigTemplatePolicyOutputReference | ClusterConfigTemplatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function clusterConfigTemplatePolicyToHclTerraform(struct?: ClusterConfigTemplatePolicyOutputReference | ClusterConfigTemplatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterConfigTemplatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterConfigTemplatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterConfigTemplatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._kind = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._kind = value.kind;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}
export interface ClusterConfigTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#create ClusterConfigTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#delete ClusterConfigTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#update ClusterConfigTemplate#update}
  */
  readonly update?: string;
}

export function clusterConfigTemplateTimeoutsToTerraform(struct?: ClusterConfigTemplateTimeouts | cdktf.IResolvable): any {
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


export function clusterConfigTemplateTimeoutsToHclTerraform(struct?: ClusterConfigTemplateTimeouts | cdktf.IResolvable): any {
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

export class ClusterConfigTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterConfigTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterConfigTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template spectrocloud_cluster_config_template}
*/
export class ClusterConfigTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cluster_config_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterConfigTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterConfigTemplate to import
  * @param importFromId The id of the existing ClusterConfigTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterConfigTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cluster_config_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/cluster_config_template spectrocloud_cluster_config_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfigTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfigTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cluster_config_template',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.2',
        providerVersionConstraint: '0.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudType = config.cloudType;
    this._context = config.context;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._upgradeNow = config.upgradeNow;
    this._clusterProfile.internalValue = config.clusterProfile;
    this._policy.internalValue = config.policy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_cluster - computed: true, optional: false, required: false
  private _attachedCluster = new ClusterConfigTemplateAttachedClusterList(this, "attached_cluster", false);
  public get attachedCluster() {
    return this._attachedCluster;
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // execution_state - computed: true, optional: false, required: false
  public get executionState() {
    return this.getStringAttribute('execution_state');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // upgrade_now - computed: false, optional: true, required: false
  private _upgradeNow?: string; 
  public get upgradeNow() {
    return this.getStringAttribute('upgrade_now');
  }
  public set upgradeNow(value: string) {
    this._upgradeNow = value;
  }
  public resetUpgradeNow() {
    this._upgradeNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeNowInput() {
    return this._upgradeNow;
  }

  // cluster_profile - computed: false, optional: true, required: false
  private _clusterProfile = new ClusterConfigTemplateClusterProfileList(this, "cluster_profile", true);
  public get clusterProfile() {
    return this._clusterProfile;
  }
  public putClusterProfile(value: ClusterConfigTemplateClusterProfile[] | cdktf.IResolvable) {
    this._clusterProfile.internalValue = value;
  }
  public resetClusterProfile() {
    this._clusterProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterProfileInput() {
    return this._clusterProfile.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new ClusterConfigTemplatePolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: ClusterConfigTemplatePolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterConfigTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterConfigTemplateTimeouts) {
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
      cloud_type: cdktf.stringToTerraform(this._cloudType),
      context: cdktf.stringToTerraform(this._context),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      upgrade_now: cdktf.stringToTerraform(this._upgradeNow),
      cluster_profile: cdktf.listMapper(clusterConfigTemplateClusterProfileToTerraform, true)(this._clusterProfile.internalValue),
      policy: clusterConfigTemplatePolicyToTerraform(this._policy.internalValue),
      timeouts: clusterConfigTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_type: {
        value: cdktf.stringToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      upgrade_now: {
        value: cdktf.stringToHclTerraform(this._upgradeNow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_profile: {
        value: cdktf.listMapperHcl(clusterConfigTemplateClusterProfileToHclTerraform, true)(this._clusterProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterConfigTemplateClusterProfileList",
      },
      policy: {
        value: clusterConfigTemplatePolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterConfigTemplatePolicyList",
      },
      timeouts: {
        value: clusterConfigTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterConfigTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
