// https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Optional) Indicates if “dynamic mode” is used for the application. In dynamic mode, an ADM run creates one or more candidate queries for each cluster. Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#alternate_query_mode Workspace#alternate_query_mode}
  */
  readonly alternateQueryMode?: boolean | cdktf.IResolvable;
  /**
  * ID of the scope assigned to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#app_scope_id Workspace#app_scope_id}
  */
  readonly appScopeId: string;
  /**
  * “ALLOW” or “DENY”
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#catch_all_action Workspace#catch_all_action}
  */
  readonly catchAllAction?: string;
  /**
  * (Optional) User-specified description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#description Workspace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#id Workspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Optional) User-specified name for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#name Workspace#name}
  */
  readonly name?: string;
  /**
  * (Optional) Set to true to indicate this application is primary for the given scope. Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#primary Workspace#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * (Optional) Return an error if there are unknown keys/attributes in the uploaded data. Useful for catching misspelled keys. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#strict_validation Workspace#strict_validation}
  */
  readonly strictValidation?: boolean | cdktf.IResolvable;
  /**
  * absolute_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#absolute_policy Workspace#absolute_policy}
  */
  readonly absolutePolicy?: WorkspaceAbsolutePolicy[] | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#cluster Workspace#cluster}
  */
  readonly cluster?: WorkspaceCluster[] | cdktf.IResolvable;
  /**
  * default_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#default_policy Workspace#default_policy}
  */
  readonly defaultPolicy?: WorkspaceDefaultPolicy[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#filter Workspace#filter}
  */
  readonly filter?: WorkspaceFilter[] | cdktf.IResolvable;
}
export interface WorkspaceAbsolutePolicyLayer4NetworkPolicy {
  /**
  * (Optional) Indicates whether the policy is approved. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#approved Workspace#approved}
  */
  readonly approved?: boolean | cdktf.IResolvable;
  /**
  * Inclusive range of ports; for example, [80, 80] or [5000, 6000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#port_range Workspace#port_range}
  */
  readonly portRange: number[];
  /**
  * Protocol integer value (NULL means all protocols).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#protocol Workspace#protocol}
  */
  readonly protocol: number;
}

export function workspaceAbsolutePolicyLayer4NetworkPolicyToTerraform(struct?: WorkspaceAbsolutePolicyLayer4NetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approved: cdktf.booleanToTerraform(struct!.approved),
    port_range: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.portRange),
    protocol: cdktf.numberToTerraform(struct!.protocol),
  }
}


export function workspaceAbsolutePolicyLayer4NetworkPolicyToHclTerraform(struct?: WorkspaceAbsolutePolicyLayer4NetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approved: {
      value: cdktf.booleanToHclTerraform(struct!.approved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_range: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.portRange),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAbsolutePolicyLayer4NetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceAbsolutePolicyLayer4NetworkPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approved !== undefined) {
      hasAnyValues = true;
      internalValueResult.approved = this._approved;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAbsolutePolicyLayer4NetworkPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approved = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approved = value.approved;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
    }
  }

  // approved - computed: false, optional: true, required: false
  private _approved?: boolean | cdktf.IResolvable; 
  public get approved() {
    return this.getBooleanAttribute('approved');
  }
  public set approved(value: boolean | cdktf.IResolvable) {
    this._approved = value;
  }
  public resetApproved() {
    this._approved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedInput() {
    return this._approved;
  }

  // port_range - computed: false, optional: false, required: true
  private _portRange?: number[]; 
  public get portRange() {
    return this.getNumberListAttribute('port_range');
  }
  public set portRange(value: number[]) {
    this._portRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class WorkspaceAbsolutePolicyLayer4NetworkPolicyList extends cdktf.ComplexList {
  public internalValue? : WorkspaceAbsolutePolicyLayer4NetworkPolicy[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceAbsolutePolicyLayer4NetworkPolicyOutputReference {
    return new WorkspaceAbsolutePolicyLayer4NetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceAbsolutePolicy {
  /**
  * “ALLOW” or “DENY”
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#action Workspace#action}
  */
  readonly action?: string;
  /**
  * ID of a cluster, user inventory filter, or application scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#consumer_filter_id Workspace#consumer_filter_id}
  */
  readonly consumerFilterId?: string;
  /**
  * Named filter. If more than one filter with the same name exists you must specify consumer_filter_id. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#consumer_filter_name Workspace#consumer_filter_name}
  */
  readonly consumerFilterName?: string;
  /**
  * ID of a cluster, user inventory filter, or application scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#provider_filter_id Workspace#provider_filter_id}
  */
  readonly providerFilterId?: string;
  /**
  * Named filter. If more than one filter with the same name exists you must specify consumer_filter_id. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#provider_filter_name Workspace#provider_filter_name}
  */
  readonly providerFilterName?: string;
  /**
  * layer_4_network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#layer_4_network_policy Workspace#layer_4_network_policy}
  */
  readonly layer4NetworkPolicy?: WorkspaceAbsolutePolicyLayer4NetworkPolicy[] | cdktf.IResolvable;
}

export function workspaceAbsolutePolicyToTerraform(struct?: WorkspaceAbsolutePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    consumer_filter_id: cdktf.stringToTerraform(struct!.consumerFilterId),
    consumer_filter_name: cdktf.stringToTerraform(struct!.consumerFilterName),
    provider_filter_id: cdktf.stringToTerraform(struct!.providerFilterId),
    provider_filter_name: cdktf.stringToTerraform(struct!.providerFilterName),
    layer_4_network_policy: cdktf.listMapper(workspaceAbsolutePolicyLayer4NetworkPolicyToTerraform, true)(struct!.layer4NetworkPolicy),
  }
}


export function workspaceAbsolutePolicyToHclTerraform(struct?: WorkspaceAbsolutePolicy | cdktf.IResolvable): any {
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
    consumer_filter_id: {
      value: cdktf.stringToHclTerraform(struct!.consumerFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.consumerFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_filter_id: {
      value: cdktf.stringToHclTerraform(struct!.providerFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.providerFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layer_4_network_policy: {
      value: cdktf.listMapperHcl(workspaceAbsolutePolicyLayer4NetworkPolicyToHclTerraform, true)(struct!.layer4NetworkPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceAbsolutePolicyLayer4NetworkPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAbsolutePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceAbsolutePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._consumerFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerFilterId = this._consumerFilterId;
    }
    if (this._consumerFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerFilterName = this._consumerFilterName;
    }
    if (this._providerFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerFilterId = this._providerFilterId;
    }
    if (this._providerFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerFilterName = this._providerFilterName;
    }
    if (this._layer4NetworkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer4NetworkPolicy = this._layer4NetworkPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAbsolutePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._consumerFilterId = undefined;
      this._consumerFilterName = undefined;
      this._providerFilterId = undefined;
      this._providerFilterName = undefined;
      this._layer4NetworkPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._consumerFilterId = value.consumerFilterId;
      this._consumerFilterName = value.consumerFilterName;
      this._providerFilterId = value.providerFilterId;
      this._providerFilterName = value.providerFilterName;
      this._layer4NetworkPolicy.internalValue = value.layer4NetworkPolicy;
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

  // consumer_filter_id - computed: false, optional: true, required: false
  private _consumerFilterId?: string; 
  public get consumerFilterId() {
    return this.getStringAttribute('consumer_filter_id');
  }
  public set consumerFilterId(value: string) {
    this._consumerFilterId = value;
  }
  public resetConsumerFilterId() {
    this._consumerFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerFilterIdInput() {
    return this._consumerFilterId;
  }

  // consumer_filter_name - computed: false, optional: true, required: false
  private _consumerFilterName?: string; 
  public get consumerFilterName() {
    return this.getStringAttribute('consumer_filter_name');
  }
  public set consumerFilterName(value: string) {
    this._consumerFilterName = value;
  }
  public resetConsumerFilterName() {
    this._consumerFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerFilterNameInput() {
    return this._consumerFilterName;
  }

  // provider_filter_id - computed: false, optional: true, required: false
  private _providerFilterId?: string; 
  public get providerFilterId() {
    return this.getStringAttribute('provider_filter_id');
  }
  public set providerFilterId(value: string) {
    this._providerFilterId = value;
  }
  public resetProviderFilterId() {
    this._providerFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerFilterIdInput() {
    return this._providerFilterId;
  }

  // provider_filter_name - computed: false, optional: true, required: false
  private _providerFilterName?: string; 
  public get providerFilterName() {
    return this.getStringAttribute('provider_filter_name');
  }
  public set providerFilterName(value: string) {
    this._providerFilterName = value;
  }
  public resetProviderFilterName() {
    this._providerFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerFilterNameInput() {
    return this._providerFilterName;
  }

  // layer_4_network_policy - computed: false, optional: true, required: false
  private _layer4NetworkPolicy = new WorkspaceAbsolutePolicyLayer4NetworkPolicyList(this, "layer_4_network_policy", false);
  public get layer4NetworkPolicy() {
    return this._layer4NetworkPolicy;
  }
  public putLayer4NetworkPolicy(value: WorkspaceAbsolutePolicyLayer4NetworkPolicy[] | cdktf.IResolvable) {
    this._layer4NetworkPolicy.internalValue = value;
  }
  public resetLayer4NetworkPolicy() {
    this._layer4NetworkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer4NetworkPolicyInput() {
    return this._layer4NetworkPolicy.internalValue;
  }
}

export class WorkspaceAbsolutePolicyList extends cdktf.ComplexList {
  public internalValue? : WorkspaceAbsolutePolicy[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceAbsolutePolicyOutputReference {
    return new WorkspaceAbsolutePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceClusterNode {
  /**
  * IP address or subnet of the node; for example, 10.0.0.1/8 or 1.2.3.4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#ip_address Workspace#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Displayed name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#name Workspace#name}
  */
  readonly name?: string;
}

export function workspaceClusterNodeToTerraform(struct?: WorkspaceClusterNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workspaceClusterNodeToHclTerraform(struct?: WorkspaceClusterNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceClusterNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceClusterNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceClusterNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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
}

export class WorkspaceClusterNodeList extends cdktf.ComplexList {
  public internalValue? : WorkspaceClusterNode[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceClusterNodeOutputReference {
    return new WorkspaceClusterNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceCluster {
  /**
  * Must be unique to a given application. After an ADM run, the similar/same clusters in the next version will maintain the consistent_uuid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#consistent_uuid Workspace#consistent_uuid}
  */
  readonly consistentUuid?: string;
  /**
  * Description of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#description Workspace#description}
  */
  readonly description?: string;
  /**
  * Unique identifier to be used with policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#id Workspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  *  Cluster display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#name Workspace#name}
  */
  readonly name?: string;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#node Workspace#node}
  */
  readonly nodeAttribute?: WorkspaceClusterNode[] | cdktf.IResolvable;
}

export function workspaceClusterToTerraform(struct?: WorkspaceCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistent_uuid: cdktf.stringToTerraform(struct!.consistentUuid),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    node: cdktf.listMapper(workspaceClusterNodeToTerraform, true)(struct!.nodeAttribute),
  }
}


export function workspaceClusterToHclTerraform(struct?: WorkspaceCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistent_uuid: {
      value: cdktf.stringToHclTerraform(struct!.consistentUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    node: {
      value: cdktf.listMapperHcl(workspaceClusterNodeToHclTerraform, true)(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceClusterNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistentUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentUuid = this._consistentUuid;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consistentUuid = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
      this._node.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consistentUuid = value.consistentUuid;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
      this._node.internalValue = value.nodeAttribute;
    }
  }

  // consistent_uuid - computed: false, optional: true, required: false
  private _consistentUuid?: string; 
  public get consistentUuid() {
    return this.getStringAttribute('consistent_uuid');
  }
  public set consistentUuid(value: string) {
    this._consistentUuid = value;
  }
  public resetConsistentUuid() {
    this._consistentUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentUuidInput() {
    return this._consistentUuid;
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

  // id - computed: false, optional: true, required: false
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

  // node - computed: false, optional: true, required: false
  private _node = new WorkspaceClusterNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: WorkspaceClusterNode[] | cdktf.IResolvable) {
    this._node.internalValue = value;
  }
  public resetNodeAttribute() {
    this._node.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }
}

export class WorkspaceClusterList extends cdktf.ComplexList {
  public internalValue? : WorkspaceCluster[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceClusterOutputReference {
    return new WorkspaceClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceDefaultPolicyLayer4NetworkPolicy {
  /**
  * (Optional) Indicates whether the policy is approved. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#approved Workspace#approved}
  */
  readonly approved?: boolean | cdktf.IResolvable;
  /**
  * Inclusive range of ports; for example, [80, 80] or [5000, 6000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#port_range Workspace#port_range}
  */
  readonly portRange: number[];
  /**
  * Protocol integer value (NULL means all protocols).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#protocol Workspace#protocol}
  */
  readonly protocol?: number;
}

export function workspaceDefaultPolicyLayer4NetworkPolicyToTerraform(struct?: WorkspaceDefaultPolicyLayer4NetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approved: cdktf.booleanToTerraform(struct!.approved),
    port_range: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.portRange),
    protocol: cdktf.numberToTerraform(struct!.protocol),
  }
}


export function workspaceDefaultPolicyLayer4NetworkPolicyToHclTerraform(struct?: WorkspaceDefaultPolicyLayer4NetworkPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approved: {
      value: cdktf.booleanToHclTerraform(struct!.approved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_range: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.portRange),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceDefaultPolicyLayer4NetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceDefaultPolicyLayer4NetworkPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approved !== undefined) {
      hasAnyValues = true;
      internalValueResult.approved = this._approved;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceDefaultPolicyLayer4NetworkPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approved = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approved = value.approved;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
    }
  }

  // approved - computed: false, optional: true, required: false
  private _approved?: boolean | cdktf.IResolvable; 
  public get approved() {
    return this.getBooleanAttribute('approved');
  }
  public set approved(value: boolean | cdktf.IResolvable) {
    this._approved = value;
  }
  public resetApproved() {
    this._approved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedInput() {
    return this._approved;
  }

  // port_range - computed: false, optional: false, required: true
  private _portRange?: number[]; 
  public get portRange() {
    return this.getNumberListAttribute('port_range');
  }
  public set portRange(value: number[]) {
    this._portRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class WorkspaceDefaultPolicyLayer4NetworkPolicyList extends cdktf.ComplexList {
  public internalValue? : WorkspaceDefaultPolicyLayer4NetworkPolicy[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceDefaultPolicyLayer4NetworkPolicyOutputReference {
    return new WorkspaceDefaultPolicyLayer4NetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceDefaultPolicy {
  /**
  * “ALLOW” or “DENY”
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#action Workspace#action}
  */
  readonly action?: string;
  /**
  * ID of a cluster, user inventory filter, or application scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#consumer_filter_id Workspace#consumer_filter_id}
  */
  readonly consumerFilterId?: string;
  /**
  * Named filter. If more than one filter with the same name exists you must specify consumer_filter_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#consumer_filter_name Workspace#consumer_filter_name}
  */
  readonly consumerFilterName?: string;
  /**
  * ID of a cluster, user inventory filter, or application scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#provider_filter_id Workspace#provider_filter_id}
  */
  readonly providerFilterId?: string;
  /**
  * Named filter. If more than one filter with the same name exists you must specify consumer_filter_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#provider_filter_name Workspace#provider_filter_name}
  */
  readonly providerFilterName?: string;
  /**
  * layer_4_network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#layer_4_network_policy Workspace#layer_4_network_policy}
  */
  readonly layer4NetworkPolicy?: WorkspaceDefaultPolicyLayer4NetworkPolicy[] | cdktf.IResolvable;
}

export function workspaceDefaultPolicyToTerraform(struct?: WorkspaceDefaultPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    consumer_filter_id: cdktf.stringToTerraform(struct!.consumerFilterId),
    consumer_filter_name: cdktf.stringToTerraform(struct!.consumerFilterName),
    provider_filter_id: cdktf.stringToTerraform(struct!.providerFilterId),
    provider_filter_name: cdktf.stringToTerraform(struct!.providerFilterName),
    layer_4_network_policy: cdktf.listMapper(workspaceDefaultPolicyLayer4NetworkPolicyToTerraform, true)(struct!.layer4NetworkPolicy),
  }
}


export function workspaceDefaultPolicyToHclTerraform(struct?: WorkspaceDefaultPolicy | cdktf.IResolvable): any {
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
    consumer_filter_id: {
      value: cdktf.stringToHclTerraform(struct!.consumerFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.consumerFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_filter_id: {
      value: cdktf.stringToHclTerraform(struct!.providerFilterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.providerFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layer_4_network_policy: {
      value: cdktf.listMapperHcl(workspaceDefaultPolicyLayer4NetworkPolicyToHclTerraform, true)(struct!.layer4NetworkPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceDefaultPolicyLayer4NetworkPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceDefaultPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceDefaultPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._consumerFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerFilterId = this._consumerFilterId;
    }
    if (this._consumerFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerFilterName = this._consumerFilterName;
    }
    if (this._providerFilterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerFilterId = this._providerFilterId;
    }
    if (this._providerFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerFilterName = this._providerFilterName;
    }
    if (this._layer4NetworkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer4NetworkPolicy = this._layer4NetworkPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceDefaultPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._consumerFilterId = undefined;
      this._consumerFilterName = undefined;
      this._providerFilterId = undefined;
      this._providerFilterName = undefined;
      this._layer4NetworkPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._consumerFilterId = value.consumerFilterId;
      this._consumerFilterName = value.consumerFilterName;
      this._providerFilterId = value.providerFilterId;
      this._providerFilterName = value.providerFilterName;
      this._layer4NetworkPolicy.internalValue = value.layer4NetworkPolicy;
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

  // consumer_filter_id - computed: false, optional: true, required: false
  private _consumerFilterId?: string; 
  public get consumerFilterId() {
    return this.getStringAttribute('consumer_filter_id');
  }
  public set consumerFilterId(value: string) {
    this._consumerFilterId = value;
  }
  public resetConsumerFilterId() {
    this._consumerFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerFilterIdInput() {
    return this._consumerFilterId;
  }

  // consumer_filter_name - computed: false, optional: true, required: false
  private _consumerFilterName?: string; 
  public get consumerFilterName() {
    return this.getStringAttribute('consumer_filter_name');
  }
  public set consumerFilterName(value: string) {
    this._consumerFilterName = value;
  }
  public resetConsumerFilterName() {
    this._consumerFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerFilterNameInput() {
    return this._consumerFilterName;
  }

  // provider_filter_id - computed: false, optional: true, required: false
  private _providerFilterId?: string; 
  public get providerFilterId() {
    return this.getStringAttribute('provider_filter_id');
  }
  public set providerFilterId(value: string) {
    this._providerFilterId = value;
  }
  public resetProviderFilterId() {
    this._providerFilterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerFilterIdInput() {
    return this._providerFilterId;
  }

  // provider_filter_name - computed: false, optional: true, required: false
  private _providerFilterName?: string; 
  public get providerFilterName() {
    return this.getStringAttribute('provider_filter_name');
  }
  public set providerFilterName(value: string) {
    this._providerFilterName = value;
  }
  public resetProviderFilterName() {
    this._providerFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerFilterNameInput() {
    return this._providerFilterName;
  }

  // layer_4_network_policy - computed: false, optional: true, required: false
  private _layer4NetworkPolicy = new WorkspaceDefaultPolicyLayer4NetworkPolicyList(this, "layer_4_network_policy", false);
  public get layer4NetworkPolicy() {
    return this._layer4NetworkPolicy;
  }
  public putLayer4NetworkPolicy(value: WorkspaceDefaultPolicyLayer4NetworkPolicy[] | cdktf.IResolvable) {
    this._layer4NetworkPolicy.internalValue = value;
  }
  public resetLayer4NetworkPolicy() {
    this._layer4NetworkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer4NetworkPolicyInput() {
    return this._layer4NetworkPolicy.internalValue;
  }
}

export class WorkspaceDefaultPolicyList extends cdktf.ComplexList {
  public internalValue? : WorkspaceDefaultPolicy[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceDefaultPolicyOutputReference {
    return new WorkspaceDefaultPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceFilter {
  /**
  * Unique identifier to be used with policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#id Workspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Displayed name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#name Workspace#name}
  */
  readonly name?: string;
  /**
  * JSON object representation of an inventory filter query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#query Workspace#query}
  */
  readonly query: string;
}

export function workspaceFilterToTerraform(struct?: WorkspaceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function workspaceFilterToHclTerraform(struct?: WorkspaceFilter | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._query = value.query;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class WorkspaceFilterList extends cdktf.ComplexList {
  public internalValue? : WorkspaceFilter[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceFilterOutputReference {
    return new WorkspaceFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace secureworkload_workspace}
*/
export class Workspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secureworkload_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workspace to import
  * @param importFromId The id of the existing Workspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secureworkload_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/workspace secureworkload_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'secureworkload_workspace',
      terraformGeneratorMetadata: {
        providerName: 'secureworkload',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alternateQueryMode = config.alternateQueryMode;
    this._appScopeId = config.appScopeId;
    this._catchAllAction = config.catchAllAction;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._primary = config.primary;
    this._strictValidation = config.strictValidation;
    this._absolutePolicy.internalValue = config.absolutePolicy;
    this._cluster.internalValue = config.cluster;
    this._defaultPolicy.internalValue = config.defaultPolicy;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_query_mode - computed: false, optional: true, required: false
  private _alternateQueryMode?: boolean | cdktf.IResolvable; 
  public get alternateQueryMode() {
    return this.getBooleanAttribute('alternate_query_mode');
  }
  public set alternateQueryMode(value: boolean | cdktf.IResolvable) {
    this._alternateQueryMode = value;
  }
  public resetAlternateQueryMode() {
    this._alternateQueryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateQueryModeInput() {
    return this._alternateQueryMode;
  }

  // app_scope_id - computed: false, optional: false, required: true
  private _appScopeId?: string; 
  public get appScopeId() {
    return this.getStringAttribute('app_scope_id');
  }
  public set appScopeId(value: string) {
    this._appScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appScopeIdInput() {
    return this._appScopeId;
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // catch_all_action - computed: false, optional: true, required: false
  private _catchAllAction?: string; 
  public get catchAllAction() {
    return this.getStringAttribute('catch_all_action');
  }
  public set catchAllAction(value: string) {
    this._catchAllAction = value;
  }
  public resetCatchAllAction() {
    this._catchAllAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchAllActionInput() {
    return this._catchAllAction;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

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

  // enforced_version - computed: true, optional: false, required: false
  public get enforcedVersion() {
    return this.getNumberAttribute('enforced_version');
  }

  // enforcement_enabled - computed: true, optional: false, required: false
  public get enforcementEnabled() {
    return this.getBooleanAttribute('enforcement_enabled');
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

  // latest_adm_version - computed: true, optional: false, required: false
  public get latestAdmVersion() {
    return this.getNumberAttribute('latest_adm_version');
  }

  // name - computed: true, optional: true, required: false
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

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // strict_validation - computed: false, optional: true, required: false
  private _strictValidation?: boolean | cdktf.IResolvable; 
  public get strictValidation() {
    return this.getBooleanAttribute('strict_validation');
  }
  public set strictValidation(value: boolean | cdktf.IResolvable) {
    this._strictValidation = value;
  }
  public resetStrictValidation() {
    this._strictValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictValidationInput() {
    return this._strictValidation;
  }

  // absolute_policy - computed: false, optional: true, required: false
  private _absolutePolicy = new WorkspaceAbsolutePolicyList(this, "absolute_policy", false);
  public get absolutePolicy() {
    return this._absolutePolicy;
  }
  public putAbsolutePolicy(value: WorkspaceAbsolutePolicy[] | cdktf.IResolvable) {
    this._absolutePolicy.internalValue = value;
  }
  public resetAbsolutePolicy() {
    this._absolutePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absolutePolicyInput() {
    return this._absolutePolicy.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new WorkspaceClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: WorkspaceCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // default_policy - computed: false, optional: true, required: false
  private _defaultPolicy = new WorkspaceDefaultPolicyList(this, "default_policy", false);
  public get defaultPolicy() {
    return this._defaultPolicy;
  }
  public putDefaultPolicy(value: WorkspaceDefaultPolicy[] | cdktf.IResolvable) {
    this._defaultPolicy.internalValue = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new WorkspaceFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: WorkspaceFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternate_query_mode: cdktf.booleanToTerraform(this._alternateQueryMode),
      app_scope_id: cdktf.stringToTerraform(this._appScopeId),
      catch_all_action: cdktf.stringToTerraform(this._catchAllAction),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      primary: cdktf.booleanToTerraform(this._primary),
      strict_validation: cdktf.booleanToTerraform(this._strictValidation),
      absolute_policy: cdktf.listMapper(workspaceAbsolutePolicyToTerraform, true)(this._absolutePolicy.internalValue),
      cluster: cdktf.listMapper(workspaceClusterToTerraform, true)(this._cluster.internalValue),
      default_policy: cdktf.listMapper(workspaceDefaultPolicyToTerraform, true)(this._defaultPolicy.internalValue),
      filter: cdktf.listMapper(workspaceFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternate_query_mode: {
        value: cdktf.booleanToHclTerraform(this._alternateQueryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_scope_id: {
        value: cdktf.stringToHclTerraform(this._appScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catch_all_action: {
        value: cdktf.stringToHclTerraform(this._catchAllAction),
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
      primary: {
        value: cdktf.booleanToHclTerraform(this._primary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict_validation: {
        value: cdktf.booleanToHclTerraform(this._strictValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      absolute_policy: {
        value: cdktf.listMapperHcl(workspaceAbsolutePolicyToHclTerraform, true)(this._absolutePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceAbsolutePolicyList",
      },
      cluster: {
        value: cdktf.listMapperHcl(workspaceClusterToHclTerraform, true)(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceClusterList",
      },
      default_policy: {
        value: cdktf.listMapperHcl(workspaceDefaultPolicyToHclTerraform, true)(this._defaultPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceDefaultPolicyList",
      },
      filter: {
        value: cdktf.listMapperHcl(workspaceFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
