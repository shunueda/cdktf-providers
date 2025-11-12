// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UztnaDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#access_fqdn UztnaDomain#access_fqdn}
  */
  readonly accessFqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#annotations UztnaDomain#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#app_vip_subnet UztnaDomain#app_vip_subnet}
  */
  readonly appVipSubnet: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#description UztnaDomain#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#disable UztnaDomain#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#id UztnaDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#labels UztnaDomain#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#name UztnaDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#namespace UztnaDomain#namespace}
  */
  readonly namespace: string;
  /**
  * app_vip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#app_vip_pool UztnaDomain#app_vip_pool}
  */
  readonly appVipPool?: UztnaDomainAppVipPool;
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#cert UztnaDomain#cert}
  */
  readonly cert: UztnaDomainCert;
  /**
  * gateways block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#gateways UztnaDomain#gateways}
  */
  readonly gateways: UztnaDomainGateways;
  /**
  * lease_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#lease_pool UztnaDomain#lease_pool}
  */
  readonly leasePool: UztnaDomainLeasePool;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#policy UztnaDomain#policy}
  */
  readonly policy: UztnaDomainPolicy;
}
export interface UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#name UztnaDomain#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#namespace UztnaDomain#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#tenant UztnaDomain#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPoolToTerraform(struct?: UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPool | cdktf.IResolvable): any {
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


export function uztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPoolToHclTerraform(struct?: UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPool | cdktf.IResolvable): any {
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

export class UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPool | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPool | cdktf.IResolvable | undefined) {
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

export class UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPoolList extends cdktf.ComplexList {
  public internalValue? : UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPool[] | cdktf.IResolvable

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
  public get(index: number): UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPoolOutputReference {
    return new UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaDomainAppVipPoolIpv4AppVipPool {
  /**
  * ipv4_app_vip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#ipv4_app_vip_pool UztnaDomain#ipv4_app_vip_pool}
  */
  readonly ipv4AppVipPool: UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPool[] | cdktf.IResolvable;
}

export function uztnaDomainAppVipPoolIpv4AppVipPoolToTerraform(struct?: UztnaDomainAppVipPoolIpv4AppVipPoolOutputReference | UztnaDomainAppVipPoolIpv4AppVipPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_app_vip_pool: cdktf.listMapper(uztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPoolToTerraform, true)(struct!.ipv4AppVipPool),
  }
}


export function uztnaDomainAppVipPoolIpv4AppVipPoolToHclTerraform(struct?: UztnaDomainAppVipPoolIpv4AppVipPoolOutputReference | UztnaDomainAppVipPoolIpv4AppVipPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_app_vip_pool: {
      value: cdktf.listMapperHcl(uztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPoolToHclTerraform, true)(struct!.ipv4AppVipPool),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainAppVipPoolIpv4AppVipPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainAppVipPoolIpv4AppVipPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4AppVipPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AppVipPool = this._ipv4AppVipPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainAppVipPoolIpv4AppVipPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4AppVipPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4AppVipPool.internalValue = value.ipv4AppVipPool;
    }
  }

  // ipv4_app_vip_pool - computed: false, optional: false, required: true
  private _ipv4AppVipPool = new UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPoolList(this, "ipv4_app_vip_pool", false);
  public get ipv4AppVipPool() {
    return this._ipv4AppVipPool;
  }
  public putIpv4AppVipPool(value: UztnaDomainAppVipPoolIpv4AppVipPoolIpv4AppVipPool[] | cdktf.IResolvable) {
    this._ipv4AppVipPool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AppVipPoolInput() {
    return this._ipv4AppVipPool.internalValue;
  }
}
export interface UztnaDomainAppVipPool {
  /**
  * ipv4_app_vip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#ipv4_app_vip_pool UztnaDomain#ipv4_app_vip_pool}
  */
  readonly ipv4AppVipPool: UztnaDomainAppVipPoolIpv4AppVipPool;
}

export function uztnaDomainAppVipPoolToTerraform(struct?: UztnaDomainAppVipPoolOutputReference | UztnaDomainAppVipPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_app_vip_pool: uztnaDomainAppVipPoolIpv4AppVipPoolToTerraform(struct!.ipv4AppVipPool),
  }
}


export function uztnaDomainAppVipPoolToHclTerraform(struct?: UztnaDomainAppVipPoolOutputReference | UztnaDomainAppVipPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_app_vip_pool: {
      value: uztnaDomainAppVipPoolIpv4AppVipPoolToHclTerraform(struct!.ipv4AppVipPool),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainAppVipPoolIpv4AppVipPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainAppVipPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainAppVipPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4AppVipPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AppVipPool = this._ipv4AppVipPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainAppVipPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4AppVipPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4AppVipPool.internalValue = value.ipv4AppVipPool;
    }
  }

  // ipv4_app_vip_pool - computed: false, optional: false, required: true
  private _ipv4AppVipPool = new UztnaDomainAppVipPoolIpv4AppVipPoolOutputReference(this, "ipv4_app_vip_pool");
  public get ipv4AppVipPool() {
    return this._ipv4AppVipPool;
  }
  public putIpv4AppVipPool(value: UztnaDomainAppVipPoolIpv4AppVipPool) {
    this._ipv4AppVipPool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AppVipPoolInput() {
    return this._ipv4AppVipPool.internalValue;
  }
}
export interface UztnaDomainCertCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#name UztnaDomain#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#namespace UztnaDomain#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#tenant UztnaDomain#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainCertCertificateToTerraform(struct?: UztnaDomainCertCertificate | cdktf.IResolvable): any {
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


export function uztnaDomainCertCertificateToHclTerraform(struct?: UztnaDomainCertCertificate | cdktf.IResolvable): any {
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

export class UztnaDomainCertCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaDomainCertCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UztnaDomainCertCertificate | cdktf.IResolvable | undefined) {
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

export class UztnaDomainCertCertificateList extends cdktf.ComplexList {
  public internalValue? : UztnaDomainCertCertificate[] | cdktf.IResolvable

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
  public get(index: number): UztnaDomainCertCertificateOutputReference {
    return new UztnaDomainCertCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaDomainCert {
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#certificate UztnaDomain#certificate}
  */
  readonly certificate?: UztnaDomainCertCertificate[] | cdktf.IResolvable;
}

export function uztnaDomainCertToTerraform(struct?: UztnaDomainCertOutputReference | UztnaDomainCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.listMapper(uztnaDomainCertCertificateToTerraform, true)(struct!.certificate),
  }
}


export function uztnaDomainCertToHclTerraform(struct?: UztnaDomainCertOutputReference | UztnaDomainCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.listMapperHcl(uztnaDomainCertCertificateToHclTerraform, true)(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainCertCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate.internalValue = value.certificate;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new UztnaDomainCertCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: UztnaDomainCertCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}
export interface UztnaDomainGatewaysBigipSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#name UztnaDomain#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#namespace UztnaDomain#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#tenant UztnaDomain#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainGatewaysBigipSiteToTerraform(struct?: UztnaDomainGatewaysBigipSite | cdktf.IResolvable): any {
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


export function uztnaDomainGatewaysBigipSiteToHclTerraform(struct?: UztnaDomainGatewaysBigipSite | cdktf.IResolvable): any {
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

export class UztnaDomainGatewaysBigipSiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaDomainGatewaysBigipSite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UztnaDomainGatewaysBigipSite | cdktf.IResolvable | undefined) {
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

export class UztnaDomainGatewaysBigipSiteList extends cdktf.ComplexList {
  public internalValue? : UztnaDomainGatewaysBigipSite[] | cdktf.IResolvable

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
  public get(index: number): UztnaDomainGatewaysBigipSiteOutputReference {
    return new UztnaDomainGatewaysBigipSiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaDomainGatewaysPerimeterReReSitesCloudGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#name UztnaDomain#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#namespace UztnaDomain#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#tenant UztnaDomain#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainGatewaysPerimeterReReSitesCloudGatewayToTerraform(struct?: UztnaDomainGatewaysPerimeterReReSitesCloudGateway | cdktf.IResolvable): any {
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


export function uztnaDomainGatewaysPerimeterReReSitesCloudGatewayToHclTerraform(struct?: UztnaDomainGatewaysPerimeterReReSitesCloudGateway | cdktf.IResolvable): any {
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

export class UztnaDomainGatewaysPerimeterReReSitesCloudGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaDomainGatewaysPerimeterReReSitesCloudGateway | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UztnaDomainGatewaysPerimeterReReSitesCloudGateway | cdktf.IResolvable | undefined) {
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

export class UztnaDomainGatewaysPerimeterReReSitesCloudGatewayList extends cdktf.ComplexList {
  public internalValue? : UztnaDomainGatewaysPerimeterReReSitesCloudGateway[] | cdktf.IResolvable

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
  public get(index: number): UztnaDomainGatewaysPerimeterReReSitesCloudGatewayOutputReference {
    return new UztnaDomainGatewaysPerimeterReReSitesCloudGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaDomainGatewaysPerimeterReReSites {
  /**
  * cloud_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#cloud_gateway UztnaDomain#cloud_gateway}
  */
  readonly cloudGateway?: UztnaDomainGatewaysPerimeterReReSitesCloudGateway[] | cdktf.IResolvable;
}

export function uztnaDomainGatewaysPerimeterReReSitesToTerraform(struct?: UztnaDomainGatewaysPerimeterReReSitesOutputReference | UztnaDomainGatewaysPerimeterReReSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_gateway: cdktf.listMapper(uztnaDomainGatewaysPerimeterReReSitesCloudGatewayToTerraform, true)(struct!.cloudGateway),
  }
}


export function uztnaDomainGatewaysPerimeterReReSitesToHclTerraform(struct?: UztnaDomainGatewaysPerimeterReReSitesOutputReference | UztnaDomainGatewaysPerimeterReReSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_gateway: {
      value: cdktf.listMapperHcl(uztnaDomainGatewaysPerimeterReReSitesCloudGatewayToHclTerraform, true)(struct!.cloudGateway),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainGatewaysPerimeterReReSitesCloudGatewayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainGatewaysPerimeterReReSitesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainGatewaysPerimeterReReSites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudGateway = this._cloudGateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainGatewaysPerimeterReReSites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudGateway.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudGateway.internalValue = value.cloudGateway;
    }
  }

  // cloud_gateway - computed: false, optional: true, required: false
  private _cloudGateway = new UztnaDomainGatewaysPerimeterReReSitesCloudGatewayList(this, "cloud_gateway", false);
  public get cloudGateway() {
    return this._cloudGateway;
  }
  public putCloudGateway(value: UztnaDomainGatewaysPerimeterReReSitesCloudGateway[] | cdktf.IResolvable) {
    this._cloudGateway.internalValue = value;
  }
  public resetCloudGateway() {
    this._cloudGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGatewayInput() {
    return this._cloudGateway.internalValue;
  }
}
export interface UztnaDomainGatewaysPerimeterRe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#all_cloud UztnaDomain#all_cloud}
  */
  readonly allCloud?: boolean | cdktf.IResolvable;
  /**
  * re_sites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#re_sites UztnaDomain#re_sites}
  */
  readonly reSites?: UztnaDomainGatewaysPerimeterReReSites;
}

export function uztnaDomainGatewaysPerimeterReToTerraform(struct?: UztnaDomainGatewaysPerimeterReOutputReference | UztnaDomainGatewaysPerimeterRe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_cloud: cdktf.booleanToTerraform(struct!.allCloud),
    re_sites: uztnaDomainGatewaysPerimeterReReSitesToTerraform(struct!.reSites),
  }
}


export function uztnaDomainGatewaysPerimeterReToHclTerraform(struct?: UztnaDomainGatewaysPerimeterReOutputReference | UztnaDomainGatewaysPerimeterRe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_cloud: {
      value: cdktf.booleanToHclTerraform(struct!.allCloud),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    re_sites: {
      value: uztnaDomainGatewaysPerimeterReReSitesToHclTerraform(struct!.reSites),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainGatewaysPerimeterReReSitesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainGatewaysPerimeterReOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainGatewaysPerimeterRe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allCloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.allCloud = this._allCloud;
    }
    if (this._reSites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reSites = this._reSites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainGatewaysPerimeterRe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allCloud = undefined;
      this._reSites.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allCloud = value.allCloud;
      this._reSites.internalValue = value.reSites;
    }
  }

  // all_cloud - computed: false, optional: true, required: false
  private _allCloud?: boolean | cdktf.IResolvable; 
  public get allCloud() {
    return this.getBooleanAttribute('all_cloud');
  }
  public set allCloud(value: boolean | cdktf.IResolvable) {
    this._allCloud = value;
  }
  public resetAllCloud() {
    this._allCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allCloudInput() {
    return this._allCloud;
  }

  // re_sites - computed: false, optional: true, required: false
  private _reSites = new UztnaDomainGatewaysPerimeterReReSitesOutputReference(this, "re_sites");
  public get reSites() {
    return this._reSites;
  }
  public putReSites(value: UztnaDomainGatewaysPerimeterReReSites) {
    this._reSites.internalValue = value;
  }
  public resetReSites() {
    this._reSites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reSitesInput() {
    return this._reSites.internalValue;
  }
}
export interface UztnaDomainGateways {
  /**
  * bigip_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#bigip_site UztnaDomain#bigip_site}
  */
  readonly bigipSite?: UztnaDomainGatewaysBigipSite[] | cdktf.IResolvable;
  /**
  * perimeter_re block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#perimeter_re UztnaDomain#perimeter_re}
  */
  readonly perimeterRe?: UztnaDomainGatewaysPerimeterRe;
}

export function uztnaDomainGatewaysToTerraform(struct?: UztnaDomainGatewaysOutputReference | UztnaDomainGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigip_site: cdktf.listMapper(uztnaDomainGatewaysBigipSiteToTerraform, true)(struct!.bigipSite),
    perimeter_re: uztnaDomainGatewaysPerimeterReToTerraform(struct!.perimeterRe),
  }
}


export function uztnaDomainGatewaysToHclTerraform(struct?: UztnaDomainGatewaysOutputReference | UztnaDomainGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigip_site: {
      value: cdktf.listMapperHcl(uztnaDomainGatewaysBigipSiteToHclTerraform, true)(struct!.bigipSite),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainGatewaysBigipSiteList",
    },
    perimeter_re: {
      value: uztnaDomainGatewaysPerimeterReToHclTerraform(struct!.perimeterRe),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainGatewaysPerimeterReList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainGatewaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigipSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigipSite = this._bigipSite?.internalValue;
    }
    if (this._perimeterRe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perimeterRe = this._perimeterRe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigipSite.internalValue = undefined;
      this._perimeterRe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigipSite.internalValue = value.bigipSite;
      this._perimeterRe.internalValue = value.perimeterRe;
    }
  }

  // bigip_site - computed: false, optional: true, required: false
  private _bigipSite = new UztnaDomainGatewaysBigipSiteList(this, "bigip_site", false);
  public get bigipSite() {
    return this._bigipSite;
  }
  public putBigipSite(value: UztnaDomainGatewaysBigipSite[] | cdktf.IResolvable) {
    this._bigipSite.internalValue = value;
  }
  public resetBigipSite() {
    this._bigipSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigipSiteInput() {
    return this._bigipSite.internalValue;
  }

  // perimeter_re - computed: false, optional: true, required: false
  private _perimeterRe = new UztnaDomainGatewaysPerimeterReOutputReference(this, "perimeter_re");
  public get perimeterRe() {
    return this._perimeterRe;
  }
  public putPerimeterRe(value: UztnaDomainGatewaysPerimeterRe) {
    this._perimeterRe.internalValue = value;
  }
  public resetPerimeterRe() {
    this._perimeterRe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterReInput() {
    return this._perimeterRe.internalValue;
  }
}
export interface UztnaDomainLeasePoolIpv4LeasepoolIpv4Leasepool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#name UztnaDomain#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#namespace UztnaDomain#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#tenant UztnaDomain#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainLeasePoolIpv4LeasepoolIpv4LeasepoolToTerraform(struct?: UztnaDomainLeasePoolIpv4LeasepoolIpv4Leasepool | cdktf.IResolvable): any {
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


export function uztnaDomainLeasePoolIpv4LeasepoolIpv4LeasepoolToHclTerraform(struct?: UztnaDomainLeasePoolIpv4LeasepoolIpv4Leasepool | cdktf.IResolvable): any {
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

export class UztnaDomainLeasePoolIpv4LeasepoolIpv4LeasepoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaDomainLeasePoolIpv4LeasepoolIpv4Leasepool | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UztnaDomainLeasePoolIpv4LeasepoolIpv4Leasepool | cdktf.IResolvable | undefined) {
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

export class UztnaDomainLeasePoolIpv4LeasepoolIpv4LeasepoolList extends cdktf.ComplexList {
  public internalValue? : UztnaDomainLeasePoolIpv4LeasepoolIpv4Leasepool[] | cdktf.IResolvable

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
  public get(index: number): UztnaDomainLeasePoolIpv4LeasepoolIpv4LeasepoolOutputReference {
    return new UztnaDomainLeasePoolIpv4LeasepoolIpv4LeasepoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaDomainLeasePoolIpv4Leasepool {
  /**
  * ipv4_leasepool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#ipv4_leasepool UztnaDomain#ipv4_leasepool}
  */
  readonly ipv4Leasepool: UztnaDomainLeasePoolIpv4LeasepoolIpv4Leasepool[] | cdktf.IResolvable;
}

export function uztnaDomainLeasePoolIpv4LeasepoolToTerraform(struct?: UztnaDomainLeasePoolIpv4LeasepoolOutputReference | UztnaDomainLeasePoolIpv4Leasepool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_leasepool: cdktf.listMapper(uztnaDomainLeasePoolIpv4LeasepoolIpv4LeasepoolToTerraform, true)(struct!.ipv4Leasepool),
  }
}


export function uztnaDomainLeasePoolIpv4LeasepoolToHclTerraform(struct?: UztnaDomainLeasePoolIpv4LeasepoolOutputReference | UztnaDomainLeasePoolIpv4Leasepool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_leasepool: {
      value: cdktf.listMapperHcl(uztnaDomainLeasePoolIpv4LeasepoolIpv4LeasepoolToHclTerraform, true)(struct!.ipv4Leasepool),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainLeasePoolIpv4LeasepoolIpv4LeasepoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainLeasePoolIpv4LeasepoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainLeasePoolIpv4Leasepool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Leasepool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Leasepool = this._ipv4Leasepool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainLeasePoolIpv4Leasepool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Leasepool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Leasepool.internalValue = value.ipv4Leasepool;
    }
  }

  // ipv4_leasepool - computed: false, optional: false, required: true
  private _ipv4Leasepool = new UztnaDomainLeasePoolIpv4LeasepoolIpv4LeasepoolList(this, "ipv4_leasepool", false);
  public get ipv4Leasepool() {
    return this._ipv4Leasepool;
  }
  public putIpv4Leasepool(value: UztnaDomainLeasePoolIpv4LeasepoolIpv4Leasepool[] | cdktf.IResolvable) {
    this._ipv4Leasepool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LeasepoolInput() {
    return this._ipv4Leasepool.internalValue;
  }
}
export interface UztnaDomainLeasePool {
  /**
  * ipv4_leasepool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#ipv4_leasepool UztnaDomain#ipv4_leasepool}
  */
  readonly ipv4Leasepool?: UztnaDomainLeasePoolIpv4Leasepool;
}

export function uztnaDomainLeasePoolToTerraform(struct?: UztnaDomainLeasePoolOutputReference | UztnaDomainLeasePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_leasepool: uztnaDomainLeasePoolIpv4LeasepoolToTerraform(struct!.ipv4Leasepool),
  }
}


export function uztnaDomainLeasePoolToHclTerraform(struct?: UztnaDomainLeasePoolOutputReference | UztnaDomainLeasePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_leasepool: {
      value: uztnaDomainLeasePoolIpv4LeasepoolToHclTerraform(struct!.ipv4Leasepool),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainLeasePoolIpv4LeasepoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainLeasePoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainLeasePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Leasepool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Leasepool = this._ipv4Leasepool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainLeasePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Leasepool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Leasepool.internalValue = value.ipv4Leasepool;
    }
  }

  // ipv4_leasepool - computed: false, optional: true, required: false
  private _ipv4Leasepool = new UztnaDomainLeasePoolIpv4LeasepoolOutputReference(this, "ipv4_leasepool");
  public get ipv4Leasepool() {
    return this._ipv4Leasepool;
  }
  public putIpv4Leasepool(value: UztnaDomainLeasePoolIpv4Leasepool) {
    this._ipv4Leasepool.internalValue = value;
  }
  public resetIpv4Leasepool() {
    this._ipv4Leasepool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4LeasepoolInput() {
    return this._ipv4Leasepool.internalValue;
  }
}
export interface UztnaDomainPolicyPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#name UztnaDomain#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#namespace UztnaDomain#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#tenant UztnaDomain#tenant}
  */
  readonly tenant?: string;
}

export function uztnaDomainPolicyPolicyToTerraform(struct?: UztnaDomainPolicyPolicy | cdktf.IResolvable): any {
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


export function uztnaDomainPolicyPolicyToHclTerraform(struct?: UztnaDomainPolicyPolicy | cdktf.IResolvable): any {
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

export class UztnaDomainPolicyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaDomainPolicyPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UztnaDomainPolicyPolicy | cdktf.IResolvable | undefined) {
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

export class UztnaDomainPolicyPolicyList extends cdktf.ComplexList {
  public internalValue? : UztnaDomainPolicyPolicy[] | cdktf.IResolvable

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
  public get(index: number): UztnaDomainPolicyPolicyOutputReference {
    return new UztnaDomainPolicyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaDomainPolicy {
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#policy UztnaDomain#policy}
  */
  readonly policy: UztnaDomainPolicyPolicy[] | cdktf.IResolvable;
}

export function uztnaDomainPolicyToTerraform(struct?: UztnaDomainPolicyOutputReference | UztnaDomainPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.listMapper(uztnaDomainPolicyPolicyToTerraform, true)(struct!.policy),
  }
}


export function uztnaDomainPolicyToHclTerraform(struct?: UztnaDomainPolicyOutputReference | UztnaDomainPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.listMapperHcl(uztnaDomainPolicyPolicyToHclTerraform, true)(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaDomainPolicyPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaDomainPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaDomainPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaDomainPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy.internalValue = value.policy;
    }
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new UztnaDomainPolicyPolicyList(this, "policy", false);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: UztnaDomainPolicyPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain volterra_uztna_domain}
*/
export class UztnaDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_uztna_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UztnaDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UztnaDomain to import
  * @param importFromId The id of the existing UztnaDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UztnaDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_uztna_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_domain volterra_uztna_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UztnaDomainConfig
  */
  public constructor(scope: Construct, id: string, config: UztnaDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_uztna_domain',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessFqdn = config.accessFqdn;
    this._annotations = config.annotations;
    this._appVipSubnet = config.appVipSubnet;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._appVipPool.internalValue = config.appVipPool;
    this._cert.internalValue = config.cert;
    this._gateways.internalValue = config.gateways;
    this._leasePool.internalValue = config.leasePool;
    this._policy.internalValue = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_fqdn - computed: false, optional: false, required: true
  private _accessFqdn?: string; 
  public get accessFqdn() {
    return this.getStringAttribute('access_fqdn');
  }
  public set accessFqdn(value: string) {
    this._accessFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessFqdnInput() {
    return this._accessFqdn;
  }

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

  // app_vip_subnet - computed: false, optional: false, required: true
  private _appVipSubnet?: string[]; 
  public get appVipSubnet() {
    return this.getListAttribute('app_vip_subnet');
  }
  public set appVipSubnet(value: string[]) {
    this._appVipSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appVipSubnetInput() {
    return this._appVipSubnet;
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

  // app_vip_pool - computed: false, optional: true, required: false
  private _appVipPool = new UztnaDomainAppVipPoolOutputReference(this, "app_vip_pool");
  public get appVipPool() {
    return this._appVipPool;
  }
  public putAppVipPool(value: UztnaDomainAppVipPool) {
    this._appVipPool.internalValue = value;
  }
  public resetAppVipPool() {
    this._appVipPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appVipPoolInput() {
    return this._appVipPool.internalValue;
  }

  // cert - computed: false, optional: false, required: true
  private _cert = new UztnaDomainCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: UztnaDomainCert) {
    this._cert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // gateways - computed: false, optional: false, required: true
  private _gateways = new UztnaDomainGatewaysOutputReference(this, "gateways");
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: UztnaDomainGateways) {
    this._gateways.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
  }

  // lease_pool - computed: false, optional: false, required: true
  private _leasePool = new UztnaDomainLeasePoolOutputReference(this, "lease_pool");
  public get leasePool() {
    return this._leasePool;
  }
  public putLeasePool(value: UztnaDomainLeasePool) {
    this._leasePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leasePoolInput() {
    return this._leasePool.internalValue;
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new UztnaDomainPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: UztnaDomainPolicy) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_fqdn: cdktf.stringToTerraform(this._accessFqdn),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      app_vip_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appVipSubnet),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      app_vip_pool: uztnaDomainAppVipPoolToTerraform(this._appVipPool.internalValue),
      cert: uztnaDomainCertToTerraform(this._cert.internalValue),
      gateways: uztnaDomainGatewaysToTerraform(this._gateways.internalValue),
      lease_pool: uztnaDomainLeasePoolToTerraform(this._leasePool.internalValue),
      policy: uztnaDomainPolicyToTerraform(this._policy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_fqdn: {
        value: cdktf.stringToHclTerraform(this._accessFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      app_vip_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appVipSubnet),
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
      app_vip_pool: {
        value: uztnaDomainAppVipPoolToHclTerraform(this._appVipPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaDomainAppVipPoolList",
      },
      cert: {
        value: uztnaDomainCertToHclTerraform(this._cert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaDomainCertList",
      },
      gateways: {
        value: uztnaDomainGatewaysToHclTerraform(this._gateways.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaDomainGatewaysList",
      },
      lease_pool: {
        value: uztnaDomainLeasePoolToHclTerraform(this._leasePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaDomainLeasePoolList",
      },
      policy: {
        value: uztnaDomainPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaDomainPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
