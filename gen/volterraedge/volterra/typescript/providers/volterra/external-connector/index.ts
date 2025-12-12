// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#annotations ExternalConnector#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#description ExternalConnector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#disable ExternalConnector#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#id ExternalConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#labels ExternalConnector#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#name ExternalConnector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#namespace ExternalConnector#namespace}
  */
  readonly namespace: string;
  /**
  * ce_site_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#ce_site_reference ExternalConnector#ce_site_reference}
  */
  readonly ceSiteReference: ExternalConnectorCeSiteReference;
  /**
  * direct_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#direct_connection ExternalConnector#direct_connection}
  */
  readonly directConnection?: ExternalConnectorDirectConnection;
  /**
  * gre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#gre ExternalConnector#gre}
  */
  readonly gre?: ExternalConnectorGre;
  /**
  * ipsec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#ipsec ExternalConnector#ipsec}
  */
  readonly ipsec?: ExternalConnectorIpsec;
}
export interface ExternalConnectorCeSiteReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#name ExternalConnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#namespace ExternalConnector#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tenant ExternalConnector#tenant}
  */
  readonly tenant?: string;
}

export function externalConnectorCeSiteReferenceToTerraform(struct?: ExternalConnectorCeSiteReferenceOutputReference | ExternalConnectorCeSiteReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function externalConnectorCeSiteReferenceToHclTerraform(struct?: ExternalConnectorCeSiteReferenceOutputReference | ExternalConnectorCeSiteReference): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorCeSiteReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorCeSiteReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorCeSiteReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ExternalConnectorDirectConnection {
}

export function externalConnectorDirectConnectionToTerraform(struct?: ExternalConnectorDirectConnectionOutputReference | ExternalConnectorDirectConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalConnectorDirectConnectionToHclTerraform(struct?: ExternalConnectorDirectConnectionOutputReference | ExternalConnectorDirectConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalConnectorDirectConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorDirectConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorDirectConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ExternalConnectorGreGreParametersPeerIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#addr ExternalConnector#addr}
  */
  readonly addr?: string;
}

export function externalConnectorGreGreParametersPeerIpAddressToTerraform(struct?: ExternalConnectorGreGreParametersPeerIpAddressOutputReference | ExternalConnectorGreGreParametersPeerIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function externalConnectorGreGreParametersPeerIpAddressToHclTerraform(struct?: ExternalConnectorGreGreParametersPeerIpAddressOutputReference | ExternalConnectorGreGreParametersPeerIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorGreGreParametersPeerIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorGreGreParametersPeerIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorGreGreParametersPeerIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ExternalConnectorGreGreParametersSegmentRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#name ExternalConnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#namespace ExternalConnector#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tenant ExternalConnector#tenant}
  */
  readonly tenant?: string;
}

export function externalConnectorGreGreParametersSegmentRefsToTerraform(struct?: ExternalConnectorGreGreParametersSegmentRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function externalConnectorGreGreParametersSegmentRefsToHclTerraform(struct?: ExternalConnectorGreGreParametersSegmentRefs | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorGreGreParametersSegmentRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalConnectorGreGreParametersSegmentRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorGreGreParametersSegmentRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class ExternalConnectorGreGreParametersSegmentRefsList extends cdktf.ComplexList {
  public internalValue? : ExternalConnectorGreGreParametersSegmentRefs[] | cdktf.IResolvable

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
  public get(index: number): ExternalConnectorGreGreParametersSegmentRefsOutputReference {
    return new ExternalConnectorGreGreParametersSegmentRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalConnectorGreGreParametersSegmentVirtualNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#name ExternalConnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#namespace ExternalConnector#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tenant ExternalConnector#tenant}
  */
  readonly tenant?: string;
}

export function externalConnectorGreGreParametersSegmentVirtualNetworksToTerraform(struct?: ExternalConnectorGreGreParametersSegmentVirtualNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function externalConnectorGreGreParametersSegmentVirtualNetworksToHclTerraform(struct?: ExternalConnectorGreGreParametersSegmentVirtualNetworks | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorGreGreParametersSegmentVirtualNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalConnectorGreGreParametersSegmentVirtualNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorGreGreParametersSegmentVirtualNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class ExternalConnectorGreGreParametersSegmentVirtualNetworksList extends cdktf.ComplexList {
  public internalValue? : ExternalConnectorGreGreParametersSegmentVirtualNetworks[] | cdktf.IResolvable

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
  public get(index: number): ExternalConnectorGreGreParametersSegmentVirtualNetworksOutputReference {
    return new ExternalConnectorGreGreParametersSegmentVirtualNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalConnectorGreGreParametersSegment {
  /**
  * refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#refs ExternalConnector#refs}
  */
  readonly refs: ExternalConnectorGreGreParametersSegmentRefs[] | cdktf.IResolvable;
  /**
  * virtual_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#virtual_networks ExternalConnector#virtual_networks}
  */
  readonly virtualNetworks?: ExternalConnectorGreGreParametersSegmentVirtualNetworks[] | cdktf.IResolvable;
}

export function externalConnectorGreGreParametersSegmentToTerraform(struct?: ExternalConnectorGreGreParametersSegmentOutputReference | ExternalConnectorGreGreParametersSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refs: cdktf.listMapper(externalConnectorGreGreParametersSegmentRefsToTerraform, true)(struct!.refs),
    virtual_networks: cdktf.listMapper(externalConnectorGreGreParametersSegmentVirtualNetworksToTerraform, true)(struct!.virtualNetworks),
  }
}


export function externalConnectorGreGreParametersSegmentToHclTerraform(struct?: ExternalConnectorGreGreParametersSegmentOutputReference | ExternalConnectorGreGreParametersSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refs: {
      value: cdktf.listMapperHcl(externalConnectorGreGreParametersSegmentRefsToHclTerraform, true)(struct!.refs),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorGreGreParametersSegmentRefsList",
    },
    virtual_networks: {
      value: cdktf.listMapperHcl(externalConnectorGreGreParametersSegmentVirtualNetworksToHclTerraform, true)(struct!.virtualNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorGreGreParametersSegmentVirtualNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorGreGreParametersSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorGreGreParametersSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refs = this._refs?.internalValue;
    }
    if (this._virtualNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworks = this._virtualNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorGreGreParametersSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refs.internalValue = undefined;
      this._virtualNetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refs.internalValue = value.refs;
      this._virtualNetworks.internalValue = value.virtualNetworks;
    }
  }

  // refs - computed: false, optional: false, required: true
  private _refs = new ExternalConnectorGreGreParametersSegmentRefsList(this, "refs", false);
  public get refs() {
    return this._refs;
  }
  public putRefs(value: ExternalConnectorGreGreParametersSegmentRefs[] | cdktf.IResolvable) {
    this._refs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs.internalValue;
  }

  // virtual_networks - computed: false, optional: true, required: false
  private _virtualNetworks = new ExternalConnectorGreGreParametersSegmentVirtualNetworksList(this, "virtual_networks", false);
  public get virtualNetworks() {
    return this._virtualNetworks;
  }
  public putVirtualNetworks(value: ExternalConnectorGreGreParametersSegmentVirtualNetworks[] | cdktf.IResolvable) {
    this._virtualNetworks.internalValue = value;
  }
  public resetVirtualNetworks() {
    this._virtualNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworksInput() {
    return this._virtualNetworks.internalValue;
  }
}
export interface ExternalConnectorGreGreParametersTunnelEps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#interface ExternalConnector#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#local_tunnel_ip ExternalConnector#local_tunnel_ip}
  */
  readonly localTunnelIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#node ExternalConnector#node}
  */
  readonly nodeAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#remote_tunnel_ip ExternalConnector#remote_tunnel_ip}
  */
  readonly remoteTunnelIp: string;
}

export function externalConnectorGreGreParametersTunnelEpsToTerraform(struct?: ExternalConnectorGreGreParametersTunnelEps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    local_tunnel_ip: cdktf.stringToTerraform(struct!.localTunnelIp),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    remote_tunnel_ip: cdktf.stringToTerraform(struct!.remoteTunnelIp),
  }
}


export function externalConnectorGreGreParametersTunnelEpsToHclTerraform(struct?: ExternalConnectorGreGreParametersTunnelEps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_tunnel_ip: {
      value: cdktf.stringToHclTerraform(struct!.localTunnelIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_tunnel_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteTunnelIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorGreGreParametersTunnelEpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalConnectorGreGreParametersTunnelEps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._localTunnelIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTunnelIp = this._localTunnelIp;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._remoteTunnelIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteTunnelIp = this._remoteTunnelIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorGreGreParametersTunnelEps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._localTunnelIp = undefined;
      this._node = undefined;
      this._remoteTunnelIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._localTunnelIp = value.localTunnelIp;
      this._node = value.nodeAttribute;
      this._remoteTunnelIp = value.remoteTunnelIp;
    }
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // local_tunnel_ip - computed: false, optional: false, required: true
  private _localTunnelIp?: string; 
  public get localTunnelIp() {
    return this.getStringAttribute('local_tunnel_ip');
  }
  public set localTunnelIp(value: string) {
    this._localTunnelIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localTunnelIpInput() {
    return this._localTunnelIp;
  }

  // node - computed: false, optional: false, required: true
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // remote_tunnel_ip - computed: false, optional: false, required: true
  private _remoteTunnelIp?: string; 
  public get remoteTunnelIp() {
    return this.getStringAttribute('remote_tunnel_ip');
  }
  public set remoteTunnelIp(value: string) {
    this._remoteTunnelIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTunnelIpInput() {
    return this._remoteTunnelIp;
  }
}

export class ExternalConnectorGreGreParametersTunnelEpsList extends cdktf.ComplexList {
  public internalValue? : ExternalConnectorGreGreParametersTunnelEps[] | cdktf.IResolvable

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
  public get(index: number): ExternalConnectorGreGreParametersTunnelEpsOutputReference {
    return new ExternalConnectorGreGreParametersTunnelEpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalConnectorGreGreParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#site_local_inside_network ExternalConnector#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#site_local_network ExternalConnector#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tunnel_mtu ExternalConnector#tunnel_mtu}
  */
  readonly tunnelMtu?: number;
  /**
  * peer_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#peer_ip_address ExternalConnector#peer_ip_address}
  */
  readonly peerIpAddress?: ExternalConnectorGreGreParametersPeerIpAddress;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#segment ExternalConnector#segment}
  */
  readonly segment?: ExternalConnectorGreGreParametersSegment;
  /**
  * tunnel_eps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tunnel_eps ExternalConnector#tunnel_eps}
  */
  readonly tunnelEps: ExternalConnectorGreGreParametersTunnelEps[] | cdktf.IResolvable;
}

export function externalConnectorGreGreParametersToTerraform(struct?: ExternalConnectorGreGreParametersOutputReference | ExternalConnectorGreGreParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    tunnel_mtu: cdktf.numberToTerraform(struct!.tunnelMtu),
    peer_ip_address: externalConnectorGreGreParametersPeerIpAddressToTerraform(struct!.peerIpAddress),
    segment: externalConnectorGreGreParametersSegmentToTerraform(struct!.segment),
    tunnel_eps: cdktf.listMapper(externalConnectorGreGreParametersTunnelEpsToTerraform, true)(struct!.tunnelEps),
  }
}


export function externalConnectorGreGreParametersToHclTerraform(struct?: ExternalConnectorGreGreParametersOutputReference | ExternalConnectorGreGreParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tunnel_mtu: {
      value: cdktf.numberToHclTerraform(struct!.tunnelMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip_address: {
      value: externalConnectorGreGreParametersPeerIpAddressToHclTerraform(struct!.peerIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorGreGreParametersPeerIpAddressList",
    },
    segment: {
      value: externalConnectorGreGreParametersSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorGreGreParametersSegmentList",
    },
    tunnel_eps: {
      value: cdktf.listMapperHcl(externalConnectorGreGreParametersTunnelEpsToHclTerraform, true)(struct!.tunnelEps),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorGreGreParametersTunnelEpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorGreGreParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorGreGreParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._tunnelMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMtu = this._tunnelMtu;
    }
    if (this._peerIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpAddress = this._peerIpAddress?.internalValue;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._tunnelEps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEps = this._tunnelEps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorGreGreParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._tunnelMtu = undefined;
      this._peerIpAddress.internalValue = undefined;
      this._segment.internalValue = undefined;
      this._tunnelEps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._tunnelMtu = value.tunnelMtu;
      this._peerIpAddress.internalValue = value.peerIpAddress;
      this._segment.internalValue = value.segment;
      this._tunnelEps.internalValue = value.tunnelEps;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // tunnel_mtu - computed: false, optional: true, required: false
  private _tunnelMtu?: number; 
  public get tunnelMtu() {
    return this.getNumberAttribute('tunnel_mtu');
  }
  public set tunnelMtu(value: number) {
    this._tunnelMtu = value;
  }
  public resetTunnelMtu() {
    this._tunnelMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMtuInput() {
    return this._tunnelMtu;
  }

  // peer_ip_address - computed: false, optional: true, required: false
  private _peerIpAddress = new ExternalConnectorGreGreParametersPeerIpAddressOutputReference(this, "peer_ip_address");
  public get peerIpAddress() {
    return this._peerIpAddress;
  }
  public putPeerIpAddress(value: ExternalConnectorGreGreParametersPeerIpAddress) {
    this._peerIpAddress.internalValue = value;
  }
  public resetPeerIpAddress() {
    this._peerIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress.internalValue;
  }

  // segment - computed: false, optional: true, required: false
  private _segment = new ExternalConnectorGreGreParametersSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: ExternalConnectorGreGreParametersSegment) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // tunnel_eps - computed: false, optional: false, required: true
  private _tunnelEps = new ExternalConnectorGreGreParametersTunnelEpsList(this, "tunnel_eps", false);
  public get tunnelEps() {
    return this._tunnelEps;
  }
  public putTunnelEps(value: ExternalConnectorGreGreParametersTunnelEps[] | cdktf.IResolvable) {
    this._tunnelEps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEpsInput() {
    return this._tunnelEps.internalValue;
  }
}
export interface ExternalConnectorGre {
  /**
  * gre_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#gre_parameters ExternalConnector#gre_parameters}
  */
  readonly greParameters?: ExternalConnectorGreGreParameters;
}

export function externalConnectorGreToTerraform(struct?: ExternalConnectorGreOutputReference | ExternalConnectorGre): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_parameters: externalConnectorGreGreParametersToTerraform(struct!.greParameters),
  }
}


export function externalConnectorGreToHclTerraform(struct?: ExternalConnectorGreOutputReference | ExternalConnectorGre): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_parameters: {
      value: externalConnectorGreGreParametersToHclTerraform(struct!.greParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorGreGreParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorGreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorGre | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greParameters = this._greParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorGre | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._greParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._greParameters.internalValue = value.greParameters;
    }
  }

  // gre_parameters - computed: false, optional: true, required: false
  private _greParameters = new ExternalConnectorGreGreParametersOutputReference(this, "gre_parameters");
  public get greParameters() {
    return this._greParameters;
  }
  public putGreParameters(value: ExternalConnectorGreGreParameters) {
    this._greParameters.internalValue = value;
  }
  public resetGreParameters() {
    this._greParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greParametersInput() {
    return this._greParameters.internalValue;
  }
}
export interface ExternalConnectorIpsecIkeParametersDpdKeepAliveTimer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#timeout ExternalConnector#timeout}
  */
  readonly timeout?: number;
}

export function externalConnectorIpsecIkeParametersDpdKeepAliveTimerToTerraform(struct?: ExternalConnectorIpsecIkeParametersDpdKeepAliveTimerOutputReference | ExternalConnectorIpsecIkeParametersDpdKeepAliveTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function externalConnectorIpsecIkeParametersDpdKeepAliveTimerToHclTerraform(struct?: ExternalConnectorIpsecIkeParametersDpdKeepAliveTimerOutputReference | ExternalConnectorIpsecIkeParametersDpdKeepAliveTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ExternalConnectorIpsecIkeParametersDpdKeepAliveTimerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIkeParametersDpdKeepAliveTimer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIkeParametersDpdKeepAliveTimer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeout = value.timeout;
    }
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
export interface ExternalConnectorIpsecIkeParametersIkePhase1Profile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#name ExternalConnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#namespace ExternalConnector#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tenant ExternalConnector#tenant}
  */
  readonly tenant?: string;
}

export function externalConnectorIpsecIkeParametersIkePhase1ProfileToTerraform(struct?: ExternalConnectorIpsecIkeParametersIkePhase1ProfileOutputReference | ExternalConnectorIpsecIkeParametersIkePhase1Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function externalConnectorIpsecIkeParametersIkePhase1ProfileToHclTerraform(struct?: ExternalConnectorIpsecIkeParametersIkePhase1ProfileOutputReference | ExternalConnectorIpsecIkeParametersIkePhase1Profile): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIkeParametersIkePhase1ProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIkeParametersIkePhase1Profile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIkeParametersIkePhase1Profile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ExternalConnectorIpsecIkeParametersIkePhase2Profile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#name ExternalConnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#namespace ExternalConnector#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tenant ExternalConnector#tenant}
  */
  readonly tenant?: string;
}

export function externalConnectorIpsecIkeParametersIkePhase2ProfileToTerraform(struct?: ExternalConnectorIpsecIkeParametersIkePhase2ProfileOutputReference | ExternalConnectorIpsecIkeParametersIkePhase2Profile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function externalConnectorIpsecIkeParametersIkePhase2ProfileToHclTerraform(struct?: ExternalConnectorIpsecIkeParametersIkePhase2ProfileOutputReference | ExternalConnectorIpsecIkeParametersIkePhase2Profile): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIkeParametersIkePhase2ProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIkeParametersIkePhase2Profile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIkeParametersIkePhase2Profile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ExternalConnectorIpsecIkeParametersLcIpAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#addr ExternalConnector#addr}
  */
  readonly addr?: string;
}

export function externalConnectorIpsecIkeParametersLcIpAddressIpv4ToTerraform(struct?: ExternalConnectorIpsecIkeParametersLcIpAddressIpv4OutputReference | ExternalConnectorIpsecIkeParametersLcIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function externalConnectorIpsecIkeParametersLcIpAddressIpv4ToHclTerraform(struct?: ExternalConnectorIpsecIkeParametersLcIpAddressIpv4OutputReference | ExternalConnectorIpsecIkeParametersLcIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIkeParametersLcIpAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIkeParametersLcIpAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIkeParametersLcIpAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ExternalConnectorIpsecIkeParametersLcIpAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#addr ExternalConnector#addr}
  */
  readonly addr?: string;
}

export function externalConnectorIpsecIkeParametersLcIpAddressIpv6ToTerraform(struct?: ExternalConnectorIpsecIkeParametersLcIpAddressIpv6OutputReference | ExternalConnectorIpsecIkeParametersLcIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function externalConnectorIpsecIkeParametersLcIpAddressIpv6ToHclTerraform(struct?: ExternalConnectorIpsecIkeParametersLcIpAddressIpv6OutputReference | ExternalConnectorIpsecIkeParametersLcIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIkeParametersLcIpAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIkeParametersLcIpAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIkeParametersLcIpAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ExternalConnectorIpsecIkeParametersLcIpAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#ipv4 ExternalConnector#ipv4}
  */
  readonly ipv4?: ExternalConnectorIpsecIkeParametersLcIpAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#ipv6 ExternalConnector#ipv6}
  */
  readonly ipv6?: ExternalConnectorIpsecIkeParametersLcIpAddressIpv6;
}

export function externalConnectorIpsecIkeParametersLcIpAddressToTerraform(struct?: ExternalConnectorIpsecIkeParametersLcIpAddressOutputReference | ExternalConnectorIpsecIkeParametersLcIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: externalConnectorIpsecIkeParametersLcIpAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: externalConnectorIpsecIkeParametersLcIpAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function externalConnectorIpsecIkeParametersLcIpAddressToHclTerraform(struct?: ExternalConnectorIpsecIkeParametersLcIpAddressOutputReference | ExternalConnectorIpsecIkeParametersLcIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: externalConnectorIpsecIkeParametersLcIpAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIkeParametersLcIpAddressIpv4List",
    },
    ipv6: {
      value: externalConnectorIpsecIkeParametersLcIpAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIkeParametersLcIpAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIkeParametersLcIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIkeParametersLcIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIkeParametersLcIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ExternalConnectorIpsecIkeParametersLcIpAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ExternalConnectorIpsecIkeParametersLcIpAddressIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ExternalConnectorIpsecIkeParametersLcIpAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ExternalConnectorIpsecIkeParametersLcIpAddressIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface ExternalConnectorIpsecIkeParametersRmIpAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#addr ExternalConnector#addr}
  */
  readonly addr?: string;
}

export function externalConnectorIpsecIkeParametersRmIpAddressIpv4ToTerraform(struct?: ExternalConnectorIpsecIkeParametersRmIpAddressIpv4OutputReference | ExternalConnectorIpsecIkeParametersRmIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function externalConnectorIpsecIkeParametersRmIpAddressIpv4ToHclTerraform(struct?: ExternalConnectorIpsecIkeParametersRmIpAddressIpv4OutputReference | ExternalConnectorIpsecIkeParametersRmIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIkeParametersRmIpAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIkeParametersRmIpAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIkeParametersRmIpAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ExternalConnectorIpsecIkeParametersRmIpAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#addr ExternalConnector#addr}
  */
  readonly addr?: string;
}

export function externalConnectorIpsecIkeParametersRmIpAddressIpv6ToTerraform(struct?: ExternalConnectorIpsecIkeParametersRmIpAddressIpv6OutputReference | ExternalConnectorIpsecIkeParametersRmIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function externalConnectorIpsecIkeParametersRmIpAddressIpv6ToHclTerraform(struct?: ExternalConnectorIpsecIkeParametersRmIpAddressIpv6OutputReference | ExternalConnectorIpsecIkeParametersRmIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIkeParametersRmIpAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIkeParametersRmIpAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIkeParametersRmIpAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ExternalConnectorIpsecIkeParametersRmIpAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#ipv4 ExternalConnector#ipv4}
  */
  readonly ipv4?: ExternalConnectorIpsecIkeParametersRmIpAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#ipv6 ExternalConnector#ipv6}
  */
  readonly ipv6?: ExternalConnectorIpsecIkeParametersRmIpAddressIpv6;
}

export function externalConnectorIpsecIkeParametersRmIpAddressToTerraform(struct?: ExternalConnectorIpsecIkeParametersRmIpAddressOutputReference | ExternalConnectorIpsecIkeParametersRmIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: externalConnectorIpsecIkeParametersRmIpAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: externalConnectorIpsecIkeParametersRmIpAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function externalConnectorIpsecIkeParametersRmIpAddressToHclTerraform(struct?: ExternalConnectorIpsecIkeParametersRmIpAddressOutputReference | ExternalConnectorIpsecIkeParametersRmIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: externalConnectorIpsecIkeParametersRmIpAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIkeParametersRmIpAddressIpv4List",
    },
    ipv6: {
      value: externalConnectorIpsecIkeParametersRmIpAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIkeParametersRmIpAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIkeParametersRmIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIkeParametersRmIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIkeParametersRmIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ExternalConnectorIpsecIkeParametersRmIpAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ExternalConnectorIpsecIkeParametersRmIpAddressIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ExternalConnectorIpsecIkeParametersRmIpAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ExternalConnectorIpsecIkeParametersRmIpAddressIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface ExternalConnectorIpsecIkeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#dpd_disabled ExternalConnector#dpd_disabled}
  */
  readonly dpdDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#initiator ExternalConnector#initiator}
  */
  readonly initiator?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#lc_hostname ExternalConnector#lc_hostname}
  */
  readonly lcHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#responder ExternalConnector#responder}
  */
  readonly responder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#rm_hostname ExternalConnector#rm_hostname}
  */
  readonly rmHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#use_default_local_ike_id ExternalConnector#use_default_local_ike_id}
  */
  readonly useDefaultLocalIkeId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#use_default_remote_ike_id ExternalConnector#use_default_remote_ike_id}
  */
  readonly useDefaultRemoteIkeId?: boolean | cdktf.IResolvable;
  /**
  * dpd_keep_alive_timer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#dpd_keep_alive_timer ExternalConnector#dpd_keep_alive_timer}
  */
  readonly dpdKeepAliveTimer?: ExternalConnectorIpsecIkeParametersDpdKeepAliveTimer;
  /**
  * ike_phase1_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#ike_phase1_profile ExternalConnector#ike_phase1_profile}
  */
  readonly ikePhase1Profile: ExternalConnectorIpsecIkeParametersIkePhase1Profile;
  /**
  * ike_phase2_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#ike_phase2_profile ExternalConnector#ike_phase2_profile}
  */
  readonly ikePhase2Profile: ExternalConnectorIpsecIkeParametersIkePhase2Profile;
  /**
  * lc_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#lc_ip_address ExternalConnector#lc_ip_address}
  */
  readonly lcIpAddress?: ExternalConnectorIpsecIkeParametersLcIpAddress;
  /**
  * rm_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#rm_ip_address ExternalConnector#rm_ip_address}
  */
  readonly rmIpAddress?: ExternalConnectorIpsecIkeParametersRmIpAddress;
}

export function externalConnectorIpsecIkeParametersToTerraform(struct?: ExternalConnectorIpsecIkeParametersOutputReference | ExternalConnectorIpsecIkeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dpd_disabled: cdktf.booleanToTerraform(struct!.dpdDisabled),
    initiator: cdktf.booleanToTerraform(struct!.initiator),
    lc_hostname: cdktf.stringToTerraform(struct!.lcHostname),
    responder: cdktf.booleanToTerraform(struct!.responder),
    rm_hostname: cdktf.stringToTerraform(struct!.rmHostname),
    use_default_local_ike_id: cdktf.booleanToTerraform(struct!.useDefaultLocalIkeId),
    use_default_remote_ike_id: cdktf.booleanToTerraform(struct!.useDefaultRemoteIkeId),
    dpd_keep_alive_timer: externalConnectorIpsecIkeParametersDpdKeepAliveTimerToTerraform(struct!.dpdKeepAliveTimer),
    ike_phase1_profile: externalConnectorIpsecIkeParametersIkePhase1ProfileToTerraform(struct!.ikePhase1Profile),
    ike_phase2_profile: externalConnectorIpsecIkeParametersIkePhase2ProfileToTerraform(struct!.ikePhase2Profile),
    lc_ip_address: externalConnectorIpsecIkeParametersLcIpAddressToTerraform(struct!.lcIpAddress),
    rm_ip_address: externalConnectorIpsecIkeParametersRmIpAddressToTerraform(struct!.rmIpAddress),
  }
}


export function externalConnectorIpsecIkeParametersToHclTerraform(struct?: ExternalConnectorIpsecIkeParametersOutputReference | ExternalConnectorIpsecIkeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dpd_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.dpdDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initiator: {
      value: cdktf.booleanToHclTerraform(struct!.initiator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lc_hostname: {
      value: cdktf.stringToHclTerraform(struct!.lcHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responder: {
      value: cdktf.booleanToHclTerraform(struct!.responder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rm_hostname: {
      value: cdktf.stringToHclTerraform(struct!.rmHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_local_ike_id: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultLocalIkeId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_default_remote_ike_id: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultRemoteIkeId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dpd_keep_alive_timer: {
      value: externalConnectorIpsecIkeParametersDpdKeepAliveTimerToHclTerraform(struct!.dpdKeepAliveTimer),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIkeParametersDpdKeepAliveTimerList",
    },
    ike_phase1_profile: {
      value: externalConnectorIpsecIkeParametersIkePhase1ProfileToHclTerraform(struct!.ikePhase1Profile),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIkeParametersIkePhase1ProfileList",
    },
    ike_phase2_profile: {
      value: externalConnectorIpsecIkeParametersIkePhase2ProfileToHclTerraform(struct!.ikePhase2Profile),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIkeParametersIkePhase2ProfileList",
    },
    lc_ip_address: {
      value: externalConnectorIpsecIkeParametersLcIpAddressToHclTerraform(struct!.lcIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIkeParametersLcIpAddressList",
    },
    rm_ip_address: {
      value: externalConnectorIpsecIkeParametersRmIpAddressToHclTerraform(struct!.rmIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIkeParametersRmIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIkeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIkeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dpdDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpdDisabled = this._dpdDisabled;
    }
    if (this._initiator !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiator = this._initiator;
    }
    if (this._lcHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.lcHostname = this._lcHostname;
    }
    if (this._responder !== undefined) {
      hasAnyValues = true;
      internalValueResult.responder = this._responder;
    }
    if (this._rmHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.rmHostname = this._rmHostname;
    }
    if (this._useDefaultLocalIkeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultLocalIkeId = this._useDefaultLocalIkeId;
    }
    if (this._useDefaultRemoteIkeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultRemoteIkeId = this._useDefaultRemoteIkeId;
    }
    if (this._dpdKeepAliveTimer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpdKeepAliveTimer = this._dpdKeepAliveTimer?.internalValue;
    }
    if (this._ikePhase1Profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePhase1Profile = this._ikePhase1Profile?.internalValue;
    }
    if (this._ikePhase2Profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePhase2Profile = this._ikePhase2Profile?.internalValue;
    }
    if (this._lcIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lcIpAddress = this._lcIpAddress?.internalValue;
    }
    if (this._rmIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rmIpAddress = this._rmIpAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIkeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dpdDisabled = undefined;
      this._initiator = undefined;
      this._lcHostname = undefined;
      this._responder = undefined;
      this._rmHostname = undefined;
      this._useDefaultLocalIkeId = undefined;
      this._useDefaultRemoteIkeId = undefined;
      this._dpdKeepAliveTimer.internalValue = undefined;
      this._ikePhase1Profile.internalValue = undefined;
      this._ikePhase2Profile.internalValue = undefined;
      this._lcIpAddress.internalValue = undefined;
      this._rmIpAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dpdDisabled = value.dpdDisabled;
      this._initiator = value.initiator;
      this._lcHostname = value.lcHostname;
      this._responder = value.responder;
      this._rmHostname = value.rmHostname;
      this._useDefaultLocalIkeId = value.useDefaultLocalIkeId;
      this._useDefaultRemoteIkeId = value.useDefaultRemoteIkeId;
      this._dpdKeepAliveTimer.internalValue = value.dpdKeepAliveTimer;
      this._ikePhase1Profile.internalValue = value.ikePhase1Profile;
      this._ikePhase2Profile.internalValue = value.ikePhase2Profile;
      this._lcIpAddress.internalValue = value.lcIpAddress;
      this._rmIpAddress.internalValue = value.rmIpAddress;
    }
  }

  // dpd_disabled - computed: false, optional: true, required: false
  private _dpdDisabled?: boolean | cdktf.IResolvable; 
  public get dpdDisabled() {
    return this.getBooleanAttribute('dpd_disabled');
  }
  public set dpdDisabled(value: boolean | cdktf.IResolvable) {
    this._dpdDisabled = value;
  }
  public resetDpdDisabled() {
    this._dpdDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdDisabledInput() {
    return this._dpdDisabled;
  }

  // initiator - computed: false, optional: true, required: false
  private _initiator?: boolean | cdktf.IResolvable; 
  public get initiator() {
    return this.getBooleanAttribute('initiator');
  }
  public set initiator(value: boolean | cdktf.IResolvable) {
    this._initiator = value;
  }
  public resetInitiator() {
    this._initiator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator;
  }

  // lc_hostname - computed: false, optional: true, required: false
  private _lcHostname?: string; 
  public get lcHostname() {
    return this.getStringAttribute('lc_hostname');
  }
  public set lcHostname(value: string) {
    this._lcHostname = value;
  }
  public resetLcHostname() {
    this._lcHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcHostnameInput() {
    return this._lcHostname;
  }

  // responder - computed: false, optional: true, required: false
  private _responder?: boolean | cdktf.IResolvable; 
  public get responder() {
    return this.getBooleanAttribute('responder');
  }
  public set responder(value: boolean | cdktf.IResolvable) {
    this._responder = value;
  }
  public resetResponder() {
    this._responder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderInput() {
    return this._responder;
  }

  // rm_hostname - computed: false, optional: true, required: false
  private _rmHostname?: string; 
  public get rmHostname() {
    return this.getStringAttribute('rm_hostname');
  }
  public set rmHostname(value: string) {
    this._rmHostname = value;
  }
  public resetRmHostname() {
    this._rmHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmHostnameInput() {
    return this._rmHostname;
  }

  // use_default_local_ike_id - computed: false, optional: true, required: false
  private _useDefaultLocalIkeId?: boolean | cdktf.IResolvable; 
  public get useDefaultLocalIkeId() {
    return this.getBooleanAttribute('use_default_local_ike_id');
  }
  public set useDefaultLocalIkeId(value: boolean | cdktf.IResolvable) {
    this._useDefaultLocalIkeId = value;
  }
  public resetUseDefaultLocalIkeId() {
    this._useDefaultLocalIkeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultLocalIkeIdInput() {
    return this._useDefaultLocalIkeId;
  }

  // use_default_remote_ike_id - computed: false, optional: true, required: false
  private _useDefaultRemoteIkeId?: boolean | cdktf.IResolvable; 
  public get useDefaultRemoteIkeId() {
    return this.getBooleanAttribute('use_default_remote_ike_id');
  }
  public set useDefaultRemoteIkeId(value: boolean | cdktf.IResolvable) {
    this._useDefaultRemoteIkeId = value;
  }
  public resetUseDefaultRemoteIkeId() {
    this._useDefaultRemoteIkeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultRemoteIkeIdInput() {
    return this._useDefaultRemoteIkeId;
  }

  // dpd_keep_alive_timer - computed: false, optional: true, required: false
  private _dpdKeepAliveTimer = new ExternalConnectorIpsecIkeParametersDpdKeepAliveTimerOutputReference(this, "dpd_keep_alive_timer");
  public get dpdKeepAliveTimer() {
    return this._dpdKeepAliveTimer;
  }
  public putDpdKeepAliveTimer(value: ExternalConnectorIpsecIkeParametersDpdKeepAliveTimer) {
    this._dpdKeepAliveTimer.internalValue = value;
  }
  public resetDpdKeepAliveTimer() {
    this._dpdKeepAliveTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdKeepAliveTimerInput() {
    return this._dpdKeepAliveTimer.internalValue;
  }

  // ike_phase1_profile - computed: false, optional: false, required: true
  private _ikePhase1Profile = new ExternalConnectorIpsecIkeParametersIkePhase1ProfileOutputReference(this, "ike_phase1_profile");
  public get ikePhase1Profile() {
    return this._ikePhase1Profile;
  }
  public putIkePhase1Profile(value: ExternalConnectorIpsecIkeParametersIkePhase1Profile) {
    this._ikePhase1Profile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePhase1ProfileInput() {
    return this._ikePhase1Profile.internalValue;
  }

  // ike_phase2_profile - computed: false, optional: false, required: true
  private _ikePhase2Profile = new ExternalConnectorIpsecIkeParametersIkePhase2ProfileOutputReference(this, "ike_phase2_profile");
  public get ikePhase2Profile() {
    return this._ikePhase2Profile;
  }
  public putIkePhase2Profile(value: ExternalConnectorIpsecIkeParametersIkePhase2Profile) {
    this._ikePhase2Profile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePhase2ProfileInput() {
    return this._ikePhase2Profile.internalValue;
  }

  // lc_ip_address - computed: false, optional: true, required: false
  private _lcIpAddress = new ExternalConnectorIpsecIkeParametersLcIpAddressOutputReference(this, "lc_ip_address");
  public get lcIpAddress() {
    return this._lcIpAddress;
  }
  public putLcIpAddress(value: ExternalConnectorIpsecIkeParametersLcIpAddress) {
    this._lcIpAddress.internalValue = value;
  }
  public resetLcIpAddress() {
    this._lcIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcIpAddressInput() {
    return this._lcIpAddress.internalValue;
  }

  // rm_ip_address - computed: false, optional: true, required: false
  private _rmIpAddress = new ExternalConnectorIpsecIkeParametersRmIpAddressOutputReference(this, "rm_ip_address");
  public get rmIpAddress() {
    return this._rmIpAddress;
  }
  public putRmIpAddress(value: ExternalConnectorIpsecIkeParametersRmIpAddress) {
    this._rmIpAddress.internalValue = value;
  }
  public resetRmIpAddress() {
    this._rmIpAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmIpAddressInput() {
    return this._rmIpAddress.internalValue;
  }
}
export interface ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#addr ExternalConnector#addr}
  */
  readonly addr?: string;
}

export function externalConnectorIpsecIpsecTunnelParametersPeerIpAddressToTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddressOutputReference | ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function externalConnectorIpsecIpsecTunnelParametersPeerIpAddressToHclTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddressOutputReference | ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ExternalConnectorIpsecIpsecTunnelParametersSegmentRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#name ExternalConnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#namespace ExternalConnector#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tenant ExternalConnector#tenant}
  */
  readonly tenant?: string;
}

export function externalConnectorIpsecIpsecTunnelParametersSegmentRefsToTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersSegmentRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function externalConnectorIpsecIpsecTunnelParametersSegmentRefsToHclTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersSegmentRefs | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIpsecTunnelParametersSegmentRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalConnectorIpsecIpsecTunnelParametersSegmentRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIpsecTunnelParametersSegmentRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class ExternalConnectorIpsecIpsecTunnelParametersSegmentRefsList extends cdktf.ComplexList {
  public internalValue? : ExternalConnectorIpsecIpsecTunnelParametersSegmentRefs[] | cdktf.IResolvable

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
  public get(index: number): ExternalConnectorIpsecIpsecTunnelParametersSegmentRefsOutputReference {
    return new ExternalConnectorIpsecIpsecTunnelParametersSegmentRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#name ExternalConnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#namespace ExternalConnector#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tenant ExternalConnector#tenant}
  */
  readonly tenant?: string;
}

export function externalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworksToTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function externalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworksToHclTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworks | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworksList extends cdktf.ComplexList {
  public internalValue? : ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworks[] | cdktf.IResolvable

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
  public get(index: number): ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworksOutputReference {
    return new ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalConnectorIpsecIpsecTunnelParametersSegment {
  /**
  * refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#refs ExternalConnector#refs}
  */
  readonly refs: ExternalConnectorIpsecIpsecTunnelParametersSegmentRefs[] | cdktf.IResolvable;
  /**
  * virtual_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#virtual_networks ExternalConnector#virtual_networks}
  */
  readonly virtualNetworks?: ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworks[] | cdktf.IResolvable;
}

export function externalConnectorIpsecIpsecTunnelParametersSegmentToTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersSegmentOutputReference | ExternalConnectorIpsecIpsecTunnelParametersSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refs: cdktf.listMapper(externalConnectorIpsecIpsecTunnelParametersSegmentRefsToTerraform, true)(struct!.refs),
    virtual_networks: cdktf.listMapper(externalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworksToTerraform, true)(struct!.virtualNetworks),
  }
}


export function externalConnectorIpsecIpsecTunnelParametersSegmentToHclTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersSegmentOutputReference | ExternalConnectorIpsecIpsecTunnelParametersSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refs: {
      value: cdktf.listMapperHcl(externalConnectorIpsecIpsecTunnelParametersSegmentRefsToHclTerraform, true)(struct!.refs),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIpsecTunnelParametersSegmentRefsList",
    },
    virtual_networks: {
      value: cdktf.listMapperHcl(externalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworksToHclTerraform, true)(struct!.virtualNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIpsecTunnelParametersSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIpsecTunnelParametersSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refs = this._refs?.internalValue;
    }
    if (this._virtualNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworks = this._virtualNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIpsecTunnelParametersSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refs.internalValue = undefined;
      this._virtualNetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refs.internalValue = value.refs;
      this._virtualNetworks.internalValue = value.virtualNetworks;
    }
  }

  // refs - computed: false, optional: false, required: true
  private _refs = new ExternalConnectorIpsecIpsecTunnelParametersSegmentRefsList(this, "refs", false);
  public get refs() {
    return this._refs;
  }
  public putRefs(value: ExternalConnectorIpsecIpsecTunnelParametersSegmentRefs[] | cdktf.IResolvable) {
    this._refs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs.internalValue;
  }

  // virtual_networks - computed: false, optional: true, required: false
  private _virtualNetworks = new ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworksList(this, "virtual_networks", false);
  public get virtualNetworks() {
    return this._virtualNetworks;
  }
  public putVirtualNetworks(value: ExternalConnectorIpsecIpsecTunnelParametersSegmentVirtualNetworks[] | cdktf.IResolvable) {
    this._virtualNetworks.internalValue = value;
  }
  public resetVirtualNetworks() {
    this._virtualNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworksInput() {
    return this._virtualNetworks.internalValue;
  }
}
export interface ExternalConnectorIpsecIpsecTunnelParametersTunnelEps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#interface ExternalConnector#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#local_tunnel_ip ExternalConnector#local_tunnel_ip}
  */
  readonly localTunnelIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#node ExternalConnector#node}
  */
  readonly nodeAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#remote_tunnel_ip ExternalConnector#remote_tunnel_ip}
  */
  readonly remoteTunnelIp: string;
}

export function externalConnectorIpsecIpsecTunnelParametersTunnelEpsToTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersTunnelEps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    local_tunnel_ip: cdktf.stringToTerraform(struct!.localTunnelIp),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    remote_tunnel_ip: cdktf.stringToTerraform(struct!.remoteTunnelIp),
  }
}


export function externalConnectorIpsecIpsecTunnelParametersTunnelEpsToHclTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersTunnelEps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_tunnel_ip: {
      value: cdktf.stringToHclTerraform(struct!.localTunnelIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_tunnel_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteTunnelIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIpsecTunnelParametersTunnelEpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalConnectorIpsecIpsecTunnelParametersTunnelEps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._localTunnelIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTunnelIp = this._localTunnelIp;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._remoteTunnelIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteTunnelIp = this._remoteTunnelIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIpsecTunnelParametersTunnelEps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._localTunnelIp = undefined;
      this._node = undefined;
      this._remoteTunnelIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._localTunnelIp = value.localTunnelIp;
      this._node = value.nodeAttribute;
      this._remoteTunnelIp = value.remoteTunnelIp;
    }
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // local_tunnel_ip - computed: false, optional: false, required: true
  private _localTunnelIp?: string; 
  public get localTunnelIp() {
    return this.getStringAttribute('local_tunnel_ip');
  }
  public set localTunnelIp(value: string) {
    this._localTunnelIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localTunnelIpInput() {
    return this._localTunnelIp;
  }

  // node - computed: false, optional: false, required: true
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // remote_tunnel_ip - computed: false, optional: false, required: true
  private _remoteTunnelIp?: string; 
  public get remoteTunnelIp() {
    return this.getStringAttribute('remote_tunnel_ip');
  }
  public set remoteTunnelIp(value: string) {
    this._remoteTunnelIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTunnelIpInput() {
    return this._remoteTunnelIp;
  }
}

export class ExternalConnectorIpsecIpsecTunnelParametersTunnelEpsList extends cdktf.ComplexList {
  public internalValue? : ExternalConnectorIpsecIpsecTunnelParametersTunnelEps[] | cdktf.IResolvable

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
  public get(index: number): ExternalConnectorIpsecIpsecTunnelParametersTunnelEpsOutputReference {
    return new ExternalConnectorIpsecIpsecTunnelParametersTunnelEpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalConnectorIpsecIpsecTunnelParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#psk ExternalConnector#psk}
  */
  readonly psk: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#site_local_inside_network ExternalConnector#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#site_local_network ExternalConnector#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tunnel_mtu ExternalConnector#tunnel_mtu}
  */
  readonly tunnelMtu: number;
  /**
  * peer_ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#peer_ip_address ExternalConnector#peer_ip_address}
  */
  readonly peerIpAddress: ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddress;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#segment ExternalConnector#segment}
  */
  readonly segment?: ExternalConnectorIpsecIpsecTunnelParametersSegment;
  /**
  * tunnel_eps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#tunnel_eps ExternalConnector#tunnel_eps}
  */
  readonly tunnelEps: ExternalConnectorIpsecIpsecTunnelParametersTunnelEps[] | cdktf.IResolvable;
}

export function externalConnectorIpsecIpsecTunnelParametersToTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersOutputReference | ExternalConnectorIpsecIpsecTunnelParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    psk: cdktf.stringToTerraform(struct!.psk),
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    tunnel_mtu: cdktf.numberToTerraform(struct!.tunnelMtu),
    peer_ip_address: externalConnectorIpsecIpsecTunnelParametersPeerIpAddressToTerraform(struct!.peerIpAddress),
    segment: externalConnectorIpsecIpsecTunnelParametersSegmentToTerraform(struct!.segment),
    tunnel_eps: cdktf.listMapper(externalConnectorIpsecIpsecTunnelParametersTunnelEpsToTerraform, true)(struct!.tunnelEps),
  }
}


export function externalConnectorIpsecIpsecTunnelParametersToHclTerraform(struct?: ExternalConnectorIpsecIpsecTunnelParametersOutputReference | ExternalConnectorIpsecIpsecTunnelParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    psk: {
      value: cdktf.stringToHclTerraform(struct!.psk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tunnel_mtu: {
      value: cdktf.numberToHclTerraform(struct!.tunnelMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip_address: {
      value: externalConnectorIpsecIpsecTunnelParametersPeerIpAddressToHclTerraform(struct!.peerIpAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddressList",
    },
    segment: {
      value: externalConnectorIpsecIpsecTunnelParametersSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIpsecTunnelParametersSegmentList",
    },
    tunnel_eps: {
      value: cdktf.listMapperHcl(externalConnectorIpsecIpsecTunnelParametersTunnelEpsToHclTerraform, true)(struct!.tunnelEps),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIpsecTunnelParametersTunnelEpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecIpsecTunnelParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsecIpsecTunnelParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._psk !== undefined) {
      hasAnyValues = true;
      internalValueResult.psk = this._psk;
    }
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._tunnelMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMtu = this._tunnelMtu;
    }
    if (this._peerIpAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpAddress = this._peerIpAddress?.internalValue;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._tunnelEps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEps = this._tunnelEps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsecIpsecTunnelParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._psk = undefined;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._tunnelMtu = undefined;
      this._peerIpAddress.internalValue = undefined;
      this._segment.internalValue = undefined;
      this._tunnelEps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._psk = value.psk;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._tunnelMtu = value.tunnelMtu;
      this._peerIpAddress.internalValue = value.peerIpAddress;
      this._segment.internalValue = value.segment;
      this._tunnelEps.internalValue = value.tunnelEps;
    }
  }

  // psk - computed: false, optional: false, required: true
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // tunnel_mtu - computed: false, optional: false, required: true
  private _tunnelMtu?: number; 
  public get tunnelMtu() {
    return this.getNumberAttribute('tunnel_mtu');
  }
  public set tunnelMtu(value: number) {
    this._tunnelMtu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMtuInput() {
    return this._tunnelMtu;
  }

  // peer_ip_address - computed: false, optional: false, required: true
  private _peerIpAddress = new ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddressOutputReference(this, "peer_ip_address");
  public get peerIpAddress() {
    return this._peerIpAddress;
  }
  public putPeerIpAddress(value: ExternalConnectorIpsecIpsecTunnelParametersPeerIpAddress) {
    this._peerIpAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress.internalValue;
  }

  // segment - computed: false, optional: true, required: false
  private _segment = new ExternalConnectorIpsecIpsecTunnelParametersSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: ExternalConnectorIpsecIpsecTunnelParametersSegment) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // tunnel_eps - computed: false, optional: false, required: true
  private _tunnelEps = new ExternalConnectorIpsecIpsecTunnelParametersTunnelEpsList(this, "tunnel_eps", false);
  public get tunnelEps() {
    return this._tunnelEps;
  }
  public putTunnelEps(value: ExternalConnectorIpsecIpsecTunnelParametersTunnelEps[] | cdktf.IResolvable) {
    this._tunnelEps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEpsInput() {
    return this._tunnelEps.internalValue;
  }
}
export interface ExternalConnectorIpsec {
  /**
  * ike_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#ike_parameters ExternalConnector#ike_parameters}
  */
  readonly ikeParameters: ExternalConnectorIpsecIkeParameters;
  /**
  * ipsec_tunnel_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#ipsec_tunnel_parameters ExternalConnector#ipsec_tunnel_parameters}
  */
  readonly ipsecTunnelParameters: ExternalConnectorIpsecIpsecTunnelParameters;
}

export function externalConnectorIpsecToTerraform(struct?: ExternalConnectorIpsecOutputReference | ExternalConnectorIpsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_parameters: externalConnectorIpsecIkeParametersToTerraform(struct!.ikeParameters),
    ipsec_tunnel_parameters: externalConnectorIpsecIpsecTunnelParametersToTerraform(struct!.ipsecTunnelParameters),
  }
}


export function externalConnectorIpsecToHclTerraform(struct?: ExternalConnectorIpsecOutputReference | ExternalConnectorIpsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_parameters: {
      value: externalConnectorIpsecIkeParametersToHclTerraform(struct!.ikeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIkeParametersList",
    },
    ipsec_tunnel_parameters: {
      value: externalConnectorIpsecIpsecTunnelParametersToHclTerraform(struct!.ipsecTunnelParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalConnectorIpsecIpsecTunnelParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalConnectorIpsecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalConnectorIpsec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeParameters = this._ikeParameters?.internalValue;
    }
    if (this._ipsecTunnelParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTunnelParameters = this._ipsecTunnelParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalConnectorIpsec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeParameters.internalValue = undefined;
      this._ipsecTunnelParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeParameters.internalValue = value.ikeParameters;
      this._ipsecTunnelParameters.internalValue = value.ipsecTunnelParameters;
    }
  }

  // ike_parameters - computed: false, optional: false, required: true
  private _ikeParameters = new ExternalConnectorIpsecIkeParametersOutputReference(this, "ike_parameters");
  public get ikeParameters() {
    return this._ikeParameters;
  }
  public putIkeParameters(value: ExternalConnectorIpsecIkeParameters) {
    this._ikeParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeParametersInput() {
    return this._ikeParameters.internalValue;
  }

  // ipsec_tunnel_parameters - computed: false, optional: false, required: true
  private _ipsecTunnelParameters = new ExternalConnectorIpsecIpsecTunnelParametersOutputReference(this, "ipsec_tunnel_parameters");
  public get ipsecTunnelParameters() {
    return this._ipsecTunnelParameters;
  }
  public putIpsecTunnelParameters(value: ExternalConnectorIpsecIpsecTunnelParameters) {
    this._ipsecTunnelParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelParametersInput() {
    return this._ipsecTunnelParameters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector volterra_external_connector}
*/
export class ExternalConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_external_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalConnector to import
  * @param importFromId The id of the existing ExternalConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_external_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/external_connector volterra_external_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_external_connector',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._ceSiteReference.internalValue = config.ceSiteReference;
    this._directConnection.internalValue = config.directConnection;
    this._gre.internalValue = config.gre;
    this._ipsec.internalValue = config.ipsec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // ce_site_reference - computed: false, optional: false, required: true
  private _ceSiteReference = new ExternalConnectorCeSiteReferenceOutputReference(this, "ce_site_reference");
  public get ceSiteReference() {
    return this._ceSiteReference;
  }
  public putCeSiteReference(value: ExternalConnectorCeSiteReference) {
    this._ceSiteReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ceSiteReferenceInput() {
    return this._ceSiteReference.internalValue;
  }

  // direct_connection - computed: false, optional: true, required: false
  private _directConnection = new ExternalConnectorDirectConnectionOutputReference(this, "direct_connection");
  public get directConnection() {
    return this._directConnection;
  }
  public putDirectConnection(value: ExternalConnectorDirectConnection) {
    this._directConnection.internalValue = value;
  }
  public resetDirectConnection() {
    this._directConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectionInput() {
    return this._directConnection.internalValue;
  }

  // gre - computed: false, optional: true, required: false
  private _gre = new ExternalConnectorGreOutputReference(this, "gre");
  public get gre() {
    return this._gre;
  }
  public putGre(value: ExternalConnectorGre) {
    this._gre.internalValue = value;
  }
  public resetGre() {
    this._gre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greInput() {
    return this._gre.internalValue;
  }

  // ipsec - computed: false, optional: true, required: false
  private _ipsec = new ExternalConnectorIpsecOutputReference(this, "ipsec");
  public get ipsec() {
    return this._ipsec;
  }
  public putIpsec(value: ExternalConnectorIpsec) {
    this._ipsec.internalValue = value;
  }
  public resetIpsec() {
    this._ipsec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecInput() {
    return this._ipsec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      ce_site_reference: externalConnectorCeSiteReferenceToTerraform(this._ceSiteReference.internalValue),
      direct_connection: externalConnectorDirectConnectionToTerraform(this._directConnection.internalValue),
      gre: externalConnectorGreToTerraform(this._gre.internalValue),
      ipsec: externalConnectorIpsecToTerraform(this._ipsec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ce_site_reference: {
        value: externalConnectorCeSiteReferenceToHclTerraform(this._ceSiteReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalConnectorCeSiteReferenceList",
      },
      direct_connection: {
        value: externalConnectorDirectConnectionToHclTerraform(this._directConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalConnectorDirectConnectionList",
      },
      gre: {
        value: externalConnectorGreToHclTerraform(this._gre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalConnectorGreList",
      },
      ipsec: {
        value: externalConnectorIpsecToHclTerraform(this._ipsec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalConnectorIpsecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
