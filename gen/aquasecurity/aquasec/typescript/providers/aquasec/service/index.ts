// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates the application scope of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#application_scopes Service#application_scopes}
  */
  readonly applicationScopes: string[];
  /**
  * A textual description of the service record; maximum 500 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#description Service#description}
  */
  readonly description?: string;
  /**
  * Enforcement status of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#enforce Service#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates if monitoring is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#monitoring Service#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * The name of the service. It is recommended not to use whitespace characters in the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * The service's policies; an array of container firewall policy names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#policies Service#policies}
  */
  readonly policies: string[];
  /**
  * Rules priority, must be between 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#priority Service#priority}
  */
  readonly priority?: number;
  /**
  * Logical expression of how to compute the dependency of the scope variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#scope_expression Service#scope_expression}
  */
  readonly scopeExpression?: string;
  /**
  * Type of the workload. container or host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#target Service#target}
  */
  readonly target: string;
  /**
  * local_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#local_policies Service#local_policies}
  */
  readonly localPolicies?: ServiceLocalPolicies[] | cdktf.IResolvable;
  /**
  * scope_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#scope_variables Service#scope_variables}
  */
  readonly scopeVariables?: ServiceScopeVariables[] | cdktf.IResolvable;
}
export interface ServiceLocalPoliciesInboundNetworks {
  /**
  * Whether the inbound network rule is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#allow Service#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * The port range for the inbound network rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#port_range Service#port_range}
  */
  readonly portRange: string;
  /**
  * Custom ip for the inbound network rule (e.g., 190.1.2.3/12).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#resource Service#resource}
  */
  readonly resource?: string;
  /**
  * The resource type for the inbound network rule (e.g., anywhere).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#resource_type Service#resource_type}
  */
  readonly resourceType: string;
}

export function serviceLocalPoliciesInboundNetworksToTerraform(struct?: ServiceLocalPoliciesInboundNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    port_range: cdktf.stringToTerraform(struct!.portRange),
    resource: cdktf.stringToTerraform(struct!.resource),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function serviceLocalPoliciesInboundNetworksToHclTerraform(struct?: ServiceLocalPoliciesInboundNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLocalPoliciesInboundNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLocalPoliciesInboundNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLocalPoliciesInboundNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._portRange = undefined;
      this._resource = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._portRange = value.portRange;
      this._resource = value.resource;
      this._resourceType = value.resourceType;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // port_range - computed: false, optional: false, required: true
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class ServiceLocalPoliciesInboundNetworksList extends cdktf.ComplexList {
  public internalValue? : ServiceLocalPoliciesInboundNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServiceLocalPoliciesInboundNetworksOutputReference {
    return new ServiceLocalPoliciesInboundNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLocalPoliciesOutboundNetworks {
  /**
  * Whether the outbound network rule is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#allow Service#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * The port range for the outbound network rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#port_range Service#port_range}
  */
  readonly portRange: string;
  /**
  * Custom ip for the outbound network rule (e.g., 190.1.2.3/12).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#resource Service#resource}
  */
  readonly resource?: string;
  /**
  * The resource type for the outbound network rule (e.g., anywhere).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#resource_type Service#resource_type}
  */
  readonly resourceType: string;
}

export function serviceLocalPoliciesOutboundNetworksToTerraform(struct?: ServiceLocalPoliciesOutboundNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    port_range: cdktf.stringToTerraform(struct!.portRange),
    resource: cdktf.stringToTerraform(struct!.resource),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function serviceLocalPoliciesOutboundNetworksToHclTerraform(struct?: ServiceLocalPoliciesOutboundNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLocalPoliciesOutboundNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLocalPoliciesOutboundNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLocalPoliciesOutboundNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._portRange = undefined;
      this._resource = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._portRange = value.portRange;
      this._resource = value.resource;
      this._resourceType = value.resourceType;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // port_range - computed: false, optional: false, required: true
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class ServiceLocalPoliciesOutboundNetworksList extends cdktf.ComplexList {
  public internalValue? : ServiceLocalPoliciesOutboundNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServiceLocalPoliciesOutboundNetworksOutputReference {
    return new ServiceLocalPoliciesOutboundNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLocalPolicies {
  /**
  * Whether to block access to the metadata service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#block_metadata_service Service#block_metadata_service}
  */
  readonly blockMetadataService?: boolean | cdktf.IResolvable;
  /**
  * A description of the local policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#description Service#description}
  */
  readonly description?: string;
  /**
  * The name of the local policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * The type of the local policy, e.g., access.control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#type Service#type}
  */
  readonly type: string;
  /**
  * inbound_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#inbound_networks Service#inbound_networks}
  */
  readonly inboundNetworks?: ServiceLocalPoliciesInboundNetworks[] | cdktf.IResolvable;
  /**
  * outbound_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#outbound_networks Service#outbound_networks}
  */
  readonly outboundNetworks?: ServiceLocalPoliciesOutboundNetworks[] | cdktf.IResolvable;
}

export function serviceLocalPoliciesToTerraform(struct?: ServiceLocalPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_metadata_service: cdktf.booleanToTerraform(struct!.blockMetadataService),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    inbound_networks: cdktf.listMapper(serviceLocalPoliciesInboundNetworksToTerraform, true)(struct!.inboundNetworks),
    outbound_networks: cdktf.listMapper(serviceLocalPoliciesOutboundNetworksToTerraform, true)(struct!.outboundNetworks),
  }
}


export function serviceLocalPoliciesToHclTerraform(struct?: ServiceLocalPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_metadata_service: {
      value: cdktf.booleanToHclTerraform(struct!.blockMetadataService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_networks: {
      value: cdktf.listMapperHcl(serviceLocalPoliciesInboundNetworksToHclTerraform, true)(struct!.inboundNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLocalPoliciesInboundNetworksList",
    },
    outbound_networks: {
      value: cdktf.listMapperHcl(serviceLocalPoliciesOutboundNetworksToHclTerraform, true)(struct!.outboundNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLocalPoliciesOutboundNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLocalPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLocalPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockMetadataService !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockMetadataService = this._blockMetadataService;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._inboundNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundNetworks = this._inboundNetworks?.internalValue;
    }
    if (this._outboundNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundNetworks = this._outboundNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLocalPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockMetadataService = undefined;
      this._description = undefined;
      this._name = undefined;
      this._type = undefined;
      this._inboundNetworks.internalValue = undefined;
      this._outboundNetworks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockMetadataService = value.blockMetadataService;
      this._description = value.description;
      this._name = value.name;
      this._type = value.type;
      this._inboundNetworks.internalValue = value.inboundNetworks;
      this._outboundNetworks.internalValue = value.outboundNetworks;
    }
  }

  // block_metadata_service - computed: false, optional: true, required: false
  private _blockMetadataService?: boolean | cdktf.IResolvable; 
  public get blockMetadataService() {
    return this.getBooleanAttribute('block_metadata_service');
  }
  public set blockMetadataService(value: boolean | cdktf.IResolvable) {
    this._blockMetadataService = value;
  }
  public resetBlockMetadataService() {
    this._blockMetadataService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMetadataServiceInput() {
    return this._blockMetadataService;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // inbound_networks - computed: false, optional: true, required: false
  private _inboundNetworks = new ServiceLocalPoliciesInboundNetworksList(this, "inbound_networks", false);
  public get inboundNetworks() {
    return this._inboundNetworks;
  }
  public putInboundNetworks(value: ServiceLocalPoliciesInboundNetworks[] | cdktf.IResolvable) {
    this._inboundNetworks.internalValue = value;
  }
  public resetInboundNetworks() {
    this._inboundNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNetworksInput() {
    return this._inboundNetworks.internalValue;
  }

  // outbound_networks - computed: false, optional: true, required: false
  private _outboundNetworks = new ServiceLocalPoliciesOutboundNetworksList(this, "outbound_networks", false);
  public get outboundNetworks() {
    return this._outboundNetworks;
  }
  public putOutboundNetworks(value: ServiceLocalPoliciesOutboundNetworks[] | cdktf.IResolvable) {
    this._outboundNetworks.internalValue = value;
  }
  public resetOutboundNetworks() {
    this._outboundNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundNetworksInput() {
    return this._outboundNetworks.internalValue;
  }
}

export class ServiceLocalPoliciesList extends cdktf.ComplexList {
  public internalValue? : ServiceLocalPolicies[] | cdktf.IResolvable

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
  public get(index: number): ServiceLocalPoliciesOutputReference {
    return new ServiceLocalPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceScopeVariables {
  /**
  * Class of supported scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#attribute Service#attribute}
  */
  readonly attribute?: string;
  /**
  * Name assigned to the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#name Service#name}
  */
  readonly name?: string;
  /**
  * Value assigned to the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#value Service#value}
  */
  readonly value?: string;
}

export function serviceScopeVariablesToTerraform(struct?: ServiceScopeVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceScopeVariablesToHclTerraform(struct?: ServiceScopeVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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

export class ServiceScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceScopeVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
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

  public set internalValue(value: ServiceScopeVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
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
      this._attribute = value.attribute;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
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

export class ServiceScopeVariablesList extends cdktf.ComplexList {
  public internalValue? : ServiceScopeVariables[] | cdktf.IResolvable

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
  public get(index: number): ServiceScopeVariablesOutputReference {
    return new ServiceScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service aquasec_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/service aquasec_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_service',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationScopes = config.applicationScopes;
    this._description = config.description;
    this._enforce = config.enforce;
    this._id = config.id;
    this._monitoring = config.monitoring;
    this._name = config.name;
    this._policies = config.policies;
    this._priority = config.priority;
    this._scopeExpression = config.scopeExpression;
    this._target = config.target;
    this._localPolicies.internalValue = config.localPolicies;
    this._scopeVariables.internalValue = config.scopeVariables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_scopes - computed: false, optional: false, required: true
  private _applicationScopes?: string[]; 
  public get applicationScopes() {
    return this.getListAttribute('application_scopes');
  }
  public set applicationScopes(value: string[]) {
    this._applicationScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationScopesInput() {
    return this._applicationScopes;
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // containers_count - computed: true, optional: false, required: false
  public get containersCount() {
    return this.getNumberAttribute('containers_count');
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

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // evaluated - computed: true, optional: false, required: false
  public get evaluated() {
    return this.getBooleanAttribute('evaluated');
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

  // is_registered - computed: true, optional: false, required: false
  public get isRegistered() {
    return this.getBooleanAttribute('is_registered');
  }

  // lastupdate - computed: true, optional: false, required: false
  public get lastupdate() {
    return this.getNumberAttribute('lastupdate');
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean | cdktf.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktf.IResolvable) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
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

  // not_evaluated_count - computed: true, optional: false, required: false
  public get notEvaluatedCount() {
    return this.getNumberAttribute('not_evaluated_count');
  }

  // policies - computed: false, optional: false, required: true
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
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

  // scope_expression - computed: false, optional: true, required: false
  private _scopeExpression?: string; 
  public get scopeExpression() {
    return this.getStringAttribute('scope_expression');
  }
  public set scopeExpression(value: string) {
    this._scopeExpression = value;
  }
  public resetScopeExpression() {
    this._scopeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeExpressionInput() {
    return this._scopeExpression;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // unregistered_count - computed: true, optional: false, required: false
  public get unregisteredCount() {
    return this.getNumberAttribute('unregistered_count');
  }

  // vulnerabilities_high - computed: true, optional: false, required: false
  public get vulnerabilitiesHigh() {
    return this.getNumberAttribute('vulnerabilities_high');
  }

  // vulnerabilities_low - computed: true, optional: false, required: false
  public get vulnerabilitiesLow() {
    return this.getNumberAttribute('vulnerabilities_low');
  }

  // vulnerabilities_malware - computed: true, optional: false, required: false
  public get vulnerabilitiesMalware() {
    return this.getNumberAttribute('vulnerabilities_malware');
  }

  // vulnerabilities_medium - computed: true, optional: false, required: false
  public get vulnerabilitiesMedium() {
    return this.getNumberAttribute('vulnerabilities_medium');
  }

  // vulnerabilities_negligible - computed: true, optional: false, required: false
  public get vulnerabilitiesNegligible() {
    return this.getNumberAttribute('vulnerabilities_negligible');
  }

  // vulnerabilities_score_average - computed: true, optional: false, required: false
  public get vulnerabilitiesScoreAverage() {
    return this.getNumberAttribute('vulnerabilities_score_average');
  }

  // vulnerabilities_sensitive - computed: true, optional: false, required: false
  public get vulnerabilitiesSensitive() {
    return this.getNumberAttribute('vulnerabilities_sensitive');
  }

  // vulnerabilities_total - computed: true, optional: false, required: false
  public get vulnerabilitiesTotal() {
    return this.getNumberAttribute('vulnerabilities_total');
  }

  // local_policies - computed: false, optional: true, required: false
  private _localPolicies = new ServiceLocalPoliciesList(this, "local_policies", false);
  public get localPolicies() {
    return this._localPolicies;
  }
  public putLocalPolicies(value: ServiceLocalPolicies[] | cdktf.IResolvable) {
    this._localPolicies.internalValue = value;
  }
  public resetLocalPolicies() {
    this._localPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPoliciesInput() {
    return this._localPolicies.internalValue;
  }

  // scope_variables - computed: false, optional: true, required: false
  private _scopeVariables = new ServiceScopeVariablesList(this, "scope_variables", false);
  public get scopeVariables() {
    return this._scopeVariables;
  }
  public putScopeVariables(value: ServiceScopeVariables[] | cdktf.IResolvable) {
    this._scopeVariables.internalValue = value;
  }
  public resetScopeVariables() {
    this._scopeVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeVariablesInput() {
    return this._scopeVariables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationScopes),
      description: cdktf.stringToTerraform(this._description),
      enforce: cdktf.booleanToTerraform(this._enforce),
      id: cdktf.stringToTerraform(this._id),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      name: cdktf.stringToTerraform(this._name),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      priority: cdktf.numberToTerraform(this._priority),
      scope_expression: cdktf.stringToTerraform(this._scopeExpression),
      target: cdktf.stringToTerraform(this._target),
      local_policies: cdktf.listMapper(serviceLocalPoliciesToTerraform, true)(this._localPolicies.internalValue),
      scope_variables: cdktf.listMapper(serviceScopeVariablesToTerraform, true)(this._scopeVariables.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce: {
        value: cdktf.booleanToHclTerraform(this._enforce),
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
      monitoring: {
        value: cdktf.booleanToHclTerraform(this._monitoring),
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
      policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scope_expression: {
        value: cdktf.stringToHclTerraform(this._scopeExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_policies: {
        value: cdktf.listMapperHcl(serviceLocalPoliciesToHclTerraform, true)(this._localPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLocalPoliciesList",
      },
      scope_variables: {
        value: cdktf.listMapperHcl(serviceScopeVariablesToHclTerraform, true)(this._scopeVariables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceScopeVariablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
