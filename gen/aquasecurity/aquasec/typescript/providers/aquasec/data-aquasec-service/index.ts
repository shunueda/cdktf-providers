// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#id DataAquasecService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the service. It is recommended not to use whitespace characters in the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#name DataAquasecService#name}
  */
  readonly name: string;
  /**
  * The service's policies; an array of container firewall policy names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#policies DataAquasecService#policies}
  */
  readonly policies: string[];
  /**
  * local_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#local_policies DataAquasecService#local_policies}
  */
  readonly localPolicies?: DataAquasecServiceLocalPolicies[] | cdktf.IResolvable;
}
export interface DataAquasecServiceScopeVariables {
}

export function dataAquasecServiceScopeVariablesToTerraform(struct?: DataAquasecServiceScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecServiceScopeVariablesToHclTerraform(struct?: DataAquasecServiceScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecServiceScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecServiceScopeVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecServiceScopeVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAquasecServiceScopeVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecServiceScopeVariablesOutputReference {
    return new DataAquasecServiceScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecServiceLocalPoliciesInboundNetworks {
  /**
  * Whether the inbound network rule is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#allow DataAquasecService#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * The port range for the inbound network rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#port_range DataAquasecService#port_range}
  */
  readonly portRange: string;
  /**
  * Custom ip for the inbound network rule (e.g., 190.1.2.3/12).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#resource DataAquasecService#resource}
  */
  readonly resource?: string;
  /**
  * The resource type for the inbound network rule (e.g., anywhere).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#resource_type DataAquasecService#resource_type}
  */
  readonly resourceType: string;
}

export function dataAquasecServiceLocalPoliciesInboundNetworksToTerraform(struct?: DataAquasecServiceLocalPoliciesInboundNetworks | cdktf.IResolvable): any {
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


export function dataAquasecServiceLocalPoliciesInboundNetworksToHclTerraform(struct?: DataAquasecServiceLocalPoliciesInboundNetworks | cdktf.IResolvable): any {
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

export class DataAquasecServiceLocalPoliciesInboundNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecServiceLocalPoliciesInboundNetworks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAquasecServiceLocalPoliciesInboundNetworks | cdktf.IResolvable | undefined) {
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

export class DataAquasecServiceLocalPoliciesInboundNetworksList extends cdktf.ComplexList {
  public internalValue? : DataAquasecServiceLocalPoliciesInboundNetworks[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecServiceLocalPoliciesInboundNetworksOutputReference {
    return new DataAquasecServiceLocalPoliciesInboundNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecServiceLocalPoliciesOutboundNetworks {
  /**
  * Whether the outbound network rule is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#allow DataAquasecService#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * The port range for the outbound network rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#port_range DataAquasecService#port_range}
  */
  readonly portRange: string;
  /**
  * Custom ip for the outbound network rule (e.g., 190.1.2.3/12).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#resource DataAquasecService#resource}
  */
  readonly resource?: string;
  /**
  * The resource type for the outbound network rule (e.g., anywhere).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#resource_type DataAquasecService#resource_type}
  */
  readonly resourceType: string;
}

export function dataAquasecServiceLocalPoliciesOutboundNetworksToTerraform(struct?: DataAquasecServiceLocalPoliciesOutboundNetworks | cdktf.IResolvable): any {
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


export function dataAquasecServiceLocalPoliciesOutboundNetworksToHclTerraform(struct?: DataAquasecServiceLocalPoliciesOutboundNetworks | cdktf.IResolvable): any {
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

export class DataAquasecServiceLocalPoliciesOutboundNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecServiceLocalPoliciesOutboundNetworks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAquasecServiceLocalPoliciesOutboundNetworks | cdktf.IResolvable | undefined) {
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

export class DataAquasecServiceLocalPoliciesOutboundNetworksList extends cdktf.ComplexList {
  public internalValue? : DataAquasecServiceLocalPoliciesOutboundNetworks[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecServiceLocalPoliciesOutboundNetworksOutputReference {
    return new DataAquasecServiceLocalPoliciesOutboundNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecServiceLocalPolicies {
  /**
  * Whether to block access to the metadata service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#block_metadata_service DataAquasecService#block_metadata_service}
  */
  readonly blockMetadataService?: boolean | cdktf.IResolvable;
  /**
  * A description of the local policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#description DataAquasecService#description}
  */
  readonly description?: string;
  /**
  * The name of the local policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#name DataAquasecService#name}
  */
  readonly name: string;
  /**
  * The type of the local policy, e.g., access.control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#type DataAquasecService#type}
  */
  readonly type: string;
  /**
  * inbound_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#inbound_networks DataAquasecService#inbound_networks}
  */
  readonly inboundNetworks?: DataAquasecServiceLocalPoliciesInboundNetworks[] | cdktf.IResolvable;
  /**
  * outbound_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#outbound_networks DataAquasecService#outbound_networks}
  */
  readonly outboundNetworks?: DataAquasecServiceLocalPoliciesOutboundNetworks[] | cdktf.IResolvable;
}

export function dataAquasecServiceLocalPoliciesToTerraform(struct?: DataAquasecServiceLocalPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_metadata_service: cdktf.booleanToTerraform(struct!.blockMetadataService),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    inbound_networks: cdktf.listMapper(dataAquasecServiceLocalPoliciesInboundNetworksToTerraform, true)(struct!.inboundNetworks),
    outbound_networks: cdktf.listMapper(dataAquasecServiceLocalPoliciesOutboundNetworksToTerraform, true)(struct!.outboundNetworks),
  }
}


export function dataAquasecServiceLocalPoliciesToHclTerraform(struct?: DataAquasecServiceLocalPolicies | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataAquasecServiceLocalPoliciesInboundNetworksToHclTerraform, true)(struct!.inboundNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "DataAquasecServiceLocalPoliciesInboundNetworksList",
    },
    outbound_networks: {
      value: cdktf.listMapperHcl(dataAquasecServiceLocalPoliciesOutboundNetworksToHclTerraform, true)(struct!.outboundNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "DataAquasecServiceLocalPoliciesOutboundNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecServiceLocalPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecServiceLocalPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAquasecServiceLocalPolicies | cdktf.IResolvable | undefined) {
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
  private _inboundNetworks = new DataAquasecServiceLocalPoliciesInboundNetworksList(this, "inbound_networks", false);
  public get inboundNetworks() {
    return this._inboundNetworks;
  }
  public putInboundNetworks(value: DataAquasecServiceLocalPoliciesInboundNetworks[] | cdktf.IResolvable) {
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
  private _outboundNetworks = new DataAquasecServiceLocalPoliciesOutboundNetworksList(this, "outbound_networks", false);
  public get outboundNetworks() {
    return this._outboundNetworks;
  }
  public putOutboundNetworks(value: DataAquasecServiceLocalPoliciesOutboundNetworks[] | cdktf.IResolvable) {
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

export class DataAquasecServiceLocalPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataAquasecServiceLocalPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecServiceLocalPoliciesOutputReference {
    return new DataAquasecServiceLocalPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service aquasec_service}
*/
export class DataAquasecService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecService to import
  * @param importFromId The id of the existing DataAquasecService that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/service aquasec_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAquasecServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_service',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
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
    this._name = config.name;
    this._policies = config.policies;
    this._localPolicies.internalValue = config.localPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_scopes - computed: true, optional: false, required: false
  public get applicationScopes() {
    return this.getListAttribute('application_scopes');
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // containers_count - computed: true, optional: false, required: false
  public get containersCount() {
    return this.getNumberAttribute('containers_count');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getBooleanAttribute('enforce');
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

  // monitoring - computed: true, optional: false, required: false
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // scope_expression - computed: true, optional: false, required: false
  public get scopeExpression() {
    return this.getStringAttribute('scope_expression');
  }

  // scope_variables - computed: true, optional: false, required: false
  private _scopeVariables = new DataAquasecServiceScopeVariablesList(this, "scope_variables", false);
  public get scopeVariables() {
    return this._scopeVariables;
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
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
  private _localPolicies = new DataAquasecServiceLocalPoliciesList(this, "local_policies", false);
  public get localPolicies() {
    return this._localPolicies;
  }
  public putLocalPolicies(value: DataAquasecServiceLocalPolicies[] | cdktf.IResolvable) {
    this._localPolicies.internalValue = value;
  }
  public resetLocalPolicies() {
    this._localPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPoliciesInput() {
    return this._localPolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      local_policies: cdktf.listMapper(dataAquasecServiceLocalPoliciesToTerraform, true)(this._localPolicies.internalValue),
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
      local_policies: {
        value: cdktf.listMapperHcl(dataAquasecServiceLocalPoliciesToHclTerraform, true)(this._localPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecServiceLocalPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
