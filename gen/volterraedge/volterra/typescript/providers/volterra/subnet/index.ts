// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#annotations Subnet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#connect_to_sli Subnet#connect_to_sli}
  */
  readonly connectToSli?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#connect_to_slo Subnet#connect_to_slo}
  */
  readonly connectToSlo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#description Subnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#disable Subnet#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#id Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#isolated_nw Subnet#isolated_nw}
  */
  readonly isolatedNw?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#labels Subnet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#name Subnet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#namespace Subnet#namespace}
  */
  readonly namespace: string;
  /**
  * connect_to_layer2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#connect_to_layer2 Subnet#connect_to_layer2}
  */
  readonly connectToLayer2?: SubnetConnectToLayer2;
  /**
  * site_subnet_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#site_subnet_params Subnet#site_subnet_params}
  */
  readonly siteSubnetParams: SubnetSiteSubnetParams[] | cdktf.IResolvable;
}
export interface SubnetConnectToLayer2Layer2IntfInternalRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#name Subnet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#namespace Subnet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#tenant Subnet#tenant}
  */
  readonly tenant?: string;
}

export function subnetConnectToLayer2Layer2IntfInternalRefToTerraform(struct?: SubnetConnectToLayer2Layer2IntfInternalRef | cdktf.IResolvable): any {
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


export function subnetConnectToLayer2Layer2IntfInternalRefToHclTerraform(struct?: SubnetConnectToLayer2Layer2IntfInternalRef | cdktf.IResolvable): any {
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

export class SubnetConnectToLayer2Layer2IntfInternalRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubnetConnectToLayer2Layer2IntfInternalRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SubnetConnectToLayer2Layer2IntfInternalRef | cdktf.IResolvable | undefined) {
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

export class SubnetConnectToLayer2Layer2IntfInternalRefList extends cdktf.ComplexList {
  public internalValue? : SubnetConnectToLayer2Layer2IntfInternalRef[] | cdktf.IResolvable

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
  public get(index: number): SubnetConnectToLayer2Layer2IntfInternalRefOutputReference {
    return new SubnetConnectToLayer2Layer2IntfInternalRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubnetConnectToLayer2Layer2IntfRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#name Subnet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#namespace Subnet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#tenant Subnet#tenant}
  */
  readonly tenant?: string;
}

export function subnetConnectToLayer2Layer2IntfRefToTerraform(struct?: SubnetConnectToLayer2Layer2IntfRefOutputReference | SubnetConnectToLayer2Layer2IntfRef): any {
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


export function subnetConnectToLayer2Layer2IntfRefToHclTerraform(struct?: SubnetConnectToLayer2Layer2IntfRefOutputReference | SubnetConnectToLayer2Layer2IntfRef): any {
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

export class SubnetConnectToLayer2Layer2IntfRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubnetConnectToLayer2Layer2IntfRef | undefined {
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

  public set internalValue(value: SubnetConnectToLayer2Layer2IntfRef | undefined) {
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
export interface SubnetConnectToLayer2 {
  /**
  * layer2_intf_internal_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#layer2_intf_internal_ref Subnet#layer2_intf_internal_ref}
  */
  readonly layer2IntfInternalRef?: SubnetConnectToLayer2Layer2IntfInternalRef[] | cdktf.IResolvable;
  /**
  * layer2_intf_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#layer2_intf_ref Subnet#layer2_intf_ref}
  */
  readonly layer2IntfRef: SubnetConnectToLayer2Layer2IntfRef;
}

export function subnetConnectToLayer2ToTerraform(struct?: SubnetConnectToLayer2OutputReference | SubnetConnectToLayer2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    layer2_intf_internal_ref: cdktf.listMapper(subnetConnectToLayer2Layer2IntfInternalRefToTerraform, true)(struct!.layer2IntfInternalRef),
    layer2_intf_ref: subnetConnectToLayer2Layer2IntfRefToTerraform(struct!.layer2IntfRef),
  }
}


export function subnetConnectToLayer2ToHclTerraform(struct?: SubnetConnectToLayer2OutputReference | SubnetConnectToLayer2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    layer2_intf_internal_ref: {
      value: cdktf.listMapperHcl(subnetConnectToLayer2Layer2IntfInternalRefToHclTerraform, true)(struct!.layer2IntfInternalRef),
      isBlock: true,
      type: "list",
      storageClassType: "SubnetConnectToLayer2Layer2IntfInternalRefList",
    },
    layer2_intf_ref: {
      value: subnetConnectToLayer2Layer2IntfRefToHclTerraform(struct!.layer2IntfRef),
      isBlock: true,
      type: "list",
      storageClassType: "SubnetConnectToLayer2Layer2IntfRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubnetConnectToLayer2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubnetConnectToLayer2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._layer2IntfInternalRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer2IntfInternalRef = this._layer2IntfInternalRef?.internalValue;
    }
    if (this._layer2IntfRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer2IntfRef = this._layer2IntfRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetConnectToLayer2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._layer2IntfInternalRef.internalValue = undefined;
      this._layer2IntfRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._layer2IntfInternalRef.internalValue = value.layer2IntfInternalRef;
      this._layer2IntfRef.internalValue = value.layer2IntfRef;
    }
  }

  // layer2_intf_internal_ref - computed: false, optional: true, required: false
  private _layer2IntfInternalRef = new SubnetConnectToLayer2Layer2IntfInternalRefList(this, "layer2_intf_internal_ref", false);
  public get layer2IntfInternalRef() {
    return this._layer2IntfInternalRef;
  }
  public putLayer2IntfInternalRef(value: SubnetConnectToLayer2Layer2IntfInternalRef[] | cdktf.IResolvable) {
    this._layer2IntfInternalRef.internalValue = value;
  }
  public resetLayer2IntfInternalRef() {
    this._layer2IntfInternalRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2IntfInternalRefInput() {
    return this._layer2IntfInternalRef.internalValue;
  }

  // layer2_intf_ref - computed: false, optional: false, required: true
  private _layer2IntfRef = new SubnetConnectToLayer2Layer2IntfRefOutputReference(this, "layer2_intf_ref");
  public get layer2IntfRef() {
    return this._layer2IntfRef;
  }
  public putLayer2IntfRef(value: SubnetConnectToLayer2Layer2IntfRef) {
    this._layer2IntfRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2IntfRefInput() {
    return this._layer2IntfRef.internalValue;
  }
}
export interface SubnetSiteSubnetParamsSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#name Subnet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#namespace Subnet#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#tenant Subnet#tenant}
  */
  readonly tenant?: string;
}

export function subnetSiteSubnetParamsSiteToTerraform(struct?: SubnetSiteSubnetParamsSiteOutputReference | SubnetSiteSubnetParamsSite): any {
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


export function subnetSiteSubnetParamsSiteToHclTerraform(struct?: SubnetSiteSubnetParamsSiteOutputReference | SubnetSiteSubnetParamsSite): any {
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

export class SubnetSiteSubnetParamsSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubnetSiteSubnetParamsSite | undefined {
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

  public set internalValue(value: SubnetSiteSubnetParamsSite | undefined) {
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
export interface SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#network_prefix Subnet#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#network_prefix_ipv6 Subnet#network_prefix_ipv6}
  */
  readonly networkPrefixIpv6?: string;
}

export function subnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworksToTerraform(struct?: SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    network_prefix_ipv6: cdktf.stringToTerraform(struct!.networkPrefixIpv6),
  }
}


export function subnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworksToHclTerraform(struct?: SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefixIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._networkPrefixIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixIpv6 = this._networkPrefixIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._networkPrefixIpv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkPrefix = value.networkPrefix;
      this._networkPrefixIpv6 = value.networkPrefixIpv6;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // network_prefix_ipv6 - computed: false, optional: true, required: false
  private _networkPrefixIpv6?: string; 
  public get networkPrefixIpv6() {
    return this.getStringAttribute('network_prefix_ipv6');
  }
  public set networkPrefixIpv6(value: string) {
    this._networkPrefixIpv6 = value;
  }
  public resetNetworkPrefixIpv6() {
    this._networkPrefixIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixIpv6Input() {
    return this._networkPrefixIpv6;
  }
}

export class SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworksOutputReference {
    return new SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubnetSiteSubnetParamsSubnetDhcpServerParams {
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#dhcp_networks Subnet#dhcp_networks}
  */
  readonly dhcpNetworks?: SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworks[] | cdktf.IResolvable;
}

export function subnetSiteSubnetParamsSubnetDhcpServerParamsToTerraform(struct?: SubnetSiteSubnetParamsSubnetDhcpServerParamsOutputReference | SubnetSiteSubnetParamsSubnetDhcpServerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_networks: cdktf.listMapper(subnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
  }
}


export function subnetSiteSubnetParamsSubnetDhcpServerParamsToHclTerraform(struct?: SubnetSiteSubnetParamsSubnetDhcpServerParamsOutputReference | SubnetSiteSubnetParamsSubnetDhcpServerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_networks: {
      value: cdktf.listMapperHcl(subnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubnetSiteSubnetParamsSubnetDhcpServerParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubnetSiteSubnetParamsSubnetDhcpServerParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetSiteSubnetParamsSubnetDhcpServerParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpNetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
    }
  }

  // dhcp_networks - computed: false, optional: true, required: false
  private _dhcpNetworks = new SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SubnetSiteSubnetParamsSubnetDhcpServerParamsDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  public resetDhcpNetworks() {
    this._dhcpNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }
}
export interface SubnetSiteSubnetParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#dhcp Subnet#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#static_ip Subnet#static_ip}
  */
  readonly staticIp?: boolean | cdktf.IResolvable;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#site Subnet#site}
  */
  readonly site: SubnetSiteSubnetParamsSite;
  /**
  * subnet_dhcp_server_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#subnet_dhcp_server_params Subnet#subnet_dhcp_server_params}
  */
  readonly subnetDhcpServerParams?: SubnetSiteSubnetParamsSubnetDhcpServerParams;
}

export function subnetSiteSubnetParamsToTerraform(struct?: SubnetSiteSubnetParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    static_ip: cdktf.booleanToTerraform(struct!.staticIp),
    site: subnetSiteSubnetParamsSiteToTerraform(struct!.site),
    subnet_dhcp_server_params: subnetSiteSubnetParamsSubnetDhcpServerParamsToTerraform(struct!.subnetDhcpServerParams),
  }
}


export function subnetSiteSubnetParamsToHclTerraform(struct?: SubnetSiteSubnetParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip: {
      value: cdktf.booleanToHclTerraform(struct!.staticIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site: {
      value: subnetSiteSubnetParamsSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "SubnetSiteSubnetParamsSiteList",
    },
    subnet_dhcp_server_params: {
      value: subnetSiteSubnetParamsSubnetDhcpServerParamsToHclTerraform(struct!.subnetDhcpServerParams),
      isBlock: true,
      type: "list",
      storageClassType: "SubnetSiteSubnetParamsSubnetDhcpServerParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubnetSiteSubnetParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubnetSiteSubnetParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._staticIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._subnetDhcpServerParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetDhcpServerParams = this._subnetDhcpServerParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetSiteSubnetParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp = undefined;
      this._staticIp = undefined;
      this._site.internalValue = undefined;
      this._subnetDhcpServerParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp = value.dhcp;
      this._staticIp = value.staticIp;
      this._site.internalValue = value.site;
      this._subnetDhcpServerParams.internalValue = value.subnetDhcpServerParams;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp?: boolean | cdktf.IResolvable; 
  public get staticIp() {
    return this.getBooleanAttribute('static_ip');
  }
  public set staticIp(value: boolean | cdktf.IResolvable) {
    this._staticIp = value;
  }
  public resetStaticIp() {
    this._staticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp;
  }

  // site - computed: false, optional: false, required: true
  private _site = new SubnetSiteSubnetParamsSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: SubnetSiteSubnetParamsSite) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // subnet_dhcp_server_params - computed: false, optional: true, required: false
  private _subnetDhcpServerParams = new SubnetSiteSubnetParamsSubnetDhcpServerParamsOutputReference(this, "subnet_dhcp_server_params");
  public get subnetDhcpServerParams() {
    return this._subnetDhcpServerParams;
  }
  public putSubnetDhcpServerParams(value: SubnetSiteSubnetParamsSubnetDhcpServerParams) {
    this._subnetDhcpServerParams.internalValue = value;
  }
  public resetSubnetDhcpServerParams() {
    this._subnetDhcpServerParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetDhcpServerParamsInput() {
    return this._subnetDhcpServerParams.internalValue;
  }
}

export class SubnetSiteSubnetParamsList extends cdktf.ComplexList {
  public internalValue? : SubnetSiteSubnetParams[] | cdktf.IResolvable

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
  public get(index: number): SubnetSiteSubnetParamsOutputReference {
    return new SubnetSiteSubnetParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet volterra_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subnet to import
  * @param importFromId The id of the existing Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/subnet volterra_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_subnet',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
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
    this._connectToSli = config.connectToSli;
    this._connectToSlo = config.connectToSlo;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._isolatedNw = config.isolatedNw;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._connectToLayer2.internalValue = config.connectToLayer2;
    this._siteSubnetParams.internalValue = config.siteSubnetParams;
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

  // connect_to_sli - computed: false, optional: true, required: false
  private _connectToSli?: boolean | cdktf.IResolvable; 
  public get connectToSli() {
    return this.getBooleanAttribute('connect_to_sli');
  }
  public set connectToSli(value: boolean | cdktf.IResolvable) {
    this._connectToSli = value;
  }
  public resetConnectToSli() {
    this._connectToSli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectToSliInput() {
    return this._connectToSli;
  }

  // connect_to_slo - computed: false, optional: true, required: false
  private _connectToSlo?: boolean | cdktf.IResolvable; 
  public get connectToSlo() {
    return this.getBooleanAttribute('connect_to_slo');
  }
  public set connectToSlo(value: boolean | cdktf.IResolvable) {
    this._connectToSlo = value;
  }
  public resetConnectToSlo() {
    this._connectToSlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectToSloInput() {
    return this._connectToSlo;
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

  // isolated_nw - computed: false, optional: true, required: false
  private _isolatedNw?: boolean | cdktf.IResolvable; 
  public get isolatedNw() {
    return this.getBooleanAttribute('isolated_nw');
  }
  public set isolatedNw(value: boolean | cdktf.IResolvable) {
    this._isolatedNw = value;
  }
  public resetIsolatedNw() {
    this._isolatedNw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedNwInput() {
    return this._isolatedNw;
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

  // connect_to_layer2 - computed: false, optional: true, required: false
  private _connectToLayer2 = new SubnetConnectToLayer2OutputReference(this, "connect_to_layer2");
  public get connectToLayer2() {
    return this._connectToLayer2;
  }
  public putConnectToLayer2(value: SubnetConnectToLayer2) {
    this._connectToLayer2.internalValue = value;
  }
  public resetConnectToLayer2() {
    this._connectToLayer2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectToLayer2Input() {
    return this._connectToLayer2.internalValue;
  }

  // site_subnet_params - computed: false, optional: false, required: true
  private _siteSubnetParams = new SubnetSiteSubnetParamsList(this, "site_subnet_params", false);
  public get siteSubnetParams() {
    return this._siteSubnetParams;
  }
  public putSiteSubnetParams(value: SubnetSiteSubnetParams[] | cdktf.IResolvable) {
    this._siteSubnetParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteSubnetParamsInput() {
    return this._siteSubnetParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      connect_to_sli: cdktf.booleanToTerraform(this._connectToSli),
      connect_to_slo: cdktf.booleanToTerraform(this._connectToSlo),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      isolated_nw: cdktf.booleanToTerraform(this._isolatedNw),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      connect_to_layer2: subnetConnectToLayer2ToTerraform(this._connectToLayer2.internalValue),
      site_subnet_params: cdktf.listMapper(subnetSiteSubnetParamsToTerraform, true)(this._siteSubnetParams.internalValue),
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
      connect_to_sli: {
        value: cdktf.booleanToHclTerraform(this._connectToSli),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connect_to_slo: {
        value: cdktf.booleanToHclTerraform(this._connectToSlo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      isolated_nw: {
        value: cdktf.booleanToHclTerraform(this._isolatedNw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      connect_to_layer2: {
        value: subnetConnectToLayer2ToHclTerraform(this._connectToLayer2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubnetConnectToLayer2List",
      },
      site_subnet_params: {
        value: cdktf.listMapperHcl(subnetSiteSubnetParamsToHclTerraform, true)(this._siteSubnetParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubnetSiteSubnetParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
